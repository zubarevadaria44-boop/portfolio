export default function Marquee({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="strip">
      <div className="strip-track">
        {doubled.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
