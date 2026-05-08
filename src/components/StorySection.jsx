import { IMAGES } from "../data/images";

export default function StorySection({ number, category, onImageClick }) {
  const images = IMAGES.filter(img => img.category === category);

  return (
    <div className="story">
      <div className="story-header">
        <span className="story-number">{number}</span>
        <h3 className="story-title">{category}</h3>
      </div>
      <div className="story-grid">
        {images.slice(0, 4).map(img => (
          <div
            key={img.id}
            className="story-grid-item"
            onClick={() => onImageClick(img, category)}
          >
            <img src={img.src} alt={img.title} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
