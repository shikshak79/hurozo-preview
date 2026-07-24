import { defineConfig } from 'astro/config';

// Project page served at https://<GITHUB_USER>.github.io/hurozo-preview/
// The verbatim public/ files use relative links, so they are base-path-agnostic;
// `base` only affects Astro-generated URLs (the ported hub at /).
export default defineConfig({
  site: 'https://shikshak79.github.io',
  base: '/hurozo-preview',
  // Inline the hub's styles into index.html so it's a self-contained page like
  // the 10 verbatim public/ surfaces — no external `_astro/*.css` asset that
  // GitHub Pages can 404 (underscore-dir stripping / Fastly negative-caching).
  build: { inlineStylesheets: 'always' },
});
