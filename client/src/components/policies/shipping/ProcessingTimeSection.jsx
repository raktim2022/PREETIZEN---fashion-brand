import React from "react";
import { FiClock } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

export default function ProcessingTimeSection() {
  return (
    <div className="mb-10">
      <SectionHeading 
        icon={<FiClock />}
        title="Processing & Delivery Times"
      />
      
      <div className="bg-[#F8F3E9]/50 p-5 rounded-lg mb-6">
        <h3 className="font-medium text-[#6B4F3B] mb-2">Processing Time</h3>
        <p className="text-[#6B4F3B]/80 mb-2">
          Orders are dispatched within <span className="font-medium">0–7 days</span>, with most orders shipping within <span className="font-medium">3–5 business days</span> due to our handcrafted production process.
        </p>
        <div className="flex items-start mt-3">
          <span className="text-[#D46A6A] mr-2">•</span>
          <p className="text-sm text-[#6B4F3B]/70">
            Each piece is crafted with care by our artisans, which may occasionally lead to slight variations in dispatch time.
          </p>
        </div>
        <div className="flex items-start mt-2">
          <span className="text-[#D46A6A] mr-2">•</span>
          <p className="text-sm text-[#6B4F3B]/70">
            You'll receive an estimated dispatch date in your order confirmation email.
          </p>
        </div>
      </div>
      
      <div className="bg-[#F8F3E9]/50 p-5 rounded-lg">
        <h3 className="font-medium text-[#6B4F3B] mb-2">Delivery Time</h3>
        <p className="text-[#6B4F3B]/80 mb-2">
          Once your order is handed off to our courier partners, delivery typically takes <span className="font-medium">5–9 business days</span> across India, depending on your location.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <div className="bg-white p-3 rounded-md">
            <h4 className="text-sm font-medium text-[#6B4F3B] mb-1">Metro Cities</h4>
            <p className="text-sm text-[#6B4F3B]/70">5-6 business days</p>
          </div>
          <div className="bg-white p-3 rounded-md">
            <h4 className="text-sm font-medium text-[#6B4F3B] mb-1">Other Urban Areas</h4>
            <p className="text-sm text-[#6B4F3B]/70">6-7 business days</p>
          </div>
          <div className="bg-white p-3 rounded-md">
            <h4 className="text-sm font-medium text-[#6B4F3B] mb-1">Remote Areas</h4>
            <p className="text-sm text-[#6B4F3B]/70">7-9 business days</p>
          </div>
          <div className="bg-white p-3 rounded-md">
            <h4 className="text-sm font-medium text-[#6B4F3B] mb-1">Free Shipping</h4>
            <p className="text-sm text-[#6B4F3B]/70">On all orders ₹1,500+</p>
          </div>
        </div>
      </div>
      
      <div className="border-b border-dashed border-[#D7CFC7] mt-8 mb-2"></div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm">
          <span className="text-[#6B4F3B]/70">preetizen.com</span>
          <span className="ml-2 text-[#D46A6A] font-bold text-xs">+8</span>
        </div>
        <div className="flex items-center text-sm">
          <span className="text-[#6B4F3B]/70">preetizen.com</span>
          <span className="ml-2 text-[#D46A6A] font-bold text-xs">+8</span>
        </div>
        <div className="flex items-center text-sm">
          <span className="text-[#6B4F3B]/70">preetizen.com</span>
          <span className="ml-2 text-[#D46A6A] font-bold text-xs">+8</span>
        </div>
      </div>
    </div>
  );
}