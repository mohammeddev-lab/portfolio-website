"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import custom components
import CustomCursor from "@/components/CustomCursor";
import BubbleMenu from "@/components/BubbleMenu";
import ScrollToTop from "@/components/ScrollToTop";

// Import sections
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import Expertise from "@/components/sections/Expertise";
import TechStack from "@/components/sections/TechStack";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Timeline from "@/components/sections/Timeline";
import Contact from "@/components/sections/Contact";

export default function Home() {
  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Update ScrollTrigger on Lenis scroll
    lenis.on("scroll", ScrollTrigger.update);

    // Synchronize GSAP ticker with Lenis scroll
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // 2. Initialize GSAP & ScrollTrigger Animations
    gsap.registerPlugin(ScrollTrigger);

    // Staggered reveal for section headers
    const headers = document.querySelectorAll("h2");
    headers.forEach((header) => {
      gsap.fromTo(
        header,
        { opacity: 0, y: 40, filter: "blur(4px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Cleanup listeners on unmount
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="relative flex flex-col items-center w-full min-h-screen bg-background overflow-hidden selection:bg-foreground selection:text-background">
      {/* Cinematic Custom Mouse Cursor */}
      <CustomCursor />

      {/* Radial Background Gradients for depth */}
      <div className="absolute top-[10%] left-[-20%] w-[80vw] h-[80vw] rounded-full bg-indigo-500/3 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[50%] right-[-20%] w-[80vw] h-[80vw] rounded-full bg-emerald-500/3 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[-20%] w-[80vw] h-[80vw] rounded-full bg-indigo-500/3 blur-[120px] pointer-events-none z-0" />

      {/* Floating Header (Bubble Menu & Theme Switcher) */}
      <BubbleMenu />

      {/* Floating Scroll to Top Button */}
      <ScrollToTop />

      {/* Sections Wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* 1. Hero */}
        <Hero />

        {/* 2. About Me */}
        <AboutMe />

        {/* 3. Backend Expertise */}
        <Expertise />

        {/* 4. Tech Stack */}
        <TechStack />

        {/* 5. Services */}
        <Services />

        {/* 6. Featured Projects */}
        <Projects />

        {/* 7. Experience Timeline */}
        <Timeline />

        {/* 8. Contact & Footer */}
        <Contact />
      </div>
    </main>
  );
}
