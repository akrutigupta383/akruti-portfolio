# Akruti Gupta — Campaign Studio

A static portfolio for marketing, creative strategy and social media, with influencer marketing presented as an area of interest. Five case studies cover ALLEN Digital, XIM University / IlluminatiX, AiGENThix, Usha Agency and independent video production.

## Preview locally

Requirements: Node.js 20+ to build; Python 3 for the optional preview command. No npm packages need installing.

```sh
npm run build
npm run check
npm run preview
```

Open http://127.0.0.1:4173/ . You can also open `dist/index.html` directly in a browser: navigation, layout and content work from local files; clipboard availability depends on the browser.

`dist/` is generated output and is cleared on each build. Edit source files instead.

## Publish on GitHub Pages

### With the included GitHub Actions workflow

1. Add the source files to the repository's `main` branch. Include the hidden `.github/workflows/pages.yml` file. `dist/` and `output/` do not need committing.
2. In the repository, open **Settings → Pages**, and choose **GitHub Actions** as the build source.
3. Push a change to `main`, or run **Publish portfolio to GitHub Pages** from the Actions tab.
4. The workflow builds, checks and uploads only `dist/`. The deploy job provides the public URL.

Both `username.github.io` and `username.github.io/repository/` work because internal paths are relative. If the publishing branch is not `main`, change `on.push.branches` in the workflow.

### Upload a ready-built site

Extract `output/akruti-portfolio-static.zip`. Put its **contents** (`index.html`, `assets/`, `work/`, `.nojekyll`) at the root of your publishing branch. In **Settings → Pages**, choose **Deploy from a branch**, that branch, and `/ (root)`. Preserve the `.nojekyll` file.

GitHub deployment has not been run from this workspace. Official reference: [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).

## Edit the portfolio

| File | What to edit |
| --- | --- |
| `src/content.mjs` | Email, résumé URL, project descriptions, dates, source links and experience |
| `scripts/build.mjs` | Homepage copy, page structure and the five custom project covers |
| `assets/styles.css` | Colours, typography, responsive layouts and motion |
| `assets/site.js` | Menu, filters, copy-email action and subtle artwork tilt |
| `assets/images/` | Hero sculpture and supplied video still |

Rebuild after edits. Adding a project also requires its cover in `cover()` and category in `card()` in the build script, plus updating the visible project count. Keep font licences with the fonts.

## Content and assets

- Akruti is credited for the video's **scripting, set decoration, recording and editing**. There is no embedded player or autoplay; visitors can choose an external Drive link.
- The 4.2M+ organic-view figure retains the résumé's scope: two Instagram pages, two months. It is not presented as independently audited analytics.
- Shared channel links include team work and posts outside her contribution period. Case-study notes explain attribution.
- The hero sculpture and typographic covers are new portfolio artwork. The supplied video still is actual work. No stock portrait or invented client deliverables are used.
- Influencer/creator marketing is an interest, not a claimed completed service or campaign.

Research, inspiration, asset provenance and verification details are in [docs/research.md](docs/research.md), [docs/assets.md](docs/assets.md) and [docs/qa.md](docs/qa.md).

The public site contains no third-party scripts, remote fonts, analytics, contact-form backend or embedded social widgets. External services are reached only when a visitor follows a link.
