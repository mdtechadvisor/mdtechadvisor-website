import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white">
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." />
      <div className="text-center px-4 py-20">
        <p className="text-accent font-bold text-sm tracking-wide uppercase mb-3">Error 404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">Page Not Found</h1>
        <p className="text-slate-500 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 rounded-md bg-accent text-white font-semibold hover:bg-orange-600 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}