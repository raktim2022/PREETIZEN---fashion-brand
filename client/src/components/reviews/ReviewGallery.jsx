"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiX, FiPlus } from "react-icons/fi";

const ReviewGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const galleryImages = [
    {
      id: 1,
      src: "https://static.wixstatic.com/media/cf391b_69f069fbaaa24322bd446316ebcbba27~mv2.jpeg/v1/fill/w_495,h_415,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-06-17%20at%2003_02_23.jpeg",
      alt: "Customer wearing Preetizen outfit",
      username: "Shreya K.",
      productName: "Wildflower Midi Dress"
    },
    {
      id: 2,
      src: "https://static.wixstatic.com/media/cf391b_85ad852e97b34bb8ba8133ed06579e02~mv2.jpeg/v1/fill/w_282,h_415,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-06-17%20at%2003_16_51.jpeg",
      alt: "Customer in Preetizen tee",
      username: "Aditya M.",
      productName: "Cha Lover Bengali Tee"
    },
    {
      id: 3,
      src: "https://static.wixstatic.com/media/cf391b_f7aa7f3cfe6c4088b6910e4fb1ef7e52~mv2.jpeg/v1/crop/x_6,y_4,w_1087,h_848/fill/w_509,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-06-17%20at%2003_27_40.jpeg",
      alt: "Customer wearing Preetizen outfit outdoors",
      username: "Neha S.",
      productName: "Shob Kichu Bhalo Classic Fit Tee"
    },
    {
      id: 4,
      src: "https://static.wixstatic.com/media/cf391b_99532203837e4845867415eedc0456ec~mv2.jpg/v1/crop/x_6,y_0,w_640,h_617/fill/w_414,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/PHOTO-2025-05-30-10-22-56_edited.jpg",
      alt: "Customer showing off Preetizen clothes",
      username: "Rohan D.",
      productName: "Bhalobasha Embroidered Tee"
    },
    {
      id: 5,
      src: "https://static.wixstatic.com/media/cf391b_dfa5b002737446bf94bb0d6db7c0de79~mv2.jpeg/v1/fill/w_322,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_448385F10401-1.jpeg",
      alt: "Close-up of customer in Preetizen tee",
      username: "Tanya G.",
      productName: "Mosha Bujho Bengali Graphic Tee"
    },
    {
      id: 6,
      src: "https://static.wixstatic.com/media/cf391b_88b37ca8a10b496b9ac224ca74b7abd7~mv2.png/v1/crop/x_62,y_337,w_1077,h_1868/fill/w_243,h_421,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_6705_PNG.png",
      alt: "Full length view of customer in Preetizen outfit",
      username: "Arjun K.",
      productName: "Bondhu Bengali Friendship Tee"
    }
  ];
  
  return (
    <div className="relative">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {galleryImages.map((image, index) => (
          <motion.div 
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true, margin: "50px" }}
            onClick={() => setSelectedImage(image)}
            className="relative cursor-pointer group overflow-hidden rounded-lg shadow-sm aspect-[3/4]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image 
              src={image.src} 
              alt={image.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                <p className="text-sm font-medium">{image.username}</p>
                <p className="text-xs opacity-90">{image.productName}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-8 flex justify-center"
      >
        <a 
          href="#write-review" 
          className="flex items-center px-5 py-3 bg-white border border-[#A7BFA3]/30 rounded-md text-[#6B4F3B] hover:border-[#A7BFA3] transition-all"
        >
          <FiPlus size={16} className="mr-2 text-[#D46A6A]" />
          <span>Add your photo</span>
        </a>
      </motion.div>
      
      {/* Modal for selected image */}
      {selectedImage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-3xl max-h-[90vh] w-full bg-white rounded-lg overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
            
            <div className="p-4 bg-white">
              <h4 className="font-medium text-lg text-[#6B4F3B]">{selectedImage.username}</h4>
              <p className="text-[#6B4F3B]/70">{selectedImage.productName}</p>
            </div>
            
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-[#6B4F3B] transition-colors"
              aria-label="Close modal"
            >
              <FiX size={18} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ReviewGallery;