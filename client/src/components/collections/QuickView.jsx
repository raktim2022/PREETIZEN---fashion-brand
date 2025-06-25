"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiX, FiStar, FiShoppingBag, FiHeart, FiArrowRight } from "react-icons/fi";

const QuickView = ({ product, isOpen, onClose }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  // Close on escape key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);
  
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  const formatPrice = (price) => {
    return `₹${price}`;
  };
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  // Calculate rating stars
  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating % 1 >= 0.5;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, type: "spring", damping: 20 }}
            className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[calc(100vh-40px)] overflow-auto z-10"
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/90 shadow-sm hover:bg-[#D46A6A] hover:text-white transition-colors z-10"
              aria-label="Close quick view"
            >
              <FiX size={20} />
            </button>
            
            <div className="flex flex-col md:flex-row">
              {/* Product image */}
              <div className="md:w-1/2 relative">
                {/* Badges */}
                {product.badges && product.badges.length > 0 && (
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                    {product.badges.map((badge, index) => (
                      <span 
                        key={index}
                        className={`px-2 py-1 text-xs font-medium rounded-sm ${
                          badge === 'Best Seller' ? 'bg-[#D46A6A] text-white' :
                          badge === 'New Arrival' ? 'bg-[#6B4F3B] text-white' :
                          badge === 'Limited Pieces' ? 'bg-[#A7BFA3] text-white' :
                          badge === 'Sale' ? 'bg-[#D46A6A] text-white' :
                          badge === 'Crowd Favorite' ? 'bg-[#6B4F3B] text-white' :
                          'bg-[#A7BFA3]/20 text-[#6B4F3B]'
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="aspect-[3/4] relative">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
              
              {/* Product details */}
              <div className="md:w-1/2 p-6 md:p-8">
                <h2 className="text-2xl font-medium text-[#333333]">{product.name}</h2>
                
                {/* Rating */}
                <div className="flex items-center mt-2">
                  <div className="flex text-[#D46A6A]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i < fullStars ? (
                          <FiStar className="h-4 w-4 fill-current" />
                        ) : i === fullStars && hasHalfStar ? (
                          <FiStar className="h-4 w-4 fill-current" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                        ) : (
                          <FiStar className="h-4 w-4 text-[#A7BFA3]/30" />
                        )}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-[#333333]/70 ml-2">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
                
                {/* Price */}
                <div className="mt-4">
                  {product.salePrice ? (
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-medium text-[#D46A6A]">{formatPrice(product.salePrice)}</span>
                      <span className="text-[#333333]/60 line-through">{formatPrice(product.price)}</span>
                      <span className="px-2 py-0.5 text-xs font-medium bg-[#D46A6A]/10 text-[#D46A6A] rounded">
                        {Math.round((1 - product.salePrice / product.price) * 100)}% OFF
                      </span>
                    </div>
                  ) : (
                    <span className="text-xl font-medium text-[#333333]">{formatPrice(product.price)}</span>
                  )}
                </div>
                
                {/* Description */}
                <p className="mt-4 text-[#333333]/80">{product.description}</p>
                
                {/* Color selector */}
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-[#333333] mb-2">Color: {selectedVariant.color}</h3>
                  <div className="flex gap-2">
                    {product.variants.map((variant) => (
                      <button
                        key={variant.color}
                        className={`w-8 h-8 rounded-full border ${
                          selectedVariant.color === variant.color 
                            ? 'border-[#333333] ring-1 ring-offset-1' 
                            : 'border-[#A7BFA3]/30'
                        } ${!variant.inStock ? 'opacity-50' : ''}`}
                        style={{ backgroundColor: variant.colorCode }}
                        onClick={() => variant.inStock && setSelectedVariant(variant)}
                        disabled={!variant.inStock}
                        title={`${variant.color}${!variant.inStock ? ' (Out of Stock)' : ''}`}
                        aria-label={`Select ${variant.color} color`}
                      ></button>
                    ))}
                  </div>
                </div>
                
                {/* Size selector */}
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-medium text-[#333333]">Size: {selectedSize}</h3>
                    <button className="text-xs text-[#D46A6A] underline">Size Guide</button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-md transition-colors ${
                          selectedSize === size
                            ? 'bg-[#D46A6A] text-white'
                            : 'border border-[#A7BFA3]/30 hover:bg-[#A7BFA3]/10'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Quantity selector */}
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-[#333333] mb-2">Quantity</h3>
                  <div className="flex items-center">
                    <button 
                      onClick={decrementQuantity}
                      className="w-10 h-10 rounded-l-md border border-[#A7BFA3]/30 flex items-center justify-center hover:bg-[#A7BFA3]/10"
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 h-10 text-center border-t border-b border-[#A7BFA3]/30 focus:outline-none"
                    />
                    <button 
                      onClick={incrementQuantity}
                      className="w-10 h-10 rounded-r-md border border-[#A7BFA3]/30 flex items-center justify-center hover:bg-[#A7BFA3]/10"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                {/* Action buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 py-3 bg-[#D46A6A] text-white rounded-md flex items-center justify-center gap-2 hover:bg-[#C15A5A] transition-colors font-medium">
                    <FiShoppingBag size={18} />
                    Add to Cart
                  </button>
                  
                  <button className="flex-1 py-3 border border-[#A7BFA3]/30 rounded-md flex items-center justify-center gap-2 hover:bg-[#A7BFA3]/10 transition-colors font-medium">
                    <FiHeart size={18} />
                    Wishlist
                  </button>
                </div>
                
                {/* View full details */}
                <Link 
                  href={`/collections/t-zen/${product.id}`}
                  className="mt-6 inline-flex items-center text-[#D46A6A] font-medium hover:underline"
                >
                  View full details <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuickView;