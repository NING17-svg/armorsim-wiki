# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-09-16 - First-test recipes page added

- Task: Add `/first-test-recipes` so players can set up a meaningful first solve for each of the five named configurations (layered, spaced, reactive, ceramic, shaped-charge) without cross-referencing four separate pages.
- Files changed: `src/data/pages/materials-pages.ts`, `src/data/pages/home.ts`, `src/data/pages/simulation-loop-pages.ts`, `src/data/faq.ts`, `src/lib/content.ts`, `CONTENT_INDEX.md`.
- URLs affected: New page at `/first-test-recipes`; updated related/hero links from `/`, `/beginners-guide`, `/armor-configurations`.
- SEO/GEO changed: New wiki/guide page with Article + FAQPage schema; page added to Materials & Configuration cluster module on the home grid; new FAQ entries (`recipe-first-output`, `recipe-variables`, `spaced-gap-effect`, `ceramic-plug-ejection`) and reuse of `reactive-solver`.
- Content rule honored: Each recipe names the required solver, the material pairing, the penetrator family, and the first output to read; thickness, angle, and spacing are explicitly flagged as test variables, not fixed by the recipe. Reactive armor recipe calls out that NORMAL produces misleading results and requires ADVANCED.
- Verification: Typecheck, lint, template/content/indexnow validation, full build, and rendered SEO validation all pass locally before publish.

### 2026-09-15 - Adsterra integration populated

- Task: Replace the six empty Adsterra placeholder values with real unit codes collected from the publisher dashboard.
- Files changed: `src/data/ads.ts` only.
- URLs affected: None.
- SEO/GEO changed: None.
- Ad baseline: Native Banner, Banner 728x90, Banner 468x60, Banner 320x50, Banner 160x600, and Smartlink now contain real unit codes; empty-value no-network-request behaviour replaced with the real DOM scripts.
- Verification: Typecheck, lint, template validation, and content validation all pass locally before publish.

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.
