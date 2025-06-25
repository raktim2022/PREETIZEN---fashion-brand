"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const SmallBatchSection = () => {
  return (
    <section className="py-16 bg-[#F8F3E9]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#6B4F3B] mb-4">LIMITED, NOT DISPOSABLE</h2>
          <div className="w-20 h-1 bg-[#D46A6A] mx-auto mb-8"></div>
          
          <div className="space-y-6 text-[#333333]/80">
            <p className="text-lg">
              We don't mass produce.
            </p>
            
            <p>
              We drop small seasonal collections that are as fleeting and special as the stories that inspire them.
            </p>

            <p>
              Our collection, Wildflower, is imagined for India's long summers — soft silhouettes, minimal embroidery, and movement-friendly fabrics.
            </p>

            <div className="mt-10">
              <Link 
                href="/collections/wildflower" 
                className="inline-block px-6 py-3 bg-[#D46A6A] text-white rounded-md hover:bg-[#C15A5A] transition-colors"
              >
                Explore Wildflower Collection
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmallBatchSection;