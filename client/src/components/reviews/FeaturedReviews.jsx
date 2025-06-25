"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import Image from "next/image";

const FeaturedReviews = () => {
  const featuredReviews = [
    {
      id: 1,
      name: "Shreya K.",
      location: "Kolkata",
      rating: 5,
      image: "https://static.wixstatic.com/media/cf391b_69f069fbaaa24322bd446316ebcbba27~mv2.jpeg/v1/fill/w_495,h_415,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-06-17%20at%2003_02_23.jpeg",
      productName: "Toder Problem Hoina Blue",
      date: "July 6, 2025",
      title: "Confidence in every stitch",
      review: "I feel so confident in my Toder Problem Hoina tee. The fit is absolutely perfect and I love knowing it's made with eco-conscious materials. The Bengali script looks authentic and gets so many compliments! This is my third purchase from Preetizen and definitely not my last."
    },
    {
      id: 2,
      name: "Arjun K.",
      location: "Mumbai",
      rating: 5,
      image: "https://static.wixstatic.com/media/cf391b_88b37ca8a10b496b9ac224ca74b7abd7~mv2.png/v1/crop/x_62,y_337,w_1077,h_1868/fill/w_243,h_421,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_6705_PNG.png",
      productName: "Bondhu Bengali Friendship Tee",
      date: "June 23, 2025",
      title: "Perfect gift for my best friend",
      review: "Bought matching Bondhu tees for me and my childhood friend. The quality is exceptional - soft fabric that didn't shrink after washing. The message resonates deeply with our Bengali roots. Sustainable fashion that actually feels premium - rare combination! Customer service was top-notch too when I had a sizing question."
    },
    {
      id: 3,
      name: "Neha S.",
      location: "Bangalore",
      rating: 4,
      image: "https://static.wixstatic.com/media/cf391b_f7aa7f3cfe6c4088b6910e4fb1ef7e52~mv2.jpeg/v1/crop/x_6,y_4,w_1087,h_848/fill/w_509,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-06-17%20at%2003_27_40.jpeg",
      productName: "Shob Kichu Bhalo Classic Fit Tee",
      date: "June 15, 2025",
      title: "Love the positive message",
      review: "The affirmation on this tee brightens my day whenever I wear it! The classic fit is flattering without being too tight. My only suggestion would be to offer more color options. The packaging was beautiful and plastic-free which I really appreciate. Would definitely recommend to anyone looking for sustainable fashion with cultural significance."
    }
  ];
  
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {featuredReviews.map((review, index) => (
        <motion.div 
          key={review.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#A7BFA3]/10 flex flex-col h-full"
        >
          {/* Review image */}
          <div className="relative h-64 overflow-hidden">
            <Image
              src={review.image}
              alt={`${review.name} wearing ${review.productName}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white">
              <p className="text-sm font-medium">{review.productName}</p>
            </div>
          </div>
          
          {/* Review content */}
          <div className="p-5 flex-grow flex flex-col">
            <div className="flex justify-between items-center mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    size={16} 
                    className={i < review.rating 
                      ? "text-[#D46A6A] fill-[#D46A6A]" 
                      : "text-[#D46A6A]/20"
                    } 
                  />
                ))}
              </div>
              <span className="text-xs text-[#6B4F3B]/60">{review.date}</span>
            </div>
            
            <h3 className="text-lg font-medium text-[#6B4F3B] mb-2">{review.title}</h3>
            <p className="text-sm text-[#6B4F3B]/80 mb-4 line-clamp-4">{review.review}</p>
            
            <div className="mt-auto pt-4 border-t border-[#A7BFA3]/10 flex items-center">
              <div className="w-8 h-8 rounded-full bg-[#F8F3E9] flex items-center justify-center text-[#6B4F3B] font-medium">
                {review.name.charAt(0)}
              </div>
              <div className="ml-2">
                <p className="text-sm font-medium text-[#6B4F3B]">{review.name}</p>
                <p className="text-xs text-[#6B4F3B]/60">{review.location}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturedReviews;