import { useEffect, useRef } from "react";

const BATCH_SIZE = 6;

export default function Gallery({ images, visible, setVisible, onImageClick }) {
  const sentinelRef = useRef(null);
  const hasMore = visible < images.length;
  const displayed = images.slice(0, visible);

  useEffect(() => {
    if (!hasMore || !sentinelRef.current) return;
    const obs = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) setVisible(v => v + BATCH_SIZE);
      },
      { threshold: 0.1 }
    );
    obs.observe(sentinelRef.current);
    return () => obs.disconnect();
  }, [hasMore, displayed.length, setVisible]);

  return (
    <div className="gallery">
      <div className="gallery-grid">
        {displayed.map((img, i) => (
          <div
            key={img.id}
            className="gallery-item"
            style={{ animationDelay: `${(i % BATCH_SIZE) * 0.07}s` }}
            onClick={() => onImageClick(img)}
          >
            <img src={img.src} alt={img.title} loading="lazy" />
            <div className="gallery-item-overlay">
              <div>
                <span className="gallery-item-cat">{img.category}</span>
                <span className="gallery-item-title">{img.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMore ? (
        <div className="load-sentinel" ref={sentinelRef}>
          <div className="load-dots">
            <div className="load-dot" />
            <div className="load-dot" />
            <div className="load-dot" />
          </div>
        </div>
      ) : (
        <p className="no-more">— End of Archive —</p>
      )}
    </div>
  );
}
