"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const ReviewCard = ({ review, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center mb-4">
        <img 
          src={review.avatar} 
          alt={review.name} 
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="ml-3">
          <div className="flex items-center">
            <h3 className="text-[#6B4F3B] font-medium">{review.name}</h3>
            <span className="mx-2 text-[#6B4F3B]/30">•</span>
            <span className="text-sm text-[#6B4F3B]/60">{review.location}</span>
          </div>
          <div className="flex items-center mt-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FiStar 
                  key={i}
                  className={i < review.rating ? "text-[#D46A6A] fill-[#D46A6A]" : "text-[#D46A6A]"}
                  size={14}
                />
              ))}
            </div>
            <span className="ml-2 text-xs text-[#6B4F3B]/60">{review.date}</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4">
        {review.hasImage && (
          <div className="w-full md:w-1/3 aspect-square overflow-hidden rounded-md">
            <img 
              src={review.imageUrl} 
              alt={`${review.name}'s review photo`}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className={review.hasImage ? "w-full md:w-2/3" : "w-full"}>
          <p className="text-[#6B4F3B]/80 mb-3">{review.content}</p>
          <p className="text-sm font-medium text-[#A7BFA3]">{review.product}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;