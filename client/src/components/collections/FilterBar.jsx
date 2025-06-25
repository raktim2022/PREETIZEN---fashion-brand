"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiFilter, FiX, FiChevronDown } from "react-icons/fi";

const FilterBar = ({
  activeFilters,
  onFilterChange,
  onClearFilters,
  colorOptions = [
    { name: "Blue", colorCode: "#6E8FAA" },
    { name: "Beige", colorCode: "#E8DACB" },
    { name: "Lavender", colorCode: "#C8A2C8" },
    { name: "Olive", colorCode: "#708238" },
    { name: "Black", colorCode: "#212121" },
  ],
  sizeOptions = ["S", "M", "L", "XL", "XXL"]
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [openSection, setOpenSection] = useState("none");
  
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  
  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };
  
  const hasActiveFilters = activeFilters.colors.length > 0 || activeFilters.sizes.length > 0;
  
  return (
    <div className="bg-white sticky top-0 z-20 border-b border-[#A7BFA3]/20">
      <div className="container mx-auto px-4">
        <div className="py-4">
          {/* Filter toggle for mobile */}
          <div className="md:hidden flex justify-between items-center">
            <button 
              onClick={toggleFilter}
              className="flex items-center space-x-2 text-sm font-medium text-[#333333]"
            >
              <FiFilter />
              <span>Filter & Sort</span>
              {hasActiveFilters && (
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#D46A6A] text-white text-xs">
                  {activeFilters.colors.length + activeFilters.sizes.length}
                </span>
              )}
            </button>
            
            {hasActiveFilters && (
              <button 
                onClick={onClearFilters}
                className="text-xs text-[#D46A6A] underline"
              >
                Clear all filters
              </button>
            )}
          </div>
          
          {/* Desktop filters */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center space-x-8">
              {/* Color filter */}
              <div className="relative">
                <button 
                  onClick={() => toggleSection("color")}
                  className="flex items-center space-x-2 text-sm font-medium text-[#333333]"
                >
                  <span>Color</span>
                  <FiChevronDown 
                    className={`transition-transform ${openSection === "color" ? "rotate-180" : ""}`} 
                  />
                  {activeFilters.colors.length > 0 && (
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#D46A6A] text-white text-xs ml-1">
                      {activeFilters.colors.length}
                    </span>
                  )}
                </button>
                
                <AnimatePresence>
                  {openSection === "color" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg p-4 min-w-[200px] z-30"
                    >
                      <div className="flex flex-wrap gap-2">
                        {colorOptions.map((color) => (
                          <button
                            key={color.name}
                            onClick={() => onFilterChange("colors", color.name)}
                            className={`flex items-center space-x-2 px-3 py-1.5 rounded-full transition-colors ${
                              activeFilters.colors.includes(color.name) 
                                ? "bg-[#A7BFA3]/20 text-[#6B4F3B]"
                                : "hover:bg-[#A7BFA3]/10"
                            }`}
                          >
                            <span 
                              className="w-4 h-4 rounded-full border border-[#A7BFA3]/30"
                              style={{ backgroundColor: color.colorCode }}
                            ></span>
                            <span className="text-sm">{color.name}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Size filter */}
              <div className="relative">
                <button 
                  onClick={() => toggleSection("size")}
                  className="flex items-center space-x-2 text-sm font-medium text-[#333333]"
                >
                  <span>Size</span>
                  <FiChevronDown 
                    className={`transition-transform ${openSection === "size" ? "rotate-180" : ""}`} 
                  />
                  {activeFilters.sizes.length > 0 && (
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#D46A6A] text-white text-xs ml-1">
                      {activeFilters.sizes.length}
                    </span>
                  )}
                </button>
                
                <AnimatePresence>
                  {openSection === "size" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg p-4 min-w-[200px] z-30"
                    >
                      <div className="flex flex-wrap gap-2">
                        {sizeOptions.map((size) => (
                          <button
                            key={size}
                            onClick={() => onFilterChange("sizes", size)}
                            className={`px-3 py-1.5 rounded-full transition-colors ${
                              activeFilters.sizes.includes(size) 
                                ? "bg-[#D46A6A] text-white"
                                : "border border-[#A7BFA3]/30 hover:bg-[#A7BFA3]/10"
                            }`}
                          >
                            <span className="text-sm">{size}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Price filter can be added here */}
            </div>
            
            {/* Clear filters */}
            {hasActiveFilters && (
              <button 
                onClick={onClearFilters}
                className="text-sm text-[#D46A6A] underline"
              >
                Clear all filters
              </button>
            )}
          </div>
          
          {/* Mobile filter panel */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden mt-4"
              >
                <div className="pt-4 border-t border-[#A7BFA3]/20">
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-[#333333] mb-3">Color</h3>
                    <div className="flex flex-wrap gap-2">
                      {colorOptions.map((color) => (
                        <button
                          key={color.name}
                          onClick={() => onFilterChange("colors", color.name)}
                          className={`flex items-center space-x-2 px-3 py-1.5 rounded-full transition-colors ${
                            activeFilters.colors.includes(color.name) 
                              ? "bg-[#A7BFA3]/20 text-[#6B4F3B]"
                              : "hover:bg-[#A7BFA3]/10"
                          }`}
                        >
                          <span 
                            className="w-4 h-4 rounded-full border border-[#A7BFA3]/30"
                            style={{ backgroundColor: color.colorCode }}
                          ></span>
                          <span className="text-sm">{color.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-[#333333] mb-3">Size</h3>
                    <div className="flex flex-wrap gap-2">
                      {sizeOptions.map((size) => (
                        <button
                          key={size}
                          onClick={() => onFilterChange("sizes", size)}
                          className={`px-3 py-1.5 rounded-full transition-colors ${
                            activeFilters.sizes.includes(size) 
                              ? "bg-[#D46A6A] text-white"
                              : "border border-[#A7BFA3]/30 hover:bg-[#A7BFA3]/10"
                          }`}
                        >
                          <span className="text-sm">{size}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;