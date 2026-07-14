"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ContactBlock from "@/components/ContactBlock";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { useLanguage } from "@/components/LanguageProvider";
import translations from "@/lib/translations";

export default function AboutContent() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <>
      <Header />

      <section className="hero">
        <div className="wrap">
          <div className="hero-copy">
            <span className="hero-eyebrow">{t.heroEyebrow}</span>
            <Reveal as="h1">{t.heroTitle}</Reveal>
            <Reveal as="p" className="lede">
              {t.lede1}
            </Reveal>
            <Reveal as="p" className="lede">
              {t.lede2}
            </Reveal>
          </div>
          <Reveal className="hero-visual">
            <img className="frame-main" src="/images/about-portrait-bw.jpg" alt={t.heroImgAlt} />
          </Reveal>
        </div>
      </section>

      <section className="specialization">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <span className="kicker">{t.specKicker}</span>
              <h2>{t.specTitle}</h2>
            </div>
            <p>{t.specText}</p>
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

      <section className="approach-timeline">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <span className="kicker">{t.timelineKicker}</span>
              <h2>{t.timelineTitle}</h2>
            </div>
          </Reveal>
          <Reveal className="timeline">
            {t.timeline.map((step, i) => (
              <div className="timeline-row" key={i}>
                <span className="year">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="pricing">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <span className="kicker">{t.pricingKicker}</span>
              <h2>{t.pricingTitle}</h2>
            </div>
            <p>{t.pricingText}</p>
          </Reveal>
          <Reveal>
            <Pricing items={t.pricingItems} />
          </Reveal>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <span className="kicker">{t.testimonialsKicker}</span>
              <h2>{t.testimonialsTitle}</h2>
            </div>
          </Reveal>
          <Reveal>
            <Testimonials items={t.testimonialItems} />
          </Reveal>
        </div>
      </section>

      <section className="faq-section">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <span className="kicker">{t.faqKicker}</span>
              <h2>{t.faqTitle}</h2>
            </div>
          </Reveal>
          <Reveal>
            <FAQ items={t.faqItems} />
          </Reveal>
        </div>
      </section>

      <section className="contact">
        <div className="wrap">
          <Reveal>
            <ContactBlock heading={t.contact.heading} text={t.contact.text} />
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
