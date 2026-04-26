// Copyright (c) NoMercy Labs.
// SPDX-License-Identifier: MIT
import { defineConfig } from "astro/config";
import foghorn from "@foghorn/site-kit/integrations/foghorn";

import foghornConfig from "./foghorn.config.json" with { type: "json" };

/** @type {import("astro").ShikiConfig} */
// Code theme presets live in the `design` block of foghorn.config.json
// (codeThemeDark / codeThemeLight). The legacy site.code.* path is honoured
// as a fallback for workspaces scaffolded before the design block existed.
const shikiConfig = {
  themes: {
    dark:
      foghornConfig.design?.codeThemeDark
      ?? foghornConfig.site?.code?.darkTheme
      ?? "one-dark-pro",
    light:
      foghornConfig.design?.codeThemeLight
      ?? foghornConfig.site?.code?.lightTheme
      ?? "github-light",
  },
  // Emit CSS variables for both themes; prefers-color-scheme + the
  // ReaderPrefs override pick which one actually renders at read time.
  defaultColor: false,
};

// Derive site + base from foghorn.config.json. For GitHub-Pages project sites
// (https://<user>.github.io/<repo>/) the `base` MUST be the repo path or every
// CSS / JS / image link 404s on deploy.
const baseUrl = foghornConfig.site?.baseUrl ?? "";
let site;
let base = "/";
try {
  const u = new URL(baseUrl);
  site = `${u.protocol}//${u.host}`;
  base = u.pathname.endsWith("/") ? u.pathname : `${u.pathname}/`;
} catch {
  /* baseUrl was a placeholder ("example.com") or empty — fall back to defaults */
}

export default defineConfig({
  site,
  base,
  integrations: [foghorn()],
  markdown: {
    shikiConfig,
  },
  // foghorn:start user-config
  // user-owned Astro config below — foghorn updates only the marker-bounded region above
  // foghorn:end
});
