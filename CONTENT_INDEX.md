# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline. Localized versions keep the same
`translationKey`, use their configured locale prefix, and must appear in canonical,
hreflang, sitemap, and route-manifest validation.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | ArmorSim terminal-ballistics hub | Find the best entry point | Release Date / Gameplay / System Requirements | Hub | Home grid links to all four clusters. |
| `/release-date` | `src/data/pages/launch-pages.ts` | Guide | ArmorSim release date 2026-09-16 | Check release timing | Gameplay / System Requirements | Launch hub | Tied to live Steam store sidebar. |
| `/demo` | `src/data/pages/launch-pages.ts` | Guide | ArmorSim demo / free trial | Find demo / trial status | Price / Discord | Launch hub | No demo announced as of 2026-09-15. |
| `/price` | `src/data/pages/launch-pages.ts` | Guide | ArmorSim price / editions | Check EA price and editions | Release Date / Discord | Launch hub | Source from Steam store sidebar. |
| `/system-requirements` | `src/data/pages/launch-pages.ts` | Guide | ArmorSim system requirements | Check minimum PC specs | Gameplay / Solver modes | Launch hub | Windows 10 64-bit, GTX 1050 / RX 560. |
| `/gameplay` | `src/data/pages/simulation-loop-pages.ts` | Guide | ArmorSim gameplay / simulation loop | Understand the scene editor loop | Beginner / Solver modes | Simulation hub | Three solvers + free-form scene editor. |
| `/beginners-guide` | `src/data/pages/simulation-loop-pages.ts` | Guide | ArmorSim beginner guide | First-run walkthrough | Solver modes / Penetration mechanics | Simulation hub | NORMAL first run; per-variable re-test. |
| `/solver-modes` | `src/data/pages/simulation-loop-pages.ts` | Guide | ArmorSim solver modes (NORMAL / ADVANCED / ULTRA) | Pick the right solver | System Requirements / Gameplay | Simulation hub | ULTRA limited in EA. |
| `/penetration-mechanics` | `src/data/pages/simulation-loop-pages.ts` | Wiki | ArmorSim penetration mechanics | Decode seven outputs | Beginner / Armor configurations | Simulation hub | Glossary + slow-motion viewer. |
| `/armor-materials` | `src/data/pages/materials-pages.ts` | Wiki | ArmorSim armor materials | Compare the 14 documented materials | Armor configurations / Penetration mechanics | Materials hub | Tagged constants. |
| `/ammunition` | `src/data/pages/materials-pages.ts` | Wiki | ArmorSim ammunition / penetrators | Compare service families + custom cores | Penetration mechanics / Armor configurations | Materials hub | 3 service families + 4 custom cores. |
| `/armor-configurations` | `src/data/pages/materials-pages.ts` | Wiki | ArmorSim armor configurations | Build layered/spaced/reactive stacks | Armor materials / Penetration mechanics | Materials hub | Five named configurations. |
| `/first-test-recipes` | `src/data/pages/materials-pages.ts` | Guide | ArmorSim first-test recipes | Set up a first solve per configuration | Armor configurations / Solver modes | Materials hub | Solver + material + penetrator + output per configuration. |
| `/replay-sharing` | `src/data/pages/materials-pages.ts` | Wiki | ArmorSim replay sharing | Save / share replay files | Gameplay / Discord | Materials hub | Couple-of-MB ULTRA replay files. |
| `/wiki` | `src/data/pages/community-pages.ts` | Guide | ArmorSim wiki & FAQ | Get short answers | Discord / Release Info | Community hub | Community Hub as current FAQ. |
| `/discord` | `src/data/pages/community-pages.ts` | Utility | ArmorSim official Discord | Join the verified invite | Wiki / Replay sharing | Community hub | Source from Steam sidebar. |
| `/about` | `src/data/pages/site-pages.ts` | Utility | about ArmorSim Wiki | Trust and editorial policy | Contact | Trust | Explain unofficial status and sourcing rules. |
| `/contact` | `src/data/pages/site-pages.ts` | Utility | contact ArmorSim Wiki | Corrections and source updates | About | Trust | Contact channel pending. |
| `/privacy-policy` | `src/data/pages/site-pages.ts` | Legal | privacy policy | Privacy and analytics | Terms | Trust | GA4 only when configured. |
| `/terms` | `src/data/pages/site-pages.ts` | Legal | terms of use | Site use expectations | Privacy Policy | Trust | Keep unofficial disclaimer clear. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: generated from `src/data/entities.ts` and the generic renderer in `src/lib/entities.ts`.
- Final route inventory: `npm run routes:manifest`.
- Secondary-locale routes use the prefix configured in `src/data/site.ts`; the primary locale remains on root paths.

## Content Clusters

- Launch facts: `/release-date`, `/faq`
- Official facts and safe guide structure: `/wiki`, `/guides`
- Evergreen hub and trust: `/`, `/about`, `/contact`, `/privacy-policy`, `/terms`

## Internal Linking Map

- Homepage should link to the most current high-demand pages.
- Wiki should link to guide and release pages.
- Guides should link to wiki and release pages.
- Release Date should link to FAQ and official sources.
- FAQ should include all current high-demand answer pages.

## Open Questions

- Replace this section with game-specific unknowns during content configuration.
