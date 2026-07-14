# Smaige_go — сайт-портфолио (Next.js)

## Запуск локально

```
npm install
npm run dev
```

Открыть http://localhost:3000

## Структура

- `app/page.js` — главная
- `app/about/page.js` — обо мне
- `app/portfolio/page.js` — портфолио (фильтры + лайтбокс)
- `components/` — Header, Footer, Gallery, ContactBlock, QRCode, Marquee, Reveal
- `app/globals.css` — все стили
- `public/images/` — фотографии

## Деплой на Vercel (как обычно)

```
git add .
git commit -m "Next.js версия сайта"
git push
```

Vercel подхватит пуш и задеплоит автоматически, как в прошлых проектах.

## Что поменять

- Фото в `public/images/` — если что-то не нужно, просто удали файл и уберешь
  соответствующий объект из массива `items` в `app/portfolio/page.js`.
- Контакты (Telegram/WhatsApp/Email) — в `components/ContactBlock.js`.
- Название — в `components/Header.js` (`Smaige_go`) и в `app/layout.js` (title/description).
