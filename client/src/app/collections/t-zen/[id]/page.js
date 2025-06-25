"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiMinus, FiPlus, FiShoppingBag, FiHeart, FiShare2, 
         FiCheck, FiChevronLeft, FiChevronRight, FiZoomIn } from "react-icons/fi";
import PageTransition from "@/components/ui/PageTransition";
// import NewDropBanner from "@/components/collections/NewDropBanner";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ProductImageGallery from "@/components/products/ProductImageGallery";
import SizeChart from "@/components/products/SizeChart";
import RelatedProducts from "@/components/products/RelatedProducts";
import KnowTheModel from "@/components/products/KnowTheModel";
import SocialShare from "@/components/ui/SocialShare";
import { tzenProducts } from "../page";

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [relatedProducts, setRelatedProducts] = useState([]);
  const addToCartBtnRef = useRef(null);

  // Animation for add to cart button
  const buttonVariants = {
    tap: { scale: 0.95 },
    hover: { 
      backgroundColor: "#C15A5A",
      transition: { duration: 0.2 }
    }
  };

  // Format price with Indian Rupee
  const formatPrice = (price) => {
    return `₹${price}`;
  };

  // Fetch product data
  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      try {
        // In a real app, this would be an API call using the ID parameter
        // Simulating API fetch from our mock data
        const foundProduct = tzenProducts.find(p => p.id === parseInt(params.id));
        
        if (foundProduct) {
          setProduct(foundProduct);
          // Set default selected size if available
          if (foundProduct.sizes && foundProduct.sizes.length > 0) {
            setSelectedSize(foundProduct.sizes[0]);
          }
          
          // Get related products (others from same collection)
          const related = tzenProducts
            .filter(p => p.id !== foundProduct.id)
            .slice(0, 10); // Show only 4 related products
            
          setRelatedProducts(related);
        }
        
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    
    if (params.id) {
      fetchProductData();
    }
  }, [params.id]);

  // Handle quantity changes
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  // Handle add to cart button click with animation
  const handleAddToCart = () => {
    // Add to cart logic would go here
    console.log("Added to cart:", {
      product: product.name,
      quantity,
      size: selectedSize,
      color: product.variants[0].color
    });
    
    // Animate the button
    addToCartBtnRef.current.classList.add("animate-pulse");
    setTimeout(() => {
      addToCartBtnRef.current.classList.remove("animate-pulse");
    }, 1000);
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen pt-16 bg-[#F8F3E9] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#A7BFA3] border-t-[#D46A6A] rounded-full animate-spin"></div>
      </div>
    );
  }

  // Product not found
  if (!product) {
    return (
      <div className="min-h-screen pt-16 bg-[#F8F3E9] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-medium text-[#6B4F3B] mb-4">Product not found</h1>
        <p className="text-[#333333]/70 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link href="/collections/t-zen" className="px-6 py-3 bg-[#D46A6A] text-white rounded-md hover:bg-[#C15A5A] transition-colors">
          Back to Collection
        </Link>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen pt-16 bg-[#F8F3E9]">
        {/* New Collection Drop Banner */}
        {/* <NewDropBanner /> */}
        
        {/* Breadcrumb navigation */}
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs 
            items={[
              { label: "Home", path: "/" },
              // { label: "Collections", path: "/collections" },
              { label: "T-Zen Collection", path: "/collections/t-zen" },
              { label: product.name, path: `/collections/t-zen/${product.id}` },
            ]}
          />
        </div>
        
        {/* Product section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Product Images */}
              <div className="lg:w-3/5">
                <ProductImageGallery images={product.images} productName={product.name} />
              </div>
              
              {/* Product Details */}
              <div className="lg:w-2/5">
                {/* Product info */}
                <div>
                  {/* Badges */}
                  {product.badges && product.badges.length > 0 && (
                    <div className="flex gap-2 mb-3">
                      {product.badges.map((badge, index) => (
                        <span 
                          key={index}
                          className={`px-2 py-1 text-xs font-medium rounded-sm ${
                            badge === 'Best Seller' ? 'bg-[#D46A6A] text-white' :
                            badge === 'New Arrival' ? 'bg-[#6B4F3B] text-white' :
                            badge === 'Limited Pieces' ? 'bg-[#A7BFA3] text-white' :
                            badge === 'Sale' ? 'bg-[#D46A6A] text-white' :
                            badge === 'Crowd Favorite' ? 'bg-[#6B4F3B] text-white' :
                            'bg-[#A7BFA3]/20 text-[#6B4F3B]'
                          }`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {/* Product name */}
                  <h1 className="text-3xl font-serif text-[#6B4F3B] mb-3">{product.name}</h1>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex text-[#D46A6A]">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill={i < Math.floor(product.rating) ? "currentColor" : "none"} stroke="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-[#333333]/70 ml-2">
                      {product.rating} ({product.reviewCount} reviews)
                    </span>
                  </div>
                  
                  {/* Price */}
                  <div className="mb-6">
                    {product.salePrice ? (
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-medium text-[#D46A6A]">{formatPrice(product.salePrice)}</span>
                        <span className="text-[#333333]/60 line-through">{formatPrice(product.price)}</span>
                        <span className="px-2 py-0.5 text-xs font-medium bg-[#D46A6A]/10 text-[#D46A6A] rounded">
                          {Math.round((1 - product.salePrice / product.price) * 100)}% OFF
                        </span>
                      </div>
                    ) : (
                      <span className="text-2xl font-medium text-[#333333]">{formatPrice(product.price)}</span>
                    )}
                    <p className="text-xs text-[#333333]/50 mt-1">Inclusive of all taxes</p>
                  </div>
                  
                  {/* Product description */}
                  <p className="text-[#333333]/80 mb-6">{product.description}</p>
                  
                  {/* Material specs */}
                  <div className="flex items-center gap-2 mb-6 text-sm">
                    <div className="flex items-center gap-1 px-2 py-1 bg-[#A7BFA3]/10 text-[#333333] rounded">
                      <FiCheck size={14} className="text-[#A7BFA3]" />
                      <span>100% Cotton</span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-[#A7BFA3]/10 text-[#333333] rounded">
                      <FiCheck size={14} className="text-[#A7BFA3]" />
                      <span>240 GSM</span>
                    </div>
                    {product.variants[0].color && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-[#A7BFA3]/10 text-[#333333] rounded">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: product.variants[0].colorCode }}></span>
                        <span>{product.variants[0].color}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Size selector */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-[#333333]">Size</span>
                      <button 
                        className="text-sm text-[#D46A6A] underline"
                        onClick={() => setShowSizeChart(true)}
                      >
                        Size Chart
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-2 rounded-md transition-colors ${
                            selectedSize === size
                              ? 'bg-[#D46A6A] text-white'
                              : 'border border-[#A7BFA3]/30 hover:bg-[#A7BFA3]/10'
                          }`}
                          aria-label={`Select size ${size}`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                    {product.badges?.includes("Limited Pieces") && (
                      <p className="text-xs text-[#D46A6A] mt-2">
                        <span className="font-medium">Only a few left!</span> Limited edition design.
                      </p>
                    )}
                  </div>
                  
                  {/* Quantity selector */}
                  <div className="mb-8">
                    <span className="block font-medium text-[#333333] mb-2">Quantity</span>
                    <div className="flex items-center">
                      <button 
                        onClick={decrementQuantity}
                        className="w-10 h-10 rounded-l-md border border-[#A7BFA3]/30 flex items-center justify-center hover:bg-[#A7BFA3]/10"
                        disabled={quantity <= 1}
                        aria-label="Decrease quantity"
                      >
                        <FiMinus size={16} />
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-16 h-10 text-center border-t border-b border-[#A7BFA3]/30 focus:outline-none"
                        aria-label="Product quantity"
                      />
                      <button 
                        onClick={incrementQuantity}
                        className="w-10 h-10 rounded-r-md border border-[#A7BFA3]/30 flex items-center justify-center hover:bg-[#A7BFA3]/10"
                        aria-label="Increase quantity"
                      >
                        <FiPlus size={16} />
                      </button>
                    </div>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button 
                      ref={addToCartBtnRef}
                      onClick={handleAddToCart}
                      className="flex-1 py-3 bg-[#D46A6A] text-white rounded-md flex items-center justify-center gap-2 transition-colors font-medium"
                      variants={buttonVariants}
                      whileTap="tap"
                      whileHover="hover"
                      aria-label="Add to cart"
                    >
                      <FiShoppingBag size={18} />
                      Add to Cart
                    </motion.button>
                    
                    <motion.button 
                      className="flex-1 py-3 bg-[#6B4F3B] text-white rounded-md flex items-center justify-center gap-2 transition-colors font-medium"
                      variants={buttonVariants}
                      whileTap="tap"
                      whileHover={{ backgroundColor: "#5a4231", transition: { duration: 0.2 } }}
                      aria-label="Buy now"
                    >
                      Buy Now
                    </motion.button>
                  </div>
                  
                  {/* Wishlist and share */}
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-[#A7BFA3]/20">
                    <button className="flex items-center gap-1 text-sm text-[#333333] hover:text-[#D46A6A] transition-colors">
                      <FiHeart size={16} />
                      Add to Wishlist
                    </button>
                    
                    <SocialShare 
                      url={`https://preetizen.com/collections/t-zen/${product.id}`} 
                      title={`Check out ${product.name} at Preetizen`}
                      image={product.images[0]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Product tabs */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="border-b border-[#A7BFA3]/20">
              <div className="flex overflow-x-auto">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${
                    activeTab === "description"
                      ? "text-[#D46A6A] border-b-2 border-[#D46A6A]"
                      : "text-[#333333]/70 hover:text-[#333333]"
                  }`}
                >
                  Product Details
                </button>
                <button
                  onClick={() => setActiveTab("care")}
                  className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${
                    activeTab === "care"
                      ? "text-[#D46A6A] border-b-2 border-[#D46A6A]"
                      : "text-[#333333]/70 hover:text-[#333333]"
                  }`}
                >
                  Care Instructions
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${
                    activeTab === "reviews"
                      ? "text-[#D46A6A] border-b-2 border-[#D46A6A]"
                      : "text-[#333333]/70 hover:text-[#333333]"
                  }`}
                >
                  Reviews ({product.reviewCount})
                </button>
              </div>
            </div>
            
            <div className="py-6">
              {activeTab === "description" && (
                <div className="max-w-2xl">
                  <h3 className="text-xl font-medium text-[#6B4F3B] mb-3">About {product.name}</h3>
                  <p className="mb-4 text-[#333333]/80">{product.description}</p>
                  <div className="space-y-3 text-[#333333]/80">
                    <p>This T-shirt is designed for everyday wear with a focus on comfort and style, featuring a unique Bengali slogan.</p>
                    <h4 className="font-medium text-[#6B4F3B]">Product Specifications:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Material: 100% Premium Cotton</li>
                      <li>GSM: 240 (Medium-weight fabric for durability)</li>
                      <li>Fit: Regular fit</li>
                      <li>Sleeve Type: Half sleeves</li>
                      <li>Neck Type: Round neck</li>
                      <li>Care: Machine wash cold, tumble dry low</li>
                      <li>Made in India with love</li>
                    </ul>
                    <p>Each T-shirt is designed and crafted with attention to detail, ensuring not just style but comfort and durability.</p>
                  </div>
                </div>
              )}
              
              {activeTab === "care" && (
                <div className="max-w-2xl">
                  <h3 className="text-xl font-medium text-[#6B4F3B] mb-3">Care Instructions</h3>
                  <div className="space-y-3 text-[#333333]/80">
                    <p>To keep your Preetizen T-shirt looking its best for as long as possible, please follow these care instructions:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Machine wash cold with like colors</li>
                      <li>Use mild detergent</li>
                      <li>Do not use bleach or fabric softeners</li>
                      <li>Tumble dry low or hang to dry</li>
                      <li>Iron inside out on low heat if needed</li>
                      <li>Do not dry clean</li>
                    </ul>
                    <p className="italic mt-4">Note: Some slight fading may occur over time, which adds to the vintage charm of the garment.</p>
                  </div>
                </div>
              )}
              
              {activeTab === "reviews" && (
                <div className="max-w-2xl">
                  <h3 className="text-xl font-medium text-[#6B4F3B] mb-3">Customer Reviews</h3>
                  <div className="bg-[#F8F3E9] p-4 rounded-lg mb-6">
                    <div className="flex items-center mb-3">
                      <div className="flex text-[#D46A6A]">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill={i < Math.floor(product.rating) ? "currentColor" : "none"} stroke="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-lg font-medium text-[#333333] ml-2">
                        {product.rating} out of 5
                      </span>
                    </div>
                    <p className="text-[#333333]/80">Based on {product.reviewCount} reviews</p>
                    <button className="mt-3 px-4 py-2 border border-[#D46A6A] text-[#D46A6A] rounded-md hover:bg-[#D46A6A] hover:text-white transition-colors">
                      Write a Review
                    </button>
                  </div>
                  
                  {/* Sample reviews */}
                  <div className="space-y-6">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="border-b border-[#A7BFA3]/20 pb-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="flex items-center">
                              <span className="font-medium text-[#333333] mr-2">
                                {["Ananya S.", "Rohan K.", "Priya M."][i]}
                              </span>
                              <span className="text-xs bg-[#A7BFA3]/20 px-2 py-0.5 rounded text-[#6B4F3B]">
                                Verified Purchase
                              </span>
                            </div>
                            <div className="flex text-[#D46A6A] my-1">
                              {[...Array(5)].map((_, j) => (
                                <svg key={j} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill={j < 5 - i ? "currentColor" : "none"} stroke="currentColor">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                          <span className="text-xs text-[#333333]/60">
                            {["2 weeks ago", "1 month ago", "3 months ago"][i]}
                          </span>
                        </div>
                        <p className="text-[#333333]/80">
                          {["Absolutely love this T-shirt! The cotton quality is amazing and the fit is perfect. The Bengali slogan is such a conversation starter.", 
                            "Really comfortable material and the print quality is excellent. Washed it several times and it still looks new.", 
                            "True to size and the color is exactly as shown. Love supporting local designs with such quality craftsmanship."][i]}
                        </p>
                        {i === 0 && (
                          <div className="mt-3 flex gap-2">
                            <div className="w-16 h-16 relative rounded overflow-hidden">
                              <Image 
                                src={product.images[0]} 
                                alt="Customer review image" 
                                fill 
                                className="object-cover"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                    
                    <button className="text-[#D46A6A] font-medium hover:underline">
                      View all {product.reviewCount} reviews
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Know the model section */}
        <KnowTheModel />
        
        {/* Related products */}
        <RelatedProducts products={relatedProducts} />
        
        {/* Size chart modal */}
        {showSizeChart && (
          <SizeChart onClose={() => setShowSizeChart(false)} />
        )}
      </div>
    </PageTransition>
  );
}