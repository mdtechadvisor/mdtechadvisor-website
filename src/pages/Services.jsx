import PageHero from "../components/PageHero";

const services = [
  { title: "Pre-Auth & Package Identification", desc: "Support hospital team in identifying the appropriate package as per guidelines and assist in pre-authorization." },
  { title: "PPD / CPD Query Handling", desc: "Manage queries raised by PPD/CPD, respond within TAT and ensure faster approvals." },
  { title: "STG / NHA Guideline Compliance", desc: "Ensure documentation as per NHA STG guidelines to improve compliance and reduce rejections." },
  { title: "Claim Review & Deduction Prevention", desc: "Pre-claim review, audit readiness and documentation quality checks to reduce avoidable deductions." },
  { title: "Documentation & TMS Management", desc: "Ensure accurate, complete and timely documentation, correct uploads and end-to-end TMS management." },
  { title: "Hospital Team Training & Continuous Support", desc: "Regular training, SOP updates and continuous operational support for hospital teams." },
  { title: "Enhancement, Discharge & Claim Submission", desc: "Timely enhancement, discharge process and error-free claim submission." },
];

export default function Services() {
  return (
    <div>
      <PageHero
        eyebrow="What We Do"
        title="Our Services"
        subtitle="Complete operational support across PM-JAY and TPA claims — from pre-authorization to final settlement."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center text-navy font-bold mb-4">
                ✓
              </div>
              <h3 className="font-semibold text-navy mb-2">{s.title}</h3>
              <p className="text-sm text-slate-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
