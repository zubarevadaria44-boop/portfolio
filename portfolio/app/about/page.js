import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ContactBlock from "@/components/ContactBlock";

export const metadata = {
  title: "Обо мне — Smaige_go",
  description:
    "Дарья, мобильный фотограф Smaige_go. Портреты, студийная, уличная и предметная съёмка.",
};

export default function About() {
  return (
    <>
      <Header />

      <section className="hero">
        <div className="wrap">
          <div className="hero-copy">
            <span className="hero-eyebrow">Обо мне</span>
            <Reveal as="h1">
              Привет, я Дарья —<br /> снимаю на телефон, а не «просто на телефон»
            </Reveal>
            <Reveal as="p" className="lede">
              Начинала с того, что фотографировала близких и друзей — просто потому,
              что не могла пройти мимо красивого света. Со временем это переросло в
              подработку: сейчас снимаю портреты, студийные и уличные истории для тех,
              кто хочет живые фотографии без пафоса большой камеры.
            </Reveal>
            <Reveal as="p" className="lede">
              Мобильная фотография — это не компромисс, а инструмент: она даёт свободу
              двигаться быстро, ловить настоящие эмоции и снимать там, где громоздкая
              техника была бы лишней.
            </Reveal>
          </div>
          <Reveal className="hero-visual">
            <img
              className="frame-main"
              src="/images/about-portrait-bw.jpg"
              alt="Портрет Дарьи, фотографа Smaige_go"
            />
          </Reveal>
        </div>
      </section>

      <section className="specialization">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <span className="kicker">Специализация</span>
              <h2>С чем работаю</h2>
            </div>
            <p>
              Каждый формат съёмки требует своего подхода — от постановочного
              студийного света до непредсказуемости улицы.
            </p>
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

      <section className="approach-timeline">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <span className="kicker">Как проходит съёмка</span>
              <h2>Формат работы</h2>
            </div>
          </Reveal>
          <Reveal className="timeline">
            <div className="timeline-row">
              <span className="year">01</span>
              <div>
                <h4>Обсуждаем идею</h4>
                <p>
                  Пишете в Telegram или WhatsApp — обсуждаем локацию, настроение и
                  формат съёмки.
                </p>
              </div>
            </div>
            <div className="timeline-row">
              <span className="year">02</span>
              <div>
                <h4>Снимаем</h4>
                <p>
                  Работаю мобильно и без спешки: важно, чтобы вы чувствовали себя
                  свободно перед камерой.
                </p>
              </div>
            </div>
            <div className="timeline-row">
              <span className="year">03</span>
              <div>
                <h4>Обработка</h4>
                <p>
                  Отбираю лучшие кадры, аккуратно обрабатываю цвет и свет — без
                  фильтров «под копирку».
                </p>
              </div>
            </div>
            <div className="timeline-row">
              <span className="year">04</span>
              <div>
                <h4>Передаю материал</h4>
                <p>
                  Присылаю готовые фото в высоком качестве — удобно смотреть и
                  сохранять с телефона.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="contact">
        <div className="wrap">
          <Reveal>
            <ContactBlock
              heading="Давайте снимем что-то красивое"
              text="Расскажите, что задумали — портрет, прогулка по городу или студийная история. Отвечаю быстро в Telegram и WhatsApp."
            />
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
