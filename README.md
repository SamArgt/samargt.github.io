# Samuel A.’s homepage

A professional homepage focused on introduction, experience, education, and side projects. Plain HTML and CSS, with no build step or runtime dependencies.

## Preview

Open `index.html` directly in a browser. All styles and assets use relative paths.

## Structure

- `index.html` — introduction, career timeline, education, projects, and contact links.
- `styles.css` — responsive layout, typography, and colors.
- `assets/favicon.svg` — site icon.
- `assets/*-preview.jpg` — screenshots of the homelab and MSc research sites.
- `.github/workflows/` — source checks and a post-deployment smoke check.
- `.nojekyll` — serve the static files directly on GitHub Pages.

## Content checklist

The introduction and experience are based on the supplied résumé. The site uses the Forest palette. Before publishing:

- Confirm the display name and page description.
- Review the introduction, roles, dates, and contributions.
- Add email or LinkedIn contact links if desired.

Keep experience in reverse chronological order. Duplicate a `.role` article for each additional position. The side-projects section starts with a retrospective of my first homelab, followed by Auto Bean. The brief education section links to my MSc audio source separation project under Imperial College London.

The homelab and research previews were captured from [My Homelab](https://my-homelab.vercel.app/) and [AudioSourceSep](https://samargt.github.io/AudioSourceSep/) on 10 November 2026. Auto Bean’s screenshot (`assets/auto-bean-ui.png`) comes from its import review prototype and uses synthetic demo data. Keep image dimensions and alt text up to date when replacing previews.

## Checks

The site has no runtime dependencies or build step. Node.js 24 is used only for development checks:

```sh
npm ci
npm run check
```

The **Site checks** workflow runs on pushes, pull requests and manual dispatch. It validates HTML and accessibility rules, checks local links, fragment anchors and assets with Lychee, and verifies the GitHub Pages entry files. External links are excluded from the source check to avoid failures caused by third-party availability.

The **Deployment check** workflow runs after a successful `pages-build-deployment` run on `main`, or manually. It checks the published homepage title and the CSS, favicon and preview assets. Run it manually only once these changes have been published. It checks availability, not whether the deployed content matches a particular commit.

## Dependency updates

[`renovate.json`](renovate.json) configures Renovate to open dependency update pull requests on Fridays from midnight until noon in the `Europe/Paris` timezone. It uses the recommended preset to track npm dependencies and GitHub Actions, enables weekly lockfile maintenance during the same window, and leaves automerge disabled. Review and merge updates after **Site checks** passes.

To activate it, enable the [Renovate GitHub App](https://github.com/apps/renovate) for this repository and merge the configuration into `main`. The hosted app runs Renovate; no additional workflow or repository token is needed. See the [Renovate onboarding documentation](https://docs.renovatebot.com/getting-started/installing-onboarding/) for setup details.

## Hosting

This repository contains the static site at its root, ready for GitHub Pages. GitHub Pages publishes from the root of the `main` branch at https://samargt.github.io/. Push updates to `main` to publish changes.

Source checks do not gate the existing branch-based Pages deployment. To require passing checks before merging, make **Site checks / check** a required status check in the repository’s branch protection settings.
