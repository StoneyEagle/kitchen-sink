---
title: "Tables"
excerpt: "Pipe-table GFM — headers, alignment, and a short cell format."
tags: [kitchen-sink, table]
authors: [stoney]
slug: 06-tables
date: 2026-04-20
route: /journal/
---

<!-- block: 01KPMM1Y6JQVTKPXTN8AS0N1A1 -->
# Tables

<!-- block: 01KPMM1Y6JW98YE96CAY706N1A -->
Foghorn renders tables from GFM pipe-table syntax.

<!-- block: 01KPMM1Y6J8JBFN0E7HQPTT9ZK -->
| Block kind     | Inline edit | Audio | Notes                             |
|:---------------|:-----------:|:-----:|:----------------------------------|
| Heading        |      yes    |  yes  | Levels 1 through 6                |
| Paragraph      |      yes    |  yes  | Default body block                |
| List           |      yes    |  yes  | Ordered, unordered, nested        |
| Quote          |      yes    |  yes  | Multi-paragraph allowed           |
| CodeBlock      |      yes    |   —   | Shiki highlighting                |
| ThematicBreak  |       —     |   —   | Horizontal rule                   |
| Table          |      yes    |   —   | GFM syntax                        |
| Directive      |      yes    |  yes  | namespace:name fenced YAML        |

<!-- block: 01KPMM1Y6JXKCAE53SA0V4B9R2 -->
Alignment is controlled by the colons in the separator row above — left, centre, right.