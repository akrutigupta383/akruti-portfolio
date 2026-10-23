# Verification — 22 October 2026

## Automated checks

`npm run build` and `npm run check` pass: **6 pages, 92 local links/assets, no broken anchors, no embedded playback, approximately 316 KiB of total output**. This size includes every page and local asset, not just the initial page load.

The check covers page count, duplicate IDs, one primary heading per page, missing local resources, repository-safe relative links, anchor destinations, image alt attributes, placeholder tokens, embedded players, unsupported forms and the presence of reduced-motion CSS. `node --check` passes for the build script and browser JavaScript.

The build was exercised with an extra test subtree in `dist/`; rebuilding removed it. Deleted pages/assets therefore do not remain in the publishable output.

## Browser review

Reviewed in the in-app Chromium browser:

- Desktop at 1280px: homepage hierarchy, hero art, selected-work grid, navigation and project covers.
- Tablet at 768px: responsive layout, local image/font loading and absence of horizontal overflow.
- Phone at 390px: homepage, menu, filters, contact and the video-production case study; no horizontal overflow.
- Narrow phone at 320px: all five case studies inspected for overflow. A long next-project title initially pushed its arrow outside the page; responsive type/wrapping was adjusted and that navigation was rechecked successfully.
- All four project filter states: five projects overall, two social, two brand and one video. Counts and pressed states update.
- Mobile menu opens, closes on navigation and closes with Escape. Escape restores focus to the button, with a visible focus outline.
- Copy-email action reports success. Email and résumé link destinations match the supplied résumé.
- Homepage and ALLEN case navigated under `/portfolio-test/`, including the return-to-work anchor, exercising a GitHub project-style URL prefix.
- A temporary homepage with the JavaScript tag removed retained all five projects, readable content and visible mobile navigation at 320px.
- Video page contains no video or iframe elements. The poster, complete production credits and the two external Drive destinations are present. No further playback was initiated after the user's instruction.
- The final homepage produced no captured JavaScript warnings or errors.

Reduced-motion handling was reviewed in CSS and JavaScript. A separate operating-system preference simulation was not performed. Screen-reader testing, Safari and Firefox testing were not performed.

## Source and deployment review

An independent source review checked content attribution, navigation and GitHub Pages paths. Two findings were fixed: stale build output and an unverified video production year. The site now omits that year.

The GitHub workflow builds and checks the static output before deployment. It has **not been executed on GitHub**, and no repository or live site was published. Social services and Drive may require a visitor to sign in according to their own sharing/access rules.

## Preview files

The workspace's `output/` folder contains `desktop-preview.png`, `selected-work-preview.png` and `mobile-preview.png`, plus the source and static ZIP archives. Screenshots are excluded from the public site.
