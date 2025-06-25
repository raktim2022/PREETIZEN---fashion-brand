import React from 'react';
import { motion } from 'framer-motion';

export default function ContactBanner({ email }) {
  return (
    <section className="bg-[#FFFBF7] py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-serif text-[var(--heading)] mb-4">
            Need Help with Your Return?
          </h2>
          <p className="text-slate-600 mb-6">
            Our customer care team is ready to assist you with any questions or concerns about our return policy.
          </p>
          <div className="inline-block bg-white px-6 py-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 text-[var(--primary)] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a 
                href={`mailto:${email}`} 
                className="text-lg font-medium text-[var(--primary)] hover:underline"
              >
                {email}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}