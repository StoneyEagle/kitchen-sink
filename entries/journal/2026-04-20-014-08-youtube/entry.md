---
title: "YouTube embed"
excerpt: "The plugin:youtube directive — lazy-loaded iframe with nocookie origin, optional caption."
tags: [kitchen-sink, directive, youtube]
authors: [stoney]
slug: 08-youtube
date: 2026-04-20
route: /journal/
---

<!-- block: 01KPMRMZNSQM5013HDA8EXNDSW -->
# YouTube

<!-- block: 01KPMRMZNST8M1MEFQFVCYMHD4 -->
Foghorn's YouTube directive takes an 11-character video ID (or a full YouTube URL — it auto-extracts) and renders a lazy-loaded iframe backed by youtube-nocookie. The caption becomes screen-reader label and visible title.

<!-- block: 01KPMRMZNSK8ZH7X08PJ1SD1Z7 -->
```plugin:youtube
id: dQw4w9WgXcQ
title: The classic test video
```

<!-- block: 01KPMRMZNS3P6961RFEV20D6TR -->
Narration skips embedded video blocks entirely; the TTS narrator reads the caption but not the video's contents. Audio lives separately in its own sidecar.