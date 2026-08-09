export const prerender = false;

// Completely standalone - no imports whatsoever
export async function GET() {
  const result = {};

  try {
    // Collect all env keys
    result.allEnvCount = Object.keys(process.env || {}).length;
    result.kvKeys = Object.keys(process.env || {}).filter(k =>
      k.includes('KV') || k.includes('REDIS') || k.includes('UPSTASH') || k.includes('STORAGE')
    );

    // Find REST URL
    let url = null;
    let token = null;

    for (const [key, val] of Object.entries(process.env || {})) {
      if (!val || typeof val !== 'string') continue;
      const k = key.toUpperCase();
      if (!url && (k.includes('KV') || k.includes('UPSTASH') || k.includes('REDIS') || k.includes('STORAGE')) && k.includes('URL') && val.startsWith('https://')) {
        url = val;
      }
      if (!token && (k.includes('KV') || k.includes('UPSTASH') || k.includes('REDIS') || k.includes('STORAGE')) && (k.includes('TOKEN') || k.includes('SECRET')) && val.length > 10) {
        token = val;
      }
    }

    result.hasUrl = !!url;
    result.hasToken = !!token;
    result.urlPreview = url ? url.substring(0, 35) + '...' : null;

    if (url && token) {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(['GET', 'dmfk_news'])
      });
      const text = await res.text();
      result.httpStatus = res.status;
      result.body = text.substring(0, 200);
      result.isCloudConnected = res.ok;
    } else {
      result.isCloudConnected = false;
      result.note = 'No Upstash/KV REST credentials found in environment';
    }
  } catch (err) {
    result.error = String(err && err.stack ? err.stack : err);
    result.isCloudConnected = false;
  }

  return new Response(JSON.stringify({ status: 'ok', ...result }, null, 2), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
