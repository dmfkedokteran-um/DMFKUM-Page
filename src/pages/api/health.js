export const prerender = false;

export async function GET() {
  try {
    const envKeys = Object.keys(process.env || {});
    const kvKeys = envKeys.filter(k => 
      k.includes('KV') || k.includes('REDIS') || k.includes('UPSTASH') || k.includes('STORAGE')
    );

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

    let isCloudConnected = false;
    let statusMsg = "No cloud credentials found in process.env";
    let rawResult = null;

    if (url && token) {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(["GET", "dmfk_news"])
      });

      const text = await res.text();
      rawResult = { httpStatus: res.status, body: text };
      if (res.ok) {
        isCloudConnected = true;
        statusMsg = "Successfully connected to Vercel KV Cloud DB";
      } else {
        statusMsg = `HTTP Error ${res.status}: ${text}`;
      }
    }

    return new Response(JSON.stringify({
      status: 'ok',
      statusMsg,
      isCloudConnected,
      hasUrl: !!url,
      hasToken: !!token,
      urlPreview: url ? url.substring(0, 30) + '...' : null,
      foundKvKeys: kvKeys,
      rawResult
    }, null, 2), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({
      status: 'error',
      error: String(err && err.stack ? err.stack : err)
    }, null, 2), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
