# Smart Scholarship Engine — download site

A single-page landing/download site for the Smart Scholarship Engine desktop app. No backend, database, forms or auth; the program is distributed as static files.

## Layout

- `src/routes/index.tsx` → `src/components/MarketingPage.tsx`: the whole page (nav, hero + download card, features, live matcher preview, install steps + FAQ, CTA, footer). Section anchors: `#download`, `#features`, `#preview`, `#install`.
- `src/data/site.ts`: site name/description (used for root metadata in `src/routes/__root.tsx`), download file list and sizes, team names.
- `src/data/demo.ts`: example schemes and select options for the in-browser preview. These are explicitly fake and labeled as such on the page; the real starter catalogue lives in the Python app.
- `src/styles.css`: design tokens and all component styles (plain CSS classes, ported from the original design mock). Dark mode follows `prefers-color-scheme`. Tailwind is imported but barely used.
- `public/downloads/`: the shipped program — `smart_scholarship_engine.py`, `Run_Smart_Scholarship_Engine.bat` (CRLF line endings, required by Windows cmd), `requirements.txt` (PySide6, read by the launcher), and `SmartScholarshipEngine.zip` bundling all three under a `SmartScholarshipEngine/` folder. If any file changes, rebuild the zip and update `downloads.bundle.size`.

## Conventions / gotchas

- Days-left pills are computed after mount (`now` state set in an effect) to avoid SSR hydration mismatches.
- The launcher installs from `requirements.txt`; keep that file in the zip.
- Keep wording honest: matches are indicative and users must verify on official portals.
