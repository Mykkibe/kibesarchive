import { useState, useEffect, useCallback } from "react";

export default function Lightbox({ image, images, onClose, onNav }) {
  const [closing, setClosing] = useState(false);
  const idx = images.findIndex(i => i.id === image.id);

  const close = useCallback(() => {
    setClosing(true);
    setTimeout(onClose, 260);
  }, [onClose]);

  // Prevent background scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handler = e => {
      if (e.key === "Escape")     close();
      if (e.key === "ArrowLeft")  onNav(-1);
      if (e.key === "ArrowRight") onNav(1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [close, onNav]);

  return (
    <div className={`lightbox${closing ? " closing" : ""}`}>
      <div className="lb-backdrop" onClick={close} />
      <button className="lb-close" onClick={close}>Close ✕</button>

      {images.length > 1 && (
        <>
          <button className="lb-nav prev" onClick={() => onNav(-1)}>‹</button>
          <button className="lb-nav next" onClick={() => onNav(1)}>›</button>
        </>
      )}

      <div className="lb-content" key={image.id}>
        <img className="lb-img" src={image.src} alt={image.title} />
        <div className="lb-info">
          <p className="lb-cat">
            {image.category} · {String(idx + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </p>
          <h3 className="lb-title">{image.title}</h3>
        </div>
      </div>
    </div>
  );
}
