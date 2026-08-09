import { readCloudDB } from '../../lib/db.js';

export async function GET() {
  const url = process.env.UPSTASH_REDIS_REST_URL ||
              process.env.KV_REST_API_URL ||
              process.env.STORAGE_KV_REST_API_URL ||
              process.env.STORAGE_REST_API_URL ||
              process.env.STORAGE_URL ||
              process.env.KV_URL || '';

  const token = process.env.UPSTASH_REDIS_REST_TOKEN ||
                process.env.KV_REST_API_TOKEN ||
                process.env.STORAGE_KV_REST_API_TOKEN ||
                process.env.STORAGE_REST_API_TOKEN ||
                process.env.STORAGE_TOKEN ||
                process.env.KV_TOKEN || '';

  const { data, isCloud } = await readCloudDB('news', []);

  return new Response(JSON.stringify({
    status: 'ok',
    isCloudConnected: isCloud,
    hasUrl: !!url,
    hasToken: !!token,
    urlHost: url ? new URL(url).hostname : null,
    itemsCount: Array.isArray(data) ? data.length : 0
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
