import { useState, useCallback } from "react";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import Lightbox from "./components/Lightbox";
import "./styles/global.css";
import "./styles/gallery.css";
import { Analytics } from "@vercel/analytics/next"

export default function App() {
  const [page, setPage]         = useState("home");
  const [lightbox, setLightbox] = useState({ img: null, images: [] });

  const navigate = (target) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setPage(target), 160);
  };

  const openLightbox = useCallback((img, images) => {
    setLightbox({ img, images });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox({ img: null, images: [] });
  }, []);

  const navLightbox = useCallback((dir) => {
    setLightbox(lb => {
      const idx  = lb.images.findIndex(i => i.id === lb.img.id);
      const next = (idx + dir + lb.images.length) % lb.images.length;
      return { ...lb, img: lb.images[next] };
    });
  }, []);

  return (
    <>
      <nav className="nav">
        <button className="nav-logo" onClick={() => navigate("home")}>
          KibesArchive
        </button>
        <button
          className="nav-link"
          onClick={() => navigate(page === "home" ? "archive" : "home")}
        >
          {page === "home" ? "Archive" : "Home"}
        </button>
      </nav>

      {page === "home"
        ? <Home    navigate={navigate} openLightbox={openLightbox} />
        : <Archive navigate={navigate} openLightbox={openLightbox} />
      }

      {/* Lightbox rendered HERE at root — no transform ancestor, position:fixed works correctly */}
      {lightbox.img && (
        <Lightbox
          image={lightbox.img}
          images={lightbox.images}
          onClose={closeLightbox}
          onNav={navLightbox}
        />
      )}
    </>
  );
}
