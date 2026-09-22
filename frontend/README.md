# Beat The Street

> **"Read Business, Not Stock Prices!"**  
> Premium, editorial equity-research and business-insights platform for the Indian capital markets.

Built by **Digital Dukaans** as a modern, high-conversion, production-quality frontend experience for **Beat The Street** (Mumbai, India).

---

## 🌟 Brand Highlights & Value Proposition
- **Independent Capital Markets Perspective**: Deep-dive business research, forensic analysis, fundamental breakdowns, and corporate announcement screening.
- **Retail Investor Empowerment**: Delivering objective, forensic clarity on Indian companies without the speculative noise.
- **Editorial Sophistication**: Bloomberg / FT-inspired aesthetic crafted with deep navy hues, hairline financial borders, and typography.

---

## 🛠 Tech Stack
- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Vercel free-tier compatible (100% static & serverless ready, zero database or API requirements)

---

## 📁 Project Structure

```
beatthestreet/
├── app/                  # Next.js App Router pages, layout, and global styles
│   ├── globals.css       # Custom styles, ticker animations, editorial typography
│   ├── layout.tsx        # SEO meta tags, fonts, structured schema
│   └── page.tsx          # Homepage combining all modular sections
├── components/           # Reusable UI components & section blocks
│   ├── Navbar.tsx        # Sticky/compact navigation with mobile drawer
│   ├── Hero.tsx          # Editorial hero with capital-market visual details
│   ├── BrandStrip.tsx    # Clean horizontal institutional value strip
│   ├── IntroSection.tsx  # Core mission & business-behind-the-price narrative
│   ├── CoverageGrid.tsx  # Interactive 5-pillar research coverage cards
│   ├── PhilosophySection.tsx # Signature "Read Business, Not Stock Prices" canvas
│   ├── InsightsPreview.tsx # Editorial research dispatches with category filters
│   ├── Ecosystem.tsx     # Connected media ecosystem (YouTube, Substack, X, TG, WA)
│   ├── TeamSection.tsx   # Co-founders & analysts profile section
│   ├── CTASection.tsx    # Conversion strip for community & insight discovery
│   ├── Footer.tsx        # Structured footer with disclaimer & channels
│   └── ui/               # Modular buttons, badges, modals, and card wrappers
├── public/
│   └── images/           # High-resolution optimized local assets
├── backend/              # Placeholder for future API/CMS development
│   └── README.md
├── lib/
│   ├── data.ts           # Centralized data model & verified brand information
│   └── utils.ts          # Utility functions
├── types/
│   └── index.ts          # Strict TypeScript interfaces
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Quickstart Guide

### 1. Prerequisites
- Node.js 18.17+ or 20+
- npm, yarn, or pnpm

### 2. Installation
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build & Test
```bash
npm run build
npm run start
```

---

## ☁️ Deploying to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Framework Preset: **Next.js**
4. Build Command: `npm run build`
5. Output Directory: `.next` (default)
6. Click **Deploy**. The site deploys with zero configuration and zero environment variables needed.

---

## 🖼 Image Management & Replacement
- All site images reside in `public/images/`.
- To update or replace hero or editorial images, add new `.jpeg` or `.png` files into `public/images/` and update references in `lib/data.ts`.
- All images are statically referenced and optimized for fast LCP and mobile responsiveness.

---

## 🔌 Future Backend Integration
When ready to connect live APIs or a CMS:
1. Use the `backend/` directory for microservice workers or serverless API routes.
2. Connect CMS webhooks or feeds into `app/api/insights/` for automatic Substack / YouTube feed syndication.
3. Hook newsletter subscription forms to your preferred provider (Substack, ConvertKit, Mailchimp) directly in `components/ui/NewsletterModal.tsx`.

---

## ⚖️ Compliance & Disclaimer
Information presented on this platform is for educational and informational purposes only and does not constitute investment advice.

