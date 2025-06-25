"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/collections/ProductCard";
import QuickView from "@/components/collections/QuickView";

const ProductGrid = ({ products, isLoading }) => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleOpenQuickView = (product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleCloseQuickView = () => {
    setIsQuickViewOpen(false);
    setTimeout(() => {
      setQuickViewProduct(null);
    }, 300); // Wait for animation to complete
  };

  // Loading skeleton
  if (isLoading) {
    return (
      <div className="py-12 bg-[#F8F3E9]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm animate-pulse">
                <div className="aspect-[3/4] bg-[#A7BFA3]/10 rounded-md mb-4"></div>
                <div className="h-4 bg-[#A7BFA3]/20 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-[#A7BFA3]/15 rounded w-1/2 mb-4"></div>
                <div className="h-8 bg-[#A7BFA3]/10 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // No products found
  if (products.length === 0) {
    return (
      <div className="py-16 bg-[#F8F3E9] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-medium text-[#6B4F3B]">No products match your filters</h2>
          <p className="text-[#333333]/70 mt-2">Try adjusting your selection or clear filters to see all products.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="py-12 bg-[#F8F3E9]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onOpenQuickView={handleOpenQuickView} 
              />
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Quick view modal */}
      {quickViewProduct && (
        <QuickView 
          product={quickViewProduct} 
          isOpen={isQuickViewOpen} 
          onClose={handleCloseQuickView} 
        />
      )}
    </>
  );
};

export default ProductGrid;