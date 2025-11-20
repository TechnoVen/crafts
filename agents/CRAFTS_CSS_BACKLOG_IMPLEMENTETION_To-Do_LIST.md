The **CRAFTS $\boldsymbol{\pi}$ (Pi) Architecture** is exceptionally well-suited to handle all the advanced features identified in the reference review.

The architecture's strength lies in its strict layering, which perfectly aligns with the new CSS features:

- **DRY features** (like `color-mix()`) map to the **Design Tokens (Layer 1)**.
- **Accessibility features** (like `:focus-visible`) map to the **Smart Reset (Layer 2)** and **Semantic Core (Layer 3)**.
- **New elements** (like `<dialog>`) map to the **Component Layer (Layer 4)**.

**Conclusion:** We do **not** need to fundamentally revise the **CRAFTS $\boldsymbol{\pi}$ (Pi) Architecture**. We only need to strictly implement the layers and their inheritance rules.

---

## 📋 CRAFTS CSS Backlog: Implementation To-Do List

This backlog is prioritized by architectural layer and strategic value, guiding us from essential layout primitives to advanced utility features.

### **Phase 1: Layout Primitives & Grid Fixes (Layer 4 - Immediate Priority)**

This phase focuses on core structural components to ensure responsive and flexible page composition.

| Item                            | Architectural File                                     | Rationale                                                                                                                                           |
| :------------------------------ | :----------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Grid System Finalization**    | `src/layout/_grid.css`                                 | Finalize CSS Grid API (e.g., `crafts-col-md-4`) and implement cross-browser support for Subgrid (if feasible) to maximize **Flexible** (F) layouts. |
| **Implement Stack Utilities**   | `src/layout/_layout.css`                               | Create the planned `.crafts-stack-*` vertical spacing utilities using the `gap` property (DRY) to replace reliance on margins.                      |
| **Implement Cluster Utilities** | `src/layout/_layout.css`                               | Create the planned `.crafts-cluster-*` horizontal spacing utilities for flexible inline content placement.                                          |
| **Fix Sidebar Responsiveness**  | `src/layout/_layout.css`                               | Ensure the Halfmoon-inspired sidebar layout gracefully collapses or hides on mobile devices below 768px.                                            |
| **Add `aspect-ratio` support**  | `src/layout/_layout.css` / `src/components/_cards.css` | Implement utility/component classes for maintaining consistent dimensions (e.g., `.crafts-ratio-16x9`).                                             |

---

### **Phase 2: Core Interactivity & Components (Layer 4 - Component Focus)**

This phase focuses on the **JS-Free Interactive Set** and foundational components, fulfilling the promise of **Accessible** (A) and **Flexible** (F) interactions.

| Item                   | Architectural File               | Rationale                                                                                                                                          |
| :--------------------- | :------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| **JS-Free Dropdown**   | `src/components/_components.css` | Implement using `:focus-within` or `:checked` for native, accessible menus.                                                                        |
| **JS-Free Tab System** | `src/components/_components.css` | Implement using CSS `:target` or radio button tricks for navigation without a JavaScript dependency.                                               |
| **JS-Free Modal**      | `src/components/_components.css` | Implement using the `<dialog>` element or `:target` selector for fully accessible modals.                                                          |
| **Card Variants**      | `src/components/_cards.css`      | Create variants like `.crafts-card-flat`, `.crafts-card-shadow`, and explore using the `:has()` selector to style cards based on internal content. |
| **Form Custom Checks** | `src/components/_forms.css`      | Style custom checkboxes, radios, and toggle switches to look consistent across browsers.                                                           |

---

### **Phase 3: Utility System & Theming (Layer 5 - Advanced Flexibility)**

This phase focuses on the advanced overrides that grant the developer **Tailwind-like Flexibility** (F).

| Item                      | Architectural File                  | Rationale                                                                                                                                                             |
| :------------------------ | :---------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **DRY Color Utilities**   | `src/utilities/_utils.css`          | Implement utility classes (`.bg-primary`, `.text-success`) derived exclusively from HSL tokens, ideally using the CSS `color-mix()` function for hover/active states. |
| **Theming Controller**    | `crafts-theme.js` (Optional Module) | Build the planned small JavaScript module to handle theme persistence (`localStorage`) and auto-detection, maintaining the **Accessible** (A) principle.              |
| **Complexity Scaler CSS** | `src/utilities/_themes.css`         | Implement styles (e.g., shadow depth, border radius) that change based on `[data-crafts-complexity="rich"]` to showcase advanced themes (like glassmorphism).         |
| **Typography Utilities**  | `src/utilities/_utils.css`          | Add high-value utilities like `.u-text-balance` (using `text-wrap: balance`) and `.u-clamp-*` (for line clamping).                                                    |
| **Spacing Shorthands**    | `src/utilities/_utils.css`          | Implement atomic spacing classes (e.g., `.p-4`, `.mt-2`) derived from Layer 1 tokens.                                                                                 |

---

### **Phase 4: Documentation & Polish (Cross-Layer)**

This phase ensures the framework is easy to learn and ready for release.

| Item                               | Architectural File    | Rationale                                                                                                                       |
| :--------------------------------- | :-------------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| **Refine `_reset.css`**            | `src/core/_reset.css` | Implement support for `:focus-visible` to enhance keyboard accessibility.                                                       |
| **Create Documentation Structure** | `docs/`               | Build the foundation for `getting-started.md`, `layout.md`, and `components.md` as outlined in the overview.                    |
| **Update Example Pages**           | `examples/`           | Ensure `basic.html`, `components.html`, and `advanced.html` fully demonstrate the new Layout Primitives and JS-Free Components. |
| **Final Build Script Polish**      | `build.js`            | Update script to correctly chain all new files in the 5-Layer order and add minification for `crafts.min.css`.                  |
| **Accessibility Audit**            | All layers            | Perform a manual check of semantic elements and focus states against WCAG requirements.                                         |
