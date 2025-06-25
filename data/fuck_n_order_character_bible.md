# FUCK n ORDER — **Character Bible**

*Version 0.3 · 2025‑06‑23*

> Companion to the [Master PRD v1.6](/canvas/6858d037619881918230eedc9a335fbb).  Defines every speaking avatar seen in the timeline chat‑comedy.  Each entry supplies narrative, visual, audio, and technical hooks consumed by the Web app, video renderer, and localisation pipeline.

---

## 0  Schema

```ts
interface Character {
  id: string;              // kebab‑case stable key
  displayName: string;     // UI label (i18n‑ready)
  faction: string;         // country/org or "meta"
  archetype: string;       // comedic trope
  look: string;            // short art‑direction blurb for illustrators
  persona: string;         // one‑sentence bio / vibe
  catchPhrases: string[];  // recurring lines (ENG‑default)
  runningGag: string;      // slapstick or satire hook
  entranceCue: string;     // SFX key in audio sprite
  stickerIds: string[];    // default ≥3 WebP sticker filenames
  memeOrigin?: string;     // if birthed from IRL meme/citation
  powerLevel?: number;     // 1‑9000, absurd scale for jokes
  uiColor?: string;        // HEX for bubble accent (WCAG AA)
  themeSong?: string;      // music cue id
  voiceActor?: string;     // TTS voice name or cast note
}
```

All optional props fall back to sensible defaults (see `characterDefaults.ts`).

---

## 1  Core Cast (15 avatars)

Below entries cover ≥95 % of dialogue beats.  Side‑roles in Section 2.

### 1.1 uncle‑slam

| Field            | Value                                                                         |
| ---------------- | ----------------------------------------------------------------------------- |
| **displayName**  | Uncle Slam                                                                    |
| **faction**      | USA                                                                           |
| **archetype**    | Loud‑mouthed hyper‑power salesman                                             |
| **look**         | Denim bomber, bald‑eagle shoulder pad, foam finger shaped like missile        |
| **persona**      | Swaggering, sell‑first‑ask‑later superpower hungry for likes                  |
| **catchPhrases** | “Freedom tastes like …”, “Hold my cold brew!”, “Mission accomplished—again!”  |
| **runningGag**   | Announces victory banners premature — banner literally explodes behind him    |
| **entranceCue**  | `sfx_eagle_screech`                                                           |
| **stickerIds**   | `uncle‑slam_woo.webp`, `uncle‑slam_thumbsup.webp`, `uncle‑slam_facepalm.webp` |
| **memeOrigin**   | Bush ‘03 carrier speech + freedom‑fries era                                   |
| **powerLevel**   | 8000                                                                          |
| **uiColor**      | `#2459FF`                                                                     |
| **themeSong**    | `cue_guitar_anthem_Fmaj`                                                      |
| **voiceActor**   | ElevenLabs “Adam” (tone +12 % energy)                                         |

### 1.2 supreme‑beardo

\| Field | Value | | **displayName** | Supreme Beardo | | **faction** | Islamic Republic of Iran | | **archetype** | Theocratic doom‑poet | | **look** | XXL turban morphing into cosmic black‑hole, green sash, glowing prayer beads | | **persona** | Speaks in bombastic verses, claims moral high‑ground while tweeting via VPN | | **catchPhrases** | “Lo, the phoenix shall rise…”, “Death to bandwidth!”, “Inshallah latency!” | | **runningGag** | Tweets apocalyptic poem; Twitter auto‑tags ‘sensitive content’ overlay | | **entranceCue** | `sfx_thunder_reverse` | | **stickerIds** | `beardo_rant.webp`, `beardo_shrug.webp`, `beardo_vpn.webp` | | **memeOrigin** | IRL Khamenei tweets & censorship memes | | **powerLevel** | 6666 | | **uiColor** | `#136F46` | | **themeSong** | `cue_daf_drone_Cmin` | | **voiceActor** | Google Wavenet “fa‑IR‑B” low‑pitch |

### 1.3 start‑up‑snark

\| Field | Value | | **displayName** | Start‑Up Snark | | **faction** | Israel / Tech scene | | **archetype** | Over‑caffeinated cyber‑bro hacker | | **look** | Hoodie with LED yarmulke, laptop dripping RGB, Iron‑Dome visor HUD | | **persona** | Treats missile defense like Twitch leaderboard; drops venture‑capital metaphors | | **catchPhrases** | “Hold my cold‑brew hash…”, “Deploy intercept — push to prod!” | | **runningGag** | Live‑streams intercept count with meme emojis | | **entranceCue** | `sfx_keyboard_stutter` | | **stickerIds** | `snark_lol.webp`, `snark_rickroll.webp`, `snark_beer.webp` | | **memeOrigin** | Iron‑Dome GIF kill‑counter Twitch memes | | **powerLevel** | 7000 | | **uiColor** | `#FF4D5A` | | **themeSong** | `cue_chiptune_G` | | **voiceActor** | ElevenLabs “Josh” upbeat |

### 1.4 hezzy

\| Field | Value | | **displayName** | Hezzy | | **faction** | Hezbollah | | **archetype** | Budget‑brand drone jockey | | **look** | Mil‑surplus hoodie, bargain‑bin RC controller, Shahed‑kebab logo | | **persona** | Trolls opponents with discount hardware, constant sponsor shout‑outs | | **catchPhrases** | “Sponsored by Tehran Energy Drink!”, “Launch #999!” | | **runningGag** | Every drone labelled with ridiculous ad decal | | **entranceCue** | `sfx_drone_buzz` | | **stickerIds** | `hezzy_fist.webp`, `hezzy_kebab.webp`, `hezzy_ouch.webp` | | **powerLevel** | 4200 | | **uiColor** | `#734F2A` | | **themeSong** | `cue_buzzz_dub` | | **voiceActor** | TTS "AR‑male‑robotic" |

### 1.5 sassy‑saud

\| Field | Value | | **displayName** | Sassy Saud | | **faction** | Saudi Arabia | | **archetype** | Hyper‑modern influencer prince | | **look** | Chrome ghutra, neon swords, AR Snapchat filter halo | | **persona** | Treats peace deals like flash‑sales; flexes giga‑projects | | **catchPhrases** | “Use code OIL4EVER!”, “Neom says hi!” | | **runningGag** | Unboxes ceasefire coupons mid‑shelling | | **entranceCue** | `sfx_cashregister_gliss` | | **stickerIds** | `saud_peacecoupon.webp`, `saud_oilrain.webp`, `saud_shrug.webp` | | **powerLevel** | 6500 | | **uiColor** | `#E5C100` | | **themeSong** | `cue_desert_trap_D` | | **voiceActor** | ElevenLabs “US‑Peter” + slight autotune |

### 1.6 wolf‑warrior‑wen

\| Field | Value | | **displayName** | Wolf‑Warrior Wen | | **faction** | China | | **archetype** | Deadpan dealmaker panda‑diplomat | | **look** | Silk suit with panda cufflinks, WeChat QR code cape | | **persona** | Offers BRI infrastructure bundles, steals ad‑copy verbatim | | **catchPhrases** | “Can copy that in half the time.”, “Interest‑only for 99 yrs.” | | **runningGag** | Clones others’ peace plans instantaneously | | **entranceCue** | `sfx_stamp_red` | | **stickerIds** | `wen_contract.webp`, `wen_panda.webp`, `wen_copy.webp` | | **powerLevel** | 8800 | | **uiColor** | `#D62F2F` | | **themeSong** | `cue_erhu_lofi` | | **voiceActor** | Google Wavenet “zh‑CN‑A” |

### 1.7 comrade‑vlad

\| **displayName** | Comrade Vlad | | **faction** | Russia | | **archetype** | Sarcastic arms‑dealer tsar | | **look** | Bombastic fur cape, hypersonic surfboard | | **persona** | Crashes chats with second‑hand SAMs & shady media ops | | **catchPhrases** | “I am the captain now.”, “Slightly radioactive, still good!” | | **runningGag** | Accidentally sells glitchy gear causing comic self‑goals | | **entranceCue** | `sfx_bear_growl` | | **stickerIds** | `vlad_hype.webp`, `vlad_grin.webp`, `vlad_missile.webp` | | **powerLevel** | 7500 | | **uiColor** | `#5B6FFF` | | **themeSong** | `cue_balalaika_trap` | | **voiceActor** | ElevenLabs “Russian‑Mikhail” deep |

### 1.8 stiff‑lip‑stu

\| **displayName** | Stiff‑Lip Stu | | **faction** | UK | | **archetype** | Over‑polite maritime hall‑monitor | | **look** | Navy blazer, monocle HUD, teacup vib‑feedback controller | | **persona** | Quotes admiralty law while tutting at queue‑breakers | | **catchPhrases** | “Rule Britannia requests you queue properly.” | | **runningGag** | Applies posh etiquette stickers onto missiles | | **entranceCue** | `sfx_teacup_clink` | | **stickerIds** | `stu_tut.webp`, `stu_flag.webp`, `stu_teacup.webp` | | **powerLevel** | 5300 | | **uiColor** | `#003E7E` | | **themeSong** | `cue_brass_march_Bb` | | **voiceActor** | Google Wavenet "en‑GB‑F" |

### 1.9 persian‑populace

\| **displayName** | Persian Populace | | **faction** | Civilians | | **archetype** | Sassy Gen‑Z chorus | | **look** | Group bubble of avatars rotating (students, women, artists) | | **persona** | Roast rulers, hack slogans, chant ‘Woman‑Life‑Freedom’ | | **catchPhrases** | “Bro, ratio’d.”, “VPN fumes for dinner!” | | **runningGag** | Replace UI background briefly with protest graffiti | | **entranceCue** | `sfx_crowd_cheer` | | **stickerIds** | `pop_eye_roll.webp`, `pop_bandana.webp`, `pop_chant.webp` | | **powerLevel** | 9000 (moral) | | **uiColor** | `#F5317F` | | **themeSong** | `cue_protest_chant_Amin` | | **voiceActor** | Composite — ElevenLabs “Young‑Female‑01” + chorus reverb |

### 1.10 ban‑ki‑zzz

\| **displayName** | Ban‑Ki‑Zzz | | **faction** | UN | | **archetype** | Sleepy diplomat bureaucrat | | **look** | Faded UN flag pillow, perpetual jet‑lag glassy eyes | | **persona** | Calls for committees then dozes off mid‑sentence | | **catchPhrases** | “We will reconvene… *snore*” | | **runningGag** | Speech bubble zzzs drift upward, pluralised in other languages | | **entranceCue** | `sfx_gavel_soft` | | **stickerIds** | `zzz_snore.webp`, `zzz_flag.webp`, `zzz_facepalm.webp` | | **powerLevel** | 3100 | | **uiColor** | `#5EAAD6` | | **themeSong** | `cue_lullaby_marimba` | | **voiceActor** | iSpeech “ko‑KR‑Male‑Calm” low gain |

### 1.11 imf‑ghost

\| **displayName** | IMF Ghost | | **faction** | IMF | | **archetype** | Drive‑by doctor of doom | | **look** | Clipboard hologram. semi‑translucent banker suit | | **persona** | Screams macro alerts, dumps PDF, disappears | | **catchPhrases** | “Diagnosis: austerity!”, “Symptom: deficit fever.” | | **runningGag** | Drops giant PDF smashing chat window | | **entranceCue** | `sfx_paper_thud` | | **stickerIds** | `imf_pdf.webp`, `imf_thermometer.webp`, `imf_exit.webp` | | **powerLevel** | 4500 | | **uiColor** | `#CCCCCC` | | **themeSong** | `cue_acc_int_strings` | | **voiceActor** | Google Wavenet “en‑US‑Narrator” monotone |

### 1.12 madame‑ahma‑drag‑inejad

\| **displayName** | Madame Ahma‑Drag‑inejad | | **faction** | Iran (ex‑president parody) | | **archetype** | Drag‑queen revisionist | | **look** | Sequined green blazer, nuclear tassels, bearded glitter | | **persona** | Denies existence of gays while sashaying | | **catchPhrases** | “We have no gays … only fabulous anomalies!” | | **runningGag** | Lip‑syncs censored Madonna hooks, confetti bars turn black | | **entranceCue** | `sfx_runway_swish` | | **stickerIds** | `madame_pose.webp`, `madame_wink.webp`, `madame_micdrop.webp` | | **powerLevel** | 6100 | | **uiColor** | `#AAFFDD` | | **themeSong** | `cue_disco_santur` | | **voiceActor** | ElevenLabs “fa‑DragQueen” (custom) |

### 1.13 historian‑hana  *(meta‑narrator)*

\| **faction** | Meta | | **archetype** | Archive‑guardian | | **look** | Archivist chic – glasses, digital parchment halo | | **persona** | Breaks 4th wall to fact‑check dialogue | | **catchPhrases** | “Citation incoming!” | | **entranceCue** | `sfx_stamp_library` | | **uiColor** | `#8C7BE0` |

### 1.14 designer‑dev  *(meta‑avatar)*

\| **archetype** | UI tinkerer within the story | | **persona** | Pokes live CSS, causing rail to bend in‑universe | | **powerLevel** | 9999 (debug) |

### 1.15 mobile‑marco  *(meta‑avatar)*

\| **archetype** | Casual mobile scroller | | **runningGag** | Complains about data usage, triggers offline mode demo |

---

## 2  Side Roles & One‑Offs

- `ajax‑1953_cia`, `iran‑iraq_saddam`, `osirak_jet`, `axis‑polygon_minion_1‑12`, etc.  See `sideRoles.csv` for raw list.

---

## 3  Sticker & Asset Conventions

- **File name**: `<id>_<slug>.webp`, all lowercase kebab.
- **Dimensions**: 512 × 512, trim alpha, ≤128 KB.
- **Lottie**: path‑based, 30 FPS, no blends.

---

## 4  Voice & Audio Pipeline

- TTS generated nightly via ElevenLabs/Google/iSpeech; cached SSML per language.
- Rhubarb viseme → `char‑id_viseme.json` for lip‑sync.
- Audio sprite bank index in `audio.json`.

---

## 5  Roadmap for Character Expansions

| Phase | Characters Added     | Notes                                 |
| ----- | -------------------- | ------------------------------------- |
| v1.8  | 5 regional NGOs      | Comic relief fact‑drops               |
| v2.0  | 10 historical ghosts | Cyrus, Herzl cameo, etc.              |
| v2.2  | Easter‑egg memes     | Keyboard Cat, etc., licensing pending |

---

### NEXT

- Hook these entries to **Scene Timeline** JSON writer.
- Fill localisation placeholders for Farsi + Arabic names.

— End of Character Bible v0.3 —

