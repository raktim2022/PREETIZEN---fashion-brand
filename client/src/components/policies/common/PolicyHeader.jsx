import React from "react";
import { motion } from "framer-motion";

export default function PolicyHeader({ title, description }) {
  return (
    <section className="bg-[#F8F3E9] py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-serif text-[#6B4F3B] mb-4">{title}</h1>
          <div className="w-20 h-1 bg-[#D46A6A] mx-auto mb-6"></div>
          {description && (
            <p className="text-[#6B4F3B]/80">{description}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}