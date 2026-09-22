import React from "react";
import Image from "next/image";
import { BRAND_INFO, PHILOSOPHY_PILLARS } from "@/lib/data";

export function PhilosophySection() {
  return (
    <section id="philosophy" className="relative py-20 sm:py-24 md:py-28 bg-brand-navy-900 text-white overflow-hidden border-y border-brand-navy-800">
      
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/philosophy-bg.jpeg"
          alt="Beat The Street Signature Philosophy Background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-10 filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-950 via-brand-navy-900/95 to-brand-navy-950" />
        <div className="absolute inset-0 financial-grid-dark opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Typographic Statement */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-300 text-xs font-mono uppercase tracking-widest mb-5">
            <span>Foundational Creed</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-[1.05] mb-5">
            READ BUSINESS. <br />
            <span className="gold-gradient-text italic font-normal">
              NOT STOCK PRICES.
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-200 font-serif italic max-w-2xl leading-relaxed">
            &ldquo;Because understanding the business is often the first step toward understanding the market.&rdquo;
          </p>

        </div>

        {/* 3 Philosophy Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-brand-navy-800">
          {PHILOSOPHY_PILLARS.map((pillar) => (
            <div key={pillar.number} className="relative group">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-blue-500/40 block mb-2">
                {pillar.number}
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}