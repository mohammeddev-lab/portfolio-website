"use client";

import { motion } from "framer-motion";
import React from "react";

// SVGs for technology icons
const Icons = {
  laravel: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 text-red-500 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.4 0C5.1 0 4.8.1 4.6.4L.4 4.6C.1 4.8 0 5.1 0 5.4v13.2c0 .3.1.6.4.8l4.2 4.2c.2.2.5.4.8.4h13.2c.3 0 .6-.1.8-.4l4.2-4.2c.2-.2.4-.5.4-.8V5.4c0-.3-.1-.6-.4-.8L19.4.4C19.2.1 18.9 0 18.6 0H5.4zm3.8 5.7h3.8c.4 0 .8.2 1 .5l3.2 4.9c.2.3.2.7 0 1.1l-3.2 4.9c-.2.3-.6.5-1 .5H9.2c-.4 0-.8-.2-1-.5l-3.2-4.9c-.2-.3-.2-.7 0-1.1l3.2-4.9c.2-.3.6-.5 1-.5z"/>
    </svg>
  ),
  php: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 text-indigo-400 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-3.5 17h-1.5V7h1.5v10zm4.5 0h-1.5V7H13v10zm4 0h-1.5V7H17v10z"/>
    </svg>
  ),
  nodejs: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 text-green-500 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.5 17h-1.5v-10h1.5v10zm6.5-3.5c0 1.93-1.57 3.5-3.5 3.5h-1v-7h1c1.93 0 3.5 1.57 3.5 3.5v0zm0-3.5c0-1.93-1.57-3.5-3.5-3.5h-1v7h1c1.93 0 3.5-1.57 3.5-3.5v0z"/>
    </svg>
  ),
  nestjs: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 text-red-600 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0l-12 7.2 3.6 2.16v9.36l8.4 5.28 8.4-5.28v-9.36l3.6-2.16-12-7.2zm4.8 17.64l-4.8 3.02-4.8-3.02v-5.28l4.8-3.02 4.8 3.02v5.28z"/>
    </svg>
  ),
  expressjs: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 text-foreground fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm-1.5 17.2h-1.8V6.8h1.8v10.4zm5.4-3.6H13v-1.8h2.9v1.8z"/>
    </svg>
  ),
  mysql: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 text-blue-600 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17h-1.5v-10h1.5v10zm3.5-3.5c0 1.93-1.57 3.5-3.5 3.5h-1v-7h1c1.93 0 3.5 1.57 3.5 3.5v0zm3.5 3.5h-1.5v-10h1.5v10z"/>
    </svg>
  ),
  postgresql: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 text-blue-400 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 18.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z"/>
    </svg>
  ),
  redis: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 text-red-700 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zM12 4.5l6.75 3.75L12 12 5.25 8.25 12 4.5zm0 15L5.25 15.75V9.75L12 13.5l6.75-3.75v6L12 19.5z"/>
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 text-blue-500 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.983 11.078c0-.495-.4-.897-.899-.897h-.905c-.495 0-.897.402-.897.897v.906c0 .495.402.897.897.897h.905c.499 0 .899-.402.899-.897v-.906zm-4.32-.897h-.905c-.495 0-.899.402-.899.897v.906c0 .495.404.897.899.897h.905c.495 0 .899-.402.899-.897v-.906c0-.495-.404-.897-.899-.897zm-2.16 0h-.905c-.495 0-.899.402-.899.897v.906c0 .495.404.897.899.897h.905c.495 0 .899-.402.899-.897v-.906c0-.495-.404-.897-.899-.897zm-2.16 0h-.905c-.495 0-.899.402-.899.897v.906c0 .495.404.897.899.897h.905c.495 0 .899-.402.899-.897v-.906c0-.495-.404-.897-.899-.897zm8.64-2.16h-.905c-.495 0-.897.402-.897.897v.905c0 .497.402.899.897.899h.905c.499 0 .899-.402.899-.899v-.905c0-.495-.4-.897-.899-.897zm-2.16 0h-.905c-.495 0-.899.402-.899.897v.905c0 .497.404.899.899.899h.905c.495 0 .899-.402.899-.899v-.905c0-.495-.404-.897-.899-.897zm-2.16 0h-.905c-.495 0-.899.402-.899.897v.905c0 .497.404.899.899.899h.905c.495 0 .899-.402.899-.899v-.905c0-.495-.404-.897-.899-.897zm6.48-2.16h-.905c-.495 0-.897.402-.897.897v.905c0 .497.402.899.897.899h.905c.499 0 .899-.402.899-.899v-.905c0-.495-.4-.897-.899-.897zm2.84 6.48c-.495 0-.897.402-.897.897v.906c0 .495.402.897.897.897h.905c.495 0 .897-.402.897-.897v-.906c0-.495-.402-.897-.897-.897zm-2.84-2.16h-.905c-.495 0-.897.402-.897.897v.906c0 .495.402.897.897.897h.905c.499 0 .899-.402.899-.897v-.906c0-.495-.4-.897-.899-.897z"/>
    </svg>
  ),
  nginx: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 text-emerald-500 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/>
    </svg>
  ),
  linux: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5 16h-10l1-5h8l1 5z"/>
    </svg>
  ),
  aws: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 text-yellow-600 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm-1.5 17.5v-11l8 5.5-8 5.5z"/>
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 text-orange-500 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.6 11.2L12.8.4c-.6-.6-1.5-.6-2 0L8.7 2.5l2.7 2.7c.6-.2 1.3 0 1.8.5.5.5.7 1.2.5 1.8l2.7 2.7c.6-.2 1.3 0 1.8.5.7.7.7 1.8 0 2.5s-1.8.7-2.5 0c-.5-.5-.7-1.2-.5-1.8l-2.7-2.7c-.2.2-.5.3-.8.3-.3 0-.6-.1-.8-.3l-2.7 2.7c.2.6 0 1.3-.5 1.8-.7.7-1.8.7-2.5 0s-.7-1.8 0-2.5c.5-.5 1.2-.7 1.8-.5l2.7-2.7c-.1-.2-.2-.5-.2-.8 0-.3.1-.6.3-.8L8.2.3c-.6-.6-1.5-.6-2 0L.4 11.2c-.6.6-.6 1.5 0 2l10.8 10.8c.6.6 1.5.6 2 0L24 13.2c.5-.5.5-1.5-.4-2z"/>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 text-foreground fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  ),
  postman: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 text-orange-600 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18c-3.313 0-6-2.687-6-6s2.687-6 6-6 6 2.687 6 6-2.687 6-6 6z"/>
    </svg>
  ),
  swagger: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 text-green-400 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/>
    </svg>
  ),
};

interface TechItem {
  icon: React.ReactNode;
  name: string;
}

interface TechGroup {
  category: string;
  items: TechItem[];
}

export default function TechStack() {
  const groups: TechGroup[] = [
    {
      category: "Backend & Core",
      items: [
        { icon: Icons.laravel, name: "Laravel" },
        { icon: Icons.php, name: "PHP" },
      ],
    },
    {
      category: "Databases & Storage",
      items: [
        { icon: Icons.postgresql, name: "PostgreSQL" },
        { icon: Icons.mysql, name: "MySQL" },
      ],
    },
    {
      category: "Infrastructure & Host",
      items: [
        { icon: Icons.docker, name: "Docker" },
        { icon: Icons.nginx, name: "Nginx" },
        { icon: Icons.linux, name: "Linux" },
      ],
    },
    {
      category: "Development Tooling",
      items: [
        { icon: Icons.git, name: "Git" },
        { icon: Icons.github, name: "GitHub" },
        { icon: Icons.postman, name: "Postman" },
        { icon: Icons.swagger, name: "Swagger" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 w-full px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-16"
    >
      {/* Section Header */}
      <div className="w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-[2px] bg-foreground"></span>
          <span className="text-xs font-bold tracking-widest text-foreground uppercase cursor-target">
            My Tech Stack
          </span>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-foreground cursor-target">
            What I <br /> Use
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl text-justify cursor-target">
            I utilize a comprehensive suite of modern backend frameworks, databases, and DevOps tools to build secure, robust, and highly optimized server environments.
          </p>
        </div>
      </div>

      {/* Floating Tech Bubbles Grouped by Category */}
      <div className="flex flex-col gap-12 w-full">
        {groups.map((group, gIdx) => (
          <div key={gIdx} className="flex flex-col gap-6 w-full">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground/80 font-mono pl-2">
              {group.category}
            </h3>
            
            <div className="flex flex-wrap gap-4 items-center justify-start">
              {group.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    delay: idx * 0.04,
                  }}
                  className="flex items-center justify-center cursor-target"
                >
                  <motion.div
                    whileHover={{ scale: 1.08, y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    className="relative flex flex-col md:flex-row items-center gap-3 justify-center w-24 h-24 md:w-auto md:h-auto md:py-3.5 md:px-6 rounded-full md:rounded-xl border border-border bg-card text-foreground transition-colors duration-300 hover:border-foreground/30 shadow-sm backdrop-blur-md"
                  >
                    <div className="flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-xs md:text-sm font-bold tracking-wide uppercase font-sans">
                      {item.name}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
