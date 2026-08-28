import { useEffect } from "react";

export default function Seo({ title, description }) {
  const defaultTitle = "MD Tech Advisor — Hospital Operations Partner | PM-JAY & TPA Support";
  const defaultDescription = "MD Tech Advisor provides end-to-end PM-JAY and TPA claims operations support for hospitals across India — better compliance, fewer deductions, faster settlements.";

  useEffect(() => {
    // Dynamic document title update
    document.title = title ? `${title} | MD Tech Advisor` : defaultTitle;

    // Dynamic meta description update
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description || defaultDescription);
  }, [title, description]);

  return null;
}