import fs from 'fs/promises';
import path from 'path';

const DB_PATH = path.resolve(process.cwd(), 'database/settings.json');

const DEFAULT_SETTINGS = {
  heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80",
  orgBgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80",
  heroTitle: "Membangun Sinergi,\nMenginspirasi Negeri.",
  heroSubtitle: "Jelajahi portal kami. Temukan pembaruan terkini, rekam jejak program kerja, dan akses dokumen publik secara instan."
};

async function readDB() {
  try {
    const data = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return DEFAULT_SETTINGS;
  }
}

async function writeDB(data) {
  await fs.mkdir(path.dirname(DB_PATH), { recursive: true });
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

// Delete physical upload file from both public/uploads and dist/client/uploads
async function deletePhysicalUploadFile(fileUrl) {
  if (!fileUrl || typeof fileUrl !== 'string' || !fileUrl.startsWith('/uploads/')) return;
  const fileName = fileUrl.replace('/uploads/', '');
  const publicPath = path.resolve(process.cwd(), 'public/uploads', fileName);
  const distPath = path.resolve(process.cwd(), 'dist/client/uploads', fileName);

  try { await fs.unlink(publicPath); } catch (e) {}
  try { await fs.unlink(distPath); } catch (e) {}
}

// Recursively find all /uploads/... URLs inside any nested object/array
function collectUploadUrls(obj, set = new Set()) {
  if (!obj) return set;
  if (typeof obj === 'string') {
    if (obj.startsWith('/uploads/')) set.add(obj);
  } else if (Array.isArray(obj)) {
    obj.forEach(item => collectUploadUrls(item, set));
  } else if (typeof obj === 'object') {
    Object.values(obj).forEach(val => collectUploadUrls(val, set));
  }
  return set;
}

export async function GET() {
  const settings = await readDB();
  return new Response(JSON.stringify(settings), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function POST({ request }) {
  try {
    const entry = await request.json();
    const current = await readDB();

    const currentUrls = collectUploadUrls(current);
    const updated = { ...current, ...entry };
    const updatedUrls = collectUploadUrls(updated);

    // Delete any upload file URL that was in current settings but is no longer present in updated settings
    for (const url of currentUrls) {
      if (!updatedUrls.has(url)) {
        await deletePhysicalUploadFile(url);
      }
    }

    await writeDB(updated);
    return new Response(JSON.stringify({ success: true, settings: updated }), {
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
