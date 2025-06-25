# FUCK n ORDER — **UI / UX Design Specification**

*Version 0.1 · 2025‑06‑23*

> Companion to the **Master PRD v1.6**, **Character Bible v0.3**, and **Scene Timeline Atlas v0.8**.  This document codifies every visual, interaction, and behavioural rule for the Web‑app and video exports.  Treat it as the single source of truth for designers, front‑end devs, and QA.

---

## Table of Contents

1. Design Principles
2. Brand & Tone
3. Layout & Grid
4. Colour System
5. Typography & Iconography
6. Component Library (Atoms → Organisms)
7. Motion & Interaction Patterns
8. Audio, Haptics & Multi‑Sensory Layer
9. Responsive & Breakpoints
10. Accessibility & Internationalisation
11. Design Tokens & Theming
12. Asset Naming & Figma Organisation
13. QA Checklist & Handoff Process

---

## 1  Design Principles

| Pillar                  | Description                                                                    | KPI / Success Metric                     |
| ----------------------- | ------------------------------------------------------------------------------ | ---------------------------------------- |
| **Satirical Clarity**   | Humour never obscures historical accuracy. Facts & sources are one click away. | ≥85 % users locate citation in ≤2 sec.   |
| **Playful Gravitas**    | Juxtapose bright gems & confetti with sombre grain & serif footnotes.          | NPS ≥ 60 for “balance humour + serious.” |
| **Physics Delight**     | Inertia‑based scroll, elastic overshoot, gem snaps, sound pitch maps velocity. | 90 % describe scrolling as “satisfying.” |
| **Modular Scalability** | Componentised R3F & React library; autogenerates for new events/characters.    | New node added with zero CSS edits.      |

---

## 2  Brand & Tone

- **Core Motif** — Glass‑ticked timeline, jewel coloured crits, Persian‑inspired floral filigree.
- **Voice** — Cheeky, informed, inclusive. Copy uses second‑person for prompts (“Tap a gem to learn why”).
- **Theme Modes** — Default “Moonlit Holo.”  Future optional “Daylight Paper.”

---

## 3  Layout & Grid

### 3.1 Desktop ≥ 1024 px

```
┌────────────────────────────────────────────┐
│  TOP‑BAR (42 px) — logo · i18n · settings │
├────────────────┬──────────────────────────┤
│ TIMELINE RAIL  │ CHAT PANEL (75 %)        │
│  (20 px wide)  │                          │
│                │                          │
│  GEM COLUMN    │                          │
│  (360 px)      │                          │
├────────────────┴───────────────┬──────────┤
│ CITATION BAR (sticky 52 px)    │  SHARE   │
└────────────────────────────────────────────┘
```

- **Grid** — 12 col, 80 px gutter, 8 px base spacing.
- **Safe‑area** — 24 px padding mobile notch, 16 px desktop.

### 3.2 Mobile ≤ 767 px

- Timeline rail collapses to top progress ruler.
- Gem pops in modal card.
- Bottom nav — Home • Random • Search • Settings.

---

## 4  Colour System

| Token           | HEX                   | Usage                             |
| --------------- | --------------------- | --------------------------------- |
| `primary‑gem`   | `#35E5FF`             | Star gems, call‑to‑action buttons |
| `accent‑gold`   | `#FFD447`             | Pentagon gems, highlights         |
| `accent‑violet` | `#8A88FF`             | Heptagon gems, links              |
| `bg‑glass`      | `rgba(15,15,17,0.72)` | Chat card background, blur 16 px  |
| `text‑high`     | `#FFFFFF`             | Primary copy                      |
| `text‑med`      | `#D7D7E0`             | Secondary labels                  |
| `text‑low`      | `#8A8A95`             | Metadata, timestamps              |

Colour tokens reside in `/tokens/color.json` and exported to CSS custom props.

---

## 5  Typography & Iconography

- **Typefaces** — Inter (Latin), IRANSansX (Persian), Alef (Hebrew). Fallback: Segoe UI, Arial.
- **Scale (desktop)**: 32‑24‑20‑16‑14‑12 px (ratio ≈ 1.25).
- **Icon Set** — Lucide. Stroke = 2 px, colour `currentColor`.
- **Year Glyphs** — Monocase stylistic‑set `"ss05"` to align digits.

---

## 6  Component Library

### 6.1 Atoms

| Atom           | Props                    | Notes                             |
| -------------- | ------------------------ | --------------------------------- |
| `Gem`          | `shape` `color` `active` | R3F mesh, shader uniforms         |
| `ChatBubble`   | `from` `msg` `sticker`   | Markdown → HTML; emoji 1.2 × text |
| `StickerImage` | `src` `alt`              | WebP 512², hover wiggle keyframes |
| `SoundBadge`   | `icon` `isPlaying`       | Toggles sprite channel            |

### 6.2 Molecules

- \`\` — Scroll‑linked, 3D ticks, `IntersectionObserver` highlights gem.
- \`\` — Stacked chips; click → modal footnote with APA export.

### 6.3 Organisms

- \`\` — Virtualised list, GPT‑style gradient scrollback, focuses on latest gem.
- \`\` — 3D gem + event card; flips on year change.

### 6.4 Templates

- \`\` — As per grid above; SEO meta tags; path‑tracer loading fallback.

---

## 7  Motion & Interaction Patterns

| Pattern          | Duration | Easing                       | Usage                    |
| ---------------- | -------- | ---------------------------- | ------------------------ |
| Slow‑in‑fast‑out | 400 ms   | `cubic‑bezier(.25,.1,.25,1)` | Button press             |
| Elastic snap     | 600 ms   | `elastic.out(1,0.5)`         | Gem scroll overshoot     |
| Parallax scroll  | 1 : 0.2  | linear                       | Background stars vs rail |

- **Scroll Haptics** — 20 ms vibration when crossing century tick.
- **Gesture Shortcuts** — Pinch to scrub decade; double‑tap gem to open video.

---

## 8  Audio, Haptics & Multi‑Sensory Layer

- **Adaptive Mix** — UI ≤ ‑24 LUFS; dialogue duck when SFX > ‑18 LUFS.
- **Accessibility** — Captions for all SFX; transcript toggle.
- **Haptic Map** — Drone buzz = 50 Hz pulse; laser cue = 120 Hz ramp.

---

## 9  Responsive & Breakpoints

| Label | Width       | Behaviour                        |
| ----- | ----------- | -------------------------------- |
| `xs`  | ≤ 420 px    | Rail → top ruler; bottom tab bar |
| `sm`  | 421‑767 px  | Gem column collapsible           |
| `md`  | 768‑1023 px | Gem column floating overlay      |
| `lg`  | ≥ 1024 px   | Full layout                      |

Lazy‑load 3D assets on `lg`; lower tiers get static PNG fallbacks.

---

## 10  Accessibility & Internationalisation

- **WCAG 2.2 AA** minimum; colour‑contrast verified via Axe.
- **Keyboard** — `Tab` to cycle gems, `Enter` to open, `Shift+Tab` reverse.
- **RTL** — Timeline rail mirrors; chat bubbles align right; bidi marks inserted.
- **Screen‑reader** — Gems announce “Year — Event Title — Press Enter for details.”

---

## 11  Design Tokens & Theming

Tokens stored in *Style Dictionary* → exported to CSS vars + TS typings.

```
--fnord-color-primary-gem: #35E5FF;
--fnord-radius-base: 16px;
--fnord-space-2: 8px;
```

Dark/light switch multiplies `bg‑glass` alpha and swaps text colours.

---

## 12  Asset Naming & Figma Organisation

- **Figma Pages**: `Foundations` · `Components` · `Layouts` · `Flows` · `Prototypes`.
- Naming: `cmp/organism/ChatPanel/…`.
- Export presets: 1× @72 ppi PNG for docs, SVG for icons, 2× for retina.

---

## 13  QA Checklist & Handoff

1. **Design‑dev parity** — Chromatic diff < 0.05 % on latest branch.
2. **Interactive hits** — Hotjar heatmap shows 90 % gem clicks within 24 px radius.
3. **Perf** — LCP < 2.5 s (`lg`), CLS < 0.1.
4. **A11y cert** — Manual NVDA pass; all focus outlines visible.
5. **Handoff** — Figma → Zeplin tokens JSON; Storybook docs updated.

---

### NEXT

- Create **Theme 2: “Daylight Paper”** variant tokens.
- Prototype mobile gesture onboarding flow.

— **End of UI / UX Design Spec v0.1** —

# FUCK n ORDER: The History

## Product Build & Design Documentation (v1.0)

---

## 1. PRODUCT OVERVIEW

An interactive, satirical group-chat timeline web app and video, retelling US–Iran–Israel–Middle East history as a theatrical, meme-heavy courtroom drama. Characters (countries, leaders, and 'the people') argue, roast, and meme through the events—with every joke, event, and punchline anchored to real sources.

---

## 2. USER EXPERIENCE FLOW

### A. OPENING

* **Bold animated title**: "FUCK n ORDER" splashes in the center.
* **Animated subtitle/description** writes in underneath (fades out after \~3s).
* **Title shifts to top**; description fades out; main UI fades in.

### B. MAIN UI LAYOUT

* **Left (70%)**: Chat panel — group-chat, avatars, speech bubbles, sticker/meme support, sequential narrative.
* **Right (vertical, 20%)**: Timeline rail (3D/lens effect, tick marks, major events highlighted, scrollable).
* **Bottom-Right**: Citation/reference panel (active source links, evidence, memes, pop-up fact cards per event).

### C. INTERACTION

* **Timeline scroll** triggers new events/scene transitions, syncs chat and citations.
* **Event node** (centered/lens) has a floating 3D "gem" with glass/lens effect, magnifying year/event label below.
* **Chat auto-scrolls** with new event; can be paused, skipped, or rewound.
* **Clickable chat bubbles** can show extra memes, fact cards, or stickers.
* **Hover/tap event node** pops up detailed event info and citations.

### D. VIDEO CLIP MODE

* Runs automatically as a linear playback of the above, with character voiceovers.
* Subtitle/caption overlays for each scene.

---

## 3. VISUAL & MOTION DESIGN

* **Title font**: Bold, heavy sans or custom graffiti (neon/blue, glass reflection, animated glitch/fisheye).
* **Timeline bar**: Responsive, fisheye lens center, glowing neon major ticks, 3D glass gem over active event, smooth inertial scroll.
* **Chat UI**: Modern group chat (speech bubbles, avatars, reaction stickers, meme drops, sticker arms race, rich emoji support, auto-typing animation, chat tail shadows).
* **Citation panel**: Glassmorphic, sliding up with clickable sources, links, meme/GIF preview.
* **Sound**: Mechanical tick/scroll (timeline), SFX on chat entry/exit, laughter/roast sounds, meme soundboard, bass "dun-dun" for punchlines.

---

## 4. CHARACTER SYSTEM & SCENES

* **Scripted cast** (US/Uncle Slam, Israel/Startup Snark, Iran Supreme Beardo, Persian Populace, etc.), each with avatar, visual cue, sticker pack, and one-liners.
* **Script scenes**: JSON/Sheet-driven — each event contains: eventID, date, summary, chatScript\[] (chat lines, memes, stickers), citations\[].
* **Every chat bubble/event**: Can have associated meme, SFX, running gag, or pop-culture ref (auto-injectable).

---

## 5. TECH STACK

* **Core**: React (Next.js 15) + R3F (react-three-fiber) for 3D; Drei for helpers; Zustand for state.
* **Animation**: GSAP (ScrollTrigger for timeline sync), React Spring for snapping, GPU Pathtracer for glass/lens.
* **Data**: Google Sheet/JSON (auto-pipeline, historian/fact-check review, citations per node).
* **Assets**: Lottie (avatar motions), WebP (stickers, memes, sprite sheets), Cloudflare/Netlify hosting.
* **Audio**: Spritemap for ticks, chat, gavel, soundboard; fallback for screen reader.
* **Accessibility**: WCAG focus, dark mode, i18n, reduced-motion.

---

## 6. CONTENT DATA PIPELINE

* **Google Sheet** for timeline events: date, eventKey, summary, chatScript\[], memeIDs, stickerRefs, citation\[]
* **GitHub Action**: Validates, converts to JSON, triggers historian review before merge.
* **Sheet columns**:

  * date (ISO8601)
  * eventKey (string)
  * headline
  * summary
  * chatScript\[]
  * meme/sticker IDs
  * citations\[] (url/label)
* **Auto-validation**: No event goes live without a source.

---

## 7. DEVELOPMENT SPRINTS

1. **Skeleton**: Vite/Next project, UI layout, sample data (Week 1)
2. **Timeline rail**: scroll physics, gem, lens effect, event sync (Week 2)
3. **Chat engine**: group chat, avatars, scripting, SFX, sticker/meme injection (Week 3)
4. **Citation panel**: glass UI, pop-ups, hover/expand, links (Week 4)
5. **Pipeline**: Google Sheet > GitHub > JSON > live preview (Week 5)
6. **Full scene scripting**: Populate 20+ nodes (Week 6)
7. **QA, a11y, polish**: WCAG, focus ring, haptics, alt-text, reduced motion, i18n (Week 7)
8. **Video export**: Automated timeline → Remotion/Puppeteer (Week 8)
9. **Launch**: Cloud deploy, social snippets, TikTok/YT clip, feedback loop (Week 9)

---

## 8. CITATIONS, SOURCES & FAIRNESS

* **Every event**: Pop-up citation (PBS, CFR, Reuters, Al Jazeera, Britannica, etc.), clickable for proof, meme or pop-culture ref.
* **Satire not slander**: Characters roast leaders, not ethnicities. Golden-nugget quote bank used as comic ammo.
* **Transparency**: Every punchline traceable to a real event, speech, or meme (with context!).
* **Sensitive mode toggle**: Classroom/safe mode mutes F-bombs and explicit memes.

---

## 9. VIDEO MODE CONSIDERATIONS

* **Automated script playback**: All scenes rendered in sequence, animated chat, synced SFX, overlays.
* **Text-to-speech or pro voice-actors** for key avatars; meme SFX board.
* **Remotion/Puppeteer** for export; direct to TikTok/YT/IG reels.

---

## 10. FUTURE/POLISH

* **User-generated events** (submit an event/meme for future timelines)
* **Alternate realities**: Toggle “What if?” mode for counterfactual memes.
* **Replay scenes**: Shareable links direct to any event.
* **Live update pipeline**: Timeline gets new events as history unfolds.

---

# END OF DOC v1.0

---

(See PRD & script doc for API + UI specs, scene scripts, and full event dataset.)
