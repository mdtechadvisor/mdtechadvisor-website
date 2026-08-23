import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "PM-JAY Operations", path: "/pm-jay-operations" },
  { name: "TPA & Insurance", path: "/tpa-operations" },
  { name: "Services", path: "/services" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="MD Tech Advisor" className="h-11 w-11 rounded-full object-contain" />
            <span className="font-bold text-navy text-lg leading-tight">
               MD Tech <span className="text-accent">Advisor</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-navy bg-surface-muted"
                      : "text-slate-600 hover:text-navy hover:bg-surface-muted"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center px-4 py-2 rounded-md bg-accent text-white text-sm font-semibold hover:bg-orange-600 transition-colors"
          >
            Let's Talk
          </Link>

          <button
            className="lg:hidden p-2 text-navy"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="lg:hidden pb-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-md ${
                    isActive ? "text-navy bg-surface-muted" : "text-slate-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center items-center px-4 py-2 rounded-md bg-accent text-white text-sm font-semibold"
            >
              Let's Talk
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
