"use client";

import { motion } from "framer-motion";
import { FiHeart, FiUsers, FiLeaf, FiStar, FiSmile, FiFlag } from "react-icons/fi";

const CoreValues = () => {
  const values = [
    {
      icon: <FiHeart />,
      title: "Handcrafted with Heart",
      description: "Every piece is meticulously crafted by skilled artisans who pour their heart into each stitch."
    },
    {
      icon: <FiUsers />,
      title: "Community Driven",
      description: "We grow with our community, listening to their needs and evolving together."
    },
    {
      icon: <FiHeart />,
      title: "Sustainably Styled",
      description: "Our commitment to the planet guides every design and production decision we make."
    },
    {
      icon: <FiStar />,
      title: "Limited and Loved",
      description: "Small-batch collections ensure quality and minimize waste, making each piece special."
    },
    {
      icon: <FiSmile />,
      title: "Empowering Every Body",
      description: "We design for real bodies, celebrating diversity in size, shape, and style."
    },
    {
      icon: <FiFlag />,
      title: "Made in India",
      description: "Proudly crafted in India, supporting local craftsmanship and traditional techniques."
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#6B4F3B] mb-4">Rooted in Intention</h2>
          <div className="w-20 h-1 bg-[#D46A6A] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-[#333333]/80">
            Our six core pillars guide everything we do at Preetizen, from design to delivery, ensuring our values are woven into every thread.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              className="bg-[#F8F3E9] p-8 rounded-lg flex flex-col items-center text-center h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 bg-[#A7BFA3] rounded-full flex items-center justify-center text-white mb-6">
                <span className="text-2xl">{value.icon}</span>
              </div>
              <h3 className="text-xl font-serif text-[#6B4F3B] mb-3">{value.title}</h3>
              <p className="text-[#333333]/70">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;