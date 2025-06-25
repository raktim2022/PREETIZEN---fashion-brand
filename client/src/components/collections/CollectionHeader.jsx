"use client";

import { motion } from "framer-motion";

const CollectionHeader = ({ title, description }) => {
  return (
    <div className="py-12 bg-[#F8F3E9]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif text-[#6B4F3B] mb-4">{title}</h1>
          <div className="w-20 h-1 bg-[#D46A6A] mx-auto mb-6"></div>
          <p className="text-[#333333]/80 max-w-2xl mx-auto">{description}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default CollectionHeader;