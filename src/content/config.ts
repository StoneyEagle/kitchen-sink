// Copyright (c) NoMercy Labs.
// SPDX-License-Identifier: MIT
import { defineCollection, z } from "astro:content";

// foghorn:start collections
const journal = defineCollection({
  type: "content",
  // passthrough() so entries imported from older journal repos keep their
  // richer frontmatter (session_start, status, severity, agents, commits,
  // human_mood, …) instead of being rejected by a strict schema. Only the
  // keys this template actually renders are constrained.
  schema: z
    .object({
      title: z.string(),
      date: z.coerce.date(),
      authors: z.array(z.string()).default([]),
      license: z.string().optional(),
      tags: z.array(z.string()).default([]),
      excerpt: z.string().optional(),
      ttsDefault: z.string().optional(),
    })
    .passthrough(),
});

export const collections = { journal };
// foghorn:end
