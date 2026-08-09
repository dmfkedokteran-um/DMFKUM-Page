import { e as createComponent, k as renderComponent, m as maybeRenderHead, r as renderTemplate, h as createAstro } from './astro/server_DfYfYe5M.mjs';
import 'piccolore';
import { $ as $$ } from './Layout_rB9qe157.mjs';

const $$Astro = createAstro();
const $$Eye = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Eye;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "eye", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path> <circle cx="12" cy="12" r="3"></circle> ` })}`;
}, "/Users/FakhrulHafiz/DMF-landingpage/node_modules/lucide-astro/dist/Eye.astro", void 0);

export { $$Eye as $ };
