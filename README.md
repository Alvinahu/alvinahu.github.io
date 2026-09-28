# alvinahu_cv — Alvina Hu's personal CV website

A bilingual (中文 / English) personal academic CV / Web CV site for **Alvina Hu · 胡沛杉**, Finance undergraduate at Shanghai University of Finance and Economics (SUFE).

Built as a static site with Vite + React + TailwindCSS + React (hash-based) router, deployable to GitHub Pages and bindable to a custom domain.

---

## Stack

- **Vite 5** (build tool, dev server)
- **React 18** (UI framework)
- **TailwindCSS 3** (utility-first CSS)
- **Recharts** (data visualization in the coffee-research project page)
- **Hash-based routing** (works on any static host — GitHub Pages, alvinahu.com, etc.)

No backend, no database, no authentication, no analytics.

---

## Getting started

```bash
# Install dependencies (one time)
npm install

# Run dev server at http://localhost:5173/
npm run dev

# Build production bundle to ./dist
npm run build

# Preview production build at http://localhost:4321/
npm run preview -- --port 4321 --host 0.0.0.0
```

> On this machine, `npm` is at `D:/node.js/npm.cmd`. If your shell doesn't have it on PATH, prepend it or call it directly.

---

## Deploying to GitHub Pages (alvinahu.github.io)

1. Create a GitHub repo named **`alvinahu.github.io`** (under your account).
2. Push this repository to it.
3. In GitHub: **Settings → Pages → Source**: select `Deploy from a branch`, branch `main` (or `gh-pages`), folder `/` or `/dist` depending on your build pipeline.
4. The site will be live at `https://alvinahu.github.io/` within a minute or two.

If you'd rather use the `gh-pages` workflow:

```bash
npm install -D gh-pages
# Add to scripts:
#   "deploy": "gh-pages -d dist"
npm run build
npm run deploy
```

---

## Binding a custom domain (alvinahu.com)

A `public/CNAME` file already contains `alvinahu.com`. To activate:

1. In your domain registrar (e.g. Cloudflare / Namecheap), set the DNS records for `alvinahu.com` and `www.alvinahu.com` to point to GitHub Pages:
   - For `apex (alvinahu.com)`: 4 × `A` records pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
   - For `www`: a `CNAME` record pointing to `alvinahu.github.io`.
2. In GitHub Pages settings → **Custom domain**, type `alvinahu.com` and save.
3. Enable **Enforce HTTPS** once the certificate is provisioned.

`public/CNAME` is copied to `dist/CNAME` at build time, so GitHub will pick it up automatically.

---

## URL structure

The site uses **hash-based** URLs so it works on any static host without server config:

| Page               | Chinese (default)         | English                            |
|--------------------|---------------------------|------------------------------------|
| Home               | `https://alvinahu.com/#/` | `https://alvinahu.com/#/en`        |
| Coffee research    | `https://alvinahu.com/#/project/coffee` | `https://alvinahu.com/#/en/project/coffee` |

The language toggle in the top-right updates the URL instantly without a page refresh.

---

## Where the content lives

All real content is in the source files. Edit there and re-run `npm run build`.

| File                                          | What it contains                                            |
|-----------------------------------------------|-------------------------------------------------------------|
| `src/i18n/zh.js`                              | All Chinese copy (about, education, experience, projects, contact, coffee page, meta) |
| `src/i18n/en.js`                              | All English copy, kept in parallel with the Chinese file    |
| `src/utils/chartData.js`                      | Chart data for the coffee project page — all sourced from the report and PPT |
| `src/components/charts/Charts.jsx`            | Recharts visualizations                                     |
| `src/components/Navbar.jsx`                   | Top navigation, sticky on scroll                            |
| `src/components/CvButton.jsx`                 | "Download CV" button — tries `public/files/cv.pdf` first, falls back to `cv.docx` |
| `src/pages/Home.jsx`                          | Single-page home (Hero + Education + Experience + Projects + Contact) |
| `src/pages/CoffeeProject.jsx`                 | Coffee research project detail page with sticky in-page nav |

---

## Replacing real assets

### CV / Resume PDF

The "Download CV" button in the top navigation reads:

1. `./files/cv.pdf` — preferred, what recruiters will download.
2. `./files/cv.docx` — fallback.

To swap in a final version, replace the file at `public/files/cv.pdf` (or `.docx`) and rebuild.

The files currently bundled:

- `public/files/cv.pdf` — `简历26.4.pdf` from `C:\Users\TX\Desktop\个人\`
- `public/files/cv.docx` — `胡沛杉个人简历2026.9.docx`

### Avatar

The avatar is at `public/images/avatar.jpg`. The current image is the LinkedIn-style photo from `C:\Users\TX\Desktop\个人\领英照.jpg`, compressed to ~64 KB at 800×600 with Pillow.

If you want to replace it:

- Drop your photo as `public/images/avatar.jpg`
- Or change the `AVATAR` constant at the top of `src/pages/Home.jsx`

No image processing is applied to the photo on the site — it's a straight `<img>` with a quiet rounded frame. This is intentional: per your design brief, the photo is shown as-is.

### Favicon

`public/favicon.svg` is a minimal monogram `A`. To customize, replace that file.

---

## What is **not** in this site (and why)

These were intentionally omitted per the brief:

- ❌ YouQ / 有球 project (resume mentioned it, but the brief explicitly forbade it)
- ❌ High-school butterfly business (same reason — no formal project deliverable)
- ❌ "Audit" as a long-term career interest (only KPMG experience is shown, not framed as a goal)
- ❌ AI Playground / chat / calculators / simulators (no recruiter value)
- ❌ Fabricated quantitative results, GPA, GitHub / LinkedIn handles, or any data not present in the source materials
- ❌ Auditor's career branding or "future hedge-fund manager" copy

All numbers, course names, KPMG bullet points, consumer percentages, regional data, and competitive figures are taken **as-is** from the resume (`胡沛杉个人简历2026.9.docx`), the research report (`中国连锁咖啡行业研究报告.pdf`) and the accompanying PPT.

---

## Editing guide

| To change...               | Edit                                                                                       |
|----------------------------|--------------------------------------------------------------------------------------------|
| Hero copy / about text     | `src/i18n/zh.js` and `src/i18n/en.js` (`hero` and `education.aboutBody` sections)          |
| Coursework list            | `src/i18n/zh.js` and `src/i18n/en.js` (`education.coursework`)                             |
| KPMG bullets               | `src/i18n/zh.js` and `src/i18n/en.js` (`experience.items[0].bullets`)                      |
| Coffee research content    | `src/i18n/zh.js` and `src/i18n/en.js` (`coffee.sections`) and `src/utils/chartData.js`     |
| Navigation labels           | `src/i18n/zh.js` and `src/i18n/en.js` (`nav`)                                               |
| Page <title> and meta      | `src/i18n/zh.js` and `src/i18n/en.js` (`meta`)                                              |
| Visual style / colors      | `tailwind.config.js` (`colors.ink`, `colors.paper`, `colors.accent`)                       |

After any change, run `npm run build` and re-deploy.

---

## License

© 2026 Alvina Hu. All rights reserved.

Source code: for personal use only. Content and chart data are derived from the author's own research report and resume.