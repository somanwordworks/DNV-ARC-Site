# DNV ARC Design Package (draft v1)

Status: DRAFT. Nothing generated yet. Palette values are finalized from the approved footage after the video gate. Tier 1 (single journey), trimmed package.

## 1. Brand premise

**The arc.** An arc is the path between a point and its destination. DNV ARC builds small, sharp products (CINEQ, Data Rhino, Dunly, Noteek, Conteak) that each follow one clean path from raw data to a clear answer. The logo shows it: two bars, one gap, one direction. The whole site teaches that one idea: *data in, clarity out.* Every section serves it or is cut.

## 2. Palette (direction, from the logo and the planned world)

World: a deep navy night full of drifting data particles, one electric blue arc of light cutting through it.

```css
:root{
  --canvas:#070E24;        /* deep navy, never pure black */
  --panel:#0C1633;
  --accent:#3395E8;        /* logo blue, CTA and rare emphasis */
  --accent-hover:#5BB0F2;
  --accent-muted:rgba(51,149,232,.18);
  --text-secondary:#8FA3C8;
  --text-primary:#EAF0FB;
  --brand-navy:#0A2259;    /* logo navy, used for depth and the left bar */
}
```

Values get re-sampled from the approved footage.

## 3. Type trio

- Display: **Michroma** (wide, squared, matches the logo lettering), 400, used sparingly and large.
- Body: **Manrope**, 400 and 500.
- Mono (small labels): **JetBrains Mono**, 400, uppercase with wide tracking.

(Replaces Barlow Condensed and Inter on the current site.)

## 4. Hero concept and storyboard (Tier 1, one 6 second shot)

**Concept: The Arc.** Abstract, no anatomy, no text. Scroll down = the camera glides forward along a glowing blue arc through a dark field of drifting data particles, and the arc arrives at five points of light.

- Start frame: deep navy particle field, a single thin blue arc entering from upper left, intentional calm space on the left for the headline.
- Motion: one slow forward push along the arc. Particles stay alive and drift. Light streaks past the lens at the midpoint (the lens moment).
- Final frame (rest): the arc has resolved into five evenly spaced points of light in a gentle curve across the middle third, soft glow, lots of margin top and bottom for the nav and captions.
- Mobile: still image of the final frame (phones get the static hero, as the skill designs it).
- Prompt guards: "no text, no logos, no lettering anywhere", edge to edge world (never name empty space as darkness).

## 5. Band map (starting points)

| Band | Range | Footage moment | Copy (verbatim) | Entrance |
|---|---|---|---|---|
| 1 | 0.00 to 0.16 | Particle field, arc enters | "Data is noise." | Letters settle in from blur |
| 2 | 0.20 to 0.40 | Camera pushes along the arc | "Until it has a direction." | Line draws left to right |
| 3 | 0.44 to 0.64 | Light streaks past the lens | "We build the direction." | Words rise one by one |
| 4 | 0.68 to 0.86 | Five points appear | "Five products. One arc." | Five dots light in sequence |
| 5 | 0.88 to 1.00 | Rest | "DNV ARC" + "Scroll to meet them." | Fade, then wordmark glow |

## 6. Static hero copy (phones, reduced motion)

- Headline: "Data in. Clarity out."
- Subline: "DNV ARC builds five focused products for cinema, money, learning, privacy and data teams."
- CTA: "Meet the five"

## 7. Below the fold (every section leads to ONE call to action: "Start a conversation")

1. **The five** (the interactive moment): five glowing points from the hero become five cards. Hover or tap one and the arc redraws to it and the card opens.
   - CINEQ: "Box office and OTT numbers for Indian cinema, in one place."
   - Data Rhino: "Cloud and AI news for people who build with data."
   - Dunly: "Household money tracking. No ads. Your data stays yours."
   - Noteek: "Courses and labs for data, AI and cloud careers. Learn by doing."
   - Conteak: "A private contact book for people who value discretion."
2. **What we build** (from the current services page): "We build for others too." Data and AI engineering, websites and products, cloud. Three short blocks.
3. **How we work**: "Say what you need. We map the path. We ship it." Three steps.
4. **Proof**: client logos (existing `/public/clients`) and the line "Small team. Real products. Live today."
5. **FAQ** (to be sharpened with buyer language research): how long a build takes, what it costs, who owns the code, what support looks like.
6. **Contact**: "Let's build something together." Form fields: name, email, interest (the five brands, Partnership, Something else), message. Success state: "Got it. We reply within 24 hours."
7. **Footer**: logo, five brand links, email, WhatsApp. No fictional-brand note needed (real company).

Form handling: needs a decision. Recommended: a real server endpoint inside the Next.js app that emails info@dnvarc.com, since the current form sends nothing.

## 8. Vector layer plan

- The logo split bar redrawn as an SVG that draws itself on scroll, used as the section divider.
- Thin arc lines linking the five brand cards.
- Whisper-level particles behind the lower sections. Reduced motion shows final states and stops drives.

## 9. Engineering list

Blob fetch with loading ring, lerped time, gated seeks, delta-gated DOM writes, band pacing and flick test, four-layer text legibility, five-condition static hero gate, complete-without-video, per `10k-websites/references/scrub-pipeline.md`. Built as a client component in the existing Next.js app, keeping `/services`, `/pricing` and the Vercel deploy.

## 10. Copy gate

Every line above ships verbatim. Before anyone sees the build: zero em dashes, zero stock words (leverage, seamless, empower, unlock, robust, actionable, data-driven, solutions), plus the AI-tell sweep.

## Open items before generating

- Higgsfield connected and credits verified.
- Video model chosen with real prices.
- Architecture confirmed (Next.js app, recommended).
- Any extra assets from the user (product screenshots for the five brands would go into the page as-is).
