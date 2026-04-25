# CLAUDE.md — razeoryuno.github.io

Portfolio site for Ittiwat Tuntithavorn. Single-page CV / résumé deployed to GitHub Pages.

## Working rules

- **Always update this CLAUDE.md** when structure, stack, content shape, or conventions change — keep it current with the codebase.
- **Memory is local to this repo.** Save all persistent memories to `.claude/memory/` inside this repo, not to the global user memory path.
- **Never output existing code.** Only show what changed — diffs, new snippets, or a one-line summary. Do not repeat unchanged code back to the user.
- **All content is in `src/config.ts` — never hardcode text in `.astro` files.**

## Stack

| Layer | Technology |
|---|---|
| Framework | Astro 5.x (static output) |
| Styling | Tailwind CSS v4 (Vite plugin — no `tailwind.config.*`) |
| Language | TypeScript |
| Fonts | Inter (body), JetBrains Mono (`.mono` / `.tag` / code labels) — loaded from Google Fonts |
| Deployment | GitHub Pages via GitHub Actions (push to `main` triggers build) |

## Project structure

```
src/
  config.ts              ← ALL site content (single source of truth)
  pages/
    index.astro          ← HTML shell, imports all section components
  components/
    Header.astro         ← sticky nav bar
    Hero.astro           ← name, title, social links
    About.astro          ← bio paragraph + expertise skill tags
    Projects.astro       ← project cards (largest component)
    Experience.astro     ← work history
    Education.astro      ← education entries
    Footer.astro         ← footer
  styles/
    global.css           ← CSS custom properties (design tokens), utility classes
public/
  images/projects/       ← project banner images (served as-is)
  favicon.svg
astro.config.mjs         ← site URL, Tailwind Vite plugin
```

## Design system

Custom properties defined in `src/styles/global.css`:

```css
/* backgrounds */
--bg-base:        #121212
--bg-panel:       #181818
--bg-card:        #1e1e1e
--bg-card-hover:  #242424
/* borders */
--border:         #2d2d2d
--border-bright:  #3a3a3a

/* text */
--text-primary:   #e2e2e2
--text-secondary: #888888
--text-muted:     #484848

/* accent */
--accent:         #00D4FF
--focus-ring:     2px solid var(--accent)
--accent-warning: #FF9500
--accent-locked:  #666

/* store badges */
--store-google:   #01875F
--store-apple:    #0A84FF
--store-steam:    #66C0F4
--store-itchio:   #FA5C5C
--store-epic:     #ffffff
```

`accentColor` in `config.ts` is injected inline via Astro template expressions for dynamic use; `--accent` in `global.css` is the static CSS variable counterpart.

Shared CSS classes: `.mono`, `.tag`, `.card-panel`, `.skill-fill`, `.animate-fade-in`.

Tag variants (in `Projects.astro`): `.tag--frontend` (amber) for `frontendStack[]`, `.tag--backend` (purple) for `backendStack[]`. Both arrays use `{ engine: string; lang?: string }` objects — rendered as `Engine-Lang` (lang omitted if empty).

## Project card layout (`Projects.astro`)

Each `.asset-card` renders in this order — always visible unless noted:

| Slot | Always visible | Notes |
|---|---|---|
| Gallery | ✓ | `images[]` + `videos[]`; scroll-snap strip |
| Icon + Name + Description | ✓ | Icon 72×72 rounded-square left of name/desc; header CTA shown only when no `distribution` |
| Metadata bar | ✓ | role / genre / year / devTime / status — always shown below name/desc |
| Distribution buttons | ✓ | Per-store brand color via `.store-btn--{google\|apple\|steam\|itchio\|epic}`; WebGL/Source Code use `--accent`; `store-btn--locked` for proprietary |
| READ MORE toggle | ✓ (collapsed) | Hidden once expanded (`expand-toggle--more`) |
| **— expandable —** | fold | Hidden until expanded |
| → Responsibilities | fold | `responsibilities` field |
| → Core Systems | fold | `coreSystems[]` field |
| → Dev Log | fold | `devLog.{challenge,solution}` |
| → Tech stack tags | fold | `frontendStack[]` + `backendStack[]` |
| SHOW LESS toggle | fold | Bottom of expandable (`expand-toggle--less`) |

`hasExpandable` is true when any fold content is present (always true in practice since every project has `skills`).

## Static assets

All images are served from `public/` as-is (no processing).

| Path | Field in `config.ts` | Notes |
|---|---|---|
| `public/images/projects/` | `images[]` | Banner/screenshot gallery |
| `public/images/projects/icon/` | `icon` | 72×72 card icon — optional |

