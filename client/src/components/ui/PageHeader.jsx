"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PageHeader = ({ title, subtitle, imageSrc }) => {
  return (
    <header className="relative bg-[#6B4F3B] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={imageSrc} 
          alt={title}
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4"
          >
            {title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
      
      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#FFFBF7] rounded-t-3xl z-10" />
    </header>
  );
};

export default PageHeader;