import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3 w-fit">
              <img
                src={logo}
                alt="MD Tech Advisor"
                className="h-9 w-9 rounded-full object-contain"
              />
              <span className="font-bold text-white">
                MD Tech <span className="text-accent">Advisor</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400">
              We Manage Operations. You Focus on Care.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/pm-jay-operations" className="hover:text-white">PM-JAY Operations</Link></li>
              <li><Link to="/tpa-operations" className="hover:text-white">TPA & Insurance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>operations@mdtechadvisor.in</li>
              <li>+91 9250467388</li>
              <li>www.mdtechadvisor.in</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-slate-500 space-y-2">
          <p>
            MD Tech Advisor is an independent healthcare operations support organization.
            We provide operational and administrative support services and are not an
            insurer or IRDAI registered TPA.
          </p>
          <p>© {year} MD Tech Advisor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}