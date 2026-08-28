import { Link } from "react-router-dom";
import heroHospital from "../assets/hero-hospital.jpeg";
import Seo from "../components/Seo";

const services = [
  {
    title: "Pre-Auth & Package Identification",
    desc: "Support hospital teams in identifying the right package and assist in pre-authorization.",
  },
  {
    title: "STG / NHA Guideline Compliance",
    desc: "Ensure documentation follows NHA STG guidelines to improve compliance and reduce rejections.",
  },
  {
    title: "Documentation & TMS Management",
    desc: "Accurate, complete and timely documentation with end-to-end TMS management.",
  },
  {
    title: "Enhancement, Discharge & Claim Submission",
    desc: "Timely enhancement, discharge process and error-free claim submission.",
  },
  {
    title: "PPD / CPD Query Handling",
    desc: "Manage queries raised by PPD/CPD and respond within TAT for faster approvals.",
  },
  {
    title: "Claim Review & Deduction Prevention",
    desc: "Pre-claim review, audit readiness and documentation quality checks.",
  },
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
      <Seo title="Home" description="MD Tech Advisor helps hospitals manage Ayushman Bharat PM-JAY and TPA claims operations." />

      {/* ================= HERO ================= */}
      <section className="relative min-h-[620px] md:min-h-[680px] overflow-hidden text-white">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroHospital}
            alt="Hospital operations"
            className="w-full h-full object-cover"
          />

          {/* Main dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061b48]/95 via-[#08285c]/80 to-[#06204a]/35" />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#071f4c] to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-2xl pt-32 md:pt-40 pb-32">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-[2px] bg-accent" />

              <p className="text-accent font-semibold text-sm tracking-wider uppercase">
                Hospital Operations Partner
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight">
              We Manage Operations.
              <br />
              <span className="text-white">You Focus on Care.</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base md:text-lg text-slate-200 leading-relaxed max-w-xl">
              End-to-end PM-JAY and TPA claims support for hospitals —
              better documentation, fewer deductions, faster approvals.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-accent text-white font-semibold hover:bg-orange-600 transition-all duration-200 shadow-lg shadow-orange-900/20"
              >
                Talk to Us
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-md border border-white/50 text-white font-semibold hover:bg-white/10 transition-all duration-200"
              >
                Our Services
              </Link>

            </div>
          </div>
        </div>

        {/* Wave divider */}
<svg
  viewBox="0 0 1440 60"
  className="absolute bottom-0 left-0 z-20 block w-full h-10 md:h-14"
  preserveAspectRatio="none"
  aria-hidden="true"
>
  <path
    d="M0,20 C360,60 1080,-10 1440,25 L1440,60 L0,60 Z"
    fill="#F7F8FA"
  />
</svg>
      </section>


      {/* ================= PM-JAY / TPA ================= */}
      <section className="relative bg-surface-muted pt-0 pb-16 md:pb-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-0 -mt-2 relative z-30">

            {/* PM-JAY */}
            <Link
              to="/pm-jay-operations"
              className="group bg-white border border-slate-200 rounded-l-2xl md:rounded-l-2xl md:rounded-r-none rounded-2xl p-7 md:p-8 
hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-6">

                <div className="w-16 h-16 shrink-0 rounded-xl bg-navy flex items-center justify-center text-white text-2xl">
                  🛡
                </div>

                <div className="flex-1">
                  <p className="text-navy font-bold text-sm uppercase tracking-wide mb-1">
                    Ayushman Bharat PM-JAY
                  </p>

                  <h3 className="text-xl font-bold text-navy mb-2">
                    Operations Support
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    End-to-end PM-JAY transaction management support for
                    hospitals.
                  </p>
                </div>

                <span className="hidden sm:block text-2xl text-navy group-hover:translate-x-1 transition-transform">
                  →
                </span>

              </div>
            </Link>


            {/* TPA */}
            <Link
              to="/tpa-operations"
              className="group bg-white border border-slate-200 rounded-r-2xl md:rounded-r-2xl md:rounded-l-none rounded-2xl p-7 md:p-8 
hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-6">

                <div className="w-16 h-16 shrink-0 rounded-xl bg-accent flex items-center justify-center text-white text-2xl">
                  📄
                </div>

                <div className="flex-1">
                  <p className="text-accent font-bold text-sm uppercase tracking-wide mb-1">
                    Third Party Health Insurance (TPA)
                  </p>

                  <h3 className="text-xl font-bold text-navy mb-2">
                    Operations Support
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    End-to-end TPA & health insurance claim management
                    support for hospitals.
                  </p>
                </div>

                <span className="hidden sm:block text-2xl text-accent group-hover:translate-x-1 transition-transform">
                  →
                </span>

              </div>
            </Link>

          </div>


          {/* ================= SERVICES ================= */}
          <div className="flex items-center justify-between mt-14 mb-8">

            <h2 className="text-2xl md:text-3xl font-bold text-navy">
              Our Services
            </h2>

            <Link
              to="/services"
              className="text-accent font-semibold text-sm hover:underline"
            >
              See all services →
            </Link>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">

            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl border border-slate-200 p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >

                <div className="w-9 h-9 rounded-full bg-navy flex items-center justify-center text-white font-bold mb-5">
                  ✓
                </div>

                <h3 className="font-bold text-navy mb-2 leading-snug">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed">
                  {service.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= WORKFLOW ================= */}
      <section className="bg-[#F7F8FA] py-16 md:py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-10 text-center">
            Our End-to-End Workflow
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">

            {processSteps.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-3"
              >

                <div className="flex items-center gap-3 px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm">

                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-navy font-bold text-sm">      
                    {index + 1}
                  </div>

                  <span className="text-sm font-medium text-navy max-w-[150px]">
                    {step}
                  </span>

                </div>

                {index < processSteps.length - 1 && (
                  <span className="text-accent text-xl font-bold hidden md:block">
                    →
                  </span>
                )}

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-navy text-white py-16 md:py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">

          <div>

            <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">
              Why Us
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Why Hospitals Choose Us
            </h2>

            <ul className="space-y-4 text-slate-300">

              <li>✓ Domain expertise in PM-JAY & TPA</li>
              <li>✓ Process-driven & transparent operations</li>
              <li>✓ Technology-enabled workflows</li>
              <li>✓ Timely support & query resolution</li>
              <li>✓ Focus on compliance & quality</li>

            </ul>

          </div>


          <div>

            <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">
              Our Commitment
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Our Promise
            </h2>

            <ul className="space-y-4 text-slate-300">

              <li>✓ Better documentation</li>
              <li>✓ Better compliance</li>
              <li>✓ Fewer avoidable deductions</li>
              <li>✓ Faster approvals & cash flow</li>
              <li>✓ Dedicated & experienced team</li>

            </ul>

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="py-16 md:py-20 text-center bg-white">

        <div className="max-w-2xl mx-auto px-4">

          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-3">
            Let's Connect
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Let's Work Together
          </h2>

          <p className="text-slate-500 mb-8 leading-relaxed">
            Tell us about your hospital and claims process — we'll take it
            from there.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-md bg-accent text-white font-semibold hover:bg-orange-600 transition-colors"
          >
            Get in Touch
          </Link>

        </div>

      </section>

    </div>
  );
}
