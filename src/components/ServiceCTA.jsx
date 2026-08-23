import { Link } from "react-router-dom";

// Final CTA section used on PM-JAY and TPA pages.
export default function ServiceCTA({ heading, text, buttonLabel }) {
  return (
    <section className="py-16 md:py-20 text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">{heading}</h2>
        <p className="text-slate-500 mb-8">{text}</p>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 rounded-md bg-accent text-white font-semibold hover:bg-orange-600 transition-colors"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
