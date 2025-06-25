# FUCK n ORDER – Timeline & Gem Chronometer Suite

> **Status** – Final PRD v1.0 (2025‑06‑22)

---

## 0  Revision Log

| Date       |  Ver |  Author |  Notes                                                         |
| ---------- | ---- | ------- | -------------------------------------------------------------- |
| 2025‑06‑22 | 0.1  | ChatGPT | Initial stub                                                   |
| 2025‑06‑22 | 1.0  | ChatGPT | *Final* – fully‑detailed build‑ready PRD inc. UI spec, API, QA |

---

## 1  Mission

Craft a **visually‑stunning, physically‑responsive timeline system** that anchors every chat message to a point in cosmic or social history while **celebrating transparency** (glass, citations) and **playful physicality** (inertia, gem lens). Two deliverables share one code‑base:

1. **Timeline Rail** – the main chronometer integrated with the chat screen.
2. **Gem Tick Toy** – a mini, free‑scroll version users can pin anywhere.

Both draw from the same event dataset and style tokens.

---

## 2  Experience Pillars

| Pillar                  | Practical Manifestation                                                            |
| ----------------------- | ---------------------------------------------------------------------------------- |
| *Temporal Clarity*      | Year markers, compass ticks, and a lens that magnifies the currently focused date. |
| *Jewelled Elegance*     | Antique‑gold bezels, half‑polished teal quartz with chromatic interiors.           |
| *Physics‑First Delight* | Inertial scrolling, elastic snapping, velocity‑pitched tick sounds.                |
| *Truth in Glass*        | Inline citation pane, transparent UI layers, avoids ornamental obscurity.          |
| *Graceful Degradation*  | Raster fallback if WebGL2 path‑trace unavailable; reduced‑motion toggles.          |

---

## 3  Personas & Journeys

1. **Historian Hana** discovers the year 132 CE, clicks the gem → modal opens with citations & chat auto‑scrolls to discussion.
2. **Designer Dev** drags the Gem Tick Toy to a second monitor, flick‑scrolls while sketching, appreciating the caustics.
3. **Mobile Marco** skims with thumb; compass ticks enlarge when near his finger; haptics pulse on each century.

---

## 4  Functional Spec

### 4.1 Data

```ts
interface Event {
  id: string;          // slug
  title: string;       // “Fall of the Berlin Wall”
  dateIso: string;     // ISO‑8601 extended, supports –XXXX for BCE
  summary: string;
  importance: 0|1;     // 1 = major (compass tick)
  citations: { url:string; label:string }[];
  image?: string;      // optional hero img
}
```

`GET /api/events?from=‑13800000000&to=2025` returns paginated JSON; server pre‑sorts by `dateIso`.

### 4.2 Rendering

| Layer      | Raster Path                                       | Path‑Trace Path (toggle)                   |
| ---------- | ------------------------------------------------- | ------------------------------------------ |
| Rail       | Instanced mesh (1× cylinder)                      | Same, but geometry merged & BVH built once |
| Ticks      | `MeshBasicMaterial` + emissive gradient           | Instanced emissive quads                   |
| Active Gem | `MeshPhysicalMaterial` (transmission 1, IOR 1.52) | `PathTracingMaterial` w/ Abbe number 56    |
| Chat Panel | HTML overlay (Tailwind glassmorphic)              | Same                                       |

All shading uses linear colour‑space, ACES tone‑map.

### 4.3 Scroll Physics (shared hook)

```ts
// pseudo
velocity += wheelDelta * SENSITIVITY
pos += velocity
airFriction = prefersReducedMotion ? 0.92 : 0.88
velocity *= airFriction
if (snap && |velocity| < ε) pos = nearestNode(pos)
```

`requestAnimationFrame` loop lifts store state → R3F.

### 4.4 Interaction Matrix

| Action            | System Response                  | Auditory   | Haptic      |
| ----------------- | -------------------------------- | ---------- | ----------- |
| Wheel drag        | Rail & chat scroll               | Tick click | Pulse 10 ms |
| Gem click         | Open modal → citations list      | Soft thunk | None        |
| ↑/↓ keys          | Snap prev/next node              | Tick click | None        |
| Toggle Path‑Trace | Re‑mount scene with new renderer | UI beep    | None        |

---

## 5  Visual & Layout Spec

### 5.1 Grid

```
Desktop ≥1280 px
┌─20 px────────┬─360 px─────────┬─auto───────────┐
│Timeline Rail │Gem Marker Pane │Chat + Citation │
└──────────────┴────────────────┴────────────────┘
```

Mobile merges timeline & gem atop chat.

### 5.2 Timeline Rail

- **Width** – 20 px (desktop), 14 px (mobile).
- **Compass ticks** – cardinal star glyph every 1,000 yrs or 1 decade (contextual); minor 10 ticks between.
- **Labels** – Typeface Inter SemiBold 14 px; color #828C97 50 %.

### 5.3 Active Gem

| Attribute  | Value                                                   |
| ---------- | ------------------------------------------------------- |
| Shape      | Heptagon w/ crown & tail (SVG path)                     |
| Inner Text | Year (H1 48 px cyan) + title (H3 20 px white)           |
| Material   | Crackled teal quartz, dispersion edge; gold #C4963F rim |
| Size       | 280 × 380 px desktop / 220 × 300 px mobile              |

Glass shader outputs background‑distorted UV so rail appears bent.

### 5.4 Chat Panel

- Glass card (#0F0F11, 12 % opacity, backdrop‑filter blur 16 px).
- Bubbles – gradient #1C1D22→#101113, radius 18 px.
- Avatar stub 40 × 40 px.

### 5.5 Citation Chip

- Sticks to bottom of chat column.
- 8 px rail‑aligned marker → text label (link).

---

## 6  System Architecture

```
Next.js 15 (app router)
│
├── @react-three/fiber (Canvas per scene)
├── drei + drei-extra (Environment, PMREM)
├── zustand (global timelineStore)
├── React Spring (snap tween), GSAP (inertia alt.)
├── @react-three/gpu-pathtracer (opt‑in)
└── three-mesh-bvh (geometry accel)
```

SSR renders critical HTML; R3F bootstraps on client.

---

## 7  Dev Timeline (revised)

| Sprint (wk) | Objective                                         |
| ----------- | ------------------------------------------------- |
|  0          | Env setup, storybook skeleton                     |
|  1          | Basic rail + JSON loader + chat sync              |
|  2          | Compass ticks, labels, friction physics           |
|  3          | Active gem lens shader, snap animation            |
|  4          | Citation chip + modal                             |
|  5          | Glass‑Tick Toy (raster) + drag/resize, unit tests |
|  6          | Path‑Trace integration + BVH pipeline             |
|  7          | Accessibility & i18n audit                        |
|  8          | Beta release & telemetry hooks                    |

---

## 8  Quality Matrix

| Test   | Tool                         | Pass Criteria         |
| ------ | ---------------------------- | --------------------- |
| Unit   | Jest + React Testing Library | ≥ 95 % coverage       |
| VisReg | Percy                        | No pixel diff > 0.1 % |
| Perf   | WebPageTest                  | LCP < 2.5 s on 3G     |
| A11y   | Axe, NVDA manual             | 0 critical issues     |

---

## 9  Appendix A – Event JSON Example

```json
{
  "id": "big-bang",
  "title": "Let There Be Light",
  "dateIso": "-13800000000-01-01T00:00:00Z",
  "summary": "Recombination allows photons to travel…",
  "importance": 1,
  "citations": [
    { "url": "https://wmap.gsfc.nasa.gov/", "label": "WMAP" }
  ]
}
```

---

## 10  Appendix B – Audio Sprite Map

| Index |  ms Offset | Duration | Desc         |
| ----- | ---------- | -------- | ------------ |
|  0    |  0         |  120     | Minor tick   |
|  1    |  140       |  190     | Compass star |
|  2    |  360       |  250     | Gem snap     |

---

**END OF PRD**

