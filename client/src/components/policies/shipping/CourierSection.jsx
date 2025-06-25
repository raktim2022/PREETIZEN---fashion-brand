import React from "react";
import { FiTruck } from "react-icons/fi";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function CourierSection() {
  const courierPartners = [
    { name: "BlueDart", logo: "/images/couriers/bluedart.png" },
    { name: "DTDC", logo: "/images/couriers/dtdc.png" },
    { name: "Delhivery", logo: "/images/couriers/delhivery.png" },
    { name: "India Post", logo: "/images/couriers/indiapost.png" },
  ];

  return (
    <div className="mb-10">
      <SectionHeading 
        icon={<FiTruck />}
        title="Courier Information"
      />
      
      <p className="text-[#6B4F3B]/80 mb-4">
        Preetizen uses registered domestic courier services or speed post to ensure your order reaches you safely and on time.
      </p>
      
      <div className="bg-[#F8F3E9]/50 p-5 rounded-lg mb-4">
        <h3 className="font-medium text-[#6B4F3B] mb-3">Important Notice</h3>
        <p className="text-[#6B4F3B]/80">
          Preetizen's responsibility ends once the package is handed over to the courier service. Any further delay due to courier service or customs is beyond our control.
        </p>
      </div>
      
      <h3 className="font-medium text-[#6B4F3B] mb-3">Our Trusted Partners</h3>
      <div className="flex flex-wrap items-center gap-6 mb-4">
        {courierPartners.map((partner) => (
          <div key={partner.name} className="flex items-center justify-center bg-white p-3 rounded-md">
            <div className="h-8 w-20 relative">
              {/* Note: These are placeholder images. You'll need to add actual courier logos */}
              <div className="h-full w-full flex items-center justify-center text-sm text-[#6B4F3B]">
                {partner.name}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-b border-dashed border-[#D7CFC7] mt-8 mb-2"></div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm">
          <span className="text-[#6B4F3B]/70">preetizen.com</span>
          <span className="ml-2 text-[#D46A6A] font-bold text-xs">+1</span>
        </div>
        <div className="flex items-center text-sm">
          <span className="text-[#6B4F3B]/70">preetizen.com</span>
          <span className="ml-2 text-[#D46A6A] font-bold text-xs">+1</span>
        </div>
      </div>
    </div>
  );
}