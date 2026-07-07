# Changelog

All notable changes to the Greenway Shooting Range website.

## [0.2.1] — 2026-07-07

### Changed

- Centered the home hero (logo, tagline, and buttons) for a balanced,
  symmetrical layout on all screen widths.

### Deployment

- Live on Cloudflare Workers Builds (GitHub auto-deploy from `main`).
- Added `wrangler.jsonc`; pinned build Node to 22 (Wrangler requirement).

## [0.2.0] — 2026-07-06

### Added

- Official Greenway Shooting Range badge logo (transparent PNG) as:
  - the header brand (links home) — `static/logo-sm.png`
  - the hero centerpiece on the home page — `static/logo.png`
  - the footer brand — `static/logo-sm.png`
- Screen-reader-only `<h1>` on the home page for SEO/accessibility (the
  visible brand is now the logo image).

### Changed

- Header height increased to fit the badge; mobile menu offset updated to match.

## [0.1.0] — 2026-07-06

### Added

- Initial SvelteKit site scaffold (Cloudflare Pages target) with a
  Montana-outdoors design system (forest green / brass / bone).
- Pages: Home, About, Programs, Membership & Rates, Visit, Waiver,
  Calendar, Contact.
- Single-file content model in `src/lib/site.config.js` for non-technical
  volunteer editing.
- Real content sourced from the range's Google Site: contact info, 8 programs,
  rates ($20 day / $150 family / $100/hr rental), and range/ammo rules.
- Live embed of the range's public Google Calendar and a Gallatin County
  Fairgrounds map.
- Placeholder-with-setup-instructions fallbacks for the Smartwaiver embed and
  optional Stripe Payment Links (payments are opt-in; range is cash/check today).
