# Project structure

```
src/
  config.ts              ← thin aggregator; re-exports siteConfig (do not add content here)
  data/
    meta.ts              ← name, title, description, accentColor, social, aboutMe, expertise
    experience.ts        ← work history entries
    education.ts         ← education entries
    projects/
      index.ts           ← assembles projects array + re-exports Project type
      types.ts           ← Project type definition
      _demo.ts           ← DEMO card (remove before deploy)
      pakapow-m.ts       ← ★ Done
      cripple-bat.ts     ← ★ Done
      world-of-runner.ts
      neokami.ts
      zabb-world.ts
      commandeer-armament.ts
      ever-after-rebellion.ts
      puzzle-guardian.ts
      godji-runner.ts
      mad-mission.ts
      blackjack-dash.ts
      omg-reindeer.ts
      bullet-blossom.ts
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
