import SupportStrip from "./SupportStrip";

// Navy-dominant hero used on service pages (PM-JAY, TPA) — replaces the plain
// PageHero for these two pages specifically, since they need the support strip.
export default function ServiceHero({ eyebrow, heading, subtext, stripItems }) {
  return (
    <section className="bg-navy text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
          {eyebrow}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">{heading}</h1>
        <p className="mt-4 text-slate-300 max-w-2xl text-lg leading-relaxed">
          {subtext}
        </p>
        <SupportStrip items={stripItems} />
      </div>
    </section>
  );
}
