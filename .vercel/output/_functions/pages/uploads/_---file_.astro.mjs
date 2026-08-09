import fs from 'fs/promises';
import path from 'path';
export { renderers } from '../../renderers.mjs';

const prerender = false;

const MIME_TYPES = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  '.txt': 'text/plain'
};

async function GET({ params }) {
  try {
    const filename = params.file;
    if (!filename) {
      return new Response('File not found', { status: 404 });
    }

    // Sanitize path to prevent directory traversal
    const safeFilename = path.basename(filename);
    const filePath = path.resolve(process.cwd(), 'public/uploads', safeFilename);

    const fileBuffer = await fs.readFile(filePath);
    const ext = path.extname(safeFilename).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    return new Response(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000'
      }
    });
  } catch (error) {
    return new Response('File not found', { status: 404 });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
