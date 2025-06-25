"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import {Button} from "../ui/Button";

const Hero = () => {
  const heroRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text",
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2,
          ease: "power3.out" 
        }
      );
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={heroRef} 
      className="relative h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Background image with reveal animation */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img 
          src="https://static.wixstatic.com/media/cf391b_793118a06a9b42eba02a2eec22399046~mv2.jpeg/v1/crop/x_60,y_138,w_1465,h_963/fill/w_979,h_645,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/JPEG%20image-458B-AA46-6F-0.jpeg"
          alt="Model in natural light wearing signature outfit"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20" />
      </motion.div>
      
      <div className="container mx-auto px-6 z-10">
        {/* Hero content with staggered animations */}
        <motion.div 
          className="max-w-xl ml-0 md:ml-12 lg:ml-24 backdrop-blur-sm bg-black/20 p-8 md:p-10 rounded-lg border border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.span 
            className="inline-block text-sm uppercase tracking-widest text-[#E1B866] font-bold mb-4 hero-text"
          >
            Artisan Crafted
          </motion.span>
          
          <motion.h1 
            className="hero-text text-4xl sm:text-5xl md:text-6xl font-serif font-light text-white mb-6 leading-tight drop-shadow-md"
          >
           <p className="text-[#E1B866]">Crafted with Love,</p>
            <span className="text-[#D46A6A]">Made with Purpose</span>
          </motion.h1>
          
          <motion.p 
            className="hero-text text-base sm:text-lg md:text-xl mb-8 text-white/90 max-w-md leading-relaxed drop-shadow"
          >
            Sustainable fashion crafted with love by local artisans. 
            Ethically sourced materials that respect both people and planet.
          </motion.p>
          
          <motion.div className="hero-text flex flex-col sm:flex-row gap-4">
            <Button variants="default" type="button" className="px-8 py-3.5 text-base shadow-lg">
              Shop Wildflower Collection
            </Button>
            
            <motion.button 
              className="flex items-center justify-center text-white text-base group"
              whileHover={{ x: 5 }}
            >
              <span>Explore Our Story</span>
              <motion.span 
                className="ml-2 inline-block"
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  repeatType: "loop"
                }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-white/80 text-sm mb-2">Scroll</span>
        <motion.div 
          className="w-0.5 h-8 bg-white/50"
          animate={{ 
            scaleY: [1, 0.5, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </motion.div>
    </div>
  );
};

export default Hero;