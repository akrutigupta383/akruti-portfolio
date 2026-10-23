# Akruti Gupta — Campaign Studio

Approved by the user in chat on 22 October 2026.

## Outcome

A polished static portfolio for marketing, creative strategy and social media roles, with interest in influencer marketing stated accurately. Hiring managers should quickly understand the work, open concise case studies, inspect original channels and contact Akruti.

## Direction and alternatives

Selected: Campaign Studio, an expressive but disciplined creative portfolio. Alternative editorial folio would be quieter but less memorable; an immersive 3D gallery would add navigation and performance costs without improving the explanation of marketing work.

Palette: paper white #FAFAFD, ink blue #242449, cobalt #4942DB, lilac #E9E5F6, peach #F4C7B3, muted green #DDE8D8. Cobalt is used for actions and the original hero sculpture; project covers have individual palettes. Bricolage Grotesque display type, Manrope body type, self-hosted if available. No generic technology dashboard or skill percentage bars.

The opening combines a large, concrete headline with an original sculptural speech-loop image. A clear name/role introduction and two actions remain immediately legible. The image reacts gently to pointer movement with CSS perspective and stops for reduced motion; the page is usable without motion. This is a dimensional illustration, not a full navigable WebGL scene.

## Structure

Homepage: concise navigation; introduction and hero artwork; compact selected organisations/contexts; selected work with distinctive editorial covers; social channel directory; about, experience and capabilities; contact. Five complete case-study pages: ALLEN Digital, XIM/IlluminatiX, AiGENThix, Usha Agency, and independent video production. Each explains context, role, audience, contribution and evidence boundaries, with source links. Case pages link back to work and to the next project.

Do not publish unverified academic work from the Claude draft as finished projects. Keep a private content backlog. Influencer marketing is an interest, not a completed capability claim. Do not invent an individual's portrait.

## Implementation

Dependency-free static HTML/CSS/JavaScript generated from an editable content module with a small Node build script. Publish the generated `dist/` directory. Relative links support both account and project GitHub Pages URLs. Build emits `.nojekyll`. A workflow builds and uploads only the public site. No secrets, database, runtime API, or vendor hosting required.

Local CSS contains layout, type, motion and responsive rules. Local JS handles mobile navigation, project category filtering, copy-email feedback and pointer-responsive hero artwork. Content and case-study prose live in one module. Native links and generated HTML retain navigation and readable content without JS. Email is the résumé's supplied professional contact; phone number is not needed in the website UI.

Video: the user confirmed Akruti handled scripting, decoration, recording and editing, and requested no direct playback. Show a supplied still and a full production case study with optional external Drive links. Never embed or autoplay the videos. Generated artwork provenance is documented. Newly designed project covers are distinct from evidence of original campaign deliverables.

## Verification

Build validates unique slugs, required content, local file existence and internal links. Browser review at desktop, 768px and 390px checks hierarchy, overflow, mobile navigation, project filtering, case-study links, keyboard focus and copy feedback. Review reduced-motion rules and no-JS content availability. Confirm repository-path links by serving the output beneath a path prefix. Document that GitHub deployment was not performed because the user will host it.
