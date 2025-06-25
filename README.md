# FucknOrder-The-History
Fuck N Order – Initial Codebase Readme for Codex

This document serves as the codebase handoff for an AI assistant (Codex or developer) to scaffold and implement the project based on the detailed product specification.

1. Purpose

Satirical, citation-backed interactive web app (and auto-play video) re-telling US–Iran–Israel–Middle East history as a chaotic group chat, with timeline, memes, and in-chat gags—all fact-checked.

2. Key Build Principles

React (Next.js, App Router) for UI and routing

React Three Fiber (R3F) + Drei for 3D timeline gem/lens/glass effects

GSAP/Framer/React Spring for animation

Zustand for global app state

Sound SFX (chat pop, tick, dun-dun) only—no voices, music, or animated stickers

Accessibility-first: WCAG, keyboard, screenreader, dark mode, reduced motion

Data pipeline: Google Sheet → JSON for timeline events, chat scripts, memes, citations (one JSON per event set)

Citations: Every event/beat must cite a real-world news/media/primary source

3. Core Components

App shell (pages/app root): handles routing, theme, and layout

ChatPanel: sequential message UI, avatars, static stickers, chat pop SFX, click-to-expand memes/facts

TimelineRail: vertical scroll, fisheye/lens, ticks, active event highlight, 3D gem using R3F

CitationPanel: glassmorphic slide-out, clickable citations, meme/media previews

State: Zustand—tracks timeline position, active scene, chat index, safe mode

4. Content & Data Files

/data/events.json: Main timeline event set

/data/personas.json: Characters/avatars

/data/memes.json: Meme/sticker refs

/data/sources.json: Source/citation list

5. Audio Assets

/public/audio/sprite.mp3: Sound effect sprite (pop/tick/dun-dun)

6. Minimum Viable Flow

App loads → Title splash (center, then moves up)

Main UI appears: chat panel (left), timeline rail (right), citations panel (bottom right)

Timeline scrolls (manual/auto); as each event hits center:

Gem magnifies active event, triggers chat script in ChatPanel

ChatPanel reveals avatars/messages sequentially (chat pop SFX)

CitationPanel updates with sources, memes, GIFs

User can pause/rewind, click for memes/facts, open citations

Safe/classroom mode hides explicit content

7. Video Mode (for export)

App runs through all events/scenes automatically

Chat, timeline, citations sync with SFX and captions (no voice)

Output: screen record/Remotion pipeline for TikTok/YouTube

8. Dev Notes

Every UI element needs accessible labels, alt-text, and contrast checks

All new event data is validated and referenced—no event without a real source

Design and UX must be meme-forward and satirically punchy, never mean-spirited or bigoted

9. Future Extensibility

User-submitted memes/events (with moderation)

Alt-history/branching mode

Live updates (timeline grows as history unfolds)

10. TODO for Codex/Developer

Scaffold initial Next.js app shell with layout, R3F 3D gem, GSAP-powered vertical timeline

Implement ChatPanel (avatar, bubble, static sticker, SFX)

Implement CitationPanel

Build data import system for Google Sheet → JSON

Wire up safe/classroom mode

Document all props and data models for handoff

End of Readme

