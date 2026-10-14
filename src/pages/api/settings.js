export const prerender = false;

import { readCloudDB, writeCloudDB } from '../../lib/db.js';
import defaultSettingsData from '../../../database/settings.json';

async function readDB() {
  return await readCloudDB('settings', defaultSettingsData);
}

async function writeDB(data) {
  await writeCloudDB('settings', data);
}

import { deleteUploadFile } from '../../lib/githubSync.js';

// Delete physical upload file from both local disk and GitHub
async function deletePhysicalUploadFile(fileUrl) {
  await deleteUploadFile(fileUrl);
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
  const { data, isCloud } = await readCloudDB('settings', defaultSettingsData);
  return new Response(JSON.stringify({ settings: data, isCloud }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function POST({ request }) {
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
