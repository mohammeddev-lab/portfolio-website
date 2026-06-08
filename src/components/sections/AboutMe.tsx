"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  const stats = [
    { value: "99.9%", label: "Target System Uptime" },
    { value: "10M+", label: "API Requests Processed Daily" },
    { value: "15+", label: "Microservices Managed" },
    { value: "3+", label: "Years Engineering Backend Code" },
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
            My Background
          </span>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-foreground cursor-target">
            About <br /> Mohammed
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl text-justify cursor-target">
            I am a senior backend engineer and API architect focused on designing, building, and optimizing high-performance server-side architectures. From transactional stadium booking engines to multi-tenant SaaS backends, I ensure high data integrity, strict access control, and sub-millisecond response latencies.
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
              Engineering Scalable Foundations
            </h3>
            <p className="text-muted-foreground leading-relaxed text-justify text-sm md:text-base">
              My engineering philosophy revolves around simplicity, resource efficiency, and proactive security. I structure code modularly following DDD (Domain-Driven Design) and SOLID principles to allow development teams to expand systems without technical debt. I believe that a great backend is invisible — it just works, silently handling millions of requests with optimal caching, balanced connection pools, and ironclad authentication.
            </p>
          </div>

          <blockquote className="border-l-2 border-foreground/30 pl-4 py-1 text-sm italic text-muted-foreground/90">
            &quot;Scalability isn&apos;t just about throwing more servers at a database; it&apos;s about designing database queries, concurrency states, and memory networks to minimize bottlenecks under load.&quot;
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
