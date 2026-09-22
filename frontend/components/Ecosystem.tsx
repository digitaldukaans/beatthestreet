import React from "react";
import { ArrowUpRight, Radio } from "lucide-react";
import { ECOSYSTEM_CHANNELS, BRAND_INFO } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { YouTubeIcon, XIcon, TelegramIcon, WhatsAppIcon, LinkedInIcon, InstagramIcon, SubstackIcon } from "@/components/ui/Icons";

export function Ecosystem() {
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "youtube":
        return <YouTubeIcon className="w-6 h-6 text-red-500 dark:text-red-400" />;
        return <YouTubeIcon className="w-5 h-5 text-red-500 dark:text-red-400" />;
      case "substack":
        return <SubstackIcon className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
        return <SubstackIcon className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case "x":
        return <XIcon className="w-6 h-6 text-slate-800 dark:text-sky-400" />;
        return <XIcon className="w-5 h-5 text-slate-800 dark:text-sky-400" />;
      case "telegram":
        return <TelegramIcon className="w-6 h-6 text-sky-600 dark:text-cyan-400" />;
        return <TelegramIcon className="w-5 h-5 text-sky-600 dark:text-cyan-400" />;
      case "whatsapp":
        return <WhatsAppIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
        return <WhatsAppIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case "linkedin":
        return <LinkedInIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
        return <LinkedInIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      default:
        return <Radio className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
        return <Radio className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <section id="ecosystem" className="py-20 md:py-28 bg-surface-subtle/50 border-t border-surface-border relative">
    <section id="ecosystem" className="py-16 sm:py-20 md:py-24 bg-surface-subtle/50 border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="green" className="mb-3">
            Multi-Channel Intelligence
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="green" className="mb-2.5">
            Connected Network
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            The Content Ecosystem
          </h2>
          <p className="text-foreground-muted text-base sm:text-lg mt-3 font-light">
            We distribute specialized research across dedicated mediums—from 24×7 raw regulatory feeds to long-form forensic memos.
          <p className="text-foreground-muted text-xs sm:text-sm mt-1.5 font-normal">
            Specialized research distributed across dedicated formats—from 24×7 raw feeds to long-form memos.
          </p>
        </div>

        {/* Connected Ecosystem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ECOSYSTEM_CHANNELS.map((channel) => (
            <a
              key={channel.name}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl bg-surface-card border border-surface-border p-6 sm:p-7 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:bg-surface-hover/70 relative shadow-sm"
              className="group block rounded-2xl bg-surface-card border border-surface-border p-5 sm:p-6 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:bg-surface-hover/70 relative shadow-sm"
            >
              {/* Top Row: Icon + Badge + Arrow */}
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-xl bg-surface-subtle border border-surface-border group-hover:scale-105 transition-transform shadow-inner">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-surface-subtle border border-surface-border group-hover:scale-105 transition-transform shadow-inner">
                  {getPlatformIcon(channel.platform)}
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-foreground-muted bg-surface-subtle px-2.5 py-1 rounded-full border border-surface-border">
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-foreground-muted bg-surface-subtle px-2 py-0.5 rounded-full border border-surface-border">
                    {channel.badge}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-surface-subtle flex items-center justify-center text-foreground-muted group-hover:text-foreground group-hover:bg-surface-hover transition-colors">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <div className="w-6 h-6 rounded-full bg-surface-subtle flex items-center justify-center text-foreground-muted group-hover:text-foreground group-hover:bg-surface-hover transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Channel Title & Handle */}
              <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
              <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                {channel.name}
              </h3>
              <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mt-0.5 mb-3 font-medium">
              <p className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 mt-0.5 mb-2 font-medium">
                {channel.focus}
              </p>

              {/* Description */}
              <p className="text-sm text-foreground-muted font-light leading-relaxed mb-4">
              <p className="text-xs text-foreground-muted font-normal leading-relaxed mb-3">
                {channel.description}
              </p>

              {/* Bottom Feature Tag */}
              <div className="pt-4 border-t border-surface-border flex items-center justify-between text-xs">
                <span className="text-foreground-muted font-mono text-[11px]">
              <div className="pt-3 border-t border-surface-border flex items-center justify-between text-xs">
                <span className="text-foreground-muted font-mono text-[10px]">
                  {channel.handle}
                </span>
                <span className="text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 font-medium inline-flex items-center gap-1 transition-colors">
                <span className="text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 font-medium inline-flex items-center gap-1 transition-colors text-xs">
                  Join Channel
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Live Network Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-50 via-slate-100 to-amber-50 dark:from-emerald-950/30 dark:via-slate-900 dark:to-amber-950/20 border border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-slate-100 to-amber-50 dark:from-emerald-950/30 dark:via-slate-900 dark:to-amber-950/20 border border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <div>
              <p className="text-sm font-semibold text-foreground">
              <p className="text-xs sm:text-sm font-semibold text-foreground">
                Direct Analyst Screening Stream
              </p>
              <p className="text-xs text-foreground-muted">
              <p className="text-[11px] text-foreground-muted">
                Join active retail market participants reviewing corporate disclosures daily.
              </p>
            </div>
          </div>
          <a
            href={BRAND_INFO.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-slate-950 font-semibold text-xs whitespace-nowrap inline-flex items-center gap-2 transition-colors shadow-sm"
            className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-slate-950 font-semibold text-xs whitespace-nowrap inline-flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <span>Enter WhatsApp Community</span>
            <span>Enter WhatsApp Group</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}