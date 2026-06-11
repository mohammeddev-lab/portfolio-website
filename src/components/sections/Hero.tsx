"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OrbitBackground from "../OrbitBackground";
import { Download } from "lucide-react";

interface WordRotatorProps {
  words: string[];
  duration?: number;
  className?: string;
}

function WordRotator({
  words,
  duration = 2500,
  className = "",
}: WordRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearInterval(timer);
  }, [words.length, duration]);

  return (
    <div className={`inline-flex items-center justify-center overflow-hidden ${className}`}>
      <motion.span
        layout
        className="relative inline-flex items-center justify-center whitespace-nowrap px-2 text-inherit"
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={index}
            initial={{ y: "100%", opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: "-100%", opacity: 0, filter: "blur(4px)" }}
            transition={{
              y: { type: "spring" as const, stiffness: 100, damping: 20 },
              opacity: { duration: 0.2 },
            }}
            className="inline-block"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </div>
  );
}

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 80, damping: 22 },
    },
  };

  const wordContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: "100%", 
      filter: "blur(6px)" 
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { 
        type: "spring" as const, 
        damping: 18, 
        stiffness: 90 
      },
    },
  };


  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-4 text-center select-none"
    >
      {/* Dynamic Concentric Orbiting Background */}
      <OrbitBackground />

      {/* Decorative center glow */}
      <div className="absolute w-72 h-72 rounded-full bg-primary/5 blur-[80px] pointer-events-none z-0" />

      {/* Hero Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center gap-6 max-w-5xl"
      >
        {/* Pulsing Available Status Badge */}
        <motion.div variants={itemVariants} className="cursor-target">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2 text-xs font-semibold uppercase tracking-widest text-foreground shadow-sm backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            AVAILABLE FOR WORK
          </span>
        </motion.div>

        {/* Hello Subheader */}
        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight text-foreground/80 cursor-target"
        >
          Hello! I&apos;m <span className="text-foreground font-bold">Mohammed Fares</span>.
        </motion.h2>

        {/* Big Bold Cinematic Title */}
        {/* Big Bold Cinematic Title */}
        <motion.div
          variants={wordContainerVariants}
          initial="hidden"
          animate="visible"
          className="font-extrabold tracking-tighter text-foreground uppercase"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[9rem] leading-none flex flex-col items-center select-none">
            {/* BACKEND */}
            <span className="inline-flex overflow-hidden py-2">
              <motion.span
                variants={wordVariants}
                className="inline-block"
              >
                SOFTWARE
              </motion.span>
            </span>

            {/* DEVELOPER */}
            <span className="inline-flex overflow-hidden py-2 text-muted-foreground">
              <WordRotator
                words={["ENGINEER", "DEVELOPER", "ARCHITECT", "BUILDER"]}
                duration={2500}
                className="inline-block"
              />
            </span>
          </h1>
        </motion.div>


        {/* Subtitle Description */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl cursor-target mt-2 px-4"
        >
          I build end-to-end solutions — from system architecture and database design to polished, performant user interfaces. Software Engineering is not just my title, it&apos;s how I think.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-row gap-4 mt-6 z-20"
        >
          <button
            onClick={scrollToContact}
            className="cursor-target inline-flex items-center justify-center bg-primary text-primary-foreground font-bold uppercase tracking-wider rounded-xl px-8 py-4 text-sm hover:scale-105 transition-all duration-300 shadow-lg border border-transparent"
          >
            Let&apos;s Talk
          </button>
          
          <a
            href="/Mohammed_Fares_CV.pdf"
            download
            className="cursor-target inline-flex items-center justify-center gap-2 bg-card hover:bg-accent border border-border text-foreground font-bold uppercase tracking-wider rounded-xl px-8 py-4 text-sm hover:scale-105 transition-all duration-300 backdrop-blur-md shadow-sm"
          >
            Download CV
            <Download className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
