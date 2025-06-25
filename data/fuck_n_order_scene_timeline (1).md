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

## 2  Antiquity & Persia (Arcs 4‑7)

|4.0|`cyrus-charter`|−0539‑10‑12|Cyrus Issues Human‑Rights Charter|star|cyrus‑ghost\*, historian‑hana| |4.5|`passover-persian-plot-twist`|−0537|Judeans Return Home — Plot Twist|hept|cyrus‑ghost, stiff‑lip‑stu| |5.0|`alexander-burns-persepolis`|−0330|Greek House‑Party Gone Wrong|pent|comrade‑vlad cameo| |6.0|`sassanid-chess-import`|00500|Persians Invent Checkmate Meme|hept|uncle‑slam (rages)| |7.0|`battle-of-qadisiyyah`|00636|Arabs Defeat Sassanids — New DLC|pent|supreme‑beardo ancestor|

---

## 3  Oil, Empire & Constitutional Dreams (Arcs 8‑12)

|8.0|`anglo-persian-oil-deal`|1901‑05‑28|D’Arcy Signs Oil Concession — Persia Gets 16%|star|imf‑ghost, sassy‑saud| |9.0|`constitutional-revolution`|1906‑08‑06|Persia Tries Democracy Beta v1|pent|persian‑populace, ban‑ki‑zzz| |10.0|`reza-shah-rise`|1925‑12‑15|Coup with Cossack Swag|hept|stiff‑lip‑stu, comrade‑vlad| |11.0|`ww2-allied-occupation`|1941‑08‑29|UK/USSR Occupy Iran for Transit|pent|uncle‑slam, comrade‑vlad| |12.0|`tehran-conference-cat-meme`|1943‑12‑01|Stalin, Churchill, FDR + Cat Photo|hept|designer‑dev filters|

---

## 4  Road to Mosaddegh Coup (Arcs 13‑16)

|13.0|`iran-oil-nationalised`|1951‑03‑15|Mosaddegh Says “Mine!”|star|mosaddegh‑ghost\*, persian‑populace| |14.0|`operation-ajax-memes`|1953‑08‑19|CIA/MI6 Coup Livestream Fail|star|uncle‑slam, stiff‑lip‑stu, ajax‑cia‑bot| |15.0|`whisky-plot-at-club`|1953‑08‑18|Shaban Bimok — Pro Wrestler For Hire|hept|hezzy ancestor| |16.0|`mosaddegh-house-arrest`|1953‑08‑20|Democracy Gets Timeout Corner|pent|ban‑ki‑zzz|

---

## 5  Cold War & Revolution (Arcs 17‑22)

|17.0|`white-revolution-1963`|1963‑01‑26|Shah Drops Reform Patch Notes|hept|sassy‑saud| |18.0|`hippies-in-iran-1970s`|1971|Woodstock Goes to Persepolis|hept|madame‑ahma‑drag‑inejad| |19.0|`islamic-revolution`|1979‑02‑11|Beardo 2.0 Launches|star|supreme‑beardo| |20.0|`us-embassy-hostage`|1979‑11‑04|444‑Day Unboxing Stream|star|uncle‑slam, persian‑populace| |21.0|`iraq-invades-iran`|1980‑09‑22|Saddam’s 8‑Bit Side‑Scroller|star|hezzy, supreme‑beardo| |22.0|`iran-contra-gate`|1986‑11‑05|Secret Arms eBay Listing|pent|uncle‑slam, comrade‑vlad|

---

## 6  Modern Nuclear Saga (Arcs 23‑28)

|23.0|`khobar-towers-boom`|1996‑06‑25|Hotel “Room Service” Disaster|hept|hezzy| |24.0|`axis-of-evil`|2002‑01‑29|Speech that Launched 1000 Memes|star|uncle‑slam, supreme‑beardo| |25.0|`green-movement`|2009‑06‑20|Election Rage TikTok Alpha|star|persian‑populace| |26.0|`stuxnet-leak`|2010‑07‑15|Rickroll‑Centrifuge Crossover|star|start‑up‑snark, supreme‑beardo| |27.0|`jcpoa-sign`|2015‑07‑14|Nuclear « Swipe Right » Deal|star|uncle‑slam, supreme‑beardo, ban‑ki‑zzz| |28.0|`trump-withdraw`|2018‑05‑08|“It’s Not Me, It’s JCPOA”|pent|uncle‑slam|

---

## 7  Escalation to Present (Arcs 29‑30)

|29.0|`soleimani-drone`|2020‑01‑03|Latte‑Powered Reaper Strike|star|supreme‑beardo, uncle‑slam| |29.5|`mahsa-amini`|2022‑09‑16|Woman‑Life‑Freedom Goes Viral|star|persian‑populace| |30.0|`iran-israel-missile-swap`|2025‑04‑25|Shahed vs Iron‑Dome Drag Race|star|start‑up‑snark, hezzy| |30.5|`laser-ironbeam-demo`|2025‑05‑11|Kickstarter Orbital Laser Demo|hept|start‑up‑snark| |30.9|`woman-life-freedom-edm`|2025‑06‑05|Protest Chant EDM Remix|pent|persian‑populace|

*Historical ghost characters (**`cyrus-ghost`**, **`mosaddegh-ghost`**) to be added in Character Bible v1.0.*

Full CSV lives in `/content/events.csv` (80 rows). Editors maintain `importance`, `gemShape`, and ≥1 citation.

---

## 2  Expanded Sample Scene — `operation-ajax-memes`

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
    { "t": 9, "from": "persian

```
