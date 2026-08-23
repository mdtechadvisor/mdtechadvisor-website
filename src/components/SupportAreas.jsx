// 2-column grid of support areas, used on PM-JAY and TPA pages.
// Deliberately restrained: subtle numbering, no oversized icons, consistent card heights.
export default function SupportAreas({ heading, subtext, items }) {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-navy max-w-2xl">{heading}</h2>
        {subtext && <p className="mt-3 text-slate-500 max-w-2xl">{subtext}</p>}

        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="border border-slate-200 rounded-lg p-6 bg-white flex flex-col"
            >
              <span className="text-accent font-mono text-xs font-semibold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-semibold text-navy mt-2 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
