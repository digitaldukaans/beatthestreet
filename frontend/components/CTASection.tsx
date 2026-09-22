"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { BRAND_INFO } from "@/lib/data";
import { Button } from "@/components/ui/Button";

interface CTASectionProps {
  onOpenCommunityModal: () => void;
}

export function CTASection({ onOpenCommunityModal }: CTASectionProps) {
  return (
    <section className="py-20 md:py-28 bg-slate-900 relative overflow-hidden text-white">
      {/* Subtle background glow & grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 financial-grid opacity-15 pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle Brand Logo / Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/80 text-xs font-mono text-blue-300 mb-6 uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Capital Markets Research · Mumbai</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
          Stay Closer to the Business
          <br />
          <span className="text-blue-400 italic font-normal">Behind the Stock Price.</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Join investors and analysts tracking forensic corporate disclosures, capital allocations, and fundamental signals.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenCommunityModal}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 shadow-lg shadow-blue-600/30 min-w-[200px]"
          >
            <span>Join Our Community</span>
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            href="#insights"
            className="w-full sm:w-auto border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white bg-slate-800/50 hover:bg-slate-800 min-w-[200px]"
          >
            <span>Explore Insights</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Brand Creed Micro Strip */}
        <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono text-slate-400">
          <span className="text-slate-300 font-medium">MUMBAI, INDIA</span>
          <span className="text-slate-700">·</span>
          <span className="text-emerald-400 font-serif italic text-sm">&ldquo;{BRAND_INFO.tagline}&rdquo;</span>
          <span className="text-slate-700">·</span>
          <span>EST. {BRAND_INFO.foundingYear}</span>
        </div>

      </div>
    </section>
  );
}