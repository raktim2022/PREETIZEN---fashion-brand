import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight, FiSend } from "react-icons/fi";

export default function CollaborationsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto text-center"
    >
      <h2 className="text-3xl font-serif text-[#6B4F3B] mb-3">Creative Collaborations</h2>
      <div className="w-20 h-1 bg-[#D46A6A] mx-auto mb-6"></div>
      
      <div className="mb-12">
        <p className="text-xl text-[#6B4F3B]/80 mb-8">
          HAVE A COLLAB IDEA? DM US TO KNOW MORE
        </p>
        
        <p className="text-[#6B4F3B]/80 mb-8">
          We're always looking for creative minds to collaborate with. Whether you're a photographer, 
          artist, content creator, or have a unique idea that aligns with our sustainable fashion mission, 
          we'd love to hear from you!
        </p>
        
        <div className="bg-[#F8F3E9] p-8 rounded-lg">
          <h3 className="text-xl font-serif text-[#6B4F3B] mb-4">Types of Collaborations We're Open To:</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-white p-4 rounded-md">
              <h4 className="font-medium text-[#6B4F3B] mb-2">Photography Projects</h4>
              <p className="text-sm text-[#6B4F3B]/70">Lookbooks, editorial shoots, and creative concepts</p>
            </div>
            
            <div className="bg-white p-4 rounded-md">
              <h4 className="font-medium text-[#6B4F3B] mb-2">Influencer Partnerships</h4>
              <p className="text-sm text-[#6B4F3B]/70">Authentic content creators who align with our values</p>
            </div>
            
            <div className="bg-white p-4 rounded-md">
              <h4 className="font-medium text-[#6B4F3B] mb-2">Sustainable Workshops</h4>
              <p className="text-sm text-[#6B4F3B]/70">Educational events focused on sustainable practices</p>
            </div>
            
            <div className="bg-white p-4 rounded-md">
              <h4 className="font-medium text-[#6B4F3B] mb-2">Artist Collaborations</h4>
              <p className="text-sm text-[#6B4F3B]/70">Limited edition prints, patterns, or collections</p>
            </div>
            
            <div className="bg-white p-4 rounded-md">
              <h4 className="font-medium text-[#6B4F3B] mb-2">Content Series</h4>
              <p className="text-sm text-[#6B4F3B]/70">Blog posts, videos, or podcast episodes</p>
            </div>
            
            <div className="bg-white p-4 rounded-md">
              <h4 className="font-medium text-[#6B4F3B] mb-2">Pop-Up Events</h4>
              <p className="text-sm text-[#6B4F3B]/70">Creative retail experiences or exhibitions</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <a 
              href="mailto:collaborations@preetizen.com" 
              className="inline-flex items-center px-6 py-3 bg-[#D46A6A] text-white rounded-lg hover:bg-[#c05b5b] transition-colors group"
            >
              <span>Pitch Your Idea</span>
              <FiSend className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Collaboration Showcase */}
      <div className="mt-16">
        <h3 className="text-2xl font-serif text-[#6B4F3B] mb-6">Past Collaborations</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative h-64">
              <Image
                src="https://static.wixstatic.com/media/cf391b_c63b1bbe554a4aea942c3d225926278f~mv2.jpg/v1/fill/w_448,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/external-file_edited.jpg"
                alt="Collaboration Project"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-6">
              <h4 className="text-lg font-serif text-[#6B4F3B] mb-2">Artist Series: Nature's Palette</h4>
              <p className="text-sm text-[#6B4F3B]/70 mb-3">
                A limited edition collection featuring prints by local artists inspired by Bengal's natural landscapes.
              </p>
              <div className="flex items-center text-sm text-[#D46A6A]">
                <span>View Collection</span>
                <FiArrowRight className="ml-1" size={14} />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative h-64">
              <Image
                src="https://static.wixstatic.com/media/cf391b_283900e561eb49a496f95f8247302da8~mv2.jpg/v1/fill/w_269,h_303,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_2813_edited_edited.jpg"
                alt="Collaboration Project"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-6">
              <h4 className="text-lg font-serif text-[#6B4F3B] mb-2">Sustainable Stories Podcast</h4>
              <p className="text-sm text-[#6B4F3B]/70 mb-3">
                A 6-episode podcast series exploring the journey of sustainable fashion creators in India.
              </p>
              <div className="flex items-center text-sm text-[#D46A6A]">
                <span>Listen to Episodes</span>
                <FiArrowRight className="ml-1" size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}