"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/components/LanguageProvider";

export default function Gallery({ items, filters }) {
  const { lang } = useLanguage();
  const [active, setActive] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    // Не даём странице скроллиться под открытым лайтбоксом
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex, visibleItems.length]);

  const closeLabel = lang === "ru" ? "Закрыть" : "Close";

  const lightbox =
    lightboxIndex !== null ? (
      <div
        className="lightbox open"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeLightbox();
        }}
      >
        <span className="close-btn" onClick={closeLightbox}>
          {closeLabel} ✕
        </span>
        <span className="nav-arrow prev" onClick={prev}>
          ‹
        </span>
        <img src={visibleItems[lightboxIndex].src} alt={visibleItems[lightboxIndex].alt} />
        <span className="nav-arrow next" onClick={next}>
          ›
        </span>
      </div>
    ) : null;

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

      {mounted && lightbox && createPortal(lightbox, document.body)}
    </>
  );
}
