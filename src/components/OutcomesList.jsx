// Lighter "what the hospital gains" list — numbered rows, not another card grid.
export default function OutcomesList({ heading, subtext, items }) {
  return (
    <section className="py-16 md:py-20 bg-surface-muted">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-navy max-w-2xl">{heading}</h2>
        {subtext && <p className="mt-3 text-slate-500 max-w-2xl">{subtext}</p>}

        <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-6">
          {items.map((item, i) => (
            <div key={item.title} className="flex gap-4">
              <span className="text-accent font-mono text-xs font-semibold pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-semibold text-navy text-sm">{item.title}</h3>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
