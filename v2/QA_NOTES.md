# QA Notes — BOOST Integration website (V1)

**Date:** August 2026 · **Scope:** `/website` (9 pages, static)
**Method:** headless-Chrome visual audit at 1440px and true-390px (CDP device emulation), console/network sweep on all pages, link/asset integrity script, page-weight audit, interaction tests (mobile menu open/close/Esc/focus), reduced-motion render check.

---

## Verified working

- **Console/network:** 0 errors, 0 warnings, 0 failed requests, 0 HTTP ≥400 across all 9 pages (incl. unknown-event fallback `event.html?id=nope`).
- **Links/assets:** every internal `href`/`src`/`srcset` resolves (automated check).
- **Events system:** list renders all 9 sessions from `events-data.js`; detail page renders per `?id=`, unknown ids show a friendly fallback; register CTA opens prefilled email.
- **Mobile (390px, device-emulated):** no horizontal overflow; hamburger opens green overlay with visible logo + close button; `aria-expanded` toggles; Esc closes; body scroll locks; focus moves into menu (yellow ring) and returns to toggle on close; simple focus trap cycles.
- **Reduced motion:** forced `prefers-reduced-motion` render shows all content instantly (no reveals/marquee/count-up).
- **No-JS:** content fully visible (reveal-hiding is gated on a `js` class set inline); events grid and detail have `<noscript>` fallbacks listing topics + email.
- **Forms:** contact form composes a `mailto:` draft (documented on-page; no fake backend).
- **Copy-IBAN** button works (Clipboard API with graceful no-op fallback).
- **SEO:** unique titles/descriptions, canonicals, OG/Twitter tags with brand image, NGO JSON-LD on home, robots.txt + sitemap.xml, `noindex` on event detail template/legal/404.
- **Fonts:** self-hosted WOFF2 (Archivo + Inter, latin + latin-ext — covers German umlauts and "Đào Gia Khánh Linh"); no third-party requests site-wide (Swiss nDSG-friendly).
- **Weights:** heaviest pages ≈1.1MB (home, about) with lazy-loading below the fold; hero preloaded.

## Issues found during QA — fixed

| # | Severity | Issue | Fix |
|---|---|---|---|
| 1 | P0 | `.reveal` content invisible with JavaScript disabled (opacity stuck at 0) | Reveal styles now gated on `.js` class added inline in `<head>`; no-JS users see everything |
| 2 | P1 | Mobile menu close (X) hidden behind overlay (header stacking context below overlay z-index) | Overlay moved below header (z-90 < z-100); header turns green while menu is open |
| 3 | P1 | Long email address overflowed the mobile menu overlay | Meta links reset to text font with `overflow-wrap: anywhere` |
| 4 | P1 | Chart class `.bars` on research page collided with hamburger icon class | Renamed page-local class to `.databars` |
| 5 | P2 | Hero photo too small/wide (1.9:1) for the split composition | Recut to 1.3:1 at 1200/1600px; width/height attrs updated (no CLS) |
| 6 | P2 | Favicon/touch icon were a non-square sticker PNG | Generated square 64px favicon + 180px apple-touch-icon (green field, BELONG heart) |
| 7 | P2 | Deck wording "registered association" not verifiable | Softened to "an association (Verein) based in Basel" |
| 8 | P2 | 3 heaviest photos >450KB | Re-encoded (q68), all now ≤465KB and lazy-loaded |

Note: an apparent mobile-overflow issue in early screenshots was a tooling artifact — headless Chrome clamps windows to ≈518px min width; true 390px capture via CDP device emulation shows correct layout.

## Open items (not blocking)

### P2 — polish
- Photos `community-rhine-steps` / `research-interview-3` (~430–465KB) could drop to ~250KB via WebP with JPG fallback once a build step or CLI tooling is acceptable.
- Count-up stat animation briefly shows intermediate numbers (standard pattern; real values are in markup for SR/no-JS users; skipped entirely under reduced motion).
- `Organization` JSON-LD is on the homepage only; could be added to all pages.
- Add `Event` JSON-LD once real dates exist (deliberately omitted for placeholder events).

### P3 — nice-to-have
- The two supplied MOV videos could become a compressed ambient loop or a stories section later.
- OG image could be regenerated with a designed layout (currently the branded team photo, which works well).
- Consider `hreflang`/language switcher scaffold when DE content arrives (structure is ready; see WEBSITE_PLAN.md §21).
- Print stylesheet.

### Content gaps (client to provide — see WEBSITE_PLAN.md §23)
- Real Admin Night dates, venue, speakers → flip `events-data.js` fields + `status:"open"`.
- Generic contact address (hello@…), social links, Impressum/privacy legal text (`[LEGAL REVIEW REQUIRED]` markers on legal.html).
- Photo-consent confirmation for all pictured individuals.
- Hosting/DNS decision (any static host works; no build step required — upload `/website` as-is).

## Browser notes

- Tested rendering engine: Chromium 1440px + 390px. CSS uses widely-supported features; graceful degradation verified for: `overflow-x: clip` (falls back via no horizontal overflow anyway), `text-wrap: balance` (progressive), variable-font `font-stretch` (falls back to normal width Archivo).
- Manual spot-check recommended in Safari iOS (mailto: + font-stretch behavior) before launch.
