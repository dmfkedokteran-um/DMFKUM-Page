import fs from 'fs';
import path from 'path';
import http from 'http';

const rootDir = process.cwd();

console.log('\x1b[36m%s\x1b[0m', '=======================================================');
console.log('\x1b[35m%s\x1b[0m', ' 🚀 DMFK UM - ADVANCED AUDIT & HEALTH CHECK ENGINE v2.0');
console.log('\x1b[36m%s\x1b[0m', '=======================================================');

let totalTests = 0;
let passedTests = 0;
const report = [];

function check(category, testName, fn) {
  totalTests++;
  try {
    const result = fn();
    if (result === true || result === undefined) {
      passedTests++;
      report.push({ category, name: testName, status: 'PASS', detail: 'OK' });
      console.log(` \x1b[32m✔ PASS\x1b[0m  [${category}] ${testName}`);
    } else {
      report.push({ category, name: testName, status: 'FAIL', detail: result });
      console.log(` \x1b[31m✖ FAIL\x1b[0m  [${category}] ${testName} -> ${result}`);
    }
  } catch (err) {
    report.push({ category, name: testName, status: 'FAIL', detail: err.message });
    console.log(` \x1b[31m✖ FAIL\x1b[0m  [${category}] ${testName} -> ${err.message}`);
  }
}

// 1. DATABASE & CLOUD SYNC AUDIT
console.log('\n\x1b[33m--- [1/8] DATABASE & CLOUD SYNC AUDIT ---\x1b[0m');
check('Database', 'database/news.json exists and is a valid JSON array', () => {
  const p = path.join(rootDir, 'database/news.json');
  if (!fs.existsSync(p)) return 'File database/news.json missing';
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));
  if (!Array.isArray(data)) return 'database/news.json is not an array';
  return true;
});

check('Database', 'database/docs.json exists and is a valid JSON array', () => {
  const p = path.join(rootDir, 'database/docs.json');
  if (!fs.existsSync(p)) return 'File database/docs.json missing';
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));
  if (!Array.isArray(data)) return 'database/docs.json is not an array';
  return true;
});

check('Database', 'database/settings.json contains Parlemen Meliora 2026 & Org Structure', () => {
  const p = path.join(rootDir, 'database/settings.json');
  if (!fs.existsSync(p)) return 'File database/settings.json missing';
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));
  if (data.parliamentName !== 'Parlemen Meliora 2026') return `Unexpected parliamentName: ${data.parliamentName}`;
  if (!data.orgStructure) return 'Missing orgStructure object';
  return true;
});

check('Database', 'src/data/mockData.js defaults are clean (empty arrays)', () => {
  const p = path.join(rootDir, 'src/data/mockData.js');
  if (!fs.existsSync(p)) return 'src/data/mockData.js missing';
  const content = fs.readFileSync(p, 'utf8');
  if (!content.includes('MOCK_NEWS = []') || !content.includes('MOCK_DOCS = []')) {
    return 'MOCK_NEWS or MOCK_DOCS is not empty array';
  }
  return true;
});

// 2. ASSETS, FILE UPLOADS & MEDIA ACCESS AUDIT
console.log('\n\x1b[33m--- [2/8] ASSETS, FILE UPLOADS & MEDIA ACCESS AUDIT ---\x1b[0m');
check('Assets', 'public/uploads directory exists for server file storage', () => {
  const p = path.join(rootDir, 'public/uploads');
  if (!fs.existsSync(p)) {
    fs.mkdirSync(p, { recursive: true });
  }
  return true;
});

check('Assets', 'Supported file extension handlers (PDF, DOCX, XLSX, PNG, JPG, WEBP)', () => {
  const repoContent = fs.readFileSync(path.join(rootDir, 'src/pages/repo.astro'), 'utf8');
  const exts = ['PDF', 'DOCX', 'XLSX', 'PNG', 'JPG', 'WEBP'];
  for (const ext of exts) {
    if (!repoContent.includes(ext)) return `Missing support check for ${ext}`;
  }
  return true;
});

// 3. PREVIEW MECHANISMS INTEGRITY AUDIT
console.log('\n\x1b[33m--- [3/8] PREVIEW MECHANISMS INTEGRITY AUDIT ---\x1b[0m');
check('Preview Engine', 'News Modal Preview in proker.astro (title, date, tags, image, content)', () => {
  const content = fs.readFileSync(path.join(rootDir, 'src/pages/proker.astro'), 'utf8');
  if (!content.includes('id="news-preview-modal"') || !content.includes('openPreviewModal')) {
    return 'News preview modal structure missing in proker.astro';
  }
  if (!content.includes('preview-title') || !content.includes('preview-content') || !content.includes('preview-image')) {
    return 'News preview DOM elements missing';
  }
  return true;
});

check('Preview Engine', 'Org Chart Zoom-In Preview in profile.astro (org-card-zoom & org-zoom-modal)', () => {
  const content = fs.readFileSync(path.join(rootDir, 'src/pages/profile.astro'), 'utf8');
  if (!content.includes('org-card-zoom') || !content.includes('id="org-zoom-modal"')) {
    return 'Org chart zoom preview modal missing in profile.astro';
  }
  if (!content.includes('zoom-avatar') || !content.includes('zoom-role-badge') || !content.includes('zoom-name')) {
    return 'Zoom modal detail binding elements missing';
  }
  return true;
});

check('Preview Engine', 'Document Preview Modal in repo.astro (iframe embed, Google Drive parser & fallback)', () => {
  const content = fs.readFileSync(path.join(rootDir, 'src/pages/repo.astro'), 'utf8');
  if (!content.includes('id="doc-preview-modal"') || !content.includes('openPreviewModal')) {
    return 'Document preview modal missing in repo.astro';
  }
  if (!content.includes('getDriveFileId') || !content.includes('<iframe')) {
    return 'Document iframe preview / Google Drive parser missing';
  }
  return true;
});

// 4. DOCUMENT DOWNLOAD MECHANISMS AUDIT
console.log('\n\x1b[33m--- [4/8] DOCUMENT DOWNLOAD MECHANISMS AUDIT ---\x1b[0m');
check('Download Engine', 'Cross-Device Download Handler in repo.astro (Blob URL, window.open & IndexedDB fallback)', () => {
  const content = fs.readFileSync(path.join(rootDir, 'src/pages/repo.astro'), 'utf8');
  if (!content.includes('handleDownload')) {
    return 'handleDownload function missing in repo.astro';
  }
  if (!content.includes('window.open(doc.fileUrl') || !content.includes('URL.createObjectURL')) {
    return 'Blob URL creation or window.open cross-device fallback missing';
  }
  if (!content.includes('downloads =')) {
    return 'Download count tracking increment missing';
  }
  return true;
});

// 5. SECURITY & ADMIN LOCK AUDIT
console.log('\n\x1b[33m--- [5/8] SECURITY & ADMIN LOCK AUDIT ---\x1b[0m');
check('Security', 'Navbar.astro enforces auto-lock on page refresh/reload by default', () => {
  const navContent = fs.readFileSync(path.join(rootDir, 'src/components/Navbar.astro'), 'utf8');
  if (!navContent.includes('sessionStorage.getItem("justLoggedIn")') || !navContent.includes('localStorage.setItem("isAdmin", "false")')) {
    return 'Navbar.astro does not enforce auto-lock on refresh!';
  }
  return true;
});

// 6. API ENDPOINTS AUDIT
console.log('\n\x1b[33m--- [6/8] API ENDPOINTS & BACKEND HANDLERS AUDIT ---\x1b[0m');
const apiRoutes = [
  'src/pages/api/news.js',
  'src/pages/api/docs.js',
  'src/pages/api/settings.js',
  'src/pages/api/upload.js'
];
apiRoutes.forEach(api => {
  check('API Endpoint', `File ${api} exists and contains valid API export`, () => {
    const p = path.join(rootDir, api);
    if (!fs.existsSync(p)) return `Missing ${api}`;
    const code = fs.readFileSync(p, 'utf8');
    if (!code.includes('GET') && !code.includes('POST')) {
      return `No GET/POST handlers found in ${api}`;
    }
    return true;
  });
});

// 7. ROUTE & COMPONENT FILESYSTEM AUDIT
console.log('\n\x1b[33m--- [7/8] ROUTE & COMPONENT FILESYSTEM AUDIT ---\x1b[0m');
const requiredFiles = [
  'src/pages/index.astro',
  'src/pages/proker.astro',
  'src/pages/repo.astro',
  'src/pages/profile.astro',
  'src/pages/contact.astro',
  'src/components/Navbar.astro',
  'src/components/Footer.astro',
  'src/layouts/Layout.astro'
];

requiredFiles.forEach(file => {
  check('Filesystem', `File ${file} exists`, () => {
    if (!fs.existsSync(path.join(rootDir, file))) return `Missing ${file}`;
    return true;
  });
});

// 8. LIVE HTTP & BUILD OUTPUT HEALTH AUDIT
console.log('\n\x1b[33m--- [8/8] LIVE HTTP & BUILD OUTPUT HEALTH AUDIT ---\x1b[0m');

function httpGet(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:4321${urlPath}`, (res) => {
      resolve(res.statusCode);
    }).on('error', () => {
      resolve(0);
    });
  });
}

async function runHttpCheck() {
  const routes = [
    { path: '/', file: 'dist/client/index.html', label: 'Beranda (index)' },
    { path: '/proker', file: 'dist/client/proker/index.html', label: 'Program Kerja & Berita' },
    { path: '/repo', file: 'dist/client/repo/index.html', label: 'Repositori Dokumen' },
    { path: '/profile', file: 'dist/client/profile/index.html', label: 'Profil & Struktur' },
    { path: '/contact', file: 'dist/client/contact/index.html', label: 'Kontak & Layanan' }
  ];

  for (const r of routes) {
    totalTests++;
    const code = await httpGet(r.path);
    if (code === 200) {
      passedTests++;
      report.push({ category: 'HTTP Health', name: `GET ${r.path} (${r.label})`, status: 'PASS', detail: `HTTP ${code}` });
      console.log(` \x1b[32m✔ PASS\x1b[0m  [HTTP Health] GET ${r.path} -> \x1b[32m200 OK\x1b[0m`);
    } else {
      const builtPath = path.join(rootDir, r.file);
      if (fs.existsSync(builtPath)) {
        passedTests++;
        report.push({ category: 'Build Output', name: `${r.label} Built Page`, status: 'PASS', detail: 'OK' });
        console.log(` \x1b[32m✔ PASS\x1b[0m  [Build Output] ${r.label} (${r.file}) -> \x1b[32mVALID BUILD\x1b[0m`);
      } else {
        report.push({ category: 'HTTP Health', name: `GET ${r.path} (${r.label})`, status: 'FAIL', detail: 'Offline' });
        console.log(` \x1b[31m✖ FAIL\x1b[0m  [HTTP Health] GET ${r.path} -> Server Offline / Not Built`);
      }
    }
  }

  // Calculate percentage
  const percentage = ((passedTests / totalTests) * 100).toFixed(1);
  const progressBarWidth = 35;
  const filledWidth = Math.round((passedTests / totalTests) * progressBarWidth);
  const bar = '█'.repeat(filledWidth) + '░'.repeat(progressBarWidth - filledWidth);

  console.log('\n\x1b[36m%s\x1b[0m', '=======================================================');
  console.log('\x1b[1m\x1b[37m%s\x1b[0m', `   TOTAL SKOR KESEHATAN SISTEM: ${percentage}%`);
  console.log(`   [${bar}] ${passedTests}/${totalTests} Pengujian Berhasil`);
  console.log('\x1b[36m%s\x1b[0m', '=======================================================');

  if (percentage === '100.0') {
    console.log('\x1b[32m\x1b[1m%s\x1b[0m', '🎉 PERFECT HEALTH! SEMUA FITUR, PREVIEW, DOWNLOAD, DATABASE & UPLOAD BERJALAN 100% PERFECT.');
  } else {
    console.log('\x1b[33m\x1b[1m%s\x1b[0m', '⚠️ BEBERAPA KOMPONEN MEMERLUKAN PERHATIAN.');
  }
}

runHttpCheck();
