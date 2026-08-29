// src/components/TeamSection.jsx
import { useState } from "react";

function getInitials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TeamCard({ member, index }) {
  return (
    <div className="relative w-52 sm:w-60 h-72 sm:h-80 shrink-0 rounded-2xl overflow-hidden shadow-md group">
      {/* number badge */}
      <span className="absolute top-3 left-3 z-10 w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-mono font-bold flex items-center justify-center">
        {String(index + 1).padStart(2, "0")}
      </span>

      {member.photo ? (
        <>
          <img
            src={member.photo}
            alt={member.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-semibold text-sm">{member.name}</h3>
            <p className="text-white/80 text-xs mt-0.5">{member.role}</p>
          </div>
        </>
      ) : (
        <div className="absolute inset-0 bg-navy flex flex-col items-center justify-center p-4 text-center">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white text-xl font-bold mb-3">
            {getInitials(member.name)}
          </div>
          <h3 className="text-white font-semibold text-sm">{member.name}</h3>
          <p className="text-accent text-xs mt-0.5">{member.role}</p>
        </div>
      )}
    </div>
  );
}

export default function TeamSection({ heading = "Meet Our Team", subtext, members = [] }) {
  const [showAll, setShowAll] = useState(false);

  if (members.length === 0) return null; // koi data nahi toh section hi nahi dikhega

  const looped = [...members, ...members]; // seamless loop ke liye duplicate

  return (
    <section className="py-16 md:py-20 bg-surface-muted overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy">{heading}</h2>
            {subtext && <p className="mt-3 text-slate-500 max-w-xl">{subtext}</p>}
          </div>
          <button
            onClick={() => setShowAll((v) => !v)}
            className="shrink-0 text-accent font-semibold text-sm hover:underline whitespace-nowrap"
          >
            {showAll ? "Show Less" : "View All →"}
          </button>
        </div>
      </div>

      {showAll ? (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* flex-wrap + justify-center = last incomplete row auto-centers,
              chahe 1 bache, 2 bachein, ya 3 — koi hardcoded column math nahi */}
          <div className="flex flex-wrap justify-center gap-6">
            {members.map((m, i) => (
              <TeamCard member={m} index={i} key={m.name} />
            ))}
          </div>
        </div>
      ) : (
        <div className="overflow-hidden">
          <div className="flex gap-6 w-max animate-marquee-left">
            {looped.map((m, i) => (
              <TeamCard member={m} index={i % members.length} key={`${m.name}-${i}`} />
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee-left { animation: marquee-left 40s linear infinite; }
        .animate-marquee-left:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-left { animation: none; }
        }
      `}</style>
    </section>
  );
}