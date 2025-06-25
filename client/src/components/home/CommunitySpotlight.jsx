"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { FiArrowLeft, FiArrowRight, FiMapPin, FiHeart } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    name: "Aarti M.",
    quote: "These clothes make me feel beautiful in my own skin.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1374&auto=format&fit=crop",
    location: "Mumbai, India",
    favorite: "Wildflower Midi Dress"
  },
  {
    id: 2,
    name: "Maya K.",
    quote: "Sustainable fashion that doesn't compromise on style.",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1374&auto=format&fit=crop",
    location: "Bengaluru, India",
    favorite: "Organic Cotton Blouse"
  },
  {
    id: 3,
    name: "Priya S.",
    quote: "I love knowing artisans are supported through my purchase.",
    image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1374&auto=format&fit=crop",
    location: "Delhi, India",
    favorite: "Hand-dyed Silk Scarf"
  },
  {
    id: 4,
    name: "Diya R.",
    quote: "These pieces tell a story and make me feel connected.",
    image: "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?q=80&w=1374&auto=format&fit=crop",
    location: "Kolkata, India",
    favorite: "Hemp Linen Pants"
  }
];

const CommunitySpotlight = () => {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const handleDotClick = (index) => {
    if (isAnimating || index === current) return;
    setIsAnimating(true);
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 6000);
    
    return () => clearInterval(interval);
  }, [current, isAnimating]);

  // Refined slide variants for smoother transitions
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30, bounce: 0 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30, bounce: 0 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    }),
  };

  // Content animation for text elements inside each slide
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#FDF8F2] to-white" ref={sliderRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center mb-12">
          <h2 className="text-6xl font-serif text-[#6B4F3B] mb-4">Our Community</h2>
          <p className="text-[#333333]/80">Real people, real stories. See how our community wears and loves Preetizen.</p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <AnimatePresence initial={false} custom={direction} mode="wait" onExitComplete={() => setIsAnimating(false)}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="md:flex items-center bg-white"
              >
                <div className="md:w-1/2 h-[300px] md:h-[400px] overflow-hidden">
                  <motion.div className="h-full w-full overflow-hidden">
                    <motion.img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 6, ease: "easeOut" }}
                    />
                  </motion.div>
                </div>
                <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    key={`content-${current}`}
                    className="space-y-4"
                  >
                    <svg className="w-10 h-10 text-[#D46A6A]/30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <blockquote className="text-xl font-light italic text-[#333333] leading-relaxed">
                      "{testimonials[current].quote}"
                    </blockquote>
                    
                    <div className="pt-4 border-t border-[#A7BFA3]/20">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#A7BFA3]/20 flex items-center justify-center text-[#6B4F3B] font-serif text-lg">
                          {testimonials[current].name.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <p className="text-[#6B4F3B] font-medium">{testimonials[current].name}</p>
                          <p className="text-sm text-[#333333]/60">Preetizen Customer</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col space-y-2 text-sm">
                        <div className="flex items-center text-[#333333]/70">
                          <FiMapPin className="mr-2 text-[#A7BFA3]" />
                          <span>{testimonials[current].location}</span>
                        </div>
                        <div className="flex items-center text-[#333333]/70">
                          <FiHeart className="mr-2 text-[#D46A6A]" />
                          <span>Favorite: {testimonials[current].favorite}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === current 
                    ? 'bg-[#D46A6A] w-8' 
                    : 'bg-[#A7BFA3]/40 hover:bg-[#A7BFA3]/60 w-2.5'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to slide ${index + 1}`}
                disabled={isAnimating}
              />
            ))}
          </div>
          
          <motion.button 
            className="absolute top-1/2 -left-5 md:-left-8 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-[#6B4F3B] z-10 border border-[#A7BFA3]/10"
            onClick={prevSlide}
            aria-label="Previous slide"
            whileHover={{ scale: 1.05, x: -2 }}
            whileTap={{ scale: 0.95 }}
            disabled={isAnimating}
          >
            <FiArrowLeft size={20} />
          </motion.button>
          <motion.button 
            className="absolute top-1/2 -right-5 md:-right-8 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-[#6B4F3B] z-10 border border-[#A7BFA3]/10"
            onClick={nextSlide}
            aria-label="Next slide"
            whileHover={{ scale: 1.05, x: 2 }}
            whileTap={{ scale: 0.95 }}
            disabled={isAnimating}
          >
            <FiArrowRight size={20} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySpotlight;