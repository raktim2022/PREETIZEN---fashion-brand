"use client";

import React from "react";
import { motion } from "framer-motion";

const BrandStory = () => {
  return (
    <section className="py-20 bg-[#FDF8F2]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl font-serif text-[#6B4F3B] mb-6">Our Story</h2>
          <p className="text-lg text-[#333333] mb-6">
            Born in the heart of Kolkata, Preetizen collaborates with local artisans to create
            sustainable fashion pieces that celebrate traditional craftsmanship. 
            Our mission is to bring beautiful, eco-conscious clothing to the world while 
            supporting the communities that make it possible.
          </p>
          <a 
            href="/about" 
            className="inline-block text-[#D46A6A] font-medium hover:underline transition-all"
          >
            Read Our Story
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;