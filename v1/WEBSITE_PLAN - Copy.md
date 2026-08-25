# BOOST Integration — Website Plan

**Project:** boostintegration.ch rebuild
**Client:** Verein Boost Integration, Im Westfeld 23, 4055 Basel
**Prepared:** August 2026
**Status:** V1 implementation plan + future roadmap

---

## 1. Executive Summary

BOOST Integration is a Basel-based Swiss association (Verein) — a **civic onboarding platform** that connects migrants of all backgrounds with essential integration resources, peer-to-peer support from people who navigated the same journey, and pro-bono volunteer experts.

The current boostintegration.ch is an empty placeholder. The organization has:

- A strong, distinctive brand (chunky BOOST wordmark, sticker/tag visual language, vivid palette)
- Real primary research (103 respondents, July 2026, Basel region street survey)
- A concrete first program: **Admin Night** — with 9 defined session topics
- A real team: 11 volunteers (all migrants themselves), a 3-person board, 3 advisers
- 4 named partners and real bank details for donations
- A funding application in progress that this website must support

**The website's job:** prove there is a real problem, real evidence, a credible response, and a capable team — while making migrants who've been here 2+ years feel *"this organization understands my experience."*

**V1 scope:** a polished, responsive, accessible multi-page static site (semantic HTML + modern CSS + vanilla JS) with the events/registration/donation architecture designed in, but no fake backends.

---

## 2. Brand & Creative Direction

### What the source materials establish

- **Logo:** "BOOST" white-on-black chunky rounded wordmark (set in Zabawa) + "Integration" black-on-green rotated tag. Sub-brand pattern: additional stacked tags (e.g. "Admin Night" on magenta).
- **Sticker system:** rotated highlight tags in brand colors; BELONG heart sticker (pink/red); CONNECT sticker (blue/green). Brand values rendered as stacked stickers: *Confidence, Courage, Potential, Independence, Diversity, Social Capital, Awareness, Connection*.
- **Official palette** (from supplied palette screenshot + logo sampling):
  - Primary: Blue `#608CF7`, Green `#00D265` (logo/action green; palette also holds softer `#5FCF71`), Black `#000000`, White `#FFFFFF`
  - Secondary: Red `#EB5346`, Magenta `#E88CF9`, Gray `#C9D0CC`, Yellow `#FDFF77`
- **Card language** (from the deck's event cards): white rounded cards with hard black offset shadow, colored category chips, mono-style meta labels, black full-width Register button.
- **Photography:** real, sunlit, candid — street interviews, Rhine riverside gatherings, living-room workshops. No stock.

### Direction

**"Swiss precision, human warmth, sticker energy."** A disciplined typographic grid and generous whitespace (the Swiss part) carrying an exuberant sticker/tag layer and real photography (the BOOST part). Editorial, not corporate; energetic, not childish.

### Font licensing constraint (IMPORTANT)

- **Zabawa** (logo font): explicitly NOT licensed — client instruction: "don't touch the font Zabava, I haven't bought yet, the agency gave me just for try." → Used **only** inside supplied logo image assets. Never embedded, never used for new text.
- **PP Right Grotesk** (deck text font): supplied as OTFs but almost certainly the same trial situation. → **Not embedded** on the website.
- **Web substitutes (self-hosted, open license):**
  - Display/headlines: **Archivo** (variable; condensed-to-wide width axis, 100–900 weight) — same industrial grotesk DNA as PP Right Grotesk.
  - Body/UI: **Inter** (variable) — neutral, highly readable, Swiss in spirit.
- Fonts are **self-hosted** (no Google Fonts CDN calls) for Swiss nDSG/GDPR hygiene.
- When the client purchases Zabawa/PP Right Grotesk licenses, swapping is a CSS-token change (documented in §10).

---

## 3. Target Audiences

1. **Primary — migrants in Switzerland ~2+ years** who still feel like newcomers: struggle with taxes, insurance, housing paperwork, bureaucracy; feel lonely despite being settled; find information through friends rather than official channels. Tone for them: *empowering, practical, warm, never pitying*.
2. **Funders / foundations / municipalities** (funding application audience): need evidence, method, team credibility, partners, governance (Verein, board, bank account). Tone: *serious, precise, transparent*.
3. **Volunteers & partner organisations:** professionals (often migrants themselves) who want to contribute; institutions seeking a bridge to migrant communities.
4. **Secondary:** newer arrivals, students, curious locals.

---

## 4. User Research Insights (source: July 2026 survey, 103 respondents)

Method: street + online survey by BOOST volunteer team in Basel / Basel-Stadt / Basel-Landschaft. Locations: Barfüsserplatz; Rheinufer/Kleinbasel (around Claraplatz); Roche HQ (Grenzacherstrasse 124); Faculty of Business and Economics, University of Basel (Peter Merian-Weg 6); kHaus (Kasernenstrasse 8).

**Headline findings (all verified from the deck):**

| Finding | Number |
|---|---|
| Did not contact any integration organisation in past 12 months | **79%** |
| Average rating of experiences with integration organisations (1–5) | **3.4** |
| Second-year participants feeling lonely at least sometimes | **~75%** |
| Experience loneliness about once a month | **~40%** |
| Rely on personal networks / informal channels for support | **56%** |
| Language, taxes and bureaucracy still difficult after | **6+ years** |

**Demographics:** 54% Europe, 24% Asia, rest Africa/Americas/other · 31% B permit, 23% C permit, 15% Swiss citizenship, 30% refugee or other status · Ages: 41% 26–34, 19% 19–25, 18% 35–45 · 52% full-time employed, 23% students · Fields: science & research 25%, business/finance/law 24%, then healthcare, IT, education.

**The narrative these numbers tell** (used as the homepage story arc):

> Integration support exists — but 4 in 5 haven't touched it in a year. People aren't helpless; they're resourceful (56% solve things through networks). What's missing is a **bridge**: trustworthy, human, informal access to knowledge and community. Loneliness persists years after arrival. BOOST is that bridge — **WE LISTENED → WE LEARNED → WE ACT (Admin Night)**.

---

## 5. Information Architecture

Seven pages. Flat, obvious, bilingual-ready.

```
Home            /               The narrative: problem → evidence → response → people → support
About           /about          Story, mission, values, team (volunteers, board, advisers), partners
Research        /research       Method, demographics, findings, what it means (funder-grade)
Events          /events         Admin Night: concept, what to expect, how it runs, 9 session cards
Event detail    /event?id=…     One session: full info + registration UI (v1: email interest)
Support us      /support        Donate (bank transfer = real), TWINT/card = planned; volunteer; partner
Contact         /contact        Email, address, contact form (v1: mailto), map-free (privacy)
Legal           /legal          Impressum + privacy scaffold [LEGAL REVIEW REQUIRED]
```

Primary nav: About · Research · Events · Support us · Contact (+ logo → Home).
Footer: full sitemap, contact block, bank details, partner mention, legal links.

---

## 6. Sitemap

```
/
├── about.html
├── research.html
├── events.html
│   └── event.html?id=<slug>   (9 session detail views from one template)
├── support.html
├── contact.html
├── legal.html
├── 404.html
├── robots.txt
└── sitemap.xml
```

---

## 7. Homepage Architecture

Narrative sequence (each section = one message, one job):

1. **Hero** — full-bleed photo (team arm-in-arm at the Rhine, real). Eyebrow: "Verein Boost Integration · Basel". H1 speaks to the 2+ year feeling. Sub: the civic-onboarding definition, humanized. CTAs: "Discover Admin Night" (primary) / "See what we learned" (secondary). Sticker words drift in as accents.
2. **The problem** ("Still feel new here?") — three short truths from lived experience (the unopened tax letter, the loneliness stat, the friend-network workaround). Typographic, black on white, no cards.
3. **We listened** — research strip: street-interview photos + 4 big stats (79% / 3.4 / ~75% / 56%) with plain-language captions → link to /research.
4. **What BOOST does** — the three boosts: Knowledge (essential resources), People (peer-to-peer support), Experts (pro-bono volunteers). Green section.
5. **Admin Night** — flagship program feature: concept copy from deck + 3 sample session cards + "All 9 topics" → /events. Blue section (Admin Night's color).
6. **Values / community** — t-shirt photo + stacked sticker values.
7. **The people** — 3–4 volunteer quotes carousel-free (static grid), photos; "Meet the whole team" → /about.
8. **Partners** — 4 partner names/logos row.
9. **Support** — donate + volunteer split CTA. 10. **Footer.**

---

## 8. Page-by-Page UX

### About
Hero statement (mission) → Our story (founded around the July 2026 research; Verein in Basel) → Values stickers → **Volunteers** grid (11 people: photo, name, role, origin, quote — quotes kept in original EN/DE) → **Board of Directors** (3) → **Members/Advisers** (3) → Partners (4, with descriptions) → CTA join us.

### Research
Funder-grade but readable: Purpose → Method & locations (July 2026, 103 respondents, street + online) → Who answered (demographics as clean data viz — CSS bars, no chart library) → Findings (the 4 headline stats, expanded) → Long-term barriers → What this means for Basel → How BOOST responds → CTA partner/fund us.

### Events
Admin Night explainer: "Everyone has that list…" hook → What is Admin Night → What to expect (4 items) → How the evening runs (4 steps) → Who's behind it (volunteer experts + peer boost quotes) → **Season 1: the 9 topics** as cards (category chip, title, description, meta rows). Dates: "Dates announced soon" — cards clearly marked `DEMO SCHEDULE` where placeholder. Card → event.html?id=….

### Event detail (event.html)
Reads from `events-data.js` by URL param: hero band in category color, title, meta grid (date/time/place/language — placeholders flagged), full description, "bring" list, speaker block (`[SPEAKER TO BE CONFIRMED]`), register panel: v1 = prefilled email interest + note that online registration is coming. Unknown id → friendly fallback to /events.

### Support
Why support (mission + gap) → **Donate**: real bank transfer block (Beneficiary: Verein Boost Integration · IBAN CH52 0839 2000 1628 1530 1 · Freie Gemeinschaftsbank Genossenschaft — from the deck) with copy-to-clipboard; TWINT + card marked "coming soon" honestly → Volunteer CTA → Partner CTA → In-kind/space offers.

### Contact
Email (hello@ style pending — use anastasiiazaria@boostintegration.ch from deck), address Im Westfeld 23, 4055 Basel; simple form that composes a mailto (no fake backend); social `[LINKS TO BE PROVIDED]`.

### Legal
Impressum skeleton (association name, address, contact) + privacy note explaining no cookies/no tracking in v1; newsletter/registration privacy text marked `[LEGAL REVIEW REQUIRED]`.

---

## 9. Design System

- **Layout:** 12-col fluid grid, max-width 1200px content / 1440px bleeds; section spacing scale 96/128px desktop, 56/72px mobile.
- **Surfaces:** White default; Green `#00D265` and Blue `#608CF7` full-bleed brand sections; Black footer/CTA; Gray `#F3F5F4`-tinted neutrals derived from brand gray.
- **Cards:** white, 20px radius, 2px black border, hard offset shadow (6px 6px 0 black) — direct quote of the deck's event cards.
- **Chips/tags:** rounded rectangles in brand colors, slight rotation (−2° to 2°) for the sticker feel; used for section eyebrows and event categories.
- **Category colors:** Taxes green · Health blue · Insurance magenta · Housing yellow (dark text) · Family teal-green · Banking red · Utilities yellow · Rules blue · German green (mapped from deck cards).
- **Buttons:** Primary = black pill, white text (deck's Register); on dark = green pill; Secondary = 2px black outline pill. Hover: translate(-2,-2) + grow shadow.
- **Iconography:** minimal; emoji only where the deck used them (What-to-expect list); otherwise typographic.

## 10. Typography

- **Display:** Archivo Variable, `font-stretch` 80–110%, weights 700–900. H1 clamp(2.6rem → 5.5rem), tight leading (0.95–1.05), -1% tracking.
- **Body:** Inter Variable 400/500/600, 1.6 line-height, 17px base desktop / 16px mobile.
- **Meta/labels:** Inter 600, 12–13px, +8% tracking, uppercase; data labels in event cards use tabular figures.
- **Big numerals** (stats): Archivo 900 condensed, clamp to ~7rem.
- Token swap path when real licenses arrive: `--font-display` → PP Right Grotesk / Zabawa (logo remains image regardless).

## 11. Color System (CSS tokens)

```
--green:#00D265  --green-soft:#5FCF71  --blue:#608CF7  --magenta:#E88CF9
--red:#EB5346    --yellow:#FDFF77      --gray:#C9D0CC  --black:#000  --white:#fff
--ink:#0B0F0D (body text on white)  --paper:#FFFFFF  --paper-tint:#F4F6F5
```
Contrast rules: body text only black-on-white/tints or white-on-black; green/blue sections use black text (both pass AA for large/bold; body copy on blue/green kept ≥ 17px/600 or black); yellow/magenta/gray only as accents with black text.

## 12. Imagery Strategy

Only real supplied photography. Web-optimized (JPG q80, max 1800px, lazy-loaded, width/height set).

| Use | Files (from raw data) |
|---|---|
| Hero | IMG_0365 (Rhine arm-in-arm lineup) |
| Research/street interviews | IMG_1109(1), IMG_1118(1), IMG_0921, IMG_1352 |
| Community/Rhine | IMG_0893, IMG_0897(1), IMG_0824 |
| Workshops/Admin-Night-vibe | IMG_0046, IMG_0987, IMG_1374, IMG_1392, IMG_1140, IMG_8791, IMG_8594 |
| About/story | IMG_1128, IMG_0494, IMG_1515, IMG_0678 |
| Values | supplied t-shirt brand image (5.png) |
| Team headshots | cropped from deck slides 10–12 |
| Logos/stickers | 1.png, 2.png, 3.png (BELONG), 4.png (CONNECT) |

Two MOV videos exist (IMG_0916, IMG_0926) — reserved for a future stories/video section, not used in v1 (weight).
Alt text: descriptive, human, no keyword stuffing. OG image: supplied hero brand image (image1 with logo).

## 13. Motion System

Restrained, purposeful, CSS-first:

- **Page load:** hero text rises + fades (staggered 80ms); hero photo scales 1.03→1.
- **Scroll reveals:** IntersectionObserver adds `.in-view`; translateY(24px)+fade, 600ms cubic-bezier(.2,.7,.2,1); stats count up once.
- **Stickers:** slight rotation settle on reveal; hover wiggle ≤2°.
- **Cards/buttons:** hover lift via transform + shadow growth, 180ms.
- **Nav:** solid-on-scroll header; mobile menu = full-screen overlay, staggered links.
- `prefers-reduced-motion: reduce` → all transforms/counters disabled, opacity-only.
- No parallax, no scroll-jacking, no cursor effects.

## 14. Responsive Strategy

Breakpoints: ≤480 phone / ≤768 large phone–portrait tablet / ≤1024 tablet–laptop / >1024 desktop.

- Mobile: single column; hero photo shifts to 3:4 crop with text below; nav becomes overlay menu (44px+ targets); event cards stack full-width; stats 2×2; team grid 2-up (1-up ≤380px); sticky-ish primary CTA in hero only (no floating bars).
- Tablet: 2-col grids, nav stays inline if it fits.
- Type scales via clamp(); spacing via CSS vars stepped at 768px.
- Images: `srcset` 800/1400/1800 for heroes; content images single 1200px.

## 15. Accessibility

Semantic landmarks (header/nav/main/footer, one h1/page, ordered headings) · skip-link · full keyboard support incl. mobile menu focus trap + Esc · visible 3px focus ring (`:focus-visible`, brand blue on light / yellow on dark) · WCAG AA contrast (checked per §11 rules) · descriptive alt text; decorative images `alt=""` · form labels + `autocomplete` + error text not color-only · reduced-motion support · `aria-expanded/controls` on menu toggle; stat counters `aria-live="off"` with real text present · lang attributes: page `lang="en"`, German quotes wrapped `lang="de"`.

## 16. SEO

Unique title + meta description per page · canonical URLs on boostintegration.ch · Open Graph + Twitter cards (supplied brand image) · JSON-LD: `NGO` (Organization) on all pages (name, address, email, logo, sameAs `[SOCIAL LINKS TO BE PROVIDED]`), `Event` markup deferred until real dates exist (avoid rich-result spam with placeholders) · robots.txt + sitemap.xml · descriptive URLs · fast static pages (no framework payload) · headings mirror real search intent ("integration Basel", "admin help migrants Basel", "Admin Night") without stuffing.

## 17. CTA / Conversion Strategy

Primary conversion (v1): **Admin Night interest** (email) — every page funnels toward Events.
Secondary: **Support** (donate via bank transfer, volunteer, partner).
Tertiary: newsletter interest (email link, honest "we'll add signup soon").
Hierarchy enforced visually: exactly one primary CTA per section; black pill = act now, outline = learn more. Funder journey gets its own path: Research page ends in partner/fund CTA; footer carries bank details sitewide.

## 18. Technical Architecture

- **Stack:** static multi-page site. Semantic HTML5, one shared `main.css` (custom properties, no framework), vanilla ES modules. Zero build step; deployable to any static host.
- **Why no framework:** 8 pages, no app state; performance + maintainability + free hosting beat any SPA benefit. Future dynamic needs (§21) slot in via APIs/embeds without rebuild.
- **JS budget:** ~8KB total (nav, reveals, counters, events rendering, copy-IBAN, form-mailto). Site works with JS disabled (menu falls back open via `:target`? No — noscript shows static nav list; events render server-less from data file with `<noscript>` link list).
- **Files:** `/website` folder = deploy root (see §6) with `/assets/{css,js,img,fonts}`.
- **Fonts:** self-hosted WOFF2 (Archivo, Inter), `font-display: swap`, preloaded.
- **Performance targets:** LCP < 2.0s (hero preloaded, ~180KB), CLS < 0.02 (dimensions everywhere), total JS < 10KB, per-page weight < 1.8MB.
- **Hosting note:** any static host (GitHub Pages / Netlify / Infomaniak — Swiss). DNS for boostintegration.ch stays with current registrar. `[HOSTING DECISION TO BE CONFIRMED]`.

## 19. Component Architecture

Shared header/footer markup duplicated per page (static site; kept in sync manually — acceptable at 8 pages, documented). Components (CSS classes, BEM-ish):

`site-header` (+scroll state, mobile overlay) · `hero` (home) / `page-hero` (inner) · `section` + `section--green/blue/black` · `eyebrow-chip` (sticker) · `btn btn--primary/ghost/light` · `stat` (numeral + caption) · `truth-block` (problem statements) · `event-card` (chip, title, desc, meta table, action) · `event-detail` · `person-card` (photo, name, role, origin chip, quote) · `partner-card` · `quote-block` · `value-stickers` · `photo-frame` (rounded + offset shadow) · `iban-block` (copy button) · `contact-form` (mailto composer) · `site-footer`.

`events-data.js` = single source of truth for sessions: `{id, num, category, categoryColor, title, short, long, bring[], date:null, time:"19:00–20:30", place:null, language:"EN / DE", speaker:null, status:"planned"}` — null fields render as flagged placeholders. Future backend replaces this file with an API without touching templates.

## 20. Placeholder Content Registry

| Item | Placeholder used |
|---|---|
| Session dates/venues | "Date announced soon" + `DEMO SCHEDULE` label (internally `data-demo="true"`) |
| Speakers | `[SPEAKER TO BE CONFIRMED]` |
| Social media links | `[SOCIAL LINKS TO BE PROVIDED]` (hidden from UI, noted in footer comment) |
| Newsletter backend | UI + honest copy "signup opens soon"; no fake form POST |
| TWINT / card donations | "Coming soon" cards, disabled state |
| General contact email | uses real anastasiiazaria@… from deck; `[GENERIC hello@ ADDRESS TBD]` |
| Impressum/privacy legal text | `[LEGAL REVIEW REQUIRED]` |
| Stories/News page | not built (no content) — roadmap only |
| French/German site copy | not built — architecture ready (§21) |

Nothing invented: no fake testimonials, stats, partners, dates, or speakers.

## 21. Future Registration / Events / Donation Architecture

- **Events:** `events-data.js` → later a headless source (simple JSON from a CMS or a tiny backend). `event.html?id=` URL contract stays stable. When real dates exist: fill fields, flip `status:"open"`, add `Event` JSON-LD.
- **Registration:** v1 email-interest → phase 2 options (evaluate): embedded form service with Swiss/EU data residency, or lightweight backend (one endpoint + spam protection + double-opt-in email). UI slot already in event detail (`.register-panel`). Consent checkbox text `[LEGAL REVIEW REQUIRED]`.
- **Newsletter:** phase 2; criteria: EU/CH data residency, free tier, double opt-in (e.g. evaluate Brevo/Mailchimp/Listmonk — *availability & pricing to be verified at decision time*).
- **Donations:** bank transfer live now. Phase 3 evaluate Swiss-friendly processors for TWINT + cards (candidates to research: RaiseNow, Payrexx, Stripe + TWINT via wallees — *fees/pricing to be verified*; prefer TWINT QR-bill interim: QR-slip generation from IBAN is free). Recurring giving + receipts = requirements list kept in repo.
- **Accounts/community platform:** phase 4; not architected beyond keeping URLs stable.

## 22. Future Product Roadmap

- **Phase 1 (this build):** website, responsive, a11y, SEO, contact, honest event/donation UX.
- **Phase 2 — Community:** real event dates, online registration + confirmation, newsletter, volunteer intake form.
- **Phase 3 — Support:** TWINT/card/recurring donations, receipts, transparency page.
- **Phase 4 — Platform:** DE/FR (+ possibly UA/RU) content, stories/news, resource library, member accounts, partner ecosystem.

## 23. Open Questions / Content Gaps

1. Generic contact email (hello@boostintegration.ch?) — currently only personal address exists.
2. Social media profiles — any live? `[TO BE PROVIDED]`
3. Real Admin Night dates + venue (kHaus?) — needed to flip events from DEMO to live.
4. Speaker names/bios per session.
5. Founding year/registration date of the Verein for Impressum & story timeline. `[TO BE CONFIRMED]`
6. Statutes/annual report links for funder credibility (optional, recommended).
7. Photo consent: confirm all pictured individuals consented to website use. `[CLIENT TO CONFIRM]`
8. German site copy — translate when ready (structure prepared).
9. Hosting/deployment target + who manages DNS.
10. Newsletter/registration/donation provider decisions (Phase 2/3, criteria in §21).

## 24. Implementation Plan

1. Asset pipeline: optimize photos → `/website/assets/img`, crop team headshots from deck slides, copy logos/stickers, fetch + self-host fonts. ✅ then
2. Design system: `main.css` tokens, type, buttons, cards, sections, header/footer.
3. Homepage (full narrative).
4. Events + event detail (data-driven) → About → Research → Support → Contact → Legal → 404.
5. Motion + interactions (reveals, counters, menu, copy-IBAN) with reduced-motion paths.
6. Responsive pass at 4 breakpoints.
7. A11y + SEO pass (landmarks, focus, meta, OG, JSON-LD, sitemap/robots).
8. QA: links, images, console, weights, keyboard-only walk, `QA_NOTES.md` with P0–P3 and fixes.

---

### Internal design review (pre-implementation gate)

- **Contradictions in sources:** deck green (#01D164) vs palette green (#5FCF71) → resolved: logo green = primary, palette green = soft variant. Deck blue #538EFF vs palette #608CF7 → use palette. Volunteer roles mix DE/EN → English site copy, quotes stay original-language. Minor deck typos ("Digitial", "Banglades") corrected as obvious typos, not content changes.
- **Gaps:** no dates/speakers/social/legal text → placeholder registry (§20) covers all; nothing invented.
- **IA logic:** funder journey (Research→Support) and migrant journey (Home→Events) both ≤2 clicks; nav ≤5 items. Sound.
- **Homepage speed-to-message:** problem stated in hero + first section; research proof by second scroll. Sound.
- **Design fit:** sticker system + Swiss grid honors existing brand exactly (colors/cards sampled from deck) without cliché Swiss imagery. Fonts legally safe with a documented swap path.
- **Events/registration/donation:** static-but-data-driven pattern keeps v1 honest and phase-2 cheap. Bank transfer is real (deck-published details) — allowed; TWINT/cards clearly "coming soon". Sound.
- **Invention check:** all facts traced to deck/instructions; placeholders elsewhere. Pass.

→ Proceeding to implementation.
