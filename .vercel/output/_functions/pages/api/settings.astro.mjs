import { r as readCloudDB, w as writeCloudDB } from '../../chunks/db_Bf1Vi0E9.mjs';
import { d as defaultSettingsData } from '../../chunks/settings_3-N7cZJs.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;

async function writeDB(data) {
  await writeCloudDB('settings', data);
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

async function GET() {
  const { data, isCloud } = await readCloudDB('settings', defaultSettingsData);
  return new Response(JSON.stringify({ settings: data, isCloud }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

async function POST({ request }) {
  try {
    const entry = await request.json();
    const { data: current } = await readCloudDB('settings', defaultSettingsData);

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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
