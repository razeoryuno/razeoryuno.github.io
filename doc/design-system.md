# Design system

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
