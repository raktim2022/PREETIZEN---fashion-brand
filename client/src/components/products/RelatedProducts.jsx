"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

const RelatedProducts = ({ products }) => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };
  
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      
      // Check scroll buttons after animation
      setTimeout(checkScrollButtons, 300);
    }
  };
  
  return (
    <section className="py-12 bg-[#F8F3E9]">
      <div className="container related_products mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-serif text-[#6B4F3B]">You May Also Like</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full border ${
                canScrollLeft 
                  ? 'border-[#6B4F3B] text-[#6B4F3B] hover:bg-[#6B4F3B] hover:text-white' 
                  : 'border-[#6B4F3B]/30 text-[#6B4F3B]/30 cursor-not-allowed'
              } transition-colors`}
              aria-label="Scroll left"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-2 rounded-full border ${
                canScrollRight 
                  ? 'border-[#6B4F3B] text-[#6B4F3B] hover:bg-[#6B4F3B] hover:text-white' 
                  : 'border-[#6B4F3B]/30 text-[#6B4F3B]/30 cursor-not-allowed'
              } transition-colors`}
              aria-label="Scroll right"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div 
          className="flex overflow-x-auto scrollbar-hide gap-4 pb-4"
          ref={scrollContainerRef}
          onScroll={checkScrollButtons}
        >
          {products.map((product) => (
            <motion.div 
              key={product.id}
              className="min-w-[250px] max-w-[250px] bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Link href={`/collections/t-zen/${product.id}`}>
                <div className="relative">
                  {/* Product badges */}
                  {product.badges && product.badges.length > 0 && (
                    <div className="absolute top-2 left-2 z-10">
                      <span 
                        className={`inline-block px-2 py-1 text-xs font-medium rounded-sm ${
                          product.badges[0] === 'Best Seller' ? 'bg-[#D46A6A] text-white' :
                          product.badges[0] === 'New Arrival' ? 'bg-[#6B4F3B] text-white' :
                          product.badges[0] === 'Limited Pieces' ? 'bg-[#A7BFA3] text-white' :
                          product.badges[0] === 'Sale' ? 'bg-[#D46A6A] text-white' :
                          product.badges[0] === 'Crowd Favorite' ? 'bg-[#6B4F3B] text-white' :
                          'bg-[#A7BFA3]/20 text-[#6B4F3B]'
                        }`}
                      >
                        {product.badges[0]}
                      </span>
                    </div>
                  )}
                  
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="250px"
                    />
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-medium text-[#333333] line-clamp-1">{product.name}</h3>
                  
                  {/* Rating */}
                  <div className="flex items-center mt-1 mb-2">
                    <div className="flex text-[#D46A6A]">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          {i < Math.floor(product.rating) ? (
                            <FiStar className="h-3.5 w-3.5 fill-current" />
                          ) : i === Math.floor(product.rating) && product.rating % 1 >= 0.5 ? (
                            <FiStar className="h-3.5 w-3.5 fill-current" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                          ) : (
                            <FiStar className="h-3.5 w-3.5 text-[#A7BFA3]/30" />
                          )}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-[#333333]/70 ml-1">
                      ({product.reviewCount})
                    </span>
                  </div>
                  
                  {/* Price */}
                  <div>
                    {product.salePrice ? (
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-[#D46A6A]">₹{product.salePrice}</span>
                        <span className="text-sm text-[#333333]/60 line-through">₹{product.price}</span>
                      </div>
                    ) : (
                      <span className="font-medium text-[#333333]">₹{product.price}</span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;