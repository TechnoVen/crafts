The architecture of **CRAFTS CSS**, ensuring it adheres strictly to the **DRY Principle** and maintains our goal of a **Human-Readable, No-Learning-Curve** experience, built upon the foundation we've established.

The architecture will be named the **CRAFTS $\boldsymbol{\pi}$ (Pi) Architecture** (Progressive Interoperability).

## 🏛️ CRAFTS $\boldsymbol{\pi}$ (Pi) Architecture: Progressive Interoperability

This architecture defines five strict layers of inheritance, ensuring that every subsequent layer can override the previous one, and that no style is defined more than once.

### **Architecture Pillars**

| Pillar                     | Principle Applied                   | Implementation Detail                                                                                                                   |
| :------------------------- | :---------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| **Pico Inheritance**       | **DRY / Semantic First**            | Base HTML elements (Layer 3) derive their styles directly from tokens (Layer 1), eliminating the need for classes for basic components. |
| **Token-Driven**           | **DRY / Single Source of Truth**    | All values (spacing, color, typography) are defined only once in `_variables.css` (Layer 1).                                            |
| **Progressive Complexity** | **Human Readable / Flexibility**    | Styles are delivered in increasing levels of complexity: from zero-config Semantic to highly customizable Utility.                      |
| **Utility Supplement**     | **No Learning Curve / Flexibility** | Utilities (Layer 5) only exist to supplement, override, or combine the component/semantic layer, not to replace them.                   |

## 📐 The Five Architectural Layers

| Layer                           | File/Location                       | Purpose                                                                                                                                   | Role in DRY / Inheritance                                                                                                        |
| :------------------------------ | :---------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| **Layer 1: Design Tokens**      | `src/core/_variables.css`           | **Single Source of Truth** for all design values (colors, spacing, typography).                                                           | Defines values once. All other layers _must_ reference these variables.                                                          |
| **Layer 2: Smart Reset**        | `src/core/_reset.css`               | Normalizes browser differences and applies universal accessibility guardrails (e.g., `box-sizing: border-box`, `prefers-reduced-motion`). | Provides a clean, predictable baseline for Layer 3.                                                                              |
| **Layer 3: Semantic Core**      | `src/core/_semantic.css`            | Styles raw HTML elements (`h1`, `p`, `input`, `button`, `a`, `ul`, `table`) using Layer 1 tokens.                                         | **The Zero-Config Layer.** Reduces code repetition by eliminating the need for basic classes.                                    |
| **Layer 4: Component & Layout** | `src/components/*` & `src/layout/*` | Defines complex, reusable UI patterns (Card, Navbar, Grid, Sidebar) and **JS-free interactive components** (Modal, Tab, Dropdown).        | **The Component Layer.** Inherits from Layer 3, only adding complexity/structure where semantics are insufficient.               |
| **Layer 5: Utility & Theme**    | `src/utilities/*` & `src/themes/*`  | Provides low-level, atomic classes (Tailwind style) and complex theme extensions (Glassmorphism, Complexity).                             | **The Customization Layer.** Overrides Layer 4/3 to provide granular control and advanced styling without modifying source code. |

---

## 🛠️ Current Status Audit & Refinement Plan

Based on the architecture above, here are the necessary refinements to fully align our existing work with the DRY and Human-Readable policies:

| Area                       | Status Quo                                                                                                   | Improvement Needed                                                                                                                                                                                                             | Rationale & DRY Refinement                                                                                                     |
| :------------------------- | :----------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| **Build Process**          | Concatenates files individually (`build.js`).                                                                | **Finalize Build Order:** Ensure the full build script strictly follows the 5-Layer order.                                                                                                                                     | Guarantees **CSS Specificity and Inheritance** is predictable. Layer 5 must always load last to ensure utility overrides work. |
| **Semantic vs. Component** | Button styles were initially in `_semantic.css`, then split.                                                 | **Clear Rule:** Button Base Styles (`padding`, `border-radius`, `font`, `transition`) must remain in `_semantic.css`. Specific **variants** (`.crafts-btn-primary`, `.crafts-btn-secondary`) should live in `_components.css`. | DRY: The default look comes from semantics; the variant comes from components. Eliminates repeating common button properties.  |
| **Forms Styling**          | Forms have input styles in `_semantic.css` and additional classes like `.crafts-form-group` in `_forms.css`. | **DRY Enforcement:** Move all raw element styling for `input`, `select`, and `textarea` to `_semantic.css`. Keep only complex structures (like `.crafts-form-group` or custom checkbox/radio styling) in `_forms.css`.         | Ensures the Pico-style zero-config form look works without loading the components layer.                                       |
| **Layout Utilities**       | We have `_layout.css` (for Grid/Sidebar) but almost empty `_utils.css`.                                      | **Prioritize Stack/Cluster:** Implement the planned stack/cluster utilities using the Layer 5 Utility module.                                                                                                                  | Fulfills the promise of providing high-value layout primitives without forcing grid or complex Flexbox setups.                 |
| **Theme Toggle**           | We have CSS for the toggle, but the persistent logic is in a temporary JS script in `examples/basic.html`.   | **Create $\boldsymbol{crafts-theme.js}$:** Build the planned small, self-contained ES module to handle theme persistence (Layer 4/5 integration).                                                                              | Isolates JS logic into a modular, optional file, maintaining the CSS-first principle.                                          |

### **Next Action Based on Architecture**

The architectural plan is now sound and strictly follows DRY and our core principles. The next logical step is to address the **component and layout** gaps (Layer 4) identified in the audit.

The most critical gap that enhances both user experience and the framework's versatility is the **Layout Primitives**.

**I recommend prioritizing the implementation of the $\boldsymbol{crafts-grid.css}$ and the planned Stack/Cluster utilities in $\boldsymbol{src/layout/_layout.css}$ (Layer 4) to ensure robust layout control.**
