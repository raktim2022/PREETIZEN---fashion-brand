"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiStar, FiUpload, FiCheck } from "react-icons/fi";

const products = [
  { id: 1, name: "Cha Lover Bengali Tee", collection: "TeeZen Collection" },
  { id: 2, name: "Mosha Bujho Bengali Graphic Tee", collection: "TeeZen Collection" },
  { id: 3, name: "Bhalo Achi Oversized Tee", collection: "TeeZen Collection" },
  { id: 4, name: "Abar Dekha Hobe Minimalist Tee", collection: "TeeZen Collection" },
  { id: 5, name: "Shob Kichu Bhalo Classic Fit Tee", collection: "TeeZen Collection" },
  { id: 6, name: "Ektu Sobur Slogan Tee", collection: "TeeZen Collection" },
  { id: 7, name: "Bhalobasha Embroidered Tee", collection: "TeeZen Collection" },
  { id: 8, name: "Bondhu Bengali Friendship Tee", collection: "TeeZen Collection" },
  { id: 9, name: "Wildflower Midi Dress", collection: "Wildflower Collection" },
  { id: 10, name: "Wildflower Mini Dress", collection: "Wildflower Collection" },
  { id: 11, name: "Wildflower Maxi Dress", collection: "Wildflower Collection" },
];

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    productId: "",
    rating: 0,
    title: "",
    review: "",
    photoPreview: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear any error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };
  
  const handleRatingChange = (rating) => {
    setFormData({ ...formData, rating });
    if (errors.rating) {
      setErrors({ ...errors, rating: null });
    }
  };
  
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, photo: "Image must be less than 5MB" });
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, photoPreview: reader.result });
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
    
    if (!formData.productId) newErrors.productId = "Please select a product";
    if (formData.rating === 0) newErrors.rating = "Please provide a rating";
    if (!formData.title.trim()) newErrors.title = "Review title is required";
    if (!formData.review.trim()) newErrors.review = "Review content is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    // Add your submission logic here - API call to backend
    console.log("Review submitted:", formData);
    setSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        productId: "",
        rating: 0,
        title: "",
        review: "",
        photoPreview: null,
      });
      setSubmitted(false);
    }, 5000);
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 rounded-lg text-center"
        >
          <div className="w-16 h-16 mx-auto bg-[#A7BFA3]/20 rounded-full flex items-center justify-center mb-4">
            <FiCheck className="text-[#A7BFA3]" size={32} />
          </div>
          <h3 className="text-xl font-serif text-[#6B4F3B] mb-2">Thank You for Your Review!</h3>
          <p className="text-[#6B4F3B]/70">
            We appreciate you taking the time to share your experience.
            Your review will help other customers make informed decisions.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#6B4F3B] mb-1">
                Your Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-2 border ${errors.name ? 'border-red-400' : 'border-[#E7E2DC]'} rounded-md focus:outline-none focus:ring-1 focus:ring-[#A7BFA3]`}
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#6B4F3B] mb-1">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 border ${errors.email ? 'border-red-400' : 'border-[#E7E2DC]'} rounded-md focus:outline-none focus:ring-1 focus:ring-[#A7BFA3]`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="productId" className="block text-sm font-medium text-[#6B4F3B] mb-1">
              Product*
            </label>
            <select
              id="productId"
              name="productId"
              required
              value={formData.productId}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.productId ? 'border-red-400' : 'border-[#E7E2DC]'} rounded-md focus:outline-none focus:ring-1 focus:ring-[#A7BFA3]`}
            >
              <option value="">Select a product</option>
              <optgroup label="TeeZen Collection">
                {products
                  .filter(p => p.collection === "TeeZen Collection")
                  .map(product => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                    </option>
                  ))
                }
              </optgroup>
              <optgroup label="Wildflower Collection">
                {products
                  .filter(p => p.collection === "Wildflower Collection")
                  .map(product => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                    </option>
                  ))
                }
              </optgroup>
            </select>
            {errors.productId && <p className="mt-1 text-xs text-red-500">{errors.productId}</p>}
          </div>
          
          <div className="mb-6">
            <p className="text-sm font-medium text-[#6B4F3B] mb-2">Your Rating*</p>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="text-2xl mr-1 focus:outline-none"
                  onMouseEnter={() => setHoveredStar(star)}
                  onMouseLeave={() => setHoveredStar(0)}
                  onClick={() => handleRatingChange(star)}
                  aria-label={`Rate ${star} stars`}
                >
                  <FiStar 
                    className={`transition-colors ${
                      (hoveredStar || formData.rating) >= star 
                        ? "text-[#D46A6A] fill-[#D46A6A]" 
                        : "text-[#D46A6A]"
                    }`}
                    size={24}
                  />
                </button>
              ))}
              <span className="ml-2 text-sm text-[#6B4F3B]/70 self-center">
                {formData.rating > 0 
                  ? `${formData.rating === 5 ? 'Excellent!' : formData.rating >= 4 ? 'Very Good!' : formData.rating === 3 ? 'Good' : formData.rating === 2 ? 'Fair' : 'Poor'}`
                  : 'Select a rating'
                }
              </span>
            </div>
            {errors.rating && <p className="mt-1 text-xs text-red-500">{errors.rating}</p>}
          </div>
          
          <div className="mb-6">
            <label htmlFor="title" className="block text-sm font-medium text-[#6B4F3B] mb-1">
              Review Title*
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              placeholder="Summarize your experience"
              className={`w-full p-2 border ${errors.title ? 'border-red-400' : 'border-[#E7E2DC]'} rounded-md focus:outline-none focus:ring-1 focus:ring-[#A7BFA3]`}
            />
            {errors.title && <p className="mt-1 text-xs text-red-500">{errors.title}</p>}
          </div>
          
          <div className="mb-6">
            <label htmlFor="review" className="block text-sm font-medium text-[#6B4F3B] mb-1">
              Review*
            </label>
            <textarea
              id="review"
              name="review"
              required
              rows={4}
              value={formData.review}
              onChange={handleChange}
              placeholder="Tell us about your experience with this product"
              className={`w-full p-2 border ${errors.review ? 'border-red-400' : 'border-[#E7E2DC]'} rounded-md focus:outline-none focus:ring-1 focus:ring-[#A7BFA3]`}
            />
            {errors.review && <p className="mt-1 text-xs text-red-500">{errors.review}</p>}
          </div>
          
          <div className="mb-8">
            <p className="block text-sm font-medium text-[#6B4F3B] mb-2">
              Share a Photo (Optional)
            </p>
            <div className="flex items-center">
              <label 
                htmlFor="photo-upload" 
                className="flex items-center cursor-pointer px-4 py-2 border border-[#E7E2DC] rounded-md hover:bg-[#F8F3E9] transition-colors"
              >
                <FiUpload className="mr-2 text-[#6B4F3B]" />
                <span className="text-sm text-[#6B4F3B]">Upload Image</span>
                <input 
                  type="file"
                  id="photo-upload"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </label>
              {formData.photoPreview && (
                <div className="ml-4 relative">
                  <img 
                    src={formData.photoPreview} 
                    alt="Preview" 
                    className="h-16 w-16 object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, photoPreview: null })}
                    className="absolute -top-2 -right-2 bg-white rounded-full p-0.5 shadow-sm text-red-500"
                    aria-label="Remove image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
            {errors.photo && <p className="mt-1 text-xs text-red-500">{errors.photo}</p>}
            <p className="mt-1 text-xs text-[#6B4F3B]/60">
              Max file size: 5MB. Formats: JPG, PNG
            </p>
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-[#A7BFA3] text-white font-medium rounded-md hover:bg-[#96AB8F] transition-colors focus:outline-none focus:ring-2 focus:ring-[#A7BFA3] focus:ring-offset-2"
            >
              Submit Review
            </button>
            <p className="mt-3 text-xs text-[#6B4F3B]/60">
              By submitting this review, you agree to our review guidelines and terms of service.
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default ReviewForm;