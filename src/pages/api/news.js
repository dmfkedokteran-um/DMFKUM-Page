export const prerender = false;

import { readCloudDB, writeCloudDB } from '../../lib/db.js';
import defaultNewsData from '../../../database/news.json';

// Helper to read database
async function readDB() {
  return await readCloudDB('news', defaultNewsData);
}

// Helper to write database
async function writeDB(data) {
  await writeCloudDB('news', data);
}

// Delete physical cover image file if present in uploads
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
  const { data, isCloud } = await readCloudDB('news', defaultNewsData);
  return new Response(JSON.stringify({ news: data, isCloud }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function POST({ request }) {
  try {
    const entry = await request.json();
    const { data: news } = await readCloudDB('news', defaultNewsData);

    // Check if an item with this ID actually exists (for edit vs new)
    const existing = entry.id ? news.find(item => String(item.id) === String(entry.id)) : null;

    let updatedNews;
    if (existing) {
      // Edit: replace existing item
      if (existing.image !== entry.image) {
        await deletePhysicalUploadFile(existing.image);
      }
      updatedNews = news.map(item => String(item.id) === String(entry.id) ? { ...item, ...entry } : item);
    } else {
      // New entry
      const newEntry = {
        ...entry,
        id: entry.id || Date.now(),
        date: entry.date || new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
      };
      updatedNews = [newEntry, ...news];
    }

    await writeDB(updatedNews);
    return new Response(JSON.stringify({ success: true, news: updatedNews }), {
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
    const { data: news } = await readCloudDB('news', defaultNewsData);
    
    // Find target item to delete cover image file from server disk
    const target = news.find(item => String(item.id) === String(id));
    if (target && target.image) {
      await deletePhysicalUploadFile(target.image);
    }

    const updatedNews = news.filter(item => String(item.id) !== String(id));
    await writeDB(updatedNews);

    return new Response(JSON.stringify({ success: true, news: updatedNews }), {
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
