import PageHero from "../components/PageHero";
import Seo from "../components/Seo";

export default function About() {
  return (
    <div>
      <Seo title="About Us" description="Learn about MD Tech Advisor — India's trusted hospital operations partner for PM-JAY & TPA claim management." />

      <PageHero
        eyebrow="About Us"
        title="Your Trusted Partner for Healthcare Operations"
        subtitle="MD Tech Advisor is an independent healthcare operations support organization, helping hospitals manage PM-JAY and TPA claims end-to-end."
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-navy mb-4">Who We Are</h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          {/* PLACEHOLDER — replace with client-provided company story */}
          MD Tech Advisor works with hospitals to manage the operational and administrative
          side of Ayushman Bharat PM-JAY and third-party health insurance (TPA) claims —
          from pre-authorization through to final settlement — so hospital teams can stay
          focused on patient care instead of paperwork.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div>
            <h3 className="text-xl font-bold text-navy mb-4">Our Promise</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Better Documentation</li>
              <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Better Compliance</li>
              <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Fewer Avoidable Deductions</li>
              <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Faster Approvals & Cash Flow</li>
              <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Dedicated & Experienced Team</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-navy mb-4">Why Hospitals Choose Us</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Domain Expertise in PM-JAY & TPA</li>
              <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Process-Driven & Transparent Operations</li>
              <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Technology-Enabled Workflows</li>
              <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Timely Support & Query Resolution</li>
              <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Focus on Compliance & Quality</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
