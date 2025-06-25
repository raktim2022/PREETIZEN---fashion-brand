import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiUpload, FiX } from "react-icons/fi";

export default function ApplicationFormModal({ isOpen, onClose, selectedRole, roles }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    portfolio: "",
    message: "",
    resume: null
  });

  // Set the role if one was selected
  useEffect(() => {
    if (selectedRole) {
      setFormData(prev => ({
        ...prev,
        role: selectedRole.title
      }));
    }
  }, [selectedRole]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    // Show success message or close modal
    alert("Application submitted successfully!");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/60">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <FiX size={24} className="text-[#6B4F3B]" />
            </button>
            
            <div className="p-6 md:p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-serif text-[#6B4F3B]">Apply to Preetizen</h2>
                {selectedRole && (
                  <p className="text-[#D46A6A] font-medium mt-1">
                    {selectedRole.title} Position
                  </p>
                )}
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-[#6B4F3B] font-medium mb-1">Full Name*</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full p-3 border border-[#D7CFC7] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D46A6A]"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-[#6B4F3B] font-medium mb-1">Email Address*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-[#D7CFC7] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D46A6A]"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-[#6B4F3B] font-medium mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-[#D7CFC7] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D46A6A]"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="role" className="block text-[#6B4F3B] font-medium mb-1">Position Applying For*</label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full p-3 border border-[#D7CFC7] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D46A6A] bg-white"
                      required
                    >
                      <option value="">Select a position</option>
                      {roles.map(role => (
                        <option key={role.id} value={role.title}>{role.title}</option>
                      ))}
                      <option value="Other">Other (please specify)</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="portfolio" className="block text-[#6B4F3B] font-medium mb-1">Portfolio/LinkedIn/Website</label>
                  <input
                    type="text"
                    id="portfolio"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="w-full p-3 border border-[#D7CFC7] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D46A6A]"
                    placeholder="https://"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[#6B4F3B] font-medium mb-1">Why do you want to join Preetizen?*</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-[#D7CFC7] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D46A6A]"
                    placeholder="Tell us about yourself and why you're interested in this role"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-[#6B4F3B] font-medium mb-1">Upload Resume/CV*</label>
                  <div className="border-2 border-dashed border-[#D7CFC7] rounded-md p-4 text-center">
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      required
                    />
                    <label
                      htmlFor="resume"
                      className="cursor-pointer flex flex-col items-center"
                    >
                      <FiUpload className="text-[#6B4F3B]/40" size={32} />
                      <span className="mt-2 text-sm text-[#6B4F3B]/70">
                        {formData.resume ? formData.resume.name : "Click to upload your resume (PDF, DOC, DOCX)"}
                      </span>
                    </label>
                  </div>
                </div>
                
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#D46A6A] text-white font-medium rounded-md hover:bg-[#c05b5b] transition-colors"
                  >
                    Submit Application
                  </button>
                  <p className="mt-3 text-sm text-[#6B4F3B]/60">
                    By submitting, you agree to our <a href="/terms" className="underline hover:text-[#D46A6A]">Terms</a> and <a href="/privacy" className="underline hover:text-[#D46A6A]">Privacy Policy</a>
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}