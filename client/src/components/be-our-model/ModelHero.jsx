"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";

const ModelHero = ({ onApplyClick }) => {
  const socialProof = [
    { site: "thereelstars.com", count: "+3" },
    { site: "preetizen.com", count: "+3" },
    { site: "influglue.com", count: "+3" },
  ];
  
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#6B4F3B]/10">
      {/* Background Design Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[#F8F3E9] rounded-bl-[200px]"></div>
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#D46A6A]/10 rounded-full"></div>
        <div className="absolute top-24 right-24 w-40 h-40 bg-[#A7BFA3]/10 rounded-full"></div>
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Text Content */}
        <motion.div 
          className="order-2 md:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-[#D46A6A]/10 px-4 py-2 rounded-full mb-6">
            <span className="text-[#D46A6A] font-medium text-sm">Launching June 15, 2025</span>
          </div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#6B4F3B] mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            BECOME A <span className="text-[#D46A6A]">PREETIZEN</span> MODEL
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-[#6B4F3B]/80 mb-8 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Join our diverse community of real people showcasing authentic style in our next collection.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-10 space-y-6"
          >
            <div className="flex flex-wrap gap-4">
              {socialProof.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center border border-[#6B4F3B]/20 bg-white shadow-sm px-4 py-2 rounded-lg"
                >
                  <span className="text-[#6B4F3B] text-sm font-medium">{item.site}</span>
                  <span className="ml-2 text-[#D46A6A] font-bold text-sm">{item.count}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <button
              className="px-8 py-4 bg-[#D46A6A] text-white rounded-lg hover:bg-[#c05b5b] transition-colors flex items-center group shadow-lg shadow-[#D46A6A]/20"
              onClick={onApplyClick}
            >
              <span className="font-medium">Apply Now</span>
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <span className="text-sm text-[#6B4F3B]/60 font-medium">Limited Spots Available</span>
          </motion.div>
        </motion.div>
        
        {/* Image Container */}
        <motion.div 
          className="relative order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="aspect-[4/5] md:aspect-square relative rounded-2xl overflow-hidden shadow-2xl shadow-[#6B4F3B]/10">
            <Image
              src="https://static.wixstatic.com/media/cf391b_c63b1bbe554a4aea942c3d225926278f~mv2.jpg/v1/fill/w_448,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/external-file_edited.jpg"
              alt="Be Our Model - Preetizen"
              fill
              priority
              className="object-cover"
            />
            {/* Decorative accents */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#6B4F3B]/30 to-transparent"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#A7BFA3]/30 rounded-full blur-xl"></div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[#D46A6A]/20 z-[-1]"></div>
          <div className="absolute -top-4 -right-4 w-40 h-40 rounded-full border-8 border-[#F8F3E9] z-[-1]"></div>
          
          {/* Decorative floating tag */}
          <motion.div 
            className="absolute top-8 -right-8 bg-white py-3 px-6 rounded-lg shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <p className="text-[#6B4F3B] font-serif text-lg">Real people,<br />authentic style</p>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#6B4F3B]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <span className="text-sm mb-2 font-medium">Discover Our Models</span>
        <div className="p-2 rounded-full bg-white shadow-md">
          <FiChevronDown size={18} />
        </div>
      </motion.div>
    </section>
  );
};

export default ModelHero;