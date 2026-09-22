import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ShieldAlert } from "lucide-react";
import { BRAND_INFO } from "@/lib/data";
import { YouTubeIcon, XIcon, TelegramIcon, WhatsAppIcon, LinkedInIcon, InstagramIcon, SubstackIcon } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-surface border-t border-surface-border text-foreground-muted">
      
      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand & Philosophy Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-serif font-bold text-sm">
                BS
              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-foreground">
                {BRAND_INFO.name.toUpperCase()}
              </span>
            </div>

            <p className="font-serif text-lg italic text-emerald-600 dark:text-emerald-400 font-medium">
              &ldquo;{BRAND_INFO.tagline}&rdquo;
            </p>

            <p className="text-sm text-foreground-muted font-light leading-relaxed max-w-md">
              Independent capital markets research and business insights platform empowering retail investors with forensic clarity and fundamental analysis in Mumbai, India.
            </p>

            {/* Direct Contact Info */}
            <div className="space-y-2 pt-2 text-xs font-mono">
              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="flex items-center gap-2.5 text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{BRAND_INFO.email}</span>
              </a>

              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="flex items-center gap-2.5 text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{BRAND_INFO.phoneDisplay}</span>
              </a>

              <div className="flex items-center gap-2.5 text-foreground-muted">
                <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{BRAND_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-foreground">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Insights & Case Studies
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Research Disciplines
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Signature Creed
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Content Ecosystem
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  About & Team
                </a>
              </li>
            </ul>
          </div>

          {/* Connected Channels */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-foreground">
              Official Channels
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={BRAND_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-card border border-surface-border hover:border-slate-400 dark:hover:border-slate-700 hover:text-foreground transition-colors shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href={BRAND_INFO.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-card border border-surface-border hover:border-slate-400 dark:hover:border-slate-700 hover:text-foreground transition-colors shadow-sm"
              >
                <TelegramIcon className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>Telegram</span>
              </a>

              <a
                href={BRAND_INFO.socials.substack}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-card border border-surface-border hover:border-slate-400 dark:hover:border-slate-700 hover:text-foreground transition-colors shadow-sm"
              >
                <SubstackIcon className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Substack</span>
              </a>

              <a
                href={BRAND_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-card border border-surface-border hover:border-slate-400 dark:hover:border-slate-700 hover:text-foreground transition-colors shadow-sm"
              >
                <YouTubeIcon className="w-4 h-4 text-red-500 dark:text-red-400" />
                <span>YouTube</span>
              </a>

              <a
                href={BRAND_INFO.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-card border border-surface-border hover:border-slate-400 dark:hover:border-slate-700 hover:text-foreground transition-colors shadow-sm"
              >
                <XIcon className="w-4 h-4 text-slate-800 dark:text-sky-400" />
                <span>X (Twitter)</span>
              </a>

              <a
                href={BRAND_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-card border border-surface-border hover:border-slate-400 dark:hover:border-slate-700 hover:text-foreground transition-colors shadow-sm"
              >
                <LinkedInIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={BRAND_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-card border border-surface-border hover:border-slate-400 dark:hover:border-slate-700 hover:text-foreground transition-colors col-span-2 shadow-sm"
              >
                <InstagramIcon className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                <span>Instagram (@beatthestreet10)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Regulatory & Educational Disclaimer Area */}
        <div className="mt-12 pt-8 border-t border-surface-border">
          <div className="p-4 sm:p-5 rounded-xl bg-surface-card border border-surface-border flex items-start gap-3 shadow-sm">
            <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-foreground-muted leading-relaxed space-y-1 font-light">
              <span className="font-semibold text-foreground block">
                Educational & Research Disclaimer
              </span>
              <p>
                {BRAND_INFO.disclaimer}
              </p>
              <p className="text-[11px]">
                Beat The Street is an independent capital markets educational and research platform based in Mumbai, Maharashtra, India.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Rights & Attribution Strip */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-foreground-muted">
          <div>
            © {currentYear} {BRAND_INFO.name}. All rights reserved. Founded 2020.
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <span>Mumbai, Maharashtra</span>
            <span className="text-surface-border">•</span>
            <a
              href="https://www.digitaldukaans.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-emerald-600 dark:hover:text-emerald-400 underline underline-offset-4 decoration-surface-border hover:decoration-emerald-500 transition-all inline-flex items-center gap-1 font-medium"
            >
              <span>Client Demo by Digital Dukaans</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}