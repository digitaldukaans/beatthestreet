"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { BRAND_INFO } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useTheme } from "@/components/ThemeProvider";

interface NavbarProps {
  onOpenCommunityModal: () => void;
}

export function Navbar({ onOpenCommunityModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
            ? "bg-surface/90 backdrop-blur-md border-b border-surface-border py-3 shadow-lg shadow-black/5 dark:shadow-black/30 text-foreground"
            : "bg-black/40 backdrop-blur-sm border-b border-white/10 py-5 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Wordmark */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/50 rounded-sm"
            >
              <div className="w-8 h-8 rounded bg-gradient-to-br from-emerald-500/20 to-slate-900 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-serif font-bold text-sm tracking-tight group-hover:border-emerald-400 transition-colors shadow-sm">
                BS
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-serif text-lg sm:text-xl font-bold tracking-wider transition-colors ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  BEAT THE STREET
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-emerald-400 font-medium">
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
                  className={`text-xs lg:text-sm font-medium px-3 py-1.5 rounded-md transition-all ${
                    isScrolled
                      ? "text-foreground-muted hover:text-foreground hover:bg-surface-hover"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action + Theme Toggle */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              
              <Button
                variant="primary"
                size="sm"
                onClick={onOpenCommunityModal}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs px-4 shadow-sm shadow-emerald-500/20"
              >
                <span>Join Community</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
              </Button>
            </div>

            {/* Mobile Actions: Theme Toggle & Hamburger */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? "text-foreground-muted hover:text-foreground hover:bg-surface-hover"
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
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-surface border-l border-surface-border p-6 flex flex-col justify-between shadow-2xl z-10">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-surface-border">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-serif font-bold text-xs">
                    BS
                  </div>
                  <span className="font-serif font-bold text-base text-foreground tracking-wide">
                    BEAT THE STREET
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-md text-foreground-muted hover:text-foreground hover:bg-surface-hover"
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
                    className="text-base font-medium text-foreground hover:text-emerald-500 py-2.5 px-3 rounded-md hover:bg-surface-hover transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-surface-border space-y-4">
              {/* Theme Switcher Button inside Mobile Drawer */}
              <button
                onClick={toggleTheme}
                className="w-full flex items-center justify-between p-3 rounded-lg bg-surface-subtle border border-surface-border text-sm font-medium text-foreground hover:bg-surface-hover transition-colors"
              >
                <span className="flex items-center gap-2">
                  {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
                  <span>Appearance</span>
                </span>
                <span className="text-xs font-mono uppercase text-foreground-muted">
                  {theme === "dark" ? "Dark Mode" : "Light Mode"}
                </span>
              </button>

              <Button
                variant="primary"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommunityModal();
                }}
              >
                <span>Join the Community</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>

              <div className="text-center">
                <p className="text-[11px] text-foreground-muted font-mono">
                  {BRAND_INFO.location}
                </p>
                <p className="text-[11px] text-emerald-500 font-serif italic mt-0.5">
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