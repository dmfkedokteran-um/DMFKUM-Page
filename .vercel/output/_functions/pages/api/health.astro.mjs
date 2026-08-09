import { g as getDbCredentials } from '../../chunks/db_DX2jmjHT.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;

async function GET() {
  let hasUrl = false;
  let hasToken = false;
  let urlPreview = null;
  let rawResponse = null;
  let fetchError = null;
  let kvKeys = [];

  try {
    const { url, token } = getDbCredentials();
    hasUrl = !!url;
    hasToken = !!token;
    urlPreview = url ? url.substring(0, 30) + '...' : null;

    const allEnvKeys = Object.keys(process.env || {});
    kvKeys = allEnvKeys.filter(k => 
      k.includes('KV') || k.includes('REDIS') || k.includes('UPSTASH') || k.includes('STORAGE')
    );

    if (url && token && (url.startsWith('http://') || url.startsWith('https://'))) {
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
  } catch (err) {
    fetchError = String(err);
  }

  return new Response(JSON.stringify({
    status: 'ok',
    hasUrl,
    hasToken,
    urlPreview,
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
