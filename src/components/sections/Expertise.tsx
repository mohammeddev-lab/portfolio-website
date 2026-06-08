"use client";

import { motion } from "framer-motion";
import { Server, Database, Cloud } from "lucide-react";

export default function Expertise() {
  const areas = [
    {
      icon: <Server className="w-8 h-8 text-indigo-500" />,
      title: "API Architecture & Security",
      description: "Designing structured, secure gateways that communicate smoothly with frontend clients and third-party integrations.",
      skills: [
        "RESTful Web API Design",
        "OAuth2 & JWT Authentication",
        "API Rate Limiting & Middleware",
        "WebSocket Real-time Channels",
        "Swagger / OpenAPI Docs"
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-emerald-500" />,
      title: "Database Design & Caching",
      description: "Structuring scalable databases with high transactional integrity, index tuning, and distributed memory caching.",
      skills: [
        "Schema Design & Normalization",
        "PostgreSQL & MySQL Replication",
        "Redis Distributed Caching",
        "Query Profiling & Optimization",
        "Connection Pooling Tuning",
        "Data Migration Scripts"
      ]
    },
    {
      icon: <Cloud className="w-8 h-8 text-sky-500" />,
      title: "Cloud Systems & DevOps",
      description: "Managing host infrastructure, automating build deployments, and ensuring server security and configuration.",
      skills: [
        "Docker Containerization",
        "Nginx Reverse Proxy & Load Balancers",
        "Linux Shell & Server Configs",
        "CI/CD GitHub Actions",
        "Environment & Access Policies"
      ]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 }
    }
  };

  return (
    <section
      id="expertise"
      className="py-24 w-full px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-16"
    >
      {/* Section Header */}
      <div className="w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-[2px] bg-foreground"></span>
          <span className="text-xs font-bold tracking-widest text-foreground uppercase cursor-target">
            My Focus Area
          </span>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-foreground cursor-target">
            Backend <br /> Expertise
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl text-justify cursor-target">
            I specialize in server-side engineering, ensuring that data is served securely, database calls execute instantly, and servers scale dynamically to meet growing request volumes.
          </p>
        </div>
      </div>

      {/* Expertise Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {areas.map((area, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className="glass-card rounded-2xl p-8 flex flex-col justify-between gap-6 cursor-target group hover:border-foreground/30 relative overflow-hidden"
          >
            {/* Subtle glow border effect */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex flex-col gap-4">
              <div className="p-3 bg-card w-fit rounded-xl border border-border">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-foreground mt-2">
                {area.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                {area.description}
              </p>
            </div>

            {/* Checklist of specific skills */}
            <ul className="flex flex-col gap-2.5 pt-4 border-t border-border/60">
              {area.skills.map((skill, sIdx) => (
                <li key={sIdx} className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground/90 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
