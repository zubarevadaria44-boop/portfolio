"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "", style, as: Tag = "div" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      setInView(true);
    };

    let io;
    if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            show();
            io.unobserve(el);
          }
        },
        { threshold: 0.12 }
      );
      io.observe(el);
    } else {
      show();
    }

    // Подстраховка: если по какой-то причине наблюдатель не сработал
    // (баги браузера, нулевая высота на момент наблюдения и т.п.),
    // всё равно показываем блок, чтобы контент не оставался невидимым навсегда.
    const fallback = setTimeout(show, 1200);

    return () => {
      if (io) io.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${inView ? "in" : ""} ${className}`} style={style}>
      {children}
    </Tag>
  );
}

