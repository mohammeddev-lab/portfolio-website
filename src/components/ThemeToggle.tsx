"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // Default to dark theme unless light theme is explicitly stored
    const storedTheme = localStorage.getItem("theme");
    
    if (storedTheme === "light") {
      setIsLight(true);
      document.documentElement.classList.add("light");
    } else {
      setIsLight(false);
      document.documentElement.classList.remove("light");
      if (!storedTheme) {
        localStorage.setItem("theme", "dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    if (isLight) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsLight(false);
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsLight(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.12)] pointer-events-auto w-12 h-12 md:w-14 md:h-14 border border-border cursor-target bg-card text-foreground transition-all duration-300 hover:scale-105 hover:bg-accent backdrop-blur-md"
      aria-label="Toggle theme"
    >
      {isLight ? (
        <Moon className="w-5 h-5 transition-transform duration-300 rotate-0" />
      ) : (
        <Sun className="w-5 h-5 transition-transform duration-300 rotate-0" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
