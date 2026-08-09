import { e as createComponent, k as renderComponent, m as maybeRenderHead, r as renderTemplate, h as createAstro } from './astro/server_DfYfYe5M.mjs';
import 'piccolore';
import { $ as $$ } from './Layout_rB9qe157.mjs';

const $$Astro = createAstro();
const $$ChevronRight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ChevronRight;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "chevron-right", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m9 18 6-6-6-6"></path> ` })}`;
}, "/Users/FakhrulHafiz/DMF-landingpage/node_modules/lucide-astro/dist/ChevronRight.astro", void 0);

export { $$ChevronRight as $ };
