import { InsightArticle, EcosystemChannel, CoverageArea, TeamMember } from "@/types";

export const BRAND_INFO = {
  name: "Beat The Street",
  tagline: "Read Business, Not Stock Prices!",
  philosophyShort: "Because understanding the business is often the first step toward understanding the market.",
  philosophyShort: "Because understanding the business is the first step toward understanding the market.",
  foundingYear: "2020",
  location: "Mumbai, Maharashtra, India",
  industry: "Capital Markets & Equity Research",
  email: "contact@beatthestreet.in",
  phone: "+91 9079601862",
  phoneDisplay: "+91 90796 01862",
  website: "https://www.beatthestreet.in/",
  disclaimer: "Information presented on this website is for informational and educational purposes and should not be construed as investment advice.",
  description: "Welcome to Beat The Street - your essential partner in understanding the complexities of the Indian financial market. We specialize in empowering the retail investor by providing in-depth comprehension of businesses and proactively alerting you to potential market risks. Our distinctive methodology integrates forensic scrutiny with exhaustive investigations, delivering a clear, objective, and unbiased perspective on the financial landscape.",
  description: "Independent capital markets research and business insights platform empowering retail investors with forensic clarity and fundamental analysis in Mumbai, India.",
  socials: {
    linkedin: "https://www.linkedin.com/company/beat-the-street10/",
    youtube: "https://www.youtube.com/@BeatTheStreet10",
    x: "https://x.com/BeatTheStreet10",
    telegram: "https://t.me/beatthestreetnews",
    instagram: "https://www.instagram.com/beatthestreet10/",
    substack: "https://substack.com/@beatthestreet10",
    whatsapp: "https://chat.whatsapp.com/GkNlnFP4eWR53HIhD3hxWF",
  }
};

export const COVERAGE_AREAS: CoverageArea[] = [
  {
    id: "business-insights",
    title: "Business Insights",
    shortDesc: "Understand the businesses, industries, and developments shaping the Indian market landscape.",
    shortDesc: "Deconstructing core business models, revenue drivers, and competitive moats in Indian industries.",
    fullDesc: "Deconstructing core business models, revenue drivers, pricing power, and competitive moats across key Indian industries.",
    points: [
      "Industry value chain & moat breakdown",
      "Unit economics and capital allocation review",
      "Macro cycle exposure and sector shifts"
      "Industry value chain & economic moats",
      "Capital allocation & unit economics"
    ],
    tag: "Core Focus",
    iconName: "TrendingUp"
  },
  {
    id: "fundamental-analysis",
    title: "Fundamental Analysis",
    shortDesc: "Look beyond short-term price movements and focus on long-term business fundamentals.",
    shortDesc: "Evaluating balance sheet resilience, operating cash flows, and long-term capital efficiency.",
    fullDesc: "Rigorous scrutiny of financial statements, balance sheet health, working capital cycles, and cash flow generation capabilities.",
    points: [
      "Cash flow & operating earnings quality",
      "Debt profile, interest coverage & solvency",
      "Return on capital employed (ROCE/ROE) trends"
      "Operating cash conversion vs EBITDA",
      "ROCE / ROE trajectory review"
    ],
    tag: "Financial Rigor",
    iconName: "BarChart3"
  },
  {
    id: "forensic-analysis",
    title: "Forensic Analysis",
    shortDesc: "Examine important signals, disclosures, auditor notes, and corporate developments.",
    shortDesc: "Investigating auditor notes, related-party disclosures, and early accounting warning signals.",
    fullDesc: "In-depth investigative scrutiny of annual reports, related-party transactions, auditor qualifications, and accounting red flags.",
    points: [
      "Related party transaction screening",
      "Auditor remarks & note disclosures check",
      "P&L vs Cash Flow divergence alerts"
      "Related-party transaction screening",
      "Auditor remarks & disclosure audits"
    ],
    tag: "Risk Identification",
    iconName: "ShieldAlert"
  },
  {
    id: "market-financial-news",
    title: "Market & Financial News",
    shortDesc: "Stay updated with relevant market developments filtered for signal over noise.",
    shortDesc: "Contextualized macroeconomic shifts, policy developments, and capital flow intelligence.",
    fullDesc: "Curated updates and contextualized commentary on major macroeconomic shifts, policy updates, and institutional capital flows.",
    points: [
      "Contextualized macro updates for India",
      "Regulatory and policy framework changes",
      "Signal-driven daily/weekly syntheses"
      "Signal over noise market syntheses",
      "Regulatory & macro policy alerts"
    ],
    tag: "Signal vs Noise",
    iconName: "Newspaper"
  },
  {
    id: "corporate-announcement-screening",
    title: "Corporate Announcement Screening",
    shortDesc: "Track announcements, board meetings, and regulatory disclosures that matter to investors.",
    title: "Corporate Filings Screening",
    shortDesc: "Continuous surveillance of BSE/NSE filings, concalls, capacity additions, and insider trends.",
    fullDesc: "Continuous screening of exchange filings (BSE/NSE), insider trades, capacity additions, management changes, and quarterly transcripts.",
    points: [
      "Exchange filing screening (BSE & NSE)",
      "Management commentary & concall breakdowns",
      "Capital expenditure & order book tracking"
      "Exchange filings & board announcements",
      "Concall & management commentary checks"
    ],
    tag: "Timely Disclosures",
    iconName: "FileSearch"
  }
];

export const DEMO_INSIGHTS: InsightArticle[] = [
  {
    id: "insight-1",
    title: "Deconstructing Capital Allocation: Working Capital Cycles in Indian Manufacturing",
    slug: "capital-allocation-working-capital-indian-manufacturing",
    title: "Deconstructing Capital Allocation in Indian Manufacturing",
    slug: "capital-allocation-indian-manufacturing",
    category: "Business Deep Dive",
    summary: "How inventory turnover days and receivables management reveal the true operating resilience of mid-tier industrial producers.",
    date: "September 2024",
    readTime: "8 min read",
    author: "Beat The Street Research",
    tags: ["Manufacturing", "Working Capital", "Capital Allocation"],
    summary: "How working capital cycles and inventory turnover reveal true operating resilience.",
    date: "Sep 2024",
    readTime: "6 min read",
    author: "BTS Research",
    tags: ["Manufacturing", "Working Capital"],
    imageUrl: "/images/business-deepdive.jpeg",
    featured: true
  },
  {
    id: "insight-2",
    title: "Forensic Checkpoints: Spotting Divergence Between Reported EBITDA and Operating Cash Flow",
    slug: "forensic-checkpoints-ebitda-cash-flow-divergence",
    title: "Forensic Checkpoints: Spotting EBITDA vs Cash Flow Divergence",
    slug: "forensic-checkpoints-cash-flow-divergence",
    category: "Forensic Analysis",
    summary: "A methodological framework for examining capitalized expenses, unbilled revenues, and cash flow conversion ratios across listed entities.",
    date: "September 2024",
    readTime: "11 min read",
    author: "Beat The Street Research",
    tags: ["Forensics", "Cash Flow", "Accounting"],
    summary: "Framework for spotting capitalized expenses and unbilled revenue red flags.",
    date: "Sep 2024",
    readTime: "8 min read",
    author: "BTS Research",
    tags: ["Forensics", "Cash Flow"],
    imageUrl: "/images/forensic-analysis.jpeg",
    featured: false
  },
  {
    id: "insight-3",
    title: "Decoding Related-Party Disclosures in Corporate Annual Reports",
    slug: "decoding-related-party-disclosures-annual-reports",
    title: "Decoding Related-Party Disclosures in Annual Reports",
    slug: "decoding-related-party-disclosures",
    category: "Corporate Developments",
    summary: "Key indicators to evaluate whether inter-corporate loans and promoter transactions preserve minority shareholder value.",
    date: "August 2024",
    readTime: "7 min read",
    author: "Beat The Street Research",
    tags: ["Governance", "Disclosures", "Annual Reports"],
    summary: "Evaluating promoter loans and transaction transparency for minority shareholders.",
    date: "Aug 2024",
    readTime: "5 min read",
    author: "BTS Research",
    tags: ["Governance", "Disclosures"],
    imageUrl: "/images/corporate-governance.jpeg",
    featured: false
  },
  {
    id: "insight-4",
    title: "Sectoral Moats: Pricing Power and Margin Trajectories in FMCG Distribution",
    slug: "sectoral-moats-pricing-power-fmcg-distribution",
    title: "Pricing Power & Margin Trajectories in FMCG Distribution",
    slug: "pricing-power-fmcg-distribution",
    category: "Fundamental Analysis",
    summary: "Analyzing rural consumption trends, input cost inflation absorption, and the structural durability of traditional general trade networks.",
    date: "August 2024",
    readTime: "9 min read",
    author: "Beat The Street Research",
    tags: ["FMCG", "Distribution", "Pricing Power"],
    summary: "Analyzing input cost absorption and durability across traditional general trade networks.",
    date: "Aug 2024",
    readTime: "7 min read",
    author: "BTS Research",
    tags: ["FMCG", "Pricing Power"],
    imageUrl: "/images/market-insights.jpeg",
    featured: false
  }
];

export const ECOSYSTEM_CHANNELS: EcosystemChannel[] = [
  {
    name: "YouTube",
    handle: "@BeatTheStreet10",
    focus: "Deep Dive & Fundamental Analysis",
    description: "Visual teardowns of corporate balance sheets, sectoral trends, and in-depth business case studies.",
    focus: "Deep Dives & Teardowns",
    description: "Visual teardowns of corporate balance sheets, business moats, and forensic case studies.",
    url: "https://www.youtube.com/@BeatTheStreet10",
    platform: "youtube",
    badge: "Video Dispatches",
    highlightText: "Comprehensive video breakdowns"
    highlightText: "Video analysis"
  },
  {
    name: "Substack",
    handle: "@beatthestreet10",
    focus: "Long-form Business Analysis",
    description: "Detailed written research memos, industry teardowns, and forensic case studies delivered straight to your inbox.",
    focus: "Long-Form Research",
    description: "Detailed written research memos and forensic case studies delivered to your inbox.",
    url: "https://substack.com/@beatthestreet10",
    platform: "substack",
    badge: "Long-form Research",
    highlightText: "Editorial newsletters & memos"
    badge: "Research Memos",
    highlightText: "Editorial newsletters"
  },
  {
    name: "X (Twitter)",
    handle: "@BeatTheStreet10",
    focus: "Forensic Analysis & Announcement Screening",
    description: "Real-time commentary on exchange disclosures, corporate filings, and red-flag highlights as they occur.",
    focus: "Filing Alerts & Disclosures",
    description: "Real-time commentary on BSE/NSE exchange disclosures and corporate red flags.",
    url: "https://x.com/BeatTheStreet10",
    platform: "x",
    badge: "Real-time Filings",
    highlightText: "Filing alerts & forensic notes"
    badge: "Real-Time Feed",
    highlightText: "Instant filing notes"
  },
  {
    name: "Telegram",
    handle: "beatthestreetnews",
    focus: "Automated NewsFeed 24×7",
    description: "Continuous automated stream of critical financial news, exchange releases, and market signals.",
    focus: "24×7 Market NewsFeed",
    description: "Automated continuous stream of market developments, regulatory updates, and releases.",
    url: "https://t.me/beatthestreetnews",
    platform: "telegram",
    badge: "24×7 Feed",
    highlightText: "Instant market notification channel"
    badge: "24×7 Stream",
    highlightText: "Instant notifications"
  },
  {
    name: "WhatsApp Community",
    handle: "Beat The Street Community",
    focus: "News Summary / Community",
    description: "Curated daily executive summaries and an engaged peer group discussing business insights and market developments.",
    focus: "Curated Daily Summaries",
    description: "Executive market summaries and active peer discussion on Indian business models.",
    url: "https://chat.whatsapp.com/GkNlnFP4eWR53HIhD3hxWF",
    platform: "whatsapp",
    badge: "Active Network",
    highlightText: "Direct community discussions"
    badge: "Active Group",
    highlightText: "Community discussions"
  },
  {
    name: "LinkedIn",
    handle: "Beat The Street",
    focus: "Capital Markets & Professional Network",
    description: "Structured perspectives on governance, corporate leadership, and macroeconomic developments.",
    focus: "Capital Markets Perspectives",
    description: "Perspectives on corporate governance, leadership, and Indian macro developments.",
    url: "https://www.linkedin.com/company/beat-the-street10/",
    platform: "linkedin",
    badge: "Network",
    highlightText: "Professional market perspectives"
    badge: "Professional Desk",
    highlightText: "Research network"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "CA Nimish Maheshwari",
    role: "Co-Founder & Research Lead",
    focus: "Equity Research, Business Models & Fundamental Analysis",
    focus: "Equity Research & Fundamental Analysis",
    location: "Mumbai, India",
    bio: "Focused on forensic accounting, capital allocation frameworks, and deconstructing businesses across the Indian market landscape.",
    highlights: ["Fundamental Analysis", "Forensic Accounting", "Capital Markets Research"],
    bio: "Focuses on balance sheet forensics, capital allocation frameworks, and deconstructing business moats.",
    highlights: ["Fundamental Analysis", "Forensics", "Capital Allocation"],
    imageUrl: "/images/founder-nimish.png"
  },
  {
    name: "Sudarshan Bhandari",
    role: "Co-Founder & Market Strategist",
    focus: "Corporate Disclosures, Market Signals & Investor Education",
    focus: "Corporate Screening & Market Intelligence",
    location: "Mumbai, India",
    bio: "Specializing in corporate announcement screening, digital distribution, and empowering investors with unbiased business perspectives.",
    highlights: ["Corporate Screening", "Market Intelligence", "Content & Strategy"],
    bio: "Specializes in corporate announcement screening, disclosure analysis, and investor empowerment.",
    highlights: ["Corporate Screening", "Market Intelligence", "Investor Education"],
    imageUrl: "/images/founder-sudarshan.png"
  }
];

export const MARKET_STRIP_ITEMS = [
  "CAPITAL MARKETS",
  "BUSINESS INSIGHTS",
  "FUNDAMENTAL ANALYSIS",
  "FORENSIC RESEARCH",
  "CORPORATE SCREENING",
  "RETAIL INVESTOR EDUCATION",
  "UNBIASED SCRUTINY",
  "READ BUSINESS, NOT STOCK PRICES"
];

export const PHILOSOPHY_PILLARS = [
  {
    number: "01",
    title: "Business First, Ticker Second",
    description: "A stock is not an abstract lottery ticket; it is fractional ownership in an operating enterprise. We study the cash engine, not the chart pattern."
    description: "A stock represents fractional ownership in an operating business. We study the cash engine, not the chart pattern."
  },
  {
    number: "02",
    title: "Forensic Due Diligence",
    description: "Accounting statements reflect management choices. We comb through notes to accounts, cash conversion, and related-party footnotes to verify reported numbers."
    description: "We audit footnotes, cash conversion, and related-party disclosures to verify the durability of reported numbers."
  },
  {
    number: "03",
    title: "Signal Over Noise",
    description: "In an era of hyperactive news and sensational trading alerts, we provide calm, objective, and rigorous research on what truly moves economic moats."
    description: "In a world of sensational trading hype, we provide calm, objective analysis on what truly drives economic value."
  }
];

