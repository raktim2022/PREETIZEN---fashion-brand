"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiSearch, FiUser, FiMenu, FiX, FiLogIn } from "react-icons/fi";
import CartIcon from "./cart/CartIcon";
import CartPanel from "./cart/CartPanel";
import AnnouncementBanner from "./AnnouncementBanner";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  // Simulated auth state - replace with your actual auth logic
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const searchInputRef = useRef(null);
  const searchPanelRef = useRef(null);

  // Sample cart item count - replace with your actual cart state
  const cartItemCount = 2;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Show banner only when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setShowAnnouncement(true);
      } else {
        setShowAnnouncement(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close search panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSearchOpen &&
        searchPanelRef.current &&
        !searchPanelRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchOpen]);

  // Focus search input when panel opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current.focus();
      }, 100);
    }
  }, [isSearchOpen]);

  // Updated navigation links
  const navLinks = [
    { name: "OUR STORY", href: "/our-story" },
    { name: "T-ZEN COLLECTION", href: "/collections/t-zen" },
    { name: "WILDFLOWER COLLECTION", href: "/collections/wildflower" },
    { name: "BE OUR MODEL", href: "/be-our-model" },
    { name: "REVIEWS", href: "/reviews" },
    { name: "JOIN US", href: "/join-us" },
  ];

  return (
    <div className="fixed w-full z-50">
      <header
        className={`w-full transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
            : "bg-zinc-600/50 py-5"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/"
                className={`text-2xl font-serif tracking-wider ${
                  isScrolled ? "text-[#6B4F3B]" : "text-white"
                }`}
              >
                PREETIZEN
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex space-x-6">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="relative group"
                  >
                    <span
                      className={`text-xs font-medium tracking-wider transition-colors ${
                        isScrolled ? "text-[#333333]" : "text-white"
                      } hover:text-[#D46A6A]`}
                    >
                      {link.name}
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D46A6A] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Icons */}
            <div className="flex items-center space-x-5">
              <motion.div
                className="hidden md:flex items-center space-x-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {/* Search icon - uncomment if needed */}
                {/* <motion.button
                  className={`${
                    isScrolled ? "text-[#333333]" : "text-white"
                  } transition-transform hover:scale-110`}
                  aria-label="Search"
                  whileHover={{ y: -2 }}
                  onClick={() => setIsSearchOpen(true)}
                >
                  <FiSearch size={20} />
                </motion.button> */}
                
                {/* Conditional rendering for account/login */}
                {isLoggedIn ? (
                  <motion.button
                    className={`${
                      isScrolled ? "text-[#333333]" : "text-white"
                    } transition-transform hover:scale-110`}
                    aria-label="Account"
                    whileHover={{ y: -2 }}
                  >
                    <FiUser size={20} />
                  </motion.button>
                ) : (
                  <motion.button
                    className={`${
                      isScrolled ? "text-[#333333]" : "text-white"
                    } transition-transform hover:scale-110 flex items-center`}
                    aria-label="Login"
                    whileHover={{ y: -2 }}
                  >
                    <Link href="/auth" className="flex items-center">
                      <FiLogIn size={18} className="mr-1" />
                      <span className="text-xs font-medium">LOGIN</span>
                    </Link>
                  </motion.button>
                )}
                
                {/* Cart Icon Component */}
                <CartIcon 
                  isScrolled={isScrolled}
                  itemCount={cartItemCount}
                  onClick={() => setIsCartOpen(true)}
                />
              </motion.div>

              {/* Mobile Icons */}
              <div className="flex md:hidden items-center space-x-4">
                <button
                  className={`${isScrolled ? "text-[#333333]" : "text-white"}`}
                  aria-label="Search"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <FiSearch size={20} />
                </button>
                {/* Mobile Cart Icon */}
                <CartIcon 
                  isScrolled={isScrolled}
                  itemCount={cartItemCount}
                  onClick={() => setIsCartOpen(true)}
                />
              </div>

              {/* Mobile menu button */}
              <motion.button
                className={`md:hidden ${
                  isScrolled ? "text-[#333333]" : "text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                whileTap={{ scale: 0.9 }}
              >
                {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </motion.button>
            </div>
          </nav>
        </div>
      </header>

      {/* Announcement Banner */}
      <AnnouncementBanner isVisible={showAnnouncement} />

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-[#A7BFA3]/20 shadow-lg"
          >
            <div className="container mx-auto px-4 py-6">
              <motion.ul
                className="space-y-6"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                  >
                    <Link
                      href={link.href}
                      className="block text-lg font-medium text-[#333333] hover:text-[#D46A6A] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
                {!isLoggedIn ? (
                  <motion.li
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                  >
                    <Link
                      href="/auth"
                      className="flex items-center text-lg font-medium text-[#333333] hover:text-[#D46A6A] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <FiLogIn className="mr-2" size={18} />
                      Login
                    </Link>
                  </motion.li>
                ) : (
                  <motion.li
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                  >
                    <Link
                      href="/account"
                      className="flex items-center text-lg font-medium text-[#333333] hover:text-[#D46A6A] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <FiUser className="mr-2" size={18} />
                      Account
                    </Link>
                  </motion.li>
                )}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Panel */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            ref={searchPanelRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-[#A7BFA3]/10"
          >
            <div className="container mx-auto px-4 py-8">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg md:text-xl font-serif text-[#6B4F3B]">Search our store</h3>
                  <motion.button
                    onClick={() => setIsSearchOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-[#333333]"
                  >
                    <FiX size={20} />
                  </motion.button>
                </div>
                
                <div className="relative">
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search for products, collections and more..."
                    className="w-full border-b-2 border-[#A7BFA3]/30 py-3 pl-3 pr-10 text-[#333333] focus:outline-none focus:border-[#D46A6A] transition-colors bg-transparent"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#A7BFA3] hover:text-[#D46A6A]">
                    <FiSearch size={20} />
                  </button>
                </div>
                
                <div className="mt-6">
                  <p className="text-sm text-[#333333]/60">Popular searches:</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Dresses", "Organic Cotton", "New Arrivals", "Sustainable", "Hand-dyed"].map(term => (
                      <button 
                        key={term}
                        className="px-3 py-1 bg-[#F8F3E9] text-[#6B4F3B] text-sm rounded-full hover:bg-[#A7BFA3]/20 transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Cart Panel Component */}
      <CartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Navbar;