# Campaign Studio Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement the approved design in this session.

**Goal:** Build Akruti Gupta's static campaign and social-media portfolio with five readable case studies.

**Architecture:** A small Node script imports source content and emits the homepage and project pages. Shared CSS and JavaScript progressively enhance the generated HTML. Images and fonts are local; video is linked externally, never embedded.

**Tech Stack:** Node.js, semantic HTML, CSS, browser JavaScript; no runtime framework.

**Spec:** `docs/superpowers/specs/2026-10-22-portfolio-design.md`

## Global constraints

- GitHub Pages compatibility, including repository-path URLs.
- No invented metrics, campaign assets, testimonials or influencer experience.
- Reduced motion, visible focus, meaningful headings, mobile readability.
- Direct email and résumé actions; no pretend contact form.

## Task 1 — Content and assets

- [x] Create `src/content.mjs` exporting `site`, `projects`, `channels`, and `experience`; include role/date/source attribution from the research brief.
- [x] Save original generated hero art under `assets/images/` and record its prompt/provenance.
- [x] Obtain open-source fonts, preserve licenses, and keep a system fallback.

## Task 2 — Static site

- [x] Create `scripts/build.mjs`: `import { site, projects, channels, experience } from '../src/content.mjs'`; generate `dist/index.html` and `dist/work/<slug>/index.html`; copy public assets.
- [x] Create `assets/styles.css` for the approved design and responsive states.
- [x] Create `assets/site.js` using native button events for filter, navigation, email copying and pointer-responsive hero artwork, with text feedback and reduced-motion checks.
- [x] Create `package.json` with `build: node scripts/build.mjs` and `check: node scripts/check.mjs`.
- [x] Build, serve, inspect screenshots, and fix visible problems.

## Task 3 — Verification and handoff

- [x] Create `scripts/check.mjs` to fail on missing local resources, invalid internal links, duplicate IDs, or unfilled visible placeholder tokens in generated HTML.
- [x] Check desktop, tablet and phone layouts; check filters, navigation, external video destinations, case-study and résumé links; check keyboard focus.
- [x] Test the same output from a repository path prefix; run `npm run build` and `npm run check` after final edits.
- [x] Write `README.md`, `.github/workflows/pages.yml`, asset provenance and a concise QA report. Package `dist/` for manual upload.

The working directory has no valid Git repository. No commits or remote publication are assumed.
