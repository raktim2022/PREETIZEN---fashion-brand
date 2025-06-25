"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { FiArrowRight, FiArrowLeft, FiShoppingBag, FiEye } from "react-icons/fi";
import useEmblaCarousel  from "embla-carousel-react";
import {Button} from "../ui/Button";

const products = [
  {
    id: 1,
    name: "Wildflower Midi Dress",
    price: "$89",
    primaryImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    hoverImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tag: "Best Seller",
    description: "Made from organic cotton with hand-embroidered wildflower details."
  },
  {
    id: 2,
    name: "Organic Cotton Blouse",
    price: "$65",
    primaryImage: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFzaGlvbiUyMGJsb3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    hoverImage: "https://images.unsplash.com/photo-1499939667766-4afceb292d05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc2hpb24lMjBibG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    tag: "Preetizen's Favorite",
    description: "Light and airy blouse made from 100% organic cotton."
  },
  {
    id: 3,
    name: "Hand-dyed Silk Scarf",
    price: "$45",
    primaryImage: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMHNjYXJmfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    hoverImage: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbiUyMHNjYXJmfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tag: "Artisan Crafted",
    description: "Hand-dyed by local artisans using natural pigments and traditional techniques."
  },
  {
    id: 4,
    name: "Hemp Linen Pants",
    price: "$78",
    primaryImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhc2hpb24lMjBwYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    hoverImage: "https://images.unsplash.com/photo-1577900232427-15e7560d5a3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZhc2hpb24lMjBwYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    tag: "Sustainable",
    description: "Breathable and durable pants made from a blend of hemp and organic linen."
  },
  {
    id: 5,
    name: "Sustainable Denim Jacket",
    price: "$110",
    primaryImage: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVuaW0lMjBqYWNrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    hoverImage: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGVuaW0lMjBqYWNrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    tag: "Last Pieces",
    description: "Classic denim jacket made with eco-friendly processes and recycled materials."
  },
  {
    id: 6,
    name: "Floral Print Skirt",
    price: "$69",
    primaryImage: "https://images.unsplash.com/photo-1577900232427-15e7560d5a3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMHNraXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    hoverImage: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbiUyMHNraXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tag: "New Arrival",
    description: "Lightweight skirt with hand-printed floral design inspired by wildflowers."
  }
];

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  
  return (
    <motion.div 
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowQuickView(false);
      }}
    >
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4]">
        {/* Product Tag */}
        <div className="absolute top-3 left-3 z-10">
          <span className={`text-xs font-bold px-3 py-1.5 rounded-full
            ${product.tag === 'Best Seller' ? 'bg-[#D46A6A] text-white' :
              product.tag === 'Preetizen\'s Favorite' ? 'bg-[#E1B866] text-white' :
              product.tag === 'Last Pieces' ? 'bg-black text-white' :
              product.tag === 'New Arrival' ? 'bg-[#A7BFA3] text-white' :
              'bg-white/80 text-[#6B4F3B]'
            }`}
          >
            {product.tag}
          </span>
        </div>
        
        {/* Product Images */}
        <div className="h-full w-full">
          <AnimatePresence>
            <motion.img
              key={isHovered ? "hoverImage" : "primaryImage"}
              src={isHovered ? product.hoverImage : product.primaryImage}
              alt={product.name}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
        </div>
        
        {/* Quick View Button */}
        <motion.div 
          className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-center">
            <button 
              onClick={() => setShowQuickView(true)}
              className="text-white text-sm font-medium flex items-center"
            >
              <FiEye className="mr-2" />
              Quick View
            </button>
            <button
              className="bg-white rounded-full p-2 text-[#333333] hover:bg-[#D46A6A] hover:text-white transition-colors"
            >
              <FiShoppingBag size={16} />
            </button>
          </div>
        </motion.div>
      </div>
      
      <h3 className="text-lg font-medium text-[#6B4F3B]">{product.name}</h3>
      <p className="text-[#333333]">{product.price}</p>
      
      {/* Quick View Modal */}
      <AnimatePresence>
        {showQuickView && (
          <motion.div 
            className="absolute inset-0 z-20 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-4 flex flex-col"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="text-lg font-medium text-[#6B4F3B]">{product.name}</h4>
                <p className="text-[#333333]">{product.price}</p>
              </div>
              <button 
                onClick={() => setShowQuickView(false)}
                className="text-[#333333] hover:text-[#D46A6A]"
              >
                ×
              </button>
            </div>
            <p className="text-sm text-[#333333]/70 mb-3">{product.description}</p>
            <div className="mt-auto">
              <Button variant="primary" className="w-full">
                <FiShoppingBag className="mr-2" size={14} />
                Add to Cart
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FeaturedCollection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false,
    align: 'start',
    dragFree: true
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);
  
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);
  
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".collection-title",
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2,
          ease: "power3.out" 
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 bg-white" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span 
            className="collection-title inline-block text-sm uppercase tracking-widest text-[#A7BFA3] font-bold mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Introducing the
          </motion.span>
          
          <motion.h2 
            className="collection-title text-3xl md:text-6xl font-serif text-[#6B4F3B]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Wildflower Collection
          </motion.h2>
          
          <motion.p 
            className="collection-title text-[#333333] mt-2 max-w-md mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Inspired by nature's gentle beauty and crafted with sustainable materials
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Carousel Navigation Buttons */}
          <div className="hidden md:block">
            <motion.button
              className={`absolute top-1/2 -left-12 -translate-y-1/2 w-10 h-10 rounded-full
                flex items-center justify-center z-10 transition-all
                ${canScrollPrev 
                  ? 'bg-[#A7BFA3] text-white hover:bg-[#D46A6A]'
                  : 'bg-[#A7BFA3]/20 text-[#A7BFA3]/40 cursor-not-allowed'
                }`}
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              whileHover={canScrollPrev ? { scale: 1.1 } : {}}
              whileTap={canScrollPrev ? { scale: 0.9 } : {}}
            >
              <FiArrowLeft />
            </motion.button>
            
            <motion.button
              className={`absolute top-1/2 -right-12 -translate-y-1/2 w-10 h-10 rounded-full
                flex items-center justify-center z-10 transition-all
                ${canScrollNext 
                  ? 'bg-[#A7BFA3] text-white hover:bg-[#D46A6A]'
                  : 'bg-[#A7BFA3]/20 text-[#A7BFA3]/40 cursor-not-allowed'
                }`}
              onClick={scrollNext}
              disabled={!canScrollNext}
              whileHover={canScrollNext ? { scale: 1.1 } : {}}
              whileTap={canScrollNext ? { scale: 0.9 } : {}}
            >
              <FiArrowRight />
            </motion.button>
          </div>
          
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {products.map(product => (
                <div key={product.id} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.333%] px-3">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Navigation Dots */}
          <div className="mt-8 flex justify-center space-x-2 md:hidden">
            {[...Array(Math.ceil(products.length / 1))].map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors
                  ${index === 0 ? 'bg-[#D46A6A]' : 'bg-[#A7BFA3]/30'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <motion.a
            href="/collections/wildflower" 
            className="inline-flex items-center px-8 py-3 bg-[#A7BFA3] text-white rounded hover:bg-[#D46A6A] transition-colors"
            whileHover={{ x: 5 }}
          >
            <span>View All Collection</span>
            <FiArrowRight className="ml-2" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;