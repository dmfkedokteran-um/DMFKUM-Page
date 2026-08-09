import { r as readCloudDB, w as writeCloudDB } from '../../chunks/db_DX2jmjHT.mjs';
import { d as defaultDocsData } from '../../chunks/docs_CiNyoO0-.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;

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

async function GET() {
  const { data, isCloud } = await readCloudDB('docs', defaultDocsData);
  return new Response(JSON.stringify({ docs: data, isCloud }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

async function POST({ request }) {
  try {
    const entry = await request.json();
    const { data: docs } = await readCloudDB('docs', defaultDocsData);

    let updatedDocs;
    if (entry.id) {
      // Find existing item to clean up replaced physical document file
      const existing = docs.find(item => item.id === entry.id);
      if (existing && existing.fileUrl !== entry.fileUrl) {
        await deletePhysicalUploadFile(existing.fileUrl);
      }
      updatedDocs = docs.map(item => item.id === entry.id ? { ...item, ...entry } : item);
    } else {
      const newEntry = {
        ...entry,
        id: Date.now().toString(),
        downloads: 0,
        date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
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

async function DELETE({ request }) {
  try {
    const { id } = await request.json();
    const { data: docs } = await readCloudDB('docs', defaultDocsData);
    
    // Find target document item to delete physical file from server disk
    const target = docs.find(item => item.id === id);
    if (target && target.fileUrl) {
      await deletePhysicalUploadFile(target.fileUrl);
    }

    const updatedDocs = docs.filter(item => item.id !== id);
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
