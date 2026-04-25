---
title: Code blocks in every language
excerpt: "Shiki-highlighted fenced code in TypeScript, C#, Python, Rust, Go, SQL, YAML, JSON, CSS, and Dockerfile."
tags: [kitchen-sink, code]
authors: [stoney]
slug: 05-code
date: 2026-04-20
route: /journal/
---

<!-- block: 01KPMM1XX72SC18ND0VX8S03MN -->
# Code blocks

<!-- block: 01KPMM1XX71QDFGBMNXZF5DKXA -->
One fenced block per language, enough content to show the highlighting actually works.

<!-- block: 01KPMM1XX7VPD0ZQW6RJPK53W1 -->
TypeScript:

<!-- block: 01KPMM1XX7R988ZQS7HZ5VZJXE -->
```typescript
export interface Entry {
  slug: string;
  title: string;
  blocks: Block[];
}

export function summarise(entry: Entry): string {
  return `${entry.slug}: ${entry.blocks.length} blocks`;
}
```

<!-- block: 01KPMM1XX9V4EETG45TFJ402A2 -->
C#:

<!-- block: 01KPMM1XX9Z77Q74HQ6RTACFHQ -->
```csharp
public static class EntryReader
{
    public static async Task<string> SummariseAsync(string path)
    {
        var text = await File.ReadAllTextAsync(path);
        return text.Length.ToString("N0") + " chars";
    }
}
```

<!-- block: 01KPMM1XX959ZPFKBF4TVND5SG -->
Python:

<!-- block: 01KPMM1XX9GXFX836G8XW920PM -->
```python
def summarise(entry: dict) -> str:
    return f"{entry['slug']}: {len(entry.get('blocks', []))} blocks"
```

<!-- block: 01KPMM1XX97HSBCNE21J6R8THS -->
Rust:

<!-- block: 01KPMM1XX9EGGVKYMP7QGDN4E0 -->
```rust
pub fn summarise(entry: &Entry) -> String {
    format!("{}: {} blocks", entry.slug, entry.blocks.len())
}
```

<!-- block: 01KPMM1XX9XT84GH2X6819RAEV -->
Go:

<!-- block: 01KPMM1XX9N7P5NG9GJTT331RT -->
```go
func Summarise(e Entry) string {
    return fmt.Sprintf("%s: %d blocks", e.Slug, len(e.Blocks))
}
```

<!-- block: 01KPMM1XX9ZFYDD0BFKX2Z9VJG -->
SQL:

<!-- block: 01KPMM1XX9KJFY6TN5QCFG66JP -->
```sql
SELECT slug, COUNT(block_id) AS block_count
FROM entries
JOIN blocks USING (entry_id)
GROUP BY slug
ORDER BY block_count DESC
LIMIT 10;
```

<!-- block: 01KPMM1XX99VRN9RBS2EJZYYVK -->
YAML:

<!-- block: 01KPMM1XX9C25N20ZY5FHY0DFG -->
```yaml
site:
  title: Foghorn Kitchen Sink
  baseUrl: https://example.com
routes:
  - id: journal
    path: /entry/:slug
    contentDir: entries/journal
```

<!-- block: 01KPMM1XX90RQ6Z0XHQR03QP88 -->
JSON:

<!-- block: 01KPMM1XX915JTYYKXDM25KCF1 -->
```json
{
  "slug": "05-code",
  "title": "Code blocks in every language",
  "hasAudio": false
}
```

<!-- block: 01KPMM1XX9QMV3SX5EN05SDMMZ -->
CSS:

<!-- block: 01KPMM1XX9KTT9XNR1QEPGF1HB -->
```css
:root {
  --fg-accent: #9146ff;
  --fg-bg: #0a0b0f;
}

.entry { padding: 2rem; color: var(--fg-text); }
```

<!-- block: 01KPMM1XX9K187DZJWRKVEK7BJ -->
Dockerfile:

<!-- block: 01KPMM1XX9P4T4EC3916EV4ESA -->
```dockerfile
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src
COPY . .
RUN dotnet publish apps/engine -c Release -o /app
FROM mcr.microsoft.com/dotnet/aspnet:10.0
WORKDIR /app
COPY --from=build /app .
ENTRYPOINT ["./Foghorn.Engine"]
```

<!-- block: 01KPMM1XX9JM36TE9DY8KWMJJM -->
Bash:

<!-- block: 01KPMM1XX9CBXVZDMYEBHTEFP2 -->
```bash
#!/usr/bin/env bash
set -euo pipefail
for entry in entries/journal/*/entry.md; do
  echo "validating $entry"
  foghorn validate --entry "$entry"
done
```

<!-- block: 01KPMM1XX9ASR6P6M296CKXAV2 -->
HTML:

<!-- block: 01KPMM1XX9YNPF65E63CBN899M -->
```html
<article class="entry">
  <h1>Kitchen sink</h1>
  <p>One block per block, by design.</p>
</article>
```