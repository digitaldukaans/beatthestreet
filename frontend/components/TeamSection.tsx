import React from "react";
import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";
import { TEAM_MEMBERS, BRAND_INFO } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { LinkedInIcon } from "@/components/ui/Icons";

export function TeamSection() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <Badge variant="blue" className="mb-3">
            Research Leadership
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3 leading-tight">
            Built around curiosity, analysis and business understanding.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Founded in Mumbai in 2020, Beat The Street operates with a lean, rigorous research ethos dedicated to objective business deconstructions for Indian investors.
          </p>
        </div>

        {/* Co-Founders Profiles with Cropped Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {TEAM_MEMBERS.map((member) => (
            <Card
              key={member.name}
              className="p-6 sm:p-8 bg-white border border-slate-200/90 flex flex-col justify-between group hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-xl rounded-2xl"
            >
              <div>
                {/* Header with Cropped Founder Photo & Info */}
                <div className="flex items-start justify-between mb-5 gap-3">
                  <div className="flex items-center gap-4">
                    {/* Founder Photo Frame */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-slate-100 border-2 border-blue-600 p-0.5 group-hover:shadow-md transition-all shrink-0">
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
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-xs font-mono text-blue-600 font-bold mt-1">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200 font-semibold whitespace-nowrap">
                    CO-FOUNDER
                  </span>
                </div>

                {/* Focus Area */}
                <div className="mb-3.5">
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-mono font-bold block mb-1">
                    Primary Domain Focus
                  </span>
                  <p className="text-sm font-semibold text-slate-800 leading-snug">
                    {member.focus}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-5">
                  {member.bio}
                </p>

                {/* Focus Highlights */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {member.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-2.5 py-1 rounded-md bg-slate-50 text-[11px] font-mono text-slate-700 border border-slate-200"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Location Tag & LinkedIn Link */}
              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span className="flex items-center gap-1.5 font-sans">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  {member.location}
                </span>

                <a
                  href={BRAND_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 transition-colors font-sans font-bold"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 text-blue-600" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* Analyst Workspace Visual Strip */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center shadow-sm">
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
            <h4 className="font-serif text-xl font-bold text-slate-900 mb-2">
              Analytical Independence
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-4">
              We operate without investment banking ties, institutional brokerage commissions, or proprietary trading desks. Our sole objective is publishing objective, forensic, and fundamental perspectives for the Indian investor community.
            </p>
            <div className="flex items-center gap-6 text-xs font-mono text-slate-500 font-medium">
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