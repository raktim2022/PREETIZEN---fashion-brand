"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const BehindTheScenes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const scenes = [
    {
      id: 1,
      image: "/images/behind-scenes/scene1.jpg",
      caption: "Styling session for the Wildflower Collection"
    },
    {
      id: 2,
      image: "/images/behind-scenes/scene2.jpg",
      caption: "Getting the perfect shot at our eco-friendly studio"
    },
    {
      id: 3,
      image: "/images/behind-scenes/scene3.jpg",
      caption: "Models sharing stories between takes"
    },
    {
      id: 4,
      image: "/images/behind-scenes/scene4.jpg",
      caption: "Final touches before the catalog shoot"
    },
    {
      id: 5,
      image: "/images/behind-scenes/scene5.jpg",
      caption: "Team lunch during our last campaign"
    }
  ];
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === scenes.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? scenes.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-[#F8F3E9]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#6B4F3B] mb-4">Behind The Scenes</h2>
          <div className="w-20 h-1 bg-[#D46A6A] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-[#6B4F3B]/80">
            Get a glimpse into what happens during our photoshoots and the fun our models have
          </p>
        </motion.div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-md">
            <div className="aspect-[16/9] relative">
              <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {scenes.map((scene, index) => (
                  <div key={scene.id} className="min-w-full">
                    <div className="aspect-[16/9] relative">
                      <Image
                        src={scene.image}
                        alt={scene.caption}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                        <p className="text-white text-lg">{scene.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full bg-white/30 backdrop-blur-sm text-[#6B4F3B] hover:bg-white/50 transition-colors z-10"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-full bg-white/30 backdrop-blur-sm text-[#6B4F3B] hover:bg-white/50 transition-colors z-10"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {scenes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index ? 'w-8 bg-[#D46A6A]' : 'w-2 bg-[#6B4F3B]/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg font-serif text-[#6B4F3B] italic max-w-2xl mx-auto">
            "Being a Preetizen model isn't about perfect poses — it's about expressing your authentic self and having fun while doing it!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default BehindTheScenes;