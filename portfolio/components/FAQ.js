"use client";

import { useState } from "react";

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div className={`faq-item ${isOpen ? "open" : ""}`} key={i}>
            <button
              className="faq-question"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <span className="faq-icon">{isOpen ? "−" : "+"}</span>
            </button>
            <div className="faq-answer" style={{ maxHeight: isOpen ? "300px" : "0px" }}>
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
