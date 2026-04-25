## Context

Single-page static site (Astro 5 + Tailwind v4) with four CV sections rendered from `src/config.ts`. Projects has had three iterations of enrichment (gallery, lightbox, expandable details, dev log, distribution); the other three haven't kept pace. A prior commit (`790fbfe Add screenshot gallery, lightbox, YouTube embeds, and project images`) is responsible for most of the Projects drift.

Stakeholders: solo dev (Ittiwat). No other contributors, no design system docs, no existing specs in `openspec/specs/`. The source of truth for tokens is `src/styles/global.css`; the source of truth for content is `src/config.ts`. Deploy is GitHub Pages via Actions on `main`; current work is on an active branch with uncommitted section edits.

Constraints:
- Must not change the `siteConfig` shape in a way that breaks existing entries (fields can be added; types must stay compatible).
- Must not break the existing lightbox / expand-toggle scripts in `Projects.astro`.
- No new runtime dependencies; Tailwind v4's CSS-plugin model means no `tailwind.config.*`.
- Manual QA only — there is no Playwright / Vitest / axe harness in this repo.

## Goals / Non-Goals

**Goals:**
- Every CV section (About, Projects, Experience, Education) satisfies the same layout, responsive, a11y, and content bar before merging to `main`.
- Shared values (section padding, accent tint, focus ring) live in `global.css` tokens — not duplicated Tailwind strings per component.
- Work is incremental: each section can be shipped independently without blocking the others.

**Non-Goals:**
- No light-theme / theme-toggle work. Dark-only stays.
- No new capabilities (blog, contact form, dark/light toggle) — deferred.
- No automated a11y/visual-regression test harness. Manual verification is the bar for this change.
- No rewrite of the Projects enrichment (gallery, lightbox, expandable details) — those stay; they are the target for sibling sections to catch up to, not tear down.
- No SEO / meta / OG-image work.

## Decisions

### Decision 1: Introduce a small set of design tokens in `global.css` rather than a Tailwind theme extension

Tailwind v4 in this project has no `tailwind.config.*`. Rather than fight that model, add new CSS custom properties to `:root` in `src/styles/global.css` for values currently duplicated across sections:

- `--section-padding-y` / `--section-padding-x` at each breakpoint — replaces the identical `p-8 sm:p-12 md:p-16 lg:p-24` string on every section's root.
- `--focus-ring` — one accent-tinted outline used everywhere an interactive element receives focus.
- `--accent` — mirror of `siteConfig.accentColor` exposed as a variable so CSS files can reference it (currently only injected via inline `style=` in `.astro` files).

**Alternative considered:** adding a `tailwind.config.js` to extend the Tailwind theme. Rejected because it contradicts the repo's deliberate v4 CSS-plugin setup (noted explicitly in `CLAUDE.md`) and adds build-config surface for little gain on a site with ~6 components.

### Decision 2: Capabilities are cross-cutting dimensions, not per-section

Four capabilities (`cv-section-layout`, `cv-section-responsive`, `cv-section-a11y`, `cv-section-content`) each apply across all four sections, rather than a per-section capability (`about-section`, `projects-section`, …).

**Rationale:** polish is about raising a shared bar. Splitting by section would duplicate the same focus-ring / padding / content-tone requirement four times. The cross-cutting split makes each requirement testable once against every section.

**Alternative considered:** a single `cv-section-polish` capability bundling all four dimensions. Rejected because it makes the spec one big undifferentiated list and loses the mapping to the user's four stated focus areas.

### Decision 3: Accessibility is requirement-level, not aspirational

`cv-section-a11y` uses SHALL/MUST. Concretely:
- Every interactive element (lightbox controls, expand toggle, video thumb, gallery image, store buttons, section links) has a visible focus state distinct from hover.
- Lightbox open/close/prev/next are reachable by keyboard alone (the existing keydown handler covers Escape / arrow keys once focus is in the lightbox; gallery images and `.video-thumb` need `role="button"` + `tabindex="0"` + Enter/Space handlers since they are currently plain `<img>` / `<div>`).
- `prefers-reduced-motion: reduce` disables fade-in keyframes, hover translate-Y lifts, and lightbox scale animation.

### Decision 4: Content edits go through `src/config.ts` only

No copy moves into `.astro` components. This preserves the single-source-of-truth rule in `CLAUDE.md`. Empty `achievements: []` arrays in `education` entries are either filled in with real content (if there is any) or removed — no empty bullet lists rendered.

### Decision 5: Manual QA plan replaces automated verification

Because there is no test harness, each `tasks.md` task ends with an explicit "verify at viewport X" step. The three viewports to check: 375px (iPhone mini), 768px (iPad portrait), 1440px (desktop). Keyboard-only pass with Tab/Shift+Tab/Enter/Esc/Arrows through the whole page is a named task.

## Risks / Trade-offs

- **Visual regression risk → Mitigation**: take before/after screenshots of each section at 375 / 768 / 1440 before touching the component. Keep the current commit clean so `git diff --stat` can show the per-file delta reviewer-by-reviewer.
- **Accent-color tokenization could conflict with inline `style={...accentColor...}` expressions → Mitigation**: add `--accent` as a new token without removing the existing inline injections. Components that already use inline injection stay unchanged; only NEW CSS rules reference `var(--accent)`. Migrating existing inline usage is out of scope.
- **Focus ring on the accent color (`#00D4FF`) may fail contrast against the card background hover state (`#242424`) on the edge case → Mitigation**: use `outline: 2px solid var(--accent); outline-offset: 2px;` — offset guarantees the ring sits on the section background, not the card, and the 2px outline + 2px offset gives sufficient visual separation.
- **Content rewrite could remove detail Ittiwat wants kept → Mitigation**: the content-tightening task is last and explicitly framed as "propose edits in the task's diff, don't delete unreviewed text." User can decline individual rewrites.
- **Tailwind v4 + CSS var for padding is untested in this repo → Mitigation**: fall back to reusing a custom class `.section-pad` in `global.css` that hard-codes the same breakpoint rules, applied to every `<section>`. Same effect, no dependency on Tailwind arbitrary-value parsing of CSS vars.

## Migration Plan

No migration needed — this is a forward-only visual/content polish on a single-page static site. Rollback = revert the merge commit. No data, no API, no versioned URLs.

Rollout order (enforced by `tasks.md`):
1. Land tokens in `global.css` first (no visible change by itself).
2. Migrate sections to the new tokens one at a time (About → Experience → Education → Projects), each with its own commit, each verified at three viewports.
3. Apply a11y pass across all four sections in a single commit (focus rings, ARIA, reduced-motion) — easier to review as one cross-cutting diff.
4. Content edits to `src/config.ts` last — isolated commit, easiest to revert if copy is disputed.

## Open Questions

- Should `siteConfig.accentColor` move into `global.css` as the canonical source, with `config.ts` re-importing it? Deferred — current dual source works and migrating it is out of scope for polish.
- The `.animate-fade-in` / `.delay-*` classes in `global.css` aren't currently used by any section component based on the reads above. Keep them (future use) or drop? Default keep — removal is a separate cleanup change.
