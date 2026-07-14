"use client";

import { useLanguage } from "@/components/LanguageProvider";
import translations from "@/lib/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer>
      <div className="wrap">
        <span className="fmark">Smaige_go</span>
        <span className="fmeta">{t.copyright}</span>
        <div className="fsocial">
          <a href="https://instagram.com/smaige_go" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://t.me/byDaria163" target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a href="mailto:zubarevadaria44@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

