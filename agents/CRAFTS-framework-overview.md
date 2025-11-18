# CRAFTS CSS Framework Overview

## Index
1. [Idea & Intent](#idea--intent)  
2. [CRAFTS Principles](#crafts-principles)  
3. [Operating Model](#operating-model)  
4. [Code Architecture](#code-architecture)  
5. [Design System Guidance](#design-system-guidance)  
6. [Roadmap & Size Targets](#roadmap--size-targets)  
7. [DeepSeek Session Notes](#deepseek-session-notes)  
8. [Next Actions](#next-actions)

## Idea & Intent
- **CRAFTS (Clean, Responsive, Accessible, Flexible, Typographic, Semantic)** is positioned as a bridge between Pico’s semantic defaults, Halfmoon’s layout primitives, and Tailwind’s utility vocabulary.  
- The framework promises **“zero‑config beauty”**: plain HTML rendered with CRAFTS should already look considered, spaced, and accessible without reaching for classes.  
- At the same time, it must scale up to dashboard-grade layouts, offer JS-free interactions, and stay tiny (goal: ≤15 KB gzipped for the full bundle, ≤25 KB max).  
- The design language is intentionally minimal—closer to Medium, dev.to, or Notion—so documentation, apps, and marketing sites share the same polished foundation.

## CRAFTS Principles
| Letter | What it encodes | Notes from DeepSeek conversation |
| --- | --- | --- |
| **C** | Clean & Consistent | strict spacing scale, limited shadows, unobtrusive borders |
| **R** | Responsive & Reliable | mobile-first grid, fluid typography, predictable breakpoints |
| **A** | Accessible & Adaptive | WCAG-focused contrast, prefers-reduced-motion guardrails, dark/light sync |
| **F** | Flexible & Fast | modular CSS bundles, progressive complexity levels (`--crafts-complexity: simple | balanced | rich`) |
| **T** | Typographic & Thoughtful | curated system font stack by default with quick swap helpers for Inter/Charter |
| **S** | Semantic & Scalable | element-first styling, JS-free dropdowns/tabs/modals, grows into utilities only when needed |

## Operating Model
1. **Design Tokens (`crafts-variables.css`)**  
   - All colors, spacing (`--crafts-space-xs` → `--crafts-space-3xl`), typography, shadows, and theme knobs live here.  
   - Includes dual themes (light/dark) and the “complexity” switch that can globally soften or enrich surfaces.
2. **Smart Reset (`crafts-reset.css`)**  
   - Combines a modern reset with accessibility defaults: smooth scrolling unless `prefers-reduced-motion`, consistent form inheritances, normalized media sizing.
3. **Semantic Layer (`crafts-semantic.css`)**  
   - Styles raw HTML (headings, paragraphs, lists, forms, buttons, tables, media).  
   - Fixes the issues highlighted in the first screenshot review: visible contrast, breathing room, and discoverable focus states.
4. **Layout System (`crafts-layout.css`, `crafts-grid.css`)**  
   - Halfmoon-inspired sidebar, responsive container, stack/cluster utilities, and grid helpers.
5. **Interactive Components (`crafts-components.css`, `crafts-forms.css`)**  
   - JS-free dropdowns, tabs, accordions, modals, tooltips, dark-mode toggles, input groups, validation states.
6. **Utility & Theme Add-ons (`crafts-utils.css`, `crafts-themes.css`)**  
   - Tailwind-style shorthands for spacing/typography/colors plus theme tokens for glassmorphism, gradient borders, animations, and scroll-driven patterns.
7. **Distribution Bundles**  
   - `dist/crafts.css`: full bundle.  
   - `dist/crafts-semantic.css`: zero-config starter (reset + semantic layer).  
   - `dist/crafts.min.css`: production-ready build emitted by `node build.js`.

## Code Architecture
```
crafts/
├── src/
│   ├── core/          # tokens, reset, semantic HTML
│   ├── layout/        # grid + Halfmoon-like scaffolding (authoritative home for layout primitives)
│   ├── components/    # JS-free UI + form styling
│   ├── utilities/     # spacing/color/type helpers & themes
│   └── crafts.css     # master import that stitches modules together
├── dist/              # generated bundles
├── examples/          # basic/components/advanced demo pages
├── build.js           # bundler script (invoked with `node build.js`)
└── docs/ + agents/    # knowledge base (this file lives here)
```

**Component coverage** (taken from DeepSeek’s checklist):
- *Base elements*: typography, forms, tables, media.
- *Layout*: containers, responsive grid, sidebar layouts, split screens, stack/box helpers.
- *Navigation*: navbar, breadcrumb, pagination, sidebar nav, footer.
- *Interactive (JS-free)*: dropdown, modal, tabs, accordion, tooltips, dark-mode toggle.
- *Data display*: cards, badges, alerts, progress, avatars, stats.
- *Forms*: input groups, toggles, custom checks/radios, file upload, validation messaging.
- *Utilities*: spacing, color, typography, flex/grid helpers, visibility + position.
- *Advanced*: glassmorphism, gradient borders, animation kits, scroll-driven effects, masonry.

**Recent repository notes**
- Removed the mistaken duplicate `components/_layout.css` so `layout/_layout.css` is the single source of truth for container and sidebar scaffolding.
- Theme toggle was flagged as broken (no state persistence, weak styling). A full redesign with proper CSS, markup, and JS now lives on the todo list below.

## Design System Guidance
- **Fonts**: shipping with a robust system stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, ...`). Documentation shows how to swap in Inter, Source Sans, or Charter via `@import` + `--crafts-font-family`.
- **Icons**: recommend Feather or Lucide for a minimal, dev.to/Medium-grade aesthetic; the framework itself stays icon-agnostic but can expose helper classes for consistent sizing/alignment.
- **Spacing & Rhythm**: rely on the defined `--crafts-space-*` tokens; default paragraph width capped around 65ch for readable prose.
- **Color Modes**: dual theme variables plus a dark-mode toggle component; ensures primary/foreground tokens always meet contrast even under `prefers-color-scheme: dark`.
- **Accessibility**: button/form defaults now include borders, focus states, and hover feedback; reset clamps animations when users request reduced motion.

## Roadmap & Size Targets
| Phase | Focus | Outputs | Target Size |
| --- | --- | --- | --- |
| 1 | Semantic Core | `crafts-variables.css`, `crafts-reset.css`, `crafts-semantic.css` | ~2 KB |
| 2 | Layout System | `crafts-grid.css`, `crafts-layout.css`, container helpers | +3 KB |
| 3 | Components | `crafts-components.css`, `crafts-forms.css`, nav patterns | +6 KB |
| 4 | Utilities & Themes | `crafts-utils.css`, `crafts-themes.css`, complexity scaler | +4 KB |
| 5 | Docs & Polish | Documentation site, examples/basic-components-advanced | packaging |

**Immediate priorities recorded by DeepSeek**
- Create the CRAFTS-branded folder structure and rename prefixes (`.crafts-btn`, `.crafts-card`, etc.).
- Lock the semantic core (already iterated once after the dark-mode screenshot feedback).
- Build Halfmoon-inspired layout primitives next, then JS-free interactive components, then utility shorthands.
- Replace the temporary theme toggle with the redesigned version (new CSS component, updated header markup, and a CraftTheme controller script + data-theme variables).

## DeepSeek Session Notes
- **Naming deliberation**: DeepSeek compared “Nexus” vs “CRAFTS”, listing pros/cons and ultimately recommending CRAFTS because the acronym captures the philosophy and differentiates the brand.  
- **Guided setup**: produced one-liner shell scripts, VS Code extension suggestions, workspace settings, and a deterministic folder/file tree to bootstrap the repo.  
- **Hands-on debugging**: after reviewing the screenshot complaint (dark UI, invisible button, cramped form), DeepSeek rewrote `crafts-semantic.css` to add contrast, spacing, hover/focus states, and general visual hierarchy.  
- **Design direction**: advised on iconography (Feather/Lucide) and font stacks, including optional swaps for Inter, Source Sans Pro, or Charter depending on whether you want a Notion, dev.to, or Medium feel.  
- **Planning discipline**: supplied multi-week phase breakdowns, file-size budgets, and comprehensive component/utility checklists so future contributors know what “complete” looks like.  
- **Development workflow**: emphasized iterating via `node build.js` and validating with `examples/basic.html` before moving to more complex demos.

## Next Actions
1. **Finalize tokens + semantic defaults** (crafts-core) and regenerate `dist/crafts-semantic.css`.  
2. **Implement `crafts-layout.css`** focusing on sidebar layout, container rules, and responsive grids outlined in the plan.
3. **Ship the theme system overhaul** (CSS component, HTML controls, JS controller, variable-based themes) and rebuild the dist bundle.
4. **Document icon/font guidance** directly in `docs/` to complement this agent note.
5. **Start the JS-free interactive set** (dropdowns, tabs, modal) once layout primitives feel solid.
6. **Keep logging decisions** inside `agents/` so new collaborators can trace the rationale quickly.

Refer to `examples/basic.html` after each build to ensure the “beautiful by default” promise still holds in both light and dark modes. Once the semantic core stabilizes, expand the docs site to showcase layout and component patterns.
