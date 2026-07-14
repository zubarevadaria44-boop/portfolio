import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import Gallery from "@/components/Gallery";
import ContactBlock from "@/components/ContactBlock";

const teaserItems = [
  {
    src: "/images/portrait-studio-bw-1.jpg",
    alt: "Чёрно-белый студийный портрет",
    caption: "Студийная съёмка",
    category: ["studio"],
    className: "span-2 tall",
  },
  {
    src: "/images/street-color-golden.jpg",
    alt: "Портрет golden hour в парке",
    caption: "Уличная съёмка",
    category: ["street"],
    className: "span-2 tall",
  },
  {
    src: "/images/family-color-2.jpg",
    alt: "Семейная фотосессия в парке",
    caption: "Семейная съёмка",
    category: ["family"],
    className: "span-2 tall",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <section className="hero">
        <div className="wrap">
          <div className="hero-copy">
            <span className="hero-eyebrow">Мобильная фотография</span>
            <Reveal as="h1">
              Снимаю жизнь так,
              <br /> как её <em>чувствую</em>
            </Reveal>
            <Reveal as="p" className="lede">
              Портреты, студийные и уличные съёмки — всё на телефон, без громоздкой
              техники. Живой свет, естественные эмоции и картинка, которую хочется
              пересматривать.
            </Reveal>
            <Reveal className="hero-actions">
              <a href="/portfolio" className="btn solid">
                Смотреть портфолио
              </a>
              <a href="/about" className="btn ghost">
                Обо мне
              </a>
            </Reveal>
          </div>
          <Reveal className="hero-visual">
            <img
              className="frame-main"
              src="/images/portrait-studio-color-1.jpg"
              alt="Студийный портрет, мобильная фотография"
            />
            <img
              className="frame-sub"
              src="/images/family-color-1.jpg"
              alt="Семейная фотосъёмка"
            />
          </Reveal>
        </div>
      </section>

      <Marquee
        items={[
          "Портреты",
          "Студийная съёмка",
          "Уличная съёмка",
          "Предметная съёмка",
          "Семейные истории",
        ]}
      />

      <section className="teaser">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <span className="kicker">Избранное</span>
              <h2>Немного из портфолио</h2>
            </div>
            <p>
              Каждый кадр — это доверие человека напротив камеры. Стараюсь сохранить в
              фото именно то, какие вы на самом деле.
            </p>
          </Reveal>
          <Reveal>
            <Gallery items={teaserItems} />
          </Reveal>
        </div>
      </section>

      <section className="approach">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <span className="kicker">Формат работы</span>
              <h2>Что я снимаю</h2>
            </div>
          </Reveal>
          <Reveal className="specs">
            <div className="spec-item">
              <span className="num">01</span>
              <h4>Портретная съёмка</h4>
            </div>
            <div className="spec-item">
              <span className="num">02</span>
              <h4>Студийная съёмка</h4>
            </div>
            <div className="spec-item">
              <span className="num">03</span>
              <h4>Уличная съёмка</h4>
            </div>
            <div className="spec-item">
              <span className="num">04</span>
              <h4>Предметная съёмка</h4>
            </div>
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
