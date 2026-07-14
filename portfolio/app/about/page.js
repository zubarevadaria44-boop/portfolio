import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ContactBlock from "@/components/ContactBlock";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

const pricingItems = [
  {
    title: "Портретная",
    price: "от 2 500 ₽",
    unit: "/ 1 час",
    features: ["До 15 обработанных фото", "1 локация", "Готовые фото за 2-3 дня"],
  },
  {
    title: "Студийная",
    price: "от 3 500 ₽",
    unit: "/ 1.5 часа",
    features: ["Аренда студии включена", "До 20 обработанных фото", "Смена образа"],
    featured: true,
  },
  {
    title: "Уличная",
    price: "от 3 000 ₽",
    unit: "/ 1.5 часа",
    features: ["До 2 локаций", "До 20 обработанных фото", "Прогулочный формат"],
  },
  {
    title: "Предметная",
    price: "от 1 500 ₽",
    unit: "/ 10 предметов",
    features: ["Однородный фон", "Базовая ретушь", "Готово за 1-2 дня"],
  },
];

const testimonialItems = [
  {
    text: "Дарья сняла нашу семейную прогулку так тепло и легко, что дочка даже не заметила камеру. Фото пересматриваем до сих пор.",
    name: "Анна",
    meta: "семейная съёмка",
  },
  {
    text: "Нужны были фото украшений для магазина — получила аккуратные, чистые кадры без лишних танцев с бубном. Быстро и по делу.",
    name: "Марина",
    meta: "предметная съёмка",
  },
  {
    text: "Боялась камеры, но с Дашей было легко и весело. Портреты получились живыми, без неловких поз.",
    name: "Ксения",
    meta: "портретная съёмка",
  },
];

const faqItems = [
  {
    q: "Сколько фото я получу?",
    a: "Зависит от формата: обычно 15-20 обработанных кадров с полуторачасовой съёмки. Все исходники не отдаю — только лучшие моменты, аккуратно обработанные.",
  },
  {
    q: "Как проходит выбор кадров?",
    a: "После съёмки присылаю все более-менее удачные фото одним альбомом — вы отмечаете понравившиеся, я довожу их до финального вида.",
  },
  {
    q: "Работаете за городом или в поездках?",
    a: "Да, при обсуждении локации просто напишите, если это не в пределах города — обсудим отдельно дорогу и время.",
  },
  {
    q: "Можно снять в пасмурную погоду или дома?",
    a: "Конечно — мобильная камера отлично работает и при рассеянном свете. Если съёмка на улице, просто ориентируемся по прогнозу и при необходимости переносим дату.",
  },
];

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

      <section className="pricing">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <span className="kicker">Стоимость</span>
              <h2>Цены на съёмку</h2>
            </div>
            <p>Финальная цена зависит от локации и пожеланий — обсудим при созвоне.</p>
          </Reveal>
          <Reveal>
            <Pricing items={pricingItems} />
          </Reveal>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <span className="kicker">Отзывы</span>
              <h2>Что говорят клиенты</h2>
            </div>
          </Reveal>
          <Reveal>
            <Testimonials items={testimonialItems} />
          </Reveal>
        </div>
      </section>

      <section className="faq-section">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <span className="kicker">Частые вопросы</span>
              <h2>FAQ</h2>
            </div>
          </Reveal>
          <Reveal>
            <FAQ items={faqItems} />
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
