# Stack and contributions layout QA

- Source visual truth: user-attached reference showing two dark cards, circular stack icons, and a contribution calendar (2048 × 546 displayed pixels).
- Implementation: src/components/Hero.jsx; anchor target in src/components/Technologies.jsx.
- Implementation screenshot: unavailable; no browser tool is exposed in this session.
- Viewport, CSS size, and density normalization: not measured.
- State: default portfolio with existing live contribution image.
- Full-view and focused comparisons: blocked pending browser capture.
- Fonts, spacing, colors, image fidelity, and copy: not visually verified.
- Intentional content adaptations: existing portfolio technologies and GitHub image; no fabricated contribution count or nonfunctional year selector.
- Validation: production build and git diff --check passed. Browser interactions and console errors not checked.
- Comparison history: no rendered comparison performed.
- Remaining checklist: capture desktop and mobile; compare cards and icon spacing with reference; test stack anchor, GitHub link, horizontal calendar scrolling, and image failure fallback.

final result: blocked
