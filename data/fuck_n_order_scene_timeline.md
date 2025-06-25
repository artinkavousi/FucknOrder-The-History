# FUCK n ORDER — **Scene Timeline & Screenplay Atlas**

*Version 0.2 · 2025‑06‑23*

> Bridges **Master PRD v1.6** and **Character Bible v0.3**.  This atlas enumerates every animated chat vignette, pins it to an ISO‑dated milestone, and provides screenplay‑style dialogue pointers plus technical metadata consumed by the Web‑app renderer and video pipeline.

---

## 0  Schema

```ts
interface EventNode {
  id: string;               // kebab-case key (e.g. "cyrus-charter-539bce")
  dateIso: string;          // ISO 8601 (UTC) or range start
  title: string;            // timeline label
  importance: 0|1;          // 1 = compass glyph larger
  gemShape: 'heptagon'|'pentagon'|'star';
  summary: string;          // <140 chars for tooltip
  sceneRef: string;         // fk → Scene.id
  citations: {url:string;label:string}[];
  tags?: string[];          // optional taxonomy
  geo?: {lat:number;lon:number};
}
interface Scene {
  id: string;               // same slug as EventNode.sceneRef
  eventId: string;          // fk
  arcOrder: number;         // chronological order index
  cameraCue: 'snap'|'dolly'|'zoom-in'|'rack-focus';
  fx: string;               // particle preset id
  localeOverrides?: Record<string,string>;
  chatScript: ChatLine[];   // minimal screenplay excerpt (markdown allowed)
}
interface ChatLine {
  t:number;                 // relative seconds (for Remotion sync)
  from:string;              // fk → Character.id
  msg:string;
  sticker?:string;
  sfx?:string;              // audio sprite cue id
}
```

---

## 1  Chronological Index (20 Highlight Nodes)

| Arc  | Event ID                   | ISO Date    | Title                                | Importance | Gem      | Characters                                   |
| ---- | -------------------------- | ----------- | ------------------------------------ | ---------- | -------- | -------------------------------------------- |
| 1.0  | `cyrus-charter`            | −0539‑10‑12 | Cyrus Issues Charter of Human Rights | 1          | star     | historian‑hana *(narration)*                 |
| 2.0  | `ajax-1953-coup`           | 1953‑08‑19  | CIA/MI6 Operation Ajax               | 1          | pentagon | comrade‑vlad, stiff‑lip‑stu                  |
| 2.5  | `iran-iraq-war-start`      | 1980‑09‑22  | Iran‑Iraq War Erupts                 | 1          | pentagon | persian‑populace, supreme‑beardo             |
| 3.0  | `osirak-bomb`              | 1981‑06‑07  | Israel Bombs Osirak Reactor          | 0          | heptagon | start‑up‑snark                               |
| 4.0  | `war-ceasefire-1988`       | 1988‑08‑20  | UN‑Brokered Iran‑Iraq Ceasefire      | 0          | heptagon | ban‑ki‑zzz                                   |
| 5.0  | `axes-of-evil`             | 2002‑01‑29  | Bush’s “Axis of Evil” Speech         | 0          | heptagon | uncle‑slam, supreme‑beardo                   |
| 6.0  | `stuxnet-leak`             | 2010‑07‑15  | Stuxnet Malware Discovered           | 1          | star     | start‑up‑snark, supreme‑beardo               |
| 6.5  | `green-movement`           | 2009‑06‑20  | Iranian Green Movement               | 0          | pentagon | persian‑populace                             |
| 7.0  | `jcpoa-sign`               | 2015‑07‑14  | JCPOA Nuclear Deal Signed            | 1          | star     | uncle‑slam, supreme‑beardo, ban‑ki‑zzz       |
| 7.5  | `trump-withdraw`           | 2018‑05‑08  | US Withdraws from JCPOA              | 1          | pentagon | uncle‑slam                                   |
| 8.0  | `soleimani-drone`          | 2020‑01‑03  | Soleimani Drone Strike               | 1          | star     | supreme‑beardo, uncle‑slam, persian‑populace |
| 8.5  | `mahsa-amini`              | 2022‑09‑16  | Mahsa Amini Protests                 | 1          | star     | persian‑populace                             |
| 9.0  | `iran-israel-missile-swap` | 2025‑04‑25  | 2025 Missile Exchange Escalation     | 1          | star     | start‑up‑snark, supreme‑beardo, hezzy        |
| 9.5  | `laser-ironbeam-demo`      | 2025‑05‑11  | Iron Beam Laser Debut                | 0          | heptagon | start‑up‑snark                               |
| 10.0 | `woman-life-freedom-remix` | 2025‑06‑05  | Protest Slogan Goes Global EDM       | 0          | pentagon | persian‑populace                             |

Full JSON in `timeline/events.json`; extra side‑nodes (commerce, culture) will interleave at fractional markers (e.g., `4.7`).

---

## 2  Sample Scene Detail — `stuxnet-leak`

```json
{
  "id": "stuxnet-leak",
  "eventId": "stuxnet-leak",
  "arcOrder": 60,
  "cameraCue": "zoom-in",
  "fx": "digital-glitch",
  "chatScript": [
    { "t": 0, "from": "historian-hana", "msg": "📜 *July 2010 — Natanz starts acting funky…*" },
    { "t": 4, "from": "start-up-snark", "msg": "Never gonna give you enriched U!", "sticker": "snark_rickroll.webp", "sfx": "rickroll_intro" },
    { "t": 8, "from": "supreme-beardo", "msg": "💀 Error code: RICK." },
    { "t": 10, "from": "persian-populace", "msg": "Bro got malware’d by 80s pop 🤣" }
  ]
}
```

---

## 3  Scene Construction Rules

1. **Arc Ordering** — decimal ordering leaves gaps for bonus drops; sort numerically at runtime.
2. **Camera Logic** — path defined by `cameraCue`; mapping table in `cameraPresets.ts` (GSAP or R3F controls).
3. **Gem Theme** — star = pivotal shift, pentagon = lead‑up, heptagon = side‑lore.
4. **Audio Sync** — each `sfx` key maps to `audio.json` sprite (Master PRD §10).  Relative `t` ensures Remotion overlay.
5. **FX Pipeline** — `fx` id loads custom shader or particle system; fallback to CSS blur if GPU thin.

---

## 4  Localisation & RTL Edge‑Cases

- Bidi marks auto‑inserted in Persian/Arabic years (see `rtlFix.ts`).
- Some slogans (e.g., “Woman‑Life‑Freedom”) keep tri‑lingual display; supply three ChatLine entries with `localeOverrides`.

---

## 5  CSV Export for Editors

Columns: `dateIso,title,summary,charIds,importance,gemShape,citationUrls`.  GitHub Action converts to JSON nightly.

---

## 6  Pending TODOs

- Flesh remaining 50+ nodes; cross‑link to Character Bible catchphrases.
- Integrate geo coords for globe spin‑out mode (stretch goal).
- Attach `videoSrc` once motion‑graphic stingers complete.

— End of Scene Timeline Atlas v0.2 —

