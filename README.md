# MD Tech Advisor — Website

Marketing website with hospital inquiry funnel for MD Tech Advisor.

## Tech Stack
- React + Vite + Tailwind CSS (frontend)
- React Router (page navigation)
- Node.js + Express (backend — to be added, handles form → Google Sheets + email alert)

## Getting Started

```bash
npm install
npm run dev
```

Site runs at http://localhost:5173

## Build for production

```bash
npm run build
```

## Project Structure

```
src/
  components/   → Navbar, Footer, WhatsAppButton, PageHero
  pages/        → Home, About, PM-JAY Operations, TPA Operations, Services, Contact, Privacy Policy, Terms
```

## Status

- [x] Day 1 — Project scaffold, all 6 pages, routing, branding, deployed skeleton
- [ ] Day 2-3 — Real content pass (once client sends final copy) + logo integration
- [ ] Day 4-5 — Backend: Express API + Google Sheets integration + email alerts
- [ ] Day 6 — SEO (sitemap, robots.txt, GSC, GA4) + legal pages content
- [ ] Day 7-8 — Polish, image optimization, mobile testing
- [ ] Day 9 — Full QA + client review round
- [ ] Day 10 — Domain connect + launch

## Notes

- Brand colors are set in `tailwind.config.js` (navy, accent orange, surface).
- Logo is currently a placeholder (navy circle with "MD") in Navbar/Footer — swap in the
  real logo file (`/src/assets/logo.png` or `.svg`) once added.
- WhatsApp number in `WhatsAppButton.jsx` is a placeholder — confirm before launch.
- Contact form currently mocks submission (no backend yet) — see Day 4-5 in roadmap above.
