---
title: "YouTube embed"
excerpt: "The plugin:youtube directive — lazy-loaded iframe with nocookie origin, optional caption."
tags: [kitchen-sink, directive, youtube]
authors: [stoney]
slug: 08-youtube
date: 2026-04-20
route: /journal/
---

<!-- block: 01KPMM1YQWNKPT3TT30HH8DE2C -->
# YouTube

<!-- block: 01KPMM1YQWX0FH9W9S21J82F31 -->
Foghorn's YouTube directive takes an 11-character video ID (or a full YouTube URL — it auto-extracts) and renders a lazy-loaded iframe backed by youtube-nocookie. The caption becomes screen-reader label and visible title.

<!-- block: 01KPMM1YQWHC46ERE8DWYYSX7Z -->
```plugin:youtube
id: dQw4w9WgXcQ
title: The classic test video
```

<!-- block: 01KPMM1YQWNGK1F3E5CJGM2P2H -->
Narration skips embedded video blocks entirely; the TTS narrator reads the caption but not the video's contents. Audio lives separately in its own sidecar.