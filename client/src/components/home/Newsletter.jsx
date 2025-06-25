"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate form submission
      setIsSubmitted(true);
      // Reset after 5 seconds for demo purposes
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 5000);
    }
  };

  return (
    <section className="py-24 bg-[#F8F3E9] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Overlapping cards layout - Larger image card with smaller form card */}
          <div className="flex flex-col lg:flex-row items-center">
            
            {/* First card with image - Now larger */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden lg:w-[60%] z-0 lg:h-[550px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64 md:h-full">
                <img 
                  src="https://static.wixstatic.com/media/cf391b_81ca38dbefe5493b9fb739f5aa0ed5ca~mv2.jpg/v1/fill/w_604,h_429,al_c,q_80,enc_avif,quality_auto/cf391b_81ca38dbefe5493b9fb739f5aa0ed5ca~mv2.jpg"
                  alt="Woman in sustainable fashion" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent">
                  <div className="absolute bottom-0 left-0 p-8">
                    <motion.p 
                      className="text-sm font-medium uppercase tracking-wider text-white/80"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      Delivered to your inbox
                    </motion.p>
                    <motion.h3 
                      className="text-2xl font-serif mt-1 text-white"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      Sustainable Stories & Updates
                    </motion.h3>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Second card with form - Now smaller and more precise */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 lg:p-10 lg:w-[50%] lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 flex flex-col justify-center relative -mt-8 lg:mt-0 z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Decorative elements */}
              <motion.div 
                className="absolute top-0 right-0 w-16 h-16 rounded-bl-full bg-[#A7BFA3]/10 z-0"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
              />
              
              <motion.div 
                className="absolute bottom-0 left-0 w-12 h-12 rounded-tr-full bg-[#D46A6A]/10 z-0"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                viewport={{ once: true }}
              />

              <div className="relative z-10">
                <motion.span 
                  className="inline-block text-sm uppercase tracking-widest text-[#A7BFA3] font-bold mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Stay Connected
                </motion.span>
                
                <motion.h2 
                  className="text-2xl md:text-3xl font-serif text-[#6B4F3B] mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Join Our Community
                </motion.h2>
                
                <motion.p 
                  className="text-sm text-[#333333]/80 mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Subscribe to receive updates on new collections, sustainable fashion tips, 
                  and exclusive offers.
                </motion.p>
                
                <motion.form 
                  className="w-full"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <AnimatedFormContent isSubmitted={isSubmitted} email={email} setEmail={setEmail} />
                  
                  <p className="text-xs text-[#333333]/60 mt-3 flex items-start">
                    <span className="text-[#A7BFA3] mr-2 mt-0.5">
                      <FiCheck size={14} />
                    </span>
                    We respect your privacy.
                  </p>
                </motion.form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#A7BFA3]/5 -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#D46A6A]/5 -ml-48 -mb-48" />
    </section>
  );
};

// Animated form content component
const AnimatedFormContent = ({ isSubmitted, email, setEmail }) => {
  return (
    <div className="relative h-12">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center"
          >
            <div className="w-full bg-[#A7BFA3]/20 text-[#6B4F3B] rounded-md px-4 py-2.5 flex items-center justify-center">
              <FiCheck className="mr-2" />
              <span>Thank you for subscribing!</span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <div className="flex items-center h-full w-full">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address" 
                className="flex-grow px-4 py-2.5 rounded-l-md border border-[#A7BFA3]/30 focus:outline-none focus:border-[#A7BFA3] h-full text-sm"
                required
              />
              <button 
                type="submit" 
                className="h-full bg-[#D46A6A] hover:bg-[#C15A5A] text-white px-5 py-2.5 rounded-r-md transition-colors duration-300 flex items-center justify-center"
              >
                <span className="hidden sm:inline mr-2 text-sm">Subscribe</span>
                <FiArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Newsletter;