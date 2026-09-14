# Design QA

## Comparison target

- Source visual truth: `/Users/darina/Desktop/портфолио новое/Inbox.png`, `/Users/darina/Desktop/портфолио новое/Add step.png`, `/Users/darina/Desktop/портфолио новое/Resources.png`, `/Users/darina/Desktop/портфолио новое/Resources New.png`, `/Users/darina/Desktop/портфолио новое/Add recording.png`, `/Users/darina/Desktop/портфолио новое/Voice Note Step.png`, and `/Users/darina/Desktop/портфолио новое/Campaigns Editor/Send Voice Note.png` (each 2400 × 1440 px; 5:3)
- Implementation: `http://127.0.0.1:4173/projects/voice-notes-for-outreach`
- Implementation screenshot path: Codex in-app Browser capture for the local URL; the browser surface does not expose a persistent filesystem path
- Desktop viewport: 1440 × 900 CSS px, 1× density
- Mobile viewport: 390 × 844 CSS px, 1× density
- State: light theme, page top and scrolled campaign/library states

## Findings

- No remaining P0, P1, or P2 issues.
- Fonts and typography: the existing Geist type system, weights, sizes, line heights, wrapping, and hierarchy are preserved from the existing case-study page.
- Spacing and layout rhythm: the new page uses the established 800 px case-study column, 600 px reading column, 40 px section rhythm, and desktop side navigation.
- Colors and visual tokens: existing `canvas`, `ink`, `muted`, and blue marker treatments are preserved.
- Image quality and asset fidelity: all seven user-provided screens are copied into `src/assets/voice-notes-case/` and rendered as separate raster figures. Every screen keeps the source 5:3 ratio; related campaign/library states are shown sequentially so no screenshot is nested inside another.
- Copy and content: the page follows the updated `cases/voice-notes-for-outreach.md`, including the post-launch adoption evidence and the future AI-assisted Voice Notes opportunity.
- Responsiveness: at 390 × 844 the desktop aside is hidden, Index remains available, all related screens stay in normal document flow, and DOM evidence reported `scrollWidth === clientWidth === 375` with no broken images.
- Accessibility: the page has one labelled article heading, semantic `aside` and labelled section navigation, descriptive alt text for each visible screen, captions for figures, and visible keyboard focus styles.
- Key insights: each insight heading uses the supplied 16 × 16 px `Message.svg` or `Library.svg` asset in the same 24 × 24 px container treatment as the first case study.

## Full-view comparison evidence

- At 1440 × 900, the page top shows the title, metadata, highlighted lead, hero Inbox screen, and the desktop section navigation; the 800 px image column is centered in the usable viewport.
- At 390 × 844, the page top shows the mobile Index link, wrapped metadata, lead copy, and hero screen without horizontal overflow.

## Focused-region evidence

- The campaign figures were checked in the scrolled desktop state: `Send Voice Note.png` and `Add recording.png` appear as separate full-width figures with their own captions.
- The recording-library figures were checked in the scrolled desktop state: `Resources.png` and `Resources New.png` appear as separate full-width figures with their own captions.

## Comparison history

- Initial implementation: added the new Voice Notes case as a route, home-page card, and markdown-backed data model using the supplied screens.
- Verification pass: confirmed separate figure presentation, desktop side navigation, mobile layout, and exact 5:3 image presentation.
- Feedback fix: removed the nested screenshot overlays from the campaign and recording-library figures.
- Post-fix evidence: all related screens render independently; no screenshot is used as a child visual inside another screenshot.

## Interaction and technical checks

- The Voice Notes card opens `/projects/voice-notes-for-outreach`.
- Index returns to `/`.
- Desktop section navigation updates the hash and scrolls `#key-insights` to the top focus line.
- Browser console errors and warnings: none.
- Broken images: none; all rendered images reported a loaded natural width.
- `npm run build`: passed.

final result: passed
