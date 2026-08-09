import { e as createComponent, k as renderComponent, m as maybeRenderHead, r as renderTemplate, h as createAstro } from './astro/server_DfYfYe5M.mjs';
import 'piccolore';
import { $ as $$ } from './Layout_rB9qe157.mjs';

const $$Astro$1 = createAstro();
const $$Download = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Download;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "download", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path> <polyline points="7 10 12 15 17 10"></polyline> <line x1="12" x2="12" y1="15" y2="3"></line> ` })}`;
}, "/Users/FakhrulHafiz/DMF-landingpage/node_modules/lucide-astro/dist/Download.astro", void 0);

const $$Astro = createAstro();
const $$FileText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FileText;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "file-text", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path> <path d="M14 2v4a2 2 0 0 0 2 2h4"></path> <path d="M10 9H8"></path> <path d="M16 13H8"></path> <path d="M16 17H8"></path> ` })}`;
}, "/Users/FakhrulHafiz/DMF-landingpage/node_modules/lucide-astro/dist/FileText.astro", void 0);

export { $$FileText as $, $$Download as a };
