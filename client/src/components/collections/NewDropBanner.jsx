"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

const NewDropBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Auto-hide banner after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 15000); // 15 seconds
    
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div 
      className="bg-[#D46A6A] text-white py-3 relative"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="flex items-center space-x-2">
          <motion.span 
            className="inline-block h-3 w-3 rounded-full bg-white"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          ></motion.span>
          <p className="font-medium text-sm md:text-base">
            NEW COLLECTION DROP INCOMING! Sign up for early access.
          </p>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 hover:bg-white/20 rounded-full"
          aria-label="Close banner"
        >
          <FiX />
        </button>
      </div>
    </motion.div>
  );
};

export default NewDropBanner;