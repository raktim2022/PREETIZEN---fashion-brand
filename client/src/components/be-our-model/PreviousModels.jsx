"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiInstagram } from "react-icons/fi";

const PreviousModels = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const models = [
    {
      id: 1,
      name: "Sayani",
      age: 28,
      location: "Kolkata",
      image: "https://static.wixstatic.com/media/cf391b_9fc4d39b4e444e4c887a8c7eb0ce060e~mv2.jpg",
      instagram: "https://instagram.com/sayanidutta",
      collection: "Wildflower",
      story: "A software engineer with a passion for sustainable fashion. Sayani balances her technical career with modeling, proving you can pursue multiple passions.",
      quote: "Jiboner shobcheye boro shikha - nijer modhey bishshash rakha",
      quoteEng: "Life's biggest lesson is to believe in yourself"
    },
    {
      id: 2,
      name: "Armaan",
      age: 32,
      location: "Mumbai",
      image: "https://static.wixstatic.com/media/cf391b_41f05f43e62641b78a3bf0351392c96e~mv2.jpg",
      instagram: "https://instagram.com/armaan_ray",
      collection: "Wildflower",
      story: "Former banker who left the corporate world to pursue creative endeavors. Armaan advocates for mental health awareness among young professionals.",
      quote: "Onno keo na bujhleo, tumi nije jano tomar shakti",
      quoteEng: "Even if others don't understand, you know your own strength"
    },
    {
      id: 3,
      name: "Subhadip",
      age: 25,
      location: "Delhi",
      image: "https://static.wixstatic.com/media/cf391b_9c388a44614f4a1b883f84e343aa37d3~mv2.jpg",
      instagram: "https://instagram.com/subhadip_das",
      collection: "Wildflower",
      story: "Fitness instructor and body positivity advocate. Subhadip challenges traditional beauty standards and encourages authentic self-expression.",
      quote: "Protidin notun shurjho, notun shombhabona",
      quoteEng: "Each day brings a new sun, new possibilities"
    },
    {
      id: 4,
      name: "Arijit",
      age: 30,
      location: "Bangalore",
      image: "https://static.wixstatic.com/media/cf391b_3d38350dfea64a2db8a2daf0e3821da5~mv2.jpg",
      instagram: "https://instagram.com/arijit_sen",
      collection: "TeeZen",
      story: "Indie musician and artist who uses fashion as another creative outlet. Arijit brings his unique perspective to every photoshoot.",
      quote: "Shopno dekha bondho korle, jibon theme jay",
      quoteEng: "If you stop dreaming, life stops moving"
    },
    {
      id: 5,
      name: "Debotri",
      age: 23,
      location: "Pune",
      image: "https://static.wixstatic.com/media/cf391b_d393fda153ea4b94a990e677fcc0ec7f~mv2.jpg",
      instagram: "https://instagram.com/debotri_roy",
      collection: "TeeZen",
      story: "Social media content creator who found confidence through modeling. Debotri shares her journey with her followers to inspire others.",
      quote: "Nijer golpo nije likho",
      quoteEng: "Write your own story"
    },
    {
      id: 6,
      name: "Doyel",
      age: 35,
      location: "Chennai",
      image: "https://static.wixstatic.com/media/cf391b_e9ef14ea8e4e456bb5dbcc9362cb81c6~mv2.jpg",
      instagram: "https://instagram.com/doyel_chatterjee",
      collection: "Wildflower",
      story: "Working mother balancing career and family life. Doyel challenges the notion that modeling has an age limit.",
      quote: "Bochor jay, tumi thako",
      quoteEng: "Years pass, but you remain yourself"
    },
    {
      id: 7,
      name: "Bijayata",
      age: 27,
      location: "Hyderabad",
      image: "https://static.wixstatic.com/media/cf391b_df16b7424116433c92e8edab7f3ed67f~mv2.jpg",
      instagram: "https://instagram.com/bijayata_deb",
      collection: "TeeZen",
      story: "Environmental scientist bringing awareness to climate issues through sustainable fashion choices.",
      quote: "Proti muhurte shikho, proti dine baro",
      quoteEng: "Learn each moment, grow each day"
    },
    {
      id: 8,
      name: "Sushmita",
      age: 40,
      location: "Jaipur",
      image: "https://static.wixstatic.com/media/cf391b_27d619ee7aa04a3dad4aa6a265186b5f~mv2.jpg",
      instagram: "https://instagram.com/sushmita_mukherjee",
      collection: "Wildflower",
      story: "Entrepreneur and wellness coach who believes in natural beauty at any age. Sushmita advocates for authenticity in the fashion industry.",
      quote: "Boyosh sudhu shongkha, atma chirokaal tarun",
      quoteEng: "Age is just a number, the spirit is forever young"
    },
    {
      id: 9,
      name: "Soheli",
      age: 22,
      location: "Ahmedabad",
      image: "https://static.wixstatic.com/media/cf391b_140a8fbdc9ce477aadfc3ba77432f6ce~mv2.jpg",
      instagram: "https://instagram.com/soheli_banerjee",
      collection: "TeeZen",
      story: "College student and part-time model who believes in maintaining authenticity while pursuing dreams.",
      quote: "Bhul theke shekho, kintu nijer shonge compromise koro na",
      quoteEng: "Learn from mistakes, but don't compromise with yourself"
    },
  ];

  const filteredModels = activeFilter === "all" 
    ? models 
    : models.filter(model => model.collection === activeFilter);

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
          <h2 className="text-3xl md:text-4xl font-serif text-[#6B4F3B] mb-4">Meet Our Previous Models</h2>
          <div className="w-20 h-1 bg-[#D46A6A] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-[#333333]/80">
            Real people with inspiring stories who've been part of the Preetizen journey.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <button 
              className={`px-4 py-2 rounded-full text-sm ${activeFilter === 'all' ? 'bg-[#6B4F3B] text-white' : 'bg-[#F8F3E9] text-[#6B4F3B]'}`}
              onClick={() => setActiveFilter('all')}
            >
              All Models
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm ${activeFilter === 'Wildflower' ? 'bg-[#6B4F3B] text-white' : 'bg-[#F8F3E9] text-[#6B4F3B]'}`}
              onClick={() => setActiveFilter('Wildflower')}
            >
              Wildflower Collection
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm ${activeFilter === 'TeeZen' ? 'bg-[#6B4F3B] text-white' : 'bg-[#F8F3E9] text-[#6B4F3B]'}`}
              onClick={() => setActiveFilter('TeeZen')}
            >
              TeeZen Collection
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredModels.map((model, index) => (
            <ModelCard key={model.id} model={model} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ModelCard = ({ model, index }) => {
  const [expanded, setExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div 
      className="bg-[#F8F3E9]/50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative h-96 overflow-hidden">
        {/* Fallback div in case image fails */}
        {imgError && (
          <div className="w-full h-full flex items-center justify-center bg-[#F0E9DF]">
            <p className="text-[#6B4F3B] text-xl font-medium">{model.name}</p>
          </div>
        )}
        
        {/* Regular image with error handling */}
        {!imgError && (
          <Image
            src={model.image}
            alt={`${model.name} - Preetizen Model`}
            fill
            style={{ objectFit: "cover", objectPosition: "center center" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 3}
            onError={() => setImgError(true)}
          />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-xl font-semibold">{model.name}, {model.age}</h3>
          <p className="text-white/80 text-sm">{model.location}</p>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[#D46A6A] font-medium">{model.collection} Collection</span>
          <a 
            href={model.instagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1 text-[#6B4F3B] hover:text-[#D46A6A] transition-colors"
            aria-label={`Follow ${model.name} on Instagram`}
          >
            <span className="text-sm">Follow</span>
            <FiInstagram size={18} />
          </a>
        </div>
        
        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            expanded ? 'max-h-96' : 'max-h-20'
          }`}
        >
          <p className="text-[#6B4F3B]/80 mb-4">{model.story}</p>
          
          <div className="bg-[#FFFBF7] p-4 rounded-md border border-[#E9E1D6]">
            <p className="text-[#6B4F3B] italic mb-1 font-medium">{model.quote}</p>
            <p className="text-[#6B4F3B]/70 text-sm">{model.quoteEng}</p>
          </div>
        </div>
        
        <button 
          className="mt-3 text-[#6B4F3B] font-medium text-sm flex items-center hover:text-[#D46A6A] transition-colors"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show Less' : 'Read More'}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`ml-1 h-4 w-4 transform transition-transform ${expanded ? 'rotate-180' : ''}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default PreviousModels;