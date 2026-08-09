/* empty css                                   */
import { e as createComponent, k as renderComponent, m as maybeRenderHead, r as renderTemplate, h as createAstro, l as renderScript, g as addAttribute } from '../chunks/astro/server_DfYfYe5M.mjs';
import 'piccolore';
import { $ as $$, a as $$Layout, b as $$Edit, c as $$X } from '../chunks/Layout_rB9qe157.mjs';
import fs from 'fs/promises';
import path from 'path';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro();
const $$Instagram = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Instagram;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "instagram", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect> <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path> <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line> ` })}`;
}, "/Users/FakhrulHafiz/DMF-landingpage/node_modules/lucide-astro/dist/Instagram.astro", void 0);

const $$Astro$2 = createAstro();
const $$Link2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Link2;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "link-2", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M9 17H7A5 5 0 0 1 7 7h2"></path> <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path> <line x1="8" x2="16" y1="12" y2="12"></line> ` })}`;
}, "/Users/FakhrulHafiz/DMF-landingpage/node_modules/lucide-astro/dist/Link2.astro", void 0);

const $$Astro$1 = createAstro();
const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "mail", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<rect width="20" height="16" x="2" y="4" rx="2"></rect> <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path> ` })}`;
}, "/Users/FakhrulHafiz/DMF-landingpage/node_modules/lucide-astro/dist/Mail.astro", void 0);

const $$Astro = createAstro();
const $$MessageCircle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MessageCircle;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "message-circle", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path> ` })}`;
}, "/Users/FakhrulHafiz/DMF-landingpage/node_modules/lucide-astro/dist/MessageCircle.astro", void 0);

const prerender = false;
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const SETTINGS_DB = path.resolve(process.cwd(), "database/settings.json");
  let siteSettings = {
    contactEmail: "dmfk.um@um.ac.id",
    contactPhone: "0812-3456-7890",
    contactInstagram: "@dmfk.um",
    contactLinktree: "linktr.ee/dmfk.um",
    contactAddress: "Gedung FK Lt. 2, Universitas Negeri Malang, Jl. Semarang 5, Malang"
  };
  try {
    const rawSettings = await fs.readFile(SETTINGS_DB, "utf-8");
    siteSettings = JSON.parse(rawSettings);
  } catch (e) {
  }
  const cleanedPhone = (siteSettings.contactPhone || "").replace(/\D/g, "");
  const formattedPhone = cleanedPhone.startsWith("0") ? "62" + cleanedPhone.slice(1) : cleanedPhone;
  const defaultTemplateMsg = "Halo DMFK UM, selamat [pagi/siang/sore]. Saya [Nama] dari [Fakultas], izin meminta bantuan dan informasi terkait [sebutkan keperluan secara singkat]. Mohon arahannya, terima kasih.";
  const waUrl = `https://api.whatsapp.com/send?phone=${formattedPhone}&text=${encodeURIComponent(defaultTemplateMsg)}`;
  const igHandle = (siteSettings.contactInstagram || "").replace("@", "").trim();
  const igUrl = siteSettings.contactInstagram.startsWith("http") ? siteSettings.contactInstagram : `https://instagram.com/${igHandle}`;
  const linktreeUrl = siteSettings.contactLinktree.startsWith("http") ? siteSettings.contactLinktree : `https://${siteSettings.contactLinktree}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Hubungi Kami - DMFK UM", "description": "Hubungi Kami. Silakan terhubung via Email, WhatsApp, Instagram atau Linktree." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-16 px-4 max-w-5xl mx-auto animate-fade-in pb-24"> <div class="text-center mb-12"> <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Mari Terhubung</h1> <p class="text-gray-500 text-lg font-medium max-w-2xl mx-auto mb-6">
Pilih salah satu platform di bawah ini untuk terhubung langsung dengan tim kami. Kami siap merespons Anda.
</p>  <button id="edit-contact-btn" class="admin-only hidden inline-flex items-center gap-2 bg-rose-600 text-white px-6 py-3 rounded-full font-bold hover:bg-rose-700 transition-all shadow-lg shadow-rose-600/20 cursor-pointer outline-none"> ${renderComponent($$result2, "Edit", $$Edit, { "class": "h-5 w-5" })} Edit Informasi Kontak
</button> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">  <a${addAttribute(`mailto:${siteSettings.contactEmail}`, "href")} class="group bg-white rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(225,29,72,0.08)] hover:-translate-y-1 transition-all duration-300 border border-gray-50 flex items-center gap-6"> <div class="bg-rose-50 text-rose-600 p-5 rounded-3xl group-hover:scale-110 transition-transform"> ${renderComponent($$result2, "Mail", $$Mail, { "class": "h-8 w-8" })} </div> <div> <h3 class="font-extrabold text-2xl text-gray-900 mb-1">Email Resmi</h3> <p class="text-gray-500 font-medium text-lg group-hover:text-rose-600 transition-colors">${siteSettings.contactEmail}</p> </div> </a>  <a${addAttribute(waUrl, "href")} target="_blank" rel="noopener noreferrer" class="group bg-white rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(16,185,129,0.12)] hover:-translate-y-1 transition-all duration-300 border border-gray-50 flex items-center gap-6"> <div class="bg-emerald-50 text-emerald-600 p-5 rounded-3xl group-hover:scale-110 transition-transform"> ${renderComponent($$result2, "MessageCircle", $$MessageCircle, { "class": "h-8 w-8" })} </div> <div> <h3 class="font-extrabold text-2xl text-gray-900 mb-1">WhatsApp</h3> <p class="text-gray-500 font-medium text-lg group-hover:text-emerald-600 transition-colors">${siteSettings.contactPhone}</p> </div> </a>  <a${addAttribute(igUrl, "href")} target="_blank" rel="noopener noreferrer" class="group bg-white rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(217,70,239,0.12)] hover:-translate-y-1 transition-all duration-300 border border-gray-50 flex items-center gap-6"> <div class="bg-fuchsia-50 text-fuchsia-600 p-5 rounded-3xl group-hover:scale-110 transition-transform"> ${renderComponent($$result2, "Instagram", $$Instagram, { "class": "h-8 w-8" })} </div> <div> <h3 class="font-extrabold text-2xl text-gray-900 mb-1">Instagram</h3> <p class="text-gray-500 font-medium text-lg group-hover:text-fuchsia-600 transition-colors">${siteSettings.contactInstagram}</p> </div> </a>  <a${addAttribute(linktreeUrl, "href")} target="_blank" rel="noopener noreferrer" class="group bg-white rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-300 border border-gray-50 flex items-center gap-6"> <div class="bg-blue-50 text-blue-600 p-5 rounded-3xl group-hover:scale-110 transition-transform"> ${renderComponent($$result2, "Link2", $$Link2, { "class": "h-8 w-8" })} </div> <div> <h3 class="font-extrabold text-2xl text-gray-900 mb-1">Linktree</h3> <p class="text-gray-500 font-medium text-lg group-hover:text-blue-600 transition-colors">${siteSettings.contactLinktree}</p> </div> </a> </div> <div class="bg-gray-50/50 border border-gray-100 rounded-3xl p-8 text-center text-gray-600 font-medium"> <p><strong class="text-gray-900">Sekretariat DMFK UM:</strong> ${siteSettings.contactAddress}</p> </div>  <dialog id="contact-modal" closedby="any" class="fixed inset-0 bg-transparent p-4 border-none outline-none open:flex justify-center items-center backdrop:bg-gray-900/80 backdrop:backdrop-blur-sm"> <div class="bg-white w-full max-w-xl rounded-[2.5rem] p-8 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto"> <div class="flex justify-between items-center mb-6"> <div> <h2 class="text-2xl font-extrabold text-gray-900">Edit Informasi Kontak</h2> <p class="text-sm font-medium text-gray-500 mt-1">Perbarui detail kontak resmi organisasi.</p> </div> <button id="close-contact-modal-btn" class="p-2 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-400 transition-colors cursor-pointer outline-none"> ${renderComponent($$result2, "X", $$X, { "class": "h-5 w-5" })} </button> </div> <form id="contact-form" class="space-y-4"> <div> <label class="block text-sm font-bold text-gray-700 mb-1">Email Resmi</label> <input required type="email" id="email-input"${addAttribute(siteSettings.contactEmail, "value")} class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-rose-200 focus:border-rose-300 outline-none transition-all font-medium text-gray-800"> </div> <div> <label class="block text-sm font-bold text-gray-700 mb-1">Nomor WhatsApp</label> <input required type="text" id="phone-input"${addAttribute(siteSettings.contactPhone, "value")} class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-rose-200 focus:border-rose-300 outline-none transition-all font-medium text-gray-800"> </div> <div> <label class="block text-sm font-bold text-gray-700 mb-1">Instagram Handle</label> <input required type="text" id="instagram-input"${addAttribute(siteSettings.contactInstagram, "value")} class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-rose-200 focus:border-rose-300 outline-none transition-all font-medium text-gray-800"> </div> <div> <label class="block text-sm font-bold text-gray-700 mb-1">Linktree URL / Handle</label> <input required type="text" id="linktree-input"${addAttribute(siteSettings.contactLinktree, "value")} class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-rose-200 focus:border-rose-300 outline-none transition-all font-medium text-gray-800"> </div> <div> <label class="block text-sm font-bold text-gray-700 mb-1">Alamat Sekretariat</label> <textarea required id="address-input" rows="2" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-rose-200 focus:border-rose-300 outline-none transition-all font-medium text-gray-800">${siteSettings.contactAddress}</textarea> </div> <button type="submit" class="w-full mt-4 py-3.5 bg-rose-600 text-white rounded-xl font-bold hover:bg-rose-700 shadow-lg shadow-rose-600/20 hover:shadow-rose-600/40 hover:-translate-y-0.5 transition-all text-base cursor-pointer">
Simpan Informasi Kontak
</button> </form> </div> </dialog> </div> ` })} ${renderScript($$result, "/Users/FakhrulHafiz/DMF-landingpage/src/pages/contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/FakhrulHafiz/DMF-landingpage/src/pages/contact.astro", void 0);

const $$file = "/Users/FakhrulHafiz/DMF-landingpage/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
