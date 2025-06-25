"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import ModelHero from "@/components/be-our-model/ModelHero";
import PreviousModels from "@/components/be-our-model/PreviousModels";
import ModelApplicationCTA from "@/components/be-our-model/ModelApplicationCTA";
import BehindTheScenes from "@/components/be-our-model/BehindTheScenes";
import PageSEO from "@/components/common/PageSEO";
import PageTransition from "@/components/ui/PageTransition";

export default function BeOurModelPage() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageTransition>
      <main className="bg-[#FFFBF7]">
        <PageSEO
          title="Become a Preetizen Model | Authentic Fashion Representation"
          description="Join our diverse community of Preetizen models. We celebrate authenticity and real beauty. Apply to be part of our next collection launching June 15, 2025."
        />

        {/* Hero Section */}
        <ModelHero onApplyClick={scrollToForm} />

        {/* Previous Models Showcase */}
        <PreviousModels />

        {/* Behind The Scenes */}
        <BehindTheScenes />

        {/* Application CTA & Form */}
        <ModelApplicationCTA ref={formRef} />
      </main>
    </PageTransition>
  );
}
