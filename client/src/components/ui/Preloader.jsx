"use client";

import { useEffect, useState, useRef } from "react";

export default function Preloader({ onComplete }) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  const preloaderRef = useRef(null);
  const logoRef = useRef(null);
  const progressBarRef = useRef(null);
  const messageRef = useRef(null);
  const percentageRef = useRef(null);
  const decorativeFrameRef = useRef(null);
  const accentLinesRef = useRef(null);

  const loadingMessages = [
    "Curating artisanal designs...",
    "Weaving elegance into every thread...",
    "Crafting your premium experience...",
    "Harmonizing tradition with modernity..."
  ];

  useEffect(() => {
    const initPreloader = async () => {
      // Dynamic import GSAP
      const gsap = (await import("gsap")).default;

      // Simulate loading progress with refined curve - more deliberate for premium feel
      const progressInterval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          // Refined loading curve - more deliberate and elegant
          let increment;
          if (prev < 15) {
            increment = Math.random() * 5 + 2; // Moderate initial load
          } else if (prev < 40) {
            increment = Math.random() * 3 + 1.1; // Medium speed
          } else if (prev < 65) {
            increment = Math.random() * 2 + 0.8; // Slower progression
          } else if (prev < 85) {
            increment = Math.random() * 0.8 + 0.4; // Very slow near end
          } else {
            increment = Math.random() * 0.3 + 0.1; // Extremely slow final stretch
          }
          return Math.min(prev + increment, 100);
        });
      }, 220); // Slower interval for more deliberate feel

      // Initial setup - hide elements
      gsap.set([
        logoRef.current, 
        progressBarRef.current, 
        messageRef.current, 
        percentageRef.current,
        decorativeFrameRef.current,
        accentLinesRef.current
      ].filter(Boolean), {
        opacity: 0,
        y: 20
      });

      // Set initial state for SVG accent lines
      if (accentLinesRef.current) {
        const lines = accentLinesRef.current.querySelectorAll('path');
        gsap.set(lines, {
          drawSVG: "0%",
          opacity: 0
        });
      }

      // Animate in sequence
      const tl = gsap.timeline();

      // 1. Fade in the decorative frame
      if (decorativeFrameRef.current) {
        tl.to(decorativeFrameRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }, 0.2);
      }

      // 2. Fade in the logo letters with stagger
      const logoLetters = logoRef.current?.querySelectorAll('.logo-letter');
      if (logoLetters) {
        tl.to(logoLetters, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out"
        }, 0.6);
      }

      // 3. Animate in SVG accent lines
      if (accentLinesRef.current) {
        const lines = accentLinesRef.current.querySelectorAll('path');
        tl.to(lines, {
          drawSVG: "100%",
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power2.inOut"
        }, 0.9);
      }

      // 4. Show progress bar and message
      tl.to([progressBarRef.current, messageRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, 1.2)
      
      // 5. Show percentage counter
      .to(percentageRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      }, 1.4)

      // 6. Add subtle pulse to logo
      .to(logoRef.current, {
        scale: 1.02,
        duration: 2.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
      }, 1.8);

      // Rotate loading messages - slower for better readability
      const messageInterval = setInterval(() => {
        setCurrentMessage(prev => (prev + 1) % loadingMessages.length);
      }, 2200); // Even slower message rotation for more impact

      // Wait for loading to complete
      const checkComplete = setInterval(() => {
        if (loadingProgress >= 100) {
          clearInterval(checkComplete);
          clearInterval(messageInterval);

          // Exit animation - add a deliberate pause for satisfaction
          setTimeout(() => {
            // Check if we're still mounted and refs are valid
            if (!preloaderRef.current) {
              // If already unmounting, just call the completion callback
              setIsLoading(false);
              onComplete?.();
              return;
            }

            const exitTl = gsap.timeline({
              onComplete: () => {
                setIsLoading(false);
                onComplete?.();
              }
            });

            // Filter out any null refs to avoid GSAP errors
            const validElements = [
              logoRef.current, 
              progressBarRef.current, 
              messageRef.current, 
              percentageRef.current
            ].filter(Boolean);

            // Animated SVG elements
            const svgElements = [
              decorativeFrameRef.current,
              accentLinesRef.current
            ].filter(Boolean);

            // First fade out the progress elements
            if (validElements.length > 0) {
              exitTl.to(validElements, {
                opacity: 0,
                y: -20,
                duration: 0.7,
                stagger: 0.1,
                ease: "power2.in"
              });
            }

            // Then gracefully fade out the SVG elements
            if (svgElements.length > 0) {
              exitTl.to(svgElements, {
                opacity: 0,
                scale: 1.05,
                duration: 0.9,
                stagger: 0.15,
                ease: "power2.inOut"
              }, "-=0.4");
            }

            // Finally fade out the entire preloader
            if (preloaderRef.current) {
              exitTl.to(preloaderRef.current, {
                opacity: 0,
                duration: 0.9,
                ease: "power2.inOut"
              }, "-=0.3");
            }
          }, 1200); // Longer pause at 100% for satisfaction
        }
      }, 120);

      // Cleanup
      return () => {
        clearInterval(progressInterval);
        clearInterval(messageInterval);
        clearInterval(checkComplete);
      };
    };

    initPreloader();
  }, [loadingProgress, onComplete]);

  // Update progress bar width with eased animation
  useEffect(() => {
    if (progressBarRef.current) {
      const progressFill = progressBarRef.current.querySelector('.progress-fill');
      if (progressFill) {
        progressFill.style.transition = "width 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)";
        progressFill.style.width = `${loadingProgress}%`;
      }
    }
  }, [loadingProgress]);

  if (!isLoading) return null;

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-[10000] flex items-center justify-center"
      style={{ backgroundColor: '#FAF9F6' }}
    >
      {/* Main Content Container */}
      <div className="flex flex-col items-center space-y-10 relative px-8">
        
        {/* Decorative Frame SVG */}
        <div 
          ref={decorativeFrameRef}
          className="absolute inset-0 -m-10 pointer-events-none"
          style={{ opacity: 0 }}
        >
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect x="20" y="20" width="360" height="360" rx="5" 
                  fill="none" stroke="#e1b866" strokeWidth="1.5" 
                  strokeDasharray="6 3" opacity="0.3" />
            <rect x="30" y="30" width="340" height="340" rx="3" 
                  fill="none" stroke="#8C644B" strokeWidth="0.5" 
                  opacity="0.2" />
            <path d="M20,20 L45,45" stroke="#e1b866" strokeWidth="1.5" opacity="0.6" />
            <path d="M380,20 L355,45" stroke="#e1b866" strokeWidth="1.5" opacity="0.6" />
            <path d="M20,380 L45,355" stroke="#e1b866" strokeWidth="1.5" opacity="0.6" />
            <path d="M380,380 L355,355" stroke="#e1b866" strokeWidth="1.5" opacity="0.6" />
          </svg>
        </div>
        
        {/* Brand Logo */}
        <div 
          ref={logoRef}
          className="flex items-center space-x-1.5 relative"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          {'PREETIZEN'.split('').map((letter, index) => (
            <span
              key={index}
              className="logo-letter text-5xl md:text-6xl font-bold tracking-widest"
              style={{ 
                color: letter === 'P' ? '#e1b866' : '#8C644B',
                opacity: 0,
                transform: 'translateY(20px)'
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Decorative SVG Lines */}
        <div 
          ref={accentLinesRef}
          className="absolute" 
          style={{ 
            width: '90%', 
            height: '10px', 
            top: '30%', 
            opacity: 0 
          }}
        >
          <svg viewBox="0 0 400 20" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M20,10 L180,10" stroke="#e1b866" strokeWidth="1.5" fill="none" />
            <path d="M220,10 L380,10" stroke="#e1b866" strokeWidth="1.5" fill="none" />
            <path d="M195,5 L205,15" stroke="#8C644B" strokeWidth="1" fill="none" />
            <path d="M195,15 L205,5" stroke="#8C644B" strokeWidth="1" fill="none" />
          </svg>
        </div>

        {/* Progress Bar Container */}
        <div 
          ref={progressBarRef}
          className="w-64 md:w-80 mt-12"
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          {/* Progress Bar */}
          <div 
            className="h-[2px] rounded-full overflow-hidden relative"
            style={{ backgroundColor: 'rgba(140, 100, 75, 0.15)' }}
          >
            <div 
              className="progress-fill h-full rounded-full"
              style={{ 
                background: 'linear-gradient(to right, #8C644B, #e1b866)',
                width: '0%',
                boxShadow: '0 0 8px rgba(225, 184, 102, 0.5)'
              }}
            />
          </div>
          
          {/* Percentage */}
          <div 
            ref={percentageRef}
            className="text-center mt-4 text-sm font-medium tracking-widest"
            style={{ 
              color: '#8C644B',
              opacity: 0,
              transform: 'translateY(20px)',
              fontFamily: '"Playfair Display", Georgia, serif'
            }}
          >
            {Math.round(loadingProgress)}%
          </div>
        </div>

        {/* Loading Message */}
        <div
          ref={messageRef}
          className="text-center h-8 flex items-center justify-center mt-2"
          style={{
            opacity: 0,
            transform: 'translateY(20px)'
          }}
        >
          <p
            className="text-sm md:text-base font-light tracking-wide italic transition-all duration-700 ease-in-out"
            style={{ color: '#1A1A1A' }}
            key={currentMessage}
          >
            {loadingMessages[currentMessage]}
          </p>
        </div>
      </div>

      {/* Premium Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238C644B' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      />
    </div>
  );
}
