import fs from 'fs/promises';
import path from 'path';

const DB_PATH = path.resolve(process.cwd(), 'database/docs.json');

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
  const docs = await readDB();
  return new Response(JSON.stringify(docs), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export async function POST({ request }) {
  try {
    const entry = await request.json();
    const docs = await readDB();
    
    const index = docs.findIndex(doc => doc.id === entry.id);
    if (index !== -1) {
      // Check if fileUrl or coverImage changed and delete old file if it was a local upload
      const oldDoc = docs[index];
      if (oldDoc.fileUrl && oldDoc.fileUrl !== entry.fileUrl) {
        await deletePhysicalUploadFile(oldDoc.fileUrl);
      }
      if (oldDoc.coverImage && oldDoc.coverImage !== entry.coverImage) {
        await deletePhysicalUploadFile(oldDoc.coverImage);
      }

      docs[index] = { ...docs[index], ...entry };
    } else {
      // Add new document at the beginning
      docs.unshift(entry);
    }
    
    await writeDB(docs);
    return new Response(JSON.stringify({ success: true, doc: entry }), {
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
    
    let docs = await readDB();
    const targetDoc = docs.find(doc => doc.id === id);

    if (targetDoc) {
      if (targetDoc.fileUrl) await deletePhysicalUploadFile(targetDoc.fileUrl);
      if (targetDoc.coverImage) await deletePhysicalUploadFile(targetDoc.coverImage);
    }

    docs = docs.filter(doc => doc.id !== id);
    
    await writeDB(docs);
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
