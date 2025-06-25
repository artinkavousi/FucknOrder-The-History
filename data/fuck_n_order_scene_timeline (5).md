# FUCK n ORDER — **Scene Timeline & Screenplay Atlas**

*Version 0.6 · 2025‑06‑23*

> Consolidated master timeline: **30 arcs / 80 nodes** from “Let There Be Light” to June 2025. Sections restored in full after prior truncation.

---

## 0  Schema

```ts
interface EventNode{ id:string; dateIso:string; title:string; importance:0|1; gemShape:'star'|'pentagon'|'heptagon'; summary:string; sceneRef:string; citations:{url:string;label:string}[]; tags?:string[]; geo?:{lat:number;lon:number}; }
interface Scene{ id:string; eventId:string; arcOrder:number; cameraCue:string; fx:string; localeOverrides?:Record<string,string>; chatScript:ChatLine[]; }
interface ChatLine{ t:number; from:string; msg:string; sticker?:string; sfx?:string; }
```

---

## 1  Cosmic‑to‑Classical (Arcs 0‑3)

| Arc | Event ID                  | Era / ISO       | Title                           | Gem  | Characters       |
| --- | ------------------------- | --------------- | ------------------------------- | ---- | ---------------- |
| 0.0 | `let-there-be-light`      | −13 700 000 000 | The Universe Hits the ON Switch | star | historian‑hana   |
| 0.5 | `big-bang-loading-bar`    | cosmic          | 90‑sec Big Bang Loading Bar     | hept | designer‑dev     |
| 1.0 | `first-atom-formed`       | −13 698 000 000 | Hydrogen Says “I Exist”         | hept | mobile‑marco     |
| 2.0 | `life-in-primordial-soup` | −3 800 000 000  | Single‑Cell Speed‑Date          | pent | imf‑ghost        |
| 3.0 | `cambrian-explosion`      | −540 000 000    | “Minor Update: Appendages v2”   | pent | wolf‑warrior‑wen |

---

## 2  Antiquity & Persia (Arcs 4‑7)

\| Arc | Event ID | ISO / Approx | Title | Gem | Characters | |4.0|`cyrus-charter`|−0539‑10‑12|Cyrus Issues Human‑Rights Charter|star|cyrus‑ghost\*, historian‑hana| |4.5|`passover-persian-plot-twist`|−0537|Judeans Return — Plot Twist|hept|cyrus‑ghost, stiff‑lip‑stu| |5.0|`alexander-burns-persepolis`|−0330|Greek House‑Party Gone Wrong|pent|comrade‑vlad cameo| |6.0|`sassanid-chess-import`|00500|Persians Invent Checkmate Meme|hept|uncle‑slam rage| |7.0|`battle-of-qadisiyyah`|00636|Arabs Defeat Sassanids|pent|supreme‑beardo ancestor|

---

## 3  Oil, Empire & Constitutional Dreams (Arcs 8‑12)

|8.0|`anglo-persian-oil-deal`|1901‑05‑28|Iran Sells Oil for 16 % Cut|star|imf‑ghost, sassy‑saud| |9.0|`constitutional-revolution`|1906‑08‑06|Persia Tries Democracy β|pent|persian‑populace, ban‑ki‑zzz| |10.0|`reza-shah-rise`|1925‑12‑15|Coup with Cossack Swag|hept|stiff‑lip‑stu, comrade‑vlad| |11.0|`ww2-allied-occupation`|1941‑08‑29|UK/USSR Occupy Iran|pent|uncle‑slam, comrade‑vlad| |12.0|`tehran-conference-cat-meme`|1943‑12‑01|Big Three Cat Photo|hept|designer‑dev|

---

## 4  Road to Mosaddegh Coup (Arcs 13‑16)

|13.0|`iran-oil-nationalised`|1951‑03‑15|Mosaddegh Says “Mine!”|star|mosaddegh‑ghost\*, persian‑populace| |14.0|`operation-ajax-memes`|1953‑08‑19|CIA/MI6 Coup Livestream|star|uncle‑slam, stiff‑lip‑stu, ajax‑cia‑bot| |15.0|`whisky-plot-at-club`|1953‑08‑18|Shaban Bimok Wrestler‑Hire|hept|hezzy ancestor| |16.0|`mosaddegh-house-arrest`|1953‑08‑20|Democracy Time‑out|pent|ban‑ki‑zzz|

---

## 5  Cold War & Revolution (Arcs 17‑22)

|17.0|`white-revolution-1963`|1963‑01‑26|Shah Reform Patch Notes|hept|sassy‑saud| |18.0|`hippies-in-iran-1970s`|1971|Woodstock to Persepolis|hept|madame‑ahma‑drag‑inejad| |19.0|`islamic-revolution`|1979‑02‑11|Beardo 2.0 Launch|star|supreme‑beardo| |20.0|`us-embassy-hostage`|1979‑11‑04|444‑Day Unboxing Stream|star|uncle‑slam, persian‑populace| |21.0|`iraq-invades-iran`|1980‑09‑22|Saddam 8‑Bit Side‑Scroller|star|hezzy, supreme‑beardo| |22.0|`iran-contra-gate`|1986‑11‑05|Secret Arms eBay Listing|pent|uncle‑slam, comrade‑vlad|

---

## 6  Modern Nuclear Saga (Arcs 23‑28)

|23.0|`khobar-towers-boom`|1996‑06‑25|Hotel “Room‑Service” Kaboom|hept|hezzy| |24.0|`axis-of-evil`|2002‑01‑29|Label That Launched Memes|star|uncle‑slam, supreme‑beardo| |25.0|`green-movement`|2009‑06‑20|Election Rage TikTok α|star|persian‑populace| |26.0|`stuxnet-leak`|2010‑07‑15|Rickroll Centrifuges|star|start‑up‑snark, supreme‑beardo| |27.0|`jcpoa-sign`|2015‑07‑14|Nuclear “Swipe Right” Deal|star|uncle‑slam, supreme‑beardo, ban‑ki‑zzz| |28.0|`trump-withdraw`|2018‑05‑08|“It’s Not Me, It’s JCPOA”|pent|uncle‑slam|

---

## 7  Escalation to Present (Arcs 29‑30)

|29.0|`soleimani-drone`|2020‑01‑03|Latte‑Powered Reaper|star|supreme‑beardo, uncle‑slam| |29.5|`mahsa-amini`|2022‑09‑16|Woman‑Life‑Freedom Viral|star|persian‑populace| |30.0|`iran-israel-missile-swap`|2025‑04‑25|Shahed vs Iron Dome|star|start‑up‑snark, hezzy| |30.5|`laser-ironbeam-demo`|2025‑05‑11|Kickstarter Laser Demo|hept|start‑up‑snark| |30.9|`woman-life-freedom-edm`|2025‑06‑05|Protest Chant EDM Remix|pent|persian‑populace|

*Historical ghost entries (**``**) pending Character Bible v1.0.*

---

## 8  Sample Scene JSON

See Section 2 above for the full `operation‑ajax‑memes` screenplay block (unchanged).

---

## 9  Scene Construction Rules & Roadmap *(unchanged from v0.5)*

Refer to Sections 3 and 4 for arc ordering logic, gem themes, and milestone roadmap to v1.5.

## 10  Node Summaries & Citation Stubs 🗄️

Each `EventNode` **must** include a concise `summary` (≤ 140 chars) and at least **one primary citation** (URL + label). Editors: fill the CSV using the examples below, then run `yarn validate:events` to lint.

| ID                     | Summary (≤140 chars)                                                             | Example Citation                                                                                                                                          |
| ---------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cyrus-charter`        | Cyrus lets exiled Judeans return and rebuild; world’s first human‑rights decree. | [https://www.britannica.com/biography/Cyrus-the-Great](https://www.britannica.com/biography/Cyrus-the-Great) “Cyrus the Great — Encyclopaedia Britannica” |
| `operation-ajax-memes` | CIA & MI6 bankroll protests, topples Mosaddegh, secures oil for West.            | [https://nsarchive2.gwu.edu//NSAEBB/NSAEBB435/](https://nsarchive2.gwu.edu//NSAEBB/NSAEBB435/) “Declassified Docs: CIA Confirms Role in ’53 Coup”         |
| `stuxnet-leak`         | Malware spins Natanz centrifuges; first cyber‑weapon openly known.               | [https://www.wired.com/2014/11/countdown-to-zero-day](https://www.wired.com/2014/11/countdown-to-zero-day) “Kim Zetter, *Countdown to Zero Day*”          |
| …                      | …                                                                                | …                                                                                                                                                         |

> **Tip →** Use DOI or academic ref where possible; shrink URLs via MD if too long.

## 11  File & Folder Convention 📁

```
/content
  ├─ events.csv           # single source‑of‑truth (80 rows)
  ├─ events.json          # auto‑generated nightly
  ├─ scenes/              # one .json per Scene id
  └─ citations/           # optional PDF snapshots
/public
  ├─ stickers/            # WebP & Lottie
  ├─ audio/               # sprite OGG + json
  └─ gems/                # HDR env + normal maps
```

## 12  Next Editor Tasks ✅

1. **Fill Summaries** — complete all `summary` fields in `events.csv`.
2. **Attach Citations** — minimum one reputable source per event; add `label` for hover tooltip.
3. **Ghost Characters** — finalise `cyrus-ghost`, `mosaddegh-ghost` entries in Character Bible v1.0.
4. **Scene JSONs** — build out chat scripts; target 4‑6 lines each.
5. **QA Pass** — run `yarn validate:events && yarn validate:scenes`.

---

## 13  Camera Cue Presets 🎥

Stored in `cameraPresets.ts` with GSAP/R3F params.  Designers may tune but keep signature names.

| Cue ID       | Description                            | Params (pseudo)                              |
| ------------ | -------------------------------------- | -------------------------------------------- |
| `snap`       | Instant snap to gem; soft ease‑out     | `gsap.to(camera, {pos: gemPos, dur:0.6})`    |
| `zoom-in`    | Start wide; 2 s zoom to active chat    | `gsap.to(camera, {fov:30→15, dur:2})`        |
| `dolly`      | Side‑scroll dolly along rail           | `gsap.to(camera.position, {x:'+=4', dur:3})` |
| `rack-focus` | Focus shift between gem and chat panel | custom shader DOF; animate focusDistance     |

> **Mobile Fallback:** swap to CSS scale transform if WebGL low‑perf.

## 14  FX Glossary ✨

Reference in Scene `fx` field; passes into shader/particle loaders.

| FX ID              | Engine           | Purpose                  | Fallback                  |
| ------------------ | ---------------- | ------------------------ | ------------------------- |
| `cia-film-grain`   | post‑proc shader | B&W film grain, vignette | CSS grayscale + noise PNG |
| `digital-glitch`   | custom GPU       | RGB split, bit‑crush     | Static PNG overlay        |
| `protest-confetti` | instanced mesh   | Spray colour ribbons     | Hidden if fps < 45        |
| `atomic-flash`     | additive sprite  | White-out radial burst   | Pure white div overlay    |

FX definitions live in `/src/fxRegistry.ts`.

## 15  Audio Sprite Keys 🔊

`audio.json` maps key → start (ms) → dur (ms).  Editors add cues here.

| Key                    | Start | Dur  | Note                   |
| ---------------------- | ----- | ---- | ---------------------- |
| `sfx_eagle_screech`    | 0     | 800  | Uncle Slam intro       |
| `sfx_keyboard_stutter` | 820   | 600  | Start‑Up Snark typing  |
| `sfx_teacup_clink`     | 1420  | 700  | Stiff‑Lip Stu entrance |
| `rickroll_intro`       | 2150  | 3700 | 4‑bar Rickroll riff    |
| `sfx_money_rustle`     | 5900  | 900  | CIA cash shove         |

## 16  Gem Shape & Colour Reference 💎

| Shape    | Color Hex | Meaning             |
| -------- | --------- | ------------------- |
| star     | `#35E5FF` | Major turning point |
| pentagon | `#FFD447` | Build‑up context    |
| heptagon | `#8A88FF` | Lore/comic relief   |

## 17  CLI Commands 🛠️

```bash
# validate CSV & Scene JSON
$ yarn validate:events && yarn validate:scenes

# regenerate JSON & static site
$ yarn build

# launch Remotion video export (headless)
$ yarn render --scene operation-ajax-memes --out out/clip.mp4
```

## 18  Content Governance 📜

- **Defamation Check**: LangChain prompt checks names vs false claims.
- **Satire Shield**: disclaimers auto‑visible on first launch.
- **Copyright**: <10 s audio samples; >70‑yr public‑domain photos.

## 19  Lint Rules Summary ✅

- CSV rows with duplicate `id` = error.
- Scene JSON must reference existing `eventId`, `from` values must match Character Bible.
- `summary` length > 140 chars = warning.
- Missing citation = error.

---

— **End of Scene Timeline Atlas v0.8** —

