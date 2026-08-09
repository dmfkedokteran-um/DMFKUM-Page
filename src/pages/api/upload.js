export const prerender = false;



function formatBytes(bytes, decimals = 1) {
  if (!bytes || bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export async function POST({ request }) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file || typeof file === 'string') {
      return new Response(JSON.stringify({ error: 'No file provided' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const originalName = file.name || 'document';
    const nameParts = originalName.split('.');
    const ext = nameParts.length > 1 ? nameParts.pop() : '';
    const baseName = nameParts.join('.');

    // Sanitize filename and create unique timestamped filename
    const sanitizedBase = baseName.replace(/[^a-zA-Z0-9_-]/g, '_');
    const filename = `${Date.now()}_${sanitizedBase}${ext ? '.' + ext : ''}`;

    const fs = await import('node:fs/promises');
    const path = await import('node:path');

    // Target upload directory in public/uploads
    const targetDir = path.resolve(process.cwd(), 'public/uploads');
    await fs.mkdir(targetDir, { recursive: true });

    const filePath = path.join(targetDir, filename);
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Save physical file to disk in public/uploads/
    await fs.writeFile(filePath, buffer);

    // Dual-write to dist/client/uploads/ if running in compiled preview mode
    try {
      const distDir = path.resolve(process.cwd(), 'dist/client/uploads');
      await fs.mkdir(distDir, { recursive: true });
      await fs.writeFile(path.join(distDir, filename), buffer);
    } catch (e) {
      // Ignore if dist doesn't exist yet
    }

    const fileUrl = `/uploads/${filename}`;

    return new Response(JSON.stringify({
      success: true,
      fileUrl,
      filename,
      ext: ext.toUpperCase(),
      size: formatBytes(file.size)
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
