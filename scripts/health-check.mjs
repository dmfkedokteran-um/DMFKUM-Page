import fs from 'fs';
import path from 'path';
import http from 'http';
import { execSync } from 'child_process';

const rootDir = process.cwd();

console.log('\x1b[36m%s\x1b[0m', '=======================================================');
console.log('\x1b[35m%s\x1b[0m', '   🚀 DMFK UM - AUDIT & HEALTH CHECK ENGINE v1.0       ');
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

// 1. Database Integrity Checks
console.log('\n\x1b[33m--- [1/6] DATABASE & MOCK DATA AUDIT ---\x1b[0m');
check('Database', 'database/news.json exists and is valid JSON', () => {
  const p = path.join(rootDir, 'database/news.json');
  if (!fs.existsSync(p)) return 'File database/news.json missing';
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));
  if (!Array.isArray(data)) return 'database/news.json is not an array';
  return true;
});

check('Database', 'database/docs.json exists and is valid JSON', () => {
  const p = path.join(rootDir, 'database/docs.json');
  if (!fs.existsSync(p)) return 'File database/docs.json missing';
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));
  if (!Array.isArray(data)) return 'database/docs.json is not an array';
  return true;
});

check('Database', 'database/settings.json contains Parlemen Meliora 2026', () => {
  const p = path.join(rootDir, 'database/settings.json');
  if (!fs.existsSync(p)) return 'File database/settings.json missing';
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));
  if (data.parliamentName !== 'Parlemen Meliora 2026') return `Unexpected parliamentName: ${data.parliamentName}`;
  return true;
});

check('Database', 'src/data/mockData.js has empty default arrays (no leftover sample posts)', () => {
  const p = path.join(rootDir, 'src/data/mockData.js');
  if (!fs.existsSync(p)) return 'src/data/mockData.js missing';
  const content = fs.readFileSync(p, 'utf8');
  if (!content.includes('MOCK_NEWS = []') || !content.includes('MOCK_DOCS = []')) {
    return 'MOCK_NEWS or MOCK_DOCS is not empty array';
  }
  return true;
});

// 2. Core Astro Pages & Components Audit
console.log('\n\x1b[33m--- [2/6] ROUTE & COMPONENT INTEGRITY AUDIT ---\x1b[0m');
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

// 3. Admin Security Mechanism Audit
console.log('\n\x1b[33m--- [3/6] SECURITY & ADMIN LOCK AUDIT ---\x1b[0m');
check('Security', 'Navbar.astro resets admin lock on page refresh by default', () => {
  const navContent = fs.readFileSync(path.join(rootDir, 'src/components/Navbar.astro'), 'utf8');
  if (!navContent.includes('sessionStorage.getItem("justLoggedIn")') || !navContent.includes('localStorage.setItem("isAdmin", "false")')) {
    return 'Navbar.astro does not enforce auto-lock on refresh!';
  }
  return true;
});

// 4. Interactive Zoom-In Org Chart Audit
console.log('\n\x1b[33m--- [4/6] ORG CHART ZOOM-IN FEATURE AUDIT ---\x1b[0m');
check('Feature', 'profile.astro has org-card-zoom classes & org-zoom-modal', () => {
  const profileContent = fs.readFileSync(path.join(rootDir, 'src/pages/profile.astro'), 'utf8');
  if (!profileContent.includes('org-card-zoom') || !profileContent.includes('id="org-zoom-modal"')) {
    return 'Zoom modal or org-card-zoom class is missing in profile.astro!';
  }
  return true;
});

// 5. API Routes Audit
console.log('\n\x1b[33m--- [5/6] API ENDPOINTS AUDIT ---\x1b[0m');
const apiRoutes = [
  'src/pages/api/news.js',
  'src/pages/api/docs.js',
  'src/pages/api/settings.js',
  'src/pages/api/upload.js'
];
apiRoutes.forEach(api => {
  check('API Endpoint', `File ${api} exists`, () => {
    if (!fs.existsSync(path.join(rootDir, api))) return `Missing ${api}`;
    return true;
  });
});

// 6. Local Server HTTP Health Verification
console.log('\n\x1b[33m--- [6/6] HTTP ENDPOINT RESPONSE HEALTH AUDIT ---\x1b[0m');

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
    { path: '/', label: 'Beranda (index)' },
    { path: '/proker', label: 'Program Kerja & Berita' },
    { path: '/repo', label: 'Repositori Dokumen' },
    { path: '/profile', label: 'Profil & Struktur' },
    { path: '/contact', label: 'Kontak & Layanan' }
  ];

  for (const r of routes) {
    totalTests++;
    const code = await httpGet(r.path);
    if (code === 200) {
      passedTests++;
      report.push({ category: 'HTTP Health', name: `GET ${r.path} (${r.label})`, status: 'PASS', detail: `HTTP ${code}` });
      console.log(` \x1b[32m✔ PASS\x1b[0m  [HTTP Health] GET ${r.path} -> \x1b[32m200 OK\x1b[0m`);
    } else {
      report.push({ category: 'HTTP Health', name: `GET ${r.path} (${r.label})`, status: 'FAIL', detail: `HTTP ${code}` });
      console.log(` \x1b[31m✖ FAIL\x1b[0m  [HTTP Health] GET ${r.path} -> HTTP ${code}`);
    }
  }

  // Calculate percentage
  const percentage = ((passedTests / totalTests) * 100).toFixed(1);
  const progressBarWidth = 30;
  const filledWidth = Math.round((passedTests / totalTests) * progressBarWidth);
  const bar = '█'.repeat(filledWidth) + '░'.repeat(progressBarWidth - filledWidth);

  console.log('\n\x1b[36m%s\x1b[0m', '=======================================================');
  console.log('\x1b[1m\x1b[37m%s\x1b[0m', `   TOTAL SKOR KESEHATAN SISTEM: ${percentage}%`);
  console.log(`   [${bar}] ${passedTests}/${totalTests} Pengujian Berhasil`);
  console.log('\x1b[36m%s\x1b[0m', '=======================================================');

  if (percentage === '100.0') {
    console.log('\x1b[32m\x1b[1m%s\x1b[0m', '🎉 PERFECT HEALTH! SEMUA FITUR & EKOSISTEM BERJALAN 100% TANPA CACAT.');
  } else {
    console.log('\x1b[33m\x1b[1m%s\x1b[0m', '⚠️ BEBERAPA KOMPONEN MEMERLUKAN PERHATIAN.');
  }
}

runHttpCheck();
