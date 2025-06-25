"use client";

import { motion } from "framer-motion";
import { FiStar, FiChevronsRight } from "react-icons/fi";
import Link from "next/link";

const ReviewStats = () => {
  // Mock review stats - replace with real data
  const stats = {
    averageRating: 4.8,
    totalReviews: 152,
    ratingDistribution: [
      { stars: 5, percentage: 78, count: 118 },
      { stars: 4, percentage: 15, count: 23 },
      { stars: 3, percentage: 5, count: 8 },
      { stars: 2, percentage: 1, count: 2 },
      { stars: 1, percentage: 1, count: 1 }
    ]
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Average rating and summary */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex flex-col items-center md:items-start space-y-3">
            <div className="flex items-end">
              <span className="text-5xl font-serif text-[#6B4F3B] font-medium">{stats.averageRating}</span>
              <span className="text-xl text-[#6B4F3B]/70 mb-1 ml-1">/5</span>
            </div>
            
            <div className="flex space-x-1.5">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <FiStar 
                  key={index} 
                  size={22}
                  className={index < Math.round(stats.averageRating) 
                    ? "text-[#D46A6A] fill-[#D46A6A]" 
                    : "text-[#D46A6A]/20"
                  }
                />
              ))}
            </div>
            
            <p className="text-[#6B4F3B]/70">
              Based on <span className="font-medium">{stats.totalReviews}</span> verified reviews
            </p>
          </div>
          
          <Link 
            href="#write-review" 
            className="inline-flex items-center text-[#D46A6A] hover:text-[#C15A5A] transition-colors font-medium"
          >
            <span>Add your review</span>
            <FiChevronsRight className="ml-1" />
          </Link>
        </motion.div>
        
        {/* Rating distribution */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          {stats.ratingDistribution.map((dist, index) => (
            <div key={dist.stars} className="flex items-center">
              <div className="w-10 text-sm font-medium text-[#6B4F3B]">{dist.stars} star</div>
              
              <div className="relative h-2 mx-3 flex-1 rounded-full bg-[#6B4F3B]/10 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${dist.percentage}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="absolute top-0 left-0 h-full bg-[#D46A6A] rounded-full"
                />
              </div>
              
              <div className="w-16 text-right text-sm text-[#6B4F3B]/70">
                <span>{dist.count}</span>
                <span className="text-xs ml-1">({dist.percentage}%)</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ReviewStats;