"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiEye, FiShoppingBag, FiStar, FiHeart } from "react-icons/fi";

const ProductCard = ({ product, onOpenQuickView }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showColorOptions, setShowColorOptions] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price) => {
    return `₹${price}`;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (product.images.length > 1) {
      setCurrentImageIndex(1);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentImageIndex(0);
    setShowColorOptions(false);
  };

  // Framer motion variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Calculate rating stars
  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating % 1 >= 0.5;

  return (
    <motion.div 
      className="group"
      variants={cardVariants}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative bg-white rounded-lg overflow-hidden shadow-sm transition-shadow group-hover:shadow-md">
        {/* Product badges */}
        {product.badges && product.badges.length > 0 && (
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
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
        
        {/* Product image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <Link href={`/collections/t-zen/${product.id}`}>
            <div className="relative w-full h-full">
              <Image
                src={product.images[currentImageIndex]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority={product.badges?.includes("Best Seller") || product.badges?.includes("New Arrival")}
              />
            </div>
          </Link>
          
          {/* Quick actions overlay */}
          <div className="absolute top-0 right-0 p-3 flex flex-col gap-2">
            <motion.button
              onClick={() => onOpenQuickView(product)}
              className="bg-white/90 h-9 w-9 rounded-full flex items-center justify-center shadow-sm hover:bg-[#D46A6A] hover:text-white transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
              transition={{ duration: 0.2 }}
              aria-label="Quick view"
            >
              <FiEye size={16} />
            </motion.button>
            
            <motion.button
              className="bg-white/90 h-9 w-9 rounded-full flex items-center justify-center shadow-sm hover:bg-[#D46A6A] hover:text-white transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              aria-label="Add to wishlist"
            >
              <FiHeart size={16} />
            </motion.button>
          </div>
          
          {/* Bottom action bar */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <button 
              className="w-full py-2 bg-[#D46A6A] text-white rounded-md flex items-center justify-center gap-2 hover:bg-[#C15A5A] transition-colors text-sm font-medium"
              onClick={(e) => {
                e.preventDefault();
                // Add to cart logic
                console.log('Added to cart:', product.name);
              }}
            >
              <FiShoppingBag size={16} />
              Add to Cart
            </button>
          </motion.div>
        </div>
        
        {/* Product info */}
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <Link href={`/collections/t-zen/${product.id}`} className="block">
                <h3 className="font-medium text-[#333333] hover:text-[#D46A6A] transition-colors">
                  {product.name}
                </h3>
              </Link>
              
              {/* Star rating */}
              <div className="flex items-center mt-1 mb-2">
                <div className="flex text-[#D46A6A]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      {i < fullStars ? (
                        <FiStar className="h-3.5 w-3.5 fill-current" />
                      ) : i === fullStars && hasHalfStar ? (
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
            </div>
            
            {/* Price */}
            <div className="text-right">
              <div className="flex flex-col">
                {product.salePrice ? (
                  <>
                    <span className="text-[#D46A6A] font-medium">{formatPrice(product.salePrice)}</span>
                    <span className="text-sm text-[#333333]/60 line-through">{formatPrice(product.price)}</span>
                  </>
                ) : (
                  <span className="font-medium text-[#333333]">{formatPrice(product.price)}</span>
                )}
              </div>
            </div>
          </div>
          
          {/* Color variants */}
          <div 
            className="flex mt-3 gap-1"
            onMouseEnter={() => setShowColorOptions(true)}
            onMouseLeave={() => setShowColorOptions(false)}
          >
            {product.variants.slice(0, 1).map((variant) => (
              <button
                key={variant.color}
                className={`w-6 h-6 rounded-full border ${
                  selectedVariant.color === variant.color 
                    ? 'border-[#333333] ring-1 ring-offset-1' 
                    : 'border-[#A7BFA3]/30'
                }`}
                style={{ backgroundColor: variant.colorCode }}
                onClick={() => setSelectedVariant(variant)}
                title={variant.color}
                aria-label={`Select ${variant.color} color`}
              ></button>
            ))}
            
            {product.variants.length > 1 && (
              <button
                className="w-6 h-6 rounded-full border border-[#A7BFA3]/30 flex items-center justify-center text-xs text-[#333333]"
                onClick={() => setShowColorOptions(!showColorOptions)}
              >
                +{product.variants.length - 1}
              </button>
            )}
            
            {/* Color dropdown */}
            {showColorOptions && product.variants.length > 1 && (
              <motion.div 
                className="absolute mt-8 bg-white rounded-md shadow-md p-2 z-20 flex gap-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {product.variants.map((variant) => (
                  <button
                    key={variant.color}
                    className={`w-6 h-6 rounded-full border ${
                      selectedVariant.color === variant.color 
                        ? 'border-[#333333] ring-1 ring-offset-1' 
                        : 'border-[#A7BFA3]/30'
                    } ${!variant.inStock ? 'opacity-50' : ''}`}
                    style={{ backgroundColor: variant.colorCode }}
                    onClick={() => setSelectedVariant(variant)}
                    title={`${variant.color}${!variant.inStock ? ' (Out of Stock)' : ''}`}
                    disabled={!variant.inStock}
                  ></button>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;