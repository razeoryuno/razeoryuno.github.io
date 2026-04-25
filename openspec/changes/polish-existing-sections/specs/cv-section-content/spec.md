## ADDED Requirements

### Requirement: All visible copy is sourced from `src/config.ts`

No CV section component SHALL hardcode user-facing copy in the `.astro` template. Every sentence, label, date range, and bullet the reader sees MUST come from `siteConfig`.

#### Scenario: Component templates contain no prose
- **WHEN** reading any of `About.astro`, `Projects.astro`, `Experience.astro`, `Education.astro`
- **THEN** there MUST be no English prose outside template expressions, except for static UI chrome (e.g., "READ MORE", "// Role & Responsibility", "DEV_LOG") that is part of the design system, not content

#### Scenario: Config drives section output
- **WHEN** a value in `siteConfig` is edited (e.g., a project description)
- **THEN** the rendered section MUST reflect the change with no component-side edits

### Requirement: `aboutMe` follows résumé voice rules

The `aboutMe` string SHALL open with a role statement, quantify experience, list primary domain, and close with a positioning sentence — no fluff, no first-person pronouns, under ~80 words.

#### Scenario: aboutMe passes the voice rules
- **WHEN** `siteConfig.aboutMe` is read
- **THEN** it MUST: (a) start with the role (e.g., "Senior Game Developer"), (b) include a years-of-experience figure, (c) name the primary engine(s) / stack, (d) contain no "I / me / my", (e) be at most ~80 words

### Requirement: Experience bullets are outcome-oriented

Every bullet in `siteConfig.experience[].bullets` SHALL start with a strong action verb and describe a concrete output, system shipped, or measurable outcome — not a responsibility description.

#### Scenario: Bullets start with action verbs
- **WHEN** scanning the first word of every experience bullet
- **THEN** each MUST be a past-tense action verb (Shipped, Built, Designed, Implemented, Integrated, Handled, Led, Owned, Migrated, Reduced, etc.), never a gerund ("Working on...") or nominal phrase ("Responsible for...")

#### Scenario: Bullets name a concrete artifact or metric
- **WHEN** reading any bullet
- **THEN** it MUST reference a specific system, platform, count, or outcome (e.g., "14+ games shipped", "MagicOnion + gRPC multiplayer client", "Google Sheets → master data pipeline") — not vague claims

### Requirement: Education entries are non-empty or the field is removed

An education entry SHALL NOT render an empty achievements list as a visible artifact.

#### Scenario: Empty achievements do not render a stub
- **WHEN** an education entry has no achievements worth listing
- **THEN** either `achievements` is omitted from the config (and the component already conditionally hides the list — verified), or the list is populated with at least one concrete item

#### Scenario: Empty arrays are cleaned up
- **WHEN** an education entry in `config.ts` has `achievements: []`
- **THEN** either the `achievements` field is removed from that entry, or the array is filled with real content before merging

### Requirement: Project descriptions are scannable

Every `siteConfig.projects[].description` SHALL be a single sentence or short paragraph (≤ ~40 words) that answers "what is it" and "what did the player / user do," not development chronology.

#### Scenario: Description is scannable length
- **WHEN** reading any `description` field
- **THEN** its length MUST be ≤ ~40 words and fit in roughly 2 lines at the desktop card width

#### Scenario: Description reads as a product blurb, not a changelog
- **WHEN** reading any `description`
- **THEN** it MUST describe the product / gameplay / experience — not the development process ("Handled X and Y" belongs in `responsibilities`, not `description`)

### Requirement: Status field is one of the documented values

Every `siteConfig.projects[].status` SHALL be one of: `"Live"`, `"Out of Service"`, `"Unreleased"`, `"Thesis"`. Any other value is disallowed because the `Projects.astro` status renderer has no case for it.

#### Scenario: Unknown status values are rejected
- **WHEN** a project entry has a `status` value not in the documented set
- **THEN** it MUST be changed to one of the four values before merging, or the status field MUST be removed from that entry
