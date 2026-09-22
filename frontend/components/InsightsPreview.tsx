"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Clock, Filter } from "lucide-react";
import { DEMO_INSIGHTS } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface InsightsPreviewProps {
  onOpenCommunityModal: () => void;
}

export function InsightsPreview({ onOpenCommunityModal }: InsightsPreviewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Business Deep Dive",
    "Fundamental Analysis",
    "Forensic Analysis",
    "Corporate Developments",
  ];

  const filteredArticles =
    selectedCategory === "All"
      ? DEMO_INSIGHTS
      : DEMO_INSIGHTS.filter((item) => item.category === selectedCategory);

  return (
    <section id="insights" className="py-20 md:py-28 bg-background relative">
    <section id="insights" className="py-16 sm:py-20 md:py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="gold">
                Editorial Dispatches
              </Badge>
              <span className="text-[11px] font-mono text-foreground-muted uppercase tracking-widest">
                Demo Research Repository
              <span className="text-[10px] font-mono text-foreground-muted uppercase tracking-wider">
                Demo Repository
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              From the Street
            </h2>
            <p className="text-foreground-muted text-base sm:text-lg mt-3 font-light max-w-2xl">
              Representative research memos illustrating our analytical methodology across balance sheet forensics and operating moats.
            <p className="text-foreground-muted text-xs sm:text-sm mt-1 font-normal max-w-xl">
              Representative research memos deconstructing balance sheet forensics and operating moats.
            </p>
          </div>

          {/* Substack / Community Dispatch CTA */}
          <div>
            <Button
              variant="outline"
              size="sm"
              onClick={onOpenCommunityModal}
              className="text-xs"
            >
              <span>Subscribe on Substack</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <Filter className="w-4 h-4 text-foreground-muted mr-2 shrink-0 hidden sm:block" />
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          <Filter className="w-3.5 h-3.5 text-foreground-muted mr-1.5 shrink-0 hidden sm:block" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wide whitespace-nowrap transition-all ${
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wide whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950 font-semibold shadow-sm"
                  : "bg-surface-card border border-surface-border text-foreground-muted hover:text-foreground hover:border-emerald-500/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="group rounded-2xl bg-surface-card border border-surface-border overflow-hidden hover:border-slate-400 dark:hover:border-slate-700 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between"
              className="group rounded-2xl bg-surface-card border border-surface-border overflow-hidden hover:border-slate-400 dark:hover:border-slate-700 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Image & Header Thumbnail */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95 dark:brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent" />
                  
                  {/* Category Pill on Image */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono font-medium text-slate-200">
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-2.5 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono font-medium text-slate-200">
                      {article.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-slate-300">
                  <div className="absolute top-3.5 right-3.5">
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[9px] font-mono text-slate-300">
                      SAMPLE MEMO
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7">
                <div className="p-5 sm:p-6">
                  {/* Metadata Row */}
                  <div className="flex items-center gap-4 text-xs text-foreground-muted mb-3 font-mono">
                  <div className="flex items-center gap-3 text-[11px] text-foreground-muted mb-2.5 font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <Clock className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      {article.readTime}
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.author}</span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors leading-snug mb-3">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors leading-snug mb-2">
                    {article.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-foreground-muted font-light leading-relaxed mb-6">
                  <p className="text-xs sm:text-sm text-foreground-muted font-normal leading-relaxed mb-4">
                    {article.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-2">
                  <div className="flex flex-wrap gap-1.5 mb-1">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded bg-surface-subtle border border-surface-border text-[11px] font-mono text-foreground-muted"
                        className="px-2 py-0.5 rounded bg-surface-subtle border border-surface-border text-[10px] font-mono text-foreground-muted"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="px-6 py-4 sm:px-7 bg-surface-subtle/60 border-t border-surface-border flex items-center justify-between">
                <span className="text-[11px] font-mono text-foreground-muted">
                  Read complete analytical case study
              <div className="px-5 py-3 sm:px-6 bg-surface-subtle/60 border-t border-surface-border flex items-center justify-between">
                <span className="text-[10px] font-mono text-foreground-muted">
                  Full analytical framework
                </span>
                <button
                  onClick={onOpenCommunityModal}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline transition-colors"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline transition-colors"
                >
                  <span>Open Dispatch</span>
                  <ArrowUpRight className="w-4 h-4" />
                  <span>Open Memo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Demo Notice Disclaimer */}
        <div className="mt-12 p-4 rounded-xl bg-surface-subtle/50 border border-surface-border text-center">
          <p className="text-xs text-foreground-muted font-mono">
            * Research dispatches above are representative client demonstration frameworks. Connect directly via our Substack or WhatsApp Community for live publishing feeds.
        <div className="mt-8 p-3 rounded-xl bg-surface-subtle/50 border border-surface-border text-center">
          <p className="text-[11px] text-foreground-muted font-mono">
            * Sample demonstration memos. Live dispatches are published via our Substack and WhatsApp Community.
          </p>
        </div>

      </div>
    </section>
  );
}