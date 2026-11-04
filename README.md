# Samuel A.’s homepage

A professional homepage focused on introduction, experience, and side projects. Plain HTML and CSS, with no build step or runtime dependencies.

## Preview

Open `index.html` directly in a browser. All styles and assets use relative paths.

## Structure

- `index.html` — introduction, career timeline, and contact links.
- `styles.css` — responsive layout, typography, and colors.
- `assets/favicon.svg` — site icon.
- `.nojekyll` — serve the static files directly on GitHub Pages.

## Content checklist

The introduction and experience are based on the supplied résumé. The site uses the Forest palette. Before publishing:

- Confirm the display name and page description.
- Review the introduction, roles, dates, and contributions.
- Add email or LinkedIn contact links if desired.

Keep experience in reverse chronological order. Duplicate a `.role` article for each additional position. The side-projects section features Auto Bean. Its screenshot (`assets/auto-bean-ui.png`) comes from the Auto Bean repository’s import review prototype and uses synthetic demo data.

## Hosting

This repository contains the static site at its root, ready for GitHub Pages. GitHub Pages publishes from the root of the `main` branch at https://samargt.github.io/. Push updates to `main` to publish changes.
