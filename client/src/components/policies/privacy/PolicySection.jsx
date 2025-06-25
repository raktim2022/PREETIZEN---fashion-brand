'use client'
import React from 'react';
import { useInView } from 'framer-motion';

export default function PolicySection({ title, number, children, className = '' }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <section 
      id={`section-${number}`}
      ref={ref}
      className={`mb-12 ${className} ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } transition-all duration-700 ease-out`}
    >
      <h2 className="text-2xl font-semibold mb-5 flex items-center text-slate-800 group">
        <span className="bg-slate-100 text-slate-700 rounded-full h-8 w-8 flex items-center justify-center mr-3 text-lg group-hover:bg-[#D46A6A] group-hover:text-white transition-colors">
          {number}
        </span>
        {title}
        <a href={`#section-${number}`} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
          </svg>
        </a>
      </h2>
      <div className="pl-11 text-slate-600 space-y-4">
        {children}
      </div>
    </section>
  );
}