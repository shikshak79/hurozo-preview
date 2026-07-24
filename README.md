# Hurozo — support wedge, working preview

A static Astro site of the Hurozo support-wedge surfaces (homepage, pricing, service
catalogue, and standalone studies), deployed to GitHub Pages.

**Working draft for exploration — not final copy.** Names, numbers, and layout are all still in play.

## Local dev

```bash
npm install
npm run build   # outputs to dist/
npm run preview
```

The surface pages in `public/` are complete, standalone HTML documents served verbatim.
The hub at `/` is `src/pages/index.astro`. Deploy is automated via `.github/workflows/deploy.yml`.
