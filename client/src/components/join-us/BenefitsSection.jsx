import { FiBriefcase, FiClock, FiMapPin } from "react-icons/fi";

export default function BenefitsSection() {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="bg-white p-6 rounded-lg shadow-sm text-center">
        <div className="w-12 h-12 bg-[#D46A6A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <FiBriefcase className="text-[#D46A6A] text-xl" />
        </div>
        <h3 className="font-serif text-lg text-[#6B4F3B] mb-2">Real Experience</h3>
        <p className="text-[#6B4F3B]/70 text-sm">
          Work on actual projects with our team and build your professional portfolio
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm text-center">
        <div className="w-12 h-12 bg-[#A7BFA3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <FiClock className="text-[#A7BFA3] text-xl" />
        </div>
        <h3 className="font-serif text-lg text-[#6B4F3B] mb-2">Flexible Schedule</h3>
        <p className="text-[#6B4F3B]/70 text-sm">
          Part-time and full-time options available to fit your academic schedule
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm text-center">
        <div className="w-12 h-12 bg-[#6B4F3B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <FiMapPin className="text-[#6B4F3B] text-xl" />
        </div>
        <h3 className="font-serif text-lg text-[#6B4F3B] mb-2">Remote Options</h3>
        <p className="text-[#6B4F3B]/70 text-sm">
          Many positions available remotely with flexible work arrangements
        </p>
      </div>
    </div>
  );
}