// Subtle 3-item strip used below hero content on service pages (PM-JAY, TPA).
// Intentionally lightweight — separators, not cards.
export default function SupportStrip({ items }) {
  return (
    <div className="mt-10 pt-8 border-t border-white/15">
      <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
        {items.map((item, i) => (
          <div key={item.title} className="py-3 sm:py-0 sm:px-6 first:sm:pl-0">
            <span className="text-accent font-mono text-xs font-semibold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-white font-semibold text-sm mt-1">{item.title}</h3>
            <p className="text-slate-400 text-xs mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
