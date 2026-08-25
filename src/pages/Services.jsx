function ServicesHeroIllustration() {
  return (
    <svg
      viewBox="0 0 440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-md h-auto select-none drop-shadow-lg"
      aria-hidden="true"
    >
      {/* Background Soft Glow & Ring */}
      <circle cx="220" cy="160" r="135" fill="#1E3A8A" fillOpacity="0.25" />
      <circle cx="220" cy="160" r="105" stroke="#38BDF8" strokeWidth="1.2" strokeDasharray="4 4" strokeOpacity="0.35" />
      
      {/* Background Floating Accent Dots */}
      <circle cx="70" cy="90" r="5" fill="#F5821F" opacity="0.8" />
      <circle cx="375" cy="230" r="7" fill="#38BDF8" opacity="0.7" />
      <rect x="340" y="65" width="10" height="10" rx="2" fill="#F5821F" opacity="0.6" transform="rotate(15 340 65)" />

      {/* Back Document (Slightly tilted behind) */}
      <g transform="rotate(-6 200 160)">
        <rect x="120" y="50" width="180" height="230" rx="12" fill="#1E293B" fillOpacity="0.75" stroke="#334155" strokeWidth="1.5" />
        <rect x="145" y="80" width="100" height="8" rx="4" fill="#475569" />
        <rect x="145" y="100" width="130" height="6" rx="3" fill="#334155" />
        <rect x="145" y="115" width="110" height="6" rx="3" fill="#334155" />
      </g>

      {/* Main Front Clipboard */}
      <rect x="135" y="45" width="190" height="240" rx="14" fill="#FFFFFF" fillOpacity="0.97" />
      <rect x="135" y="45" width="190" height="240" rx="14" stroke="#E2E8F0" strokeWidth="2" />
      
      {/* Top Metallic Clip */}
      <rect x="195" y="32" width="70" height="24" rx="6" fill="#13294B" />
      <rect x="210" y="38" width="40" height="12" rx="3" fill="#F5821F" />
      <circle cx="230" cy="44" r="2.5" fill="#FFFFFF" />

      {/* Checklist Items */}
      {/* Item 1 - Completed */}
      <g transform="translate(155, 85)">
        <rect x="0" y="0" width="22" height="22" rx="6" fill="#DEF7EC" />
        <path d="M6 11l3.5 3.5 6.5-6.5" stroke="#03543F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="32" y="4" width="110" height="7" rx="3.5" fill="#1E293B" />
        <rect x="32" y="14" width="75" height="5" rx="2.5" fill="#94A3B8" />
      </g>

      {/* Item 2 - Completed */}
      <g transform="translate(155, 125)">
        <rect x="0" y="0" width="22" height="22" rx="6" fill="#DEF7EC" />
        <path d="M6 11l3.5 3.5 6.5-6.5" stroke="#03543F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="32" y="4" width="120" height="7" rx="3.5" fill="#1E293B" />
        <rect x="32" y="14" width="85" height="5" rx="2.5" fill="#94A3B8" />
      </g>

      {/* Item 3 - In Progress */}
      <g transform="translate(155, 165)">
        <rect x="0" y="0" width="22" height="22" rx="6" fill="#E0F2FE" />
        <path d="M6 11l3.5 3.5 6.5-6.5" stroke="#0369A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="32" y="4" width="95" height="7" rx="3.5" fill="#1E293B" />
        <rect x="32" y="14" width="65" height="5" rx="2.5" fill="#94A3B8" />
      </g>

      {/* Item 4 - Pending */}
      <g transform="translate(155, 205)">
        <rect x="0" y="0" width="22" height="22" rx="6" fill="#FEF3C7" />
        <circle cx="11" cy="11" r="3.5" fill="#D97706" />
        <rect x="32" y="4" width="105" height="7" rx="3.5" fill="#1E293B" />
        <rect x="32" y="14" width="50" height="5" rx="2.5" fill="#CBD5E1" />
      </g>

      {/* Hospital / Healthcare Emblem Shield Overlay */}
      <g transform="translate(265, 195)">
        <path
          d="M30 0L58 12V34C58 52 30 64 30 64C30 64 2 52 2 34V12L30 0Z"
          fill="#13294B"
          stroke="#38BDF8"
          strokeWidth="2.5"
        />
        {/* Medical Cross in Accent Orange */}
        <path
          d="M25 22H35V27H40V37H35V42H25V37H20V27H25V22Z"
          fill="#F5821F"
        />
      </g>

      {/* Stylized Pen */}
      <g transform="rotate(-35 240 180) translate(220, 110)">
        <rect x="0" y="0" width="14" height="90" rx="7" fill="#38BDF8" />
        <rect x="0" y="0" width="14" height="20" rx="4" fill="#0284C7" />
        <path d="M0 80L7 95L14 80Z" fill="#F5821F" />
      </g>
    </svg>
  );
}

function IconDocSearch({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path d="M7 3.5h7l4 4V19a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 19V5A1.5 1.5 0 0 1 7 3.5Z" strokeLinejoin="round" />
      <path d="M14 3.5V7a1 1 0 0 0 1 1h3.5" strokeLinejoin="round" />
      <circle cx="10.5" cy="13.5" r="2.25" />
      <path d="M12.3 15.3 14 17" strokeLinecap="round" />
    </svg>
  );
}

function IconChat({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path d="M4 5.5h16v10H9l-4 3.5v-3.5H4v-10Z" strokeLinejoin="round" />
      <path d="M8 9.5h8M8 12.5h5" strokeLinecap="round" />
    </svg>
  );
}

function IconShieldCheck({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path d="M12 3.5 5 6v5.2c0 4.4 3 7.9 7 9.3 4-1.4 7-4.9 7-9.3V6l-7-2.5Z" strokeLinejoin="round" />
      <path d="M9 12.2l2 2 4-4.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconDocCheck({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path d="M7 3.5h7l4 4V19a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 19V5A1.5 1.5 0 0 1 7 3.5Z" strokeLinejoin="round" />
      <path d="M14 3.5V7a1 1 0 0 0 1 1h3.5" strokeLinejoin="round" />
      <path d="M8.5 13.5l2 2 4-4.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconFolder({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path d="M4 7a1.5 1.5 0 0 1 1.5-1.5H10l2 2h6.5A1.5 1.5 0 0 1 20 9v8.5A1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5V7Z" strokeLinejoin="round" />
    </svg>
  );
}

function IconTeam({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <circle cx="9" cy="8.5" r="2.5" />
      <path d="M3.75 19c.5-3 2.6-4.5 5.25-4.5s4.75 1.5 5.25 4.5" strokeLinecap="round" />
      <circle cx="17" cy="9" r="2" />
      <path d="M15 14.7c1.9.2 3.4 1.5 3.9 4.3" strokeLinecap="round" />
    </svg>
  );
}

function IconProcess({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <circle cx="5.5" cy="12" r="2" />
      <circle cx="18.5" cy="6" r="2" />
      <circle cx="18.5" cy="18" r="2" />
      <path d="M7.3 11.2 16.7 6.9M7.3 12.8l9.4 4.3" strokeLinecap="round" />
    </svg>
  );
}

const services = [
  {
    title: "Pre-Auth & Package Identification",
    desc: "Support hospital team in identifying the appropriate package as per guidelines and assist in pre-authorization.",
    Icon: IconDocSearch,
    colorStyle: "bg-blue-50 text-blue-600 border border-blue-100",
  },
  {
    title: "PPD / CPD Query Handling",
    desc: "Manage queries raised by PPD/CPD, respond within TAT and ensure faster approvals.",
    Icon: IconChat,
    colorStyle: "bg-amber-50 text-amber-600 border border-amber-100",
  },
  {
    title: "STG / NHA Guideline Compliance",
    desc: "Ensure documentation as per NHA STG guidelines to improve compliance and reduce rejections.",
    Icon: IconShieldCheck,
    colorStyle: "bg-emerald-50 text-emerald-600 border border-emerald-100",
  },
  {
    title: "Claim Review & Deduction Prevention",
    desc: "Pre-claim review, audit readiness and documentation quality checks to reduce avoidable deductions.",
    Icon: IconDocCheck,
    colorStyle: "bg-indigo-50 text-indigo-600 border border-indigo-100",
  },
  {
    title: "Documentation & TMS Management",
    desc: "Ensure accurate, complete and timely documentation, correct uploads and end-to-end TMS management.",
    Icon: IconFolder,
    colorStyle: "bg-teal-50 text-teal-600 border border-teal-100",
  },
  {
    title: "Hospital Team Training & Continuous Support",
    desc: "Regular training, SOP updates and continuous operational support for hospital teams.",
    Icon: IconTeam,
    colorStyle: "bg-purple-50 text-purple-600 border border-purple-100",
  },
  {
    title: "Enhancement, Discharge & Claim Submission",
    desc: "Timely enhancement, discharge process and error-free claim submission.",
    Icon: IconProcess,
    colorStyle: "bg-rose-50 text-rose-600 border border-rose-100",
  },
];

export default function Services() {
  return (
    <div>
      {/* Premium Navy Hero Section with Clean Healthcare Illustration */}
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="md:col-span-7 lg:col-span-7">
              <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
                What We Do
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                Our Services
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                Complete operational support across PM-JAY and TPA claims — from pre-authorization to final settlement.
              </p>
            </div>

            {/* Right Illustration */}
            <div className="md:col-span-5 lg:col-span-5 hidden md:flex justify-end items-center">
              <ServicesHeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {services.map((s, i) => {
            const isLast = i === services.length - 1;
            return (
              <div
                key={s.title}
                className={`h-full flex flex-col bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-accent/30 transition-all duration-200 ${
                  isLast
                    ? "sm:col-span-2 sm:max-w-sm sm:mx-auto lg:col-span-1 lg:max-w-none lg:col-start-2 lg:mx-0"
                    : ""
                }`}
              >
                {/* Icon Container with Subtle Pastel Accent Background */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 shrink-0 shadow-sm ${s.colorStyle}`}>
                  <s.Icon className="w-6 h-6" aria-hidden="true" />
                </div>

                <h3 className="font-semibold text-navy text-base leading-snug">
                  {s.title}
                </h3>
                <span className="block w-8 h-0.5 bg-accent rounded-full my-3" aria-hidden="true" />

                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}