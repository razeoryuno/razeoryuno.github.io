# cv-section-layout Specification

## Purpose
TBD - created by archiving change polish-existing-sections. Update Purpose after archive.
## Requirements
### Requirement: Consistent section padding across breakpoints

Every CV section (About, Projects, Experience, Education) SHALL use the same vertical and horizontal padding at each breakpoint, driven by a shared token in `src/styles/global.css` rather than ad-hoc Tailwind classes duplicated per component.

#### Scenario: All section roots share the same padding scale
- **WHEN** any of `About.astro`, `Projects.astro`, `Experience.astro`, or `Education.astro` is rendered at viewport widths 375px, 768px, and 1440px
- **THEN** the computed padding on the outer `<section>` element MUST match across all four components at each viewport width

#### Scenario: Section padding is defined once
- **WHEN** a developer reads the source for the four section components
- **THEN** they MUST see the same shared class (e.g., `.section-pad`) or CSS custom-property chain — not four independent Tailwind padding strings

### Requirement: Uniform section-header chrome

Every CV section SHALL use the same section-header pattern: a mono section-number label, an H2 title, and a short accent-colored rule below the title.

#### Scenario: Section numbers render consistently
- **WHEN** any CV section renders its header
- **THEN** the `SECTION_0X` label MUST use the `.mono` class, the same font size / letter-spacing / color as the others, and the correct sequential number (01 About, 02 Projects, 03 Experience, 04 Education)

#### Scenario: Accent rule is identical
- **WHEN** the accent rule below each H2 renders
- **THEN** it MUST be the same width, same height, same top margin, and filled with the site accent color

### Requirement: Shared card chrome

Every card-shaped element in the four sections (experience entry, education entry, project asset card) SHALL use the `.card-panel` class and no component-local overrides of its border, background, or border-radius.

#### Scenario: Cards share background and border tokens
- **WHEN** an experience entry, an education entry, and a project asset card are rendered side by side
- **THEN** they MUST share the same resting background, border color, border radius, and hover transition

#### Scenario: No inline card-chrome overrides
- **WHEN** a component needs a card
- **THEN** it MUST reach for `.card-panel` and extend only with padding / internal layout — never override the chrome tokens

### Requirement: Accent color exposed as a CSS custom property

The site accent color SHALL be available as `var(--accent)` in `global.css` in addition to the existing inline injection from `siteConfig.accentColor`, so that shared CSS rules (focus ring, skill-fill, timeline dot) can reference it without per-component inline style.

#### Scenario: CSS rules can use the accent token
- **WHEN** a shared CSS rule in `global.css` needs the accent color
- **THEN** it MUST reference `var(--accent)` rather than hard-coding `#00D4FF`

#### Scenario: Existing inline accent usage is not broken
- **WHEN** the new `--accent` token is introduced
- **THEN** existing inline `style={`background: ${siteConfig.accentColor}`}` expressions in the `.astro` components MUST continue to render with the same color

### Requirement: Typography roles are consistent

Body copy, mono labels, and tag badges SHALL use consistent font size, line height, and color tokens across the four sections.

#### Scenario: Body paragraph styling matches across sections
- **WHEN** the About paragraph, Experience bullets, Education achievements, and Project descriptions render
- **THEN** body text MUST share the same color token (`--text-secondary`) and line-height, and font-size MUST differ only where the visual hierarchy explicitly calls for it (e.g., the About lead paragraph)

#### Scenario: Mono labels share one style
- **WHEN** any `.mono` label renders (section numbers, date ranges, tech labels, tag text)
- **THEN** letter-spacing, font-size, and color MUST come from the same set of tokens — no component-local deviations for identical roles

