"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import ContactBlock from "@/components/ContactBlock";
import { useLanguage } from "@/components/LanguageProvider";
import translations from "@/lib/translations";

export default function PortfolioContent() {
  const { lang } = useLanguage();
  const t = translations[lang].portfolio;

  return (
    <>
      <Header />

      <section className="portfolio-hero" style={{ paddingTop: "5vw" }}>
        <div className="wrap">
          <Reveal as="span" className="hero-eyebrow">
            {t.heroEyebrow}
          </Reveal>
          <Reveal as="h1" style={{ fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)", maxWidth: "16ch" }}>
            {t.heroTitle}
          </Reveal>
          <Reveal as="p" className="lede" style={{ marginTop: 20 }}>
            {t.heroLede}
          </Reveal>
        </div>
      </section>

      <section className="portfolio-gallery">
        <div className="wrap">
          <Reveal>
            <Gallery items={t.items} filters={t.filters} />
          </Reveal>
        </div>
      </section>

      <section className="contact">
        <div className="wrap">
          <Reveal>
            <ContactBlock kicker={t.contact.kicker} heading={t.contact.heading} text={t.contact.text} />
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
