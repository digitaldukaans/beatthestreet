import React from "react";
import { ArrowUpRight, Radio } from "lucide-react";
import { ECOSYSTEM_CHANNELS, BRAND_INFO } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { YouTubeIcon, XIcon, TelegramIcon, WhatsAppIcon, LinkedInIcon, InstagramIcon, SubstackIcon } from "@/components/ui/Icons";

export function Ecosystem() {
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "youtube":
        return <YouTubeIcon className="w-5 h-5 text-red-600" />;
      case "substack":
        return <SubstackIcon className="w-5 h-5 text-amber-600" />;
      case "x":
        return <XIcon className="w-5 h-5 text-slate-900" />;
      case "telegram":
        return <TelegramIcon className="w-5 h-5 text-sky-600" />;
      case "whatsapp":
        return <WhatsAppIcon className="w-5 h-5 text-emerald-600" />;
      case "linkedin":
        return <LinkedInIcon className="w-5 h-5 text-blue-700" />;
      default:
        return <Radio className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="ecosystem" className="py-16 sm:py-20 md:py-24 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="blue" className="mb-2.5">
            Connected Network
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            The Content Ecosystem
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-normal">
            Specialized research distributed across dedicated formats—from 24×7 raw feeds to long-form memos.
          </p>
        </div>

        {/* Connected Ecosystem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ECOSYSTEM_CHANNELS.map((channel) => (
            <a
              key={channel.name}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl bg-white border border-slate-200/90 p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-xl relative shadow-sm hover:-translate-y-0.5"
            >
              {/* Top Row: Icon + Badge + Arrow */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-105 transition-transform shadow-inner">
                  {getPlatformIcon(channel.platform)}
                </div>
                
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                    {channel.badge}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Channel Title & Handle */}
              <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {channel.name}
              </h3>
              <p className="text-xs font-mono text-blue-600 mt-0.5 mb-2.5 font-semibold">
                {channel.focus}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-4">
                {channel.description}
              </p>

              {/* Bottom Feature Tag */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono text-[11px]">
                  {channel.handle}
                </span>
                <span className="text-blue-600 group-hover:text-blue-700 font-bold inline-flex items-center gap-1 transition-colors text-xs">
                  Join Channel
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Live Network Banner */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-slate-50 to-emerald-50 border border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3.5">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <div>
              <p className="text-sm sm:text-base font-bold text-slate-900">
                Direct Analyst Screening Stream
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                Join active retail market participants reviewing corporate disclosures daily.
              </p>
            </div>
          </div>
          <a
            href={BRAND_INFO.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm whitespace-nowrap inline-flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <span>Enter WhatsApp Group</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}