export default function Pricing({ items }) {
  return (
    <div className="pricing-grid">
      {items.map((p, i) => (
        <div className={`pricing-card ${p.featured ? "featured" : ""}`} key={i}>
          {p.featured && <span className="pricing-badge">Популярный выбор</span>}
          <h4>{p.title}</h4>
          <div className="pricing-price">
            <span className="price-value">{p.price}</span>
            <span className="price-unit">{p.unit}</span>
          </div>
          <ul className="pricing-list">
            {p.features.map((f, j) => (
              <li key={j}>{f}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
