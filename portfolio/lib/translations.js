const translations = {
  ru: {
    nav: { home: "Главная", about: "Обо мне", portfolio: "Портфолио" },
    footer: { copyright: "© 2026 · мобильная фотография" },

    contactDefaults: {
      kicker: "На связи",
      heading: "Есть идея съёмки?",
      text: "Напишите пару слов о том, что задумали — обсудим локацию, стиль и время. Отвечаю быстро.",
      cta: "Написать в Telegram",
      labels: { telegram: "Telegram", whatsapp: "WhatsApp", email: "Email", instagram: "Instagram" },
    },

    home: {
      heroEyebrow: "Мобильная фотография",
      heroTitle: (
        <>
          Снимаю жизнь так,
          <br /> как её <em>чувствую</em>
        </>
      ),
      heroLede:
        "Портреты, студийные и уличные съёмки — всё на телефон, без громоздкой техники. Живой свет, естественные эмоции и картинка, которую хочется пересматривать.",
      ctaPortfolio: "Смотреть портфолио",
      ctaAbout: "Обо мне",
      heroImgMain: "Студийный портрет, мобильная фотография",
      heroImgSub: "Семейная фотосъёмка",
      marquee: [
        "Портреты",
        "Студийная съёмка",
        "Уличная съёмка",
        "Предметная съёмка",
        "Семейные истории",
      ],
      teaserKicker: "Избранное",
      teaserTitle: "Немного из портфолио",
      teaserText:
        "Каждый кадр — это доверие человека напротив камеры. Стараюсь сохранить в фото именно то, какие вы на самом деле.",
      teaserItems: [
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
      ],
      approachKicker: "Формат работы",
      approachTitle: "Что я снимаю",
      specs: ["Портретная съёмка", "Студийная съёмка", "Уличная съёмка", "Предметная съёмка"],
    },

    about: {
      heroEyebrow: "Обо мне",
      heroTitle: (
        <>
          Привет, я Дарья —<br /> снимаю на телефон, а не «просто на телефон»
        </>
      ),
      lede1:
        "Начинала с того, что фотографировала близких и друзей — просто потому, что не могла пройти мимо красивого света. Со временем это переросло в подработку: сейчас снимаю портреты, студийные и уличные истории для тех, кто хочет живые фотографии без пафоса большой камеры.",
      lede2:
        "Мобильная фотография — это не компромисс, а инструмент: она даёт свободу двигаться быстро, ловить настоящие эмоции и снимать там, где громоздкая техника была бы лишней.",
      heroImgAlt: "Портрет Дарьи, фотографа Smaige_go",

      specKicker: "Специализация",
      specTitle: "С чем работаю",
      specText:
        "Каждый формат съёмки требует своего подхода — от постановочного студийного света до непредсказуемости улицы.",
      specs: ["Портретная съёмка", "Студийная съёмка", "Уличная съёмка", "Предметная съёмка"],

      timelineKicker: "Как проходит съёмка",
      timelineTitle: "Формат работы",
      timeline: [
        {
          title: "Обсуждаем идею",
          text: "Пишете в Telegram или WhatsApp — обсуждаем локацию, настроение и формат съёмки.",
        },
        {
          title: "Снимаем",
          text: "Работаю мобильно и без спешки: важно, чтобы вы чувствовали себя свободно перед камерой.",
        },
        {
          title: "Обработка",
          text: "Отбираю лучшие кадры, аккуратно обрабатываю цвет и свет — без фильтров «под копирку».",
        },
        {
          title: "Передаю материал",
          text: "Присылаю готовые фото в высоком качестве — удобно смотреть и сохранять с телефона.",
        },
      ],

      pricingKicker: "Стоимость",
      pricingTitle: "Цены на съёмку",
      pricingText: "Финальная цена зависит от локации и пожеланий — обсудим при созвоне.",
      pricingItems: [
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
      ],

      testimonialsKicker: "Отзывы",
      testimonialsTitle: "Что говорят клиенты",
      testimonialItems: [
        {
          text: "Спасибо тебе большое! Фотографии очень классные! Ты такая молодец!",
          meta: "уличная съёмка",
        },
        {
          text: "Такая красота там! Очень красиво всё, особенно атмосферные — которые с лучами солнца.",
          meta: "уличная съёмка",
        },
        {
          text: "Я ещё порекомендовала тебя своей сестре.",
          meta: "семейная съёмка",
        },
      ],

      faqKicker: "Частые вопросы",
      faqTitle: "FAQ",
      faqItems: [
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
      ],

      contact: {
        heading: "Давайте снимем что-то красивое",
        text: "Расскажите, что задумали — портрет, прогулка по городу или студийная история. Отвечаю быстро в Telegram и WhatsApp.",
      },
    },

    portfolio: {
      heroEyebrow: "Портфолио",
      heroTitle: "Кадры, которые говорят сами за себя",
      heroLede:
        "Портреты, студийные образы, городские истории и семейные моменты — собрала здесь то, что показывает мой подход к свету и эмоциям.",
      filters: [
        { value: "all", label: "Все работы" },
        { value: "portrait", label: "Портреты" },
        { value: "studio", label: "Студийная" },
        { value: "street", label: "Уличная" },
        { value: "family", label: "Семейная" },
        { value: "pets", label: "Питомцы" },
        { value: "product", label: "Предметная" },
      ],
      items: [
        { src: "/images/portrait-studio-bw-1.jpg", alt: "Чёрно-белый студийный портрет на кубе", caption: "Студийная съёмка", category: ["studio"], className: "span-2 tall" },
        { src: "/images/portrait-studio-color-1.jpg", alt: "Цветной студийный портрет", caption: "Студийная съёмка", category: ["studio"], className: "span-2 tall" },
        { src: "/images/portrait-studio-bw-2.jpg", alt: "Портрет с леопардовым принтом, чёрно-белый", caption: "Портретная съёмка", category: ["portrait", "studio"], className: "span-2 wide" },
        { src: "/images/portrait-studio-bts.jpg", alt: "Портрет у зеркала, закулисье съёмки", caption: "Портретная съёмка", category: ["portrait", "studio"], className: "span-3 wide" },
        { src: "/images/family-color-2.jpg", alt: "Семейная фотосессия в парке с тортом", caption: "Семейная съёмка", category: ["family"], className: "span-3 wide" },
        { src: "/images/family-bw-1.jpg", alt: "Чёрно-белое фото мамы с ребёнком в саду", caption: "Семейная съёмка", category: ["family"], className: "span-2 tall" },
        { src: "/images/family-color-1.jpg", alt: "Семья с ребёнком на пикнике", caption: "Семейная съёмка", category: ["family"], className: "span-2 tall" },
        { src: "/images/street-color-golden.jpg", alt: "Портрет в парке в золотой час", caption: "Уличная съёмка", category: ["street", "portrait"], className: "span-2 tall" },
        { src: "/images/street-color-1.jpg", alt: "Портрет у окна на городской улице", caption: "Уличная съёмка", category: ["street", "portrait"], className: "span-3 wide" },
        { src: "/images/street-color-2.jpg", alt: "Портрет в сквере на закате", caption: "Уличная съёмка", category: ["street", "portrait"], className: "span-3 wide" },
        { src: "/images/street-bw-silhouette.jpg", alt: "Силуэт девушки на фоне городских домов", caption: "Уличная съёмка", category: ["street"], className: "span-2 tall" },
        { src: "/images/urban-scene.jpg", alt: "Вечерняя городская улица", caption: "Уличная съёмка", category: ["street"], className: "span-2 wide" },
        { src: "/images/detail-bird.jpg", alt: "Птица на белой лестнице, деталь", caption: "Уличная съёмка", category: ["street"], className: "span-2 tall" },
        { src: "/images/pet-dog.jpg", alt: "Кудрявая собака породы пудель на крыльце", caption: "Питомцы", category: ["pets"], className: "span-2 tall" },
        { src: "/images/pet-cats.jpg", alt: "Три кошки на старой лестнице в зелени", caption: "Питомцы", category: ["pets"], className: "span-3 wide" },
        { src: "/images/portrait-bw-doorway.jpg", alt: "Чёрно-белый портрет в дверном проёме", caption: "Портретная съёмка", category: ["portrait"], className: "span-2 tall" },
        { src: "/images/product-jewelry-1.jpg", alt: "Украшения с розовым кварцем на солнце", caption: "Предметная съёмка", category: ["product"], className: "span-2 tall" },
        { src: "/images/product-jewelry-2.jpg", alt: "Набор украшений в подарочной упаковке", caption: "Предметная съёмка", category: ["product"], className: "span-2 tall" },
        { src: "/images/street-overhead-dog.jpg", alt: "Вид сверху: девушка с собакой и кофе на лестнице", caption: "Уличная съёмка", category: ["street", "pets"], className: "span-2 tall" },
        { src: "/images/street-motion-leather.jpg", alt: "Портрет в кожаной куртке на ступенях, динамика", caption: "Уличная съёмка", category: ["street", "portrait"], className: "span-2 wide" },
        { src: "/images/street-doorway-coffee.jpg", alt: "Портрет в дверном проёме с кофе", caption: "Уличная съёмка", category: ["street", "portrait"], className: "span-2 tall" },
      ],
      contact: {
        kicker: "Понравилось?",
        heading: "Обсудим вашу съёмку",
        text: "Напишите пару слов о том, что задумали — и я предложу формат, который подойдёт лучше всего.",
      },
    },
  },

  en: {
    nav: { home: "Home", about: "About", portfolio: "Portfolio" },
    footer: { copyright: "© 2026 · mobile photography" },

    contactDefaults: {
      kicker: "Get in touch",
      heading: "Got a shoot in mind?",
      text: "Send a few words about what you have in mind — we'll figure out location, style and timing. I reply fast.",
      cta: "Message on Telegram",
      labels: { telegram: "Telegram", whatsapp: "WhatsApp", email: "Email", instagram: "Instagram" },
    },

    home: {
      heroEyebrow: "Mobile photography",
      heroTitle: (
        <>
          I shoot life the way
          <br /> I <em>feel</em> it
        </>
      ),
      heroLede:
        "Portraits, studio and street shoots — all on a phone, no bulky gear. Natural light, real emotion, and pictures you'll want to look at again.",
      ctaPortfolio: "View portfolio",
      ctaAbout: "About me",
      heroImgMain: "Studio portrait, mobile photography",
      heroImgSub: "Family photo session",
      marquee: ["Portraits", "Studio shoots", "Street shoots", "Product photography", "Family stories"],
      teaserKicker: "Selected work",
      teaserTitle: "A glimpse of the portfolio",
      teaserText:
        "Every shot is built on trust from the person in front of the camera. I try to keep the picture true to who you really are.",
      teaserItems: [
        {
          src: "/images/portrait-studio-bw-1.jpg",
          alt: "Black and white studio portrait",
          caption: "Studio shoot",
          category: ["studio"],
          className: "span-2 tall",
        },
        {
          src: "/images/street-color-golden.jpg",
          alt: "Golden hour portrait in a park",
          caption: "Street shoot",
          category: ["street"],
          className: "span-2 tall",
        },
        {
          src: "/images/family-color-2.jpg",
          alt: "Family photo session in a park",
          caption: "Family shoot",
          category: ["family"],
          className: "span-2 tall",
        },
      ],
      approachKicker: "How I work",
      approachTitle: "What I shoot",
      specs: ["Portrait shoots", "Studio shoots", "Street shoots", "Product photography"],
    },

    about: {
      heroEyebrow: "About me",
      heroTitle: (
        <>
          Hi, I'm Daria —<br /> I shoot on a phone, not just &laquo;on a phone&raquo;
        </>
      ),
      lede1:
        "I started out photographing family and friends — simply because I couldn't walk past beautiful light. Over time it grew into a side business: now I shoot portraits, studio and street stories for people who want honest photos without the fuss of a big camera.",
      lede2:
        "Mobile photography isn't a compromise — it's a tool. It gives me the freedom to move fast, catch real emotion, and shoot in places where bulky gear would just get in the way.",
      heroImgAlt: "Portrait of Daria, Smaige_go photographer",

      specKicker: "Specialization",
      specTitle: "What I work with",
      specText:
        "Every shooting format calls for its own approach — from staged studio light to the unpredictability of the street.",
      specs: ["Portrait shoots", "Studio shoots", "Street shoots", "Product photography"],

      timelineKicker: "How a shoot works",
      timelineTitle: "Process",
      timeline: [
        {
          title: "We discuss the idea",
          text: "You message me on Telegram or WhatsApp — we talk through location, mood and format.",
        },
        {
          title: "We shoot",
          text: "I work mobile and unhurried: it matters that you feel comfortable in front of the camera.",
        },
        {
          title: "Editing",
          text: "I pick the best shots and carefully edit color and light — no cookie-cutter filters.",
        },
        {
          title: "Delivery",
          text: "I send finished photos in high resolution — easy to view and save from your phone.",
        },
      ],

      pricingKicker: "Pricing",
      pricingTitle: "Shoot pricing",
      pricingText: "Final price depends on location and requests — we'll confirm on a quick call.",
      pricingItems: [
        {
          title: "Portrait",
          price: "from 2,500 ₽",
          unit: "/ 1 hour",
          features: ["Up to 15 edited photos", "1 location", "Ready in 2-3 days"],
        },
        {
          title: "Studio",
          price: "from 3,500 ₽",
          unit: "/ 1.5 hours",
          features: ["Studio rental included", "Up to 20 edited photos", "Outfit change"],
          featured: true,
        },
        {
          title: "Street",
          price: "from 3,000 ₽",
          unit: "/ 1.5 hours",
          features: ["Up to 2 locations", "Up to 20 edited photos", "Walking format"],
        },
        {
          title: "Product",
          price: "from 1,500 ₽",
          unit: "/ 10 items",
          features: ["Clean background", "Basic retouching", "Ready in 1-2 days"],
        },
      ],

      testimonialsKicker: "Reviews",
      testimonialsTitle: "What clients say",
      testimonialItems: [
        {
          text: "Thank you so much! The photos are amazing! You're so talented!",
          meta: "street shoot",
        },
        {
          text: "Such beauty there! Everything looks so good, especially the atmospheric ones with sun rays.",
          meta: "street shoot",
        },
        {
          text: "I also recommended you to my sister.",
          meta: "family shoot",
        },
      ],

      faqKicker: "FAQ",
      faqTitle: "Frequently asked questions",
      faqItems: [
        {
          q: "How many photos will I get?",
          a: "It depends on the format: usually 15-20 edited shots from a 1.5-hour session. I don't hand over all the raw files — only the best moments, carefully edited.",
        },
        {
          q: "How do we choose the final shots?",
          a: "After the shoot I send all the decent photos in one album — you mark your favorites, and I finish them to a polished result.",
        },
        {
          q: "Do you shoot outside the city or while travelling?",
          a: "Yes — just mention it when we discuss location, and we'll sort out travel time and logistics separately.",
        },
        {
          q: "Can we shoot in cloudy weather or indoors?",
          a: "Of course — a phone camera works great in diffused light too. For outdoor shoots we just plan around the forecast and reschedule if needed.",
        },
      ],

      contact: {
        heading: "Let's shoot something beautiful",
        text: "Tell me what you have in mind — a portrait, a walk around the city, or a studio story. I reply fast on Telegram and WhatsApp.",
      },
    },

    portfolio: {
      heroEyebrow: "Portfolio",
      heroTitle: "Shots that speak for themselves",
      heroLede:
        "Portraits, studio looks, city stories and family moments — a collection that shows my approach to light and emotion.",
      filters: [
        { value: "all", label: "All work" },
        { value: "portrait", label: "Portraits" },
        { value: "studio", label: "Studio" },
        { value: "street", label: "Street" },
        { value: "family", label: "Family" },
        { value: "pets", label: "Pets" },
        { value: "product", label: "Product" },
      ],
      items: [
        { src: "/images/portrait-studio-bw-1.jpg", alt: "Black and white studio portrait on a cube", caption: "Studio shoot", category: ["studio"], className: "span-2 tall" },
        { src: "/images/portrait-studio-color-1.jpg", alt: "Color studio portrait", caption: "Studio shoot", category: ["studio"], className: "span-2 tall" },
        { src: "/images/portrait-studio-bw-2.jpg", alt: "Black and white portrait with leopard print", caption: "Portrait shoot", category: ["portrait", "studio"], className: "span-2 wide" },
        { src: "/images/portrait-studio-bts.jpg", alt: "Mirror portrait, behind the scenes", caption: "Portrait shoot", category: ["portrait", "studio"], className: "span-3 wide" },
        { src: "/images/family-color-2.jpg", alt: "Family photo session in a park with a cake", caption: "Family shoot", category: ["family"], className: "span-3 wide" },
        { src: "/images/family-bw-1.jpg", alt: "Black and white photo of a mom and child in a garden", caption: "Family shoot", category: ["family"], className: "span-2 tall" },
        { src: "/images/family-color-1.jpg", alt: "Family with a child at a picnic", caption: "Family shoot", category: ["family"], className: "span-2 tall" },
        { src: "/images/street-color-golden.jpg", alt: "Golden hour portrait in a park", caption: "Street shoot", category: ["street", "portrait"], className: "span-2 tall" },
        { src: "/images/street-color-1.jpg", alt: "Portrait by a window on a city street", caption: "Street shoot", category: ["street", "portrait"], className: "span-3 wide" },
        { src: "/images/street-color-2.jpg", alt: "Portrait in a square at sunset", caption: "Street shoot", category: ["street", "portrait"], className: "span-3 wide" },
        { src: "/images/street-bw-silhouette.jpg", alt: "Silhouette against city buildings", caption: "Street shoot", category: ["street"], className: "span-2 tall" },
        { src: "/images/urban-scene.jpg", alt: "Evening city street", caption: "Street shoot", category: ["street"], className: "span-2 wide" },
        { src: "/images/detail-bird.jpg", alt: "Bird on a white staircase, detail shot", caption: "Street shoot", category: ["street"], className: "span-2 tall" },
        { src: "/images/pet-dog.jpg", alt: "Curly poodle on a porch", caption: "Pets", category: ["pets"], className: "span-2 tall" },
        { src: "/images/pet-cats.jpg", alt: "Three cats on an old staircase among greenery", caption: "Pets", category: ["pets"], className: "span-3 wide" },
        { src: "/images/portrait-bw-doorway.jpg", alt: "Black and white portrait in a doorway", caption: "Portrait shoot", category: ["portrait"], className: "span-2 tall" },
        { src: "/images/product-jewelry-1.jpg", alt: "Rose quartz jewelry in the sun", caption: "Product shoot", category: ["product"], className: "span-2 tall" },
        { src: "/images/product-jewelry-2.jpg", alt: "Jewelry set in gift packaging", caption: "Product shoot", category: ["product"], className: "span-2 tall" },
        { src: "/images/street-overhead-dog.jpg", alt: "Overhead shot: a woman with a dog and coffee on the stairs", caption: "Street shoot", category: ["street", "pets"], className: "span-2 tall" },
        { src: "/images/street-motion-leather.jpg", alt: "Portrait in a leather jacket on steps, motion blur", caption: "Street shoot", category: ["street", "portrait"], className: "span-2 wide" },
        { src: "/images/street-doorway-coffee.jpg", alt: "Portrait in a doorway with coffee", caption: "Street shoot", category: ["street", "portrait"], className: "span-2 tall" },
      ],
      contact: {
        kicker: "Like what you see?",
        heading: "Let's talk about your shoot",
        text: "Send a few words about what you have in mind — and I'll suggest the format that fits best.",
      },
    },
  },
};

export default translations;
