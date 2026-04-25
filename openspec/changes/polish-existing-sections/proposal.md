## Why

The Projects section has evolved well beyond the other three sections (About, Experience, Education) with galleries, lightbox, expandable details, dev logs, and distribution rows — a ~640-line diff vs. ~10 lines per other section. The imbalance is visible: Projects reads like a polished product tile while the sibling sections feel like earlier drafts, and no section was built with explicit a11y, mobile-touch, or copy standards. This change brings all four sections to a shared presentation and content bar before the branch merges to `main`.

## What Changes

- Unify spacing, typography, card treatment, accent usage, and section-header chrome across About / Projects / Experience / Education so they read as one system.
- Tighten mobile layouts: gallery slot sizing on narrow viewports, header CTA wrapping in project cards, timeline dot alignment in Experience, comfortable tap targets on expand toggles and skill bars.
- Add an accessibility baseline: visible focus rings, keyboard navigation for the lightbox / expand toggles / gallery, `aria-*` attributes on interactive elements, sufficient contrast for muted text, and a `prefers-reduced-motion` path for fade-ins and transitions.
- Tighten content in `src/config.ts`: sharpen `aboutMe`, normalize experience bullet voice (action verb first, outcome-focused), and fill in empty `education[].achievements` or remove the field when nothing is worth listing.
- No changes to `src/pages/index.astro` routing, site config keys, or deployment pipeline. This is presentation + content only.

## Capabilities

### New Capabilities
- `cv-section-layout`: Visual consistency standards shared by every CV section — spacing scale, section-header pattern, card chrome, accent-color usage, and typography roles.
- `cv-section-responsive`: Responsive and touch-ergonomics requirements for every CV section at mobile, tablet, and desktop breakpoints.
- `cv-section-a11y`: Accessibility baseline every CV section must satisfy — keyboard reachability, focus visibility, ARIA semantics, contrast, and reduced-motion support.
- `cv-section-content`: Content voice, length, and completeness rules for copy driven from `src/config.ts`.

### Modified Capabilities
_None — no existing specs in `openspec/specs/`._

## Impact

- **Code**: `src/components/About.astro`, `src/components/Projects.astro`, `src/components/Experience.astro`, `src/components/Education.astro`, `src/styles/global.css`, `src/config.ts`.
- **Design tokens**: May add new CSS custom properties in `global.css` (e.g., a shared section-padding token, focus-ring token) to replace ad-hoc Tailwind padding strings duplicated across sections.
- **Build / deploy**: No change. Astro build stays the same; GitHub Pages workflow untouched.
- **Dependencies**: No new npm packages expected. Tailwind v4 and Astro 5 only.
- **Risk**: Mostly visual — regressions would be caught by eye during `npm run dev` review on desktop + mobile widths. No runtime logic outside the existing lightbox / expand-toggle scripts.
