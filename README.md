<div align="center">

# 🧰 CRAFTS CSS

**Clean • Responsive • Accessible • Flexible • Typographic • Semantic**

Modern semantic-first CSS framework that makes plain HTML feel polished while still scaling up to dashboards, layout systems, and utility workflows.

[Examples](examples/basic.html) • [Docs (WIP)](docs/) • [Agents Log](agents/)

</div>

---

## Why CRAFTS?

- **Zero-config beauty** – Raw HTML elements inherit thoughtful typography, spacing, and interaction states inspired by Pico/Notion.
- **Layout chops** – Halfmoon-style containers, sidebar scaffolding, and section utilities keep content off the screen edges by default.
- **JS-free interactions** – Dropdowns, tabs, modals, and the redesigned theme toggle work purely with CSS + progressive enhancement.
- **Utility escape hatch** – Lightweight spacing/color/type utilities arrive later in the build so you opt in only when needed.
- **Performance-first** – Target bundle: ≤15 KB gzipped for the core, ≤25 KB for everything (components, layout, utilities).

---

## Getting Started

```bash
git clone https://github.com/TechnoVen/crafts.git
cd crafts
npm install
npm run build        # or `node build.js`
npm run dev          # optional: live preview (needs live-server globally)
```

- `dist/crafts-semantic.css` – design tokens + reset + semantic defaults (perfect for Markdown-heavy sites).
- `dist/crafts.css` – full framework including components, layout, icons, and utilities.

Reference `examples/basic.html` to see the current bundle in action, including the beautiful theme toggle with state persistence.

---

## Repository Layout

| Path | Purpose |
| --- | --- |
| `src/core` | Design tokens, smart reset, semantic HTML styling |
| `src/layout` | Container/section/grid primitives (Halfmoon-inspired) |
| `src/components` | Buttons, cards, nav, forms, theme toggle/switcher, etc. |
| `src/utilities` | Future spacing/color/type utilities + theme extensions |
| `examples/` | Static demo pages; `basic.html` is the primary showcase |
| `dist/` | Build artifacts (`crafts.css`, `crafts-semantic.css`) |
| `agents/` | Decision logs, DeepSeek discussion, internal docs |

---

## Scripts

| Command | Description |
| --- | --- |
| `npm run build` | Concatenates the CSS modules into `dist/` bundles. |
| `npm run dev` | Serves `examples/` with live reload (requires `live-server`). |
| `npm run minify` | Minifies `dist/crafts.css` into `dist/crafts.min.css` (needs `csso`). |

---

## Roadmap Snapshot

1. Harden semantic core + tokens (done).
2. Expand layout primitives (`crafts-layout.css`, `crafts-grid.css`).
3. Flesh out JS-free interactive components (dropdowns, tabs, modals).
4. Introduce utility/theming add-ons (spacing shorthands, glassmorphism kit).
5. Publish documentation site + richer examples.

Track detailed planning in `agents/CRAFTS-framework-overview.md`.

---

## Contributing

1. Fork and clone.
2. Create a feature branch.
3. Run `node build.js` before committing so `dist/` stays in sync.
4. Document major decisions in `agents/` to keep future contributors aligned.

Issues and PRs are welcome! Let’s keep the framework Clean, Responsive, Accessible, Flexible, Typographic, and Semantic.
