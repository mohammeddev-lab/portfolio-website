"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable custom cursor on desktop devices
    if (window.innerWidth < 1024) return;

    setVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-target") ||
        target.closest(".cursor-target")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (!visible) return null;

  // Sizes and positions based on hovered state
  const cornerSize = hovered ? 24 : 12;
  const offset = hovered ? 18 : 10;
  const centerScale = clicked ? 0.6 : hovered ? 1.5 : 1;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      {/* Center dot */}
      <motion.div
        className="w-1.5 h-1.5 bg-foreground rounded-full"
        animate={{
          scale: centerScale,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
      />

      {/* Target corners brackets */}
      {/* Top Left */}
      <motion.div
        className="absolute w-2.5 h-2.5 border-t-2 border-l-2 border-foreground"
        animate={{
          x: -offset,
          y: -offset,
          width: cornerSize,
          height: cornerSize,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
      {/* Top Right */}
      <motion.div
        className="absolute w-2.5 h-2.5 border-t-2 border-r-2 border-foreground"
        animate={{
          x: offset,
          y: -offset,
          width: cornerSize,
          height: cornerSize,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
      {/* Bottom Left */}
      <motion.div
        className="absolute w-2.5 h-2.5 border-b-2 border-l-2 border-foreground"
        animate={{
          x: -offset,
          y: offset,
          width: cornerSize,
          height: cornerSize,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
      {/* Bottom Right */}
      <motion.div
        className="absolute w-2.5 h-2.5 border-b-2 border-r-2 border-foreground"
        animate={{
          x: offset,
          y: offset,
          width: cornerSize,
          height: cornerSize,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
    </motion.div>
  );
}
