"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Shield, TrendingUp, Search } from "lucide-react";
import { BRAND_INFO } from "@/lib/data";
import { Button } from "@/components/ui/Button";

interface HeroProps {
  onOpenCommunityModal: () => void;
}

export function Hero({ onOpenCommunityModal }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback gracefully to poster image on devices that block autoplay
        // Fallback gracefully to poster image on devices that restrict autoplay
      });
    }
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-slate-950 text-white w-full">
    <section className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden bg-slate-950 text-white w-full">
      
      {/* Background Fallback Poster Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-poster.jpg"
          alt="Beat The Street Capital Markets Mumbai"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.55] contrast-[1.05]"
        />
      </div>

      {/* Full-Bleed Responsive Background Video */}
      {/* Full-Bleed Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0 filter brightness-[0.62] contrast-[1.08] motion-reduce:hidden"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0 filter brightness-[0.60] contrast-[1.08] motion-reduce:hidden"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Dark Veil & Vignette Overlays for Maximum Contrast & Readability */}
      <div className="absolute inset-x-0 top-0 h-40 sm:h-48 bg-gradient-to-b from-black/90 via-black/50 to-transparent z-[1] pointer-events-none" />
      {/* Cinematic Dark Veil & Vignette Overlays */}
      <div className="absolute inset-x-0 top-0 h-36 sm:h-44 bg-gradient-to-b from-black/90 via-black/50 to-transparent z-[1] pointer-events-none" />
      <div className="absolute inset-0 bg-black/45 z-[1] pointer-events-none" />
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-slate-950/40 to-slate-950/80 z-[1] pointer-events-none" />
      <div className="absolute inset-0 financial-grid opacity-20 z-[2] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 sm:h-40 bg-gradient-to-t from-background via-background/70 to-transparent z-[2] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-background via-background/70 to-transparent z-[2] pointer-events-none" />

      {/* Content Container — Centered Editorial Layout */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 text-center flex flex-col items-center">
      {/* Content Container */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 text-center flex flex-col items-center">
        
        {/* Eyebrow & Brand Monogram Badge */}
        <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-emerald-500/30 shadow-xl mb-5 sm:mb-8 animate-in fade-in duration-500">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-emerald-500/30 shadow-lg mb-5 sm:mb-6 animate-in fade-in duration-500">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.16em] sm:tracking-[0.2em] uppercase text-slate-200">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.18em] uppercase text-slate-200">
            CAPITAL MARKETS · MUMBAI
          </span>
          <span className="text-slate-600 hidden xs:inline">|</span>
          <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400 font-medium hidden xs:inline">
          <span className="text-slate-600">|</span>
          <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400 font-medium">
            EST. 2020
          </span>
        </div>

        {/* Main Editorial Headline with Fluid Responsive Scale */}
        <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold tracking-tight text-white leading-[1.1] sm:leading-[1.08] mb-4 sm:mb-5 max-w-4xl drop-shadow-md">
        {/* Main Editorial Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-4 drop-shadow-md">
          Read Business, <br />
          <span className="italic font-normal text-slate-200">
            Not Stock Prices.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-sm sm:text-base md:text-xl text-slate-200/90 font-light max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2 drop-shadow-sm">
          Independent perspectives on businesses, markets and the signals that matter. We deconstruct operating engines and forensic disclosures behind Indian enterprises.
        <p className="text-sm sm:text-base md:text-lg text-slate-200/90 font-light max-w-xl mx-auto leading-relaxed mb-8 px-2 drop-shadow-sm">
          Independent perspectives on businesses, markets and the signals that matter.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mb-10 sm:mb-14">
        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-3.5 w-full sm:w-auto mb-10 sm:mb-12">
          <Button
            variant="primary"
            size="lg"
            size="md"
            href="#insights"
            className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-950 font-semibold px-8 py-3.5 shadow-xl shadow-black/40 text-sm sm:text-base"
            className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-950 font-semibold px-7 py-3 shadow-lg shadow-black/40 text-sm"
          >
            <span>Explore Insights</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>

          <Button
            variant="secondary"
            size="lg"
            size="md"
            onClick={onOpenCommunityModal}
            className="w-full sm:w-auto bg-slate-900/80 hover:bg-slate-800 text-slate-100 border-white/20 backdrop-blur-md px-7 py-3.5 text-sm sm:text-base"
            className="w-full sm:w-auto bg-slate-900/80 hover:bg-slate-800 text-slate-100 border-white/20 backdrop-blur-md px-6 py-3 text-sm"
          >
            <span>Join Our Community</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        {/* Micro Metadata Strip / Trust indicators */}
        <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 bg-slate-900/80 backdrop-blur-md p-3.5 sm:p-5 rounded-2xl border border-white/10 shadow-2xl">
          <div className="flex items-center gap-3 text-left p-2 sm:p-0">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
              <Search className="w-4 h-4" />
        <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 bg-slate-900/80 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/10 shadow-xl">
          <div className="flex items-center gap-2.5 text-left p-1.5 sm:p-0">
            <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-400 shrink-0">
              <Search className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-mono">
              <span className="block text-[9px] uppercase tracking-wider text-slate-400 font-mono">
                Methodology
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-100 block">
              <span className="text-xs font-semibold text-slate-100 block">
                Forensic Scrutiny
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-left p-2 sm:p-0 border-t sm:border-t-0 sm:border-l border-white/10 sm:pl-4">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
              <TrendingUp className="w-4 h-4" />
          <div className="flex items-center gap-2.5 text-left p-1.5 sm:p-0 border-t sm:border-t-0 sm:border-l border-white/10 sm:pl-3">
            <div className="p-1.5 rounded bg-amber-500/10 text-amber-400 shrink-0">
              <TrendingUp className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-mono">
              <span className="block text-[9px] uppercase tracking-wider text-slate-400 font-mono">
                Orientation
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-100 block">
              <span className="text-xs font-semibold text-slate-100 block">
                Fundamental Moats
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-left p-2 sm:p-0 border-t sm:border-t-0 sm:border-l border-white/10 sm:pl-4">
            <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
              <Shield className="w-4 h-4" />
          <div className="flex items-center gap-2.5 text-left p-1.5 sm:p-0 border-t sm:border-t-0 sm:border-l border-white/10 sm:pl-3">
            <div className="p-1.5 rounded bg-sky-500/10 text-sky-400 shrink-0">
              <Shield className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-mono">
                Coverage Base
              <span className="block text-[9px] uppercase tracking-wider text-slate-400 font-mono">
                Coverage
              </span>
              <span className="text-xs sm:text-sm font-semibold text-emerald-400 block">
                Indian Capital Markets
              <span className="text-xs font-semibold text-emerald-400 block">
                Indian Markets
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}