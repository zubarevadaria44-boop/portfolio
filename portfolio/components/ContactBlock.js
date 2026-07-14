"use client";

import { useLanguage } from "@/components/LanguageProvider";
import translations from "@/lib/translations";

export default function ContactBlock({ kicker, heading, text }) {
  const { lang } = useLanguage();
  const t = translations[lang].contactDefaults;

  const finalKicker = kicker ?? t.kicker;
  const finalHeading = heading ?? t.heading;
  const finalText = text ?? t.text;

  return (
    <div className="contact-block">
      <div>
        <span className="kicker">{finalKicker}</span>
        <h2>{finalHeading}</h2>
        <p>{finalText}</p>
        <div className="hero-actions" style={{ marginTop: 28 }}>
          <a href="https://t.me/byDaria163" target="_blank" rel="noreferrer" className="btn solid">
            {t.cta}
          </a>
        </div>
      </div>
      <div>
        <div className="contact-list">
          <a className="contact-item" href="https://instagram.com/smaige_go" target="_blank" rel="noreferrer">
            <span className="ico">◎</span>
            <span className="meta">
              <span className="label">{t.labels.instagram}</span>
              <span className="value">@smaige_go</span>
            </span>
          </a>
          <a className="contact-item" href="https://t.me/byDaria163" target="_blank" rel="noreferrer">
            <span className="ico">✈</span>
            <span className="meta">
              <span className="label">{t.labels.telegram}</span>
              <span className="value">@byDaria163</span>
            </span>
          </a>
          <a className="contact-item" href="https://wa.me/89093437888" target="_blank" rel="noreferrer">
            <span className="ico">☎</span>
            <span className="meta">
              <span className="label">{t.labels.whatsapp}</span>
              <span className="value">8 909 343-78-88</span>
            </span>
          </a>
          <a className="contact-item" href="mailto:zubarevadaria44@gmail.com">
            <span className="ico">✉</span>
            <span className="meta">
              <span className="label">{t.labels.email}</span>
              <span className="value">zubarevadaria44@gmail.com</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
