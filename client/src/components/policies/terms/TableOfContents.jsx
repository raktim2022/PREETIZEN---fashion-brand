'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TableOfContents() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  
  const sections = [
    { id: '1', title: 'Basic Agreement & Scope' },
    { id: '2', title: 'Product & Purchase Terms' },
    { id: '3', title: 'Pricing & Availability' },
    { id: '4', title: 'Account Responsibility' },
    { id: '5', title: 'Intellectual Property' },
    { id: '6', title: 'Legal Entity & Accountability' },
    { id: '7', title: 'Limitation of Liability' },
    { id: '8', title: 'Governing Law' },
    { id: '9', title: 'Changes to Terms' },
    { id: '10', title: 'Contact Information' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showButton && (
        <motion.div 
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 bg-[var(--primary)]/20 text-white rounded-full shadow-lg flex items-center justify-center"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            )}
          </button>
          
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                className="absolute bottom-16 right-0 w-64 bg-white rounded-lg shadow-xl border border-slate-100"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 border-b border-slate-100">
                  <h3 className="font-medium text-slate-800">Quick Navigation</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  <ul className="py-2">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <a 
                          href={`#section-${section.id}`}
                          className="block px-4 py-2 hover:bg-slate-50 text-sm text-slate-600"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="font-medium text-[var(--primary)] mr-2">{section.id}.</span> 
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}