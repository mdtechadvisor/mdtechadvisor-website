export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {eyebrow && (
          <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-slate-300 max-w-2xl text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
