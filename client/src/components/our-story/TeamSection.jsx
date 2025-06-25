"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiLinkedin, FiInstagram } from "react-icons/fi";

const TeamSection = () => {
  const team = [
    {
      name: "Preeti",
      role: "Founder & Creative Head",
      bio: "With a background in sustainable fashion design and a passion for traditional crafts, Preeti leads the creative direction and vision of Preetizen. Her design philosophy centers on creating pieces that tell stories while honoring the heritage of Indian craftsmanship.",
      image: "https://static.wixstatic.com/media/cf391b_283900e561eb49a496f95f8247302da8~mv2.jpg/v1/fill/w_269,h_303,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_2813_edited_edited.jpg",
      social: {
        instagram: "https://instagram.com/preetizen",
        linkedin: "https://linkedin.com/in/preeti-preetizen"
      }
    },
    {
      name: "Navin",
      role: "Business & Tech Head",
      bio: "Navin brings his expertise in sustainable business practices and technology to Preetizen. With a vision for ethical growth, he ensures that the company's operations align with its values while building innovative digital experiences for the Preetizen community.",
      image: "https://static.wixstatic.com/media/cf391b_6c68c3069c6e408f9c74e4b835d509c2~mv2.jpg/v1/crop/x_15,y_0,w_1103,h_1246/fill/w_269,h_303,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_4121_edited_edited_edited_edited.jpg",
      social: {
        instagram: "https://instagram.com/navin_preetizen",
        linkedin: "https://linkedin.com/in/navin-preetizen"
      }
    }
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
          <h2 className="text-3xl md:text-4xl font-serif text-[#6B4F3B] mb-4">Meet Our Team</h2>
          <div className="w-20 h-1 bg-[#D46A6A] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-[#333333]/80">
            The passionate individuals behind Preetizen who turn our vision into reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              className="flex flex-col md:flex-row gap-8 items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-full md:w-1/3">
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                  <a 
                    href={member.social.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#A7BFA3] hover:text-[#D46A6A] transition-colors"
                  >
                    <FiInstagram size={20} />
                  </a>
                  <a 
                    href={member.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#A7BFA3] hover:text-[#D46A6A] transition-colors"
                  >
                    <FiLinkedin size={20} />
                  </a>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-serif text-[#6B4F3B] mb-1">{member.name}</h3>
                <p className="text-[#D46A6A] font-medium mb-4">{member.role}</p>
                <p className="text-[#333333]/80">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Team Video Section */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-serif text-[#6B4F3B] mb-4">Our Journey</h3>
            <div className="w-16 h-1 bg-[#D46A6A] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-[#333333]/80">
              Watch our story and see how we're building sustainable fashion with purpose.
            </p>
          </div>
          
          <div className="aspect-video max-w-4xl mx-auto shadow-lg rounded-xl overflow-hidden">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/F-cBaf1fb1g"
                title="Preetizen Team Journey"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;