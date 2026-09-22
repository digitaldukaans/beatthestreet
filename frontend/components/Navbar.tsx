"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { BRAND_INFO } from "@/lib/data";
import { Button } from "@/components/ui/Button";

interface NavbarProps {
  onOpenCommunityModal: () => void;
}

export function Navbar({ onOpenCommunityModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Insights", href: "#insights" },
    { name: "Research", href: "#coverage" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "Ecosystem", href: "#ecosystem" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-md text-slate-900"
            : "bg-gradient-to-b from-[#061224]/90 via-[#061224]/50 to-transparent py-4 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none rounded-sm"
            >
              <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl p-1 flex items-center justify-center transition-all ${
                isScrolled ? "bg-slate-100 border border-slate-200" : "bg-white/10 backdrop-blur-md border border-white/20"
              }`}>
                <Image
                  src={isScrolled ? "/images/logo.png" : "/images/logo-white.png"}
                  alt="Beat The Street Logo"
                  width={34}
                  height={34}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-serif text-lg sm:text-xl font-bold tracking-wider transition-colors ${
                    isScrolled ? "text-slate-900 group-hover:text-blue-600" : "text-white"
                  }`}
                >
                  BEAT THE STREET
                </span>
                <span className={`text-[9px] uppercase tracking-[0.25em] font-semibold ${
                  isScrolled ? "text-blue-600" : "text-blue-300"
                }`}>
                  Capital Markets · Mumbai
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs lg:text-sm font-semibold px-3 py-1.5 rounded-lg transition-all ${
                    isScrolled
                      ? "text-slate-600 hover:text-blue-600 hover:bg-blue-50/70"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                onClick={onOpenCommunityModal}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-4 shadow-md shadow-blue-600/30"
              >
                <span>Join Community</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                    : "text-white hover:bg-white/10"
                }`}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden animate-in fade-in duration-200">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white border-l border-slate-200 p-6 flex flex-col justify-between shadow-2xl z-10 text-slate-900">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 p-1 flex items-center justify-center shadow-sm">
                    <Image
                      src="/images/logo.png"
                      alt="Beat The Street Logo"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-serif font-bold text-base text-slate-900 tracking-wide">
                    BEAT THE STREET
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-semibold text-slate-700 hover:text-blue-600 py-2.5 px-3 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 space-y-4">
              <Button
                variant="primary"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommunityModal();
                }}
              >
                <span>Join the Community</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>

              <div className="text-center">
                <p className="text-[11px] text-slate-500 font-mono">
                  {BRAND_INFO.location}
                </p>
                <p className="text-[11px] text-blue-600 font-serif italic mt-0.5 font-medium">
                  &ldquo;{BRAND_INFO.tagline}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}