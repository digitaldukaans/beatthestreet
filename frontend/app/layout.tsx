import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BRAND_INFO } from "@/lib/data";

export const viewport: Viewport = {
  themeColor: "#0A192F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${BRAND_INFO.name} | Read Business, Not Stock Prices | Capital Markets Research`,
  description: "Independent equity research and business insights for the Indian capital markets. Focused on fundamental analysis, forensic accounting, and corporate disclosure screening.",
  keywords: [
    "Beat The Street",
    "Indian Capital Markets",
    "Equity Research Mumbai",
    "Fundamental Analysis India",
    "Forensic Accounting",
    "Corporate Filings Screening",
    "Business Insights India",
    "Retail Investor Education",
    "Read Business Not Stock Prices"
  ],
  authors: [{ name: "Beat The Street Research" }],
  creator: "Beat The Street",
  publisher: "Beat The Street",
  metadataBase: new URL(BRAND_INFO.website),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${BRAND_INFO.name} — Read Business, Not Stock Prices`,
    description: "Independent perspectives on businesses, markets and the signals that matter. Mumbai, India.",
    url: BRAND_INFO.website,
    siteName: BRAND_INFO.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-mumbai-capital.jpeg",
        width: 1200,
        height: 630,
        alt: "Beat The Street Capital Markets Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_INFO.name} | Read Business, Not Stock Prices`,
    description: "Independent perspectives on Indian businesses, capital markets, and forensic screening.",
    creator: "@BeatTheStreet10",
    images: ["/images/hero-mumbai-capital.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-white text-slate-900 min-h-screen antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
