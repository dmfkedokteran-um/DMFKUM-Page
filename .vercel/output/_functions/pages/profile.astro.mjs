/* empty css                                   */
import { e as createComponent, k as renderComponent, m as maybeRenderHead, r as renderTemplate, h as createAstro, l as renderScript, g as addAttribute } from '../chunks/astro/server_DfYfYe5M.mjs';
import 'piccolore';
import { $ as $$, a as $$Layout, b as $$Edit, c as $$X } from '../chunks/Layout_rB9qe157.mjs';
import { d as defaultSettingsData } from '../chunks/settings_3-N7cZJs.mjs';
import { $ as $$Eye } from '../chunks/Eye_BJm-XbQG.mjs';
import { $ as $$Plus } from '../chunks/Plus_B1Afkwfj.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$Award = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Award;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "award", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path> <circle cx="12" cy="8" r="6"></circle> ` })}`;
}, "/Users/FakhrulHafiz/DMF-landingpage/node_modules/lucide-astro/dist/Award.astro", void 0);

const $$Astro$1 = createAstro();
const $$UserCheck = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$UserCheck;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "user-check", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path> <circle cx="9" cy="7" r="4"></circle> <polyline points="16 11 18 13 22 9"></polyline> ` })}`;
}, "/Users/FakhrulHafiz/DMF-landingpage/node_modules/lucide-astro/dist/UserCheck.astro", void 0);

const $$Astro = createAstro();
const $$Users = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Users;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "users", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path> <circle cx="9" cy="7" r="4"></circle> <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path> <path d="M16 3.13a4 4 0 0 1 0 7.75"></path> ` })}`;
}, "/Users/FakhrulHafiz/DMF-landingpage/node_modules/lucide-astro/dist/Users.astro", void 0);

const prerender = false;
const $$Profile = createComponent(async ($$result, $$props, $$slots) => {
  const DEFAULT_ORG_STRUCTURE = {
    pembina: {
      title: "Pembina Organisasi",
      name: "Dr. Ahmad Subandi, M.Pd.",
      nip: "NIP. 19820412 201012 1 004",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    presidium: [
      {
        role: "Ketua Umum",
        name: "Muhammad Farhan",
        dept: "Kedokteran '23",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80"
      },
      {
        role: "Wakil Ketua",
        name: "Nabila Putri",
        dept: "Kedokteran '23",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
      }
    ],
    sekben: [
      {
        role: "Sekretaris Umum",
        name: "Zahra Annisa",
        dept: "Kebidanan '24",
        avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80"
      },
      {
        role: "Bendahara Umum",
        name: "Dewa Saputra",
        dept: "Kedokteran '23",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
      }
    ],
    komisi: [
      {
        id: "komisi-1",
        code: "Komisi I",
        title: "Advokasi & Aspirasi",
        themeColor: "rose",
        ketua: {
          name: "Rizky Ramadhan",
          dept: "S1 Kedokteran '23",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        },
        anggota: [
          { name: "Ahmad Fauzi", dept: "S1 Kedokteran '24", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80" },
          { name: "Siti Rahma", dept: "S1 Kebidanan '24", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" },
          { name: "Kevin Pratama", dept: "S1 Farmasi '24", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80" }
        ]
      },
      {
        id: "komisi-2",
        code: "Komisi II",
        title: "Legislasi & Regulasi",
        themeColor: "blue",
        ketua: {
          name: "Amanda Clarissa",
          dept: "S1 Kedokteran '23",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        },
        anggota: [
          { name: "Diva Maharani", dept: "S1 Kedokteran '24", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80" },
          { name: "Fajar Nugraha", dept: "S1 Farmasi '23", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80" },
          { name: "Nabila Zalianty", dept: "S1 Kebidanan '24", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80" }
        ]
      },
      {
        id: "komisi-3",
        code: "Komisi III",
        title: "Pengawasan & Keuangan",
        themeColor: "emerald",
        ketua: {
          name: "Bima Kusuma",
          dept: "S1 Kedokteran '23",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        },
        anggota: [
          { name: "Rina Wijaya", dept: "S1 Farmasi '24", avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80" },
          { name: "Taufik Hidayat", dept: "S1 Kedokteran '24", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80" },
          { name: "Gita Gutawa", dept: "S1 Kebidanan '23", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" }
        ]
      },
      {
        id: "komisi-4",
        code: "Komisi IV",
        title: "Humas & Informasi",
        themeColor: "fuchsia",
        ketua: {
          name: "Citra Lestari",
          dept: "S1 Kebidanan '23",
          avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
        },
        anggota: [
          { name: "Eko Prasetyo", dept: "S1 Kedokteran '24", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80" },
          { name: "Maya Indah", dept: "S1 Farmasi '24", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" },
          { name: "Surya Pratama", dept: "S1 Kedokteran '24", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" }
        ]
      }
    ]
  };
  let siteSettings = {
    orgBgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80",
    parliamentName: "Parlemen Nawa Cita 2026",
    parliamentLogo: "",
    orgTitle: "Struktur Kepengurusan 2026",
    orgSubtitle: "Pimpinan Utama, BPH, dan Komisi Operasional Organisasi DMFK UM",
    visi: "Menjadi organisasi pelopor yang inovatif, transparan, dan berdampak nyata bagi pembangunan kapasitas masyarakat dan kemajuan keilmuan nasional pada tahun 2030.",
    misi: [
      "Mengembangkan program kerja berbasis riset & pengabdian.",
      "Mewujudkan ekosistem administrasi transparan.",
      "Menjalin kemitraan kolaboratif lintas sektor."
    ],
    ...defaultSettingsData,
    orgStructure: defaultSettingsData && defaultSettingsData.orgStructure || DEFAULT_ORG_STRUCTURE
  };
  const org = siteSettings.orgStructure;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Profil DMFK UM - Universitas Negeri Malang", "description": "Visi, Misi, dan Struktur Organisasi kepengurusan DMFK UM Universitas Negeri Malang." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-12 px-4 max-w-7xl mx-auto animate-fade-in pb-20"> <div class="text-center mb-10"> <span class="text-rose-600 font-bold tracking-wider uppercase text-xs mb-2 block animate-pulse">Tentang Kami</span> <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">Identitas & Tujuan</h1> <p class="text-gray-500 max-w-xl mx-auto text-base leading-relaxed mb-5">Visi, misi, dan susunan kepengurusan organisasi DMFK UM 2026.</p>  <button id="edit-profile-btn" class="admin-only hidden inline-flex items-center gap-2 bg-rose-600 text-white px-5 py-2.5 rounded-full font-bold hover:bg-rose-700 transition-all shadow-md shadow-rose-600/20 text-sm cursor-pointer outline-none"> ${renderComponent($$result2, "Edit", $$Edit, { "class": "h-4 w-4" })} Edit Visi & Misi
</button> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">  <div class="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-md transition-all"> <div class="bg-rose-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4"> ${renderComponent($$result2, "Eye", $$Eye, { "class": "h-6 w-6 text-rose-600" })} </div> <h2 class="text-2xl font-extrabold text-gray-900 mb-3">Visi Utama</h2> <p class="text-gray-600 text-base leading-relaxed font-medium"> ${siteSettings.visi} </p> </div>  <div class="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-md transition-all"> <div class="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4"> ${renderComponent($$result2, "Users", $$Users, { "class": "h-6 w-6 text-blue-600" })} </div> <h2 class="text-2xl font-extrabold text-gray-900 mb-3">Misi Strategis</h2> <ul class="space-y-3"> ${siteSettings.misi.map((item) => renderTemplate`<li class="flex items-start gap-3"> <div class="bg-blue-100 p-1 rounded-full mt-1.5 shrink-0"> <div class="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> </div> <span class="text-gray-600 text-base font-medium leading-normal">${item}</span> </li>`)} </ul> </div> </div>  <section class="relative overflow-hidden bg-gradient-to-br from-rose-900 via-rose-800 to-rose-950 text-white py-14 px-6 text-center rounded-[3rem] shadow-2xl shadow-rose-900/20 mb-12">  <div id="org-hero-bg" class="absolute inset-0 w-full h-full bg-cover bg-center opacity-25 mix-blend-luminosity pointer-events-none transition-all duration-700"${addAttribute(`background-image: url('${siteSettings.orgBgImage}')`, "style")}></div>  <button id="edit-org-bg-btn" class="admin-only hidden absolute top-6 right-6 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-md text-gray-900 px-4 py-2 rounded-full font-bold text-xs hover:bg-white hover:scale-105 transition-all shadow-lg cursor-pointer outline-none"> ${renderComponent($$result2, "Edit", $$Edit, { "class": "h-3.5 w-3.5 text-rose-600" })} Edit Banner & Parlemen
</button>  <div class="absolute top-0 left-10 w-64 h-64 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl opacity-50 pointer-events-none"></div> <div class="absolute bottom-0 right-10 w-80 h-80 bg-red-500/20 rounded-full mix-blend-overlay filter blur-3xl opacity-50 pointer-events-none"></div> <div class="relative max-w-3xl mx-auto z-10 flex flex-col items-center">  ${siteSettings.parliamentLogo ? renderTemplate`<div class="mb-4 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-xl hover:scale-105 transition-transform"> <img${addAttribute(siteSettings.parliamentLogo, "src")} alt="Logo Parlemen Berjalan" class="h-16 sm:h-20 max-w-[160px] object-contain drop-shadow-md"> </div>` : renderTemplate`<div class="mb-3 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-xl flex items-center justify-center"> ${renderComponent($$result2, "Award", $$Award, { "class": "h-10 w-10 text-amber-300 animate-pulse" })} </div>`}  <div class="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-gradient-to-r from-rose-500/30 via-amber-500/25 to-rose-500/30 backdrop-blur-md border border-amber-300/40 text-amber-200 text-xs font-extrabold mb-3 tracking-wider uppercase shadow-lg shadow-amber-500/10"> ${renderComponent($$result2, "Award", $$Award, { "class": "h-4 w-4 text-amber-300 shrink-0" })} <span>${siteSettings.parliamentName || "Parlemen Nawa Cita 2026"}</span> </div> <h2 class="text-3xl sm:text-5xl font-extrabold mb-3 leading-tight tracking-tight">${siteSettings.orgTitle || "Struktur Kepengurusan 2026"}</h2> <p class="text-base sm:text-lg text-rose-100/90 max-w-xl mx-auto font-light leading-relaxed"> ${siteSettings.orgSubtitle || "Pimpinan Utama, BPH, dan Komisi Operasional Organisasi DMFK UM"} </p>  <button id="edit-org-btn" class="admin-only hidden mt-6 inline-flex items-center gap-2 bg-white text-rose-900 font-bold px-5 py-2.5 rounded-full text-xs shadow-lg hover:scale-105 transition-all cursor-pointer outline-none"> ${renderComponent($$result2, "Edit", $$Edit, { "class": "h-4 w-4 text-rose-600" })} Kelola Susunan Pengurus & Komisi
</button> </div> </section>  <section class="bg-white p-6 sm:p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden"> <div class="flex flex-col items-center space-y-8">  ${org.pembina && renderTemplate`<div class="flex flex-col items-center"> <div class="bg-gradient-to-r from-gray-50 to-rose-50/40 px-5 py-3.5 rounded-2xl border border-gray-200/80 shadow-sm flex items-center gap-4 hover:shadow-md transition-all"> <img${addAttribute(org.pembina.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80", "src")} alt="Pembina" class="w-11 h-11 object-cover rounded-full ring-2 ring-rose-200 shrink-0"> <div> <span class="text-[10px] font-extrabold uppercase tracking-wider text-rose-600 block">${org.pembina.title || "Pembina Organisasi"}</span> <h4 class="font-extrabold text-gray-900 text-sm leading-tight">${org.pembina.name}</h4> <p class="text-[10px] text-gray-400 font-medium mt-0.5">${org.pembina.nip}</p> </div> </div> <div class="w-0.5 h-6 bg-rose-300"></div> </div>`}  ${org.presidium && org.presidium.length > 0 && renderTemplate`<div class="flex flex-col items-center w-full max-w-4xl"> <div class="flex flex-wrap justify-center gap-4 w-full"> ${org.presidium.map((pres) => renderTemplate`<div class="bg-gradient-to-br from-rose-900 to-rose-950 text-white p-4 rounded-2xl shadow-md flex items-center gap-3.5 border border-rose-800 min-w-[240px] max-w-[280px] flex-1"> <img${addAttribute(pres.avatar || "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80", "src")}${addAttribute(pres.role, "alt")} class="w-12 h-12 object-cover rounded-full ring-2 ring-white/20 shrink-0"> <div class="overflow-hidden"> <span class="text-[9px] font-extrabold uppercase tracking-widest text-rose-200 bg-white/10 px-2 py-0.5 rounded truncate block w-fit">${pres.role}</span> <h4 class="font-extrabold text-white text-sm mt-1 truncate">${pres.name}</h4> <p class="text-[10px] text-rose-200/80 font-medium truncate">${pres.dept}</p> </div> </div>`)} </div> <div class="w-0.5 h-6 bg-gray-300 mt-4"></div> </div>`}  ${org.sekben && org.sekben.length > 0 && renderTemplate`<div class="flex flex-col items-center w-full max-w-4xl"> <div class="flex flex-wrap justify-center gap-4 w-full"> ${org.sekben.map((sb) => renderTemplate`<div class="bg-gray-50/80 p-3.5 rounded-2xl border border-gray-200/60 flex items-center gap-3 min-w-[220px] max-w-[260px] flex-1"> <img${addAttribute(sb.avatar || "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80", "src")}${addAttribute(sb.role, "alt")} class="w-10 h-10 object-cover rounded-xl shrink-0"> <div class="overflow-hidden"> <span class="text-[9px] font-extrabold uppercase tracking-wider text-gray-500 bg-white px-2 py-0.5 rounded border border-gray-100 truncate block w-fit">${sb.role}</span> <h4 class="font-extrabold text-gray-900 text-xs mt-1 truncate">${sb.name}</h4> <p class="text-[10px] text-gray-400 font-medium truncate">${sb.dept}</p> </div> </div>`)} </div> <div class="w-0.5 h-8 bg-gray-300 mt-4"></div> </div>`}  ${org.komisi && org.komisi.length > 0 && renderTemplate`<div class="w-full"> <div class="text-center mb-6"> <span class="text-[11px] font-extrabold uppercase tracking-widest text-rose-600 bg-rose-50 px-4 py-1 rounded-full border border-rose-100">
Komisi & Keanggotaan (${org.komisi.length} Komisi)
</span> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full items-start"> ${org.komisi.map((kom) => renderTemplate`<div class="bg-gray-50/50 rounded-2xl p-4 border border-gray-200/70 flex flex-col space-y-4">  <div class="text-center pb-3 border-b border-gray-200/60"> <span${addAttribute(`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md ${kom.themeColor === "blue" ? "bg-blue-100 text-blue-700" : kom.themeColor === "emerald" ? "bg-emerald-100 text-emerald-700" : kom.themeColor === "fuchsia" ? "bg-fuchsia-100 text-fuchsia-700" : "bg-rose-100 text-rose-700"}`, "class")}> ${kom.code} </span> <h3 class="font-extrabold text-gray-900 text-sm mt-1.5 leading-snug">${kom.title}</h3> </div>  ${kom.ketua && renderTemplate`<div class="bg-white p-3 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3"> <img${addAttribute(kom.ketua.avatar || "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80", "src")}${addAttribute(kom.ketua.name, "alt")} class="w-10 h-10 object-cover rounded-full ring-2 ring-rose-400 shrink-0"> <div class="overflow-hidden"> <span class="text-[8px] font-extrabold uppercase tracking-widest text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded">Ketua Komisi</span> <h4 class="font-extrabold text-gray-900 text-xs truncate mt-0.5">${kom.ketua.name}</h4> <p class="text-[10px] text-gray-400 font-medium truncate">${kom.ketua.dept}</p> </div> </div>`}  <div class="w-0.5 h-3 bg-gray-300 mx-auto"></div>  <div class="space-y-2"> <div class="flex items-center justify-between text-[10px] font-extrabold uppercase tracking-wider text-gray-400 mb-1 px-1"> <span class="flex items-center gap-1"> ${renderComponent($$result2, "UserCheck", $$UserCheck, { "class": "h-3 w-3 text-gray-400" })} <span>Anggota Komisi</span> </span> <span>(${kom.anggota ? kom.anggota.length : 0})</span> </div> ${kom.anggota && kom.anggota.map((mem) => renderTemplate`<div class="bg-white p-2.5 rounded-xl border border-gray-100 flex items-center gap-2.5 hover:border-gray-200 transition-colors"> <img${addAttribute(mem.avatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80", "src")}${addAttribute(mem.name, "alt")} class="w-8 h-8 object-cover rounded-full shrink-0"> <div class="overflow-hidden"> <h5 class="font-bold text-gray-800 text-[11px] truncate leading-tight">${mem.name}</h5> <p class="text-[9px] text-gray-400 font-medium truncate">${mem.dept}</p> </div> </div>`)} </div> </div>`)} </div> </div>`} </div> </section>  <dialog id="profile-modal" closedby="any" class="fixed inset-0 bg-transparent p-4 border-none outline-none open:flex justify-center items-center backdrop:bg-gray-900/80 backdrop:backdrop-blur-sm"> <div class="bg-white w-full max-w-xl rounded-[2.5rem] p-8 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto"> <div class="flex justify-between items-center mb-6"> <div> <h2 class="text-2xl font-extrabold text-gray-900">Edit Visi & Misi</h2> <p class="text-sm font-medium text-gray-500 mt-1">Perbarui visi dan poin-poin misi organisasi.</p> </div> <button id="close-profile-modal-btn" class="p-2 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-400 transition-colors cursor-pointer outline-none"> ${renderComponent($$result2, "X", $$X, { "class": "h-5 w-5" })} </button> </div> <form id="profile-form" class="space-y-5"> <div> <label class="block text-sm font-bold text-gray-700 mb-2">Visi Utama</label> <textarea required id="visi-input" rows="3" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-rose-200 focus:border-rose-300 outline-none transition-all font-medium text-gray-800">${siteSettings.visi}</textarea> </div> <div> <label class="block text-sm font-bold text-gray-700 mb-2">Misi Strategis (Satu poin per baris)</label> <textarea required id="misi-input" rows="5" placeholder="Poin 1
Poin 2
Poin 3" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-rose-200 focus:border-rose-300 outline-none transition-all font-medium text-gray-800">${siteSettings.misi.join("\n")}</textarea> </div> <button type="submit" class="w-full mt-4 py-3.5 bg-rose-600 text-white rounded-xl font-bold hover:bg-rose-700 shadow-lg shadow-rose-600/20 hover:shadow-rose-600/40 hover:-translate-y-0.5 transition-all text-base cursor-pointer">
Simpan Visi & Misi
</button> </form> </div> </dialog>  <dialog id="org-bg-modal" closedby="any" class="fixed inset-0 bg-transparent p-4 border-none outline-none open:flex justify-center items-center backdrop:bg-gray-900/80 backdrop:backdrop-blur-sm z-50"> <div class="bg-white w-full max-w-lg rounded-[2.5rem] p-8 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto"> <div class="flex justify-between items-center mb-6"> <div> <h2 class="text-2xl font-extrabold text-gray-900">Edit Banner & Parlemen</h2> <p class="text-sm font-medium text-gray-500 mt-1">Ubah nama parlemen, logo parlemen, judul, dan background header.</p> </div> <button id="close-org-bg-modal-btn" class="p-2 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-400 transition-colors cursor-pointer outline-none"> ${renderComponent($$result2, "X", $$X, { "class": "h-5 w-5" })} </button> </div> <form id="org-bg-form" class="space-y-4"> <div> <label class="block text-sm font-bold text-gray-700 mb-1">Nama Parlemen Berjalan</label> <input type="text" id="parliament-name-input"${addAttribute(siteSettings.parliamentName || "Parlemen Nawa Cita 2026", "value")} placeholder="e.g. Parlemen Nawa Cita 2026" class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-rose-200 focus:border-rose-300 outline-none transition-all font-medium text-gray-800"> </div> <div class="p-3 bg-amber-50/60 rounded-2xl border border-amber-200/80 space-y-2"> <label class="block text-xs font-extrabold text-amber-900">Logo Parlemen Berjalan</label> <div class="grid grid-cols-1 sm:grid-cols-2 gap-2"> <input type="text" id="parliament-logo-url-input"${addAttribute(siteSettings.parliamentLogo || "", "value")} placeholder="URL Logo Parlemen" class="w-full px-3 py-2 bg-white border border-amber-200 rounded-xl text-xs font-medium text-gray-800"> <input type="file" id="parliament-logo-file-input" accept="image/*" class="w-full text-xs text-gray-500 file:mr-2 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-amber-100 file:text-amber-800 cursor-pointer"> </div> </div> <div> <label class="block text-sm font-bold text-gray-700 mb-1">Judul Banner Header</label> <input type="text" id="org-title-input"${addAttribute(siteSettings.orgTitle || "Struktur Kepengurusan 2026", "value")} placeholder="e.g. Struktur Kepengurusan 2026" class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-rose-200 focus:border-rose-300 outline-none transition-all font-medium text-gray-800"> </div> <div> <label class="block text-sm font-bold text-gray-700 mb-1">Sub-judul / Deskripsi Banner</label> <textarea id="org-subtitle-input" rows="2" placeholder="e.g. Pimpinan Utama, BPH, dan Komisi Operasional..." class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-rose-200 focus:border-rose-300 outline-none transition-all font-medium text-gray-800">${siteSettings.orgSubtitle || "Pimpinan Utama, BPH, dan Komisi Operasional Organisasi DMFK UM"}</textarea> </div> <div> <label class="block text-sm font-bold text-gray-700 mb-1">Background Header Foto (Upload / URL)</label> <div class="grid grid-cols-1 sm:grid-cols-2 gap-2"> <input type="text" id="org-bg-url-input"${addAttribute(siteSettings.orgBgImage || "", "value")} placeholder="https://..." class="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-gray-800"> <input type="file" id="org-bg-file-input" accept="image/*" class="w-full text-xs text-gray-500 file:mr-2 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-rose-50 file:text-rose-700 cursor-pointer"> </div> </div> <button type="submit" class="w-full mt-4 py-3.5 bg-rose-600 text-white rounded-xl font-bold hover:bg-rose-700 shadow-lg shadow-rose-600/20 hover:shadow-rose-600/40 hover:-translate-y-0.5 transition-all text-base cursor-pointer">
Simpan Banner & Parlemen
</button> </form> </div> </dialog>  <dialog id="org-modal" closedby="any" class="fixed inset-0 bg-transparent p-4 border-none outline-none open:flex justify-center items-center backdrop:bg-gray-900/80 backdrop:backdrop-blur-sm z-50"> <div class="bg-white w-full max-w-3xl rounded-[2.5rem] p-8 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto"> <div class="flex justify-between items-center mb-6"> <div> <h2 class="text-2xl font-extrabold text-gray-900">Kelola Bagan Organisasi & Foto Personil</h2> <p class="text-sm font-medium text-gray-500 mt-1">Ubah Pembina, Presidium, BPH, dan Komisi beserta foto/avatar tiap personil.</p> </div> <button id="close-org-modal-btn" class="p-2 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-400 transition-colors cursor-pointer outline-none"> ${renderComponent($$result2, "X", $$X, { "class": "h-5 w-5" })} </button> </div> <form id="org-form" class="space-y-8"${addAttribute(JSON.stringify(org), "data-org")}>  <div class="bg-rose-50/50 p-5 rounded-2xl border border-rose-200/80 space-y-3"> <h3 class="font-extrabold text-rose-900 text-base">Pembina Organisasi</h3> <div class="grid grid-cols-1 sm:grid-cols-3 gap-3"> <input type="text" id="pembina-title"${addAttribute(org.pembina?.title || "Pembina Organisasi", "value")} placeholder="Sebutan (Pembina)" class="font-bold text-xs p-2.5 bg-white border rounded-xl"> <input type="text" id="pembina-name"${addAttribute(org.pembina?.name || "", "value")} placeholder="Nama Lengkap & Gelar" class="font-bold text-xs p-2.5 bg-white border rounded-xl"> <input type="text" id="pembina-nip"${addAttribute(org.pembina?.nip || "", "value")} placeholder="NIP / Identitas" class="text-xs p-2.5 bg-white border rounded-xl"> </div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center"> <input type="text" id="pembina-avatar"${addAttribute(org.pembina?.avatar || "", "value")} placeholder="URL Foto Pembina" class="text-xs p-2.5 bg-white border rounded-xl"> <div class="flex items-center gap-2"> <span class="text-xs font-bold text-gray-500 shrink-0">Upload Foto:</span> <input type="file" id="pembina-file" accept="image/*" class="text-xs text-gray-500 file:mr-2 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-rose-100 file:text-rose-700 cursor-pointer"> </div> </div> </div>  <div class="bg-gray-50 p-5 rounded-2xl border border-gray-200/80"> <div class="flex justify-between items-center mb-4"> <h3 class="font-extrabold text-gray-900 text-base">Presidium (Ketua / Wakil)</h3> <button type="button" id="add-presidium-btn" class="text-xs font-bold bg-rose-600 text-white px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-rose-700 transition-colors"> ${renderComponent($$result2, "Plus", $$Plus, { "class": "h-3.5 w-3.5" })} Tambah Presidium
</button> </div> <div id="presidium-inputs-container" class="space-y-4"></div> </div>  <div class="bg-gray-50 p-5 rounded-2xl border border-gray-200/80"> <div class="flex justify-between items-center mb-4"> <h3 class="font-extrabold text-gray-900 text-base">Pengurus BPH (Sekretaris / Bendahara)</h3> <button type="button" id="add-sekben-btn" class="text-xs font-bold bg-rose-600 text-white px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-rose-700 transition-colors"> ${renderComponent($$result2, "Plus", $$Plus, { "class": "h-3.5 w-3.5" })} Tambah Sekretaris/Bendahara
</button> </div> <div id="sekben-inputs-container" class="space-y-4"></div> </div>  <div class="bg-gray-50 p-5 rounded-2xl border border-gray-200/80"> <div class="flex justify-between items-center mb-4"> <h3 class="font-extrabold text-gray-900 text-base">Daftar Komisi & Keanggotaan</h3> <button type="button" id="add-komisi-btn" class="text-xs font-bold bg-rose-600 text-white px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-rose-700 transition-colors"> ${renderComponent($$result2, "Plus", $$Plus, { "class": "h-3.5 w-3.5" })} Tambah Komisi Baru
</button> </div> <div id="komisi-inputs-container" class="space-y-6"></div> </div> <button type="submit" class="w-full py-4 bg-rose-600 text-white rounded-xl font-bold hover:bg-rose-700 shadow-lg shadow-rose-600/20 hover:shadow-rose-600/40 hover:-translate-y-0.5 transition-all text-base cursor-pointer">
Simpan Seluruh Perubahan Bagan Organisasi & Foto
</button> </form> </div> </dialog> </div> ` })} ${renderScript($$result, "/Users/FakhrulHafiz/DMF-landingpage/src/pages/profile.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/FakhrulHafiz/DMF-landingpage/src/pages/profile.astro", void 0);

const $$file = "/Users/FakhrulHafiz/DMF-landingpage/src/pages/profile.astro";
const $$url = "/profile";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Profile,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
