# Deployment notes

- **`public/.nojekyll`** — must exist; prevents GitHub Pages from running Jekyll on `.astro` files.
- **Repo Settings → Pages → Source** must be `GitHub Actions`, not `Deploy from a branch`.
- Workflow: `.github/workflows/deploy.yml` builds `dist/` and deploys via `actions/deploy-pages@v4`.
