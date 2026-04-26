# Project card layout (`Projects.astro`)

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
