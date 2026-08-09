import { g as getDbCredentials } from '../../chunks/db_BvO21iA9.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;

async function GET() {
  const { url, token } = getDbCredentials();

  let rawResponse = null;
  let fetchError = null;

  if (url && token) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(["GET", "dmfk_news"])
      });

      const text = await res.text();
      rawResponse = { status: res.status, text };
    } catch (err) {
      fetchError = String(err);
    }
  }

  const allEnvKeys = Object.keys(process.env);
  const kvKeys = allEnvKeys.filter(k => 
    k.includes('KV') || k.includes('REDIS') || k.includes('UPSTASH') || k.includes('STORAGE')
  );

  return new Response(JSON.stringify({
    status: 'ok',
    hasUrl: !!url,
    hasToken: !!token,
    urlPreview: url ? url.substring(0, 25) + '...' : null,
    foundKvKeys: kvKeys,
    rawResponse,
    fetchError,
    isCloudConnected: !!(rawResponse && rawResponse.status === 200)
  }, null, 2), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
