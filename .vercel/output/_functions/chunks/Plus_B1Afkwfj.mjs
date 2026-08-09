import { e as createComponent, k as renderComponent, m as maybeRenderHead, r as renderTemplate, h as createAstro } from './astro/server_DfYfYe5M.mjs';
import 'piccolore';
import { $ as $$ } from './Layout_rB9qe157.mjs';

const $$Astro = createAstro();
const $$Plus = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Plus;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "plus", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M5 12h14"></path> <path d="M12 5v14"></path> ` })}`;
}, "/Users/FakhrulHafiz/DMF-landingpage/node_modules/lucide-astro/dist/Plus.astro", void 0);

export { $$Plus as $ };
