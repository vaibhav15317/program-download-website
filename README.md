# Smart Scholarship Engine — download site

The website for **Smart Scholarship Engine**, a free desktop app (Python + PySide6) that matches a student's profile to scholarship schemes and links to the official portals. The site explains the app, lets visitors try a small in-browser version of the matcher with example data, and offers the program for download with step-by-step install instructions.

Built by Wasim Akram Kabir, Saarans Singh, Vaibhav Kumar Singh and Yash Kumar (BMSIT Innovation & Design Thinking).

## Tech

- TanStack Start + React 19, deployed on Netlify
- Plain CSS design tokens in `src/styles.css` (light and dark themes), Bricolage Grotesque + Source Sans 3 fonts
- Downloads are static files in `public/downloads/`

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
# or, with Netlify emulation:
netlify dev
```

## Updating the downloadable program

1. Replace `smart_scholarship_engine.py` and/or `Run_Smart_Scholarship_Engine.bat` in `public/downloads/` (keep the `.bat` file with Windows CRLF line endings).
2. Rebuild `public/downloads/SmartScholarshipEngine.zip` so it contains the same three files inside a `SmartScholarshipEngine/` folder.
3. Update the size shown on the page in `src/data/site.ts` if it changed.
