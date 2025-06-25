import React from 'react';
import { motion } from 'framer-motion';

export default function EligibilityCard({ title, items, type }) {
  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 }
  };

  const bgColor = type === 'eligible' 
    ? 'bg-[var(--accent)] bg-opacity-10' 
    : 'bg-[var(--primary)] bg-opacity-10';
  
  const iconColor = type === 'eligible' 
    ? 'text-[var(--accent)]' 
    : 'text-[var(--primary)]';

  const icon = type === 'eligible' 
    ? (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ) 
    : (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    );

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 overflow-hidden">
      <div className={`p-4 ${bgColor}`}>
        <h3 className="font-medium text-lg text-slate-800">{title}</h3>
      </div>
      <motion.ul 
        className="p-6 space-y-3"
        variants={listVariants}
        initial="hidden"
        animate="show"
      >
        {items.map((item, index) => (
          <motion.li 
            key={index} 
            className="flex items-start"
            variants={itemVariants}
          >
            <div className={`w-6 h-6 rounded-full ${bgColor} flex items-center justify-center flex-shrink-0 mt-0.5 mr-3 ${iconColor}`}>
              {icon}
            </div>
            <span className="text-slate-600">{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}