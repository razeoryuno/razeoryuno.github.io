## ADDED Requirements

### Requirement: All interactive elements have a visible focus state

Every focusable control in the four CV sections SHALL display a visible focus indicator distinct from its resting and hover states, using the shared `--accent` color.

#### Scenario: Focus ring appears on keyboard focus
- **WHEN** a user tabs through the page with the keyboard
- **THEN** each of the following MUST show an outline or equivalent focus indicator: lightbox close / prev / next buttons, expand toggle, gallery images (when made keyboard-focusable), video thumbs, CTA buttons, store buttons, and any `<a>` link in the four sections

#### Scenario: Focus ring is distinct from hover
- **WHEN** a control is both hovered and focused (or focused without hover)
- **THEN** the focus indicator MUST be visible on top of / in addition to the hover style, not replaced by it

### Requirement: Gallery images and video thumbs are keyboard-operable

Clickable gallery images (`img[data-lightbox]`) and video thumbs (`.video-thumb`) SHALL be reachable and activatable with keyboard alone.

#### Scenario: Gallery image is keyboard-activatable
- **WHEN** a user tabs to a gallery image and presses Enter or Space
- **THEN** the lightbox MUST open to that image, matching the behavior of a mouse click

#### Scenario: Video thumb is keyboard-activatable
- **WHEN** a user tabs to a video thumb and presses Enter or Space
- **THEN** the lightbox MUST open with the embedded video, matching the behavior of a mouse click

#### Scenario: Keyboard-activated controls announce their role
- **WHEN** a screen reader encounters a gallery image or video thumb configured as an interactive control
- **THEN** it MUST be announced as a button with an accessible name ("Open screenshot N of N — <project name>" or "Play video demo — <project name>")

### Requirement: Lightbox meets dialog accessibility baseline

The `#lightbox` element SHALL behave as an accessible modal dialog when open.

#### Scenario: Lightbox traps focus while open
- **WHEN** the lightbox is open and the user presses Tab or Shift+Tab
- **THEN** focus MUST cycle among the lightbox controls (close, prev, next) and NOT escape to the page behind

#### Scenario: Lightbox returns focus on close
- **WHEN** the lightbox is closed (Escape, close button, or backdrop click)
- **THEN** focus MUST return to the gallery item that opened it

#### Scenario: Lightbox responds to the documented keys
- **WHEN** the lightbox is open
- **THEN** Escape MUST close it, ArrowLeft MUST navigate to the previous item (disabled at index 0), and ArrowRight MUST navigate to the next item (disabled at last index)

### Requirement: Text contrast meets WCAG AA

Body text, secondary text, and mono labels SHALL meet a minimum 4.5:1 contrast ratio against their backgrounds for any text they render in the four sections.

#### Scenario: `--text-muted` is not used for substantive copy
- **WHEN** a substantive piece of copy (a sentence of description, a bullet, a label a reader needs to consume) is rendered
- **THEN** it MUST use `--text-secondary` or `--text-primary`, never `--text-muted`. `--text-muted` is reserved for decorative labels (e.g., "SECTION_01") and must not carry meaning the reader needs

#### Scenario: Accent color on dark backgrounds is legible
- **WHEN** accent-colored text renders on any section background
- **THEN** it MUST pass 4.5:1 contrast against that background, or be limited to decorative / iconographic use where contrast is not required

### Requirement: Reduced-motion preference is respected

All animations and transitions in the four sections SHALL be disabled or reduced when the user's system preference is `prefers-reduced-motion: reduce`.

#### Scenario: Fade-in animation is disabled
- **WHEN** `prefers-reduced-motion: reduce` is active
- **THEN** `.animate-fade-in` MUST NOT play — elements MUST appear immediately at opacity 1 with no translate

#### Scenario: Hover lifts and lightbox scale are disabled
- **WHEN** `prefers-reduced-motion: reduce` is active
- **THEN** hover `translateY` transforms on CTA buttons and store buttons, plus the lightbox `lb-scale` animation, MUST be removed or reduced to near-zero motion

#### Scenario: Skill-fill transition is shortened
- **WHEN** `prefers-reduced-motion: reduce` is active
- **THEN** the `.skill-fill` width transition MUST be reduced (e.g., duration `0.01s`) so the bar appears filled immediately rather than animating

### Requirement: Landmark structure is correct

Each of the four section components SHALL render as a single `<section>` landmark with an `id` for deep linking and an accessible name derived from its H2.

#### Scenario: Each section has a deep-link id
- **WHEN** inspecting the rendered HTML
- **THEN** each section MUST have `id="about"`, `id="projects"`, `id="experience"`, or `id="education"` respectively

#### Scenario: Section has an accessible name
- **WHEN** a screen reader encounters the section landmark
- **THEN** its accessible name MUST come from the section's H2 (via `aria-labelledby` pointing at the H2's id, or an equivalent mechanism)
