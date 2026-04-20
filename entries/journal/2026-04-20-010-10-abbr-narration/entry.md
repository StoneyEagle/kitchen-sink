---
title: "Abbreviations, pauses, and narration hooks"
excerpt: "How accessibility features — abbr pronunciations, pauses, narrator choice — compose in one entry."
tags: [kitchen-sink, accessibility, narration]
authors: [stoney]
ttsDefault: "en-GB-SoniaNeural"
slug: 10-abbr-narration
date: 2026-04-20
route: /journal/
---

<!-- block: 01KPMM1ZBW89YWNK6Z4KRJEG8Z -->
# Accessibility composition

<!-- block: 01KPMM1ZBWQMZG69JGS9H31HFZ -->
The <abbr title="Text-To-Speech">TTS</abbr> narrator swaps surface text for the abbr title when it reads a block, so listeners hear "text-to-speech" here, not T-T-S.

<!-- block: 01KPMM1ZBW4TXT46NN0B728CFW -->
A reader using screen-reader software announces the expanded form via the ARIA label the renderer adds automatically.

<!-- block: 01KPMM1ZBWQRXSG0126CPD9NKF -->
<abbr title="Representational State Transfer">REST</abbr> endpoints, <abbr title="GraphQL">GraphQL</abbr> queries, and <abbr title="Remote Procedure Call">RPC</abbr> calls are three distinct styles of network API. This paragraph exists to make sure multiple abbrs in the same sentence compose correctly.

<!-- block: 01KPMM1ZBWNQ541S62RD9WB5K6 -->
The entry-level narrator is set in the frontmatter (`ttsDefault`). Individual blocks can override it — that's what gives us the "different voice per character" effect in narrative entries. The speech sidecar stores the per-segment narrator choice alongside the block ID so synthesis is idempotent.