"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiZoomIn, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ProductImageGallery = ({ images, productName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const nextImage = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  };
  
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };
  
  const handleMouseMove = (e) => {
    if (!showZoom) return;
    
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    setMousePosition({ x, y });
    setZoomPosition({ x: x * 100, y: y * 100 });
  };
  
  return (
    <div className="relative">
      {/* Main image */}
      <div 
        className="relative aspect-[3/4] bg-white rounded-lg overflow-hidden mb-4 cursor-zoom-in"
        onClick={() => setShowZoom(!showZoom)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setShowZoom(false)}
      >
        <Image
          src={images[currentIndex]}
          alt={`${productName} - Image ${currentIndex + 1}`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        
        {/* Zoom overlay */}
        {showZoom && (
          <div className="absolute inset-0 bg-white">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${images[currentIndex]})`,
                backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                backgroundSize: '200%',
                backgroundRepeat: 'no-repeat'
              }}
            />
          </div>
        )}
        
        {/* Navigation arrows */}
        <button 
          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:bg-white transition-colors z-10"
          onClick={(e) => {
            e.stopPropagation();
            prevImage();
          }}
          aria-label="Previous image"
        >
          <FiChevronLeft size={20} />
        </button>
        
        <button 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:bg-white transition-colors z-10"
          onClick={(e) => {
            e.stopPropagation();
            nextImage();
          }}
          aria-label="Next image"
        >
          <FiChevronRight size={20} />
        </button>
        
        {/* Zoom icon */}
        <div className="absolute bottom-2 right-2 p-2 bg-white/80 rounded-full z-10">
          <FiZoomIn size={16} />
        </div>
      </div>
      
      {/* Image thumbnails */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0 ${
              currentIndex === index 
                ? 'ring-2 ring-[#D46A6A]' 
                : 'ring-1 ring-[#A7BFA3]/30 hover:ring-[#A7BFA3]'
            }`}
            onClick={() => handleThumbnailClick(index)}
            aria-label={`View image ${index + 1}`}
          >
            <Image
              src={image}
              alt={`${productName} - Thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="64px"
            />
          </button>
        ))}
      </div>
      
      {/* Image counter */}
      <div className="absolute top-4 left-4 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ProductImageGallery;