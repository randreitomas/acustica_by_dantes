# Acustica — Brand & Website Design Blueprint
*A visual identity teardown of Acustica (Acustica by Dantes), derived from their Facebook photo archive, for use in building an MVP website.*

---

## 1. Brand Identity

**What Acustica is:** a small, intimate open-mic / acoustic-night venue and coffee shop (Espanya, Didache Bldg, 2nd Floor), built around a recurring cast of local performers (John Ojacastro is a featured "regular"), weekly Thursday/Saturday open mic and acoustic night events, and a strong community-driven social calendar (Pride Month, Mother's/Father's Day, Valentine's, Christmas/New Year, Philippine holidays).

**Brand personality:**
- **Retro-indie / vintage folk-coffeehouse** — the dominant personality. Think 1970s concert poster meets small-batch coffee shop zine.
- **Warm and communal**, not polished-corporate. Posts feel hand-made, DIY, slightly imperfect — that's intentional and part of the charm.
- **Nostalgic** — heavy use of aged paper textures, halftone/grain, sepia tones, and vintage typographic mash-ups (the look deliberately references old gig posters, vinyl sleeves, and mixtape covers).
- **Playful but grounded** — mixes cheeky poster energy (bold display type, mismatched fonts) with sincere community messaging (holiday greetings, Pride solidarity, gratitude notes).

**Target audience:** young adults and students in Metro Manila (college-age to late-20s), indie/acoustic music fans, "third place" coffee-shop seekers, aspiring performers looking for a stage, and a broader neighborhood community that treats Acustica as a recurring social ritual rather than a one-off destination.

**Emotional tone:** cozy, nostalgic, welcoming, a little scrappy/DIY, community-first, unpretentious. It reads like a friend's zine, not a franchise brand deck.

**Key visual themes:**
- The **stage/mic-as-hero** — nearly every post centers a microphone, guitar, or performer.
- **Aged paper / distressed print** aesthetic as the default canvas.
- **Recurring performer photography** as social proof and personality (same faces build familiarity over time).
- **Calendar-driven content** — the brand voice shows up every week (event flyer) and every holiday, so consistency-over-time is a real brand asset.

---

## 2. Color System

Acustica doesn't use one fixed brand palette — instead it uses a **consistent vintage color *mode*** (muted, warm, slightly desaturated, paper-toned) applied flexibly per event. That "mode" is the actual brand asset. A website should encode the *system*, not a single flyer's colors.

**Core recurring palette (extracted across posts):**

| Role | Color | Approx. HEX | Notes |
|---|---|---|---|
| Primary — Mustard/Gold | ● | `#C69A3D` / `#D4A63A` | Most frequent flyer background; the "acustica" logo badge color |
| Primary — Burnt Terracotta | ● | `#B5602E` / `#C9713A` | Second most common flyer background |
| Secondary — Deep Maroon/Oxblood | ● | `#6E1F1F` / `#7A2323` | Used for "Acoustic Night," Valentine's, higher-contrast posts |
| Secondary — Espresso Brown | ● | `#3A2A1E` / `#2E2118` | Dark text, dark backgrounds, coffee-adjacent posts |
| Neutral — Aged Paper Cream | ● | `#EDE1C9` / `#E8DCC2` | Dominant background/paper texture color, used almost everywhere as a base or card color |
| Accent — Olive/Moss | ● | `#6B6B3A` | Occasional secondary accent (independence day, nature-themed) |
| Accent — Faded Rust Red | ● | `#A6432C` | Independence Day, festive accents |
| Special-occasion — Pride Rainbow | ● | multi | Used *only* for Pride Month post — a deliberate, temporary departure to signal solidarity |

**Background colors:** almost never pure white. Base canvas is either the cream/aged-paper tone (`#EDE1C9`) or a solid saturated hue (mustard, terracotta, maroon) with visible grain/texture overlay.

**Contrast & accessibility observations:**
- Flyers frequently use cream-on-brown or dark-brown-on-mustard, which reads fine at poster scale but is **borderline for body text at small sizes** — for the website, body copy should upgrade contrast (e.g., espresso `#2E2118` on cream `#F5EEDD`) while keeping the *hue family*.
- White text is rare in the source material; when used, it's on darker maroon/espresso.
- Recommend WCAG AA minimums be enforced on the website even though the raw flyers don't always hit them — flyers are short-lived promotional graphics, a website is a persistent interface.

**Typical color combinations seen:**
- Mustard background + espresso-brown type (most common)
- Cream background + deep maroon type
- Terracotta background + cream/off-white type
- Maroon background + gold/mustard type (highest-drama, used for headline events)

---

## 3. Typography

Typography is **intentionally eclectic per-poster** (a hallmark of the DIY gig-flyer genre) but a few recurring families of type choices show up consistently enough to define a system:

**Closest matching font styles:**
- **Bold slab/vintage display serif** for hero words like "OPEN MIC" / "ACOUSTIC NIGHT" — closest web-safe matches: *Alfa Slab One*, *Rye*, *Ultra*, *Bevan*, or *Roboto Slab (Black)*.
- **Condensed vintage sans (western poster style)** for secondary headlines — closest matches: *Oswald*, *Bebas Neue*, *Anton*.
- **Script/cursive** for softer, celebratory copy (Women's Month, Happy Valentines, Pre-Valentine Harana) — closest matches: *Playfair Display Italic*, *Sacramento*, *Alex Brush*, *Great Vibes*.
- **Simple grotesque sans** for logistical details (date, time, venue address) — closest matches: *Inter*, *Work Sans*, *Archivo*.

**Heading vs. body:**
- Headings: oversized, bold, often distressed/textured, frequently uppercase, sometimes outlined or with a drop shadow / halftone fill.
- Body/logistics text: small, clean, uppercase-tracked, minimal decoration — a deliberate contrast that keeps flyers legible despite loud headline type.

**Font weights:** Extremes only — very heavy (900/black) for hero type, regular/medium for supporting text. Almost no mid-weight usage, which is part of what gives the posters their poster-like punch.

**Text hierarchy pattern (repeats across almost every flyer):**
1. Event type (OPEN MIC / ACOUSTIC NIGHT) — largest, boldest
2. Date/time — medium, tracked-out uppercase
3. Venue/address — smallest, utilitarian
4. Logo mark ("acustica") — small, consistent placement (usually corner or footer)

**Typical text treatments:** uppercase headlines, wide letter-spacing on small logistical text, halftone or paper-grain "fill" inside bold letterforms, occasional outline/stroke text, hand-set/imperfect alignment (intentionally not grid-perfect — reinforces the zine feel), circular stamp/badge treatment for the logo.

---

## 4. Layout Patterns

- **Square (1:1) hero compositions** — every post is designed for Instagram-style square cropping, meaning the website should think in centered, self-contained "poster blocks" rather than wide cinematic banners.
- **Text-dominant hero framing** — most flyers are typography-as-hero, with performer photography used as a supporting/blended background (often color-treated to match the palette) rather than a clean full-bleed photo.
- **Centered or lockup-based alignment** — text blocks are usually center-aligned or stacked in a tight left-aligned column; very little scattered/asymmetric layout.
- **Minimal whitespace, maximum ink** — posters are dense; this is a "fill the frame" brand, not a spacious minimalist one. (For a website this needs *tasteful translation* — full poster density doesn't work at web body-copy scale.)
- **Card style:** implicit "card" = the square flyer itself — bordered by its own texture edge, occasionally with a thin distressed frame or scalloped/torn-paper edge (seen on the Holy Week schedule post).
- **Dividers:** thin rule lines, dotted/dashed rules, small star or music-note glyphs used as separators instead of plain lines.
- **Grid usage:** the Facebook photo grid itself (Instagram-style 6-across grid) functions as the de facto "gallery" — a strong cue that the website's gallery/events section should also be a tight, uniform-crop grid.

---

## 5. Photography Style

- **Lighting:** warm, low-contrast, often slightly underexposed or amber-shifted — consistent with intimate indoor stage lighting.
- **Color grading:** heavy sepia/duotone or desaturated warm grading applied to nearly all performer photos, so photography blends into the poster's palette rather than standing apart from it.
- **Angles:** mostly eye-level or slightly low-angle "performer on stage" shots — mic in frame, guitar in frame, direct engagement with the camera/audience.
- **Subject focus:** almost always a single performer (mid-shot, chest-up or full seated pose with instrument); very little food photography appears in this set — the brand's photographic identity is **people/performance-first**, not product-first.
- **Food photography style:** not prominent in the sampled content — if it's added later it should still be run through the same warm/sepia grade to stay consistent, rather than shot in bright, clinical food-blog style.
- **Interior shots:** limited but present (map/business card style, general storefront) — cozy, warm-lit, unfussy.
- **Event photos (real, un-treated):** appear seasonally (e.g., New Year's Eve group shots) — brighter, more colorful, styled with string lights and tinsel curtains, capturing an actual party atmosphere. These read as a *deliberate contrast* to the flyer graphics — real, joyful, un-retouched documentation of community events.
- **Human subjects:** recurring performers (same names/faces across many posts) — this repetition is a brand equity: featured artists = familiar faces = community trust.
- **Consistency:** high consistency in *tone* (warm/vintage), lower consistency in exact layout — the brand is unified by *mood*, not by a locked grid system.

---

## 6. Graphic Elements

- **Icons:** microphones, guitars, treble clefs/musical notes, stars — the four recurring glyphs across nearly every flyer.
- **Decorative lines:** thin hairline rules, dotted rules, occasional scalloped/stitched borders (Holy Week schedule flyer).
- **Shapes:** circles (used for the logo badge and as decorative dot accents in orange/cream), stars, halftone dot patterns.
- **Overlays:** paper-grain/noise texture overlay on virtually every graphic; occasional vintage "print misregistration" color-fringe effect.
- **Gradients:** minimal — this is a flat, texture-driven brand, not a gradient-driven one. Where gradients exist, they're subtle warm-to-warm (mustard to terracotta), never neon or cool.
- **Textures:** aged paper, canvas grain, halftone dot screens, subtle distressing/scratches — the single most defining recurring graphic device.
- **Frames:** occasional torn-paper or scalloped photo edges; otherwise flyers are frameless within their square canvas.
- **Logos:** a circular badge mark with a cursive/script "acustica" wordmark in warm gold-on-cream — used consistently as the small brand anchor in the corner of most flyers.
- **Patterns:** checkerboard pattern (seen in an "Open Mic at Acustica" post), halftone dots, occasional grid/graph-paper background (May 28 flyer).
- **Stickers/badges:** small circular accent dots (used as bullets/decoration, often in a triad cluster), star clusters.
- **Social branding elements:** consistent handle reference (@acusticabydantes), consistent square-crop discipline for Instagram/Facebook grid harmony.

---

## 7. UI Inspiration — Translating the Brand into a Website

- **Navigation:** simple, minimal, warm-neutral bar (cream or espresso background) with a small circular logo badge on the left — no mega-menus; this is a small, single-location brand, so navigation should feel like a friendly signpost, not enterprise UI.
- **Hero section:** treat it like *the best flyer they ever made* — bold vintage-slab headline ("ACUSTICA" or a rotating event name), warm textured background, a single strong photo of a performer color-graded to match the palette, and a clear CTA ("See This Week's Lineup" / "Reserve a Seat").
- **Menu section:** since food photography wasn't prominent in the source material, lean into simple, warm, typographic menu cards rather than promising photography the brand hasn't established yet — keep it honest to the current asset library.
- **Gallery:** a tight, uniform square-crop grid (directly mirroring the Facebook photo grid) — this is the single most "on-brand" component to build, since it's literally how the brand already presents itself.
- **Events section:** styled as a **flyer wall** — recent/upcoming open mic and acoustic night posts rendered as square cards in a responsive grid, sorted by date, exactly matching how the brand already communicates its calendar.
- **Reservation/CTA:** warm, high-contrast button (mustard or terracotta fill, espresso text) with a slab-serif label — should feel like a poster call-to-action, not a corporate booking widget.
- **Footer:** dark espresso background, cream text, small circular logo, social links, address/hours — echoes the darker flyer variants.
- **Cards:** square or near-square, cream/paper background, subtle grain texture, thin rule or scalloped border option for event cards.
- **Buttons:** solid warm fill, bold uppercase tracked-out label, no gradient, small circular or square shape (avoid pill/rounded-full — doesn't match the brand's blocky poster language) — subtle rounded corners (4–8px) at most.
- **Hover effects:** slight scale-up + subtle texture-brightness shift (like a poster catching light) rather than modern flat color swaps; underline-draw effect on nav links feels appropriate.
- **Animations:** understated — fade/rise-in for flyer cards, gentle parallax on hero texture, avoid anything glossy/futuristic (would contradict the analog brand feel).
- **Mobile-first:** critical — since the brand's native format *is* the mobile square post, the site should feel just as natural, if not more natural, on mobile as desktop. Design the flyer/event cards mobile-first, then scale up to a grid on desktop.

---

## 8. Website Component Design Guide

### Navbar
- **Purpose:** orientation + quick access to Menu, Events, Gallery, Contact/Reserve.
- **Visual style:** cream (`#F5EEDD`) or espresso (`#2E2118`) solid background, no blur/glass effect (too modern for this brand); circular logo badge left, nav links right, CTA button far right.
- **Spacing:** generous horizontal padding (24–32px), 64–72px height.
- **Border radius:** none on the bar itself; logo badge is a full circle.
- **Shadow:** none or a barely-there 1px bottom border in espresso at 10% opacity.
- **Typography:** condensed uppercase sans (Oswald/Bebas Neue), tracked-out, medium size.
- **Interaction:** underline-draw on hover, CTA button uses the primary mustard/terracotta fill.

### Hero
- **Purpose:** instantly communicate "warm, live-music coffeehouse."
- **Visual style:** full-bleed warm textured background (grain overlay), oversized slab-serif headline, one duotone-treated performer photo, thin decorative rule + star/note glyph accent.
- **Spacing:** large vertical padding (96–140px desktop, 56–72px mobile).
- **Border radius:** N/A (full bleed); any photo insert gets soft 8–12px corners.
- **Shadow:** none — flat and textural, not glassy.
- **Colors:** mustard or terracotta base, espresso headline text, cream supporting text.
- **Interaction:** subtle grain/parallax drift on scroll; CTA button with press/scale feedback.

### Featured Menu
- **Purpose:** show what's on offer without over-promising photography quality that doesn't exist yet.
- **Visual style:** typographic list cards on cream background, thin dotted-rule dividers, small icon accents (cup/note) instead of photos initially.
- **Spacing:** 16–24px card padding, 32–48px section gaps.
- **Border radius:** 8px cards.
- **Shadow:** very soft (`0 2px 6px rgba(46,33,24,0.08)`).
- **Typography:** item name in slab-serif, price/description in grotesque sans.

### About
- **Purpose:** tell the community-first story (open mic culture, recurring artists, neighborhood spot).
- **Visual style:** cream/espresso split section, warm portrait photo (duotone-treated) paired with a short, sincere paragraph — mirrors the tone of the brand's holiday-greeting posts.
- **Spacing:** generous, breathing room (this is the one section allowed to feel calmer than the flyer-dense rest of the site).

### Events
- **Purpose:** the flyer wall — the brand's actual calendar.
- **Visual style:** responsive square-card grid (2 cols mobile, 3–4 desktop), each card = event name, date, small performer photo, mustard/terracotta/maroon background rotation for variety (mirrors real flyer variety).
- **Spacing:** 12–16px grid gaps.
- **Border radius:** 6–10px.
- **Shadow:** soft lift on hover only.
- **Interaction:** hover = slight scale + brightness lift; click opens details/RSVP.

### Gallery
- **Purpose:** direct extension of the Facebook photo grid — proof of community and atmosphere.
- **Visual style:** uniform square-crop masonry/grid, warm duotone consistent across all images, lightbox on click.
- **Spacing:** tight gutters (4–8px), Instagram-grid feel.
- **Interaction:** subtle zoom-on-hover, fade-in on scroll.

### Testimonials
- **Purpose:** community trust (297 reviews, 4.4★ signal seen in the source map card).
- **Visual style:** simple cream cards with a star rating in mustard/gold, short quote in a warm serif, small circular avatar.
- **Spacing:** carousel or 3-up grid, 24px card padding.

### Contact
- **Purpose:** address, hours, map, socials.
- **Visual style:** espresso-dark section, cream text, embedded map styled to match warm tones if possible, social icons in mustard.
- **Spacing:** 64–96px vertical padding.

### Footer
- **Purpose:** wrap-up navigation + brand mark.
- **Visual style:** deepest espresso background, cream text, circular logo centered or left, thin mustard rule divider above copyright line.
- **Typography:** small tracked-out uppercase for links.

### CTA Banner
- **Purpose:** reservation / "join the stage" prompt, reusable mid-page or pre-footer.
- **Visual style:** bold maroon or terracotta full-width band, oversized slab headline ("TAKE THE STAGE"), single button.
- **Spacing:** 64–80px vertical padding.
- **Interaction:** button scale/press feedback, optional subtle grain texture animation.

---

## 9. Design Tokens

```css
:root {
  /* Color Palette */
  --color-mustard:        #C69A3D;
  --color-mustard-light:  #D9B25F;
  --color-terracotta:     #B5602E;
  --color-terracotta-dk:  #9A4F26;
  --color-maroon:         #6E1F1F;
  --color-maroon-dk:      #4E1414;
  --color-espresso:       #2E2118;
  --color-espresso-soft:  #3A2A1E;
  --color-cream:          #F5EEDD;
  --color-cream-dk:       #EDE1C9;
  --color-olive:          #6B6B3A;
  --color-rust:           #A6432C;

  /* Semantic */
  --color-bg:             var(--color-cream);
  --color-bg-dark:        var(--color-espresso);
  --color-text:           var(--color-espresso);
  --color-text-inverse:   var(--color-cream);
  --color-primary:        var(--color-mustard);
  --color-primary-hover:  var(--color-terracotta);
  --color-accent:         var(--color-maroon);

  /* Typography scale (fluid, rem-based) */
  --text-xs:   0.75rem;
  --text-sm:   0.875rem;
  --text-base: 1rem;
  --text-lg:   1.25rem;
  --text-xl:   1.75rem;
  --text-2xl:  2.5rem;
  --text-3xl:  3.5rem;   /* hero headline */
  --text-4xl:  4.5rem;   /* hero headline, desktop max */

  /* Font families */
  --font-display: 'Alfa Slab One', 'Bevan', serif;
  --font-heading: 'Oswald', 'Bebas Neue', sans-serif;
  --font-script:  'Playfair Display', 'Sacramento', cursive;
  --font-body:    'Inter', 'Work Sans', sans-serif;

  /* Spacing scale (4px base) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px; /* logo badge only */

  /* Shadow */
  --shadow-soft: 0 2px 6px rgba(46, 33, 24, 0.08);
  --shadow-card: 0 4px 12px rgba(46, 33, 24, 0.12);
  --shadow-lift: 0 8px 20px rgba(46, 33, 24, 0.18);

  /* Animation */
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 400ms;
}
```

**Button variants:** `primary` (mustard fill, espresso text), `secondary` (outline in espresso, cream fill), `dark` (maroon fill, cream text) — all uppercase, tracked-out label, 6–8px radius, no pill shape.

**Card variants:** `flyer-card` (square, textured background, colored rotation), `content-card` (cream, soft shadow, rectangular), `testimonial-card` (cream, centered, star row).

**Icon style:** simple line or duotone-filled icons echoing the mic/guitar/note/star motif — avoid glossy 3D or neon icon styles.

**Grid system:** 12-column desktop, 4-column mobile, gutters 16–24px; gallery/events sections use a dedicated tighter square-grid (4–8px gutters) to mirror the Facebook grid.

---

## 10. Implementation Recommendations (React + Tailwind + shadcn/ui + Framer Motion)

**Tailwind config extension:**
```js
theme: {
  extend: {
    colors: {
      mustard: { DEFAULT: '#C69A3D', light: '#D9B25F' },
      terracotta: { DEFAULT: '#B5602E', dark: '#9A4F26' },
      maroon: { DEFAULT: '#6E1F1F', dark: '#4E1414' },
      espresso: { DEFAULT: '#2E2118', soft: '#3A2A1E' },
      cream: { DEFAULT: '#F5EEDD', dark: '#EDE1C9' },
    },
    fontFamily: {
      display: ['"Alfa Slab One"', 'serif'],
      heading: ['Oswald', 'sans-serif'],
      script: ['"Playfair Display"', 'cursive'],
      body: ['Inter', 'sans-serif'],
    },
    borderRadius: { DEFAULT: '8px' },
  }
}
```

- **Buttons:** use `shadcn/ui` `Button` component, override with `bg-mustard hover:bg-terracotta text-espresso font-heading uppercase tracking-wide rounded-md`.
- **Cards:** `shadcn/ui` `Card` restyled with `bg-cream border border-espresso/10 shadow-md rounded-lg` for content, and a custom `FlyerCard` component (square aspect, `aspect-square`, rotating background color prop) for events/gallery.
- **Grain/texture overlay:** apply a lightweight repeating SVG noise texture as a `::before` overlay (`mix-blend-multiply opacity-[0.06]`) on hero and flyer cards — this single technique does more than anything else to make the site feel authentically "Acustica" rather than generic Tailwind.
- **Framer Motion:** use `whileHover={{ scale: 1.03 }}` on flyer/gallery cards, `initial/animate` fade-up (`opacity: 0, y: 16` → `opacity: 1, y: 0`) staggered on the Events grid, and a subtle `useScroll`-driven parallax on the hero texture layer. Keep all durations in the 150–400ms range — snappy, not showy.
- **Reusable patterns:** `<FlyerCard variant="mustard|terracotta|maroon" />`, `<SectionHeading eyebrow="OPEN MIC" title="This Week's Lineup" />`, `<CTAButton />`, `<GrainOverlay />` as a wrapping utility component used across Hero, CTA Banner, and Flyer cards.

---

## 11. MVP Scope (Client Pitch Priorities)

**Essential sections for MVP:**
1. Navbar
2. Hero (this alone sells the brand feel — invest disproportionate effort here)
3. Events / Flyer Wall (their actual differentiator — reuse existing flyer imagery if available)
4. Gallery (cheap to build, high brand-recognition payoff — pull directly from existing photo assets)
5. About (short, sincere paragraph — low effort, high trust)
6. Contact/Footer with map + hours

**Can be static for MVP:**
- Menu section (static list, no live pricing system needed yet)
- Testimonials (hand-picked 3–4 quotes, no live review API integration)
- Events (static/manually-updated array of upcoming events rather than a CMS, for the pitch)

**Highest visual-impact-to-effort interactions:**
- Grain/texture overlay on hero + cards (huge authenticity payoff, near-zero dev cost)
- Fade-up stagger animation on the Events grid (Framer Motion, ~10 lines of code, very "alive" feeling)
- Hover scale + shadow lift on Gallery/Event cards (a few Tailwind classes, makes the whole site feel responsive/premium)
- Color-rotating flyer cards (mustard/terracotta/maroon cycling) — reuses the token system, no new design work, but instantly reads as "on-brand variety"

Skip for MVP: full CMS/booking backend, real-time reservation system, animated page transitions, custom illustration work — none of these are needed to prove the brand direction to a client.

---

## 12. Deliverables Summary

**1. Brand Summary**
Acustica is a warm, community-driven open-mic/acoustic-night coffeehouse with a distinctly retro, DIY gig-poster visual identity — vintage textures, bold slab type, and a muted mustard/terracotta/maroon/cream palette applied flexibly across a constant stream of event flyers and recurring-performer photography.

**2. Moodboard Description**
Aged paper and halftone grain. Mustard-yellow and burnt-terracotta flyers stacked like a zine collection. A circular gold "acustica" stamp in the corner of everything. A guitarist under warm amber light, shot in soft sepia. Hand-set condensed type shouting "OPEN MIC" next to a delicate cursive "Happy Valentines." String lights and tinsel at a New Year's gathering. It feels like flipping through a well-loved gig-poster scrapbook, not scrolling a corporate feed.

**3. Complete Design System** — see Section 9 (Design Tokens).

**4. Website Style Guide** — see Sections 2–6 (Color, Typography, Layout, Photography, Graphic Elements).

**5. Component Inventory** — Navbar, Hero, Featured Menu, About, Events, Gallery, Testimonials, Contact, Footer, CTA Banner (see Section 8).

**6. Page Structure (MVP)**
```
Home
 ├── Navbar (sticky)
 ├── Hero
 ├── Events / Flyer Wall
 ├── Gallery
 ├── About
 ├── Testimonials
 ├── CTA Banner ("Take the Stage")
 └── Footer / Contact
```

**7. UX Recommendations**
- Design mobile-first; the brand's native content shape is a square mobile post.
- Keep interactions restrained and analog-feeling — no glassmorphism, no neon glow, no futuristic gradients.
- Let the Events/Gallery grid do the heavy lifting of "proving" the brand — it's the section with the most existing, authentic source material.
- Use real event names/dates where possible rather than generic placeholder copy, even in the MVP — it reinforces that this is a living, active venue.

**8. Visual Consistency Rules**
- Always apply grain/texture to warm-color blocks; never leave a flat, texture-less mustard/terracotta fill.
- Never use pure white (`#FFFFFF`) backgrounds — always cream (`#F5EEDD`) or warmer.
- Headline type is always bold/black-weight and uppercase; never use a light or thin weight for hero text.
- Buttons stay rectangular-ish (4–8px radius) — never pill-shaped; pill buttons read as too modern/SaaS for this brand.
- Photography is always warm/duotone-treated for consistency; never insert a cool-toned or fully desaturated grayscale photo without the warm grade.

**9. Things to Avoid**
- Pure white or cool-gray minimalist SaaS aesthetics — actively contradicts the brand.
- Neon, gradient-mesh, or glassmorphic UI trends — too modern/cold for this identity.
- Overly corporate stock photography — anything that isn't warm and specific to the actual venue/performers will feel off-brand immediately.
- Pill-shaped buttons, rounded-full cards, or overly soft "friendly SaaS" shapes.
- Cluttering the site with unnecessary animation/motion — the source brand is tactile and analog, not flashy.

**10. Overall Design Direction**
Build the MVP as a **digital extension of Acustica's flyer wall** — warm, textured, typographically bold, and grounded in real performer photography — rather than a generic modern coffee-shop template. The single highest-leverage design move is treating the Events and Gallery sections as literal continuations of their existing square-format social content, since that's where the brand's authenticity already lives.
