"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Mail, ArrowUpRight, CheckCircle2, Shield } from "lucide-react";
import { BRAND_INFO } from "@/lib/data";
import { Badge } from "./Badge";
import { YouTubeIcon, XIcon, TelegramIcon, WhatsAppIcon, SubstackIcon } from "./Icons";

interface CommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommunityModal({ isOpen, onClose }: CommunityModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col text-slate-900"
      >
        {/* Header decoration */}
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-emerald-500 to-blue-600" />

        <div className="p-6 sm:p-8 overflow-y-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 p-2 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 p-1 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Beat The Street"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
              <Badge variant="blue">
                Independent Research Community
              </Badge>
            </div>
            
            <h2 id="modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Join the Beat The Street Network
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-light">
              Connect directly with our analysts, receive real-time corporate filing alerts, and participate in business breakdowns.
            </p>
          </div>

          {/* Quick Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <a
              href={BRAND_INFO.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-emerald-100 text-emerald-600 group-hover:scale-105 transition-transform">
                <WhatsAppIcon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900 text-sm">WhatsApp Community</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-600 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  Curated daily business summaries & community discussions.
                </p>
              </div>
            </a>

            <a
              href={BRAND_INFO.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-500 hover:bg-sky-50/40 transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-sky-100 text-sky-600 group-hover:scale-105 transition-transform">
                <TelegramIcon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900 text-sm">Telegram NewsFeed</span>
                  <ArrowUpRight className="w-4 h-4 text-sky-600 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  24×7 automated market feed, regulatory releases & updates.
                </p>
              </div>
            </a>

            <a
              href={BRAND_INFO.socials.substack}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-500 hover:bg-amber-50/40 transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-amber-100 text-amber-600 group-hover:scale-105 transition-transform">
                <SubstackIcon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900 text-sm">Substack Memos</span>
                  <ArrowUpRight className="w-4 h-4 text-amber-600 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  Long-form company research and forensic teardowns.
                </p>
              </div>
            </a>

            <a
              href={BRAND_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-red-500 hover:bg-red-50/40 transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-red-100 text-red-600 group-hover:scale-105 transition-transform">
                <YouTubeIcon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900 text-sm">YouTube Channel</span>
                  <ArrowUpRight className="w-4 h-4 text-red-500 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  Deep-dive fundamental & forensic video analyses.
                </p>
              </div>
            </a>
          </div>

          {/* Email dispatch alert */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-sm font-semibold text-slate-900 mb-1 flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              Get Direct Research Dispatch Alerts
            </h4>
            <p className="text-xs text-slate-600 mb-3">
              Receive notifications whenever a new deep-dive memo or forensic screening report is published.
            </p>

            {isSubmitted ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-2 text-emerald-800 text-xs">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>Thank you! You are on the priority dispatch list. Check your inbox shortly.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your professional email..."
                  required
                  className="flex-1 bg-white border border-slate-200 rounded-lg px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition-colors whitespace-nowrap shadow-sm"
                >
                  Join Dispatch List
                </button>
              </form>
            )}
          </div>

          {/* Disclaimer badge */}
          <div className="mt-5 flex items-center gap-2 text-[11px] text-slate-500">
            <Shield className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>Strictly educational and research-oriented. No investment advice or stock tips.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

