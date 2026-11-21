# Duvindu Sokman — Portfolio (Next.js 16 · Tailwind CSS 4 · Vercel)

A black & maroon, single-page portfolio focused on **Business Analysis & Project Management**:
Hero, About, Experience timeline,
Projects, an interactive **Tools dashboard** (click a category to group, ↻ to scatter),
Education, Certifications and Extracurricular Activities (logo cards), CV download and Contact.
All content lives in **one file**: `src/data/portfolio.ts`.

### Quick edits still to do
- `profile.socials.linkedin` — paste your LinkedIn URL (button stays hidden while empty)
- `certifications[].url` — paste each "Show credential" link from LinkedIn
- Optional: `profile.socials.github`, `NEXT_PUBLIC_FORMSPREE_ID` (see Step 6)

### Logos
School, certification and club logos live in `public/logos`. Set `logo: "/logos/file.png"` on an
entry in `src/data/portfolio.ts`; entries without a logo show a maroon monogram (e.g. "CS").

### Tools dashboard
Logos live in `public/tools/*.svg`. To add a tool: drop its logo in that folder and add one line
to the `tools` list in `src/data/portfolio.ts` (choose a `category`). Categories and their glow
colours are in `toolCategories`. Empty sections (e.g. `projects: []`) hide themselves and their menu link.

---

## Step 0 — Install the tools (one time)

1. **Node.js 20.9+** (LTS 22 recommended) → https://nodejs.org. Check: `node -v`
2. **Git** → https://git-scm.com. Check: `git --version`
3. **VS Code** (recommended) + the *Tailwind CSS IntelliSense* extension
4. Free accounts on **GitHub** and **Vercel** (sign up to Vercel *with* GitHub)

## Step 1 — Clean project setup

**Option A (fastest): use this folder.** Unzip it, then:

```bash
cd portfolio
npm install
npm run dev
```

Open http://localhost:3000.

**Option B: build it from scratch yourself (to learn the setup):**

```bash
npx create-next-app@latest portfolio --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --yes
cd portfolio
npm install geist
```

Then copy in `src/app/*`, `src/components/*`, `src/data/*` and `public/Duvindu-Sokman-CV.pdf` from this zip.

## Step 2 — Understand the structure

```
src/
  app/
    layout.tsx      ← fonts, <html>, SEO title/description
    page.tsx        ← stacks the sections in order
    globals.css     ← dark theme + purple tokens, card/glow utilities
  components/
    Navbar.tsx      ← sticky glass nav, mobile menu, Resume button
    Hero.tsx        ← name, tagline, CTAs, socials
    About.tsx       ← bio + stat cards
    Experience.tsx  ← timeline
    Projects.tsx    ← project cards (Live / Code links)
    Skills.tsx      ← grouped skill chips
    Education.tsx   ← degree + certifications
    Extracurriculars.tsx ← clubs, sports, volunteering, competitions
    CVDownload.tsx  ← big "Download CV" call-to-action
    Contact.tsx     ← contact cards + form
    Footer.tsx
    Reveal.tsx      ← scroll fade-in animation
    Section.tsx     ← shared section heading
    Icons.tsx       ← inline SVG icons (no icon library)
  data/
    portfolio.ts    ← ★ ALL YOUR CONTENT ★
public/
  Duvindu-Sokman-CV.pdf ← ★ replace with your CV ★
```

## Step 3 — Add your content

Open `src/data/portfolio.ts` and replace everything marked `// TODO`:
email, phone (or `""` to hide), LinkedIn/GitHub URLs, dates, company and university
names. Add/remove items in `experience`, `projects`, `extracurriculars`, `skills`, `education`, `certifications`
— the page updates automatically.

## Step 4 — CV download

Replace `public/Duvindu-Sokman-CV.pdf` with your real CV, **keeping the file name** `Duvindu-Sokman-CV.pdf`.
All "Download CV" buttons (nav, hero, CV section) use the `download` attribute, so it downloads instead of just opening.

## Step 4b — Your photo

Replace `public/profile.jpg` with your own photo (keep the name, or change `photo` in
`src/data/portfolio.ts`). Use a portrait shot, roughly 4:5 (e.g. 800×1000 px or larger),
face near the top-centre. It shows as a framed portrait on desktop and a circle on mobile.

## Step 5 — Customise the black & maroon theme

In `src/app/globals.css`, under `@theme inline`:

| Token | Used for |
|---|---|
| `--color-accent` | buttons, timeline dots, focus rings |
| `--color-accent-soft` | labels, tags, links |
| `--color-accent-deep` | button hover |
| `--color-glow` | gradient name & background glow |
| `--color-ink` / `--color-surface` | page / card backgrounds |

Change these hex values and the whole site re-themes.

## Step 6 — Contact form (optional but recommended)

Without setup, "Send message" opens the visitor's email app (mailto).
To receive messages straight to your inbox:

1. Create a free form at https://formspree.io → copy the form ID (e.g. `xyzabcd`).
2. Create `.env.local` in the project root:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=xyzabcd
   ```
3. Restart `npm run dev`. (On Vercel, add the same variable — see Step 8.)

## Step 7 — Check the production build

```bash
npm run lint
npm run build
npm run start
```

> **Note (Next.js 16):** `cacheComponents` is on, so values like `new Date()` must be
> inside a `"use cache"` function — see `Footer.tsx` for the pattern.

## Step 8 — Push to GitHub & deploy on Vercel

```bash
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

1. Go to https://vercel.com/new → **Import** your `portfolio` repo.
2. Framework is auto-detected as Next.js — keep the defaults.
3. (Optional) **Environment Variables** → add `NEXT_PUBLIC_FORMSPREE_ID`.
4. Click **Deploy**. You'll get `https://portfolio-xxx.vercel.app`.

From now on, every `git push` redeploys automatically.

## Step 9 — Custom domain (optional)

Vercel → your project → **Settings → Domains** → add your domain and follow the DNS
instructions (an `A` record or `CNAME` at your registrar).

## Ideas for later

- Add `src/app/opengraph-image.png` (1200×630) for a nice LinkedIn link preview
- Add `@vercel/analytics` for visitor stats
