import React, { useState } from "react";
import { FiHelpCircle, FiChevronDown, FiChevronUp } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

export default function ShippingFAQ() {
  const [openFAQ, setOpenFAQ] = useState(0);
  
  const faqs = [
    {
      question: "Can I change my delivery address after placing an order?",
      answer: "Yes, you can change your delivery address within 24 hours of placing your order by contacting our customer support team. After this period, we may not be able to accommodate address changes as the order may already be in process.",
    },
    {
      question: "What if the courier doesn't deliver on time?",
      answer: "While we partner with reliable courier services, occasional delays can occur due to factors beyond our control. If your delivery is significantly delayed beyond the estimated time, please contact our support team with your tracking details and we'll follow up with the courier service.",
    },
    {
      question: "Do you offer express shipping?",
      answer: "Currently, we don't offer express shipping options as each piece is handcrafted to order. However, we're working on introducing expedited shipping for select products in the near future.",
    },
    {
      question: "What happens if my package is lost during transit?",
      answer: "In the rare event that your package is lost during transit, please contact our customer support team with your order details. We'll initiate an investigation with the courier partner and either provide a replacement or a full refund based on the outcome.",
    },
    {
      question: "Can I track my order status in real-time?",
      answer: "Yes, once your order is dispatched, you'll receive a tracking ID via email and SMS that allows you to monitor your package's journey in real-time through our courier partner's website or app.",
    }
  ];
  
  return (
    <div>
      <SectionHeading 
        icon={<FiHelpCircle />}
        title="Delivery FAQs"
      />
      
      <div className="space-y-3 mb-6">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-[#E9E1D6] rounded-lg overflow-hidden bg-white transition-all duration-200"
          >
            <button
              className="w-full px-5 py-4 flex justify-between items-center text-left focus:outline-none"
              onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
            >
              <h3 className="font-medium text-[#6B4F3B]">{faq.question}</h3>
              <span className="text-[#D46A6A] ml-2">
                {openFAQ === index ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </button>
            <div 
              className={`px-5 transition-all duration-200 overflow-hidden ${
                openFAQ === index ? "pb-4 max-h-40" : "max-h-0"
              }`}
            >
              <p className="text-[#6B4F3B]/80 text-sm">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-[#F8F3E9]/50 p-5 rounded-lg">
        <h3 className="font-medium text-[#6B4F3B] mb-2">Still have questions?</h3>
        <p className="text-[#6B4F3B]/80 text-sm mb-3">
          Our customer care team is always ready to help with any shipping or delivery concerns.
        </p>
        <a 
          href="mailto:support@preetizen.com" 
          className="inline-block px-4 py-2 bg-[#A7BFA3] text-white text-sm rounded-md hover:bg-[#96AB8F] transition-colors"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
}