"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  const stats = [
    { value: "13+", label: "Projects Shipped" },
    { value: "5+", label: "Full-Stack Applications" },
    { value: "3+", label: "Client Engagements" },
    { value: "100%", label: "Requirements Traced to Code" },
  ];

  return (
    <section
      id="about"
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
            About <br /> Mohammed
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl text-justify cursor-target">
            I am a Software Engineer with a strong command of the full Software Development Life Cycle — from requirements gathering and system design to database architecture, backend development, and frontend implementation. My academic foundation in Software Engineering has given me a disciplined, analytical approach to building systems that are not only functional but maintainable, scalable, and aligned with real business needs. I regularly sit directly with clients to elicit and analyze business requirements, translating vague, high-level needs into clear, actionable technical specifications that development teams can execute against with confidence. This ability to bridge the gap between stakeholder intent and engineering execution ensures seamless cross-functional collaboration and consistently successful project delivery.
          </p>
        </div>
      </div>

      {/* Grid Layout: Philosophy & Statistics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Side: Philosophy Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="lg:col-span-7 glass-card rounded-2xl p-8 md:p-10 flex flex-col justify-between gap-8 cursor-target relative overflow-hidden"
        >
          {/* Subtle gradient light */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground">
              Engineering the Full Picture
            </h3>
            <p className="text-muted-foreground leading-relaxed text-justify text-sm md:text-base">
              I have hands-on experience sitting with clients, translating vague ideas into concrete requirements documents, and designing system architectures before writing a single line of code. Whether the task involves modeling a relational database, designing a RESTful API, or crafting a responsive user interface, I approach every problem with a systems-thinking mindset. I believe the best software is built by engineers who understand the entire picture — not just one layer of it.
            </p>
          </div>

          <blockquote className="border-l-2 border-foreground/30 pl-4 py-1 text-sm italic text-muted-foreground/90">
            &quot;The best software engineers don&apos;t just write code — they gather the right requirements, design the right architecture, and build solutions that serve both the user and the business.&quot;
          </blockquote>
        </motion.div>

        {/* Right Side: Statistics Grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
                delay: idx * 0.05,
              }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-center items-center text-center gap-2 cursor-target relative overflow-hidden group hover:border-foreground/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground leading-snug">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
