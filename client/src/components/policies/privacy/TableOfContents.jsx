'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function TableOfContents() {
  const [isOpen, setIsOpen] = useState(false);
  
  const sections = [
    { id: '1', title: 'Introduction' },
    { id: '2', title: 'Information We Collect' },
    { id: '3', title: 'How We Use Your Information' },
    { id: '4', title: 'Security Measures' },
    { id: '5', title: 'Cookies & Tracking' },
    { id: '6', title: 'Your Rights' },
    { id: '7', title: 'Third-Party Disclosure' },
    { id: '8', title: 'Data Retention' },
    { id: '9', title: "Children's Privacy" },
    { id: '10', title: 'Changes to Policy' },
    { id: '11', title: 'Brand Authenticity' },
    { id: '12', title: 'Contact Us' },
  ];

  return (
    <div className="md:hidden mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
      >
        <span className="font-medium text-slate-700">Table of Contents</span>
        <svg 
          className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-2 bg-white border border-slate-100 rounded-lg overflow-hidden"
        >
          <ul className="divide-y divide-slate-100">
            {sections.map((section) => (
              <li key={section.id}>
                <a 
                  href={`#section-${section.id}`}
                  className="block p-3 hover:bg-slate-50 text-slate-600 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {section.id}. {section.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}