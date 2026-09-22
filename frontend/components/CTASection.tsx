"use client";

import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { BRAND_INFO } from "@/lib/data";
import { Button } from "@/components/ui/Button";

interface CTASectionProps {
  onOpenCommunityModal: () => void;
}

export function CTASection({ onOpenCommunityModal }: CTASectionProps) {
  return (
    <section className="py-20 md:py-28 bg-surface-subtle relative overflow-hidden border-t border-surface-border">
    <section className="py-16 sm:py-20 md:py-24 bg-surface-subtle relative overflow-hidden border-t border-surface-border">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-green/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-brand-green/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="max-w-3xl mx-auto">
        <div className="max-w-2xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-surface-border text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-6 uppercase tracking-widest shadow-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-surface-border text-[10px] font-mono text-emerald-600 dark:text-emerald-400 mb-4 uppercase tracking-widest shadow-sm">
            <span>Capital Markets Intelligence</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 leading-snug">
            Stay closer to the business <br className="hidden sm:inline" />
            <span className="italic text-foreground-muted font-normal">behind the market.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-foreground-muted font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          <p className="text-xs sm:text-sm md:text-base text-foreground-muted font-normal max-w-xl mx-auto mb-8 leading-relaxed">
            Follow Beat The Street for business insights, financial developments and market perspectives.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="primary"
              size="lg"
              size="md"
              href="#insights"
              className="w-full sm:w-auto font-semibold px-8 shadow-md"
              className="w-full sm:w-auto font-semibold px-6 py-2.5 shadow-md text-xs sm:text-sm"
            >
              <span>Explore Insights</span>
              <ArrowRight className="w-4 h-4 ml-1" />
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>

            <Button
              variant="gold"
              size="lg"
              size="md"
              onClick={onOpenCommunityModal}
              className="w-full sm:w-auto"
              className="w-full sm:w-auto text-xs sm:text-sm px-6 py-2.5"
            >
              <span>Join the Community</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>

          {/* Core Creed Micro Strip */}
          <div className="mt-12 pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-foreground-muted font-mono">
          <div className="mt-8 pt-6 border-t border-surface-border flex flex-col sm:flex-row items-center justify-center gap-4 text-[11px] text-foreground-muted font-mono">
            <span>MUMBAI, INDIA</span>
            <span className="hidden sm:inline text-surface-border">•</span>
            <span className="text-emerald-600 dark:text-emerald-400">&ldquo;{BRAND_INFO.tagline}&rdquo;</span>
            <span className="hidden sm:inline text-surface-border">•</span>
            <span>FOUNDED {BRAND_INFO.foundingYear}</span>
          </div>

        </div>

      </div>
    </section>
  );
}