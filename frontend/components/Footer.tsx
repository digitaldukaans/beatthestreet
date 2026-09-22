import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ShieldAlert, ExternalLink } from "lucide-react";
import { BRAND_INFO } from "@/lib/data";
import { YouTubeIcon, XIcon, TelegramIcon, WhatsAppIcon, LinkedInIcon, InstagramIcon, SubstackIcon } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#061224] border-t border-slate-800 text-slate-400">
      
      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand & Philosophy Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shadow-md">
                <Image
                  src="/images/logo.png"
                  alt="Beat The Street Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-wider text-white block">
                  {BRAND_INFO.name.toUpperCase()}
                </span>
                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">
                  Capital Markets Research · Mumbai
                </span>
              </div>
            </div>

            <p className="font-serif text-base italic text-blue-300 font-medium">
              &ldquo;{BRAND_INFO.tagline}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed max-w-md">
              Independent capital markets research and business insights platform empowering retail investors with forensic clarity and fundamental analysis in Mumbai, India.
            </p>

            {/* Direct Contact Info */}
            <div className="space-y-2 pt-2 text-xs font-mono">
              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{BRAND_INFO.email}</span>
              </a>

              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{BRAND_INFO.phoneDisplay}</span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{BRAND_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-blue-400 transition-colors">
                  Insights & Case Studies
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-blue-400 transition-colors">
                  Research Disciplines
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-blue-400 transition-colors">
                  Signature Philosophy
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-blue-400 transition-colors">
                  Media Ecosystem
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About & Leadership
                </a>
              </li>
            </ul>
          </div>

          {/* Connected Channels */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-200">
              Official Channels
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={BRAND_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:text-white transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href={BRAND_INFO.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:text-white transition-colors"
              >
                <TelegramIcon className="w-4 h-4 text-sky-400" />
                <span>Telegram</span>
              </a>

              <a
                href={BRAND_INFO.socials.substack}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:text-white transition-colors"
              >
                <SubstackIcon className="w-4 h-4 text-amber-400" />
                <span>Substack</span>
              </a>

              <a
                href={BRAND_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:text-white transition-colors"
              >
                <YouTubeIcon className="w-4 h-4 text-red-400" />
                <span>YouTube</span>
              </a>

              <a
                href={BRAND_INFO.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:text-white transition-colors"
              >
                <XIcon className="w-4 h-4 text-slate-300" />
                <span>X (Twitter)</span>
              </a>

              <a
                href={BRAND_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:text-white transition-colors"
              >
                <LinkedInIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={BRAND_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:text-white transition-colors col-span-2"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" />
                <span>Instagram (@beatthestreet10)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Regulatory & Educational Disclaimer Area */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-400 leading-relaxed space-y-1 font-light">
              <span className="font-semibold text-slate-200 block">
                Educational & Research Disclaimer
              </span>
              <p>
                {BRAND_INFO.disclaimer}
              </p>
              <p className="text-[11px] text-slate-400">
                Beat The Street is an independent capital markets research and business insights platform based in Mumbai, Maharashtra, India.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Rights & Client Demo Attribution Strip */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 pt-6 border-t border-slate-800/80">
          <div>
            © {currentYear} {BRAND_INFO.name}. All rights reserved. Founded {BRAND_INFO.foundingYear}.
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <span>Mumbai, Maharashtra</span>
            <span className="text-slate-700">·</span>
            <a
              href="https://www.digitaldukaans.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-sans font-medium flex items-center gap-1 underline underline-offset-4 decoration-blue-500/40 hover:decoration-blue-400 transition-all"
            >
              <span>Client Demo by Digital Dukaans</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}