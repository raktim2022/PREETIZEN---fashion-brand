"use client";
import React from "react";
import PageSEO from "@/components/common/PageSEO";
import ShippingPolicy from "@/components/policies/shipping/ShippingPolicy";
import PageTransition from "@/components/ui/PageTransition";

export default function ShippingPolicyPage() {
  return (
    <PageTransition>
      <>
        <PageSEO
          title="Shipping & Delivery Policy | Preetizen"
          description="Learn about Preetizen's shipping and delivery process, timeframes, courier partners, and more. We deliver sustainable fashion across India."
        />
        <ShippingPolicy />
      </>
    </PageTransition>
  );
}
