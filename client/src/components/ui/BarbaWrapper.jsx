"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function BarbaWrapper({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const isTransitioning = useRef(false);

  useEffect(() => {
    // Set mounted to true after the component is mounted in the browser
    setMounted(true);

    // Dynamically import GSAP only on the client side
    const setupBarba = async () => {
      // Dynamic imports to avoid SSR issues
      const gsap = (await import("gsap")).default;

      // Create styles for the staircase transition
      const style = document.createElement("style");
      style.setAttribute("data-barba-styles", "");
      style.textContent = `
        .page-transition-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 9999;
          pointer-events: none;
          overflow: hidden;
        }
        
        .transition-stairs {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-template-rows: 1fr;
          z-index: 9999;
        }
        
        .stair-panel {
          width: 100%;
          height: 100%;
          transform: translateY(-101%);
          background-color: #EAE4DC;
          will-change: transform;
          overflow: hidden;
          position: relative;
        }
        
        .stair-panel::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #8C644B 0%, transparent 60%);
          opacity: 0.25;
        }
        
        .stair-panel:nth-child(odd)::after {
          background: linear-gradient(135deg, transparent 40%, #8C644B 100%);
          opacity: 0.15;
        }
        
        .transition-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #FAF9F6;
          opacity: 0;
          z-index: 9998;
        }
        
        .transition-logo {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.9);
          z-index: 10001;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 2.5rem;
          font-weight: bold;
          color: #1A1A1A;
          opacity: 0;
          pointer-events: none;
          white-space: nowrap;
          letter-spacing: 1px;
        }
      `;
      document.head.appendChild(style);

      // Custom transition function with guaranteed minimum duration
      const performTransition = async (href) => {
        if (isTransitioning.current) return;
        isTransitioning.current = true;

        const startTime = Date.now();
        const minTransitionDuration = 1400; // Minimum 1.4 seconds total transition

        try {
          // Create the transition container if it doesn't exist
          let container = document.querySelector(".page-transition-container");
          if (!container) {
            container = document.createElement("div");
            container.className = "page-transition-container";
            document.body.appendChild(container);

            // Create staircase structure
            const stairs = document.createElement("div");
            stairs.className = "transition-stairs";
            container.appendChild(stairs);

            // Create 6 stair panels
            for (let i = 0; i < 6; i++) {
              const panel = document.createElement("div");
              panel.className = "stair-panel";
              stairs.appendChild(panel);
            }

            // Create overlay for smooth fading
            const overlay = document.createElement("div");
            overlay.className = "transition-overlay";
            container.appendChild(overlay);

            // Create logo element
            const logo = document.createElement("div");
            logo.className = "transition-logo";
            logo.textContent = "PREETIZEN";
            document.body.appendChild(logo);
          }

          const panels = document.querySelectorAll(".stair-panel");
          const overlay = document.querySelector(".transition-overlay");
          const logo = document.querySelector(".transition-logo");

          // Exit animation (staircase effect) - slower and more noticeable
          await new Promise((resolve) => {
            const tl = gsap.timeline({
              onComplete: resolve,
            });

            // Reset panel positions
            gsap.set(panels, { translateY: "-101%" });

            // Subtle fade in of overlay
            tl.to(overlay, {
              opacity: 0.2, // Slightly more visible
              duration: 0.3, // Increased duration
              ease: "power1.inOut"
            })

            // Stagger the panels from top to bottom - slower
            .to(panels, {
              translateY: "0%",
              duration: 0.7, // Increased from 0.5
              stagger: 0.06, // Increased from 0.04 (60ms between each panel)
              ease: "expo.inOut"
            }, "-=0.1")

            // Reveal logo with more presence
            .to(logo, {
              opacity: 1,
              scale: 1,
              duration: 0.5, // Increased from 0.35
              ease: "back.out(1.5)"
            }, "-=0.3"); // Show logo earlier for longer visibility
          });

          // Start navigation but don't wait for it immediately
          const navigationPromise = router.push(href);

          // Ensure we show the transition state for a minimum time
          const minDisplayTime = 800; // Show transition for at least 800ms
          await new Promise(resolve => setTimeout(resolve, minDisplayTime));

          // Wait for navigation to complete
          await navigationPromise;

          // Scroll to top
          window.scrollTo(0, 0);

          // Calculate remaining time to meet minimum duration
          const elapsedTime = Date.now() - startTime;
          const remainingTime = Math.max(0, minTransitionDuration - elapsedTime - 800); // Reserve 800ms for exit animation

          if (remainingTime > 0) {
            await new Promise(resolve => setTimeout(resolve, remainingTime));
          }

          // Enter animation - slower and more deliberate
          await new Promise((resolve) => {
            const tl = gsap.timeline({
              onComplete: resolve,
            });

            // Fade out logo more gradually
            tl.to(logo, {
              opacity: 0,
              scale: 0.9,
              duration: 0.4, // Increased from 0.25
              ease: "power1.in"
            })

            // Stagger panels out in reverse order - slower
            .to(panels, {
              translateY: "101%", // Move panels down and out
              duration: 0.6, // Increased from 0.5
              stagger: 0.05, // Slightly increased stagger
              ease: "expo.inOut"
            }, "-=0.2") // More overlap

            // Fade out overlay completely
            .to(overlay, {
              opacity: 0,
              duration: 0.3, // Increased from 0.2
              ease: "power2.inOut"
            }, "-=0.4"); // More overlap for smoother transition
          });

        } catch (error) {
          console.error("Transition error:", error);
        } finally {
          isTransitioning.current = false;
        }
      };

      try {
        // Handle custom barba click events
        const handleBarbaClick = (e) => {
          const href = e.detail.href;
          if (href && href !== pathname) {
            performTransition(href);
          }
        };

        // Handle regular link clicks
        const handleLinkClick = (e) => {
          // Skip if currently transitioning
          if (isTransitioning.current) {
            e.preventDefault();
            return;
          }

          // Find closest anchor element
          let anchor = e.target.closest("a");
          if (!anchor) return;

          // Skip if it's marked as a barba link (handled by BarbaLink component)
          if (anchor.getAttribute("data-barba-link") === "true") {
            return;
          }

          // Skip if it's an external link, has a target, or has data-no-transition
          if (
            anchor.target === "_blank" ||
            anchor.hostname !== window.location.hostname ||
            anchor.getAttribute("data-no-transition") === "true" ||
            anchor.getAttribute("href")?.startsWith("#") ||
            anchor.getAttribute("href")?.startsWith("mailto:") ||
            anchor.getAttribute("href")?.startsWith("tel:")
          ) {
            return;
          }

          // Get the href
          const href = anchor.getAttribute("href");
          if (!href || href === pathname) return;

          // Prevent default and perform transition
          e.preventDefault();
          performTransition(href);
        };

        // Add event listeners
        document.addEventListener("barba:click", handleBarbaClick);
        document.addEventListener("click", handleLinkClick);

        // Store cleanup functions
        return {
          style,
          cleanup: () => {
            document.removeEventListener("barba:click", handleBarbaClick);
            document.removeEventListener("click", handleLinkClick);
          }
        };
      } catch (error) {
        console.error("Error initializing Barba.js:", error);
        return null;
      }
    };

    // Call setupBarba function
    let cleanup = null;

    if (mounted) {
      setupBarba().then((result) => {
        cleanup = result;
      });
    }

    return () => {
      // Cleanup code
      if (typeof window !== "undefined") {
        // Remove all transition elements
        const container = document.querySelector(".page-transition-container");
        const logo = document.querySelector(".transition-logo");
        
        if (container) container.remove();
        if (logo) logo.remove();
        
        if (document.querySelector("style[data-barba-styles]")) {
          document.querySelector("style[data-barba-styles]").remove();
        }

        // Clean up event listeners
        if (cleanup && cleanup.cleanup) {
          cleanup.cleanup();
        }

        // Reset transition state
        isTransitioning.current = false;
      }
    };
  }, [mounted, router, pathname]);

  if (!mounted) {
    return <>{children}</>; // Return children without wrapper during SSR
  }

  return <div data-barba="wrapper">{children}</div>;
}