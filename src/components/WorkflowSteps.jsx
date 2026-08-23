// Numbered step timeline used on PM-JAY and TPA pages.
// Desktop: horizontal connected steps. Mobile: vertical stack with connecting line.
export default function WorkflowSteps({ heading, subtext, steps }) {
  return (
    <section className="py-16 md:py-20 bg-surface-muted">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-navy max-w-2xl">{heading}</h2>
        {subtext && <p className="mt-3 text-slate-500 max-w-2xl">{subtext}</p>}

        {/* Mobile: vertical timeline */}
        <div className="mt-10 md:hidden space-y-0">
          {steps.map((step, i) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center text-xs font-semibold shrink-0">
                  {i + 1}
                </div>
                {i < steps.length - 1 && <div className="w-px flex-1 bg-slate-300 my-1" />}
              </div>
              <div className="pb-6">
                <h3 className="font-semibold text-navy text-sm">{step.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block mt-12">
          <div className="grid grid-cols-7 gap-3">
            {steps.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center text-xs font-semibold shrink-0">
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="h-px flex-1 bg-slate-300 ml-2" />
                  )}
                </div>
                <h3 className="font-semibold text-navy text-xs leading-snug">{step.title}</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
