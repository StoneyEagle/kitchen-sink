// Copyright (c) NoMercy Labs.
// SPDX-License-Identifier: MIT
import { defineConfig } from "astro/config";
import foghorn from "@foghorn/site-kit/integrations/foghorn";

import foghornConfig from "./foghorn.config.json" with { type: "json" };

/** @type {import("astro").ShikiConfig} */
const shikiConfig = {
  themes: {
    dark: foghornConfig.site?.code?.darkTheme ?? "one-dark-pro",
    light: foghornConfig.site?.code?.lightTheme ?? "github-light",
  },
  // Emit CSS variables for both themes; prefers-color-scheme + the
  // ReaderPrefs override pick which one actually renders at read time.
  defaultColor: false,
};

export default defineConfig({
  integrations: [foghorn()],
  markdown: {
    shikiConfig,
  },
  // foghorn:start user-config
  // user-owned Astro config below — foghorn updates only the marker-bounded region above
  // foghorn:end
});
