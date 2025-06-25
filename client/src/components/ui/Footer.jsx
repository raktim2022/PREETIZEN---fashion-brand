"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiInstagram, 
  FiFacebook, 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiArrowRight,
  FiCheck,
  FiTag,
  FiTruck
} from "react-icons/fi";
import { RiPinterestLine, RiWhatsappLine } from "react-icons/ri";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";

const quickLinks = [
  { name: "Our Story", href: "/about" },
  { name: "TeeZen Collection", href: "/collections/t-zen" },
  { name: "Wildflower Collection", href: "/collections/wildflower" },
  { name: "Be Our Model", href: "/be-our-model" },
  { name: "Reviews", href: "/reviews" },
  { name: "Join Us", href: "/join-us" },
  { name: "Contact", href: "/contact" },
];

const policies = [
  { name: "Shipping & Delivery Policy", href: "/policies/shipping" },
  { name: "Return & Refund", href: "/policies/returns" },
  { name: "Privacy Policy", href: "/policies/privacy" },
  { name: "Terms of Service", href: "/policies/terms" },
];

const socialLinks = [
  { name: "Instagram", icon: <FiInstagram size={20} />, href: "https://instagram.com/preetizen" },
  { name: "Facebook", icon: <FiFacebook size={20} />, href: "https://facebook.com/preetizen" },
  { name: "Pinterest", icon: <RiPinterestLine size={20} />, href: "https://pinterest.com/preetizen" },
  { name: "WhatsApp", icon: <RiWhatsappLine size={20} />, href: "https://wa.me/919876543210" },
];

const paymentMethods = [
  { 
    name: "Visa", 
    icon: <FaCcVisa size={32} className="text-[#1434CB]" /> 
  },
  { 
    name: "Mastercard", 
    icon: <FaCcMastercard size={32} className="text-[#EB001B]" /> 
  },
  { 
    name: "American Express", 
    icon: <FaCcAmex size={32} className="text-[#006FCF]" /> 
  },
  { 
    name: "UPI", 
    icon: <SiPaytm size={28} className="text-[#00BAF2]" /> 
  },
  { 
    name: "PayPal", 
    icon: <FaCcPaypal size={32} className="text-[#003087]" /> 
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add actual subscription logic here
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Reset subscription status after 5 seconds
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };
  
  return (
    <footer className="bg-[#FDF8F2] pt-16 border-t border-[#A7BFA3]/20">
      {/* Promo Banner */}
      <div className="bg-[#A7BFA3]/10 py-4 mb-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
            <div className="flex items-center">
              <FiTag className="text-[#D46A6A] mr-2" size={20} />
              <p className="text-[#6B4F3B] font-medium">
                <span className="font-serif">Students get 15% off</span> 
                <span className="ml-1 text-sm">with valid ID</span>
              </p>
            </div>
            
            <div className="h-6 border-l border-[#A7BFA3]/30 hidden md:block" />
            
            <div className="flex items-center">
              <FiTruck className="text-[#D46A6A] mr-2" size={20} />
              <p className="text-[#6B4F3B] font-medium">
                <span className="font-serif">Free shipping</span> 
                <span className="ml-1 text-sm">on orders above ₹1499</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand and about */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <h3 className="text-2xl font-serif tracking-wider text-[#6B4F3B]">PREETIZEN</h3>
            </Link>
            <p className="text-md text-[#6B4F3B]/80 max-w-xs">
              Sustainable fashion crafted with love by local artisans.
              Ethically sourced materials that respect both people and planet.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#A7BFA3] hover:text-[#D46A6A] transition-colors"
                  aria-label={social.name}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
            
            {/* Newsletter signup */}
            <div className="mt-6 pt-6 border-t border-[#A7BFA3]/10">
              <h4 className="text-md uppercase tracking-wider text-[#6B4F3B] font-bold mb-3">
                Join our slow fashion family
              </h4>
              <p className="text-sm text-[#6B4F3B]/70 mb-3">
                Sign up for exclusive drops, sustainable fashion stories, and early access to new collections.
              </p>
              
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-2.5 pr-12 bg-white border border-[#A7BFA3]/30 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A7BFA3] text-[#6B4F3B]"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubscribed}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 text-[#6B4F3B] hover:text-[#D46A6A] focus:outline-none transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  {isSubscribed ? (
                    <FiCheck className="text-[#A7BFA3]" size={20} />
                  ) : (
                    <FiArrowRight size={20} />
                  )}
                </button>
              </form>
              
              {isSubscribed && (
                <motion.p 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-[#A7BFA3] mt-2"
                >
                  Thank you for subscribing! 💌
                </motion.p>
              )}
            </div>
          </div>
          
          {/* Quick links */}
          <div className="lg:col-span-3">
            <h4 className="text-md uppercase tracking-wider text-[#6B4F3B] font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-md text-[#6B4F3B]/80 hover:text-[#D46A6A] transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Policies section */}
          <div className="lg:col-span-2">
            <h4 className="text-md uppercase tracking-wider text-[#6B4F3B] font-bold mb-4">Policies</h4>
            <ul className="space-y-2.5">
              {policies.map((policy) => (
                <li key={policy.name}>
                  <Link 
                    href={policy.href}
                    className="text-md text-[#6B4F3B]/80 hover:text-[#D46A6A] transition-colors inline-block"
                  >
                    {policy.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact information */}
          <div className="lg:col-span-3">
            <h4 className="text-md uppercase tracking-wider text-[#6B4F3B] font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMail className="mr-3 mt-0.5 text-[#A7BFA3]" />
                <a 
                  href="mailto:hello@preetizen.com"
                  className="text-md text-[#6B4F3B]/80 hover:text-[#D46A6A] transition-colors"
                >
                  hello@preetizen.com
                </a>
              </li>
              <li className="flex items-start">
                <FiPhone className="mr-3 mt-0.5 text-[#A7BFA3]" />
                <a 
                  href="tel:+919876543210"
                  className="text-md text-[#6B4F3B]/80 hover:text-[#D46A6A] transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start">
                <FiMapPin className="mr-3 mt-0.5 text-[#A7BFA3]" />
                <address className="text-md text-[#6B4F3B]/80 not-italic">
                  Studio 42, Jubilee Hills<br />
                  Hyderabad, India 500033
                </address>
              </li>
            </ul>
            
            {/* Business Hours */}
            <h4 className="text-md uppercase tracking-wider text-[#6B4F3B] font-bold mb-4 mt-8">Business Hours</h4>
            <ul className="space-y-1">
              <li className="text-md text-[#6B4F3B]/80">
                <span className="font-medium">Mon - Fri:</span> 10:00 - 19:00
              </li>
              <li className="text-md text-[#6B4F3B]/80">
                <span className="font-medium">Saturday:</span> 11:00 - 17:00
              </li>
              <li className="text-md text-[#6B4F3B]/80">
                <span className="font-medium">Sunday:</span> Closed
              </li>
            </ul>
          </div>
        </div>
        
        {/* Tagline and brand promise */}
        <div className="mt-12 pt-6 border-t border-[#A7BFA3]/10 text-center">
          <p className="text-sm italic text-[#6B4F3B]/70">
            Handcrafted in Kolkata with Love & Care
          </p>
        </div>
        
        {/* Payment methods */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {paymentMethods.map((method) => (
            <div 
              key={method.name} 
              className="flex items-center" 
              title={`${method.name} accepted`}
            >
              <span className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                {method.icon}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-[#A7BFA3]/10 mt-10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs text-[#6B4F3B]/60">
              &copy; {currentYear} Preetizen. All rights reserved.
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-[#6B4F3B]/60">
                Crafted with ethical practices and sustainable materials
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;