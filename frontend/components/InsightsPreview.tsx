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
    <section id="insights" className="py-16 sm:py-20 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="blue">
                Editorial Dispatches
              </Badge>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                Demo Repository
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              From the Street
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1.5 font-normal max-w-xl leading-relaxed">
              Representative research memos deconstructing balance sheet forensics and operating moats.
            </p>
          </div>

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
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          <Filter className="w-3.5 h-3.5 text-slate-500 mr-1.5 shrink-0 hidden sm:block" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wide whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white font-semibold shadow-sm"
                  : "bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-blue-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="group rounded-2xl bg-white border border-slate-200/90 overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Image & Header Thumbnail */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Pill on Image */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-mono font-semibold text-white">
                      {article.category}
                    </span>
                  </div>

                  <div className="absolute top-3.5 right-3.5">
                    <span className="px-2 py-1 rounded bg-black/60 backdrop-blur-md text-[9px] font-mono text-slate-300">
                      SAMPLE MEMO
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  {/* Metadata Row */}
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-2.5 font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      {article.readTime}
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-2.5">
                    {article.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-slate-600 font-normal leading-relaxed mb-4">
                    {article.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-1">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  Full analytical framework
                </span>
                <button
                  onClick={onOpenCommunityModal}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <span>Open Memo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Demo Notice Disclaimer */}
        <div className="mt-8 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
          <p className="text-xs text-slate-500 font-mono">
            * Sample demonstration memos. Live dispatches are published via our Substack and WhatsApp Community.
          </p>
        </div>

      </div>
    </section>
  );
}