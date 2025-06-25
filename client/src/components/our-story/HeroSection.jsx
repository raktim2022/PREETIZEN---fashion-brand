"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute left-1/2 inset-0 rounded-4xl p-3">
        <Image
          src="https://static.wixstatic.com/media/cf391b_efb7107451514b2ab0a95aa5daab127d~mv2.jpeg/v1/fill/w_677,h_727,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cf391b_efb7107451514b2ab0a95aa5daab127d~mv2.jpeg" 
          alt="Diverse group of people wearing Preetizen clothing"
          fill
          priority
          className="object-contain rounded-4xl brightness-[0.85]"
        />
      </div>
        {/* <div className="absolute w-full inset-0 bg-[#000]/30"></div> */}

      {/* Text Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6"
            variants={textVariants}
          >
            NOT JUST CLOTHES. <br />
            A CAUSE. A CRAFT. <br />
            A COMMUNITY.
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-zinc-700 max-w-xl"
            variants={textVariants}
          >
            Preetizen is more than a clothing brand; it's a movement towards conscious fashion that celebrates sustainable craftsmanship and embraces every body.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white flex items-start justify-center p-1">
          <motion.div 
            className="w-1 h-2 bg-white rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;