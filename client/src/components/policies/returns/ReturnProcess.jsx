import React from 'react';
import { motion, useInView } from 'framer-motion';

export default function ReturnProcess({ steps }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-9 top-0 bottom-0 w-0.5 bg-slate-200 z-0"></div>
      <div className="space-y-8 relative z-10">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            className="flex items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="bg-white z-10">
              <div className="w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-semibold shadow-md">
                {index + 1}
              </div>
            </div>
            <div className="ml-5">
              <h4 className="text-lg font-medium text-[var(--heading)] mb-2">{step.title}</h4>
              <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100">
                <p className="text-slate-600 mb-3">{step.description}</p>
                {step.note && (
                  <div className="bg-slate-50 p-3 rounded-md text-sm text-slate-600">
                    <strong>Note:</strong> {step.note}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}