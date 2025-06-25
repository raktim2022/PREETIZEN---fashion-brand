import React from "react";
import PolicyHeader from "@/components/policies/common/PolicyHeader";
import ProcessingTimeSection from "./ProcessingTimeSection";
import CourierSection from "./CourierSection";
import TrackingSection from "./TrackingSection";
import SupportSection from "./SupportSection";
import ShippingCoverageSection from "./ShippingCoverageSection";
import ShippingFAQ from "./ShippingFAQ";

export default function ShippingPolicy() {
  return (
    <div className="bg-[#FFFBF7]">
      <PolicyHeader 
        title="Shipping & Delivery Policy"
        description="Our commitment to getting your sustainable fashion to you in a timely manner"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
            <p className="text-[#6B4F3B]/80 mb-8">
              At Preetizen, we understand that receiving your order promptly and in perfect condition is as important as the quality of our products. 
              This policy outlines what you can expect when shipping with us.
            </p>
            
            <ProcessingTimeSection />
            <CourierSection />
            <TrackingSection />
            <ShippingCoverageSection />
            <SupportSection />
            <ShippingFAQ />
          </div>
        </div>
      </div>
    </div>
  );
}