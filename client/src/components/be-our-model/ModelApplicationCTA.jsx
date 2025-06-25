"use client";

import { useState, forwardRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FiUpload, FiCheck, FiAlertCircle, FiCalendar } from "react-icons/fi";

const ModelApplicationCTA = forwardRef((props, ref) => {
  // Form deadline date - June 15, 2025
  const DEADLINE_DATE = new Date("2025-06-15T23:59:59");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    city: "",
    instagram: "",
    description: "",
    photo: null,
    photoPreview: null,
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isDeadlinePassed, setIsDeadlinePassed] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(null);
  
  // Check if deadline has passed
  useEffect(() => {
    const checkDeadline = () => {
      const now = new Date();
      const isPassed = now > DEADLINE_DATE;
      setIsDeadlinePassed(isPassed);
      
      if (!isPassed) {
        // Calculate time remaining
        const diffTime = DEADLINE_DATE - now;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        setTimeRemaining(`${diffDays} days`);
      }
    };
    
    checkDeadline();
    // Recheck deadline every day
    const interval = setInterval(checkDeadline, 86400000);
    return () => clearInterval(interval);
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear any error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };
  
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setErrors({ ...errors, photo: "Image must be less than 10MB" });
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          photo: file,
          photoPreview: reader.result
        });
        if (errors.photo) {
          setErrors({ ...errors, photo: null });
        }
      };
      reader.readAsDataURL(file);
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }
    
    if (!formData.age.trim()) {
      newErrors.age = "Age is required";
    } else if (isNaN(formData.age) || parseInt(formData.age) < 18) {
      newErrors.age = "Age must be 18 or older";
    }
    
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.description.trim()) newErrors.description = "Please tell us about yourself";
    if (!formData.photo) newErrors.photo = "Please upload a photo";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    // Add your form submission logic here
    console.log("Application submitted:", formData);
    setSubmitted(true);
    
    // In a real application, you would send this data to your backend
    // Example:
    // const formDataToSend = new FormData();
    // Object.keys(formData).forEach(key => {
    //   formDataToSend.append(key, formData[key]);
    // });
    // fetch('/api/model-application', {
    //   method: 'POST',
    //   body: formDataToSend,
    // });
  };
  
  // Render deadline passed component
  const renderDeadlinePassed = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-[#F8F3E9] p-10 rounded-lg text-center shadow-sm"
    >
      <div className="w-16 h-16 bg-[#D46A6A]/20 rounded-full flex items-center justify-center mx-auto mb-6">
        <FiCalendar className="text-[#D46A6A]" size={32} />
      </div>
      <h3 className="text-2xl font-serif text-[#6B4F3B] mb-3">Application Period Has Ended</h3>
      <p className="text-[#6B4F3B]/80 mb-6">
        We're sorry, but the application deadline for becoming a Preetizen model has passed. 
        The application window closed on June 15, 2025.
      </p>
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-center">
        <a 
          href="/lookbook" 
          className="px-6 py-3 bg-[#A7BFA3] text-white rounded-md hover:bg-[#96AB8F] transition-colors"
        >
          View Our Lookbook
        </a>
        <a 
          href="/newsletter" 
          className="px-6 py-3 border border-[#6B4F3B] text-[#6B4F3B] rounded-md hover:bg-[#6B4F3B]/5 transition-colors"
        >
          Subscribe for Updates
        </a>
      </div>
      <p className="mt-6 text-sm text-[#6B4F3B]/70">
        Follow us on social media to be notified when applications open for our next collection.
      </p>
    </motion.div>
  );
  
  // Render success message
  const renderSuccessMessage = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-[#F8F3E9] p-10 rounded-lg text-center"
    >
      <div className="w-16 h-16 bg-[#A7BFA3]/20 rounded-full flex items-center justify-center mx-auto mb-6">
        <FiCheck className="text-[#A7BFA3]" size={32} />
      </div>
      <h3 className="text-2xl font-serif text-[#6B4F3B] mb-3">Thank You for Applying!</h3>
      <p className="text-[#6B4F3B]/80 mb-6">
        We've received your application to become a Preetizen model. Our team will review your submission and get back to you within 7 days.
      </p>
      <p className="text-[#6B4F3B]/70 text-sm">
        Watch your email for updates from <span className="font-medium">models@preetizen.com</span>
      </p>
    </motion.div>
  );
  
  // Render application form
  const renderApplicationForm = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      {timeRemaining && (
        <div className="bg-[#D46A6A]/10 px-4 py-3 rounded-lg mb-6 text-center">
          <p className="text-[#D46A6A] font-medium flex items-center justify-center">
            <FiCalendar className="mr-2" />
            <span>Application deadline: {timeRemaining} remaining</span>
          </p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="bg-[#F8F3E9] p-6 md:p-10 rounded-lg shadow-sm">
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          <div>
            <label htmlFor="name" className="block text-[#6B4F3B] font-medium mb-1">Full Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 border ${errors.name ? 'border-red-400' : 'border-[#D7CFC7]'} rounded-md focus:outline-none focus:ring-1 focus:ring-[#A7BFA3]`}
              placeholder="Your name as it should appear"
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-[#6B4F3B] font-medium mb-1">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border ${errors.email ? 'border-red-400' : 'border-[#D7CFC7]'} rounded-md focus:outline-none focus:ring-1 focus:ring-[#A7BFA3]`}
              placeholder="Your email address"
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-5 mb-5">
          <div>
            <label htmlFor="age" className="block text-[#6B4F3B] font-medium mb-1">Age*</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className={`w-full p-3 border ${errors.age ? 'border-red-400' : 'border-[#D7CFC7]'} rounded-md focus:outline-none focus:ring-1 focus:ring-[#A7BFA3]`}
              placeholder="18+"
              min="18"
            />
            {errors.age && <p className="mt-1 text-xs text-red-500">{errors.age}</p>}
          </div>
          
          <div>
            <label htmlFor="city" className="block text-[#6B4F3B] font-medium mb-1">City/Location*</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`w-full p-3 border ${errors.city ? 'border-red-400' : 'border-[#D7CFC7]'} rounded-md focus:outline-none focus:ring-1 focus:ring-[#A7BFA3]`}
              placeholder="Where you are based"
            />
            {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city}</p>}
          </div>
          
          <div>
            <label htmlFor="instagram" className="block text-[#6B4F3B] font-medium mb-1">Instagram Handle <span className="text-xs font-normal">(optional)</span></label>
            <input
              type="text"
              id="instagram"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              className="w-full p-3 border border-[#D7CFC7] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A7BFA3]"
              placeholder="@yourusername"
            />
          </div>
        </div>
        
        <div className="mb-5">
          <label htmlFor="description" className="block text-[#6B4F3B] font-medium mb-1">
            Tell us about yourself*
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className={`w-full p-3 border ${errors.description ? 'border-red-400' : 'border-[#D7CFC7]'} rounded-md focus:outline-none focus:ring-1 focus:ring-[#A7BFA3]`}
            placeholder="Share why you want to be a Preetizen model in about 100 words"
          />
          {errors.description && <p className="mt-1 text-xs text-red-500">{errors.description}</p>}
          <p className="mt-1 text-xs text-[#6B4F3B]/60">{formData.description.length}/500 characters</p>
        </div>
        
        <div className="mb-8">
          <label htmlFor="photo" className="block text-[#6B4F3B] font-medium mb-1">
            Upload your photo*
          </label>
          
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="w-full md:w-1/3">
              {formData.photoPreview ? (
                <div className="relative">
                  <img
                    src={formData.photoPreview}
                    alt="Preview"
                    className="w-full h-auto rounded-md object-cover aspect-[3/4]"
                  />
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, photo: null, photoPreview: null })}
                    className="absolute -top-2 -right-2 bg-white rounded-full p-0.5 shadow-sm hover:bg-red-50"
                    aria-label="Remove photo"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ) : (
                <div className={`border-2 border-dashed ${errors.photo ? 'border-red-400' : 'border-[#D7CFC7]'} rounded-md p-8 text-center`}>
                  <FiUpload className="mx-auto text-[#6B4F3B]/40" size={32} />
                  <p className="mt-2 text-sm text-[#6B4F3B]/60">Click to upload or drag and drop</p>
                </div>
              )}
            </div>
            
            <div className="w-full md:w-2/3">
              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
              <label
                htmlFor="photo"
                className={`block w-full cursor-pointer ${
                  formData.photoPreview ? 'bg-white' : 'bg-[#A7BFA3] hover:bg-[#96AB8F]'
                } text-center py-3 px-4 rounded-md transition-colors`}
              >
                <span className={formData.photoPreview ? 'text-[#6B4F3B]' : 'text-white'}>
                  {formData.photoPreview ? 'Change Photo' : 'Select Photo'}
                </span>
              </label>
              
              {errors.photo && <p className="mt-1 text-xs text-red-500">{errors.photo}</p>}
              
              <div className="mt-3 bg-[#FFFBF7] rounded-md p-3">
                <h4 className="font-medium text-sm text-[#6B4F3B] mb-2 flex items-center">
                  <FiAlertCircle className="inline mr-1" size={14} />
                  Photo Tips
                </h4>
                <ul className="text-xs text-[#6B4F3B]/70 space-y-1 pl-5 list-disc">
                  <li>Clear, well-lit photo showing your face</li>
                  <li>Natural, authentic expression - be yourself!</li>
                  <li>Plain background preferred but not required</li>
                  <li>Maximum file size: 10MB</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
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
    </motion.div>
  );
  
  // Determine what to render based on state
  const renderContent = () => {
    if (isDeadlinePassed) {
      return renderDeadlinePassed();
    } else if (submitted) {
      return renderSuccessMessage();
    } else {
      return renderApplicationForm();
    }
  };
  
  return (
    <section ref={ref} className="py-20 bg-white" id="apply-now">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#6B4F3B] mb-4">This Is Your Moment</h2>
          <div className="w-20 h-1 bg-[#D46A6A] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-[#6B4F3B]/80">
            Join the 100+ Preetizens who've found their voice with us. 
            {!isDeadlinePassed && (
              <> Applications close on <span className="font-medium">June 15, 2025</span>.</>
            )}
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {renderContent()}
        </div>
      </div>
    </section>
  );
});

ModelApplicationCTA.displayName = "ModelApplicationCTA";

export default ModelApplicationCTA;