'use client';

import { useState, useMemo, useEffect } from 'react';
import { useNews } from '../context/NewsContext';

const SOURCE_NAMES = ['РИА Новости', 'ТАСС', 'Lenta.ru', 'Коммерсантъ', 'BBC Russian'];

function timeAgo(dateStr) {
  const then = new Date(dateStr).getTime();
  if (isNaN(then)) return '';
  const diffMin = Math.floor((Date.now() - then) / 60000);
  if (diffMin < 1) return 'только что';
  if (diffMin < 60) return diffMin + ' мин назад';
  const diffH = Math.floor(diffMin / 60);
  if (diffH < 24) return diffH + ' ч назад';
  return Math.floor(diffH / 24) + ' дн назад';
}

export default function NewsFeed({ category }) {
  const { items, loading } = useNews();
  const [activeSource, setActiveSource] = useState('Все');
  const [search, setSearch] = useState('');

  const isHome = category === 'Главное';
  const hasSearch = search.trim().length > 0;

  const baseList = useMemo(
    () => (isHome ? items : items.filter((i) => i.category === category)),
    [items, category, isHome]
  );

  const availableSources = useMemo(
    () => SOURCE_NAMES.filter((n) => baseList.some((i) => i.source === n)),
    [baseList]
  );

  const filtered = useMemo(() => {
    let list = baseList;
    if (activeSource !== 'Все') list = list.filter((i) => i.source === activeSource);
    if (hasSearch) {
      list = list.filter((i) => i.title.toLowerCase().includes(search.trim().toLowerCase()));
    } else if (isHome) {
      // На главной без активного поиска — только самые свежие ("горячие") новости
      list = list.slice(0, 18);
    }
    return list;
  }, [baseList, activeSource, search, isHome, hasSearch]);

  const [featured, ...rest] = filtered;
  const sectionLabel = isHome ? 'Горячие новости' : category;

  useEffect(() => {
    if (activeSource !== 'Все' && !availableSources.includes(activeSource)) {
      setActiveSource('Все');
    }
  }, [availableSources, activeSource]);

  return (
    <>
      <div className="controls">
        <div className="tabs">
          {['Все', ...availableSources].map((n) => (
            <button
              key={n}
              className={`tab ${n === activeSource ? 'active' : ''}`}
              onClick={() => setActiveSource(n)}
            >
              {n}
            </button>
          ))}
        </div>
        <input
          className="searchbox"
          placeholder="Поиск по заголовкам…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <main>
        <div className="section-label">{sectionLabel}</div>
        {!filtered.length ? (
          <div className="empty">
            {loading ? 'Собираю свежие новости из нескольких источников…' : 'Ничего не нашлось в этом разделе. Попробуйте другую категорию или запрос.'}
          </div>
        ) : (
          <>
            <div className="featured">
              {featured.image ? (
                <div className="img" style={{ backgroundImage: `url('${featured.image}')` }} />
              ) : (
                <div className="img placeholder"><span>{featured.source.charAt(0)}</span></div>
              )}
              <div>
                <div className="tag" style={{ color: featured.color }}>
                  {featured.source} · {timeAgo(featured.pubDate)}
                </div>
                <h2><a href={featured.link} target="_blank" rel="noopener noreferrer">{featured.title}</a></h2>
                <p>{featured.excerpt}…</p>
              </div>
            </div>
            <div className="grid">
              {rest.slice(0, 23).map((i, idx) => (
                <div className="card" key={idx}>
                  {i.image ? (
                    <div className="card-img" style={{ backgroundImage: `url('${i.image}')` }} />
                  ) : (
                    <div className="card-img placeholder"><span>{i.source.charAt(0)}</span></div>
                  )}
                  <div className="tag" style={{ color: i.color }}>{i.source}</div>
                  <h3><a href={i.link} target="_blank" rel="noopener noreferrer">{i.title}</a></h3>
                  <p>{i.excerpt}…</p>
                  <div className="meta">{timeAgo(i.pubDate)}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
}
