import fs from 'fs/promises';
import path from 'path';

/**
 * Reads data from Cloud Database (Upstash Redis REST) if environment variables are set,
 * otherwise falls back to reading local JSON files in /database/ folder.
 */
export async function readCloudDB(key, fallbackData) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (url && token) {
    try {
      const res = await fetch(`${url}/get/dmfk_${key}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const json = await res.json();
        if (json.result) {
          const parsed = typeof json.result === 'string' ? JSON.parse(json.result) : json.result;
          return parsed;
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
    return JSON.parse(data);
  } catch (e) {
    return fallbackData;
  }
}

/**
 * Writes data to Cloud Database (Upstash Redis REST) if environment variables are set,
 * and updates local JSON files in /database/ if local environment allows.
 */
export async function writeCloudDB(key, data) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (url && token) {
    try {
      await fetch(`${url}/set/dmfk_${key}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(JSON.stringify(data))
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
