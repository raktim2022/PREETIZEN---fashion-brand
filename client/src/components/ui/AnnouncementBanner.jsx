'use client';
import React from 'react';
import { motion } from 'framer-motion';

const AnnouncementBanner = ({ isVisible }) => {
  const bannerText = "NEW COLLECTION DROP INCOMING!";
  const repeatedText = Array(10).fill(bannerText).join(' • ');
  
  return (
    <motion.div 
      className="bg-[#D46A6A] overflow-hidden"
      initial={{ height: 0, opacity: 0 }}
      animate={{ 
        height: isVisible ? 'auto' : 0,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <div className="relative flex items-center py-2 whitespace-nowrap">
        <motion.div
          className="flex items-center text-white text-sm font-medium"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 40,
              ease: 'linear',
            },
          }}
        >
          <span className="inline-block px-4 font-[BoskaItalic]">{repeatedText}</span>
          <span className="inline-block px-4 font-[BoskaItalic]">{repeatedText}</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnnouncementBanner;