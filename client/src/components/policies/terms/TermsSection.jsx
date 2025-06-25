'use client';
import React from 'react';
import { useInView } from 'framer-motion';

export default function TermsSection({ number, title, children }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <section 
      id={`section-${number}`}
      ref={ref}
      className={`mb-10 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } transition-all duration-700 ease-out`}
    >
      <h2 className="text-xl font-medium mb-4 flex items-start text-[var(--heading)]">
        <span className="bg-[var(--primary)]/20 relative bg-opacity-10 text-[var(--primary)] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-semibold flex-shrink-0">
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            {number}
        </div>
        </span>
        <span className="pt-1">{title}</span>
      </h2>
      <div className="pl-0 md:pl-11 text-slate-700 space-y-2">
        {children}
      </div>
    </section>
  );
}