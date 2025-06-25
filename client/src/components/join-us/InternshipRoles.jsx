import { motion } from "framer-motion";
import BenefitsSection from "./BenefitsSection";
import RoleCard from "./RoleCard";
import TestimonialsSection from "./TestimonialsSection";
import FaqSection from "./FaqSection";

export default function InternshipRoles({ roles, onApplyClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-serif text-center text-[#6B4F3B] mb-3">Internship Opportunities</h2>
      <div className="w-20 h-1 bg-[#D46A6A] mx-auto mb-6"></div>
      <p className="text-center max-w-3xl mx-auto text-[#6B4F3B]/80 mb-12">
        Join our team and gain valuable experience in the sustainable fashion industry. 
        All internships include mentorship, portfolio development, and a stipend.
      </p>
      
      {/* Benefits section */}
      <BenefitsSection />
      
      {/* Internship Role Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {roles.map((role) => (
          <RoleCard 
            key={role.id} 
            role={role} 
            onApplyClick={() => onApplyClick(role)} 
          />
        ))}
      </div>
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* FAQ section */}
      <FaqSection />
    </motion.div>
  );
}