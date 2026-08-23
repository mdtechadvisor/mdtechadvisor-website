import { Link } from "react-router-dom";

const services = [
  { title: "Pre-Auth & Package Identification", desc: "Support hospital teams in identifying the right package and assist in pre-authorization." },
  { title: "STG / NHA Guideline Compliance", desc: "Ensure documentation follows NHA STG guidelines to improve compliance and reduce rejections." },
  { title: "Documentation & TMS Management", desc: "Accurate, complete and timely documentation with end-to-end TMS management." },
  { title: "Enhancement, Discharge & Claim Submission", desc: "Timely enhancement, discharge process and error-free claim submission." },
  { title: "PPD / CPD Query Handling", desc: "Manage queries raised by PPD/CPD and respond within TAT for faster approvals." },
  { title: "Claim Review & Deduction Prevention", desc: "Pre-claim review, audit readiness and documentation quality checks." },
];

const processSteps = [
  "Patient Admission",
  "Package Identification & Pre-auth",
  "Documentation & TMS",
  "Enhancement & Discharge",
  "Claim Submission",
  "Query Handling",
  "Claim Settlement",
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
              Hospital Operations Partner
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              We Manage Operations.<br />You Focus on Care.
            </h1>
            <p className="mt-5 text-slate-300 text-lg max-w-lg">
              End-to-end PM-JAY and TPA claims support for hospitals — better documentation,
              fewer deductions, faster approvals.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="px-6 py-3 rounded-md bg-accent text-white font-semibold hover:bg-orange-600 transition-colors">
                Talk to Us
              </Link>
              <Link to="/services" className="px-6 py-3 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">
                Our Services
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="aspect-square rounded-2xl bg-white/5 border border-white/10" />
          </div>
        </div>
      </section>

      {/* PM-JAY / TPA highlight */}
      <section className="grid md:grid-cols-2">
        <Link to="/pm-jay-operations" className="bg-navy hover:bg-navy-dark transition-colors p-10 md:p-14 text-white group">
          <p className="text-accent font-semibold text-sm uppercase mb-2">Ayushman Bharat PM-JAY</p>
          <h3 className="text-2xl font-bold mb-3">Operations Support</h3>
          <p className="text-slate-300">End-to-end PM-JAY transaction management support for hospitals.</p>
          <span className="inline-block mt-4 text-accent font-medium group-hover:underline">Learn more →</span>
        </Link>
        <Link to="/tpa-operations" className="bg-accent hover:bg-orange-600 transition-colors p-10 md:p-14 text-white group">
          <p className="font-semibold text-sm uppercase mb-2 text-white/90">Third Party Health Insurance (TPA)</p>
          <h3 className="text-2xl font-bold mb-3">Operations Support</h3>
          <p className="text-white/90">End-to-end TPA & health insurance claim management support for hospitals.</p>
          <span className="inline-block mt-4 font-medium group-hover:underline">Learn more →</span>
        </Link>
      </section>

      {/* Services preview */}
      <section className="bg-surface-muted py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-navy">Our Services</h2>
            <Link to="/services" className="text-accent font-semibold text-sm hover:underline">See all →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="font-semibold text-navy mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process glimpse */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-10 text-center">
            Our End-to-End Workflow
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {processSteps.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <div className="px-4 py-3 rounded-lg bg-surface-muted border border-slate-200 text-sm font-medium text-navy text-center">
                  {step}
                </div>
                {i < processSteps.length - 1 && (
                  <span className="text-accent font-bold hidden sm:inline">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-5">Why Hospitals Choose Us</h2>
            <ul className="space-y-3 text-slate-300">
              <li>✓ Domain expertise in PM-JAY & TPA</li>
              <li>✓ Process-driven & transparent operations</li>
              <li>✓ Technology-enabled workflows</li>
              <li>✓ Timely support & query resolution</li>
              <li>✓ Focus on compliance & quality</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-5">Our Promise</h2>
            <ul className="space-y-3 text-slate-300">
              <li>✓ Better documentation</li>
              <li>✓ Better compliance</li>
              <li>✓ Fewer avoidable deductions</li>
              <li>✓ Faster approvals & cash flow</li>
              <li>✓ Dedicated & experienced team</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Let's Work Together</h2>
          <p className="text-slate-500 mb-8">
            Tell us about your hospital and claims process — we'll take it from there.
          </p>
          <Link to="/contact" className="inline-block px-8 py-3 rounded-md bg-accent text-white font-semibold hover:bg-orange-600 transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
