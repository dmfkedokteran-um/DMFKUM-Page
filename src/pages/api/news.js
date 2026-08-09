import fs from 'fs/promises';
import path from 'path';

const DB_PATH = path.resolve(process.cwd(), 'database/news.json');

// Helper to read database
async function readDB() {
  try {
    const data = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Helper to write database
async function writeDB(data) {
  await fs.mkdir(path.dirname(DB_PATH), { recursive: true });
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

// Helper to delete physical upload file from disk
async function deletePhysicalUploadFile(fileUrl) {
  if (!fileUrl || typeof fileUrl !== 'string' || !fileUrl.startsWith('/uploads/')) return;
  const fileName = fileUrl.replace('/uploads/', '');
  const publicPath = path.resolve(process.cwd(), 'public/uploads', fileName);
  const distPath = path.resolve(process.cwd(), 'dist/client/uploads', fileName);

  try { await fs.unlink(publicPath); } catch (e) {}
  try { await fs.unlink(distPath); } catch (e) {}
}

export async function GET() {
  const news = await readDB();
  return new Response(JSON.stringify(news), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export async function POST({ request }) {
  try {
    const entry = await request.json();
    const news = await readDB();
    
    const index = news.findIndex(item => item.id === entry.id);
    if (index !== -1) {
      // Check if image was replaced and delete old file if it was a local upload
      const oldImage = news[index].image;
      if (oldImage && oldImage !== entry.image) {
        await deletePhysicalUploadFile(oldImage);
      }
      news[index] = { ...news[index], ...entry };
    } else {
      // Add new news item
      news.unshift(entry);
    }
    
    await writeDB(news);
    return new Response(JSON.stringify({ success: true, item: entry }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

export async function DELETE({ url }) {
  try {
    const id = parseInt(url.searchParams.get('id') || '');
    
    if (!id) {
      return new Response(JSON.stringify({ error: 'Missing ID parameter' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    let news = await readDB();
    const targetItem = news.find(item => item.id === id);
    
    if (targetItem && targetItem.image) {
      await deletePhysicalUploadFile(targetItem.image);
    }

    news = news.filter(item => item.id !== id);
    
    await writeDB(news);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
