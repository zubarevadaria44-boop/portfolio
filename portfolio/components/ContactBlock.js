export default function ContactBlock({
  kicker = "На связи",
  heading = "Есть идея съёмки?",
  text = "Напишите пару слов о том, что задумали — обсудим локацию, стиль и время. Отвечаю быстро.",
}) {
  return (
    <div className="contact-block">
      <div>
        <span className="kicker">{kicker}</span>
        <h2>{heading}</h2>
        <p>{text}</p>
        <div className="hero-actions" style={{ marginTop: 28 }}>
          <a href="https://t.me/byDaria163" target="_blank" rel="noreferrer" className="btn solid">
            Написать в Telegram
          </a>
        </div>
      </div>
      <div>
        <div className="contact-list">
          <a className="contact-item" href="https://instagram.com/smaige_go" target="_blank" rel="noreferrer">
            <span className="ico">◎</span>
            <span className="meta">
              <span className="label">Instagram</span>
              <span className="value">@smaige_go</span>
            </span>
          </a>
          <a className="contact-item" href="https://t.me/byDaria163" target="_blank" rel="noreferrer">
            <span className="ico">✈</span>
            <span className="meta">
              <span className="label">Telegram</span>
              <span className="value">@byDaria163</span>
            </span>
          </a>
          <a className="contact-item" href="https://wa.me/89093437888" target="_blank" rel="noreferrer">
            <span className="ico">☎</span>
            <span className="meta">
              <span className="label">WhatsApp</span>
              <span className="value">8 909 343-78-88</span>
            </span>
          </a>
          <a className="contact-item" href="mailto:zubarevadaria44@gmail.com">
            <span className="ico">✉</span>
            <span className="meta">
              <span className="label">Email</span>
              <span className="value">zubarevadaria44@gmail.com</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
