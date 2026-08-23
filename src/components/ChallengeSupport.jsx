// Problem → Support two-column layout, used for "Common Challenges" sections
// on PM-JAY and TPA pages. Deliberately not another card grid.
export default function ChallengeSupport({ heading, subtext, items }) {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-navy max-w-2xl">{heading}</h2>
        {subtext && <p className="mt-3 text-slate-500 max-w-2xl">{subtext}</p>}

        <div className="mt-10 divide-y divide-slate-200 border-t border-b border-slate-200">
          {items.map((item, i) => (
            <div
              key={item.problem}
              className="grid md:grid-cols-2 gap-4 md:gap-10 py-6"
            >
              <div>
                <span className="text-accent font-mono text-xs font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold text-navy mt-1">{item.problem}</h3>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
              </div>
              <div className="md:border-l md:border-slate-200 md:pl-10 flex items-start">
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-1">
                    How we support
                  </p>
                  <p className="text-sm text-navy font-medium">{item.support}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
