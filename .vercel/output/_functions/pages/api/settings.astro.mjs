import fs from 'fs/promises';
import path from 'path';
export { renderers } from '../../renderers.mjs';

const heroImage = "/uploads/1786252817938_Gemini_Generated_Image_b5vxtob5vxtob5vx.png";
const orgBgImage = "/uploads/1786255684698_media_408251_1780905706821.jpg";
const parliamentName = "Parlemen Nawa Cita 2026";
const parliamentLogo = "";
const orgTitle = "Struktur Kepengurusan 2026";
const orgSubtitle = "Pimpinan Utama, BPH, dan Komisi Operasional Organisasi DMFK UM";
const heroTitle = "Membangun Sinergi,\nMenginspirasi Negeri.";
const heroSubtitle = "Jelajahi portal kami. Temukan pembaruan terkini, rekam jejak program kerja, dan akses dokumen publik secara instan.";
const visi = "Menjadi organisasi pelopor yang inovatif, transparan, dan berdampak nyata bagi pembangunan kapasitas masyarakat dan kemajuan keilmuan nasional pada tahun 2030.";
const misi = ["1","2","3","4","5"];
const contactEmail = "haka@gmail.com";
const contactPhone = "081247562080";
const contactInstagram = "mengerikan";
const contactLinktree = "https://fk.um.ac.id";
const contactAddress = "Gedung FK Lt. 2, Universitas Negeri Malang, Jl. Semarang 5, Malang";
const orgStructure = {"pembina":{"title":"Pembina Organisasi","name":"Dr. Ahmad Subandi, M.Pd.","nip":"NIP. 19820412 201012 1 004","avatar":"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"},"presidium":[{"role":"Ketua Umum","name":"Muhammad Farhan","dept":"Kedokteran '23","avatar":"/uploads/1786255178709_media_408247_1780905693128.jpg"},{"role":"Wakil Ketua","name":"Nabila Putri","dept":"Kedokteran '23","avatar":"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"}],"sekben":[{"role":"Sekretaris Umum","name":"Zahra Annisa","dept":"Kebidanan '24","avatar":"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80"},{"role":"Bendahara Umum","name":"Dewa Saputra","dept":"Kedokteran '23","avatar":"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"}],"komisi":[{"id":"komisi-1","code":"Komisi I","title":"Advokasi & Aspirasi","themeColor":"rose","ketua":{"name":"Rizky Ramadhan","dept":"S1 Kedokteran '23","avatar":"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"},"anggota":[{"name":"Siti Rahma","dept":"S1 Kebidanan '24","avatar":"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"},{"name":"Kevin Pratama","dept":"S1 Farmasi '24","avatar":"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"}]},{"id":"komisi-2","code":"Komisi II","title":"Legislasi & Regulasi","themeColor":"blue","ketua":{"name":"Amanda Clarissa","dept":"S1 Kedokteran '23","avatar":"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"},"anggota":[{"name":"Diva Maharani","dept":"S1 Kedokteran '24","avatar":"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"},{"name":"Fajar Nugraha","dept":"S1 Farmasi '23","avatar":"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"},{"name":"Nabila Zalianty","dept":"S1 Kebidanan '24","avatar":"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80"}]},{"id":"komisi-3","code":"Komisi III","title":"Pengawasan & Keuangan","themeColor":"emerald","ketua":{"name":"Bima Kusuma","dept":"S1 Kedokteran '23","avatar":"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"},"anggota":[{"name":"Rina Wijaya","dept":"S1 Farmasi '24","avatar":"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80"},{"name":"Taufik Hidayat","dept":"S1 Kedokteran '24","avatar":"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80"},{"name":"Gita Gutawa","dept":"S1 Kebidanan '23","avatar":"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"}]},{"id":"komisi-4","code":"Komisi IV","title":"Humas & Informasi","themeColor":"fuchsia","ketua":{"name":"Citra Lestari","dept":"S1 Kebidanan '23","avatar":"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"},"anggota":[{"name":"Eko Prasetyo","dept":"S1 Kedokteran '24","avatar":"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"},{"name":"Maya Indah","dept":"S1 Farmasi '24","avatar":"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"},{"name":"Surya Pratama","dept":"S1 Kedokteran '24","avatar":"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"},{"name":"bb","dept":"haj","avatar":"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"}]}]};
const defaultSettingsData = {
  heroImage,
  orgBgImage,
  parliamentName,
  parliamentLogo,
  orgTitle,
  orgSubtitle,
  heroTitle,
  heroSubtitle,
  visi,
  misi,
  contactEmail,
  contactPhone,
  contactInstagram,
  contactLinktree,
  contactAddress,
  orgStructure,
};

const DB_PATH = path.resolve(process.cwd(), 'database/settings.json');

async function readDB() {
  try {
    const data = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return defaultSettingsData;
  }
}

async function writeDB(data) {
  try {
    await fs.mkdir(path.dirname(DB_PATH), { recursive: true });
    await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
  } catch (e) {
    // Graceful fallback for read-only serverless environments
  }
}

// Delete physical upload file from both public/uploads and dist/client/uploads
async function deletePhysicalUploadFile(fileUrl) {
  if (!fileUrl || typeof fileUrl !== 'string' || !fileUrl.startsWith('/uploads/')) return;
  const fileName = fileUrl.replace('/uploads/', '');
  const publicPath = path.resolve(process.cwd(), 'public/uploads', fileName);
  const distPath = path.resolve(process.cwd(), 'dist/client/uploads', fileName);

  try { await fs.unlink(publicPath); } catch (e) {}
  try { await fs.unlink(distPath); } catch (e) {}
}

// Recursively find all /uploads/... URLs inside any nested object/array
function collectUploadUrls(obj, set = new Set()) {
  if (!obj) return set;
  if (typeof obj === 'string') {
    if (obj.startsWith('/uploads/')) set.add(obj);
  } else if (Array.isArray(obj)) {
    obj.forEach(item => collectUploadUrls(item, set));
  } else if (typeof obj === 'object') {
    Object.values(obj).forEach(val => collectUploadUrls(val, set));
  }
  return set;
}

async function GET() {
  const settings = await readDB();
  return new Response(JSON.stringify(settings), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

async function POST({ request }) {
  try {
    const entry = await request.json();
    const current = await readDB();

    const currentUrls = collectUploadUrls(current);
    const updated = { ...current, ...entry };
    const updatedUrls = collectUploadUrls(updated);

    // Delete any upload file URL that was in current settings but is no longer present in updated settings
    for (const url of currentUrls) {
      if (!updatedUrls.has(url)) {
        await deletePhysicalUploadFile(url);
      }
    }

    await writeDB(updated);
    return new Response(JSON.stringify({ success: true, settings: updated }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
