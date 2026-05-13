import Hero from "../components/Hero";
import StorySection from "../components/StorySection";
import { IMAGES } from "../data/images";

const STORIES = [
  { number: "01", category: "Portraits" },
  { number: "02", category: "Nature" },
  { number: "03", category: "Street" },
  { number: "04", category: "Cars" },
  { number: "05", category: "Product" },
  { number: "06", category: "Wildlife"},
  { number: "07", category: "Silhouette"},
  { number: "08", category: "Creative"},
];

export default function Home({ navigate, openLightbox }) {

  const handleImageClick = (img, cat) => {
    const images = IMAGES.filter(i => i.category === cat);
    openLightbox(img, images);
  };

  return (
    <div className="page-enter">
      <Hero />

      {/* Brand */}
      <section className="brand">
        <p className="brand-year">
          {import.meta.env.VITE_SITE_LOCATION || "Nairobi · Kenya"} · {import.meta.env.VITE_SITE_YEAR || "2024"}
        </p>
        <h2 className="brand-name">Kibes<em>Archive</em></h2>
        <p className="brand-tagline">
          A curated visual record of the world as it passes —<br />one frame at a time.
        </p>
        <div className="brand-divider" />
      </section>

      {/* Story sections */}
      <section className="stories">
        {STORIES.map(({ number, category }) => (
          <StorySection
            key={category}
            number={number}
            category={category}
            onImageClick={handleImageClick}
          />
        ))}
      </section>

      {/* CTA */}
      <section className="cta">
        <p className="cta-label">The Full Collection</p>
        <h2 className="cta-headline">Enter <em>The Archive</em></h2>
        <button className="btn-archive" onClick={() => navigate("archive")}>
          <span>Enter The Archive →</span>
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <span className="footer-brand">
          {import.meta.env.VITE_SITE_TITLE || "KibesArchive"}
        </span>
        <span className="footer-copy">
          © {import.meta.env.VITE_SITE_YEAR || "2024"} · All rights reserved
        </span>
      </footer>
    </div>
  );
}
