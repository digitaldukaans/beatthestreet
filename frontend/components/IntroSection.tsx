import React from "react";
import Image from "next/image";
import { Search, AlertOctagon, TrendingUp, ShieldCheck } from "lucide-react";
import { Search, AlertOctagon, TrendingUp } from "lucide-react";
import { BRAND_INFO } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";

export function IntroSection() {
  return (
    <section id="about-intro" className="py-20 md:py-28 bg-background relative overflow-hidden">
    <section id="about-intro" className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            
            <Badge variant="green" className="mb-4">
              Core Methodology
            <Badge variant="green" className="mb-3">
              Core Mandate
            </Badge>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-[1.15]">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 leading-snug">
              Understand the business <br className="hidden sm:inline" />
              <span className="italic text-foreground-muted font-normal">behind the price.</span>
            </h2>

            <div className="space-y-4 text-foreground-muted text-base sm:text-lg leading-relaxed font-light mb-8">
              <p>
                {BRAND_INFO.name} specializes in empowering retail and institutional market participants by providing in-depth comprehension of businesses and proactively highlighting potential market risks.
              </p>
              <p>
                Rather than reacting to short-term intraday fluctuations or chasing speculative momentum, our distinctive methodology integrates forensic scrutiny with exhaustive investigations—delivering a clear, objective, and unbiased perspective on the Indian capital landscape.
              </p>
            </div>
            <p className="text-foreground-muted text-sm sm:text-base leading-relaxed font-normal mb-6">
              {BRAND_INFO.name} deconstructs balance sheets, disclosures, and economic moats across Indian listed companies—filtering out market noise to empower retail investors with objective forensic clarity.
            </p>

            {/* 3 Core Tenets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-surface-border">
              <div className="p-4 rounded-xl bg-surface-card border border-surface-border shadow-sm">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-2">
                  <Search className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider">Forensics</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 border-t border-surface-border">
              <div className="p-3.5 rounded-xl bg-surface-card border border-surface-border shadow-sm">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-1.5">
                  <Search className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider">Forensics</span>
                </div>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  Screening disclosures, auditor notes & related-party transactions.
                  Auditing disclosures, auditor notes & related-party transactions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-card border border-surface-border shadow-sm">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 mb-2">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider">Fundamentals</span>
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 mb-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider">Fundamentals</span>
                </div>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  Evaluating durable cash flow, ROCE trends & pricing moats.
                  Analyzing cash flow durability, ROCE trends & pricing moats.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-card border border-surface-border shadow-sm">
                <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 mb-2">
                  <AlertOctagon className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider">Risk Alert</span>
                <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 mb-1.5">
                  <AlertOctagon className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider">Risk Alerts</span>
                </div>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  Early detection of balance sheet stress and governance divergences.
                  Proactive detection of balance sheet stress and governance risks.
                </p>
              </div>
            </div>

          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden border border-surface-border bg-surface-card shadow-xl">
              <div className="relative h-[320px] sm:h-[420px] w-full">
            <div className="relative rounded-2xl overflow-hidden border border-surface-border bg-surface-card shadow-lg">
              <div className="relative h-[260px] sm:h-[340px] w-full">
                <Image
                  src="/images/intro-research-desk.jpeg"
                  alt="Beat The Street Equity Research and Corporate Investigation Desk"
                  alt="Beat The Street Equity Research Desk"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center filter contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              </div>

              {/* Bottom Quote inside Image Card */}
              <div className="p-5 bg-surface border-t border-surface-border">
                <p className="font-serif italic text-foreground text-sm sm:text-base leading-snug">
              <div className="p-4 bg-surface border-t border-surface-border">
                <p className="font-serif italic text-foreground text-xs sm:text-sm leading-snug">
                  &ldquo;A stock price is a momentary opinion. The balance sheet and competitive moat are durable realities.&rdquo;
                </p>
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 mt-2 block tracking-wider uppercase font-medium">
                  Beat The Street Research Mandate
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 mt-1.5 block tracking-wider uppercase font-medium">
                  Beat The Street Creed
                </span>
              </div>
            </div>

            {/* Subtle accent backdrop glow */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
}