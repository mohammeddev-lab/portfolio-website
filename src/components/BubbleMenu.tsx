"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

interface MenuItem {
  name: string;
  href: string;
  rot: string; // diagonal rotation for desktop
}

export default function BubbleMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { name: "Home", href: "#home", rot: "-2deg" },
    { name: "About Me", href: "#about", rot: "1.5deg" },
    { name: "Expertise", href: "#expertise", rot: "-1deg" },
    { name: "Tech Stack", href: "#skills", rot: "2deg" },
    { name: "Services", href: "#services", rot: "-1.5deg" },
    { name: "Featured Projects", href: "#projects", rot: "1deg" },
    { name: "Experience", href: "#experience", rot: "-2deg" },
    { name: "Contact", href: "#contact", rot: "1.5deg" },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    // Smooth scroll to element
    const element = document.querySelector(href);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <>
      {/* Floating navigation header */}
      <nav className="fixed left-0 right-0 top-4 md:top-6 flex items-center justify-between gap-4 px-6 md:px-12 pointer-events-none z-[1001] max-w-7xl mx-auto">
        {/* Left Side: Theme Toggle */}
        <ThemeToggle />

        {/* Right Side: Burger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="bubble toggle-bubble menu-btn inline-flex flex-col items-center justify-center rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.12)] pointer-events-auto w-12 h-12 md:w-14 md:h-14 border border-border cursor-target p-0 bg-card text-foreground transition-all duration-300 hover:scale-105 hover:bg-accent backdrop-blur-md"
          aria-label="Toggle menu"
          aria-pressed={isOpen}
        >
          <div className="flex flex-col gap-1.5 justify-center items-center w-6 h-6">
            <span
              className={`block rounded-xs h-0.5 bg-foreground transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-[8px] w-6" : "w-6"
              }`}
            />
            <span
              className={`block rounded-xs h-0.5 bg-foreground transition-all duration-300 ${
                isOpen ? "opacity-0 w-6" : "w-6"
              }`}
            />
            <span
              className={`block rounded-xs h-0.5 bg-foreground transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[8px] w-6" : "w-6"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/98 backdrop-blur-xl z-[1000] flex flex-col justify-center items-center px-4 md:px-8 bubble-menu-items"
          >
            {/* Background glowing gradients */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />

            <div className="w-full max-w-4xl flex flex-col justify-center items-stretch gap-6 md:gap-8 pt-12 md:pt-0">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: { transition: { staggerChildren: 0.05 } },
                  hidden: {},
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 pill-list"
              >
                {menuItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      visible: { opacity: 1, y: 0, scale: 1 },
                      hidden: { opacity: 0, y: 30, scale: 0.95 },
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    className="pill-col flex justify-center"
                  >
                    <button
                      onClick={() => handleLinkClick(item.href)}
                      style={{ "--item-rot": item.rot } as React.CSSProperties}
                      className="pill-link cursor-target w-full text-center flex items-center justify-center py-5 md:py-6 px-8 rounded-full border border-border bg-card text-foreground font-sans font-bold uppercase transition-all duration-300 text-xl md:text-3xl hover:border-foreground hover:bg-foreground hover:text-background shadow-sm max-w-md"
                    >
                      {item.name}
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
