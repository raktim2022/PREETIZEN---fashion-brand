"use client";

import React from "react";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div
      className="group"
      variants={cardVariants}
    >
      <div className="relative overflow-hidden rounded-lg mb-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button className="bg-white text-[#333333] px-4 py-2 rounded-md transform translate-y-4 group-hover:translate-y-0 transition-transform">
            Add to Cart
          </button>
        </div>
      </div>
      <h3 className="text-lg font-medium text-[#6B4F3B]">{product.name}</h3>
      <p className="text-[#333333]">{product.price}</p>
    </motion.div>
  );
};

export default ProductCard;