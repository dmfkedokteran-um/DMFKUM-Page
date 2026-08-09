import { readCloudDB } from '../../lib/db.js';

export async function GET() {
  const envKeys = Object.keys(process.env).filter(k => 
    k.includes('STORAGE') || k.includes('KV') || k.includes('REDIS') || k.includes('UPSTASH')
  );

  const { isCloud } = await readCloudDB('news', []);

  return new Response(JSON.stringify({
    status: 'ok',
    isCloudConnected: isCloud,
    foundEnvKeys: envKeys
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
