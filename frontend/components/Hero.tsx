"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Compass, ShieldCheck } from "lucide-react";
import { BRAND_INFO } from "@/lib/data";
import { Button } from "@/components/ui/Button";

interface HeroProps {
  onOpenCommunityModal: () => void;
}

export function Hero({ onOpenCommunityModal }: HeroProps) {
  return (
    <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#061224] text-white pt-24 pb-16 md:pt-28 md:pb-20">
      
      {/* 1. Full-Bleed Video Background Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-poster.jpg"
          className="w-full h-full object-cover object-center scale-105 motion-reduce:hidden"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Fallback image for prefers-reduced-motion */}
        <div
          className="hidden motion-reduce:block absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-poster.jpg')" }}
        />

        {/* 2. Sophisticated Dark Cinematic Overlays for Maximum Text Legibility */}
        {/* Base dark veil */}
        <div className="absolute inset-0 bg-[#061224]/65 backdrop-contrast-125" />
        
        {/* Radial spotlight behind text */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#061224]/50 to-[#061224]/90" />
        
        {/* Vertical gradient fade to top and bottom sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#061224]/80 via-transparent to-[#061224]" />
        
        {/* Subtle financial grid texture */}
        <div className="absolute inset-0 financial-grid opacity-15" />
      </div>

      {/* 3. Hero Editorial Content (Centered Visual Hierarchy) */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Small Eyebrow / Location */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono text-blue-200 mb-6 uppercase tracking-widest animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>CAPITAL MARKETS · MUMBAI</span>
        </div>

        {/* Subtle Supporting Brand Label */}
        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-blue-400 font-semibold">
            BEAT THE STREET
          </span>
        </div>

        {/* Main Editorial Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] max-w-4xl text-balance animate-fade-in-up-delay-1">
          Read Business,
          <br className="sm:hidden" />{" "}
          <span className="text-blue-300 italic font-normal">Not Stock Prices.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-slate-200/90 font-light max-w-2xl mx-auto mb-10 leading-relaxed text-balance animate-fade-in-up-delay-2">
          Independent perspectives on businesses, markets and the signals that matter.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto mb-12 animate-fade-in-up-delay-3">
          <Button
            variant="primary"
            size="lg"
            href="#insights"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 shadow-lg shadow-blue-600/40 min-w-[200px]"
          >
            <span>Explore Insights</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={onOpenCommunityModal}
            className="border-white/30 hover:border-white text-white hover:bg-white/10 backdrop-blur-sm min-w-[200px]"
          >
            <span>Join Our Community</span>
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Micro Credibility Bar */}
        <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono text-slate-300/80 animate-fade-in-up-delay-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Forensic Scrutiny</span>
          </div>
          <span className="text-white/20 hidden sm:inline">·</span>
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-blue-400" />
            <span>Fundamental Moats</span>
          </div>
          <span className="text-white/20 hidden sm:inline">·</span>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">EST.</span>
            <span className="text-white font-medium">2020</span>
          </div>
        </div>

      </div>

      {/* Subtle bottom gradient glow */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#061224] to-transparent pointer-events-none z-10" />
    </section>
  );
}