export const prerender = false;

import { readCloudDB, writeCloudDB } from '../../lib/db.js';
import defaultDocsData from '../../../database/docs.json';

// Helper to read database
async function readDB() {
  return await readCloudDB('docs', defaultDocsData);
}

// Helper to write database
async function writeDB(data) {
  await writeCloudDB('docs', data);
}

// Delete physical upload file from disk
async function deletePhysicalUploadFile(fileUrl) {
  if (!fileUrl || typeof fileUrl !== 'string' || !fileUrl.startsWith('/uploads/')) return;
  try {
    const fs = await import('node:fs/promises');
    const path = await import('node:path');
    const fileName = fileUrl.replace('/uploads/', '');
    const publicPath = path.resolve(process.cwd(), 'public/uploads', fileName);
    const distPath = path.resolve(process.cwd(), 'dist/client/uploads', fileName);

    try { await fs.unlink(publicPath); } catch (e) {}
    try { await fs.unlink(distPath); } catch (e) {}
  } catch (_) {}
}

export async function GET() {
  const { data, isCloud } = await readCloudDB('docs', defaultDocsData);
  return new Response(JSON.stringify({ docs: data, isCloud }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function POST({ request }) {
  try {
    const entry = await request.json();
    const { data: docs } = await readCloudDB('docs', defaultDocsData);

    // Check if an item with this ID actually exists (for edit vs new)
    const existing = entry.id ? docs.find(item => String(item.id) === String(entry.id)) : null;

    let updatedDocs;
    if (existing) {
      // Edit: replace existing item
      if (existing.fileUrl !== entry.fileUrl) {
        await deletePhysicalUploadFile(existing.fileUrl);
      }
      updatedDocs = docs.map(item => String(item.id) === String(entry.id) ? { ...item, ...entry } : item);
    } else {
      // New entry
      const newEntry = {
        ...entry,
        id: entry.id || Date.now(),
        downloads: 0,
        date: entry.date || new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
      };
      updatedDocs = [newEntry, ...docs];
    }

    await writeDB(updatedDocs);
    return new Response(JSON.stringify({ success: true, docs: updatedDocs }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function DELETE({ request }) {
  try {
    const { id } = await request.json();
    const { data: docs } = await readCloudDB('docs', defaultDocsData);
    
    // Find target document item to delete physical file from server disk
    const target = docs.find(item => String(item.id) === String(id));
    if (target && target.fileUrl) {
      await deletePhysicalUploadFile(target.fileUrl);
    }

    const updatedDocs = docs.filter(item => String(item.id) !== String(id));
    await writeDB(updatedDocs);

    return new Response(JSON.stringify({ success: true, docs: updatedDocs }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
