"use client";

import React from "react";
import { motion } from "framer-motion";
import Hero from "@/components/home/Hero";
import BrandStory from "@/components/home/BrandStory";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import CommunitySpotlight from "@/components/home/CommunitySpotlight";
import Newsletter from "@/components/home/Newsletter";
import StudentDiscount from "@/components/home/StudentDiscount";
import PageTransition from "@/components/ui/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[#FDF8F2]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <BrandStory />
          <FeaturedCollection />
          <CommunitySpotlight />
          <StudentDiscount />
          <Newsletter />
        </motion.div>
      </main>
    </PageTransition>
  );
}
