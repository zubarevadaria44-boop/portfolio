"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import Gallery from "@/components/Gallery";
import ContactBlock from "@/components/ContactBlock";
import { useLanguage } from "@/components/LanguageProvider";
import translations from "@/lib/translations";

export default function HomeContent() {
  const { lang } = useLanguage();
  const t = translations[lang].home;

  return (
    <>
      <Header />

      <section className="hero">
        <div className="wrap">
          <div className="hero-copy">
            <span className="hero-eyebrow">{t.heroEyebrow}</span>
            <Reveal as="h1">{t.heroTitle}</Reveal>
            <Reveal as="p" className="lede">
              {t.heroLede}
            </Reveal>
            <Reveal className="hero-actions">
              <a href="/portfolio" className="btn solid">
                {t.ctaPortfolio}
              </a>
              <a href="/about" className="btn ghost">
                {t.ctaAbout}
              </a>
            </Reveal>
          </div>
          <Reveal className="hero-visual">
            <img className="frame-main" src="/images/portrait-studio-color-1.jpg" alt={t.heroImgMain} />
            <img className="frame-sub" src="/images/family-color-1.jpg" alt={t.heroImgSub} />
          </Reveal>
        </div>
      </section>

      <Marquee items={t.marquee} />

      <section className="teaser">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <span className="kicker">{t.teaserKicker}</span>
              <h2>{t.teaserTitle}</h2>
            </div>
            <p>{t.teaserText}</p>
          </Reveal>
          <Reveal>
            <Gallery items={t.teaserItems} />
          </Reveal>
        </div>
      </section>

      <section className="approach">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <span className="kicker">{t.approachKicker}</span>
              <h2>{t.approachTitle}</h2>
            </div>
          </Reveal>
          <Reveal className="specs">
            {t.specs.map((s, i) => (
              <div className="spec-item" key={i}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h4>{s}</h4>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="contact">
        <div className="wrap">
          <Reveal>
            <ContactBlock />
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
