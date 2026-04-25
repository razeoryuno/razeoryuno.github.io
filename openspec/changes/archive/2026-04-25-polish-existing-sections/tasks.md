## 1. Design tokens (no visible change)

- [x] 1.1 Capture baseline screenshots of About, Projects, Experience, Education at 375px, 768px, and 1440px before any edits (save to a local `before/` folder, not committed)
- [x] 1.2 Add `--accent` custom property in `src/styles/global.css`, initial value `#00D4FF` (matches `siteConfig.accentColor`)
- [x] 1.3 Add `--focus-ring` token (`2px solid var(--accent)` + 2px offset) plus a global `:focus-visible` rule applying it to `a, button, [role="button"], [tabindex]:not([tabindex="-1"])`
- [x] 1.4 Add `.section-pad` utility class in `global.css` that reproduces `p-8 sm:p-12 md:p-16 lg:p-24` via CSS media queries, so all four sections can use a single class
- [x] 1.5 Add `@media (prefers-reduced-motion: reduce)` block that zeroes out `.animate-fade-in`, `.skill-fill` transition, `lb-scale` / `lb-in` animations, and sets `.cta-btn`, `.store-btn`, hover `transform: none !important` for those targets
- [x] 1.6 Build (`npm run build`) to confirm no regressions; manually diff one page against a baseline screenshot to confirm zero visual change at this step

## 2. Migrate About section

- [x] 2.1 Replace the inline `p-8 sm:p-12 md:p-16 lg:p-24` on the `<section>` root in `About.astro` with the shared `.section-pad` class
- [x] 2.2 Add `aria-labelledby` on the `<section>` pointing at the H2's `id` (assign the H2 an id like `about-heading`)
- [x] 2.3 Verify at 375px that long skill names ("Real-time Multiplayer (MagicOnion / gRPC)") wrap without pushing the percentage off-screen; adjust flex/grid layout if they do
- [x] 2.4 Keyboard-tab through the section — focus must be visible on any focusable elements (none expected inside About itself, but verify there's no residual focus leak)

## 3. Migrate Experience section

- [x] 3.1 Replace padding classes on the `<section>` root in `Experience.astro` with `.section-pad`
- [x] 3.2 Add `aria-labelledby` on the `<section>` pointing at the H2's id
- [x] 3.3 Verify timeline dots stay centered on the vertical rule at 375px / 768px / 1440px — adjust the `absolute -left-[21px]` offset if needed at small widths
- [x] 3.4 Verify entry cards do not overlap the vertical rule at 375px; adjust card `ml-4` margin if they do
- [x] 3.5 Confirm date-range text wraps / truncates gracefully when the screen is narrow

## 4. Migrate Education section

- [x] 4.1 Replace padding classes on the `<section>` root in `Education.astro` with `.section-pad`
- [x] 4.2 Add `aria-labelledby` on the `<section>` pointing at the H2's id
- [x] 4.3 Confirm the conditional `{edu.achievements && edu.achievements.length > 0 && ...}` already prevents rendering an empty list (it does per current code) — no code change, document in comment only if non-obvious

## 5. Migrate Projects section

- [x] 5.1 Replace padding classes on the `<section>` root in `Projects.astro` with `.section-pad`
- [x] 5.2 Add `aria-labelledby` on the `<section>` pointing at the H2's id
- [x] 5.3 Make gallery images keyboard-activatable: add `role="button"`, `tabindex="0"`, and `aria-label={`Open screenshot ${i+1} of ${total} — ${project.name}`}` to `img[data-lightbox]`; wire Enter / Space in the existing click handler
- [x] 5.4 Make `.video-thumb` keyboard-activatable: wrap or mark with `role="button"`, `tabindex="0"`, `aria-label={`Play video demo — ${project.name}`}`; wire Enter / Space
- [x] 5.5 Lightbox focus trap: on open, move focus to `#lightbox-close`; on Tab / Shift+Tab, cycle among `#lightbox-close`, `#lightbox-prev`, `#lightbox-next`; on close, return focus to the element that opened it (stash in `lastFocus` variable)
- [x] 5.6 Verify `.expand-toggle` shows focus ring and has ≥44px effective tap height (increase vertical padding if below)
- [x] 5.7 Verify `.cta-btn` / `.store-btn` have ≥44px tap height including padding
- [x] 5.8 At 375px, verify gallery slot sizes: `--landscape` shows ~1 slot with next-slot hint (may need to reduce from 427px to ~300px on small widths via media query); `--portrait` fits within viewport (may need to reduce from 180px to ~150px)
- [x] 5.9 At 375px, verify a project with a long name doesn't push the CTA off-screen — `.asset-header` layout stays usable, name truncates or wraps
- [x] 5.10 Remove the `style={\`background: ${siteConfig.accentColor}\`}` inline expressions only where they can be replaced by `var(--accent)` in `global.css` — conservative: leave existing inline injections alone unless a CSS rule is cleaner

## 6. Cross-section accessibility pass

- [x] 6.1 Keyboard-only walkthrough of the whole page: Tab from the top, verify every focusable element in About/Projects/Experience/Education receives a visible focus ring; note and fix any that don't
- [x] 6.2 Open the lightbox by keyboard, navigate with Arrow keys and Escape, confirm focus returns to the invoking gallery item on close
- [x] 6.3 Enable OS `Reduce motion` and confirm: no fade-in, no hover lift on CTA / store buttons, no lightbox scale-in, skill bars fill instantly on load
- [x] 6.4 Run the browser's accessibility inspector (DevTools Accessibility panel) on each section; resolve any contrast warnings on body copy / secondary text
- [x] 6.5 Audit uses of `var(--text-muted)` — any that carry reader-meaningful content must be raised to `var(--text-secondary)`

## 7. Content tightening in `src/config.ts`

- [x] 7.1 Review `aboutMe` against the voice rules (role first, years, stack, no first-person, ≤~80 words); propose rewrite as a diff — do not commit without reading against the rules
- [x] 7.2 Audit every `experience[].bullets` entry: each bullet starts with a past-tense action verb and references a concrete artifact / metric; rewrite any weak bullets (the 2013–2019 entries are thin — propose sharper bullets, do not fabricate)
- [x] 7.3 For each `education[]` entry with `achievements: []`: either fill with real content (honors, GPA, relevant coursework, capstone project) or remove the `achievements` field entirely
- [x] 7.4 Audit every `projects[].description`: ≤~40 words, product-blurb voice not dev-chronology; relocate development-process prose to `responsibilities` if it fits there
- [x] 7.5 Verify every `projects[].status` is one of `"Live" | "Out of Service" | "Unreleased" | "Thesis"` — fix or remove any outliers
- [x] 7.6 Confirm no user-facing prose has crept into `.astro` files during sections 2–5 (grep for long string literals inside `src/components/*.astro`)

## 8. Final verification

- [x] 8.1 `npm run build` — build succeeds with no new warnings beyond the known Windows libuv quirk noted in CLAUDE.md
- [x] 8.2 `npm run preview` — click through every section at 375px, 768px, 1440px; compare to step 1.1 baselines
- [x] 8.3 Verify `openspec validate polish-existing-sections --strict` passes (or the project-local equivalent) before archiving
- [x] 8.4 Open a PR or commit sequence that matches the rollout order in `design.md` §Migration Plan (tokens first, per-section migrations, a11y pass, content edits)
