---
title: "Images and asset sidecars"
excerpt: "Per-entry binary assets — how an image file lives next to entry.md and resolves under the published /entry-assets/ path."
tags: [kitchen-sink, images, assets]
authors: [stoney]
slug: 11-images
date: 2026-04-20
route: /journal/
---

<!-- block: 01KPMM1ZNABJEV6V5WVAPHFNJW -->
# Images

<!-- block: 01KPMM1ZNA7D3W1TND20G4MSHH -->
Foghorn entries can ship binary assets in a sidecar folder next to `entry.md`. On publish, the sync step rewrites relative `assets/foo.png` references to absolute `/entry-assets/<route>/<slug>/foo.png` URLs so they resolve from any page depth.

<!-- block: 01KPMM1ZNANGKYKSNCJRDGQ8ZV -->
![Foghorn logo placeholder — the asset sidecar handles the rest](assets/kitchen-sink.svg)

<!-- block: 01KPMM1ZNAJHWAP2QQ6M8BSJKW -->
The caption above is the image's `alt` text, which screen readers announce and TTS narration reads verbatim. Use it to describe what the image conveys, not to repeat the filename.