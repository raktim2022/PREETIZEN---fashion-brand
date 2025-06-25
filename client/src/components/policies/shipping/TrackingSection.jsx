import React from "react";
import { FiSearch } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

export default function TrackingSection() {
  return (
    <div className="mb-10">
      <SectionHeading 
        icon={<FiSearch />}
        title="Tracking & Confirmation"
      />
      
      <div className="bg-[#F8F3E9]/50 p-5 rounded-lg">
        <p className="text-[#6B4F3B]/80 mb-3">
          You'll receive an email and SMS with tracking details when your order is shipped. Here's how to stay updated:
        </p>
        
        <div className="space-y-3">
          <div className="bg-white p-3 rounded-md">
            <h4 className="text-sm font-medium text-[#6B4F3B] mb-1">Email Confirmation</h4>
            <p className="text-sm text-[#6B4F3B]/70">
              A detailed email with your tracking number and courier information
            </p>
          </div>
          
          <div className="bg-white p-3 rounded-md">
            <h4 className="text-sm font-medium text-[#6B4F3B] mb-1">SMS Updates</h4>
            <p className="text-sm text-[#6B4F3B]/70">
              Quick text message with tracking link for on-the-go monitoring
            </p>
          </div>
          
          <div className="bg-white p-3 rounded-md">
            <h4 className="text-sm font-medium text-[#6B4F3B] mb-1">Order History</h4>
            <p className="text-sm text-[#6B4F3B]/70">
              Track directly from your Preetizen account under "Order History"
            </p>
          </div>
        </div>
      </div>
      
      <div className="border-b border-dashed border-[#D7CFC7] mt-8 mb-2"></div>
      
      <div className="flex items-center text-sm">
        <span className="text-[#6B4F3B]/70">preetizen.com</span>
      </div>
    </div>
  );
}