# Design QA

## Latest comparison — My Role block

- Source visual truth: `/var/folders/rv/0nzm479j7737cs9qn074fy000000gp/T/codex-clipboard-f6638251-9b4d-4a91-b4e8-57f36dc82bc1.png` (1228 × 244 px)
- Implementation: `http://127.0.0.1:5175/projects/campaign-builder-discovery`
- Implementation screenshot: Codex in-app Browser capture (1265 × 710 px, 1×; the browser surface does not expose a persistent filesystem path)
- State: light theme, page top
- Full-view evidence: the new section sits between Context and Problem and preserves the established page grid.
- Focused-region evidence: the rendered heading and paragraph match the reference structure within the existing 600 px text column.
- Fonts and typography: existing Geist hierarchy is preserved.
- Spacing and layout rhythm: the block reuses the established case-section spacing.
- Colors and visual tokens: text uses `ink` on `canvas`.
- Image quality and asset fidelity: the reference contains no image assets.
- Copy and content: heading and paragraph match the supplied reference.
- Interaction and technical checks: `My Role` appears in the side navigation and its section anchor is present.
- Findings: no actionable P0, P1, or P2 differences.

## Comparison target

- Source visual truth: `/var/folders/rv/0nzm479j7737cs9qn074fy000000gp/T/codex-clipboard-394615a3-6955-4e1f-9f89-3bd6136bbc5a.png` plus the user's instruction that the main content container be centered in the viewport
- Implementation: `http://127.0.0.1:5173/projects/campaign-builder-discovery`
- Implementation screenshot path: Codex in-app Browser capture for the local URL (the browser surface does not expose a persistent filesystem path)
- Desktop viewport: 1280 × 720 CSS px, 1× density
- Mobile viewport: 390 × 844 CSS px, 1× density
- State: page top, light theme

## Findings

- No remaining P0, P1, or P2 issues in the requested layout behavior.
- Fonts and typography: the existing Geist type system, weights, sizes, line heights, wrapping, and hierarchy remain unchanged.
- Spacing and layout rhythm: the 800 px `<main>` container is centered against the usable viewport, while the aside remains independently fixed at `left: 80px` and `top: 80px`.
- Colors and visual tokens: existing portfolio tokens (`canvas`, `ink`, and hover opacity) are preserved.
- Image quality and asset fidelity: the user-provided 14 × 14 SVG remains the unchanged Index icon; no replacement or code-drawn icon is used.
- Copy and content: Index, Context, Problem, and Process are unchanged and link to the correct destinations.
- Responsiveness: at 390 px the aside returns to normal document flow, its section list is hidden, and Index remains visible. Horizontal overflow was not introduced.
- Accessibility: the aside remains a semantic `aside` with a labelled `nav`; links retain visible keyboard focus styles.
- Document structure: `aside` and `main` are sibling landmarks; `main.contains(aside)` is false.

## Full-view comparison evidence

- The annotated before-state and the implementation were captured together at 1280 × 720.
- The pre-fix screenshot showed the content wrapper offset to the right by `xl:ml-[396px]` inside a 1336 px main container.
- Post-fix DOM evidence measured the main at x=232.5, width=800, and center=632.5; the usable viewport center was also 632.5.
- The aside remained outside `<main>` and measured x=80, y=80 with `position: fixed`.

## Focused-region evidence

A separate crop was not needed because the full-width comparison clearly showed both the main container edges and fixed aside. DOM measurements provided exact center coordinates.

## Comparison history

- Earlier P2: the implementation used `position: sticky`, so the menu was tied to the layout container rather than the viewport.
- Fix: changed the desktop aside to `position: fixed; left: 80px; top: 80px` and matched the reference's mobile fallback.
- Post-fix evidence: at scrollY=1440 the aside remained at x=80, y=80; at 390 × 844 it measured `position: static` and the section navigation was hidden.
- Later P2: the 800 px content wrapper was shifted right with `xl:ml-[396px]`, so its center did not match the viewport center.
- Fix: made `<main>` the 800 px container and removed the offset wrapper.
- Post-fix evidence: `<main>` center and viewport center both measured 632.5 px at the 1280 × 720 QA viewport.

## Interaction and technical checks

- Index returns to the portfolio home page.
- Section anchors continue to update the URL hash and scroll to the selected section.
- Browser console errors and warnings: none.
- `npm run build`: passed.

final result: passed
