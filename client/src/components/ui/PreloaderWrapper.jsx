"use client";

import { useState, useEffect } from "react";
import Preloader from "./Preloader";

export default function PreloaderWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate initial page load time - increased for better experience
    const minLoadTime = 3500; // Minimum 3.5 seconds for better feel
    const startTime = Date.now();

    // Check if page is already loaded
    const checkPageLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadTime - elapsedTime);

      setTimeout(() => {
        setIsLoading(false);
        // Small delay before showing content for smooth transition
        setTimeout(() => {
          setShowContent(true);
        }, 300);
      }, remainingTime);
    };

    // Wait for DOM to be ready
    if (document.readyState === 'complete') {
      checkPageLoad();
    } else {
      window.addEventListener('load', checkPageLoad);
      return () => window.removeEventListener('load', checkPageLoad);
    }
  }, []);

  const handlePreloaderComplete = () => {
    setShowContent(true);
  };

  return (
    <>
      {isLoading && (
        <Preloader onComplete={handlePreloaderComplete} />
      )}
      
      <div 
        className={`transition-opacity duration-500 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          visibility: showContent ? 'visible' : 'hidden',
          position: showContent ? 'relative' : 'absolute',
          top: showContent ? 'auto' : '-9999px'
        }}
      >
        {children}
      </div>
    </>
  );
}
