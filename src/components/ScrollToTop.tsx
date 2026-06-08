"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when scrolled down more than 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[1001] pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-xl border border-border bg-card text-foreground transition-all duration-300 hover:scale-110 hover:bg-accent backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.12)] flex items-center justify-center cursor-target group overflow-hidden"
            aria-label="Scroll to top"
          >
            <div className="relative w-6 h-6 overflow-hidden flex items-center justify-center">
              <div
                className="flex flex-col items-center justify-start absolute transition-transform duration-300 ease-out group-hover:-translate-y-6"
                style={{ height: "48px", top: 0 }}
              >
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <ArrowUp className="w-5 h-5 text-foreground" />
                </div>
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <ArrowUp className="w-5 h-5 text-foreground" />
                </div>
              </div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
