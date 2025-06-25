import React from "react";
import { FiHeadphones } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

export default function SupportSection() {
  return (
    <div className="mb-10">
      <SectionHeading 
        icon={<FiHeadphones />}
        title="Support & Contact"
      />
      
      <p className="text-[#6B4F3B]/80 mb-4">
        For issues or urgent inquiries related to your order delivery, our team is ready to help.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#F8F3E9]/50 p-5 rounded-lg">
          <h3 className="font-medium text-[#6B4F3B] mb-3">Phone Support</h3>
          <div className="flex items-center bg-white p-3 rounded-md">
            <div className="w-10 h-10 bg-[#D46A6A]/10 rounded-full flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D46A6A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-[#6B4F3B] font-medium">+91 62956 16967</p>
              <p className="text-xs text-[#6B4F3B]/70">Mon-Sat: 10AM - 6PM IST</p>
            </div>
          </div>
        </div>
        
        <div className="bg-[#F8F3E9]/50 p-5 rounded-lg">
          <h3 className="font-medium text-[#6B4F3B] mb-3">Email Support</h3>
          <div className="flex items-center bg-white p-3 rounded-md">
            <div className="w-10 h-10 bg-[#A7BFA3]/10 rounded-full flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#A7BFA3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-[#6B4F3B] font-medium">support@preetizen.com</p>
              <p className="text-xs text-[#6B4F3B]/70">Response within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-white p-4 rounded-lg border border-[#E9E1D6]">
        <h3 className="font-medium text-[#6B4F3B] mb-2">Order Delivery Timeline</h3>
        <div className="relative pt-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-xs font-semibold inline-block text-[#6B4F3B]">
                Order Placed
              </span>
            </div>
            <div>
              <span className="text-xs font-semibold inline-block text-[#6B4F3B]">
                Order Shipped
              </span>
            </div>
            <div>
              <span className="text-xs font-semibold inline-block text-[#6B4F3B]">
                Delivery
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-[#F8F3E9]">
            <div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#D46A6A]"></div>
            <div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#D46A6A]/60"></div>
            <div style={{ width: "40%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#D46A6A]/30"></div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs text-[#6B4F3B]/70">Day 0</span>
            </div>
            <div>
              <span className="text-xs text-[#6B4F3B]/70">3-5 Days</span>
            </div>
            <div>
              <span className="text-xs text-[#6B4F3B]/70">7-14 Days</span>
            </div>
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