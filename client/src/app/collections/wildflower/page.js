"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CollectionHeader from "@/components/collections/CollectionHeader";
import FilterBar from "@/components/collections/FilterBar";
import ProductGrid from "@/components/collections/ProductGrid";
import CollectionInfo from "@/components/collections/CollectionInfo";
import PageTransition from "@/components/ui/PageTransition";

// Wildflower collection product data
export const wildflowerProducts = [
  {
    id: 1,
    name: "Sunflower Dreams Dress",
    price: 2499,
    salePrice: 1999,
    description: "A flowing midi dress adorned with delicate sunflower prints. Made from sustainable organic cotton with a comfortable fit perfect for summer days.",
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    badges: ["Best Seller", "Organic Cotton"],
    variants: [
      { color: "Sunshine Yellow", colorCode: "#F4D03F", inStock: true },
      { color: "Sage Green", colorCode: "#A8C686", inStock: true },
      { color: "Cream", colorCode: "#F8F6F0", inStock: false },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.9,
    reviewCount: 156
  },
  {
    id: 2,
    name: "Lavender Fields Blouse",
    price: 1899,
    salePrice: null,
    description: "Elegant blouse featuring hand-painted lavender motifs. Crafted from breathable linen blend for all-day comfort and style.",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    badges: ["New Arrival"],
    variants: [
      { color: "Lavender", colorCode: "#C8A2C8", inStock: true },
      { color: "White", colorCode: "#FFFFFF", inStock: true },
      { color: "Dusty Rose", colorCode: "#D4A5A5", inStock: true },
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviewCount: 89
  },
  {
    id: 3,
    name: "Wildflower Meadow Skirt",
    price: 1699,
    salePrice: 1399,
    description: "A-line midi skirt with an all-over wildflower print. Features a comfortable elastic waistband and flowing silhouette.",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a13d24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    badges: ["Sale"],
    variants: [
      { color: "Meadow Green", colorCode: "#7FB069", inStock: true },
      { color: "Coral Pink", colorCode: "#FF7F7F", inStock: true },
    ],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.6,
    reviewCount: 124
  },
  {
    id: 4,
    name: "Rose Garden Cardigan",
    price: 2299,
    salePrice: null,
    description: "Cozy knit cardigan with embroidered rose details. Perfect for layering over dresses or pairing with jeans.",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    badges: ["Limited Edition"],
    variants: [
      { color: "Blush Pink", colorCode: "#F8BBD9", inStock: true },
      { color: "Ivory", colorCode: "#FFFFF0", inStock: false },
      { color: "Sage", colorCode: "#9CAF88", inStock: true },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    reviewCount: 67
  },
  {
    id: 5,
    name: "Daisy Chain Top",
    price: 1399,
    salePrice: 1199,
    description: "Cute crop top with daisy chain embroidery along the neckline. Made from soft organic cotton jersey.",
    images: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    badges: ["Sale", "Organic"],
    variants: [
      { color: "Daisy White", colorCode: "#FFFACD", inStock: true },
      { color: "Mint Green", colorCode: "#98FB98", inStock: true },
      { color: "Baby Blue", colorCode: "#87CEEB", inStock: false },
    ],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.5,
    reviewCount: 203
  },
  {
    id: 6,
    name: "Poppy Field Jumpsuit",
    price: 2799,
    salePrice: 2399,
    description: "Statement jumpsuit featuring bold poppy prints. Wide-leg silhouette with adjustable waist tie for the perfect fit.",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    badges: ["Sale", "Statement Piece"],
    variants: [
      { color: "Poppy Red", colorCode: "#FF6B6B", inStock: true },
      { color: "Navy Blue", colorCode: "#2C3E50", inStock: true },
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviewCount: 91
  }
];

export default function WildflowerCollection() {
  // Filter state
  const [activeFilters, setActiveFilters] = useState({
    colors: [],
    sizes: [],
  });
  
  // Products data
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch products
  useEffect(() => {
    // Simulating API fetch with mock data
    const fetchProducts = async () => {
      setIsLoading(true);
      // In a real app, this would be an API call
      setTimeout(() => {
        setProducts(wildflowerProducts);
        setFilteredProducts(wildflowerProducts);
        setIsLoading(false);
      }, 800);
    };
    
    fetchProducts();
  }, []);

  // Filter products based on active filters
  useEffect(() => {
    let filtered = products;

    // Filter by colors
    if (activeFilters.colors.length > 0) {
      filtered = filtered.filter(product =>
        product.variants.some(variant =>
          activeFilters.colors.includes(variant.color)
        )
      );
    }

    // Filter by sizes
    if (activeFilters.sizes.length > 0) {
      filtered = filtered.filter(product =>
        activeFilters.sizes.some(size => product.sizes.includes(size))
      );
    }

    setFilteredProducts(filtered);
  }, [activeFilters, products]);

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setActiveFilters(prev => {
      const currentFilters = prev[filterType];
      const isSelected = currentFilters.includes(value);
      
      return {
        ...prev,
        [filterType]: isSelected
          ? currentFilters.filter(item => item !== value)
          : [...currentFilters, value]
      };
    });
  };

  // Clear all filters
  const clearFilters = () => {
    setActiveFilters({
      colors: [],
      sizes: [],
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-16 bg-[#F8F3E9]">
        {/* Collection Header */}
        <CollectionHeader 
          title="Wildflower Collection" 
          description="Feminine pieces inspired by nature's beauty, featuring delicate floral prints and sustainable fabrics for the conscious fashionista."
        />
        
        {/* Collection Info Section */}
        <CollectionInfo 
          productCount={filteredProducts.length}
          totalCount={products.length}
        />
        
        {/* Filter Bar */}
        <FilterBar
          activeFilters={activeFilters}
          onFilterChange={handleFilterChange}
          onClearFilters={clearFilters}
          colorOptions={[
            { name: "Sunshine Yellow", colorCode: "#F4D03F" },
            { name: "Sage Green", colorCode: "#A8C686" },
            { name: "Lavender", colorCode: "#C8A2C8" },
            { name: "Blush Pink", colorCode: "#F8BBD9" },
            { name: "Daisy White", colorCode: "#FFFACD" },
            { name: "Mint Green", colorCode: "#98FB98" },
            { name: "Poppy Red", colorCode: "#FF6B6B" },
            { name: "Coral Pink", colorCode: "#FF7F7F" },
            { name: "Dusty Rose", colorCode: "#D4A5A5" },
          ]}
          sizeOptions={["XS", "S", "M", "L", "XL", "XXL"]}
        />
        
        {/* Product Grid */}
        <ProductGrid 
          products={filteredProducts} 
          isLoading={isLoading} 
        />
      </div>
    </PageTransition>
  );
}
