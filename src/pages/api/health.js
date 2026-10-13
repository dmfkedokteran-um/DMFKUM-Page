export const prerender = false;

export async function GET() {
  const result = {
    status: 'ok',
    timestamp: new Date().toISOString()
  };

  try {
    // 1. Check Firebase Realtime Database
    let firebaseUrl = process.env.FIREBASE_DATABASE_URL ||
                      process.env.FIREBASE_URL ||
                      process.env.FIREBASE_RTDB_URL ||
                      process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL;
    let firebaseSecret = process.env.FIREBASE_DATABASE_SECRET ||
                         process.env.FIREBASE_AUTH_TOKEN ||
                         process.env.FIREBASE_SECRET ||
                         process.env.FIREBASE_TOKEN;

    if (firebaseUrl && typeof firebaseUrl === 'string') {
      firebaseUrl = firebaseUrl.trim().replace(/\/+$/, '');
      if (!firebaseUrl.startsWith('http://') && !firebaseUrl.startsWith('https://')) {
        firebaseUrl = `https://${firebaseUrl}`;
      }
      result.firebase = {
        hasUrl: true,
        hasSecret: !!firebaseSecret,
        urlPreview: firebaseUrl.substring(0, 35) + '...'
      };

      try {
        const testUrl = firebaseSecret
          ? `${firebaseUrl}/dmfk_health.json?auth=${encodeURIComponent(firebaseSecret)}`
          : `${firebaseUrl}/dmfk_health.json`;

        const fbRes = await fetch(testUrl);
        result.firebase.httpStatus = fbRes.status;
        result.firebase.connected = fbRes.ok;
      } catch (fbErr) {
        result.firebase.connected = false;
        result.firebase.error = fbErr.message;
      }
    } else {
      result.firebase = { hasUrl: false, connected: false };
    }

    // 2. Check Upstash / KV
    let redisUrl = process.env.UPSTASH_REDIS_REST_URL ||
                   process.env.KV_REST_API_URL ||
                   process.env.STORAGE_KV_REST_API_URL ||
                   process.env.STORAGE_REST_API_URL;
    let redisToken = process.env.UPSTASH_REDIS_REST_TOKEN ||
                     process.env.KV_REST_API_TOKEN ||
                     process.env.STORAGE_KV_REST_API_TOKEN ||
                     process.env.STORAGE_REST_API_TOKEN;

    if (redisUrl && redisToken) {
      result.redis = {
        hasUrl: true,
        hasToken: true,
        urlPreview: redisUrl.substring(0, 35) + '...'
      };
      try {
        const redRes = await fetch(redisUrl, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${redisToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(['GET', 'dmfk_health'])
        });
        result.redis.httpStatus = redRes.status;
        result.redis.connected = redRes.ok;
      } catch (redErr) {
        result.redis.connected = false;
        result.redis.error = redErr.message;
      }
    } else {
      result.redis = { hasUrl: false, connected: false };
    }

    // Determine final cloud status and active provider
    if (result.firebase && result.firebase.connected) {
      result.isCloudConnected = true;
      result.activeProvider = 'firebase';
    } else if (result.redis && result.redis.connected) {
      result.isCloudConnected = true;
      result.activeProvider = 'redis';
    } else {
      result.isCloudConnected = false;
      result.activeProvider = 'local_json';
    }
  } catch (err) {
    result.error = String(err && err.stack ? err.stack : err);
    result.isCloudConnected = false;
    result.activeProvider = 'local_json';
  }

  return new Response(JSON.stringify(result, null, 2), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
