"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BrandStrip } from "@/components/BrandStrip";
import { IntroSection } from "@/components/IntroSection";
import { CoverageGrid } from "@/components/CoverageGrid";
import { PhilosophySection } from "@/components/PhilosophySection";
import { InsightsPreview } from "@/components/InsightsPreview";
import { Ecosystem } from "@/components/Ecosystem";
import { TeamSection } from "@/components/TeamSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { CommunityModal } from "@/components/ui/CommunityModal";

export default function Home() {
  const [isCommunityModalOpen, setIsCommunityModalOpen] = useState(false);

  const handleOpenCommunityModal = () => {
    setIsCommunityModalOpen(true);
  };

  const handleCloseCommunityModal = () => {
    setIsCommunityModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-slate-100 flex flex-col selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Top Sticky Navigation */}
      <Navbar onOpenCommunityModal={handleOpenCommunityModal} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenCommunityModal={handleOpenCommunityModal} />

        {/* 2. Institutional Brand Strip */}
        <BrandStrip />

        {/* 3. Introduction & Business-Behind-The-Price Narrative */}
        <IntroSection />

        {/* 4. Research Coverage Pillars */}
        <CoverageGrid />

        {/* 5. Signature Philosophy Moment */}
        <PhilosophySection />

        {/* 6. Editorial Deep-Dive Insights Preview */}
        <InsightsPreview onOpenCommunityModal={handleOpenCommunityModal} />

        {/* 7. Connected Media & Distribution Ecosystem */}
        <Ecosystem />

        {/* 8. Leadership & Analyst Desk */}
        <TeamSection />

        {/* 9. Conversion & Community CTA */}
        <CTASection onOpenCommunityModal={handleOpenCommunityModal} />
      </main>

      {/* 10. Comprehensive Institutional Footer */}
      <Footer />

      {/* Interactive Global Community Modal */}
      <CommunityModal
        isOpen={isCommunityModalOpen}
        onClose={handleCloseCommunityModal}
      />
    </div>
  );
}

