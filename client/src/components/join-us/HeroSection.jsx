import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function HeroSection({ onApplyClick }) {
  const scrollToRoles = () => {
    document.getElementById('internship-roles').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative bg-[#F8F3E9] overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[#D46A6A]/10 -skew-x-12 transform origin-top-right"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8"
          >
            <h1 className="inline-block text-4xl md:text-5xl lg:text-6xl font-serif text-[#6B4F3B] mb-6 relative">
              WE&apos;RE HIRING!
              <span className="absolute -top-6 -right-8 text-base font-sans bg-[#D46A6A] text-white px-2 py-1 rounded-md transform rotate-12">
                Join Us
              </span>
            </h1>
            <p className="text-xl text-[#6B4F3B]/80 max-w-2xl mx-auto">
              Join our team of creative minds and help shape the future of sustainable fashion in India.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {/* Social Proof Elements */}
            <div className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
              <span className="text-[#6B4F3B] text-sm">preetizen.com</span>
              <span className="ml-2 text-[#D46A6A] font-bold text-sm">+7</span>
            </div>
            <div className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
              <span className="text-[#6B4F3B] text-sm">preetizen.com</span>
              <span className="ml-2 text-[#D46A6A] font-bold text-sm">+7</span>
            </div>
            <div className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
              <span className="text-[#6B4F3B] text-sm">preetizen.com</span>
              <span className="ml-2 text-[#D46A6A] font-bold text-sm">+7</span>
            </div>
            <div className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
              <span className="text-[#6B4F3B] text-sm">preetizen.com</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={() => onApplyClick()}
              className="px-6 py-3 bg-[#D46A6A] text-white rounded-lg hover:bg-[#c05b5b] transition-colors flex items-center justify-center group"
            >
              <span>Apply Now</span>
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={scrollToRoles}
              className="px-6 py-3 border border-[#6B4F3B] text-[#6B4F3B] rounded-lg hover:bg-[#6B4F3B]/5 transition-colors flex items-center justify-center"
            >
              <span>View Opportunities</span>
              <FiArrowRight className="ml-2" />
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -bottom-10 left-1/4 w-20 h-20 rounded-full bg-[#A7BFA3]/20 blur-xl"></div>
      <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-[#D46A6A]/20 blur-lg"></div>
    </section>
  );
}