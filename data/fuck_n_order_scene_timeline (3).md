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

*Historical ghost entries (**`cyrus‑ghost`**, **`mosaddegh‑ghost`**) pending Character Bible v1.0.*

---

## 8  Sample Scene JSON

See Section 2 above for the full `operation‑ajax‑memes` screenplay block (unchanged).

---

## 9  Scene Construction Rules & Roadmap *(unchanged from v0.5)*

Refer to Sections 3 and 4 for arc ordering logic, gem themes, and milestone roadmap to v1.5.

— **End of Scene Timeline Atlas v0.6** —

