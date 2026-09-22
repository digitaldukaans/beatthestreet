import React from "react";
import { MARKET_STRIP_ITEMS } from "@/lib/data";

export function BrandStrip() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 overflow-hidden py-3.5 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop Clean Horizontal Typography Strip */}
        <div className="hidden lg:flex items-center justify-between gap-6 text-xs font-mono tracking-[0.18em] text-slate-700">
          <span className="flex items-center gap-2 text-blue-700 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            CAPITAL MARKETS
          </span>
          <span className="text-slate-300">✦</span>
          <span className="hover:text-blue-600 font-semibold transition-colors">BUSINESS INSIGHTS</span>
          <span className="text-slate-300">✦</span>
          <span className="hover:text-blue-600 font-semibold transition-colors">FUNDAMENTAL ANALYSIS</span>
          <span className="text-slate-300">✦</span>
          <span className="hover:text-blue-600 font-semibold transition-colors">FORENSIC RESEARCH</span>
          <span className="text-slate-300">✦</span>
          <span className="hover:text-blue-600 font-semibold transition-colors">CORPORATE SCREENING</span>
        </div>

        {/* Mobile / Tablet Smooth Infinite Marquee */}
        <div className="lg:hidden relative overflow-hidden flex whitespace-nowrap">
          <div className="animate-ticker-continuous flex items-center gap-8 text-xs font-mono tracking-[0.16em] text-slate-700">
            {MARKET_STRIP_ITEMS.concat(MARKET_STRIP_ITEMS).map((item, index) => (
              <span key={index} className="inline-flex items-center gap-4">
                <span className="hover:text-blue-600 font-semibold transition-colors">
                  {item}
                </span>
                <span className="text-blue-400 text-[10px]">✦</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}