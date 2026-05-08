import { useState, useEffect } from "react";
import { HERO_IMAGES } from "../data/images";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCurrent(c => (c + 1) % HERO_IMAGES.length),
      5200
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero">
      {HERO_IMAGES.map((src, i) => (
        <div
          key={i}
          className={`hero-slide${i === current ? " active" : ""}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="hero-eyebrow">Est. {import.meta.env.VITE_SITE_YEAR || "2024"} · Photography Archive</span>
        <h1 className="hero-title">
          {import.meta.env.VITE_SITE_TITLE || "KibesArchive"}
        </h1>
        <p className="hero-subtitle">
          {import.meta.env.VITE_SITE_TAGLINE || "The Living Archive"}
        </p>
      </div>
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
