# FUCK n ORDER — **Scene Timeline & Screenplay Atlas**

*Version 0.5 · 2025‑06‑23*

> Bridges **Master PRD v1.6** and **Character Bible v0.3**.  Atlas now spans **30 arcs / 80 nodes** from “Let There Be Light” to June 2025’s laser show. Every node anchors a comedic chat vignette with ISO‑dated milestones, gem coding, and screenplay excerpts.

---

## 0  Schema *(unchanged)*

```ts
interface EventNode { id:string; dateIso:string; title:string; importance:0|1; gemShape:'star'|'pentagon'|'heptagon'; summary:string; sceneRef:string; citations:{url:string;label:string}[]; tags?:string[]; geo?:{lat:number;lon:number}; }
interface Scene { id:string; eventId:string; arcOrder:number; cameraCue:string; fx:string; localeOverrides?:Record<string,string>; chatScript:ChatLine[]; }
interface ChatLine { t:number; from:string; msg:string; sticker?:string; sfx?:string; }
```

---

## 1  Cosmic‑to‑Classical (Arcs 0‑3)

| Arc | Event ID                  | Era / ISO       | Title                           | Gem  | Characters                      |
| --- | ------------------------- | --------------- | ------------------------------- | ---- | ------------------------------- |
| 0.0 | `let-there-be-light`      | −13 700 000 000 | The Universe Hits the ON Switch | star | historian‑hana *(narrates)*     |
| 0.5 | `big-bang-loading-bar`    | cosmic          | 90‑sec Big Bang Loading Bar Gag | hept | designer‑dev                    |
| 1.0 | `first-atom-formed`       | −13 698 000 000 | Hydrogen Says “I Exist”         | hept | mobile‑marco (lag complaint)    |
| 2.0 | `life-in-primordial-soup` | −3 800 000 000  | Single‑Cell Speed‑Date          | pent | imf‑ghost (ROI satire)          |
| 3.0 | `cambrian-explosion`      | −540 000 000    | “Minor Update: Appendages v2”   | pent | wolf‑warrior‑wen (tries patent) |

---

## 2  Expanded Sample Scene — `operation-ajax-memes`

```json
{
  "id": "operation-ajax-memes",
  "eventId": "operation-ajax-memes",
  "arcOrder": 140,
  "cameraCue": "dolly",
  "fx": "cia-film-grain",
  "chatScript": [
    { "t": 0, "from": "historian-hana", "msg": "📜 Tehran, Aug 1953 — *Operation Ajax loading…*" },
    { "t": 3, "from": "uncle-slam", "msg": "Freedom fries? Nah — freedom *coups*!", "sticker": "uncle-slam_thumbsup.webp", "sfx": "sfx_eagle_screech" },
    { "t": 6, "from": "stiff-lip-stu", "msg": "Rule Britannia insists on orderly overthrow, old sport." },
    { "t": 9, "from": "persian-populace", "msg": "Bruh, who invited the wrestlers? 🤦‍♀️" },
    { "t": 12, "from": "ajax-cia-bot", "msg": "🤖 *Deploying bags-of-cash-v1.zip*", "sfx": "sfx_money_rustle" }
  ]
}
```

---

## 3  Scene Construction Rules

1. **Arc Ordering** — decimal ordering leaves insertion gaps; runtime sorts ascending.
2. **Gem Theme** — `star` = pivotal shift, `pentagon` = build‑up context, `heptagon` = lore/comic relief.
3. **Camera Logic** — `cameraCue` maps to presets in `cameraPresets.ts` (GSAP/R3F variants).
4. **Audio Sync** — each `sfx` key maps to tracks in `audio.json`; relative `t` in seconds feeds Remotion.
5. **Fallbacks** — if GPU weak, `fx` shader downgrades to CSS blur.

---

## 4  Roadmap

| Milestone | Target                                     | Notes                                      |
| --------- | ------------------------------------------ | ------------------------------------------ |
| **v0.8**  | Lock all 80 nodes & citations              | CSV freeze, run linter, initial review     |
| **v1.0**  | Hook Character Bible v1.0 to every scene   | Auto‑generate video timelines via Remotion |
| **v1.2**  | Add geo coords for globe‑spin stretch goal | Altitude denotes `importance`              |
| **v1.5**  | Launch public alpha                        | Collect telemetry, heatmaps, A/B gem sizes |

— **End of Scene Timeline Atlas v0.5** —

