// filepath: c:\Users\USER\Desktop\PREETIZEN\client\src\components\policies\terms\Signature.jsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Signature({ companyName, representative, designation }) {
  return (
    <motion.div 
      className="border-t border-slate-200 pt-8 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="mb-2">
        <svg className="w-6 h-6 text-[var(--heading)] mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </div>
      <p className="font-serif text-lg text-[var(--heading)]">{companyName}</p>
      <p className="text-sm text-slate-600 mt-1">{representative}, {designation}</p>
      <p className="text-xs text-slate-500 mt-6">
        © {new Date().getFullYear()} Preetizen Lifestyle. All rights reserved.
      </p>
    </motion.div>
  );
}