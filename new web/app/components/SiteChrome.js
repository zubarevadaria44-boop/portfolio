'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV_ITEMS } from '../../lib/news';
import { useNews } from '../context/NewsContext';

function categoryNameForPath(pathname) {
  const item = NAV_ITEMS.find((n) => n.href === pathname);
  return item ? item.name : 'Главное';
}

export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const activeName = categoryNameForPath(pathname);
  const { items, failedSources, updatedAt, loading, refresh } = useNews();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [clock, setClock] = useState('');
  const [dateLine, setDateLine] = useState('');

  useEffect(() => {
    function tick() {
      const now = new Date();
      setClock(now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }));
      setDateLine(now.toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' }));
    }
    tick();
    const t = setInterval(tick, 30000);
    return () => clearInterval(t);
  }, []);

  const counts = {};
  NAV_ITEMS.forEach((n) => {
    counts[n.name] = n.name === 'Главное' ? items.length : items.filter((i) => i.category === n.name).length;
  });

  const ticker = items.slice(0, 14);

  return (
    <>
      <div className="masthead">
        <div className="masthead-left">
          <button className="menu-btn" aria-label="Открыть меню разделов" onClick={() => setDrawerOpen(true)}>
            <span></span><span></span><span></span>
          </button>
          <div>
            <Link href="/"><h1>Полдень</h1></Link>
            <div className="sub">{dateLine ? `— ${dateLine} —` : '— живая лента —'}</div>
          </div>
        </div>
        <div className="clock">сейчас<span>{clock || '--:--'}</span></div>
      </div>

      <div className="ticker-wrap">
        <div className="ticker-track">
          {ticker.length ? (
            <>
              {ticker.map((i, idx) => <span key={idx}>{i.title}</span>)}
              {ticker.map((i, idx) => <span key={'b' + idx}>{i.title}</span>)}
            </>
          ) : (
            <span>Загружаю ленту…</span>
          )}
        </div>
      </div>

      <div className={`overlay ${drawerOpen ? 'open' : ''}`} onClick={() => setDrawerOpen(false)} />
      <nav className={`drawer ${drawerOpen ? 'open' : ''}`} aria-label="Разделы">
        <div className="drawer-top">
          <span className="drawer-logo">Полдень</span>
          <button className="close-btn" onClick={() => setDrawerOpen(false)} aria-label="Закрыть">✕</button>
        </div>
        <ul className="drawer-list">
          {NAV_ITEMS.map((n) => (
            <li key={n.name}>
              <Link href={n.href} className={n.name === activeName ? 'active' : ''} onClick={() => setDrawerOpen(false)}>
                <span>{n.name}</span>
                <span className="count">{counts[n.name] || 0}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="drawer-footer">РИА Новости · ТАСС · Lenta.ru · Коммерсантъ · BBC Russian</div>
      </nav>

      <div className="status-row">
        <span>
          {loading
            ? 'Обновляю новости…'
            : `Загружено ${items.length} новостей${updatedAt ? ` · последнее обновление ${new Date(updatedAt).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}` : ''}${failedSources.length ? ` · не отвечают: ${failedSources.join(', ')}` : ''}`}
        </span>
        <button className="refresh-btn" onClick={refresh}>Обновить сейчас</button>
      </div>

      {children}

      <footer>РИА Новости · ТАСС · Lenta.ru · Коммерсантъ · BBC Russian — обновление каждые 5 минут</footer>
    </>
  );
}
