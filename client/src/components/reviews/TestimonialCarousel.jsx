"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const timeoutRef = useRef(null);
  
  const testimonials = [
    {
      id: 1,
      name: "Tanya G.",
      location: "Delhi",
      rating: 5,
      product: "Mosha Bujho Bengali Graphic Tee",
      date: "July 3, 2025",
      text: "I ordered this tee after seeing it on Instagram and it surpassed my expectations! The material is incredibly soft, and the Bengali phrase always sparks conversations. As someone who values sustainability, I appreciate that Preetizen uses ethical manufacturing practices. The packaging was also eco-friendly—no plastic in sight. Will definitely be ordering more!"
    },
    {
      id: 2,
      name: "Aditya M.",
      location: "Hyderabad",
      rating: 5,
      product: "Cha Lover Bengali Tee",
      date: "June 28, 2025",
      text: "As a tea enthusiast with Bengali roots, this t-shirt spoke to me on a spiritual level! The quality is exceptional—thick cotton that doesn't feel flimsy. I've washed it multiple times and the print hasn't faded at all. Shipping was faster than expected and the handwritten thank you note was a lovely touch. Preetizen's attention to detail sets them apart from other brands."
    },
    {
      id: 3,
      name: "Rohan D.",
      location: "Chennai",
      rating: 4,
      product: "Bhalobasha Embroidered Tee",
      date: "June 12, 2025",
      text: "The embroidery work on this tee is stunning! You can tell it's made with care and expertise. The fit is relaxed but not baggy, exactly what I was looking for. The only reason I'm not giving 5 stars is that I wish there were more color options available. That said, the quality and craftsmanship justify the price point. Looking forward to my next purchase!"
    }
  ];
  
  const next = () => {
    setDirection("right");
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prev = () => {
    setDirection("left");
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  // Auto-advance carousel
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      next();
    }, 6000);
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeIndex]);
  
  const variants = {
    enter: (direction) => {
      return {
        x: direction === "right" ? 300 : -300,
        opacity: 0
      };
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        x: direction === "right" ? -300 : 300,
        opacity: 0
      };
    }
  };
  
  return (
    <div className="max-w-5xl mx-auto">
      <div className="relative overflow-hidden">
        {/* Carousel container */}
        <div className="relative py-8 overflow-hidden min-h-[300px]">
          <motion.div 
            key={activeIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-white rounded-xl p-6 md:p-8 shadow-sm"
          >
            <div className="mb-5 flex">
              {[...Array(5)].map((_, i) => (
                <FiStar 
                  key={i} 
                  size={18} 
                  className={i < testimonials[activeIndex].rating 
                    ? "text-[#D46A6A] fill-[#D46A6A]" 
                    : "text-[#D46A6A]/20"
                  } 
                />
              ))}
            </div>
            
            <blockquote className="text-lg md:text-xl italic text-[#6B4F3B] mb-8 relative">
              <span className="absolute -top-5 -left-2 text-5xl text-[#D46A6A]/10 font-serif">"</span>
              {testimonials[activeIndex].text}
              <span className="absolute -bottom-6 right-0 text-5xl text-[#D46A6A]/10 font-serif">"</span>
            </blockquote>
            
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-medium text-[#6B4F3B]">{testimonials[activeIndex].name}</p>
                <p className="text-sm text-[#6B4F3B]/70">{testimonials[activeIndex].location}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-[#D46A6A]">{testimonials[activeIndex].product}</p>
                <p className="text-xs text-[#6B4F3B]/60">{testimonials[activeIndex].date}</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Navigation controls */}
        <button
          onClick={prev}
          className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-4 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#A7BFA3]/30 text-[#6B4F3B] hover:border-[#A7BFA3] transition-colors shadow-sm z-10"
          aria-label="Previous testimonial"
        >
          <FiChevronLeft size={20} />
        </button>
        
        <button
          onClick={next}
          className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#A7BFA3]/30 text-[#6B4F3B] hover:border-[#A7BFA3] transition-colors shadow-sm z-10"
          aria-label="Next testimonial"
        >
          <FiChevronRight size={20} />
        </button>
      </div>
      
      {/* Indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > activeIndex ? "right" : "left");
              setActiveIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? "bg-[#D46A6A] w-6" 
                : "bg-[#D46A6A]/30 hover:bg-[#D46A6A]/50"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;