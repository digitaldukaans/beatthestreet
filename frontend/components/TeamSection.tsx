import React from "react";
import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";
import { TEAM_MEMBERS, BRAND_INFO } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { LinkedInIcon } from "@/components/ui/Icons";

export function TeamSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <Badge variant="outline" className="mb-3">
            Research Leadership
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4 leading-[1.15]">
            Built around curiosity, analysis and business understanding.
          </h2>
          <p className="text-foreground-muted text-base sm:text-lg font-light leading-relaxed">
            Founded in Mumbai in 2020, Beat The Street operates with a lean, rigorous research ethos dedicated to objective business deconstructions for Indian investors.
          </p>
        </div>

        {/* Co-Founders Profiles with Cropped Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {TEAM_MEMBERS.map((member) => (
            <Card
              key={member.name}
              className="p-6 sm:p-8 bg-surface-card border-surface-border flex flex-col justify-between group hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Header with Cropped Founder Photo & Info */}
                <div className="flex items-start justify-between mb-6 gap-3">
                  <div className="flex items-center gap-4">
                    {/* Founder Photo Frame */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-surface-subtle border-2 border-emerald-500/40 p-0.5 group-hover:border-emerald-500 group-hover:shadow-lg group-hover:shadow-emerald-500/10 transition-all shrink-0">
                      <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-slate-900">
                        <Image
                          src={member.imageUrl}
                          alt={member.name}
                          fill
                          sizes="80px"
                          className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium mt-1">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-foreground-muted bg-surface-subtle px-2.5 py-1 rounded border border-surface-border whitespace-nowrap">
                    CO-FOUNDER
                  </span>
                </div>

                {/* Focus Area */}
                <div className="mb-4">
                  <span className="text-[10px] uppercase tracking-wider text-foreground-muted font-mono block mb-1">
                    Primary Domain Focus
                  </span>
                  <p className="text-sm font-medium text-foreground leading-snug">
                    {member.focus}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-sm text-foreground-muted font-light leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Focus Highlights */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-surface-border">
                  {member.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-2.5 py-1 rounded-md bg-surface-subtle text-[11px] font-mono text-foreground border border-surface-border"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Location Tag & LinkedIn Link */}
              <div className="pt-5 mt-6 border-t border-surface-border flex items-center justify-between text-xs text-foreground-muted font-mono">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  {member.location}
                </span>

                <a
                  href={BRAND_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-sans font-medium"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* Analyst Workspace Visual Strip */}
        <div className="rounded-2xl border border-surface-border bg-surface-card overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center shadow-sm">
          <div className="lg:col-span-4 relative h-60 lg:h-full min-h-[220px]">
            <Image
              src="/images/analyst-terminal.jpeg"
              alt="Beat The Street Mumbai Analyst Terminal"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-center filter contrast-105"
            />
          </div>
          
          <div className="lg:col-span-8 p-6 sm:p-8">
            <h4 className="font-serif text-xl font-bold text-foreground mb-2">
              Independent Analytical Independence
            </h4>
            <p className="text-sm text-foreground-muted font-light leading-relaxed mb-4">
              We operate without investment banking ties, institutional brokerage commissions, or proprietary trading desks. Our sole objective is publishing objective, forensic, and fundamental perspectives for the Indian investor community.
            </p>
            <div className="flex items-center gap-6 text-xs font-mono text-foreground-muted">
              <span>ESTABLISHED: {BRAND_INFO.foundingYear}</span>
              <span>•</span>
              <span>BASE: {BRAND_INFO.location}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}