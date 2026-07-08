# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status

The MVP is scaffolded and working: React + Vite app with 3 routed pages, static JSON data, and Pexels-hosted images.

- [initial.md](initial.md) — original one-paragraph project brief (Korean)
- [PRD.md](PRD.md) — full MVP product spec; source of truth for scope/requirements. Follow it rather than re-deriving requirements.

## Commands

- `npm run dev` — start Vite dev server (default port 5173)
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build
- `npm run lint` — lint with oxlint

No test suite exists yet.

## Architecture

- **Routing**: `src/App.jsx` defines routes (`/`, `/about`, `/gallery`), all nested under `src/components/Layout.jsx` which renders `Header` + `<Outlet />` + `Footer`. Router itself (`BrowserRouter`) is set up in `src/main.jsx`.
- **Pages** (`src/pages/`): `Home.jsx`, `About.jsx`, `Gallery.jsx` — each paired with its own `*.module.css`.
- **Shared components** (`src/components/`): `Header`, `Footer`, `Logo` (inline SVG cloud icon + wordmark), `Layout`. Each has a co-located CSS Module.
- **Data**: `src/data/family.json` (제이/꿈이 profiles) and `src/data/gallery.json` (Pexels photo URLs + alt text) are imported directly as JSON — no fetch, no backend. To change gallery/profile content, edit these files directly.
- **Images**: all `photoUrl`/`url` values are direct `images.pexels.com` links (with `?auto=compress&cs=tinysrgb&w=...` sizing params). No local image assets, no upload flow — this is intentional per PRD §2.2 (out of scope for MVP).
- **Styling**: CSS Modules per component/page, plus global resets and CSS custom properties (`--color-primary`, `--color-primary-dark`, `--max-width`, etc.) in `src/index.css`. No CSS framework.
- **Out of scope** (do not add unless requirements change): auth, photo upload/CMS, comments, real backend/DB, i18n, lightbox/modal viewer.

## Deployment

Deployed to GitHub Pages at https://yj4186.github.io/family-album/, via `.github/workflows/deploy.yml` (builds and deploys on every push to `master`). Two things are load-bearing and easy to break if touched carelessly:

- `vite.config.js` `base: '/family-album/'` and `main.jsx`'s `BrowserRouter basename={import.meta.env.BASE_URL}` must stay in sync with the repo name — if the repo is ever renamed, update both.
- The workflow copies `dist/index.html` to `dist/404.html` after build so client-side routes (`/about`, `/gallery`) work on direct load/refresh (GitHub Pages has no server-side rewrites, so this is the standard SPA-on-Pages fallback). Don't remove that step.
- The repo is public (GitHub Pages on private repos requires a paid plan).
