import { defineConfig } from 'astro/config';

// Project page served at https://<GITHUB_USER>.github.io/hurozo-preview/
// The verbatim public/ files use relative links, so they are base-path-agnostic;
// `base` only affects Astro-generated URLs (the ported hub at /).
export default defineConfig({
  site: 'https://shikshak79.github.io',
  base: '/hurozo-preview',
});
