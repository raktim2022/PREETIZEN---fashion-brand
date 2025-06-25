"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiMinus, FiPlus, FiShoppingBag, FiHeart, FiShare2, 
         FiCheck, FiChevronLeft, FiChevronRight, FiZoomIn } from "react-icons/fi";
import PageTransition from "@/components/ui/PageTransition";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ProductImageGallery from "@/components/products/ProductImageGallery";
import SizeChart from "@/components/products/SizeChart";
import RelatedProducts from "@/components/products/RelatedProducts";
import KnowTheModel from "@/components/products/KnowTheModel";
import SocialShare from "@/components/ui/SocialShare";
import { wildflowerProducts } from "../page";

export default function WildflowerProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
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
        const foundProduct = wildflowerProducts.find(p => p.id === parseInt(params.id));
        
        if (foundProduct) {
          setProduct(foundProduct);
          // Set default selected size if available
          if (foundProduct.sizes && foundProduct.sizes.length > 0) {
            setSelectedSize(foundProduct.sizes[0]);
          }
          // Set default selected color if available
          if (foundProduct.variants && foundProduct.variants.length > 0) {
            setSelectedColor(foundProduct.variants[0].color);
          }
          
          // Get related products (others from same collection)
          const related = wildflowerProducts
            .filter(p => p.id !== foundProduct.id)
            .slice(0, 4); // Show only 4 related products
            
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

  // Handle quantity change
  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  // Handle add to cart
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    
    // Add to cart logic here
    console.log("Adding to cart:", {
      product: product.id,
      size: selectedSize,
      color: selectedColor,
      quantity
    });
    
    // Show success feedback
    if (addToCartBtnRef.current) {
      addToCartBtnRef.current.textContent = "Added!";
      setTimeout(() => {
        if (addToCartBtnRef.current) {
          addToCartBtnRef.current.textContent = "Add to Cart";
        }
      }, 2000);
    }
  };

  if (loading) {
    return (
      <PageTransition>
        <div className="min-h-screen pt-16 bg-[#F8F3E9] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D46A6A] mx-auto mb-4"></div>
            <p className="text-[#6B4F3B]">Loading product...</p>
          </div>
        </div>
      </PageTransition>
    );
  }

  if (!product) {
    return (
      <PageTransition>
        <div className="min-h-screen pt-16 bg-[#F8F3E9] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-serif text-[#6B4F3B] mb-4">Product Not Found</h1>
            <Link href="/collections/wildflower" className="text-[#D46A6A] hover:underline">
              Back to Wildflower Collection
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen pt-36 bg-[#F8F3E9]">
        {/* Breadcrumb navigation */}
        {/* <div className="container mx-auto  px-4 py-4">
          <Breadcrumbs 
            items={[
              { label: "Home", path: "/" },
              { label: "Wildflower Collection", path: "/collections/wildflower" },
              { label: product.name, path: `/collections/wildflower/${product.id}` },
            ]}
          />
        </div> */}
        
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
                <div className="sticky top-24">
                  {/* Product badges */}
                  {product.badges && product.badges.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.badges.map((badge, index) => (
                        <span 
                          key={index}
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            badge === "Sale" 
                              ? "bg-[#D46A6A] text-white"
                              : badge === "Best Seller"
                              ? "bg-[#A7BFA3] text-white"
                              : "bg-[#E1B866] text-[#6B4F3B]"
                          }`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Product title */}
                  <h1 className="text-2xl md:text-3xl font-serif text-[#6B4F3B] mb-4">
                    {product.name}
                  </h1>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-[#E1B866]">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(product.rating) ? "★" : "☆"}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-[#333333]/70">
                      {product.rating} ({product.reviewCount} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-[#6B4F3B]">
                        {formatPrice(product.salePrice || product.price)}
                      </span>
                      {product.salePrice && (
                        <span className="text-lg text-[#333333]/50 line-through">
                          {formatPrice(product.price)}
                        </span>
                      )}
                    </div>
                    {product.salePrice && (
                      <p className="text-sm text-[#D46A6A] font-medium">
                        Save {formatPrice(product.price - product.salePrice)}
                      </p>
                    )}
                  </div>

                  {/* Color selection */}
                  {product.variants && product.variants.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-[#333333] mb-3">
                        Color: <span className="font-normal">{selectedColor}</span>
                      </h3>
                      <div className="flex gap-2">
                        {product.variants.map((variant) => (
                          <button
                            key={variant.color}
                            onClick={() => setSelectedColor(variant.color)}
                            disabled={!variant.inStock}
                            className={`w-8 h-8 rounded-full border-2 transition-all ${
                              selectedColor === variant.color
                                ? "border-[#6B4F3B] scale-110"
                                : "border-gray-300"
                            } ${!variant.inStock ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}`}
                            style={{ backgroundColor: variant.colorCode }}
                            title={variant.color}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Size selection */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-sm font-medium text-[#333333]">Size</h3>
                      <button 
                        onClick={() => setShowSizeChart(true)}
                        className="text-xs text-[#D46A6A] hover:underline"
                      >
                        Size Chart
                      </button>
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`py-2 px-3 text-sm border rounded transition-colors ${
                            selectedSize === size
                              ? "border-[#6B4F3B] bg-[#6B4F3B] text-white"
                              : "border-gray-300 hover:border-[#A7BFA3]"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-[#333333] mb-3">Quantity</h3>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-gray-300 rounded">
                        <button
                          onClick={() => handleQuantityChange(-1)}
                          className="p-2 hover:bg-gray-50"
                        >
                          <FiMinus size={16} />
                        </button>
                        <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(1)}
                          className="p-2 hover:bg-gray-50"
                        >
                          <FiPlus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Add to cart and wishlist */}
                  <div className="flex gap-3 mb-6">
                    <motion.button
                      ref={addToCartBtnRef}
                      onClick={handleAddToCart}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="flex-1 bg-[#D46A6A] text-white py-3 px-6 rounded font-medium flex items-center justify-center gap-2 transition-colors"
                    >
                      <FiShoppingBag size={18} />
                      Add to Cart
                    </motion.button>
                    <button className="p-3 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                      <FiHeart size={18} />
                    </button>
                  </div>

                  {/* Product description */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-[#333333] mb-3">Description</h3>
                    <p className="text-sm text-[#333333]/80 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Social share */}
                  <SocialShare 
                    url={`${window.location.origin}/collections/wildflower/${product.id}`}
                    title={product.name}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <RelatedProducts 
            products={relatedProducts} 
            collectionPath="/collections/wildflower"
          />
        )}

        {/* Know the Model */}
        <KnowTheModel />

        {/* Size Chart Modal */}
        {showSizeChart && (
          <SizeChart onClose={() => setShowSizeChart(false)} />
        )}
      </div>
    </PageTransition>
  );
}
