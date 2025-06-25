"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiStar, FiFilter, FiX, FiImage, FiCheck } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const FilterableReviewList = () => {
  // Initial state for filters and sorting
  const [filters, setFilters] = useState({
    minRating: 0,
    withPhotos: false,
    product: "all"
  });
  const [sortBy, setSortBy] = useState("recent");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3); // Initial batch of reviews to show
  
  // Mock reviews data - replace with API call in real implementation
  const allReviews = [
    {
      id: 1,
      name: "Shreya K.",
      location: "Kolkata",
      rating: 5,
      product: "Toder Problem Hoina Blue",
      date: "2025-07-06",
      title: "Confidence in every stitch",
      review: "I feel so confident in my Toder Problem Hoina tee. The fit is absolutely perfect and I love knowing it's made with eco-conscious materials. The Bengali script looks authentic and gets so many compliments! This is my third purchase from Preetizen and definitely not my last.",
      images: ["https://static.wixstatic.com/media/cf391b_69f069fbaaa24322bd446316ebcbba27~mv2.jpeg/v1/fill/w_495,h_415,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-06-17%20at%2003_02_23.jpeg"],
      helpful: 18
    },
    {
      id: 2,
      name: "Arjun K.",
      location: "Mumbai",
      rating: 5,
      product: "Bondhu Bengali Friendship Tee",
      date: "2025-06-23",
      title: "Perfect gift for my best friend",
      review: "Bought matching Bondhu tees for me and my childhood friend. The quality is exceptional - soft fabric that didn't shrink after washing. The message resonates deeply with our Bengali roots. Sustainable fashion that actually feels premium - rare combination! Customer service was top-notch too when I had a sizing question.",
      images: ["https://static.wixstatic.com/media/cf391b_88b37ca8a10b496b9ac224ca74b7abd7~mv2.png/v1/crop/x_62,y_337,w_1077,h_1868/fill/w_243,h_421,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_6705_PNG.png"],
      helpful: 24
    },
    {
      id: 3,
      name: "Neha S.",
      location: "Bangalore",
      rating: 4,
      product: "Shob Kichu Bhalo Classic Fit Tee",
      date: "2025-06-15",
      title: "Love the positive message",
      review: "The affirmation on this tee brightens my day whenever I wear it! The classic fit is flattering without being too tight. My only suggestion would be to offer more color options. The packaging was beautiful and plastic-free which I really appreciate. Would definitely recommend to anyone looking for sustainable fashion with cultural significance.",
      images: ["https://static.wixstatic.com/media/cf391b_f7aa7f3cfe6c4088b6910e4fb1ef7e52~mv2.jpeg/v1/crop/x_6,y_4,w_1087,h_848/fill/w_509,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-06-17%20at%2003_27_40.jpeg"],
      helpful: 12
    },
    {
      id: 4,
      name: "Tanya G.",
      location: "Delhi",
      rating: 5,
      product: "Mosha Bujho Bengali Graphic Tee",
      date: "2025-07-03",
      title: "Exceeded expectations!",
      review: "I ordered this tee after seeing it on Instagram and it surpassed my expectations! The material is incredibly soft, and the Bengali phrase always sparks conversations. As someone who values sustainability, I appreciate that Preetizen uses ethical manufacturing practices. The packaging was also eco-friendly—no plastic in sight. Will definitely be ordering more!",
      images: ["https://static.wixstatic.com/media/cf391b_dfa5b002737446bf94bb0d6db7c0de79~mv2.jpeg/v1/fill/w_322,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_448385F10401-1.jpeg"],
      helpful: 9
    },
    {
      id: 5,
      name: "Aditya M.",
      location: "Hyderabad",
      rating: 5,
      product: "Cha Lover Bengali Tee",
      date: "2025-06-28",
      title: "Perfect for tea lovers!",
      review: "As a tea enthusiast with Bengali roots, this t-shirt spoke to me on a spiritual level! The quality is exceptional—thick cotton that doesn't feel flimsy. I've washed it multiple times and the print hasn't faded at all. Shipping was faster than expected and the handwritten thank you note was a lovely touch. Preetizen's attention to detail sets them apart from other brands.",
      images: ["https://static.wixstatic.com/media/cf391b_85ad852e97b34bb8ba8133ed06579e02~mv2.jpeg/v1/fill/w_282,h_415,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-06-17%20at%2003_16_51.jpeg"],
      helpful: 16
    },
    {
      id: 6,
      name: "Rohan D.",
      location: "Chennai",
      rating: 4,
      product: "Bhalobasha Embroidered Tee",
      date: "2025-06-12",
      title: "Beautiful embroidery work",
      review: "The embroidery work on this tee is stunning! You can tell it's made with care and expertise. The fit is relaxed but not baggy, exactly what I was looking for. The only reason I'm not giving 5 stars is that I wish there were more color options available. That said, the quality and craftsmanship justify the price point. Looking forward to my next purchase!",
      images: [],
      helpful: 7
    },
    {
      id: 7,
      name: "Priya N.",
      location: "Pune",
      rating: 3,
      product: "Abar Dekha Hobe Minimalist Tee",
      date: "2025-05-30",
      title: "Sizing runs small",
      review: "I love the design and quality of this tee, but I found that it runs smaller than expected. I usually wear a Medium but should have sized up to a Large. Customer service was helpful though and offered an exchange. The material is good quality and the minimalist design is exactly what I was looking for. Just be aware of the sizing when ordering.",
      images: [],
      helpful: 21
    },
    {
      id: 8,
      name: "Vivek J.",
      location: "Ahmedabad",
      rating: 5,
      product: "Bhalo Achi Oversized Tee",
      date: "2025-06-08",
      title: "Super comfortable!",
      review: "This oversized tee is exactly what I've been searching for! Perfect loose fit without looking sloppy. The cotton is incredibly soft and breathable, ideal for our hot climate. I appreciate that it's made sustainably and supports local artisans. The Bengali message is a great conversation starter too. Already bought another one in a different color!",
      images: ["https://static.wixstatic.com/media/cf391b_99532203837e4845867415eedc0456ec~mv2.jpg/v1/crop/x_6,y_0,w_640,h_617/fill/w_414,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/PHOTO-2025-05-30-10-22-56_edited.jpg"],
      helpful: 14
    }
  ];
  
  // Product list for filter
  const products = [
    { value: "all", label: "All Products" },
    { value: "Toder Problem Hoina Blue", label: "Toder Problem Hoina" },
    { value: "Bondhu Bengali Friendship Tee", label: "Bondhu Friendship Tee" },
    { value: "Shob Kichu Bhalo Classic Fit Tee", label: "Shob Kichu Bhalo Tee" },
    { value: "Mosha Bujho Bengali Graphic Tee", label: "Mosha Bujho Tee" },
    { value: "Cha Lover Bengali Tee", label: "Cha Lover Tee" },
    { value: "Bhalobasha Embroidered Tee", label: "Bhalobasha Tee" },
    { value: "Abar Dekha Hobe Minimalist Tee", label: "Abar Dekha Hobe Tee" },
    { value: "Bhalo Achi Oversized Tee", label: "Bhalo Achi Tee" },
  ];
  
  // Apply filtering and sorting
  useEffect(() => {
    let filtered = [...allReviews];
    
    // Filter by rating
    if (filters.minRating > 0) {
      filtered = filtered.filter(review => review.rating >= filters.minRating);
    }
    
    // Filter by photo presence
    if (filters.withPhotos) {
      filtered = filtered.filter(review => review.images && review.images.length > 0);
    }
    
    // Filter by product
    if (filters.product !== "all") {
      filtered = filtered.filter(review => review.product === filters.product);
    }
    
    // Sort reviews
    switch (sortBy) {
      case "helpful":
        filtered.sort((a, b) => b.helpful - a.helpful);
        break;
      case "highest":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "lowest":
        filtered.sort((a, b) => a.rating - b.rating);
        break;
      case "recent":
      default:
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    
    setDisplayedReviews(filtered);
  }, [filters, sortBy]);
  
  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };
  
  // Load more reviews
  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, displayedReviews.length));
  };
  
  // Format date to readable string
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <div>
      {/* Filter and sort controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <button 
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="flex items-center px-4 py-2 border border-[#A7BFA3]/30 rounded-md text-[#6B4F3B] hover:border-[#A7BFA3] transition-colors"
        >
          <FiFilter size={16} className="mr-2" />
          <span>Filter Reviews</span>
        </button>
        
        <div className="flex items-center">
          <label htmlFor="sort-select" className="text-sm text-[#6B4F3B]/70 mr-2">Sort by:</label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-[#A7BFA3]/30 rounded-md text-[#6B4F3B] bg-white focus:outline-none focus:ring-1 focus:ring-[#A7BFA3]"
          >
            <option value="recent">Most Recent</option>
            <option value="helpful">Most Helpful</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
          </select>
        </div>
      </div>
      
      {/* Filter panel */}
      <AnimatePresence>
        {filtersOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mb-8"
          >
            <div className="p-6 bg-white rounded-lg border border-[#A7BFA3]/20 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-[#6B4F3B]">Filter Options</h3>
                <button 
                  onClick={() => setFiltersOpen(false)}
                  className="text-[#6B4F3B]/60 hover:text-[#6B4F3B]"
                >
                  <FiX size={18} />
                </button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Rating filter */}
                <div>
                  <label className="text-sm font-medium text-[#6B4F3B] block mb-2">Minimum Rating</label>
                  <div className="flex gap-2">
                    {[0, 1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => handleFilterChange("minRating", rating)}
                        className={`flex items-center justify-center w-10 h-10 rounded-md border transition-colors ${
                          filters.minRating === rating
                            ? "bg-[#D46A6A]/10 border-[#D46A6A] text-[#D46A6A]"
                            : "border-[#A7BFA3]/30 hover:border-[#A7BFA3] text-[#6B4F3B]"
                        }`}
                      >
                        {rating === 0 ? "All" : rating}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* With photos filter */}
                <div>
                  <label className="text-sm font-medium text-[#6B4F3B] block mb-2">With Photos</label>
                  <button
                    onClick={() => handleFilterChange("withPhotos", !filters.withPhotos)}
                    className={`flex items-center px-4 py-2 rounded-md border transition-colors ${
                      filters.withPhotos
                        ? "bg-[#D46A6A]/10 border-[#D46A6A] text-[#D46A6A]"
                        : "border-[#A7BFA3]/30 hover:border-[#A7BFA3] text-[#6B4F3B]"
                    }`}
                  >
                    <FiImage size={16} className="mr-2" />
                    <span>Only show reviews with photos</span>
                    {filters.withPhotos && <FiCheck size={16} className="ml-2" />}
                  </button>
                </div>
                
                {/* Product filter */}
                <div>
                  <label htmlFor="product-select" className="text-sm font-medium text-[#6B4F3B] block mb-2">
                    Product
                  </label>
                  <select
                    id="product-select"
                    value={filters.product}
                    onChange={(e) => handleFilterChange("product", e.target.value)}
                    className="w-full px-3 py-2 border border-[#A7BFA3]/30 rounded-md text-[#6B4F3B] bg-white focus:outline-none focus:ring-1 focus:ring-[#A7BFA3]"
                  >
                    {products.map((product) => (
                      <option key={product.value} value={product.value}>
                        {product.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mt-5 flex justify-end">
                <button
                  onClick={() => {
                    setFilters({ minRating: 0, withPhotos: false, product: "all" });
                  }}
                  className="text-sm text-[#D46A6A] hover:text-[#C15A5A] transition-colors"
                >
                  Reset all filters
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Reviews list */}
      {displayedReviews.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-[#6B4F3B]/70">No reviews match your filter criteria.</p>
          <button
            onClick={() => setFilters({ minRating: 0, withPhotos: false, product: "all" })}
            className="mt-4 text-[#D46A6A] hover:text-[#C15A5A] transition-colors"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {displayedReviews.slice(0, visibleCount).map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-lg border border-[#A7BFA3]/10 shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-wrap justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <FiStar 
                            key={i} 
                            size={18} 
                            className={i < review.rating 
                              ? "text-[#D46A6A] fill-[#D46A6A]" 
                              : "text-[#D46A6A]/20"
                            } 
                          />
                        ))}
                      </div>
                      <h3 className="text-[#6B4F3B] font-medium">{review.title}</h3>
                    </div>
                    <p className="text-[#6B4F3B]/60 text-sm mt-1">
                      {formatDate(review.date)} • Verified Purchase
                    </p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-[#D46A6A] font-medium">{review.product}</p>
                  </div>
                </div>
                
                <p className="text-[#6B4F3B]/80 mb-4">{review.review}</p>
                
                {/* Review images */}
                {review.images && review.images.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {review.images.map((img, i) => (
                      <div key={i} className="relative w-20 h-20 rounded-md overflow-hidden">
                        <Image
                          src={img}
                          alt={`Review image ${i+1} from ${review.name}`}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center justify-between pt-3 border-t border-[#A7BFA3]/10">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#F8F3E9] flex items-center justify-center text-[#6B4F3B] font-medium">
                      {review.name.charAt(0)}
                    </div>
                    <div className="ml-2">
                      <p className="text-sm font-medium text-[#6B4F3B]">{review.name}</p>
                      <p className="text-xs text-[#6B4F3B]/60">{review.location}</p>
                    </div>
                  </div>
                  
                  <button className="text-sm text-[#6B4F3B]/60 hover:text-[#6B4F3B] transition-colors">
                    {review.helpful} people found this helpful
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
      
      {/* Load more button */}
      {visibleCount < displayedReviews.length && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8 flex justify-center"
        >
          <button
            onClick={loadMore}
            className="px-6 py-2.5 border border-[#A7BFA3] text-[#6B4F3B] rounded-md hover:bg-[#A7BFA3]/10 transition-colors"
          >
            Load More Reviews
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default FilterableReviewList;