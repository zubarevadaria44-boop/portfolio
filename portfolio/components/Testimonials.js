export default function Testimonials({ items }) {
  return (
    <div className="testimonials">
      {items.map((t, i) => (
        <figure className="testimonial-card" key={i}>
          <blockquote>&laquo;{t.text}&raquo;</blockquote>
          <figcaption>
            <span className="t-name">{t.name}</span>
            <span className="t-meta">{t.meta}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
