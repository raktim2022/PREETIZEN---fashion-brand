"use client";
import React from "react";

const PageTransition = ({ children }) => {
  // Enhanced component that properly marks content for Barba
  return (
    <div 
      className="page-content" 
      data-barba="container" 
      data-barba-namespace="default"
      suppressHydrationWarning // Important for Next.js
    >
      {children}
    </div>
  );
};

export default PageTransition;