import React from 'react';
import { motion } from 'framer-motion';

export default function PolicyTimeline() {
  const timelineItems = [
    {
      day: "Day 1",
      event: "Product Delivered",
      description: "Your package is delivered to your doorstep."
    },
    {
      day: "Day 1-7",
      event: "Return Request Window",
      description: "You have 7 days from delivery to request a return by emailing care@preetizen.com."
    },
    {
      day: "Day 2-5",
      event: "Request Approval",
      description: "Our team reviews your request and responds within 24-48 hours."
    },
    {
      day: "After Approval",
      event: "Return Shipping",
      description: "Ship the item back and keep your receipt for reimbursement."
    },
    {
      day: "After Receipt",
      event: "Quality Check",
      description: "We inspect the returned item to ensure it meets our return criteria."
    },
    {
      day: "After Inspection",
      event: "Refund Processing",
      description: "Your refund is processed or store credit is issued."
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
      <div className="space-y-8">
        {timelineItems.map((item, index) => (
          <motion.div 
            key={index}
            className="flex items-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="mr-4 w-24 flex-shrink-0">
              <div className="bg-[var(--accent)]/30 bg-opacity-10 px-2 py-1 rounded-full text-center">
                <span className="text-sm font-medium text-[var(--text)]">{item.day}</span>
              </div>
            </div>
            <div className="flex-grow">
              <h4 className="font-medium text-[var(--heading)]">{item.event}</h4>
              <p className="text-slate-600 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}