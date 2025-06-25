"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiShoppingBag } from 'react-icons/fi';

const CartIcon = ({ isScrolled, itemCount = 0, onClick }) => {
  return (
    <motion.button
      className={`${
        isScrolled ? "text-[#333333]" : "text-white"
      } transition-transform hover:scale-110 relative`}
      aria-label="Cart"
      onClick={onClick}
      whileHover={{ y: -2 }}
    >
      <FiShoppingBag size={20} />
      <span className="absolute -top-2 -right-2 bg-[#D46A6A] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
        {itemCount}
      </span>
    </motion.button>
  );
};

export default CartIcon;