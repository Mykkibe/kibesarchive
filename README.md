# KibesArchive 📷
> A living digital photography exhibition — modern, minimal, and immersive.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy environment file
cp .env.example .env

# 3. Start dev server
npm run dev
# → Opens at http://localhost:5173
```

---

## Adding Your Photos

### Option A — Local files (recommended)

1. Drop your photos into **`src/assets/photos/`**
   - Organize in subfolders: `portraits/`, `nature/`, `street/`
   - Supported formats: `.jpg`, `.jpeg`, `.webp`, `.png`

2. Open **`src/data/images.js`** and import your files:

```js
import myShot from '../assets/photos/portraits/shot-001.jpg'
```

3. Add an entry to the `IMAGES` array:

```js
{ id: 25, src: myShot, category: "Portraits", title: "My Title" },
```

---

### Option B — Hosted / CDN URLs

Just paste the URL directly as `src`:

```js
{ id: 25, src: "https://your-cdn.com/photos/shot.jpg", category: "Nature", title: "Golden Hour" },
```

---

### Option C — Environment variable base URL

Edit **`.env`**:

```
VITE_PHOTOS_BASE_URL=https://res.cloudinary.com/your-cloud/image/upload
```

Then in `images.js` use the `photo()` helper:

```js
{ id: 25, src: photo('portraits/shot-001.jpg'), category: "Portraits", title: "My Shot" },
```

---

## Changing Hero Images

In `src/data/images.js`, update `HERO_IMAGES`:

```js
export const HERO_IMAGES = [
  heroShot1,   // imported local file
  heroShot2,
  "https://...",  // or a URL
];
```

---

## Adding a New Category

1. Add images with your new category name in `images.js`:
```js
{ id: 30, src: myPhoto, category: "Architecture", title: "Facade" },
```

2. Open `src/pages/Archive.jsx` and add to `CATEGORIES`:
```js
const CATEGORIES = ["All", "Portraits", "Nature", "Street", "Architecture"];
```

3. To show it on the homepage, add to `STORIES` in `src/pages/Home.jsx`:
```js
{ number: "04", category: "Architecture" },
```

---

## Site Configuration

Edit **`.env`** to change site-wide settings:

```
VITE_SITE_TITLE=KibesArchive
VITE_SITE_TAGLINE=The Living Archive
VITE_SITE_LOCATION=Nairobi · Kenya
VITE_SITE_YEAR=2024
```

---

## Project Structure

```
kibesarchive/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          ← Fullscreen rotating hero
│   │   ├── StorySection.jsx  ← Homepage category grids
│   │   ├── Gallery.jsx       ← Masonry grid + infinite scroll
│   │   └── Lightbox.jsx      ← Fullscreen image viewer
│   ├── pages/
│   │   ├── Home.jsx          ← Homepage layout
│   │   └── Archive.jsx       ← Full gallery with filters
│   ├── data/
│   │   └── images.js         ← ← EDIT THIS to add photos
│   ├── styles/
│   │   ├── global.css        ← Base styles + nav
│   │   └── gallery.css       ← All component styles
│   ├── assets/
│   │   └── photos/           ← Drop your photos here
│   ├── App.jsx               ← Root + navigation
│   └── main.jsx              ← Entry point
├── .env                      ← Your config (not committed)
├── .env.example              ← Config template (safe to commit)
└── package.json
```

---

## Build for Production

```bash
npm run build
# Output in /dist — ready to deploy to Vercel, Netlify, GitHub Pages
```

---

## Deploy to Vercel (free)

```bash
npm install -g vercel
vercel
```

Set your env variables in the Vercel dashboard under Project → Settings → Environment Variables.
