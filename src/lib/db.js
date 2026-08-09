import fs from 'fs/promises';
import path from 'path';

function getDbCredentials() {
  let url = process.env.UPSTASH_REDIS_REST_URL ||
            process.env.KV_REST_API_URL ||
            process.env.STORAGE_KV_REST_API_URL ||
            process.env.STORAGE_REST_API_URL ||
            process.env.STORAGE_URL ||
            process.env.KV_URL;

  let token = process.env.UPSTASH_REDIS_REST_TOKEN ||
              process.env.KV_REST_API_TOKEN ||
              process.env.STORAGE_KV_REST_API_TOKEN ||
              process.env.STORAGE_REST_API_TOKEN ||
              process.env.STORAGE_TOKEN ||
              process.env.KV_TOKEN;

  // Dynamic fallback scanner over process.env if standard names differ
  if (!url || !token) {
    for (const [key, value] of Object.entries(process.env)) {
      if (!value || typeof value !== 'string') continue;
      const upper = key.toUpperCase();
      if (!url && (upper.includes('STORAGE') || upper.includes('KV') || upper.includes('REDIS') || upper.includes('UPSTASH')) && upper.includes('URL')) {
        if (value.startsWith('http://') || value.startsWith('https://')) {
          url = value;
        }
      }
      if (!token && (upper.includes('STORAGE') || upper.includes('KV') || upper.includes('REDIS') || upper.includes('UPSTASH')) && (upper.includes('TOKEN') || upper.includes('KEY') || upper.includes('SECRET'))) {
        if (value.length > 15) {
          token = value;
        }
      }
    }
  }

  return { url, token };
}

/**
 * Reads data from Cloud Database (Upstash Redis REST / Vercel KV) if environment variables are set.
 * Returns { data, isCloud: boolean }.
 */
export async function readCloudDB(key, fallbackData) {
  const { url, token } = getDbCredentials();

  if (url && token) {
    try {
      // POST with ["GET", "dmfk_key"] works reliably across Upstash & Vercel KV REST APIs
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(["GET", `dmfk_${key}`])
      });

      if (res.ok) {
        const json = await res.json();
        if (json && json.result !== undefined && json.result !== null) {
          const parsed = typeof json.result === 'string' ? JSON.parse(json.result) : json.result;
          return { data: parsed, isCloud: true };
        }
      }
    } catch (err) {
      console.error(`[CloudDB] GET dmfk_${key} error:`, err);
    }
  }

  // Local filesystem fallback
  try {
    const filePath = path.resolve(process.cwd(), `database/${key}.json`);
    const data = await fs.readFile(filePath, 'utf-8');
    return { data: JSON.parse(data), isCloud: false };
  } catch (e) {
    return { data: fallbackData, isCloud: false };
  }
}

/**
 * Writes data to Cloud Database (Upstash Redis REST / Vercel KV) if environment variables are set.
 */
export async function writeCloudDB(key, data) {
  const { url, token } = getDbCredentials();

  if (url && token) {
    try {
      // POST with ["SET", "dmfk_key", stringified_value] works reliably across Upstash & Vercel KV REST APIs
      await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(["SET", `dmfk_${key}`, JSON.stringify(data)])
      });
    } catch (err) {
      console.error(`[CloudDB] SET dmfk_${key} error:`, err);
    }
  }

  // Local filesystem fallback write
  try {
    const filePath = path.resolve(process.cwd(), `database/${key}.json`);
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (e) {}
}
