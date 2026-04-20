---
title: "Raw HTML and custom directives"
excerpt: "Escape hatches — inline HTML passthrough and directives the renderer doesn't recognise."
tags: [kitchen-sink, escape-hatch]
authors: [stoney]
slug: 09-html-custom
date: 2026-04-20
route: /journal/
---

<!-- block: 01KPMRMZY9M13PFX6A24K2GJXT -->
# Escape hatches

<!-- block: 01KPMRMZY97XHV0NBMM501NZN6 -->
## Raw HTML

<!-- block: 01KPMRMZY9YHE2PAF74CGVJ1N4 -->
For the rare case where markdown can't express what you need. The renderer passes the block through verbatim — there's no sandboxing, so use it only for your own markup.

<!-- block: 01KPMRMZY91KMC5ZD1C54KC842 -->
<div style="padding: 1rem; border: 2px dashed var(--fg-accent); border-radius: 6px; text-align: center;">
  <strong>Raw HTML block</strong>
  <p style="margin: 0.4rem 0 0; font-size: 0.8rem; opacity: 0.8;">Rendered exactly as written.</p>
</div>

<!-- block: 01KPMRMZY9S4ZVFW7R054ZDGMZ -->
## Custom directive

<!-- block: 01KPMRMZY9C2E557J5KYZY9V5A -->
Directives the renderer doesn't have a handler for fall through to a raw YAML block. Useful for plugins that haven't been installed on the reader's side — the content still parses, it just doesn't bind to a component.

<!-- block: 01KPMRMZY96V221SW7HCK8WR15 -->
```plugin:diagram-mermaid
caption: "Request lifecycle — parser can't render Mermaid but round-trips the YAML cleanly"
source: |
  sequenceDiagram
    Editor->>Engine: POST /entries
    Engine->>Disk: write entry.md
    Engine-->>Editor: 200 OK
```

<!-- block: 01KPMRMZY9PDX9BMKA37XDW4NJ -->
When a plugin for that namespace:name ships later, the same content renders without edits.