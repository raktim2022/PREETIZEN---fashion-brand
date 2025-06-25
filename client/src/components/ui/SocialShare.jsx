"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiShare2, FiCopy, FiX } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaPinterestP, FaInstagram } from "react-icons/fa";

const SocialShare = ({ url, title, image }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const shareLinks = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={16} />,
      color: "#25D366",
      url: `https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`
    },
    {
      name: "Facebook",
      icon: <FaFacebookF size={16} />,
      color: "#1877F2",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={16} />,
      color: "#E4405F",
      // Note: Instagram doesn't have a direct share link, this is for visual consistency
      url: `https://instagram.com`
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={16} />,
      color: "#1DA1F2",
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
    },
    {
      name: "Pinterest",
      icon: <FaPinterestP size={16} />,
      color: "#BD081C",
      url: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(image)}&description=${encodeURIComponent(title)}`
    }
  ];
  
  const toggleShare = () => {
    setIsOpen(!isOpen);
    setCopied(false);
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="relative">
      <button 
        onClick={toggleShare}
        className="flex items-center gap-1 text-sm text-[#333333] hover:text-[#D46A6A] transition-colors"
        aria-label="Share product"
      >
        <FiShare2 size={16} />
        Share
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 5 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-8 bg-white rounded-md shadow-lg p-3 z-20 min-w-[240px]"
          >
            <div className="flex justify-between items-center mb-2 pb-2 border-b border-[#A7BFA3]/20">
              <span className="text-sm font-medium text-[#333333]">Share this product</span>
              <button 
                onClick={toggleShare}
                className="text-[#333333]/60 hover:text-[#333333] transition-colors"
                aria-label="Close share menu"
              >
                <FiX size={16} />
              </button>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {shareLinks.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                  style={{
                    backgroundColor: platform.color,
                    color: "white"
                  }}
                  aria-label={`Share on ${platform.name}`}
                >
                  {platform.icon}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={url}
                readOnly
                className="flex-1 text-xs bg-[#F8F3E9] p-2 rounded border border-[#A7BFA3]/30 focus:outline-none"
              />
              <button
                onClick={copyToClipboard}
                className="p-2 rounded bg-[#A7BFA3]/10 hover:bg-[#A7BFA3]/20 transition-colors"
                aria-label="Copy link to clipboard"
              >
                {copied ? <FiCheck size={16} className="text-[#A7BFA3]" /> : <FiCopy size={16} />}
              </button>
            </div>
            
            {copied && (
              <p className="text-xs text-[#A7BFA3] mt-1">Link copied to clipboard!</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialShare;