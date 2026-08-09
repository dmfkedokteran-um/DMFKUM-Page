/* empty css                                   */
import { e as createComponent, k as renderComponent, m as maybeRenderHead, r as renderTemplate, h as createAstro, l as renderScript, g as addAttribute } from '../chunks/astro/server_DfYfYe5M.mjs';
import 'piccolore';
import { $ as $$, a as $$Layout, b as $$Edit, c as $$X } from '../chunks/Layout_rB9qe157.mjs';
import { M as MOCK_NEWS, a as MOCK_DOCS } from '../chunks/mockData_3PZgmH6a.mjs';
import fs from 'fs/promises';
import path from 'path';
import { $ as $$ChevronRight } from '../chunks/ChevronRight_BIvUQ5ng.mjs';
import { $ as $$FileText, a as $$Download } from '../chunks/FileText_C3ayfQV6.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ArrowRight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ArrowRight;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "arrow-right", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M5 12h14"></path> <path d="m12 5 7 7-7 7"></path> ` })}`;
}, "/Users/FakhrulHafiz/DMF-landingpage/node_modules/lucide-astro/dist/ArrowRight.astro", void 0);

const $$Astro = createAstro();
const $$BookOpen = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BookOpen;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "book-open", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M12 7v14"></path> <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path> ` })}`;
}, "/Users/FakhrulHafiz/DMF-landingpage/node_modules/lucide-astro/dist/BookOpen.astro", void 0);

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const SETTINGS_DB = path.resolve(process.cwd(), "database/settings.json");
  let siteSettings = {
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
  };
  try {
    const rawSettings = await fs.readFile(SETTINGS_DB, "utf-8");
    siteSettings = JSON.parse(rawSettings);
  } catch (e) {
  }
  const NEWS_DB = path.resolve(process.cwd(), "database/news.json");
  let newsList = [];
  try {
    const raw = await fs.readFile(NEWS_DB, "utf-8");
    newsList = JSON.parse(raw);
  } catch (e) {
    newsList = MOCK_NEWS;
  }
  const DOCS_DB = path.resolve(process.cwd(), "database/docs.json");
  let docsList = [];
  try {
    const raw = await fs.readFile(DOCS_DB, "utf-8");
    docsList = JSON.parse(raw);
  } catch (e) {
    docsList = MOCK_DOCS;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "DMFK UM - Official Portal" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="animate-fade-in pb-16">  <section id="hero-section" class="relative overflow-hidden bg-gradient-to-br from-rose-900 via-rose-800 to-rose-950 text-white py-16 px-4 text-center rounded-[3rem] mx-4 mt-4 shadow-2xl shadow-rose-900/20">  <div id="hero-bg-overlay" class="absolute inset-0 w-full h-full bg-cover bg-center opacity-25 mix-blend-luminosity pointer-events-none transition-all duration-700"${addAttribute(`background-image: url('${siteSettings.heroImage}')`, "style")}></div>  <button id="edit-hero-btn" class="admin-only hidden absolute top-6 right-6 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-md text-gray-900 px-4 py-2.5 rounded-full font-bold text-xs hover:bg-white hover:scale-105 transition-all shadow-lg cursor-pointer outline-none"> ${renderComponent($$result2, "Edit", $$Edit, { "class": "h-4 w-4 text-rose-600" })} Edit Gambar Header
</button>  <div class="absolute top-0 left-10 w-64 h-64 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl opacity-50 pointer-events-none"></div> <div class="absolute bottom-0 right-10 w-80 h-80 bg-red-500/20 rounded-full mix-blend-overlay filter blur-3xl opacity-50 pointer-events-none"></div> <div class="relative max-w-4xl mx-auto z-10"> <span class="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-rose-100 text-sm font-semibold mb-6 tracking-wide">
Official Platform DMFK UM
</span> <h1 class="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
Membangun Sinergi,<br class="hidden md:block"> Menginspirasi Negeri.
</h1> <p class="text-lg md:text-xl text-rose-100/90 mb-8 max-w-2xl mx-auto font-light">
Jelajahi portal kami. Temukan pembaruan terkini, rekam jejak program
          kerja, dan akses dokumen publik secara instan.
</p> <div class="flex flex-col sm:flex-row justify-center gap-4"> <a href="/repo" class="group bg-white text-rose-900 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 hover:bg-rose-50 transition-all duration-300 flex items-center justify-center gap-3"> ${renderComponent($$result2, "BookOpen", $$BookOpen, { "class": "h-5 w-5 text-rose-600 group-hover:scale-110 transition-transform" })} Akses Repositori
</a> <a href="/profile" class="border-2 border-white/30 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-rose-900 transition-all duration-300 inline-block">
Pelajari Profil
</a> </div> </div> </section>  <section class="py-16 px-4 max-w-7xl mx-auto mt-4"> <div class="flex justify-between items-end mb-10"> <div> <h2 class="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 tracking-tight">
Kilas Berita Terbaru
</h2> <p class="text-gray-500 mt-2 font-medium text-lg">
Dokumentasi dan rekam jejak program terkini.
</p> </div> <a href="/proker" class="hidden md:flex text-rose-700 font-bold items-center gap-2 hover:gap-3 bg-rose-50 px-5 py-2.5 rounded-full transition-all duration-300">
Lihat Semua ${renderComponent($$result2, "ArrowRight", $$ArrowRight, { "class": "h-4 w-4" })} </a> </div> <div id="home-news-container" class="grid grid-cols-1 md:grid-cols-3 gap-8"${addAttribute(JSON.stringify(newsList), "data-initial")}> ${newsList.slice(0, 3).map((news) => renderTemplate`<div class="group bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(225,29,72,0.08)] overflow-hidden transition-all duration-300 hover:-translate-y-2 border border-gray-100/50 flex flex-col"> <div class="relative overflow-hidden"> <img${addAttribute(news.image, "src")}${addAttribute(news.title, "alt")} class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy"> <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-rose-700 shadow-sm"> ${news.category} </div> </div> <div class="p-8 flex flex-col flex-1"> <div class="text-sm font-semibold text-gray-400 mb-3"> ${news.date} </div> <h3 class="font-extrabold text-xl text-gray-800 mb-3 leading-snug group-hover:text-rose-700 transition-colors"> ${news.title} </h3> <p class="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2"> ${news.excerpt} </p> <a href="/proker" class="mt-auto text-rose-600 font-bold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
Selengkapnya ${renderComponent($$result2, "ChevronRight", $$ChevronRight, { "class": "h-4 w-4" })} </a> </div> </div>`)} </div> </section>  <section class="py-8 px-4 max-w-7xl mx-auto"> <div class="bg-gradient-to-b from-gray-50 to-rose-50/30 p-8 sm:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm"> <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4"> <div> <span class="text-rose-600 font-bold text-xs uppercase tracking-wider block mb-2">Pangkalan Data Resmi</span> <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Dokumen & Publikasi Terbaru</h2> </div> <a href="/repo" class="text-rose-700 font-bold inline-flex items-center gap-2 hover:gap-3 bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-100 hover:shadow-md transition-all shrink-0">
Lihat Semua Berkas ${renderComponent($$result2, "ArrowRight", $$ArrowRight, { "class": "h-4 w-4" })} </a> </div> <div id="home-docs-container" class="space-y-4"${addAttribute(JSON.stringify(docsList), "data-initial")}> ${docsList.slice(0, 3).map((doc) => renderTemplate`<div class="bg-white p-6 rounded-2xl border border-gray-100/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition-shadow"> <div class="flex items-center gap-4"> <div${addAttribute(`p-3.5 rounded-xl shrink-0 ${doc.ext === "PDF" ? "bg-rose-50 text-rose-600" : "bg-blue-50 text-blue-600"}`, "class")}> ${renderComponent($$result2, "FileText", $$FileText, { "class": "h-6 w-6" })} </div> <div> <h4 class="font-bold text-gray-900 text-base">${doc.title}</h4> <div class="flex items-center gap-3 text-xs text-gray-400 font-medium mt-1"> <span class="bg-gray-100 px-2 py-0.5 rounded text-gray-600">${doc.category}</span> <span>${doc.date}</span> <span>•</span> <span>${doc.size}</span> </div> </div> </div> <div class="flex items-center gap-3"> <a href="/repo" class="flex-1 sm:flex-initial text-center px-4 py-2 bg-gray-50 text-gray-700 hover:bg-gray-100 rounded-xl text-xs font-bold transition-colors">
Buka
</a> ${doc.fileUrl ? renderTemplate`<a${addAttribute(doc.fileUrl, "href")}${addAttribute(`${doc.title}.${doc.ext ? doc.ext.toLowerCase() : "pdf"}`, "download")} class="flex-1 sm:flex-initial text-center px-4 py-2 bg-rose-600 text-white hover:bg-rose-700 rounded-xl text-xs font-bold shadow-sm shadow-rose-600/20 transition-all flex items-center justify-center gap-1.5"> ${renderComponent($$result2, "Download", $$Download, { "class": "h-3.5 w-3.5" })} Unduh
</a>` : renderTemplate`<a href="/repo" class="flex-1 sm:flex-initial text-center px-4 py-2 bg-rose-600 text-white hover:bg-rose-700 rounded-xl text-xs font-bold shadow-sm shadow-rose-600/20 transition-all flex items-center justify-center gap-1.5"> ${renderComponent($$result2, "Download", $$Download, { "class": "h-3.5 w-3.5" })} Unduh
</a>`} </div> </div>`)} </div> </div> </section>  <dialog id="hero-modal" closedby="any" class="fixed inset-0 bg-transparent p-4 border-none outline-none open:flex justify-center items-center backdrop:bg-gray-900/80 backdrop:backdrop-blur-sm"> <div class="bg-white w-full max-w-lg rounded-[2.5rem] p-8 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto"> <div class="flex justify-between items-center mb-6"> <div> <h2 class="text-2xl font-extrabold text-gray-900">Edit Background Header</h2> <p class="text-sm font-medium text-gray-500 mt-1">Unggah gambar baru dari komputer atau masukkan URL gambar.</p> </div> <button id="close-hero-modal-btn" class="p-2 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-400 transition-colors cursor-pointer outline-none"> ${renderComponent($$result2, "X", $$X, { "class": "h-5 w-5" })} </button> </div> <form id="hero-form" class="space-y-5"> <div> <label class="block text-sm font-bold text-gray-700 mb-2">Upload Gambar Komputer</label> <input type="file" id="hero-file-input" accept="image/*" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-rose-200 focus:border-rose-300 outline-none transition-all font-medium text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-rose-50 file:text-rose-700 hover:file:bg-rose-100 cursor-pointer"> <p class="text-xs text-gray-400 mt-1">File akan diunggah dan disimpan langsung ke folder server <code>public/uploads/</code>.</p> </div> <div> <label class="block text-sm font-bold text-gray-700 mb-2">Atau Masukkan URL Gambar Online</label> <input type="text" id="hero-url-input"${addAttribute(siteSettings.heroImage, "value")} placeholder="https://..." class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-rose-200 focus:border-rose-300 outline-none transition-all font-medium text-gray-800"> </div> <button type="submit" class="w-full mt-4 py-3.5 bg-rose-600 text-white rounded-xl font-bold hover:bg-rose-700 shadow-lg shadow-rose-600/20 hover:shadow-rose-600/40 hover:-translate-y-0.5 transition-all text-base cursor-pointer">
Simpan Gambar Header Baru
</button> </form> </div> </dialog> </div> ` })} ${renderScript($$result, "/Users/FakhrulHafiz/DMF-landingpage/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/FakhrulHafiz/DMF-landingpage/src/pages/index.astro", void 0);

const $$file = "/Users/FakhrulHafiz/DMF-landingpage/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
