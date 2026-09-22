import React from "react";
import Image from "next/image";
import { BRAND_INFO, PHILOSOPHY_PILLARS } from "@/lib/data";

export function PhilosophySection() {
  return (
    <section id="philosophy" className="relative py-24 md:py-32 bg-surface overflow-hidden border-y border-surface-border">
    <section id="philosophy" className="relative py-16 sm:py-20 md:py-24 bg-surface overflow-hidden border-y border-surface-border">
      
      {/* Editorial background image with deep monochrome tint */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/philosophy-bg.jpeg"
          alt="Beat The Street Signature Philosophy Background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-10 dark:opacity-15 filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/95" />
        <div className="absolute inset-0 financial-grid opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Big Typographic Moment */}
        <div className="max-w-4xl mb-14 md:mb-18">
        {/* Core Typographic Moment */}
        <div className="max-w-3xl mb-12">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/40 text-emerald-700 dark:text-emerald-400 text-xs font-mono uppercase tracking-widest mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/40 text-emerald-700 dark:text-emerald-400 text-[10px] font-mono uppercase tracking-widest mb-4">
            <span>Foundational Creed</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground uppercase leading-[1.02] mb-6">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground uppercase leading-tight mb-4">
            READ BUSINESS. <br />
            <span className="gold-gradient-text italic font-normal">
              NOT STOCK PRICES.
            </span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-foreground-muted font-serif italic max-w-3xl leading-relaxed">
          <p className="text-sm sm:text-base md:text-lg text-foreground-muted font-serif italic max-w-2xl leading-relaxed">
            &ldquo;Because understanding the business is often the first step toward understanding the market.&rdquo;
          </p>

        </div>

        {/* 3 Philosophy Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-surface-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-surface-border">
          {PHILOSOPHY_PILLARS.map((pillar) => (
            <div key={pillar.number} className="relative group">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-emerald-600/30 dark:text-emerald-500/30 block mb-3">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-emerald-600/40 dark:text-emerald-500/30 block mb-2">
                {pillar.number}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-2.5">
              <h3 className="font-serif text-base sm:text-lg font-bold text-foreground mb-1.5">
                {pillar.title}
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed font-light">
              <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}