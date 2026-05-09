// ─────────────────────────────────────────────────────────────────────────────
// KibesArchive · Image Data
// ─────────────────────────────────────────────────────────────────────────────
//
// HOW TO ADD YOUR OWN PHOTOS:
//
//  OPTION A — Local files (recommended)
//    1. Drop your photos into: src/assets/photos/
//    2. Import them at the top of this file, e.g.:
//         import myPortrait from '../assets/photos/portrait-001.jpg'
//    3. Replace the `src` value with your import variable
//
//  OPTION B — Online / CDN URLs
//    Just paste the full URL as the `src` string directly.
//
//  OPTION C — Environment variable base path (uses .env)
//    Set VITE_PHOTOS_BASE_URL in .env, then use the photo() helper:
//         src: photo('portraits/my-photo.jpg')
//
// CATEGORIES: "Portraits" | "Nature" | "Street"
//   Add your own string — filter buttons update automatically.
// ─────────────────────────────────────────────────────────────────────────────

import portrait01 from '../assets/photos/portraits/portrait01.jpg'
import portrait02 from '../assets/photos/portraits/portrait02.jpg'
import portrait03 from '../assets/photos/portraits/portrait03.jpg'
import portrait04 from '../assets/photos/portraits/portraits04.jpg'
import nature00 from '../assets/photos/nature/nature00.jpg'
import nature01 from '../assets/photos/nature/nature01.jpg'
import nature02 from '../assets/photos/nature/nature02.jpg'
import nature03 from '../assets/photos/nature/nature03.jpg'
import nature04 from '../assets/photos/nature/nature04.jpg'
import nature05 from '../assets/photos/nature/nature05.jpg'
import nature06 from '../assets/photos/nature/nature06.jpg'
import nature07 from '../assets/photos/nature/nature07.jpg'
import nature08 from '../assets/photos/nature/nature08.jpg'
import nature09 from '../assets/photos/nature/nature09.jpg'
import nature10 from '../assets/photos/nature/nature10.jpg'
import nature11 from '../assets/photos/nature/nature11.jpg'
import nature12 from '../assets/photos/nature/nature12.jpg'
import nature13 from '../assets/photos/nature/nature13.jpg'
import nature14 from '../assets/photos/nature/nature14.jpg'
import nature15 from '../assets/photos/nature/nature15.jpg'
import nature16 from '../assets/photos/nature/nature16.jpg'
import nature17 from '../assets/photos/nature/nature17.jpg'
import nature18 from '../assets/photos/nature/nature18.jpg'
import nature19 from '../assets/photos/nature/nature19.jpg'
import street01 from '../assets/photos/street/street01.jpg'
import products01 from '../assets/photos/products/products01.jpg'
import products02 from '../assets/photos/products/products02.jpg'
import products03 from '../assets/photos/products/products03.jpg'
import products04 from '../assets/photos/products/products04.jpg'
import products05 from '../assets/photos/products/products05.jpg'
import products06 from '../assets/photos/products/products06.jpg'
import products07 from '../assets/photos/products/products07.jpg'
import products08 from '../assets/photos/products/products08.jpg'
import products09 from '../assets/photos/products/products09.jpg'
import products10 from '../assets/photos/products/products10.jpg'
import wildlife00 from '../assets/photos/wildlife/wildlife00.jpg'
import wildlife01 from '../assets/photos/wildlife/wildlife01.jpg'
import wildlife02 from '../assets/photos/wildlife/wildlife02.jpg'
import wildlife03 from '../assets/photos/wildlife/wildlife03.jpg'
import wildlife04 from '../assets/photos/wildlife/wildlife04.jpg'
import wildlife05 from '../assets/photos/wildlife/wildlife05.jpg'
import wildlife06 from '../assets/photos/wildlife/wildlife06.jpg'
import wildlife07 from '../assets/photos/wildlife/wildlife07.jpg'
import wildlife08 from '../assets/photos/wildlife/wildlife08.jpg'
import wildlife09 from '../assets/photos/wildlife/wildlife09.jpg'
import wildlife10 from '../assets/photos/wildlife/wildlife10.jpg'
import wildlife11 from '../assets/photos/wildlife/wildlife11.jpg'
import wildlife12 from '../assets/photos/wildlife/wildlife12.jpg'
import wildlife13 from '../assets/photos/wildlife/wildlife13.jpg'
import cars00 from '../assets/photos/cars/cars00.jpg'
import creative01 from '../assets/photos/creatives/creative01.jpg'
import portrait05 from '../assets/photos/portraits/portrait05.jpeg'



// ENV helper — builds URL from VITE_PHOTOS_BASE_URL + relative path
const BASE = import.meta.env.VITE_PHOTOS_BASE_URL || '';
export const photo = (relativePath) =>
  BASE ? `${BASE}/${relativePath}` : relativePath;

// ── Hero slideshow (full-width, high-res) ─────────────────────────────────
export const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=90",
  portrait03,
  nature11,
  nature05,
  nature07,
  street01,
  products05,
  wildlife08,
  wildlife07,
];

// ── Gallery images ────────────────────────────────────────────────────────
export const IMAGES = [

  // ── Portraits ──────────────────────────────────────────────────────────
  { id: 1,  src: portrait01, category: "Portraits", title: "Love Birds"},
  { id: 2,  src: portrait02, category: "Portraits", title: "Sunflower"},
  { id: 3,  src: portrait03, category: "Portraits", title: "Saturation"},
  { id: 4,  src: portrait04, category: "Portraits", title: "B/W"},
  { id: 47, src: portrait05, category: "Portraits", title: "Couple"},

  // ── Nature ─────────────────────────────────────────────────────────────
  { id: 5, src: nature00, category: "Nature", title: "Leaves"},
  { id: 6, src: nature01, category: "Nature", title: "Green"},
  { id: 7, src: nature02, category: "Nature", title: "Yellow Flower"},
  { id: 8, src: nature03, category: "Nature", title: "Napier"},
  { id: 9, src: nature04, category: "Nature", title: "Bud"},
  { id: 10, src: nature05, category: "Nature", title: "Green Horizon"},
  { id: 11, src: nature06, category: "Nature", title: "Path"},
  { id: 12, src: nature07, category: "Nature", title: "Moody Grass"},
  { id: 13, src: nature08, category: "Nature", title: "Trunk"},
  { id: 14, src: nature09, category: "Nature", title: "Colourful leaf"},
  { id: 15, src: nature10, category: "Nature", title: "Wild bottle gourd Flower"},
  { id: 16, src: nature11, category: "Nature", title: "Mist"},
  { id: 17, src: nature12, category: "Nature", title: "Leaves"},
  { id: 18, src: nature13, category: "Nature", title: "Framed Plant"},
  { id: 19, src: nature14, category: "Nature", title: "BlackJack bud"},
  { id: 20, src: nature15, category: "Nature", title: "Railway Creeper"},
  { id: 21, src: nature16, category: "Nature", title: "Purple Flower"},
  { id: 22, src: nature17, category: "Nature", title: "Wild Bottle Gourd Flower"},
  { id: 23, src: nature18, category: "Nature", title: "Nature's Fountain"},
  { id: 24, src: nature19, category: "Nature", title: "Stream"},



  // ── Street ─────────────────────────────────────────────────────────────
  { id: 25, src: street01, category: "Street", title: "Street Light"},
  // ── products ─────────────────────────────────────────────────────────────
  { id: 26, src: products01, category: "Product", title: "Olevs Watch"},
  { id: 27, src: products04, category: "Product", title: "Olevs Watch"},
  { id: 28, src: products06, category: "Product", title: "Olevs Watch"},
  { id: 29, src: products03, category: "Product", title: "Olevs Watch"},
  { id: 30, src: products10, category: "Product", title: "Olevs Watch"},
  // ── wildlife ─────────────────────────────────────────────────────────────
  { id: 31, src: wildlife00, category: "Wildlife", title: "African Elephant"},
  { id: 32, src: wildlife01, category: "Wildlife", title: "Male Village Weaver"},
  { id: 33, src: wildlife02, category: "Wildlife", title: "Village weaver"},
  { id: 34, src: wildlife03, category: "Wildlife", title: "Weaver Bird"},
  { id: 35, src: wildlife04, category: "Wildlife", title: "Red-Headed Bluebill"},
  { id: 36, src: wildlife05, category: "Wildlife", title: "Silouette of a Bird"},
  { id: 37, src: wildlife06, category: "Wildlife", title: "Silouette of a Bird"},
  { id: 38, src: wildlife07, category: "Wildlife", title: "MouseBird"},
  { id: 39, src: wildlife08, category: "Wildlife", title: "African Young Lion"},
  { id: 40, src: wildlife09, category: "Wildlife", title: "Sparrow"},
  { id: 41, src: wildlife10, category: "Wildlife", title: "Caterpillar"},
  { id: 42, src: wildlife11, category: "Wildlife", title: "Caterpillar"},
  { id: 43, src: wildlife12, category: "Wildlife", title: "Caterpillar"},
  { id: 44, src: wildlife13, category: "Wildlife", title: "MouseBird"},
  //---cars---
  { id: 45, src: cars00, category: "Cars", title: "Benz"},
  //---creatives---
  { id: 46, src: creative01, category: "Creative", title: "Cards and Nails"}



];
