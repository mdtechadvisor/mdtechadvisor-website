import PageHero from "../components/PageHero";

export default function PrivacyPolicy() {
  return (
    <div>
      <PageHero title="Privacy Policy" />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-slate-600 leading-relaxed space-y-4">
        {/* TODO: replace with finalized policy text — template-based placeholder for now */}
        <p>
          This Privacy Policy describes how MD Tech Advisor collects, uses, and protects
          information submitted through this website, including hospital inquiry
          details submitted via our contact form.
        </p>
        <p>
          Information collected (hospital name, contact person, phone, email, city, and
          service requirement) is used solely to respond to inquiries and is not sold or
          shared with third parties outside of what's necessary to provide our services.
        </p>
        <p>
          This is placeholder content — final policy text should be reviewed and approved
          by MD Tech Advisor, ideally with legal input, before launch.
        </p>
      </section>
    </div>
  );
}
