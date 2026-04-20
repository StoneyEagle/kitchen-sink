// Copyright (c) NoMercy Labs.
// SPDX-License-Identifier: MIT
import { getCollection } from "astro:content";
import { toRss, readConfig } from "@foghorn/site-kit";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const config = readConfig(readFileSync(resolve("foghorn.config.json"), "utf-8"));
  const route = config.routes.find((r) => r.id === "journal");
  if (!route) return new Response("no journal route", { status: 500 });

  const entries = await getCollection("journal");
  const xml = toRss(
    config,
    route,
    entries.map((e) => ({
      slug: e.data.slug,
      title: e.data.title,
      date: e.data.date,
      excerpt: e.data.excerpt ?? null,
      authors: e.data.authors,
      license: e.data.license ?? null,
    })),
  );

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
};
