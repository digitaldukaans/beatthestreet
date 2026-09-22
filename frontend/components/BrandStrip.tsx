import React from "react";
import { MARKET_STRIP_ITEMS } from "@/lib/data";

export function BrandStrip() {
  return (
    <section className="border-y border-surface-border bg-surface-subtle/70 overflow-hidden py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop Clean Horizontal Typography Strip */}
        <div className="hidden lg:flex items-center justify-between gap-6 text-xs font-mono tracking-[0.2em] text-foreground-muted">
          <span className="flex items-center gap-2 text-foreground font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            CAPITAL MARKETS
          </span>
          <span className="text-surface-border">✦</span>
          <span className="hover:text-foreground transition-colors">BUSINESS INSIGHTS</span>
          <span className="text-surface-border">✦</span>
          <span className="hover:text-foreground transition-colors">FUNDAMENTAL ANALYSIS</span>
          <span className="text-surface-border">✦</span>
          <span className="hover:text-foreground transition-colors">FORENSIC RESEARCH</span>
          <span className="text-surface-border">✦</span>
          <span className="hover:text-foreground transition-colors">CORPORATE SCREENING</span>
        </div>

        {/* Mobile / Tablet Smooth Infinite Marquee */}
        <div className="lg:hidden relative overflow-hidden flex whitespace-nowrap">
          <div className="animate-ticker-continuous flex items-center gap-8 text-xs font-mono tracking-[0.18em] text-foreground-muted">
            {MARKET_STRIP_ITEMS.concat(MARKET_STRIP_ITEMS).map((item, index) => (
              <span key={index} className="inline-flex items-center gap-4">
                <span className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  {item}
                </span>
                <span className="text-emerald-500/60 text-[10px]">✦</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}