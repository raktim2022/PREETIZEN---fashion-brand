"use client";

import { motion } from "framer-motion";

const CollectionInfo = ({ productCount, totalCount }) => {
  return (
    <div className="py-4 bg-white border-t border-b border-[#A7BFA3]/20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-sm text-[#333333]/70">
            Showing <span className="font-medium text-[#333333]">{productCount}</span> 
            {productCount !== totalCount && (
              <> out of <span className="font-medium text-[#333333]">{totalCount}</span></>
            )} products
          </p>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-[#333333]/70">Sort by:</span>
            <select className="text-sm bg-transparent border-b border-[#A7BFA3]/30 py-1 focus:outline-none focus:border-[#D46A6A]">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
              <option>Best Selling</option>
            </select>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CollectionInfo;