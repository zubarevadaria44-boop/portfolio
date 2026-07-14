import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import ContactBlock from "@/components/ContactBlock";

export const metadata = {
  title: "Портфолио — Smaige_go",
  description:
    "Портфолио мобильного фотографа Smaige_go: портретная, студийная, уличная и семейная съёмка.",
};

const filters = [
  { value: "all", label: "Все работы" },
  { value: "portrait", label: "Портреты" },
  { value: "studio", label: "Студийная" },
  { value: "street", label: "Уличная" },
  { value: "family", label: "Семейная" },
  { value: "pets", label: "Питомцы" },
  { value: "nature", label: "Природа" },
  { value: "product", label: "Предметная" },
];

const items = [
  {
    src: "/images/portrait-studio-bw-1.jpg",
    alt: "Чёрно-белый студийный портрет на кубе",
    caption: "Студийная съёмка",
    category: ["studio"],
    className: "span-2 tall",
  },
  {
    src: "/images/portrait-studio-color-1.jpg",
    alt: "Цветной студийный портрет",
    caption: "Студийная съёмка",
    category: ["studio"],
    className: "span-2 tall",
  },
  {
    src: "/images/portrait-studio-bw-2.jpg",
    alt: "Портрет с леопардовым принтом, чёрно-белый",
    caption: "Портретная съёмка",
    category: ["portrait", "studio"],
    className: "span-2 wide",
  },
  {
    src: "/images/portrait-studio-bts.jpg",
    alt: "Портрет у зеркала, закулисье съёмки",
    caption: "Портретная съёмка",
    category: ["portrait", "studio"],
    className: "span-3 wide",
  },
  {
    src: "/images/family-color-2.jpg",
    alt: "Семейная фотосессия в парке с тортом",
    caption: "Семейная съёмка",
    category: ["family"],
    className: "span-3 wide",
  },
  {
    src: "/images/family-bw-1.jpg",
    alt: "Чёрно-белое фото мамы с ребёнком в саду",
    caption: "Семейная съёмка",
    category: ["family"],
    className: "span-2 tall",
  },
  {
    src: "/images/family-color-1.jpg",
    alt: "Семья с ребёнком на пикнике",
    caption: "Семейная съёмка",
    category: ["family"],
    className: "span-2 tall",
  },
  {
    src: "/images/street-color-golden.jpg",
    alt: "Портрет в парке в золотой час",
    caption: "Уличная съёмка",
    category: ["street", "portrait"],
    className: "span-2 tall",
  },
  {
    src: "/images/street-color-1.jpg",
    alt: "Портрет у окна на городской улице",
    caption: "Уличная съёмка",
    category: ["street", "portrait"],
    className: "span-3 wide",
  },
  {
    src: "/images/street-color-2.jpg",
    alt: "Портрет в сквере на закате",
    caption: "Уличная съёмка",
    category: ["street", "portrait"],
    className: "span-3 wide",
  },
  {
    src: "/images/street-bw-silhouette.jpg",
    alt: "Силуэт девушки на фоне городских домов",
    caption: "Уличная съёмка",
    category: ["street"],
    className: "span-2 tall",
  },
  {
    src: "/images/urban-scene.jpg",
    alt: "Вечерняя городская улица",
    caption: "Уличная съёмка",
    category: ["street"],
    className: "span-2 wide",
  },
  {
    src: "/images/detail-bird.jpg",
    alt: "Птица на белой лестнице, деталь",
    caption: "Уличная съёмка",
    category: ["street"],
    className: "span-2 tall",
  },
  {
    src: "/images/pet-dog.jpg",
    alt: "Кудрявая собака породы пудель на крыльце",
    caption: "Питомцы",
    category: ["pets"],
    className: "span-2 tall",
  },
  {
    src: "/images/pet-cats.jpg",
    alt: "Три кошки на старой лестнице в зелени",
    caption: "Питомцы",
    category: ["pets"],
    className: "span-3 wide",
  },
  {
    src: "/images/portrait-bw-doorway.jpg",
    alt: "Чёрно-белый портрет в дверном проёме",
    caption: "Портретная съёмка",
    category: ["portrait"],
    className: "span-2 tall",
  },
  {
    src: "/images/product-jewelry-1.jpg",
    alt: "Украшения с розовым кварцем на солнце",
    caption: "Предметная съёмка",
    category: ["product"],
    className: "span-2 tall",
  },
  {
    src: "/images/product-jewelry-2.jpg",
    alt: "Набор украшений в подарочной упаковке",
    caption: "Предметная съёмка",
    category: ["product"],
    className: "span-2 tall",
  },
  {
    src: "/images/street-overhead-dog.jpg",
    alt: "Вид сверху: девушка с собакой и кофе на лестнице",
    caption: "Уличная съёмка",
    category: ["street", "pets"],
    className: "span-2 tall",
  },
  {
    src: "/images/street-motion-leather.jpg",
    alt: "Портрет в кожаной куртке на ступенях, динамика",
    caption: "Уличная съёмка",
    category: ["street", "portrait"],
    className: "span-2 wide",
  },
  {
    src: "/images/street-doorway-coffee.jpg",
    alt: "Портрет в дверном проёме с кофе",
    caption: "Уличная съёмка",
    category: ["street", "portrait"],
    className: "span-2 tall",
  },
];

export default function Portfolio() {
  return (
    <>
      <Header />

      <section className="portfolio-hero" style={{ paddingTop: "5vw" }}>
        <div className="wrap">
          <Reveal as="span" className="hero-eyebrow">
            Портфолио
          </Reveal>
          <Reveal as="h1" style={{ fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)", maxWidth: "16ch" }}>
            Кадры, которые говорят сами за себя
          </Reveal>
          <Reveal as="p" className="lede" style={{ marginTop: 20 }}>
            Портреты, студийные образы, городские истории и семейные моменты — собрала
            здесь то, что показывает мой подход к свету и эмоциям.
          </Reveal>
        </div>
      </section>

      <section className="portfolio-gallery">
        <div className="wrap">
          <Reveal>
            <Gallery items={items} filters={filters} />
          </Reveal>
        </div>
      </section>

      <section className="contact">
        <div className="wrap">
          <Reveal>
            <ContactBlock
              kicker="Понравилось?"
              heading="Обсудим вашу съёмку"
              text="Напишите пару слов о том, что задумали — и я предложу формат, который подойдёт лучше всего."
            />
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
