import Parser from 'rss-parser';

const parser = new Parser({
  timeout: 10000,
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
    'Accept': 'application/rss+xml, application/xml, text/xml, */*',
    'Accept-Language': 'ru-RU,ru;q=0.9,en;q=0.8',
  },
  customFields: {
    item: [
      ['media:content', 'mediaContent', { keepArray: true }],
      ['media:thumbnail', 'mediaThumbnail'],
      ['enclosure', 'enclosure'],
    ],
  },
});

export const SOURCES = [
  { name: 'РИА Новости', rss: 'https://ria.ru/export/rss2/index.xml', color: '#A8461F' },
  { name: 'ТАСС', rss: 'https://tass.ru/rss/v2.xml', color: '#C17F3E' },
  { name: 'Lenta.ru', rss: 'https://lenta.ru/rss', color: '#5B3E2B' },
  { name: 'Коммерсантъ', rss: 'https://www.kommersant.ru/RSS/news.xml', color: '#9C8459' },
  { name: 'BBC Russian', rss: 'https://feeds.bbci.co.uk/russian/rss.xml', color: '#2E2013' },
];

// slug — используется в URL (/news/<slug>). Порядок важен: первое совпадение по keywords побеждает.
export const CATEGORY_LIST = [
  { name: 'Мир', slug: 'mir', keywords: ['сша', 'украин', 'европ', 'нато', 'оон', 'израил', 'ближн', 'штаты', 'вашингтон', 'пекин', 'китай'] },
  { name: 'Россия', slug: 'rossiya', keywords: ['росси', 'путин', 'кремл', 'москв', 'госдум', 'минист', 'губернатор'] },
  { name: 'Бизнес', slug: 'biznes', keywords: ['рубл', 'доллар', 'нефт', 'рынок', 'банк', 'компани', 'акци', 'инвест', 'цб', 'экономик'] },
  { name: 'Технологии', slug: 'tehnologii', keywords: ['технолог', 'искусственн', 'нейросет', 'гаджет', 'смартфон', 'интернет', 'программ', 'ии ', 'apple', 'google'] },
  { name: 'Наука', slug: 'nauka', keywords: ['наук', 'исследовани', 'космос', 'учены', 'открытие'] },
  { name: 'Спорт', slug: 'sport', keywords: ['футбол', 'хоккей', 'олимпиад', 'чемпионат', 'матч', 'спорт', 'сборная'] },
  { name: 'Культура', slug: 'kultura', keywords: ['фильм', 'кино', 'музык', 'театр', 'книга', 'выставк', 'премьер'] },
  { name: 'Общество', slug: 'obschestvo', keywords: [] }, // подборка по умолчанию
];

// Полный список для навигации, включая главную страницу.
export const NAV_ITEMS = [{ name: 'Главное', slug: '', href: '/' }].concat(
  CATEGORY_LIST.map((c) => ({ name: c.name, slug: c.slug, href: `/news/${c.slug}` }))
);

export function slugToCategoryName(slug) {
  const found = CATEGORY_LIST.find((c) => c.slug === slug);
  return found ? found.name : null;
}

export function categorize(title, excerpt) {
  const text = (title + ' ' + excerpt).toLowerCase();
  for (const cat of CATEGORY_LIST) {
    if (cat.keywords.length && cat.keywords.some((k) => text.includes(k))) return cat.name;
  }
  return 'Общество';
}

function extractImage(item) {
  if (item.enclosure && item.enclosure.url) return item.enclosure.url;
  if (item.mediaThumbnail && item.mediaThumbnail.$ && item.mediaThumbnail.$.url) return item.mediaThumbnail.$.url;
  if (item.mediaContent && item.mediaContent.length) {
    const withImg = item.mediaContent.find((m) => m.$ && m.$.url);
    if (withImg) return withImg.$.url;
  }
  const html = item['content:encoded'] || item.content || item.description || '';
  const match = html.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : null;
}

function stripHtml(html) {
  return (html || '').replace(/<[^>]*>/g, '').trim();
}

async function fetchOgImage(url) {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
      },
    });
    clearTimeout(timer);
    const html = await res.text();
    const og =
      html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ||
      html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i) ||
      html.match(/<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i);
    return og ? og[1] : null;
  } catch (e) {
    return null;
  }
}

// Сколько самых свежих новостей без фото пытаемся "дообогатить" картинкой со страницы источника.
// Ограничено, чтобы не растягивать загрузку на весь фид (355+ новостей).
const IMAGE_ENRICH_LIMIT = 60;

async function enrichMissingImages(items) {
  const candidates = items.slice(0, IMAGE_ENRICH_LIMIT).filter((i) => !i.image);
  await Promise.allSettled(
    candidates.map(async (item) => {
      const og = await fetchOgImage(item.link);
      if (og) item.image = og;
    })
  );
}

async function fetchOneSource(src, attempt = 1) {
  try {
    const feed = await parser.parseURL(src.rss);
    return feed.items.map((it) => {
      const title = it.title || '';
      const excerpt = stripHtml(it.contentSnippet || it.content || '').slice(0, 140);
      const base = {
        title,
        link: it.link,
        pubDate: it.pubDate || it.isoDate,
        excerpt,
        image: extractImage(it),
        source: src.name,
        color: src.color,
      };
      return { ...base, category: categorize(title, excerpt) };
    });
  } catch (e) {
    if (attempt < 2) {
      await new Promise((r) => setTimeout(r, 800));
      return fetchOneSource(src, attempt + 1);
    }
    return [];
  }
}

export async function fetchAllNews() {
  const results = await Promise.allSettled(SOURCES.map(fetchOneSource));
  let merged = [];
  const failedSources = [];
  results.forEach((r, i) => {
    if (r.status === 'fulfilled' && r.value.length) {
      merged = merged.concat(r.value);
    } else {
      failedSources.push(SOURCES[i].name);
    }
  });
  merged.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
  await enrichMissingImages(merged);
  return { items: merged, failedSources, updatedAt: new Date().toISOString() };
}
