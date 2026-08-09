import { e as createComponent, g as addAttribute, l as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead, s as spreadAttributes, n as renderSlot, k as renderComponent, o as renderHead } from './astro/server_DfYfYe5M.mjs';
import 'piccolore';
import 'clsx';
/* empty css                           */

const $$Astro$9 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/FakhrulHafiz/DMF-landingpage/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/FakhrulHafiz/DMF-landingpage/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$8 = createAstro();
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/Users/FakhrulHafiz/DMF-landingpage/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$Astro$7 = createAstro();
const $$Building = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Building;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "building", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect> <path d="M9 22v-4h6v4"></path> <path d="M8 6h.01"></path> <path d="M16 6h.01"></path> <path d="M12 6h.01"></path> <path d="M12 10h.01"></path> <path d="M12 14h.01"></path> <path d="M16 10h.01"></path> <path d="M16 14h.01"></path> <path d="M8 10h.01"></path> <path d="M8 14h.01"></path> ` })}`;
}, "/Users/FakhrulHafiz/DMF-landingpage/node_modules/lucide-astro/dist/Building.astro", void 0);

const $$Astro$6 = createAstro();
const $$Edit = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Edit;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "square-pen", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path> <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path> ` })}`;
}, "/Users/FakhrulHafiz/DMF-landingpage/node_modules/lucide-astro/dist/Edit.astro", void 0);

const $$Astro$5 = createAstro();
const $$Lock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Lock;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "lock", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect> <path d="M7 11V7a5 5 0 0 1 10 0v4"></path> ` })}`;
}, "/Users/FakhrulHafiz/DMF-landingpage/node_modules/lucide-astro/dist/Lock.astro", void 0);

const $$Astro$4 = createAstro();
const $$Menu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Menu;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "menu", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<line x1="4" x2="20" y1="12" y2="12"></line> <line x1="4" x2="20" y1="6" y2="6"></line> <line x1="4" x2="20" y1="18" y2="18"></line> ` })}`;
}, "/Users/FakhrulHafiz/DMF-landingpage/node_modules/lucide-astro/dist/Menu.astro", void 0);

const $$Astro$3 = createAstro();
const $$Unlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Unlock;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "lock-open", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect> <path d="M7 11V7a5 5 0 0 1 9.9-1"></path> ` })}`;
}, "/Users/FakhrulHafiz/DMF-landingpage/node_modules/lucide-astro/dist/Unlock.astro", void 0);

const $$Astro$2 = createAstro();
const $$X = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$X;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "x", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path> ` })}`;
}, "/Users/FakhrulHafiz/DMF-landingpage/node_modules/lucide-astro/dist/X.astro", void 0);

const $$Astro$1 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const pathname = Astro2.url.pathname;
  const activeId = pathname === "/" ? "home" : pathname.startsWith("/profile") ? "profile" : pathname.startsWith("/proker") ? "proker" : pathname.startsWith("/repo") ? "repo" : pathname.startsWith("/contact") ? "contact" : "home";
  const navItems = [
    { id: "home", label: "Beranda", url: "/" },
    { id: "profile", label: "Profil", url: "/profile" },
    { id: "proker", label: "Dokumentasi Program", url: "/proker" },
    { id: "repo", label: "Repositori", url: "/repo" },
    { id: "contact", label: "Kontak", url: "/contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="bg-white/80 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50 transition-all duration-300"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-between h-20">  <a href="/" class="flex items-center gap-2 cursor-pointer group outline-none relative select-none"> <div class="bg-rose-50 p-0.5 rounded-xl group-hover:bg-rose-100 transition-colors flex items-center justify-center w-12 h-12 overflow-hidden shrink-0"> <img src="/logo.png" alt="Logo" class="w-full h-full object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"> ${renderComponent($$result, "Building", $$Building, { "class": "h-7 w-7 text-rose-700", "style": "display: none;" })} </div> <div class="flex flex-col text-left justify-center"> <span class="block font-extrabold text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-red-900 leading-tight">
DMF Kedokteran
</span> <span class="block text-[10px] font-bold text-gray-400 tracking-wider uppercase mt-0.5 leading-normal">
Universitas Negeri Malang
</span> </div>  <div class="absolute inset-0 z-10 w-full h-full"></div> </a>  <div class="hidden md:flex items-center"> <div class="ml-10 flex items-center space-x-2"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.url, "href")}${addAttribute(`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center outline-none select-none ${activeId === item.id ? "bg-rose-50 text-rose-700 shadow-sm" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"}`, "class")}> <span>${item.label}</span>  <div class="absolute inset-0 z-10 w-full h-full rounded-full"></div> </a>`)} </div>  <div class="ml-6 flex items-center border-l border-gray-200 pl-6"> <button id="admin-toggle-btn" class="p-3 rounded-full transition-all shadow-sm bg-gray-100 text-gray-500 hover:bg-gray-200 flex items-center justify-center outline-none cursor-pointer" title="Masuk ke Mode Admin"> <span id="admin-icon-lock" class="flex items-center justify-center"> ${renderComponent($$result, "Lock", $$Lock, { "class": "h-5 w-5 text-rose-600" })} </span> <span id="admin-icon-unlock" class="hidden flex items-center justify-center"> ${renderComponent($$result, "Unlock", $$Unlock, { "class": "h-5 w-5 text-emerald-600" })} </span> </button> </div> </div>  <div class="md:hidden flex items-center gap-3">  <button id="admin-toggle-btn-mobile" class="p-2.5 rounded-xl transition-all shadow-sm bg-gray-100 text-gray-500 hover:bg-gray-200 flex items-center justify-center outline-none cursor-pointer" title="Masuk ke Mode Admin"> <span id="admin-icon-lock-mobile" class="flex items-center justify-center"> ${renderComponent($$result, "Lock", $$Lock, { "class": "h-5 w-5 text-rose-600" })} </span> <span id="admin-icon-unlock-mobile" class="hidden flex items-center justify-center"> ${renderComponent($$result, "Unlock", $$Unlock, { "class": "h-5 w-5 text-emerald-600" })} </span> </button> <button id="mobile-menu-btn" aria-label="Toggle Menu" class="relative p-3 rounded-2xl bg-gray-50 text-gray-600 hover:bg-gray-100 focus:outline-none transition-colors flex items-center justify-center min-w-[48px] min-h-[48px] select-none"> <span id="menu-icon-open" class="flex items-center justify-center"> ${renderComponent($$result, "Menu", $$Menu, { "class": "h-6 w-6" })} </span> <span id="menu-icon-close" class="hidden flex items-center justify-center"> ${renderComponent($$result, "X", $$X, { "class": "h-6 w-6" })} </span>  <div class="absolute inset-0 z-10 w-full h-full rounded-2xl"></div> </button> </div> </div> </div>  <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-gray-100 absolute w-full shadow-lg shadow-gray-200/50"> <div class="px-4 pt-2 pb-6 space-y-2"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.url, "href")}${addAttribute(`relative block w-full text-left px-5 py-3 rounded-2xl text-base font-semibold transition-colors select-none ${activeId === item.id ? "bg-rose-50 text-rose-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`, "class")}> ${item.label}  <div class="absolute inset-0 z-10 w-full h-full rounded-2xl"></div> </a>`)} </div> </div>  <dialog id="login-modal" closedby="any" class="fixed inset-0 bg-transparent p-4 border-none outline-none open:flex justify-center items-center backdrop:bg-gray-900/80 backdrop:backdrop-blur-sm z-50 text-left"> <div class="bg-white w-full max-w-md rounded-[2.5rem] p-8 shadow-2xl relative border border-gray-100"> <div class="flex justify-between items-center mb-8"> <div> <h2 class="text-2xl font-extrabold text-gray-900">Akses Admin</h2> <p class="text-sm font-medium text-gray-500 mt-1">
Masuk untuk mengelola data portal.
</p> </div> <button id="close-login-btn" class="p-2 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-400 transition-colors cursor-pointer outline-none"> ${renderComponent($$result, "X", $$X, { "class": "h-5 w-5" })} </button> </div> <div id="login-error-msg" class="mb-6 p-4 bg-red-50 text-red-600 rounded-2xl text-sm font-bold border border-red-100 text-center hidden animate-fade-in">
Username atau password salah!
</div> <form id="login-form" class="space-y-5"> <div> <label class="block text-sm font-bold text-gray-700 mb-2">Username</label> <input required type="text" id="login-username" value="admin" placeholder="Masukkan username" class="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-rose-200 focus:border-rose-300 outline-none transition-all font-medium text-gray-800"> </div> <div> <label class="block text-sm font-bold text-gray-700 mb-2">Password</label> <input required type="password" id="login-password" placeholder="Masukkan password" class="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-rose-200 focus:border-rose-300 outline-none transition-all font-medium text-gray-800"> </div> <button type="submit" class="w-full mt-6 py-4 bg-rose-600 text-white rounded-xl font-bold hover:bg-rose-700 shadow-lg shadow-rose-600/20 hover:shadow-rose-600/40 hover:-translate-y-0.5 transition-all text-lg cursor-pointer">
Masuk Mode Admin
</button> </form> </div> </dialog> </nav> ${renderScript($$result, "/Users/FakhrulHafiz/DMF-landingpage/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/FakhrulHafiz/DMF-landingpage/src/components/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-gray-400 py-12 text-center rounded-t-[3rem] mt-auto"> <div class="max-w-7xl mx-auto px-4"> <div class="flex items-center justify-center gap-3 mb-6"> <div class="bg-white/10 p-0.5 rounded-xl backdrop-blur-sm flex items-center justify-center w-12 h-12 overflow-hidden shrink-0"> <img src="/logo.png" alt="Logo" class="w-full h-full object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"> ${renderComponent($$result, "Building", $$Building, { "class": "h-7 w-7 text-rose-400", "style": "display: none;" })} </div> <div class="flex flex-col text-left justify-center"> <span class="text-white font-extrabold text-xl tracking-tight leading-tight">
DMF Kedokteran
</span> <span class="text-[10px] font-bold text-gray-500 tracking-wider uppercase mt-0.5 leading-normal">
Universitas Negeri Malang
</span> </div> </div> <p class="mb-6 font-medium text-gray-500 max-w-3xl mx-auto">Platform Pintar Repositori Publik & Etalase Digital Organisasi Masa Depan.</p> <div class="w-16 h-1 bg-gray-800 rounded-full mx-auto mb-6"></div> <p class="text-sm font-bold tracking-wider uppercase text-gray-600">© 2026 DMF Kedokteran. All rights reserved.</p> </div> </footer>`;
}, "/Users/FakhrulHafiz/DMF-landingpage/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "DMF Kedokteran - Universitas Negeri Malang",
    description = "Platform Resmi Dewan Mahasiswa Fakultas Kedokteran Universitas Negeri Malang."
  } = Astro2.props;
  return renderTemplate`<html lang="id"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- SEO Tags --><title>${title}</title><meta name="description"${addAttribute(description, "content")}><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body class="min-h-screen bg-gray-50/30 flex flex-col selection:bg-rose-200 selection:text-rose-900" style="font-family: 'Nunito', sans-serif;"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="flex-1 w-full"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "/Users/FakhrulHafiz/DMF-landingpage/src/layouts/Layout.astro", void 0);

export { $$ as $, $$Layout as a, $$Edit as b, $$X as c };
