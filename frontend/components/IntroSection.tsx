import React from "react";
import Image from "next/image";
import { Search, AlertOctagon, TrendingUp } from "lucide-react";
import { BRAND_INFO } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";

export function IntroSection() {
  return (
    <section id="about-intro" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            
            <Badge variant="blue" className="mb-3">
              Core Mandate
            </Badge>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-5 leading-tight">
              Understand the business <br className="hidden sm:inline" />
              <span className="italic text-blue-600 font-normal">behind the price.</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal mb-8">
              {BRAND_INFO.name} deconstructs balance sheets, disclosures, and economic moats across Indian listed companies—filtering out market noise to empower retail investors with objective forensic clarity.
            </p>

            {/* 3 Core Tenets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-slate-200">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-sm hover:border-blue-400 transition-colors">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Search className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">Forensics</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Auditing disclosures, auditor remarks & related-party transactions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-sm hover:border-emerald-400 transition-colors">
                <div className="flex items-center gap-2 text-emerald-600 mb-2">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">Fundamentals</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Analyzing cash flow durability, ROCE trends & pricing moats.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-sm hover:border-amber-400 transition-colors">
                <div className="flex items-center gap-2 text-amber-600 mb-2">
                  <AlertOctagon className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">Risk Alerts</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Proactive detection of balance sheet stress and governance risks.
                </p>
              </div>
            </div>

          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl">
              <div className="relative h-[280px] sm:h-[360px] w-full">
                <Image
                  src="/images/intro-research-desk.jpeg"
                  alt="Beat The Street Equity Research Desk"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center filter contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061224]/80 via-transparent to-transparent" />
              </div>

              {/* Bottom Quote inside Image Card */}
              <div className="p-5 bg-brand-navy-900 text-white border-t border-brand-navy-800">
                <p className="font-serif italic text-slate-100 text-sm sm:text-base leading-snug">
                  &ldquo;A stock price is a momentary opinion. The balance sheet and competitive moat are durable realities.&rdquo;
                </p>
                <span className="text-[11px] font-mono text-blue-400 mt-2 block tracking-wider uppercase font-medium">
                  Beat The Street Creed
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}