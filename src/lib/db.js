import fs from 'fs/promises';
import path from 'path';

function getDbCredentials() {
  const url = process.env.UPSTASH_REDIS_REST_URL ||
              process.env.KV_REST_API_URL ||
              process.env.STORAGE_REST_API_URL ||
              process.env.STORAGE_URL ||
              process.env.KV_URL;

  const token = process.env.UPSTASH_REDIS_REST_TOKEN ||
                process.env.KV_REST_API_TOKEN ||
                process.env.STORAGE_REST_API_TOKEN ||
                process.env.STORAGE_TOKEN ||
                process.env.KV_TOKEN;

  return { url, token };
}

/**
 * Reads data from Cloud Database (Upstash Redis REST) if environment variables are set.
 * Returns { data, isCloud: boolean }.
 */
export async function readCloudDB(key, fallbackData) {
  const { url, token } = getDbCredentials();

  if (url && token) {
    try {
      const res = await fetch(`${url}/get/dmfk_${key}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const json = await res.json();
        if (json.result) {
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
 * Writes data to Cloud Database (Upstash Redis REST) if environment variables are set.
 */
export async function writeCloudDB(key, data) {
  const { url, token } = getDbCredentials();

  if (url && token) {
    try {
      // Upstash REST API command array format: ["SET", "dmfk_key", "stringified_data"]
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
