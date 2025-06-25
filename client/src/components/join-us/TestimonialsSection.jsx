import { motion } from "framer-motion";
import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <div className="mt-20 mb-12">
      <h2 className="text-2xl font-serif text-center text-[#6B4F3B] mb-3">What Our Interns Say</h2>
      <div className="w-16 h-1 bg-[#D46A6A] mx-auto mb-10"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#F8F3E9]/50 p-6 rounded-lg"
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
              <Image 
                src="https://static.wixstatic.com/media/cf391b_9fc4d39b4e444e4c887a8c7eb0ce060e~mv2.jpg" 
                alt="Intern portrait" 
                width={48} 
                height={48}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="font-medium text-[#6B4F3B]">Ananya M.</p>
              <p className="text-sm text-[#6B4F3B]/70">Former Fashion Design Intern</p>
            </div>
          </div>
          <p className="text-[#6B4F3B]/80 text-sm italic">
            "My internship at Preetizen was the highlight of my college years. I got to work on actual designs that made it to production, and the mentorship I received was invaluable for my career."
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#F8F3E9]/50 p-6 rounded-lg"
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
              <Image 
                src="https://static.wixstatic.com/media/cf391b_41f05f43e62641b78a3bf0351392c96e~mv2.jpg" 
                alt="Intern portrait" 
                width={48} 
                height={48}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="font-medium text-[#6B4F3B]">Rahul S.</p>
              <p className="text-sm text-[#6B4F3B]/70">Former Web Developer Intern</p>
            </div>
          </div>
          <p className="text-[#6B4F3B]/80 text-sm italic">
            "The remote work flexibility allowed me to balance my studies while gaining real-world experience. I got to implement features that thousands of customers now use on their website."
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#F8F3E9]/50 p-6 rounded-lg"
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
              <Image 
                src="https://static.wixstatic.com/media/cf391b_3d38350dfea64a2db8a2daf0e3821da5~mv2.jpg" 
                alt="Intern portrait" 
                width={48} 
                height={48}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="font-medium text-[#6B4F3B]">Sneha T.</p>
              <p className="text-sm text-[#6B4F3B]/70">Content Creator, now Full-time</p>
            </div>
          </div>
          <p className="text-[#6B4F3B]/80 text-sm italic">
            "I started as an intern and now I'm part of the full-time team! The creative freedom and supportive environment helped me grow my skills and find my voice in sustainable fashion marketing."
          </p>
        </motion.div>
      </div>
    </div>
  );
}