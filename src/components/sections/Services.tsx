"use client";

import { motion } from "framer-motion";
import { ArrowDown, Code2, Cpu, Zap, Settings } from "lucide-react";

interface ServiceItem {
  num: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      num: "01",
      icon: <Code2 className="w-10 h-10 text-indigo-500" />,
      title: "API Engineering & Integration",
      desc: "Creating secure, rate-limited RESTful APIs using Laravel and PHP, fully documented with Swagger for seamless client consumption.",
    },
    {
      num: "02",
      icon: <Cpu className="w-10 h-10 text-emerald-500" />,
      title: "Microservices & System Design",
      desc: "Architecting decoupled systems using message brokers (RabbitMQ) and event-driven patterns to guarantee reliable async processing.",
    },
    {
      num: "03",
      icon: <Zap className="w-10 h-10 text-sky-500" />,
      title: "Database Performance Tuning",
      desc: "Analyzing SQL queries, refining indexing strategies, setting up replicas, and configuring caching systems to achieve sub-millisecond latencies.",
    },
    {
      num: "04",
      icon: <Settings className="w-10 h-10 text-orange-500" />,
      title: "DevOps & Cloud Orchestration",
      desc: "Dockerizing environments, automating deployments via CI/CD, configuring Nginx proxies, and provisioning VPS and cloud hosting servers.",
    },
  ];

  const handleScrollDown = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="py-24 w-full px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-16"
    >
      {/* Section Header */}
      <div className="w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-[2px] bg-foreground"></span>
          <span className="text-xs font-bold tracking-widest text-foreground uppercase cursor-target">
            My Expertise
          </span>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-foreground cursor-target">
            What I <br /> Offer
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl text-justify cursor-target">
            I design and build robust backend systems, optimized database models, and cloud-native hosting environments. My focus is on writing clean, scalable code that optimizes resources and guarantees reliability under heavy traffic load.
          </p>
        </div>
      </div>

      {/* Services Content Wrapper */}
      <div className="flex flex-row gap-0 lg:gap-12 items-stretch w-full">
        {/* Left Side: Desktop Scroll indicator column */}
        <div className="hidden lg:flex flex-col justify-between items-center gap-6 w-16 shrink-0 z-10 py-4">
          <div className="writing-mode-vertical-rl rotate-270 font-bold tracking-[0.3em] text-muted-foreground/60 uppercase whitespace-nowrap text-xs">
            Scroll Down
          </div>
          <div className="h-28 w-[1px] bg-border" />
          <button
            onClick={handleScrollDown}
            className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center cursor-target hover:scale-110 hover:border-foreground/30 hover:bg-accent transition-all duration-300"
            aria-label="Scroll to projects"
          >
            <ArrowDown className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Right Side: Services Grid Cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: idx * 0.1,
              }}
              className="glass-card rounded-2xl p-8 flex flex-col justify-between items-start gap-8 min-h-[250px] relative overflow-hidden group hover:border-foreground/30 cursor-target"
            >
              {/* Card visual elements */}
              <div className="flex flex-col gap-4 w-full">
                <div className="p-3 bg-card border border-border rounded-xl w-fit group-hover:scale-105 transition-transform duration-300">
                  {svc.icon}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-foreground mt-2">
                  {svc.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify">
                  {svc.desc}
                </p>
              </div>

              {/* Bottom Right Card Index Number */}
              <div className="absolute bottom-4 right-6 text-7xl md:text-8xl font-black opacity-[0.03] dark:opacity-[0.05] select-none text-foreground group-hover:opacity-10 transition-opacity duration-300">
                {svc.num}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
