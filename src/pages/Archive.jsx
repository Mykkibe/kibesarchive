import { useState, useEffect } from "react";
import Gallery from "../components/Gallery";
import { IMAGES } from "../data/images";

const CATEGORIES = ["All", "Portraits", "Nature", "Street", "Cars", "Product"];
const BATCH_SIZE  = 6;

export default function Archive({ navigate, openLightbox }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visible, setVisible]           = useState(BATCH_SIZE);

  const filtered =
    activeFilter === "All"
      ? IMAGES
      : IMAGES.filter(img => img.category === activeFilter);

  useEffect(() => { setVisible(BATCH_SIZE); }, [activeFilter]);

  const handleImageClick = (img) => {
    openLightbox(img, filtered);
  };

  return (
    <div className="archive-page page-enter">
      <div className="archive-header">
        <h1 className="archive-title">The <em>Archive</em></h1>
        <p className="archive-meta">{filtered.length} frames · {activeFilter}</p>
      </div>

      <div className="filters">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`filter-btn${activeFilter === cat ? " active" : ""}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <Gallery
        images={filtered}
        visible={visible}
        setVisible={setVisible}
        onImageClick={handleImageClick}
      />
    </div>
  );
}
