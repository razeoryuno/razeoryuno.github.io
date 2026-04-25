# CLAUDE.md — razeoryuno.github.io

Portfolio site for Ittiwat Tuntithavorn. Single-page CV / résumé deployed to GitHub Pages.

## Working rules

- **Always update this CLAUDE.md** when structure, stack, content shape, or conventions change — keep it current with the codebase.
- **Memory is local to this repo.** Save all persistent memories to `.claude/memory/` inside this repo, not to the global user memory path.
- **Never output existing code.** Only show what changed — diffs, new snippets, or a one-line summary. Do not repeat unchanged code back to the user.

## Stack

| Layer | Technology |
|---|---|
| Framework | Astro 5.x (static output) |
| Styling | Tailwind CSS v4 (Vite plugin — no `tailwind.config.*`) |
| Language | TypeScript |
| Fonts | Inter (body), JetBrains Mono (`.mono` / `.tag` / code labels) — loaded from Google Fonts |
| Deployment | GitHub Pages via GitHub Actions (push to `main` triggers build) |

## Local dev

```bash
# from razeoryuno.github.io/
npm install          # first-time setup
npm run dev          # dev server at http://localhost:4000 (or next free port)
npm run build        # production build into dist/
npm run preview      # serve dist/ locally
```

> The Windows libuv assertion on process exit after `npm run build` is a known harmless quirk — the build succeeds regardless.

## Project structure

```
src/
  config.ts           ← ALL site content lives here (single source of truth)
  pages/
    index.astro       ← HTML shell, imports all section components
  components/
    Header.astro
    Hero.astro
    About.astro
    Projects.astro
    Experience.astro
    Education.astro
    Footer.astro
  styles/
    global.css        ← CSS custom properties (design tokens), utility classes
public/
  images/projects/    ← Project banner images (served as-is, no processing)
  favicon.svg
astro.config.mjs      ← sets site URL, registers Tailwind Vite plugin
```

## Content editing

**All content is in `src/config.ts` — never hardcode text in `.astro` files.**

The exported `siteConfig` object contains:

| Key | Type | Purpose |
|---|---|---|
| `name` | string | Site author name |
| `title` | string | Tagline / job title shown in Hero |
| `description` | string | Meta description |
| `accentColor` | string | Hex accent color (injected inline, not a CSS var) |
| `social` | `{email, linkedin, twitter, github}` | Social links (all strings) |
| `aboutMe` | string | Paragraph shown in About section |
| `expertise` | `{technical: string[], domain: string[]}` | Two skill-tag groups |
| `projects` | see below | Project cards |
| `experience` | `{company, title, dateRange, bullets}[]` | Work history |
| `education` | `{school, degree, dateRange}[]` | Education |

### Projects array shape

```typescript
{
  name: string;
  description: string;
  images?: string[];             // paths relative to public/
  videos?: string[];             // YouTube embed URLs
  imageLayout?: string;          // "landscape" | "portrait";
  skills?: string[];             // frontend tag badges
  backendSkills?: string[];      // backend tag badges
  role?: string;
  engine?: string;
  genre?: string;
  devTime?: string;
  status?: string;               // "Live" | "Out of Service" | "Unreleased" | "Thesis"
  responsibilities?: string;
  coreSystems?: string[];
  devLog?: { title?: string; challenge: string; solution: string };
  videoDemo?: string;
  sourceCode?: string;
  link?: string;                 // legacy fallback CTA
  distribution?: {
    webgl?: string;
    googlePlay?: string;
    appStore?: string;
    steam?: string;
    itchio?: string;
    epic?: string;
  };
}
```

Status values render with distinct symbols in the metadata bar:
- `"Live"` → `✓ LIVE` in accent color
- `"Out of Service"` → `✕ OUT OF SERVICE` in `#666`
- `"Unreleased"` → `◌ UNRELEASED` in `#888`
- `"Thesis"` → `◈ THESIS` in `#888`

## Design system

Custom properties defined in `src/styles/global.css`:

```css
--bg-base:        #121212   /* page background */
--bg-panel:       #181818
--bg-card:        #1e1e1e   /* project / skill cards */
--bg-card-hover:  #242424
--border:         #2d2d2d
--border-bright:  #3a3a3a
--text-primary:   #e2e2e2
--text-secondary: #888888
--text-muted:     #484848
```

`accentColor` in `config.ts` (default `#00D4FF`) is injected inline via Astro template expressions — it is not a CSS variable.

Shared CSS classes: `.mono`, `.tag`, `.card-panel`, `.skill-track`, `.skill-fill`, `.animate-fade-in`.

## Static assets

Banner images live in `public/images/projects/`. File names must match entries in the `images` array in `config.ts`. Astro serves `public/` as-is — no import or processing needed.

## Deployment

The site deploys from the `main` branch. Development work is on the `devportfolio` branch.

To publish: merge `devportfolio` → `main`, then push. GitHub Actions builds Astro and pushes to the `gh-pages` branch automatically (or GitHub Pages can be set to build from `main` directly — verify in repo Settings → Pages).

```bash
# from razeoryuno.github.io/
git push origin devportfolio   # push feature branch
# then open a PR or merge to main on GitHub
```