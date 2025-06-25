"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const KnowTheModel = () => {
  const [expandedModel, setExpandedModel] = useState(null);
  
  const models = [
    {
      id: 1,
      name: "Sayani",
      role: "Student & Entrepreneur",
      image: "https://static.wixstatic.com/media/cf391b_9f43135e30834ceaad26c347e1b208c4~mv2.jpeg",
      shortStory: "Pursuing her MBA while running an eco-friendly gift shop.",
      fullStory: "Sayani balances her MBA studies with running an eco-friendly gift shop that supports local artisans. Her journey began when she realized the environmental impact of conventional gifting. With determination and creativity, she transformed her passion into a sustainable business that now employs three artisan families. Sayani loves wearing Preetizen because the brand's values align perfectly with her own commitment to sustainability and local craftsmanship."
    },
    {
      id: 2,
      name: "Armaan",
      role: "Musician & Activist",
      image: "https://static.wixstatic.com/media/cf391b_efb7107451514b2ab0a95aa5daab127d~mv2.jpeg",
      shortStory: "Using music to advocate for environmental causes.",
      fullStory: "Armaan left his corporate job to pursue his true passion: creating music that advocates for environmental causes. His journey wasn't easy—from financial struggles to family disapproval—but his persistence paid off when his compositions began featuring in climate change documentaries. Today, he travels across India performing and raising awareness about ecological issues. Armaan chooses Preetizen because he believes in supporting brands that share his vision of sustainability and conscious living."
    },
    {
      id: 3,
      name: "Debotri",
      role: "Teacher & Community Leader",
      image: "https://static.wixstatic.com/media/cf391b_9f43135e30834ceaad26c347e1b208c4~mv2.jpeg",
      shortStory: "Transformed education in her rural community through innovative teaching methods.",
      fullStory: "Debotri returned to her rural hometown after completing her education in Kolkata, determined to transform the local educational landscape. Despite limited resources, she developed innovative teaching methods using everyday objects and nature as learning tools. Her classroom has become a model for other schools in the region, and she's now training other teachers in her techniques. Debotri wears Preetizen as a proud symbol of Bengal's creativity and craftsmanship, values she instills in her students every day."
    }
  ];
  
  const handleToggleExpand = (id) => {
    if (expandedModel === id) {
      setExpandedModel(null);
    } else {
      setExpandedModel(id);
    }
  };
  
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-serif text-[#6B4F3B] mb-3">Know Our Models</h2>
          <div className="w-20 h-1 bg-[#D46A6A] mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto text-[#333333]/80">
            Our models aren't just wearing our clothes—they're living our values. Each has a unique story of courage, creativity, and community impact.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model) => (
            <motion.div
              key={model.id}
              className="bg-[#F8F3E9] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative aspect-square">
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium text-[#6B4F3B]">{model.name}</h3>
                <p className="text-sm text-[#D46A6A] mb-2">{model.role}</p>
                <p className="text-[#333333]/80 mb-4">{model.shortStory}</p>
                
                <div>
                  <button 
                    onClick={() => handleToggleExpand(model.id)}
                    className="flex items-center text-sm font-medium text-[#6B4F3B] hover:text-[#D46A6A] transition-colors"
                  >
                    {expandedModel === model.id ? 'Read less' : 'Read more'} 
                    <FiChevronDown 
                      size={16} 
                      className={`ml-1 transition-transform ${expandedModel === model.id ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {expandedModel === model.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-[#333333]/80">{model.fullStory}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowTheModel;