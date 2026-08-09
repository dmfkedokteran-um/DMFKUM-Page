import fs from 'fs/promises';
import path from 'path';
export { renderers } from '../../renderers.mjs';

const defaultNewsData = [
	{
		id: 1786252617309,
		title: "hhhhh",
		category: "advokasi",
		date: "9 Agt 2026",
		tags: [
			"kjsdnfaks"
		],
		image: "/uploads/1786252617341_30_e-paper_Tugu_Malang_22_Juli_FK_UM_Laksanakan_Edukasi.jpg",
		excerpt: "ini adalah tes",
		content: "jadi bisa dites apakah berhasil atau tidak"
	}
];

const DB_PATH = path.resolve(process.cwd(), 'database/news.json');

// Helper to read database
async function readDB() {
  try {
    const data = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return defaultNewsData;
  }
}

// Helper to write database
async function writeDB(data) {
  try {
    await fs.mkdir(path.dirname(DB_PATH), { recursive: true });
    await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
  } catch (e) {
    // Graceful fallback for read-only serverless environments
  }
}

// Delete physical cover image file if present in uploads
async function deletePhysicalUploadFile(fileUrl) {
  if (!fileUrl || typeof fileUrl !== 'string' || !fileUrl.startsWith('/uploads/')) return;
  const fileName = fileUrl.replace('/uploads/', '');
  const publicPath = path.resolve(process.cwd(), 'public/uploads', fileName);
  const distPath = path.resolve(process.cwd(), 'dist/client/uploads', fileName);

  try { await fs.unlink(publicPath); } catch (e) {}
  try { await fs.unlink(distPath); } catch (e) {}
}

async function GET() {
  const news = await readDB();
  return new Response(JSON.stringify(news), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

async function POST({ request }) {
  try {
    const entry = await request.json();
    const news = await readDB();

    let updatedNews;
    if (entry.id) {
      // Find existing item to clean up replaced cover image
      const existing = news.find(item => item.id === entry.id);
      if (existing && existing.image !== entry.image) {
        await deletePhysicalUploadFile(existing.image);
      }
      updatedNews = news.map(item => item.id === entry.id ? { ...item, ...entry } : item);
    } else {
      const newEntry = {
        ...entry,
        id: Date.now().toString(),
        date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
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

async function DELETE({ request }) {
  try {
    const { id } = await request.json();
    const news = await readDB();
    
    // Find target item to delete cover image file from server disk
    const target = news.find(item => item.id === id);
    if (target && target.image) {
      await deletePhysicalUploadFile(target.image);
    }

    const updatedNews = news.filter(item => item.id !== id);
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
