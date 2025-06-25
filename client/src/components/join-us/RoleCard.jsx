import { motion } from "framer-motion";
import { FiArrowRight, FiMapPin, FiClock } from "react-icons/fi";

export default function RoleCard({ role, onApplyClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: role.id * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <div className="mr-4">
              {role.icon}
            </div>
            <div>
              <h3 className="text-xl font-serif text-[#6B4F3B]">{role.title}</h3>
              <p className="text-[#D46A6A] font-medium">{role.openings} {role.openings === 1 ? 'opening' : 'openings'}</p>
            </div>
          </div>
          <div className="bg-[#F8F3E9] px-3 py-1 rounded-md text-sm text-[#6B4F3B]">
            Internship
          </div>
        </div>
        
        <p className="text-[#6B4F3B]/80 mb-5">
          {role.description}
        </p>
        
        <div className="border-t border-dashed border-[#D7CFC7] pt-4 mb-5">
          <h4 className="text-sm font-medium text-[#6B4F3B] mb-2">Requirements:</h4>
          <ul className="space-y-1">
            {role.requirements.map((req, index) => (
              <li key={index} className="text-sm text-[#6B4F3B]/70 flex items-start">
                <span className="mr-2 text-[#D46A6A]">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-3 mb-5">
          <div className="bg-[#F8F3E9] px-3 py-1 rounded-md text-xs flex items-center">
            <FiMapPin className="mr-1 text-[#D46A6A]" size={12} />
            <span>{role.location}</span>
          </div>
          <div className="bg-[#F8F3E9] px-3 py-1 rounded-md text-xs flex items-center">
            <FiClock className="mr-1 text-[#D46A6A]" size={12} />
            <span>{role.duration}</span>
          </div>
        </div>
        
        <button
          onClick={onApplyClick}
          className="w-full py-2 bg-[#A7BFA3] text-white rounded hover:bg-[#96AB8F] transition-colors flex items-center justify-center group"
        >
          <span>Apply for this role</span>
          <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}