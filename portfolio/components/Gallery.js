"use client";

import { useEffect, useState } from "react";

export default function Gallery({ items, filters }) {
  const [active, setActive] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const visibleItems = items.filter(
    (item) => active === "all" || item.category.includes(active)
  );

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) => (i - 1 + visibleItems.length) % visibleItems.length);
  const next = () => setLightboxIndex((i) => (i + 1) % visibleItems.length);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightboxIndex, visibleItems.length]);

  return (
    <>
      {filters && (
        <div className="filters">
          {filters.map((f) => (
            <button
              key={f.value}
              className={`filter-btn ${active === f.value ? "active" : ""}`}
              onClick={() => setActive(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      <div className="gallery">
        {visibleItems.map((item, idx) => (
          <figure
            key={item.src}
            className={item.className}
            onClick={() => openLightbox(idx)}
            style={{ cursor: "pointer" }}
          >
            <img src={item.src} alt={item.alt} />
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="lightbox open"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          <span className="close-btn" onClick={closeLightbox}>
            Закрыть ✕
          </span>
          <span className="nav-arrow prev" onClick={prev}>
            ‹
          </span>
          <img src={visibleItems[lightboxIndex].src} alt={visibleItems[lightboxIndex].alt} />
          <span className="nav-arrow next" onClick={next}>
            ›
          </span>
        </div>
      )}
    </>
  );
}
