"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/our-story/HeroSection";
import CoreValues from "@/components/our-story/CoreValues";
import JourneySection from "@/components/our-story/JourneySection";
import CommunitySection from "@/components/our-story/CommunitySection";
import SmallBatchSection from "@/components/our-story/SmallBatchSection";
import TeamSection from "@/components/our-story/TeamSection";
import PageTransition from "@/components/ui/PageTransition";

export default function OurStoryPage() {
  return (
    <PageTransition>
      <div className="bg-[#F8F3E9]">
        <HeroSection />
        <CoreValues />
        <JourneySection />
        <CommunitySection />
        <SmallBatchSection />
        <TeamSection />
      </div>
    </PageTransition>
  );
}