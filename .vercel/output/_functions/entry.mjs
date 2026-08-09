import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_B1ZivKST.mjs';
import { manifest } from './manifest_D_3VW81C.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/docs.astro.mjs');
const _page2 = () => import('./pages/api/news.astro.mjs');
const _page3 = () => import('./pages/api/settings.astro.mjs');
const _page4 = () => import('./pages/api/upload.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/profile.astro.mjs');
const _page7 = () => import('./pages/proker.astro.mjs');
const _page8 = () => import('./pages/repo.astro.mjs');
const _page9 = () => import('./pages/uploads/_---file_.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/docs.js", _page1],
    ["src/pages/api/news.js", _page2],
    ["src/pages/api/settings.js", _page3],
    ["src/pages/api/upload.js", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/profile.astro", _page6],
    ["src/pages/proker.astro", _page7],
    ["src/pages/repo.astro", _page8],
    ["src/pages/uploads/[...file].js", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "dc05b497-d803-48d1-8ff6-97b8fa45119e",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
