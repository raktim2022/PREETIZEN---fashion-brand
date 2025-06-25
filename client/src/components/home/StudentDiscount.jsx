"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { FiArrowRight } from "react-icons/fi";

const StudentDiscount = () => {
  const bannerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".discount-text",
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.7, 
          stagger: 0.15,
          ease: "power2.out" 
        }
      );
    }, bannerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={bannerRef}
      className="py-16 bg-[#F8F3E9]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Image with animation */}
          <motion.div 
            className="w-full md:w-2/5 lg:w-1/3 order-2 md:order-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[#D46A6A] z-0"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-[#D46A6A] z-0"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              />
              
              {/* Main image */}
              <div className="relative z-10 overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://static.wixstatic.com/media/cf391b_efb7107451514b2ab0a95aa5daab127d~mv2.jpeg/v1/crop/x_0,y_193,w_1200,h_1185/fill/w_454,h_448,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/everyone_27th.jpeg"
                  alt="Student in sustainable fashion" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#A7BFA3]/20 to-transparent" />
              </div>
            </div>
          </motion.div>
          
          {/* Text content */}
          <div className="w-full md:w-3/5 lg:w-2/3 order-1 md:order-2 text-center md:text-left">
            <motion.span 
              className="discount-text inline-block text-sm uppercase tracking-wider text-[#A7BFA3] font-bold mb-2"
            >
              Introducing the Preetizen Student Offer
            </motion.span>
            
            <motion.h2 
              className="discount-text text-3xl md:text-4xl lg:text-5xl font-serif text-[#6B4F3B] mb-4 leading-tight"
            >
              Students Get <span className="text-[#D46A6A]">15% Off</span> <br className="hidden md:block" />
              <span className="font-light">Because You Deserve It!</span>
            </motion.h2>
            
            <motion.p 
              className="discount-text text-[#6B4F3B]/80 max-w-lg mx-auto md:mx-0 mb-8"
            >
              We believe in supporting your journey. If you're a school/college/university student, you can now get 15% off on your Preetizen order (only applicable on one order per student).
            </motion.p>
            
            <motion.div 
              className="discount-text"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.a
                href="/student-discount"
                className="inline-flex items-center px-8 py-3 bg-[#D46A6A] text-white rounded hover:bg-[#C15A5A] transition-colors"
                whileHover={{ x: 5 }}
              >
                <span>Claim Your Discount</span>
                <FiArrowRight className="ml-2" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentDiscount;