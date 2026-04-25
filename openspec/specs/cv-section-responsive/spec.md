# cv-section-responsive Specification

## Purpose
TBD - created by archiving change polish-existing-sections. Update Purpose after archive.
## Requirements
### Requirement: All sections are usable at 375px viewport width

Every CV section SHALL render without horizontal page scroll, clipped content, or overlapping elements at 375px viewport width (iPhone mini reference).

#### Scenario: No horizontal overflow on the page
- **WHEN** the site is viewed at 375px width
- **THEN** `document.documentElement.scrollWidth` MUST be less than or equal to the viewport width, and no section MUST cause the page to scroll sideways

#### Scenario: Section headers do not clip
- **WHEN** viewing any section header at 375px
- **THEN** the H2 title MUST fit on its line or wrap cleanly, and the mono section-number label MUST NOT be cut off

### Requirement: Project gallery is touch-ergonomic on mobile

The `.asset-gallery` in `Projects.astro` SHALL scroll horizontally with one-thumb swipe at mobile widths, with gallery slots sized for a useful preview at 375px.

#### Scenario: Gallery slots are sized for mobile
- **WHEN** viewing a project with `imageLayout: "landscape"` at 375px
- **THEN** each `.gallery-slot--landscape` MUST have a width that shows roughly one slot on screen with a hint of the next, not a single slot that fills 100% and hides all others, and not multiple slots crammed edge to edge

#### Scenario: Portrait gallery slots fit within viewport
- **WHEN** viewing a project with `imageLayout: "portrait"` at 375px
- **THEN** a `.gallery-slot--portrait` MUST fit within the viewport width with horizontal padding preserved and scroll-snap behavior intact

### Requirement: Project card header is mobile-legible

The header row of each asset card (index label, project name, primary CTA) SHALL remain legible and non-clipped at 375px viewport width.

#### Scenario: Long project names do not push the CTA off-screen
- **WHEN** a project with a long name renders at 375px
- **THEN** the primary CTA button MUST remain fully visible, and the name MUST truncate or wrap rather than overflow horizontally

#### Scenario: CTA buttons are tap-sized
- **WHEN** viewing any `.cta-btn` or `.store-btn` on a touch device
- **THEN** the hit target MUST be at least 32px tall (visual) with at least 44x44px effective tap area via padding, meeting common mobile ergonomics

### Requirement: Experience timeline aligns cleanly at all widths

The timeline dot and card offset in `Experience.astro` SHALL stay aligned with the vertical rule at every breakpoint, including 375px.

#### Scenario: Timeline dot sits on the vertical rule
- **WHEN** Experience renders at 375px, 768px, and 1440px
- **THEN** each timeline dot MUST be horizontally centered on the vertical border rule — not offset, not clipped

#### Scenario: Entry cards do not overlap the rule
- **WHEN** an experience entry card is rendered
- **THEN** the card's left edge MUST be offset from the rule at every viewport width, with the gap consistent across breakpoints

### Requirement: About skill bars remain usable on mobile

The skill list and progress bars in `About.astro` SHALL remain readable at 375px, with skill names and percentages both visible without truncation of the percentage.

#### Scenario: Skill names wrap instead of clipping
- **WHEN** a long skill name (e.g., "Real-time Multiplayer (MagicOnion / gRPC)") renders at 375px
- **THEN** the skill name MUST wrap onto additional lines, the percentage MUST remain visible on the right, and the progress bar MUST align with the skill's row

### Requirement: Expand / collapse toggle is tap-friendly

The `.expand-toggle` control in `Projects.astro` SHALL have a tap target large enough for mobile use and visible feedback on press.

#### Scenario: Toggle tap area is adequate
- **WHEN** the expand toggle is rendered on a touch device
- **THEN** the clickable area MUST be at least 44px tall including padding

#### Scenario: Toggle state is unambiguous
- **WHEN** the toggle is pressed and the card expands
- **THEN** both the label ("READ MORE" → "SHOW LESS") and the chevron rotation MUST change, providing two independent visual cues

