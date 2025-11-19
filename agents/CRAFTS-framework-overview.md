# CRAFTS CSS Framework Overview

## Index

1. [Idea & Intent](#idea--intent)
2. [CRAFTS Principles](#crafts-principles)
3. [Operating Model](#operating-model)
4. [Code Architecture](#code-architecture)
5. [Design System Guidance](#design-system-guidance)
6. [Roadmap & Size Targets](#roadmap--size-targets)
7. [Competitive Landscape](#competitive-landscape)
8. [Theme & Utility Plan](#theme--utility-plan)
9. [Documentation & Examples Plan](#documentation--examples-plan)
10. [DeepSeek Session Notes](#deepseek-session-notes)
11. [Next Actions](#next-actions)

## Idea & Intent

- **CRAFTS (Clean, Responsive, Accessible, Flexible, Typographic, Semantic)** is positioned as a bridge between Pico’s semantic defaults, Halfmoon’s layout primitives, and Tailwind’s utility vocabulary.
- The framework promises **“zero‑config beauty”**: plain HTML rendered with CRAFTS should already look considered, spaced, and accessible without reaching for classes.
- At the same time, it must scale up to dashboard-grade layouts, offer JS-free interactions, and stay tiny (goal: ≤15 KB gzipped for the full bundle, ≤25 KB max).
- The design language is intentionally minimal—closer to Medium, dev.to, or Notion—so documentation, apps, and marketing sites share the same polished foundation.

## CRAFTS Principles

| Letter | What it encodes          | Notes from DeepSeek conversation                                                            |
| ------ | ------------------------ | ------------------------------------------------------------------------------------------- | -------- | ------ |
| **C**  | Clean & Consistent       | strict spacing scale, limited shadows, unobtrusive borders                                  |
| **R**  | Responsive & Reliable    | mobile-first grid, fluid typography, predictable breakpoints                                |
| **A**  | Accessible & Adaptive    | WCAG-focused contrast, prefers-reduced-motion guardrails, dark/light sync                   |
| **F**  | Flexible & Fast          | modular CSS bundles, progressive complexity levels (`--crafts-complexity: simple            | balanced | rich`) |
| **T**  | Typographic & Thoughtful | curated system font stack by default with quick swap helpers for Inter/Charter              |
| **S**  | Semantic & Scalable      | element-first styling, JS-free dropdowns/tabs/modals, grows into utilities only when needed |

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

- _Base elements_: typography, forms, tables, media.
- _Layout_: containers, responsive grid, sidebar layouts, split screens, stack/box helpers.
- _Navigation_: navbar, breadcrumb, pagination, sidebar nav, footer.
- _Interactive (JS-free)_: dropdown, modal, tabs, accordion, tooltips, dark-mode toggle.
- _Data display_: cards, badges, alerts, progress, avatars, stats.
- _Forms_: input groups, toggles, custom checks/radios, file upload, validation messaging.
- _Utilities_: spacing, color, typography, flex/grid helpers, visibility + position.
- _Advanced_: glassmorphism, gradient borders, animation kits, scroll-driven effects, masonry.

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

| Phase | Focus              | Outputs                                                           | Target Size |
| ----- | ------------------ | ----------------------------------------------------------------- | ----------- |
| 1     | Semantic Core      | `crafts-variables.css`, `crafts-reset.css`, `crafts-semantic.css` | ~2 KB       |
| 2     | Layout System      | `crafts-grid.css`, `crafts-layout.css`, container helpers         | +3 KB       |
| 3     | Components         | `crafts-components.css`, `crafts-forms.css`, nav patterns         | +6 KB       |
| 4     | Utilities & Themes | `crafts-utils.css`, `crafts-themes.css`, complexity scaler        | +4 KB       |
| 5     | Docs & Polish      | Documentation site, examples/basic-components-advanced            | packaging   |

**Immediate priorities recorded by DeepSeek**

- Create the CRAFTS-branded folder structure and rename prefixes (`.crafts-btn`, `.crafts-card`, etc.).
- Lock the semantic core (already iterated once after the dark-mode screenshot feedback).
- Build Halfmoon-inspired layout primitives next, then JS-free interactive components, then utility shorthands.
- Replace the temporary theme toggle with the redesigned version (new CSS component, updated header markup, and a CraftTheme controller script + data-theme variables).

## Source Audit (Nov 2025)

| Area                                      | Status | Notes & Gaps                                                                                               |
| ----------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------- |
| `src/core/_variables.css`                 | ✅     | Full token set with dual themes + complexity switch.                                                       |
| `src/core/_reset.css`                     | ✅     | Fixed undefined token reference; now uses `--crafts-line-height-normal`.                                    |
| `src/core/_semantic.css`                  | ✅     | Comprehensive typography/forms/table styling plus basic typography utilities.                              |
| `src/layout/_layout.css`                  | ✅     | Container + section system, sidebar scaffold, and stack/cluster utilities complete.                         |
| `src/layout/_grid.css`                    | ✅     | Detailed CSS Grid system with breakpoints, offsets, and gap utilities.                                     |
| `src/components/_components.css`          | ⚠️     | Empty placeholder; should aggregate shared component tokens or advanced patterns.                          |
| Buttons / Cards / Forms / Navbar / Footer | ✅     | Implemented with CRAFTS prefixes; need docs/examples to showcase variants.                                 |
| `src/components/_icons.css`               | ✅     | Icon sizing + color utilities ready.                                                                       |
| Theme toggle / switcher                   | ⚠️     | CSS present but no JS controller to persist `[data-theme]`; duplicate `[data-theme]` variables vs tokens.  |
| JS-free interactive set                   | ❌     | Dropdowns, tabs, accordions, modals, tooltips still missing entirely.                                      |
| `src/utilities/_utils.css`, `_themes.css` | ❌     | Empty shells; need spacing/color/type helpers and optional glassmorphism tokens per roadmap phase 4.       |
| `src/crafts.css`                          | ⚠️     | Empty, so `build.js` stitches modules individually. Decide whether to delete or make it the master import. |
| `examples/`                               | ⚠️     | Basic/advanced/component demos exist but don’t yet cover grid/sidebar/theme toggle parity.                 |

Action items from the audit:

- ✅ **COMPLETED**: Fixed `--crafts-line-height` token reference in `_reset.css` to use `--crafts-line-height-normal`.
- ✅ **COMPLETED**: Added stack/cluster utilities to `_layout.css` (`.crafts-stack-*`, `.crafts-cluster-*` with alignment/justification variants).
- Populate `_components.css` with shared component primitives (badges, alerts, tabs scaffolding) and prep slots for JS-free interactions.
- Fill `_utils.css`/`_themes.css` with the scoped utilities outlined in the roadmap, keeping the gzipped budget in view.
- Decide on the role of `src/crafts.css` (master import vs. removal) so authoring workflows stay intuitive.
- Backfill dropdown/tab/accordion/modal CSS alongside docs + example coverage to hit the “JS-free interactions” promise.

## Competitive Landscape

The long-form exploration in `agents/INITIAL_PLAN_OF_CSS_FRAMEWORK.md` compares Bootstrap with adjacent frameworks. Highlights most relevant to CRAFTS:

| Framework    | Traits to Embrace                                                 | Watch-outs / Avoid                                                                               |
| ------------ | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Tailwind CSS | Utility-first flexibility, responsive defaults, efficient bundles | Low-level class soup can feel noisy—preserve semantic-first defaults so utilities stay optional. |
| Bulma        | Mobile-first grid, accessible components, approachable aesthetic  | Narrow color/theming knobs. Keep CRAFTS tokens richer and easier to tune.                        |
| Materialize  | Polished card/form patterns, Material coherence, good docs        | Heavy JS expectations and opinionated visuals. Remain CSS-first and brand-neutral.               |
| Foundation   | Professional layouts, accessibility rigor, enterprise trust       | Larger footprint + Sass tooling overhead. Hit our ≤25 KB goal with zero build-step requirement.  |
| Pure CSS     | Ultra-light modules, Normalize-style consistency                  | Sparse utilities/components. Ensure CRAFTS still feels batteries-included for semantic HTML.     |
| Element      | Theming + i18n support, stable component catalog                  | Vue coupling/licensing cost. Stay framework-agnostic and MIT.                                    |
| Skeleton     | Tiny footprint, mobile-first stack helpers                        | Stagnant maintenance + browser quirks. Signal active stewardship and test coverage.              |
| Metro UI     | Broad component library, design asset support, SASS customization | Inconsistent design language + confusing docs. Keep examples cohesive and docs opinionated.      |
| Powertocss   | SMACSS/DRY philosophy, fast to learn, open-source                 | Ambiguous pricing and abandoned roadmap. Publish ours transparently.                             |
| Spectre.css  | Minimal aesthetic, <10 KB bundles, modern typography              | Limited components/no JS primitives. Deliver richer interactions without bloat.                  |

**Guardrails informed by the review**

- **Semantic-first beauty**: raw HTML should look finished, avoiding Tailwind-like class overload unless opting into utilities.
- **Bundle discipline**: keep semantic build ≤15 KB gzipped and full bundle ≤25 KB while still covering layout + components.
- **Accessible theming**: dual themes, contrast safety, reduced-motion respect, and eventual RTL hooks differentiate us from Bulma/Materialize gaps.
- **JS-free interactions**: dropdowns, tabs, modals, and the theme toggle must work with CSS + progressive enhancement so we outshine Spectre/Pure without Materialize’s heft.
- **Docs + roadmap transparency**: high-quality guides and public milestones prevent Metro/Powertocss confusion and reinforce maintenance cadence.

## Theme & Utility Plan

**Theme toggle + controller**

- Merge `_theme-toggle.css` + `_theme-switcher.css` into a unified API with modifier classes (e.g. `.crafts-theme-toggle--compact`) while keeping `[data-theme]` tokens centralized in `src/core/_variables.css`.
- Build a `src/components/crafts-theme.js` helper (ES module) that:
  1. Reads `localStorage.craftsTheme` (light/dark/auto) and falls back to `prefers-color-scheme`.
  2. Applies `data-theme` on `document.documentElement` and dispatches a `crafts-theme-change` event.
  3. Syncs all `.crafts-theme-toggle` + `.crafts-theme-switcher` instances via `aria-pressed` + `aria-live` hints for SRs.
- Expose usage snippet in `examples/basic.html` and `docs/` so integrators know the minimal markup + script tag required.

**Theme extensions (`src/utilities/_themes.css`)**

- Store optional palettes (e.g., `data-theme="slate" | "sand" | "midnight"`) in this module to avoid bloating core tokens.
- Include glassmorphism + gradient token sets (`--crafts-surface-backdrop`, `--crafts-border-gradient`) guarded behind `.crafts-theme-glass`.
- Document the import order: `_themes.css` must load after `_variables.css` but before components so overrides flow properly. Reflect this in `build.js`.

**Utility helpers (`src/utilities/_utils.css`)**

- Implement spacing shorthand utilities (`.u-stack-*`, `.u-inline-gap-*`, `.u-pad-*`), typography tweaks (`.u-text-balance`, `.u-clamp-*`), and visibility helpers (e.g., `.u-only-desktop`).
- Provide color helpers tied to tokens (e.g., `.u-bg-surface`, `.u-border-muted`) instead of hard-coded hex values.
- Gate experimental helpers (glassmorphism, sticky affordances) behind `[data-crafts-complexity="rich"]` so slim bundles remain lean.
- Update `dist/` expectations: semantic bundle still excludes `_utils.css`/`_themes.css`; full bundle keeps them opt-in but ensures tree-shaking is possible by shipping each section under a predictable comment block.

## Documentation & Examples Plan

**Docs structure (`/docs`)**

- Create `docs/index.md` as the landing page (value prop, installation, CDN snippet, bundler instructions).
- Add `docs/getting-started.md`, `docs/layout.md`, `docs/components.md`, `docs/themes.md`, each referencing the relevant `src/` files and including copy-pastable markup.
- Document the optional JS (`crafts-theme.js`, future component helpers) in `docs/interactions.md`, stressing progressive enhancement + accessibility notes.
- Keep file sizes + bundle targets visible in `docs/performance.md` to reinforce the ≤25 KB pledge.

**Examples refresh (`/examples`)**

- `basic.html`: showcase semantic defaults + theme toggle wiring; include typography, lists, forms, and call out which bits require zero classes.
- `components.html`: add sections for buttons, cards, navbar, forms, footer, and all new JS-free components; include code snippets plus dark-mode preview buttons.
- `advanced.html`: demonstrate sidebar layout, dashboard cards, stacked sections, and grid utilities plus the theme switcher.
- `grid-test.html` / `container-test.html`: align with the finalized grid/container API and serve as regression fixtures (keep them terse but exhaustive).
- Add a new `examples/themes.html` once `_themes.css` ships so users can preview sand/slate/midnight palettes.

**Workflow**

- After each major CSS change run `npm run build` and manually load all examples (or `npm run dev`) to catch regressions.
- Capture screenshots for inclusion in `docs/` and future marketing pages; store source assets under `docs/media/`.

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

### Detailed build order (layout + components)

1. **Layout polish**
   - Finish stack/cluster utilities and responsive gutters inside `src/layout/_layout.css`.
   - Normalize breakpoints + column API inside `src/layout/_grid.css` (ensure `.crafts-col` + `crafts-col-md-*` combos match the roadmap).
   - Run `node build.js` and smoke-test `examples/grid-test.html` + `examples/container-test.html`.
2. **Navigation scaffolding**
   - Update `examples/components.html` to demonstrate `.crafts-topbar`, `.crafts-header`, `.crafts-main-nav`, and sidebar layout usage.
   - Ensure navbar/sidebar CSS degrades gracefully below 768 px.
3. **JS-free interactive set**
   - Implement dropdown, tabs, accordion, modal, tooltip patterns inside newly-expanded `src/components/_components.css` (or dedicated modules) using `[data-state]` attributes + `:checked`/`:target` tricks.
   - Add accessibility helpers (focus traps, aria attributes, reduced-motion guards) where CSS alone can’t cover needs.
   - Showcase each pattern inside `examples/components.html` with progressive-enhancement notes.
4. **Validation pass**
   - Rebuild `dist/` bundles, verify gzipped sizes (<25 KB full).
   - Capture screenshots + notes in `docs/` for release documentation.
