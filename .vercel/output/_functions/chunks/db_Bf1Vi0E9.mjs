function getDbCredentials() {
  let url = process.env.UPSTASH_REDIS_REST_URL ||
            process.env.KV_REST_API_URL ||
            process.env.STORAGE_KV_REST_API_URL ||
            process.env.STORAGE_REST_API_URL ||
            process.env.STORAGE_URL;

  let token = process.env.UPSTASH_REDIS_REST_TOKEN ||
              process.env.KV_REST_API_TOKEN ||
              process.env.STORAGE_KV_REST_API_TOKEN ||
              process.env.STORAGE_REST_API_TOKEN ||
              process.env.STORAGE_TOKEN;

  // Enforce HTTP/HTTPS REST endpoint URL only
  if (url && typeof url === 'string' && !url.startsWith('http://') && !url.startsWith('https://')) {
    url = null;
  }

  // Dynamic fallback scanner over process.env if standard names differ
  if (!url || !token) {
    for (const [key, value] of Object.entries(process.env || {})) {
      if (!value || typeof value !== 'string') continue;
      const upper = key.toUpperCase();
      if (!url && upper.includes('REST') && upper.includes('URL')) {
        if (value.startsWith('http://') || value.startsWith('https://')) {
          url = value;
        }
      }
      if (!token && upper.includes('REST') && (upper.includes('TOKEN') || upper.includes('KEY'))) {
        if (!upper.includes('READ_ONLY') && value.length > 15) {
          token = value;
        }
      }
    }
  }

  return { url, token };
}

/**
 * Reads data from Cloud Database (Upstash Redis REST / Vercel KV).
 * Returns { data, isCloud: boolean }.
 */
async function readCloudDB(key, fallbackData) {
  try {
    const { url, token } = getDbCredentials();

    if (url && token && (url.startsWith('http://') || url.startsWith('https://'))) {
      try {
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
          // Connection is active (HTTP 200), but key doesn't exist in Redis yet
          return { data: fallbackData, isCloud: true };
        }
      } catch (err) {
        console.error(`[CloudDB] GET dmfk_${key} fetch error:`, err);
      }
    }
  } catch (globalErr) {
    console.error(`[CloudDB] GET dmfk_${key} global error:`, globalErr);
  }

  // Local filesystem fallback (dynamic import for serverless compatibility)
  try {
    const fs = await import('node:fs/promises');
    const path = await import('node:path');
    const filePath = path.resolve(process.cwd(), `database/${key}.json`);
    const data = await fs.readFile(filePath, 'utf-8');
    return { data: JSON.parse(data), isCloud: false };
  } catch (e) {
    return { data: fallbackData, isCloud: false };
  }
}

/**
 * Writes data to Cloud Database (Upstash Redis REST / Vercel KV).
 */
async function writeCloudDB(key, data) {
  try {
    const { url, token } = getDbCredentials();

    if (url && token && (url.startsWith('http://') || url.startsWith('https://'))) {
      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(["SET", `dmfk_${key}`, JSON.stringify(data)])
        });
        const resJson = await res.json();
        console.log(`[CloudDB] SET dmfk_${key} status: ${res.status}`, resJson);
      } catch (err) {
        console.error(`[CloudDB] SET dmfk_${key} fetch error:`, err);
      }
    }
  } catch (globalErr) {
    console.error(`[CloudDB] SET dmfk_${key} global error:`, globalErr);
  }

  // Local filesystem fallback write (dynamic import for serverless compatibility)
  try {
    const fs = await import('node:fs/promises');
    const path = await import('node:path');
    const filePath = path.resolve(process.cwd(), `database/${key}.json`);
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (e) {}
}

export { readCloudDB as r, writeCloudDB as w };
