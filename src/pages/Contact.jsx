import { useState } from "react";
import Seo from "../components/Seo";

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

const highlights = [
  { icon: "🛡️", title: "Experts in PM-JAY & TPA Operations" },
  { icon: "📄", title: "End-to-end Claim Management Support" },
  { icon: "👥", title: "Trusted by Hospitals Across India" },
];

const trustBadges = [
  { icon: "🔒", label: "Secure & Confidential" },
  { icon: "⏱️", label: "Quick Response" },
  { icon: "👥", label: "Expert Support" },
  { icon: "🛡️", label: "Trusted by Hospitals" },
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [apiError, setApiError] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  function validateField(name, value) {
    let errorMsg = "";
    if (name === "hospitalName" && !value.trim()) {
      errorMsg = "Hospital name is required.";
    } else if (name === "contactPerson" && !value.trim()) {
      errorMsg = "Contact person name is required.";
    } else if (name === "city" && !value.trim()) {
      errorMsg = "City is required.";
    } else if (name === "serviceRequirement" && !value) {
      errorMsg = "Please select a service requirement.";
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        errorMsg = "Email address is required.";
      } else if (!emailRegex.test(value.trim())) {
        errorMsg = "Please enter a valid email address, e.g. name@example.com";
      }
    } else if (name === "phone") {
      const cleanPhone = value.replace(/\D/g, "");
      if (!value.trim()) {
        errorMsg = "Phone number is required.";
      } else if (cleanPhone.length !== 10 || !/^[6-9]/.test(cleanPhone)) {
        errorMsg = "Please enter a valid 10-digit mobile number.";
      }
    }
    return errorMsg;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (apiError) setApiError("");

    if (errors[name]) {
      const errorMsg = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  }

  function validateAll() {
    const newErrors = {};
    const requiredFields = ["hospitalName", "contactPerson", "city", "phone", "email", "serviceRequirement"];

    requiredFields.forEach((field) => {
      const err = validateField(field, form[field]);
      if (err) newErrors[field] = err;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setApiError("");

    // Honeypot check — silently drop bots
    if (form.website) {
      setStatus("success");
      return;
    }

    // Frontend validation check
    if (!validateAll()) {
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      let data = {};
      try {
        data = await res.json();
      } catch (parseErr) {
        // Non-JSON response (e.g. 500 server HTML error)
      }

      if (!res.ok || !data.success) {
        const serverMessage = data.message || "We couldn't submit your inquiry right now. Please try again in a moment or contact us directly via WhatsApp or phone.";
        setApiError(serverMessage);
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      console.error("Form submission failed:", error.message);
      setApiError("We couldn't submit your inquiry right now. Please try again in a moment or contact us directly via WhatsApp or phone.");
      setStatus("error");
    }
  }

  return (
    <div>
      <Seo
        title="Contact Us"
        description="Contact MD Tech Advisor for PM-JAY and TPA operational consulting."
      />
      <section className="bg-surface-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          {status === "success" ? (
            <ThankYouPanel />
          ) : (
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: copy + highlights */}
              <div className="lg:pt-6">
                <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
                  Let's Talk
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-navy leading-tight mb-4">
                  We're here to help your hospital focus on care.
                </h1>
                <div className="w-14 h-1 bg-accent rounded-full mb-5" />
                <p className="text-slate-600 max-w-md mb-10">
                  Tell us about your requirements and our team will get in touch with you
                  shortly to explore how we can support you.
                </p>

                <div className="space-y-6">
                  {highlights.map((h) => (
                    <div key={h.title} className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-full bg-navy/10 flex items-center justify-center text-lg shrink-0">
                        {h.icon}
                      </div>
                      <p className="font-medium text-navy">{h.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: form card */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-navy mb-1">Share Your Requirements</h2>
                <p className="text-sm text-slate-500 mb-6">
                  Please fill in the details below and we will connect with you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Honeypot field */}
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
                    <Field
                      label="Hospital Name"
                      name="hospitalName"
                      value={form.hospitalName}
                      onChange={handleChange}
                      placeholder="e.g. City Care Hospital"
                      error={errors.hospitalName}
                      required
                    />
                    <Field
                      label="Contact Person"
                      name="contactPerson"
                      value={form.contactPerson}
                      onChange={handleChange}
                      placeholder="e.g. Dr. A. K. Sharma"
                      error={errors.contactPerson}
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="Designation"
                      name="designation"
                      value={form.designation}
                      onChange={handleChange}
                      placeholder="e.g. Medical Superintendent / Owner"
                    />
                    <Field
                      label="City"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="e.g. Lucknow"
                      error={errors.city}
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      error={errors.phone}
                      required
                    />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      error={errors.email}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">
                      Service Requirement <span className="text-accent">*</span>
                    </label>
                    <select
                      name="serviceRequirement"
                      value={form.serviceRequirement}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-md border text-navy focus:outline-none transition-colors ${
                        errors.serviceRequirement
                          ? "border-red-500 focus:ring-2 focus:ring-red-200 focus:border-red-500"
                          : "border-slate-300 focus:ring-2 focus:ring-accent/40 focus:border-accent"
                      }`}
                    >
                      <option value="">Select an option</option>
                      <option value="PM-JAY">PM-JAY Operations</option>
                      <option value="TPA">TPA / Health Insurance</option>
                      <option value="Both">Both</option>
                    </select>
                    {errors.serviceRequirement && (
                      <p className="text-xs text-red-600 mt-1.5">{errors.serviceRequirement}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">Message (Optional)</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
                      placeholder="Tell us a bit about your hospital's current claims process..."
                    />
                  </div>

                  {/* Single Clean API Error Banner */}
                  {status === "error" && apiError && (
                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-md">
                      <p className="text-sm text-red-600 font-medium">{apiError}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full px-8 py-3 rounded-md bg-accent text-white font-semibold hover:bg-orange-600 transition-colors disabled:opacity-60"
                  >
                    {status === "submitting" ? "Sending..." : "Submit Inquiry"}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">
            Frequently Asked Questions
          </h2>
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
      </section>
    </div>
  );
}

function ThankYouPanel() {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-100 p-8 sm:p-12 text-center">
      <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-5 text-2xl font-bold">
        ✓
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-navy mb-1">Thank You!</h3>
      <p className="text-accent font-semibold mb-3">Your inquiry has been received.</p>
      <p className="text-slate-600 max-w-md mx-auto">
        Thank you for contacting MD Tech Advisor. We have received your inquiry and will get back to you shortly.
      </p>

      <div className="mt-8 pt-8 border-t border-slate-200">
        <p className="font-semibold text-navy mb-1">Need to reach us directly?</p>
        <p className="text-sm text-slate-500 mb-5">You can also connect with us through:</p>

        <div className="grid sm:grid-cols-3 gap-3">
          <a
            href="https://wa.me/919250467388"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 px-4 py-5 rounded-xl border border-accent/40 hover:bg-accent/5 transition-colors"
          >
            <span className="text-2xl">💬</span>
            <span className="font-medium text-navy text-sm">WhatsApp</span>
            <span className="text-xs text-slate-500">Chat with us</span>
          </a>
          <a
            href="tel:+919250467388"
            className="flex flex-col items-center gap-2 px-4 py-5 rounded-xl border border-navy/30 hover:bg-navy/5 transition-colors"
          >
            <span className="text-2xl">📞</span>
            <span className="font-medium text-navy text-sm">Call Us</span>
            <span className="text-xs text-slate-500">+91 9250467388</span>
          </a>
          <a
            href="mailto:operations@mdtechadvisor.in"
            className="flex flex-col items-center gap-2 px-4 py-5 rounded-xl border border-slate-300 hover:bg-surface-muted transition-colors"
          >
            <span className="text-2xl">✉️</span>
            <span className="font-medium text-navy text-sm">Email Us</span>
            <span className="text-xs text-slate-500 break-all">operations@mdtechadvisor.in</span>
          </a>
        </div>
      </div>

      <p className="mt-8 text-sm text-slate-500">
        🎧 We're here to help you. Let's make healthcare operations seamless, together.
      </p>

      <div className="mt-6 pt-6 border-t border-slate-200 flex flex-wrap justify-center gap-x-6 gap-y-2">
        {trustBadges.map((b) => (
          <span key={b.label} className="text-xs text-slate-500 flex items-center gap-1.5">
            <span>{b.icon}</span> {b.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function Field({ label, name, value, onChange, type = "text", required = false, placeholder = "", error = "" }) {
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
        placeholder={placeholder}
        className={`w-full px-4 py-2.5 rounded-md border text-navy transition-colors focus:outline-none ${
          error
            ? "border-red-500 focus:ring-2 focus:ring-red-200 focus:border-red-500"
            : "border-slate-300 focus:ring-2 focus:ring-accent/40 focus:border-accent"
        }`}
      />
      {error && <p className="text-xs text-red-600 mt-1.5">{error}</p>}
    </div>
  );
}