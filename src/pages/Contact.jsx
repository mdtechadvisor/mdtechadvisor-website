import { useState } from "react";
import PageHero from "../components/PageHero";

const initialForm = {
  hospitalName: "",
  contactPerson: "",
  designation: "",
  phone: "",
  email: "",
  city: "",
  serviceRequirement: "",
  message: "",
  website: "", // honeypot field — real users never fill this in, bots often do
};

const faqs = [
  {
    q: "How long does it take to see results after onboarding?",
    a: "Most hospitals start seeing improved documentation quality and fewer query rejections within the first few claim cycles after onboarding.",
  },
  {
    q: "Do you handle both PM-JAY and TPA claims, or only one?",
    a: "We support both — Ayushman Bharat PM-JAY operations and Third Party Health Insurance (TPA) claim management — either individually or together, based on your hospital's needs.",
  },
  {
    q: "Will your team work with our existing hospital staff?",
    a: "Yes. We work alongside your existing team, providing training, SOP support, and hands-on documentation/claims support rather than replacing your internal staff.",
  },
  {
    q: "Is there a minimum contract period?",
    a: "This is discussed and finalized during onboarding based on your hospital's specific requirements — reach out and we'll walk you through it.",
  },
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [openFaq, setOpenFaq] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Honeypot check — if this hidden field has a value, silently drop the submission
    if (form.website) {
      setStatus("success");
      return;
    }

    // TODO: replace with real submission to backend (Google Sheets + email alert)
    // once the Express API is wired up in Day 4-5 of the build.
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setForm(initialForm);
    }, 800);
  }

  return (
    <div>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's Talk About Your Hospital's Claims Process"
        subtitle="Fill in your details below and our team will reach out to discuss how we can help."
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-5 gap-12">
        {/* Form */}
        <div className="lg:col-span-3">
          {status === "success" ? (
            <div className="bg-surface-muted border border-slate-200 rounded-xl p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                ✓
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Thank you!</h3>
              <p className="text-slate-500">
                We've received your inquiry and will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot field — hidden from real users via CSS, bots tend to fill it */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={handleChange}
                autoComplete="off"
                tabIndex="-1"
                className="absolute left-[-9999px] opacity-0"
                aria-hidden="true"
              />

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Hospital Name" name="hospitalName" value={form.hospitalName} onChange={handleChange} required />
                <Field label="Contact Person" name="contactPerson" value={form.contactPerson} onChange={handleChange} required />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Designation" name="designation" value={form.designation} onChange={handleChange} />
                <Field label="City" name="city" value={form.city} onChange={handleChange} required />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
                <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Service Requirement <span className="text-accent">*</span>
                </label>
                <select
                  name="serviceRequirement"
                  value={form.serviceRequirement}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
                >
                  <option value="">Select an option</option>
                  <option value="PM-JAY">PM-JAY Operations</option>
                  <option value="TPA">TPA / Health Insurance</option>
                  <option value="Both">Both</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
                  placeholder="Tell us a bit about your hospital's current claims process..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:w-auto px-8 py-3 rounded-md bg-accent text-white font-semibold hover:bg-orange-600 transition-colors disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          )}
        </div>

        {/* Contact details + FAQ */}
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h3 className="text-lg font-bold text-navy mb-4">Contact Details</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>📞 +91 91403 45678</li>
              <li>✉️ operational@mdtechadvisor.in</li>
              <li>🌐 www.mdtechadvisor.in</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-navy mb-4">Frequently Asked Questions</h3>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div key={faq.q} className="border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium text-navy hover:bg-surface-muted"
                  >
                    {faq.q}
                    <span className="text-accent ml-2">{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-3 text-sm text-slate-500">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, value, onChange, type = "text", required = false }) {
  return (
    <div>
      <label className="block text-sm font-medium text-navy mb-1.5">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
      />
    </div>
  );
}
