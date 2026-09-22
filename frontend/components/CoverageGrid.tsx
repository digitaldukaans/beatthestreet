"use client";

import React from "react";
import { TrendingUp, BarChart3, ShieldAlert, Newspaper, FileSearch, Check, ArrowRight } from "lucide-react";
import { COVERAGE_AREAS } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function CoverageGrid() {
  const getIcon = (name: string) => {
    switch (name) {
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
        return <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case "BarChart3":
        return <BarChart3 className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
        return <BarChart3 className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-5 h-5 text-red-600 dark:text-red-400" />;
        return <ShieldAlert className="w-4 h-4 text-red-600 dark:text-red-400" />;
      case "Newspaper":
        return <Newspaper className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
        return <Newspaper className="w-4 h-4 text-sky-600 dark:text-sky-400" />;
      case "FileSearch":
        return <FileSearch className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
        return <FileSearch className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      default:
        return <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
        return <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  const topThree = COVERAGE_AREAS.slice(0, 3);
  const bottomTwo = COVERAGE_AREAS.slice(3, 5);

  return (
    <section id="coverage" className="py-20 md:py-28 bg-surface-subtle/50 border-t border-surface-border relative">
    <section id="coverage" className="py-16 sm:py-20 md:py-24 bg-surface-subtle/50 border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-3">
              Research Pillars
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-xl">
            <Badge variant="outline" className="mb-2.5">
              Research Disciplines
            </Badge>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-snug">
              What We Cover
            </h2>
            <p className="text-foreground-muted text-base sm:text-lg mt-3 font-light leading-relaxed">
              Structured research and continuous surveillance across Indian equity markets, engineered to uncover core operating realities.
            <p className="text-foreground-muted text-xs sm:text-sm mt-1.5 font-normal leading-relaxed">
              Structured research and continuous surveillance across Indian equity markets.
            </p>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xs font-mono text-foreground-muted uppercase tracking-wider block">
              Active Focus Areas
            <span className="text-[11px] font-mono text-foreground-muted uppercase tracking-wider block">
              Core Focus
            </span>
            <span className="text-2xl font-serif font-bold text-emerald-600 dark:text-emerald-400 mt-1 block">
              5 Core Disciplines
            <span className="text-xl font-serif font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 block">
              5 Disciplines
            </span>
          </div>
        </div>

        {/* Symmetrical 3 + 2 Grid Layout */}
        <div className="space-y-6">
        <div className="space-y-5">
          
          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topThree.map((item, index) => (
              <Card
                key={item.id}
                className="flex flex-col justify-between p-6 sm:p-8 bg-surface-card border-surface-border shadow-sm hover:shadow-xl transition-all duration-300"
                className="flex flex-col justify-between p-5 sm:p-6 bg-surface-card border-surface-border shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-surface-subtle border border-surface-border shadow-inner">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-surface-subtle border border-surface-border shadow-inner">
                      {getIcon(item.iconName)}
                    </div>
                    <Badge variant="muted" className="text-[10px] tracking-wider uppercase font-mono">
                    <Badge variant="muted" className="text-[9px] tracking-wider uppercase font-mono">
                      {item.tag}
                    </Badge>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-3">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed mb-6">
                  <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed mb-4">
                    {item.shortDesc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-surface-border mb-6">
                  <div className="space-y-2 pt-3 border-t border-surface-border mb-4">
                    {item.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-foreground-muted">
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-foreground-muted">
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-surface-border flex items-center justify-between text-xs text-foreground-muted">
                  <span className="font-mono text-[11px]">
                    DISCIPLINE #{index + 1}
                <div className="pt-3 border-t border-surface-border flex items-center justify-between text-xs text-foreground-muted">
                  <span className="font-mono text-[10px]">
                    #0{index + 1}
                  </span>
                  <a
                    href="#insights"
                    className="inline-flex items-center gap-1 text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium"
                    className="inline-flex items-center gap-1 text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium text-xs"
                  >
                    <span>View Dispatches</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom Row: 2 Balanced Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {bottomTwo.map((item, index) => (
              <Card
                key={item.id}
                className="flex flex-col justify-between p-6 sm:p-8 bg-surface-card border-surface-border shadow-sm hover:shadow-xl transition-all duration-300"
                className="flex flex-col justify-between p-5 sm:p-6 bg-surface-card border-surface-border shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-surface-subtle border border-surface-border shadow-inner">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-surface-subtle border border-surface-border shadow-inner">
                      {getIcon(item.iconName)}
                    </div>
                    <Badge variant="muted" className="text-[10px] tracking-wider uppercase font-mono">
                    <Badge variant="muted" className="text-[9px] tracking-wider uppercase font-mono">
                      {item.tag}
                    </Badge>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-3">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed mb-6">
                  <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed mb-4">
                    {item.shortDesc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-surface-border mb-6">
                  <div className="space-y-2 pt-3 border-t border-surface-border mb-4">
                    {item.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-foreground-muted">
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-foreground-muted">
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-surface-border flex items-center justify-between text-xs text-foreground-muted">
                  <span className="font-mono text-[11px]">
                    DISCIPLINE #{index + 4}
                <div className="pt-3 border-t border-surface-border flex items-center justify-between text-xs text-foreground-muted">
                  <span className="font-mono text-[10px]">
                    #0{index + 4}
                  </span>
                  <a
                    href="#insights"
                    className="inline-flex items-center gap-1 text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium"
                    className="inline-flex items-center gap-1 text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium text-xs"
                  >
                    <span>View Dispatches</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </Card>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}