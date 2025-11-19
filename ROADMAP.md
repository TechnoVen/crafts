# CRAFTS CSS Roadmap

This living roadmap tracks everything that has already shipped, what is being actively polished, and what is queued next. Checkboxes use the standard Markdown convention (`[x]` = complete, `[ ]` = pending).

## ✅ Completed Milestones

- [x] Semantic core + design tokens stabilized (`src/core/` + `dist/crafts-semantic.css`).
- [x] Smart reset aligned with accessibility best practices (prefers-reduced-motion, typography defaults).
- [x] Theme system overhaul (new toggle component, JS controller, data-theme variables, SRI-ready demos).
- [x] Layout utilities expanded with container/section primitives, stack & cluster helpers.
- [x] Icon system refined for Lucide/Feather integration, including size + color helpers.
- [x] Initial planning docs captured in `agents/` (`CRAFTS-framework-overview.md`, `INITIAL_PLAN_OF_CSS_FRAMEWORK.md`).

## 🔧 In Progress / Near-Term

- [ ] Polish `craftcss_homepage` by replacing remaining inline styles with framework classes.
- [ ] Document stack & cluster utilities inside `docs/` with runnable examples.
- [ ] Add Subresource Integrity hashes to all external scripts (lucide) across examples.
- [ ] Extend `agents/INITIAL_PLAN_OF_CSS_FRAMEWORK.md` with Claude’s latest planning notes.
- [ ] Write a docs walkthrough for `examples/grid-test.html` (layout stress test).
- [ ] Add a CI check/script that ensures `dist/` stays in sync with `src/` before commits.

## 🎯 Next Up (from roadmap snapshot)

1. [ ] Finish grid/column polish (`src/layout/_grid.css`) and showcase in `examples/components.html` & `grid-test.html`.
2. [ ] Flesh out JS-free interactive set (dropdowns, tabs, accordion, modal, tooltip) under `src/components/` and document accessibility notes.
3. [ ] Publish icon/font guidance plus theme/utility strategy in `docs/`.
4. [ ] Expand the documentation site with release notes, screenshots, and usage recipes.
5. [ ] Keep logging architectural decisions inside `agents/` so contributors can follow the rationale.

## 📌 Notes

- Each milestone should end with `node build.js` + smoke-testing `examples/basic.html` in both light/dark modes.
- When a task moves to “Completed,” replace the `[ ]` with `[x]` and edit the section accordingly.
