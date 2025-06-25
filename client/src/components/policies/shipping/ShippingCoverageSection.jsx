import React from "react";
import { FiGlobe } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

export default function ShippingCoverageSection() {
  return (
    <div className="mb-10">
      <SectionHeading 
        icon={<FiGlobe />}
        title="Shipping Coverage"
      />
      
      <p className="text-[#6B4F3B]/80 mb-4">
        We offer nationwide delivery across India through our trusted courier partners. Our sustainable fashion reaches every corner of the country.
      </p>
      
      <div className="bg-[#F8F3E9]/50 p-5 rounded-lg">
        <h3 className="font-medium text-[#6B4F3B] mb-2">Coverage Details</h3>
        
        <div className="space-y-3 mt-3">
          <div className="bg-white p-3 rounded-md flex justify-between items-center">
            <h4 className="text-sm font-medium text-[#6B4F3B]">All India Coverage</h4>
            <span className="text-[#A7BFA3] text-xs px-2 py-1 bg-[#A7BFA3]/10 rounded-full">Available</span>
          </div>
          
          <div className="bg-white p-3 rounded-md flex justify-between items-center">
            <h4 className="text-sm font-medium text-[#6B4F3B]">International Shipping</h4>
            <span className="text-[#D46A6A] text-xs px-2 py-1 bg-[#D46A6A]/10 rounded-full">Coming Soon</span>
          </div>
        </div>
        
        <div className="mt-4 text-sm text-[#6B4F3B]/70">
          <p className="italic">
            Note: If we expand to international shipping in the future, additional duties, taxes, or customs fees may apply and would be the responsibility of the customer.
          </p>
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