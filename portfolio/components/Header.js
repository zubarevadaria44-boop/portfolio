"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import translations from "@/lib/translations";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = translations[lang].nav;

  const linkClass = (href) => (pathname === href ? "active" : "");

  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="mark">Smaige_go</span>
          <span className="tagline">mobile photographer</span>
        </Link>

        <nav className={`main-nav ${open ? "open" : ""}`}>
          <Link href="/" className={linkClass("/")} onClick={() => setOpen(false)}>
            {t.home}
          </Link>
          <Link href="/about" className={linkClass("/about")} onClick={() => setOpen(false)}>
            {t.about}
          </Link>
          <Link href="/portfolio" className={linkClass("/portfolio")} onClick={() => setOpen(false)}>
            {t.portfolio}
          </Link>
          <div className="lang-switch">
            <button className={lang === "ru" ? "active" : ""} onClick={() => setLang("ru")}>
              RU
            </button>
            <span className="lang-divider">/</span>
            <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>
              EN
            </button>
          </div>
        </nav>

        <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

