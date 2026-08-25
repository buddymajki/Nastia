# CREATIVE REVIEW — BOOST Integration V1

**Reviewed:** rendered site at 1440px and true 390px (fresh captures, 100%-scale section crops), compared side-by-side against the original deck slides.
**Verdict in one line:** technically clean and on-palette, but the site currently *borrows the brand's colors while flattening its energy* — it reads as a very tidy component system, not yet as the confident, collaged, human thing the deck is. Fixable without a rebuild.

---

## 1. CREATIVE DIRECTOR REVIEW — the 10 biggest visual weaknesses

### W1 — Card monoculture (the #1 problem)
**What:** Nearly every content type sits in the same white, 20px-radius, 2px-black-border, hard-offset-shadow box: pillars, team members, partners, findings, what-to-expect, register panel, IBAN block, event cards. Nine sections in a row of "box, box, box."
**Why it matters:** One device used everywhere stops being a signature and becomes a template. It's also off-brand: in the deck, the black-border card is specifically the *event card / UI* language. Narrative content in the deck sits **directly on color** (green mission slide, blue volunteer slides — no boxes anywhere).
**Fix:** Reserve the black-border card exclusively for interactive objects (event cards, register panel, IBAN/donate, form). Everything narrative loses its box: pillars become typographic columns directly on green; team becomes portraits directly on blue; findings can keep cards (they're data objects); "what to expect / how the evening runs" become two simple columns with hairline dividers.

### W2 — Photos wear the wrong frame
**What:** Every photograph uses the UI-card treatment (black border + hard black shadow), all at the same size, same 4:3-ish crop, same barely-there 1.2° tilt.
**Why it matters:** The deck treats photos as **white-bordered instant photos with soft shadows** (slides 2–5) — that's a big part of its warmth. The current black frames make warm street photography look like interface chrome, and 1.2° reads as *misalignment*, not intent. Uniform size = wallpaper.
**Fix:** New `.photo` treatment: white 10–14px frame, 6–10px radius, soft neutral shadow (e.g. `0 10px 30px rgba(0,0,0,.18)`), deliberate tilts alternating −3°/2°, at least three distinct display sizes across the site, and one collage moment (hero or About) where two photos overlap with a sticker.

### W3 — Hero: safe layout, flawed detail
**What:** (a) The em dash sits orphaned at the start of the highlighted line ("— and it still…") — it reads as a stray minus sign. (b) Large dead zone above the photo, photo mass too small against the headline mass. (c) Stickers are small and huddle at the photo's corner. (d) Overall composition = the most common hero layout on the internet (text left / image right).
**Why it matters:** The hero is 80% of the 10-second impression. Right now it's *good*, which for this brand is not enough.
**Fix (minimum):** Remove the dash entirely — "Years in Switzerland. <mark>Still feels new?</mark>" (also tightens the copy). Enlarge photo (~46% column, top aligned to H1 cap height), enlarge stickers ~1.4×, let one sticker overlap the photo's top-right corner.
**Fix (better):** Full-width typographic hero — H1 across the whole container with the mark inline, then a tilted 2–3-photo strip (white frames, varied sizes) with stickers punctuating, marquee below. This is the deck's collage energy translated properly and instantly kills the "template hero" read.

### W4 — One section template, nine times
**What:** chip → H2 → gray lead, repeated with identical geometry on every section of every page; every chip rotated the same −1.6°.
**Why it matters:** The repetition is the single biggest "assembled, not designed" signal after the cards.
**Fix:** Three opener variants, used intentionally: (a) chip+H2 (keep for program/action sections); (b) numbered editorial opener — small `01` + rule + H2, for the research/problem narrative; (c) bare H2 with an inline `<mark>` word, no chip (values, CTA). Chips get varied rotations (−2.5° to 2°) and are dropped where they add nothing.

### W5 — The green section neutralizes the brand's boldest surface
**What:** "What BOOST does" puts three white boxes on the green slab; the lead is grayish on green (slightly muddy); the bottom third of each card is empty air.
**Why it matters:** Green is BOOST's loudest asset. The deck's green slides are pure black-type-on-green and they're the most memorable slides in the deck. White boxes read as hedging.
**Fix:** Kill the three cards. Three typographic columns directly on green: colored chip, `h3`, black body text (full black, not gray), separated by 2px black vertical rules. Section instantly becomes the strongest moment on the page.

### W6 — Team reads as a consulting firm, not a community
**What:** White cards, 76px LinkedIn-style avatars, gray left-border quotes. Two circle crops are visibly off-center (Volianuk, Simon — face pushed to one side with a blue moon of background) and read as broken avatars. Card bottoms rag unevenly.
**Why it matters:** People are BOOST's proof. The deck's volunteer slides (large floating circular portraits directly on blue, quote underneath) feel like a community; the current section feels like an org chart. This is the largest emotional gap between deck and site.
**Fix:** Rebuild "people" as the deck does it: blue slab, 140–160px circular portraits with white ring sitting directly on the blue, name + role + origin chip + quote below, no boxes. Recrop the two off-center portraits. On the homepage, feature one large quote + three portraits instead of three equal cards. (Board/advisers can stay compact on green, boxless.)

### W7 — Four equal stats, zero drama
**What:** 79% / ~75% / 56% / 3.4-5 all rendered at identical size in a flat row.
**Why it matters:** Even texture = no story. The research has a headline number — **79% weren't reached by any integration organisation** — and the layout hides it.
**Fix:** 79% becomes the hero stat: spans two columns at ~2× size with its one-line takeaway; the other three sit as a smaller stacked column/row beside it. Same hierarchy on the research page intro.

### W8 — Partners are plain text
**What:** Four bold text names centered under a timid gray chip.
**Why it matters:** Reads as "logos missing." Partner proof is a trust signal for both funders and migrants — and the actual logos exist in the deck (slide 13: CATAPULT, VIVAMUS, SÀD, SPRACHMOBIL.CH).
**Fix:** Extract the four logos from the deck slide, normalize to a consistent cap height (~40px), display as a clean strip. Left-align with a small label ("Partners"), link to About#partners.

### W9 — Motion and CTA drumbeat
**What:** Virtually every element carries the same fade-up reveal; on the events page, nine identical full-width black "Read more →" slabs march down the grid.
**Why it matters:** When everything animates, nothing does; nine heavy buttons compete with the content they serve.
**Fix:** Prune reveals to section openers, media, and stats (drop them from individual cards/paragraphs). Event-card CTA becomes a bold arrow text-link ("Details + register interest →") — the whole card is already clickable; keep one heavy button per viewport.

### W10 — Placeholder noise on Events
**What:** Every card repeats four italic meta rows ("Date announced soon / 19:00–20:30 / Venue announced soon · Basel / EN·DE"); the "demo schedule" note is yellow-filled like the brand marquee (semantic clash: yellow = fun *and* = placeholder).
**Why it matters:** The empty state currently shouts "nothing is real yet" nine times — the opposite of momentum.
**Fix:** One shared season banner above the grid ("**Season 1 — dates announced soon.** All evenings 19:00–20:30, in Basel, EN/DE."), cards carry a single meta line (topic number + category + one line), full meta stays on the detail page. Restyle the season note as a black-outline tag, not yellow fill.

**Balance check:** not too playful, not corporate — currently it errs *sterile-tidy*. The warmth is all in the photos and copy; the layout system needs to loosen (W1/W2/W4) for the personality to land. Typography and spacing fundamentals are solid; `font-stretch: 90–94%` on display headings would move Archivo closer to the deck's condensed Right Grotesk voice.

---

## 2. HOMEPAGE STORYTELLING REVIEW

**10-second test, current state:** WHAT (a Basel Verein for migrants) ✓ chip + lead · WHO (people here for years) ✓ headline · PROBLEM ✓ headline asks it · WHY IT MATTERS — only after scrolling · EVIDENCE — section 3 ✓ · WHAT BOOST DOES — section 4 ✓ · NEXT STEP — two CTAs ✓ but the primary one names a program the visitor doesn't know yet.

**Issues & fixes (order of the page is right — Problem → Research → Solution → Admin Night → People → Action; keep it):**

1. **"Discover Admin Night" before Admin Night means anything.** Fix with microcopy, not a rename: keep the button, add one caption line beneath the CTA row: *"Admin Night: free evenings in Basel that sort your Swiss admin — taxes, insurance, housing & more."* One sentence, all facts from the deck.
2. **The site's only real action is buried.** Everything funnels to sessions that can't be booked yet. Make the honest waitlist the explicit conversion: "Keep me posted" belongs in the Admin Night section on Home *and* as the events page's primary CTA (see W10). Frame positively: momentum ("Season 1 in planning — be first in"), not apology ("dates soon").
3. **Values section stalls the middle.** The t-shirt/values block sits between Admin Night and People, splitting the two community-proof sections. Move Values *after* People (emotional crescendo before the black CTA), or fold the sticker row into the People section closer. Also: the t-shirt image is the brand's best still — it deserves a bigger, boxless presence when moved.
4. **Hero headline punctuation** — see W3. "Years in Switzerland. **Still feels new?**" is shorter, cleaner, and removes the orphan dash.
5. **The stats row under Research needs the 79% hierarchy** (W7) so the evidence lands as a story beat, not a dashboard.

---

## 3. FUNDER / FOUNDATION REVIEW

**Working:** real problem ✓, primary evidence with method and locations ✓, defined target group (2+ years, still un-anchored) ✓, concrete response with a program design ✓, named board/advisers with institutional affiliations (ZHAW, Uni Basel, Vivamus) ✓, bank account at a Swiss bank ✓, partners ✓.

**Missing trust signals (all fixable with existing facts):**

1. **Momentum is invisible.** The deck's story *is* momentum: survey (July 2026) → 11-volunteer team → association with board + advisers + bank account → Admin Night Season 1 designed, 9 topics. Add a compact **"Where we are"** milestone strip (About page, condensed echo on Home). Zero invented facts; it converts "plans" into "trajectory."
2. **Partner names without marks** (W8) — logos are the fastest credibility scan a funder does.
3. **Methodological honesty.** One sentence on the research page: *"103 respondents is a snapshot, not a census — but the pattern was consistent across locations, ages and permit types."* Signals rigor; uses only real demographic spread.
4. **What support buys.** Support page says venue/snacks/materials in prose. Funders scan lists. Add a 3-item "What a season needs" block (venue evenings · materials & coffee · outreach), with `[SEASON BUDGET — TO BE PROVIDED]` placeholder for the actual figure. No invented numbers.
5. **A human ask.** The contact/support pages have no face. Add president's name (Anastasiia Zaria — photo exists) next to the contact email: "You'll get an answer from a real person."
6. Gaps to flag, not fake: statutes/annual report links, founding date. Already in WEBSITE_PLAN §23.

**Does it feel executable?** Yes on content, *almost* on design — the empty-state noise (W10) is the one thing that whispers "not real yet" to a funder. Fix that and the momentum strip and this reads as a project mid-flight.

---

## 4. MIGRANT USER REVIEW (2–5 years in CH)

- **"Is this for me?"** — Yes, immediately. The headline question is the right hook; the truths section ("the tax letter you haven't opened") is genuinely recognizing, not pitying. Keep.
- **"What do I get?"** — Clear: evenings where experts help with real letters, free, in Basel, EN/DE.
- **"Would I attend?"** — Yes — **but I can't.** Nothing is bookable; after reading 9 appealing session cards the only outcome is "email your interest." Nine repetitions of "Date announced soon" turn interest into deflation. *Fix:* waitlist-first framing (§2.2, W10) — one positive banner, one primary action, and the number that helps ("9 topics · Season 1 in planning").
- **"Would I register (email)?"** — The mailto is honest, but the label "Email your interest" + a prefilled draft is the best available v1; keep, and repeat the same single action everywhere (currently three differently-worded email CTAs exist: "Email your interest", "Keep me posted", "Say hello" — unify the event-related ones to "Keep me posted").
- **"Would I come back / tell a friend?"** — Only after dates exist. Until then the sticker-values and the tone are the shareable assets. No action needed now.
- **Language friction:** English-only. The contact page's "write in your language" line is warm — surface that same line in the events register panel too. Whether to promise DE content = open question for client, not for us to invent.
- **Micro-copy:** the site says "migrants" ~20× on the homepage alone. It's the deck's word — keep it, but swap 3–4 instances for "people building a life in Switzerland" to avoid drumbeat labeling.

---

## 5. BRAND REVIEW (deck → web translation)

| Brand element | Deck | Site today | Verdict |
|---|---|---|---|
| Palette | green/blue/black/white + accents | same, correctly sampled | ✓ |
| Sticker chips | rotated tags, varied colors | present, uniform rotation | ◐ vary angles, scatter less uniformly |
| BELONG / CONNECT stickers | punctuate color slides | hero only, small | ◐ 1 per color slab, bigger |
| Event-card language | black border, hard shadow, chips, meta rows | faithfully reproduced | ✓ (best translation on the site) |
| **Photos** | **white instant-photo frames, soft shadow, tilted, varied** | black UI frames, uniform | ✗ **biggest brand miss** |
| Color slabs | type directly on green/blue | white boxes on color | ✗ second biggest |
| People pages | portraits floating on blue | white cards, small avatars | ✗ |
| Typography | condensed heavy grotesk | Archivo default width | ◐ add `font-stretch:92%` display |
| Energy | collage, overlap, rotation | grid, aligned, tidy | ◐ needs W2/W3 |
| Warmth | high | medium | ◐ follows from the above |

**Conclusion:** the site currently *borrows the identity's colors and one component*; W1/W2/W5/W6 are what "translating the identity" actually requires.

---

## 6. MOBILE REVIEW (390px)

- **Hero:** strong — 4-line headline with two green slabs, full-width CTAs, photo below. Keep.
- **Typography/CTAs/nav:** comfortable, obvious, effortless (menu verified). ✓
- **Weak points:** (a) event cards ≈640px tall ×9 → ~6,000px of near-identical scroll; the one-line-meta fix (W10) + arrow-link CTA cuts each card ~40%. (b) About page: 11 stacked volunteer cards ≈ enormous; with the W6 redesign use a compact mobile pattern — portrait + name + origin on one row, quote beneath, no boxes — roughly halving the height. (c) Stats: with the 79%-hero change, mobile shows 79% full-width, others 3-up beneath. (d) Marquee: fine. (e) Rhythm: color slabs give mobile its beat — improved further when boxes go (less nested chrome per screen).

---

## 7. MOTION REVIEW

- **Has purpose:** hero stagger (entrance), count-up (evidence), marquee (brand energy), card/button lift (affordance — consistent between cards and buttons). Nothing is gimmicky, nothing scroll-jacks. ✓
- **Problems:** (a) *reveal saturation* — nearly every element fades up identically; prune to openers/media/stats (W9). (b) *count-up shows false intermediate values* on credibility-critical numbers; shorten to ~700ms and ease from 60% of the target value (reads as "settling," not "counting from zero"), keep disabled under reduced motion. (c) Marquee is `aria-hidden` and decorative — fine; no pause control needed at this size. (d) Sticker hover wiggle mentioned in the plan was never implemented — *don't* add it globally; a single subtle settle on the hero stickers at load is enough.
- **Do not add:** parallax, cursor effects, section transitions. The brand's energy should come from composition (W2/W3), not more movement.

---

## 8. CONTENT REVIEW — exact replacements

Overall: copy is above average, but there are AI fingerprints — em-dash density (~40 on the homepage alone), triadic constructions, and phrase recycling ("pro-bono experts" ×8, "Swiss admin maze" ×3, "finally click/figuring out the same things" ×2 each). Cut half the em dashes; vary the recycled phrases.

| Location | Current | Replace with | Why |
|---|---|---|---|
| Hero H1 | "Years in Switzerland — and it still feels new?" | "Years in Switzerland. **Still feels new?**" | kills orphan dash; punchier |
| Hero lead | "…the pro-bono experts that make Swiss life finally click." | "…the pro-bono experts who make Swiss life make sense." | "finally click" is cute-generic; "who" for people |
| Hero CTA caption | *(none)* | "Admin Night: free evenings in Basel that sort your Swiss admin." | §2.1 |
| Support hero H1 | "Every boost needs a push." | "Keep Admin Night free." | current line is a muddled metaphor (a boost *is* a push); replacement is the actual ask |
| Support hero lead | "…venue evenings, snacks and coffee, materials…" | "…room hire for each evening, snacks and coffee, printed materials…" | "venue evenings" is not natural English |
| Events banner | "🗓️ Season 1 schedule in planning — dates announced soon" | "**Season 1 — 9 sessions, dates announced soon.** Every evening: 19:00–20:30 · Basel · EN/DE" | converts apology into momentum; de-duplicates 36 meta rows |
| Event card CTA | "Read more →" ×9 | "Details + interest →" (text link) | W9/W10 |
| People H2 (home) | "Built by migrants, for migrants" | keep — but lead swap: "Our volunteers have navigated the same maze. Now they help you skip the confusing part." | removes 2nd "Swiss admin maze" + "confusion they went through" (reused on About) |
| Green pillar 1 body | "…explained by people who actually deal with it." | "…explained by people who deal with it every day." | "actually" ×4 sitewide; prune |
| Research honesty line | *(add after method)* | "103 respondents is a snapshot, not a census — but the pattern was consistent across locations, ages and permit types." | §3.3 |
| Footer boilerplate | "…so feeling at home doesn't take a decade." | keep footer; but hero/CTA sections shouldn't echo the same "decade/years" figure — CTA lead is fine as is | avoid triple-repetition |

*(No factual claims added anywhere; all replacements re-arrange existing deck facts.)*

---

## 9. INFORMATION ARCHITECTURE REVIEW

- **Page count:** all 9 earn their place; no merges. Research must stay top-level (funder path). Legal stays.
- **Rename "Events" → "Admin Night"** in the main nav (and footer "Admin Night" already does this). The program name is the brand's product; "Events" is generic and, with one program, slightly overpromises.
- **Nav order:** current `About · Research · Events · Contact · [Support us]` buries the action. Recommend `Admin Night · Research · About · Contact · [Support us]` — migrant path first, funder path second, both ≤1 click. Footer keeps full map.
- **Support placement** as the nav pill: correct; leave.
- **About** is not generic (research-born story + full team) — improves further with the momentum strip (§3.1).
- **Anchors:** home "Meet the whole team →" → `about.html#team` works; add `#board` link from research page's "governance" mention if added later. No other changes.

---

## 10. "AI-GENERATED WEBSITE" TEST — 10-second verdict

**Today, a sophisticated designer would hesitate — and then say "probably, yes."** The giveaways, in order of loudness:

1. Same card component ×5 content types (W1)
2. Identical section-opener template ×9 (W4)
3. Alternating 50/50 split sections ×6 (part of W2/W3 fixes: vary column ratios — 60/40, full-bleed, offset)
4. One border-radius (20px) and one shadow token on *everything* (resolved by W1/W2's two distinct languages: UI cards vs photo frames)
5. Every image same size/crop/frame (W2)
6. Reveal-everything animation (W9)
7. Text-only partner row (W8)
8. Equal-size stat row (W7)
9. Generic blockquote-with-left-border quotes (dies with W6)
10. Chips with identical rotation everywhere (W4)

**The fixes are already specified above** — W1–W10 are precisely the de-AI program. The three moves that flip the verdict fastest: photos-as-instant-photos (W2), type-on-color instead of boxes-on-color (W1/W5/W6), and the 79% editorial stat moment (W7).

---

## 11. PRIORITIZED IMPROVEMENT PLAN

### P0 — fundamentally affects the product
| ID | Change | Covers |
|---|---|---|
| P0-1 | **De-card the narrative surfaces:** pillars as type-on-green with black rules; People section rebuilt deck-style (portraits directly on blue, recrop Volianuk/Simon circles); expect/how as boxless columns; black-border cards reserved for events/register/donate/forms | W1, W5, W6 |
| P0-2 | **Photo language:** white instant-photo frames + soft shadow + deliberate varied tilts/sizes; hero recomposition (dash removed, bigger photo or full-width typographic hero + photo strip, bigger stickers) | W2, W3 |
| P0-3 | **Waitlist-first events:** one Season-1 momentum banner, one-line card metas, arrow-link card CTAs, "Keep me posted" unified as THE action (home + events + detail) | W10, §2.2, §4 |

### P1 — major improvement
| ID | Change | Covers |
|---|---|---|
| P1-1 | 79% hero-stat hierarchy on Home + Research | W7 |
| P1-2 | Partner logos extracted from deck slide 13, normalized strip | W8 |
| P1-3 | "Where we are" momentum milestones (About + condensed Home echo) | §3.1 |
| P1-4 | Copy pass with §8 replacement table + em-dash prune + phrase de-duplication | §8 |
| P1-5 | Section-opener variation system (3 variants; varied chip rotations) | W4 |
| P1-6 | Reveal pruning + count-up settle (700ms from 60%) | W9, §7 |
| P1-7 | Mobile length: compact volunteer pattern, slimmer event cards (follows P0-1/P0-3) | §6 |
| P1-8 | Move Values section after People; give t-shirt image a bigger boxless moment | §2.3 |

### P2 — polish
- Nav: rename Events → "Admin Night", reorder (Admin Night · Research · About · Contact · Support pill)
- `font-stretch: 92%` on display headings (closer to Right Grotesk DNA)
- Green-section lead to full black; sticker scatter (1 per color slab, varied rotation)
- Season-note tag restyle (black outline, not yellow fill); "what a season needs" list on Support with `[BUDGET TBD]` placeholder
- Named contact person (Zaria) on Contact/Support
- Board/advisers boxless compact layout on green
- Research honesty sentence (§3.3)

### P3 — optional
- WebP pipeline for the 3 heaviest photos; designed OG image; print stylesheet; MOV footage as future ambient loop; share-a-sticker moment

---

## IMPLEMENTATION STATUS (round 2, August 2026)

| ID | Status | Notes |
|---|---|---|
| P0-1 De-card | ✅ done | Pillars → type-on-green with rules; People → bare portraits (home on tint, About on blue slab with 140–156px ringed portraits); board/advisers → compact rows on green; expect/how → bare columns. Black-border cards remain only on events, register, IBAN, forms, partners. All 17 portraits re-cropped by pixel detection. |
| P0-2 Photo language + hero | ✅ done | `.photo` instant-photo frames (white, soft shadow, −2.6°/2°/−1.2° tilts), `.photo-pair` overlap used on home research + About mission. Hero: dash removed ("Years in Switzerland. Still feels new?"), photo enlarged & top-aligned, stickers larger (CONNECT top-right, BELONG bottom-left), hero note under CTAs. |
| P0-3 Waitlist-first events | ✅ done | Season-1 banner with "Keep me posted" CTA, one-line card meta, arrow text-link CTAs (cards ~40% shorter), detail panel + home Admin Night section unified on "Keep me posted"; demo-note restyled (outline). |
| P1-1 79% hero stat | ✅ done | `.stats-hero`: 79% at up to 11.5rem + three supporting rows. |
| P1-2 Partner logos | ✅ done | Extracted from deck slide 13; logo strip on home, logos on About partner cards. |
| P1-3 Momentum timeline | ✅ done | About "Where we are": survey → team → Verein → Season 1 (all facts from deck). |
| P1-4 Copy pass | ✅ done | §8 replacements applied (hero, support H1/lead, events banner/CTAs, people lead, pillar 1, research honesty line); em-dashes pruned on rewritten pages; named contact person on Support/Contact; "what a season needs" list with `[FIGURE TO BE PROVIDED]`. |
| P1-5 Opener variants | ✅ done | Numbered openers (01/02/03) on home problem/research, About, Research page; chips with varied tilts; bare H2+mark on Values. |
| P1-6 Motion pruning | ✅ done | Reveals removed from individual truths/pillars/persons/partners; count-up now 700ms settling from 60%. |
| P1-7 Mobile length | ✅ done | Bare people rows on ≤768px; shorter event cards. |
| P1-8 Values after People | ✅ done | Order now Admin Night → People → Values → Partners → CTA; t-shirt photo larger. |
| P2 nav rename/order | ✅ done | `Admin Night · Research · About · Contact · [Support us]` on all pages. |
| P2 font-stretch | ✅ done | 94% on h1/h2 (80–85% on stat numerals). |
| P2 sticker scatter | ✅ done | CONNECT on green slab (home) and blue slab (About); BELONG on About photo pair. |
| P2 remaining | open | Research-page 79% hero treatment (findings cards kept), print CSS, WebP pipeline, OG redesign. |

## TOP 5 CHANGES (biggest perceived-quality lift)

1. **P0-1 De-card the site.** Type directly on the green and blue slabs; rebuild People as the deck's floating-portraits-on-blue (with the two bad crops fixed); keep black-border cards only for events/donate/forms. This single move removes AI-tells #1, #4, #9 and closes the biggest brand gap.
2. **P0-2 Give photos the deck's instant-photo language and fix the hero.** White frames, soft shadows, committed tilts, varied sizes; hero loses the orphan dash, gains photo mass and sticker presence. The site immediately stops looking component-assembled.
3. **P0-3 Turn the empty event state into momentum.** One "Season 1 — 9 sessions" banner, one-line card metas, one unified "Keep me posted" action everywhere. Removes the deflation loop for migrants and the "not real yet" whisper for funders.
4. **P1-1 + P1-2 + P1-3 Evidence drama + proof.** 79% as the editorial hero stat, real partner logos, and the all-facts momentum timeline. This is the funder-facing 20% that changes the credibility read.
5. **P1-4 + P1-5 + P1-6 Copy & rhythm pass.** The §8 replacement table, half the em dashes gone, three section-opener variants, pruned reveals. Kills the remaining template cadence in both language and layout.
