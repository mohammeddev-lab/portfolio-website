"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

interface TimelineItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export default function Timeline() {
  const experiences: TimelineItem[] = [
    {
      role: "Frontend Developer",
      company: "Softy",
      period: "2025 - 2026",
      bullets: [
        "Collaborated closely with cross-functional development teams and project stakeholders to gather requirements and translate business workflows into interactive web applications.",
        "Designed and implemented responsive, highly performant, and clean user interfaces using modern frontend technologies and design systems.",
        "Integrated secure backend APIs and optimized state management to ensure seamless, real-time data flow across application modules.",
      ],
    },
    {
      role: "Software Engineer",
      company: "StadiumBooking & Sports Inc.",
      period: "Aug 2024 - Present",
      bullets: [
        "Led full-stack development of a seat reservation platform — from requirements gathering to database architecture, API design, and responsive frontend interfaces.",
        "Redefined dashboard analytics to track users actively browsing and booking specific facilities, improving actionable insight accuracy.",
        "Configured all financial values to display in Iraqi Dinar (ع.د) with proper Arabic localization.",
      ],
    },
    {
      role: "Software Engineer",
      company: "DevCore Systems",
      period: "Jan 2022 - July 2024",
      bullets: [
        "Designed and developed full-stack web applications using Laravel, PHP, React, and Tailwind CSS.",
        "Built RESTful APIs with comprehensive Swagger documentation and integrated frontend consumption layers.",
        "Tuned database queries and normalizations in PostgreSQL, achieving a 35% speedup in reports queries.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 w-full px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-16"
    >
      {/* Section Header */}
      <div className="w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-[2px] bg-foreground"></span>
          <span className="text-xs font-bold tracking-widest text-foreground uppercase cursor-target">
            My Journey
          </span>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-foreground cursor-target">
            Work <br /> Experience
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl text-justify cursor-target">
            A chronological timeline of my software engineering career, demonstrating end-to-end project delivery from requirements to deployment.
          </p>
        </div>
      </div>

      {/* Timeline List */}
      <div className="relative border-l border-border pl-6 ml-2 md:pl-10 md:ml-6 flex flex-col gap-12 w-full max-w-4xl">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: idx * 0.1,
            }}
            className="relative flex flex-col gap-4 cursor-target group"
          >
            {/* Pulsing glow timeline node */}
            <span className="absolute -left-[31px] md:-left-[47px] top-1 flex h-[10px] w-[10px] md:h-[13px] md:w-[13px] items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground/30 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-[10px] w-[10px] md:h-[13px] md:w-[13px] bg-foreground border-2 border-background"></span>
            </span>

            {/* Work details card */}
            <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col gap-4 hover:border-foreground/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-border/60 pb-4">
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold uppercase tracking-tight text-foreground flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-muted-foreground" />
                    {exp.role}
                  </h3>
                  <span className="text-sm text-muted-foreground/90 font-medium">
                    {exp.company}
                  </span>
                </div>
                
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-border bg-card text-muted-foreground/80 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.period}
                </span>
              </div>

              {/* Bullets */}
              <ul className="flex flex-col gap-2.5">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-2 w-1 h-1 rounded-full bg-foreground/40 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
