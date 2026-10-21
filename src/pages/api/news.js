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

import { deleteUploadFile } from '../../lib/githubSync.js';

// Delete physical cover image file if present in uploads & GitHub
async function deletePhysicalUploadFile(fileUrl) {
  await deleteUploadFile(fileUrl);
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
    if (!entry || typeof entry !== 'object' || !entry.title || typeof entry.title !== 'string' || !entry.title.trim()) {
      return new Response(JSON.stringify({ error: 'Judul berita wajib diisi.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { data: news } = await readCloudDB('news', defaultNewsData);

    // Check if an item with this ID actually exists (for edit vs new)
    const existing = entry.id ? news.find(item => String(item.id) === String(entry.id)) : null;

    let updatedNews;
    if (existing) {
      // Edit: replace existing item
      if (existing.image && existing.image !== entry.image && typeof existing.image === 'string' && existing.image.startsWith('/uploads/')) {
        const isShared = news.some(item => String(item.id) !== String(existing.id) && item.image === existing.image);
        if (!isShared) {
          await deletePhysicalUploadFile(existing.image);
        }
      }
      updatedNews = news.map(item => String(item.id) === String(entry.id) ? { ...item, ...entry, title: entry.title.trim() } : item);
    } else {
      // New entry - stacked at the front
      const newEntry = {
        ...entry,
        title: entry.title.trim(),
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
    const body = await request.json();
    const id = body?.id;
    if (!id) {
      return new Response(JSON.stringify({ error: 'ID berita wajib disertakan.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    const { data: news } = await readCloudDB('news', defaultNewsData);
    
    // Find target item to delete cover image file from server disk only if not shared
    const target = news.find(item => String(item.id) === String(id));
    if (target && target.image && typeof target.image === 'string' && target.image.startsWith('/uploads/')) {
      const isShared = news.some(item => String(item.id) !== String(target.id) && item.image === target.image);
      if (!isShared) {
        await deletePhysicalUploadFile(target.image);
      }
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
