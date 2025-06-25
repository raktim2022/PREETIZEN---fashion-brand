"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FiPlay, FiPause, FiMaximize, FiMinimize } from "react-icons/fi";

const JourneySection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Handle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        // Using promise to handle autoplay restrictions
        const playPromise = videoRef.current.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((error) => {
              console.error("Autoplay was prevented:", error);
              setIsPlaying(false);
            });
        }
      }
    }
  };

  // Handle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
      document.removeEventListener("MSFullscreenChange", handleFullscreenChange);
    };
  }, []);

  // Handle video loaded metadata
  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <section className="py-20 bg-[#F8F3E9]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-[#6B4F3B] mb-4">
              The Journey Behind Preetizen
            </h2>
            <div className="w-20 h-1 bg-[#D46A6A] mb-8"></div>

            <div className="space-y-6 text-[#333333]/80">
              <p>
                Preetizen isn’t just about quirky clothes — it’s about conscious
                choices.
              </p>

              <p>
                Every piece is designed to be expressive, wearable art that
                supports sustainability, fair production, and slow fashion. When
                you support Preetizen, you're not just buying an outfit — you're
                uplifting local artisans and championing ethical design.
              </p>

              <p className="font-medium text-[#6B4F3B] italic">
                "We don't just make clothes; we create connections between
                artisans and wearers, tradition and innovation, style and
                sustainability."
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-lg overflow-hidden aspect-video">
              {/* Poster image that shows before video loads */}
              {!videoLoaded && (
                <div className="absolute inset-0 bg-[#A7BFA3]/20 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-[#A7BFA3] border-t-[#D46A6A] rounded-full animate-spin"></div>
                </div>
              )}

              <video
                ref={videoRef}
                className="w-full h-full -z-10 object-contain"
                // muted
                // loop
                controls
                playsInline
                preload="metadata"
                onClick={handleVideoLoaded}
                onLoadedMetadata={handleVideoLoaded}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                <source src="https://video.wixstatic.com/video/cf391b_4f71572845e649a4b71c2d9cb00fcc9e/1080p/mp4/file.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play button overlay */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  onClick={togglePlay}
                >
                  <div className="w-20 h-20 rounded-full bg-black/40 flex items-center justify-center">
                    <FiPlay size={36} className="text-white ml-1" />
                  </div>
                </div>
              )}

              {/* Custom video controls */}
              <div className="absolute z-20 bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent  opacity-0 transition-opacity duration-300">
                <div className="flex items-center justify-between">
                  <button
                    onClick={togglePlay}
                    className="text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <FiPause size={20} /> : <FiPlay size={20} />}
                  </button>

                  <button
                    onClick={toggleFullscreen}
                    className="text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
                    aria-label={
                      isFullscreen ? "Exit fullscreen" : "Enter fullscreen"
                    }
                  >
                    {isFullscreen ? (
                      <FiMinimize size={20} />
                    ) : (
                      <FiMaximize size={20} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
