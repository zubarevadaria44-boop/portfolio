"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
            Главная
          </Link>
          <Link href="/about" className={linkClass("/about")} onClick={() => setOpen(false)}>
            Обо мне
          </Link>
          <Link href="/portfolio" className={linkClass("/portfolio")} onClick={() => setOpen(false)}>
            Портфолио
          </Link>
        </nav>

        <button className="nav-toggle" aria-label="Меню" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
