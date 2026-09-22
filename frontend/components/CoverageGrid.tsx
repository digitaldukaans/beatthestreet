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
        return <TrendingUp className="w-5 h-5 text-blue-600" />;
      case "BarChart3":
        return <BarChart3 className="w-5 h-5 text-emerald-600" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-5 h-5 text-red-600" />;
      case "Newspaper":
        return <Newspaper className="w-5 h-5 text-sky-600" />;
      case "FileSearch":
        return <FileSearch className="w-5 h-5 text-purple-600" />;
      default:
        return <TrendingUp className="w-5 h-5 text-blue-600" />;
    }
  };

  const topThree = COVERAGE_AREAS.slice(0, 3);
  const bottomTwo = COVERAGE_AREAS.slice(3, 5);

  return (
    <section id="coverage" className="py-16 sm:py-20 md:py-24 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-xl">
            <Badge variant="blue" className="mb-3">
              Research Disciplines
            </Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              What We Cover
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-normal leading-relaxed">
              Structured research and continuous surveillance across Indian equity markets.
            </p>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
              Active Focus
            </span>
            <span className="text-2xl font-serif font-bold text-blue-600 mt-0.5 block">
              5 Disciplines
            </span>
          </div>
        </div>

        {/* Symmetrical 3 + 2 Grid Layout */}
        <div className="space-y-6">
          
          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topThree.map((item, index) => (
              <Card
                key={item.id}
                className="flex flex-col justify-between p-6 sm:p-7 bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 rounded-2xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 shadow-sm">
                      {getIcon(item.iconName)}
                    </div>
                    <Badge variant="muted" className="text-[10px] tracking-wider uppercase font-mono">
                      {item.tag}
                    </Badge>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                    {item.shortDesc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-100 mb-5">
                    {item.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono text-[11px] font-semibold">
                    #0{index + 1}
                  </span>
                  <a
                    href="#insights"
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold transition-colors text-xs"
                  >
                    <span>View Dispatches</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom Row: 2 Balanced Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {bottomTwo.map((item, index) => (
              <Card
                key={item.id}
                className="flex flex-col justify-between p-6 sm:p-7 bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 rounded-2xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 shadow-sm">
                      {getIcon(item.iconName)}
                    </div>
                    <Badge variant="muted" className="text-[10px] tracking-wider uppercase font-mono">
                      {item.tag}
                    </Badge>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                    {item.shortDesc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-100 mb-5">
                    {item.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono text-[11px] font-semibold">
                    #0{index + 4}
                  </span>
                  <a
                    href="#insights"
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold transition-colors text-xs"
                  >
                    <span>View Dispatches</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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