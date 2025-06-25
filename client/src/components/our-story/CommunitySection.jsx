"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CommunitySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content Side */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-[#6B4F3B] mb-4">More Than Fashion. A Community.</h2>
            <div className="w-20 h-1 bg-[#D46A6A] mx-auto lg:mx-0 mb-6"></div>
            <p className="max-w-xl mx-auto lg:mx-0 text-[#333333]/80 mb-8">
              Preetizen is a platform where people and their stories converge to spark change. Our clothes are just the beginning of the conversation.
            </p>
            
            <p className="max-w-xl mx-auto lg:mx-0 text-[#333333]/80 italic mb-10">
              "We believe in the power of community to drive meaningful change. When you wear Preetizen, you join a collective of conscious consumers who care deeply about the impact of their choices."
            </p>
            
            <div>
              <a 
                href="https://www.instagram.com/preetizen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#A7BFA3] text-white rounded-md hover:bg-[#96AB8F] transition-colors"
              >
                Join Our Community
              </a>
            </div>
          </motion.div>
          
          {/* Image Side */}
          <motion.div 
            className="lg:w-1/2 flex justify-center mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="relative w-full max-w-[357px] h-[515px] rounded-lg overflow-hidden shadow-lg"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://static.wixstatic.com/media/cf391b_81ca38dbefe5493b9fb739f5aa0ed5ca~mv2.jpg/v1/crop/x_13,y_134,w_573,h_822/fill/w_357,h_515,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/14349EA7-143B-4A6B-95AD-AC19CEEA37F4_edi.jpg"
                alt="Preetizen community member"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 357px"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-[#000]/30 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;