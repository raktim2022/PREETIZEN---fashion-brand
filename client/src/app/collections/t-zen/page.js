"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CollectionHeader from "@/components/collections/CollectionHeader";
// import NewDropBanner from "@/components/collections/NewDropBanner";
import FilterBar from "@/components/collections/FilterBar";
import ProductGrid from "@/components/collections/ProductGrid";
import CollectionInfo from "@/components/collections/CollectionInfo";
import PageTransition from "@/components/ui/PageTransition";

// Mock product data - Export this to use it in other files
export const tzenProducts = [
  {
    id: 1,
    name: "Cha Lover Bengali Tee",
    price: 1499,
    salePrice: 1199,
    description: "Express your love for tea with this fun Bengali slogan tee. Made from premium 240 GSM cotton fabric for maximum comfort.",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1606913419164-8bab57d0665f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    badges: ["Best Seller", "Limited Pieces"],
    variants: [
      { color: "Blue", colorCode: "#6E8FAA", inStock: true },
      { color: "Beige", colorCode: "#E8DACB", inStock: true },
      { color: "Black", colorCode: "#212121", inStock: false },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    reviewCount: 124
  },
  {
    id: 2,
    name: "Mosha Bujho Bengali Graphic Tee",
    price: 1399,
    salePrice: null,
    description: "A playful Bengali phrase that adds character to your casual wardrobe. Perfect for everyday wear with relaxed fit and breathable fabric.",
    images: [
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1508855926374-9e6e3c552512?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1563630423918-b58f07336ac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1516697073-419a6b20918c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    badges: ["New Arrival"],
    variants: [
      { color: "Lavender", colorCode: "#C8A2C8", inStock: true },
      { color: "Olive", colorCode: "#708238", inStock: true },
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviewCount: 58
  },
  {
    id: 3,
    name: "Bhalo Achi Oversized Tee",
    price: 1699,
    salePrice: 1499,
    description: "Relaxed fit tee with a positive Bengali message for everyday wear. Features drop shoulders and roomier fit for ultimate comfort.",
    images: [
      "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1622445272461-c6580cab8755?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1529720317453-c8da503f2051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    badges: ["Crowd Favorite"],
    variants: [
      { color: "Beige", colorCode: "#E8DACB", inStock: true },
      { color: "Black", colorCode: "#212121", inStock: true },
    ],
    sizes: ["M", "L", "XL", "XXL"],
    rating: 4.9,
    reviewCount: 203
  },
  {
    id: 4,
    name: "Abar Dekha Hobe Minimalist Tee",
    price: 1299,
    salePrice: 999,
    description: "Simple yet meaningful Bengali farewell phrase on a comfortable tee. Clean minimalist design that pairs with anything.",
    images: [
      "https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1604006852748-903fccbc4019?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1551799517-eb8f03cb5e6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1613852348851-df1739db8201?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    badges: ["Sale"],
    variants: [
      { color: "Blue", colorCode: "#6E8FAA", inStock: true },
      { color: "Olive", colorCode: "#708238", inStock: true },
    ],
    sizes: ["S", "M", "L"],
    rating: 4.5,
    reviewCount: 87
  },
  {
    id: 5,
    name: "Shob Kichu Bhalo Classic Fit Tee",
    price: 1599,
    salePrice: null,
    description: "A positive affirmation in Bengali script on a premium cotton tee. Classic fit with ribbed neckline for durability.",
    images: [
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1603251578711-3290ca1a0187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    badges: ["Limited Pieces"],
    variants: [
      { color: "Lavender", colorCode: "#C8A2C8", inStock: true },
      { color: "Black", colorCode: "#212121", inStock: true },
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviewCount: 62
  },
  {
    id: 6,
    name: "Ektu Sobur Slogan Tee",
    price: 1399,
    salePrice: 1299,
    description: "A gentle reminder in Bengali to have patience, on a soft cotton tee. Comfortable regular fit that suits all body types.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    badges: [],
    variants: [
      { color: "Blue", colorCode: "#6E8FAA", inStock: true },
      { color: "Beige", colorCode: "#E8DACB", inStock: true },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.4,
    reviewCount: 41
  },
  {
    id: 7,
    name: "Bhalobasha Embroidered Tee",
    price: 1899,
    salePrice: 1699,
    description: "Premium tee with delicate embroidery of the Bengali word for love. Each stitch is carefully crafted for a luxurious finish.",
    images: [
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1536243298747-ea8874136d64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    badges: ["Best Seller", "New Arrival"],
    variants: [
      { color: "Lavender", colorCode: "#C8A2C8", inStock: true },
      { color: "Olive", colorCode: "#708238", inStock: true },
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.9,
    reviewCount: 118
  },
  {
    id: 8,
    name: "Bondhu Bengali Friendship Tee",
    price: 1499,
    salePrice: null,
    description: "Celebrate friendship with this heartwarming Bengali slogan tee. Perfect gift for your best friends that shows your appreciation.",
    images: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    badges: ["Crowd Favorite"],
    variants: [
      { color: "Beige", colorCode: "#E8DACB", inStock: true },
      { color: "Black", colorCode: "#212121", inStock: true },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    reviewCount: 95
  },
  {
    id: 9,
    name: "Toder Problem Hoina Blue",
    price: 999,
    salePrice: 899,
    description: "A trendy Bengali slogan tee that makes a bold statement. Features a soft fabric blend that's perfect for casual outings.",
    images: [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1535530705774-695729778193?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    badges: ["Sale", "Best Seller"],
    variants: [
      { color: "Blue", colorCode: "#6E8FAA", inStock: true },
      { color: "Beige", colorCode: "#E8DACB", inStock: false },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    reviewCount: 156
  },
  {
    id: 10,
    name: "Ami Toh Parboina Minimalist Tee",
    price: 1299,
    salePrice: 1099,
    description: "Express your feelings with this relatable Bengali phrase tee. Simple design with a powerful message that resonates with many.",
    images: [
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596457941236-c0570c714ea5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617444514656-6d480e300f02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1525025500848-f00b7d362feb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    badges: ["Limited Pieces"],
    variants: [
      { color: "Black", colorCode: "#212121", inStock: true },
      { color: "Olive", colorCode: "#708238", inStock: true },
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5,
    reviewCount: 73
  }
];

export default function TZenCollection() {
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
        setProducts(tzenProducts);
        setFilteredProducts(tzenProducts);
        setIsLoading(false);
      }, 800);
    };
    
    fetchProducts();
  }, []);

  // Apply filters when they change
  useEffect(() => {
    if (products.length > 0) {
      let filtered = [...products];
      
      // Filter by color
      if (activeFilters.colors.length > 0) {
        filtered = filtered.filter(product => 
          product.variants.some(variant => 
            activeFilters.colors.includes(variant.color)
          )
        );
      }
      
      // Filter by size
      if (activeFilters.sizes.length > 0) {
        filtered = filtered.filter(product => 
          product.sizes.some(size => 
            activeFilters.sizes.includes(size)
          )
        );
      }
      
      setFilteredProducts(filtered);
    }
  }, [activeFilters, products]);

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev };
      
      if (newFilters[filterType].includes(value)) {
        // Remove filter if already applied
        newFilters[filterType] = newFilters[filterType].filter(item => item !== value);
      } else {
        // Add new filter
        newFilters[filterType] = [...newFilters[filterType], value];
      }
      
      return newFilters;
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
      <div className="min-h-screen pt-16  bg-[#F8F3E9]">
        {/* New Collection Drop Banner */}
        {/* <NewDropBanner /> */}
        
        {/* Collection Header */}
        <CollectionHeader 
          title="TeeZen Collection" 
          description="Graphic tees inspired by Bengali slogans, designed for comfort and self-expression."
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
            { name: "Blue", colorCode: "#6E8FAA" },
            { name: "Beige", colorCode: "#E8DACB" },
            { name: "Lavender", colorCode: "#C8A2C8" },
            { name: "Olive", colorCode: "#708238" },
            { name: "Black", colorCode: "#212121" },
          ]}
          sizeOptions={["S", "M", "L", "XL", "XXL"]}
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