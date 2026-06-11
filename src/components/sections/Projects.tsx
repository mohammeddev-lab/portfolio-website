"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Database, GitBranch, Cpu, Lock, Layout } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface ProjectItem {
  title: string;
  desc: string;
  tags: string[];
  features: string[];
  github: string;
  docs?: string;
  diagram: React.ReactNode;
}

export default function Projects() {
  const projects: ProjectItem[] = [
    {
      title: "Continuous Education Center Management System",
      desc: "A Graduation Project — a full-scale management system for a Continuing Education Center. I led the requirements gathering process through direct client sessions, designed the database architecture, and built the Laravel backend with a responsive React.js frontend styled in Tailwind CSS.",
      tags: ["React.js", "Tailwind CSS", "HTML5", "Laravel", "PHP", "MySQL", "OpenAI"],
      features: [
        "Led requirements gathering through direct client meetings, translating operational workflows into structured functional requirements.",
        "Designed the relational database schema from the ground up before implementing backend logic — mapping entities, relationships, and constraints.",
        "Built a responsive React.js frontend with Tailwind CSS for trainee management, course scheduling, and administrative dashboards.",
        "Integrated secure authentication, role-based access control, automated attendance tracking, certificate generation, and financial reporting.",
      ],
      github: "https://github.com/mohammeddev-lab/cec-management-system",
      docs: "https://mohammedfares.dev/docs/cec-management-system",
      diagram: (
        <div className="w-full h-full min-h-[200px] flex items-center justify-center bg-zinc-950/40 rounded-xl border border-border/80 p-6 relative overflow-hidden group">
          {/* AI Integrated Laravel Architecture SVG */}
          <svg className="w-full h-full max-w-[280px]" viewBox="0 0 100 80" fill="none">
            {/* Paths */}
            <motion.path d="M10 40h20" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <motion.path d="M50 30h15" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <motion.path d="M50 50h15" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <motion.path d="M40 30V15h25" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 2" />

            {/* AI Agent interaction flow */}
            <motion.circle r="1.2" fill="#38bdf8"
              animate={{ cx: [10, 30], cy: [40, 40] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
            <motion.circle r="1.2" fill="#10b981"
              animate={{ cx: [40, 40, 65], cy: [30, 15, 15] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
            />

            {/* Clients */}
            <rect x="5" y="30" width="10" height="20" rx="3" fill="#18181b" stroke="rgba(255,255,255,0.1)" />
            <text x="10" y="42" fill="#a1a1aa" fontSize="3" textAnchor="middle">User</text>

            {/* Laravel MVC Gateway */}
            <rect x="30" y="20" width="20" height="35" rx="4" fill="#2d0b0b" stroke="#f43f5e" />
            <text x="40" y="34" fill="#ffe4e6" fontSize="4" fontWeight="bold" textAnchor="middle">Laravel</text>
            <text x="40" y="42" fill="#fda4af" fontSize="2.5" textAnchor="middle">JWT Auth</text>
            <text x="40" y="48" fill="#f43f5e" fontSize="2.5" textAnchor="middle">API GW</text>

            {/* OpenAI Node */}
            <rect x="65" y="5" width="22" height="20" rx="4" fill="#064e3b" stroke="#10b981" />
            <text x="76" y="14" fill="#ecfdf5" fontSize="3" fontWeight="bold" textAnchor="middle">OpenAI</text>
            <text x="76" y="20" fill="#a7f3d0" fontSize="2.5" textAnchor="middle">AI Agent</text>

            {/* Shared isolated DB */}
            <rect x="65" y="30" width="22" height="18" rx="4" fill="#0c4a6e" stroke="#0ea5e9" />
            <text x="76" y="38" fill="#e0f2fe" fontSize="3.5" fontWeight="bold" textAnchor="middle">MySQL</text>
            <text x="76" y="44" fill="#38bdf8" fontSize="2.5" textAnchor="middle">Enrollment</text>

            {/* PDF Cert Engine */}
            <rect x="65" y="53" width="22" height="18" rx="4" fill="#1c1917" stroke="#a1a1aa" />
            <text x="76" y="61" fill="#f5f5f7" fontSize="3" fontWeight="bold" textAnchor="middle">Cert Gen</text>
            <text x="76" y="67" fill="#a1a1aa" fontSize="2.5" textAnchor="middle">Automated</text>
          </svg>
          <div className="absolute top-3 right-3 text-[9px] font-mono text-muted-foreground flex items-center gap-1 bg-card/60 px-2 py-1 rounded border border-border">
            <Cpu className="w-3 h-3 text-emerald-400" /> AI Assistant Active
          </div>
        </div>
      ),
    },
    {
      title: "Stadium Booking Platform",
      desc: "A full-stack seat reservation application featuring a Flutter-based mobile interface and a backend focused on high-concurrency engineering. I redesigned a core dashboard metric to track users actively browsing and booking specific facilities rather than generic active users.",
      tags: ["Flutter", "Dart", "Laravel", "PHP", "PostgreSQL", "Docker", "Nginx"],
      features: [
        "Redefined the dashboard analytics to measure users browsing and booking a specific facility — not just generic active users.",
        "Distributed lock mechanism with database pessimistic locking to prevent race conditions during seat selection.",
        "DB transaction isolation (Serializable) to guarantee data integrity under concurrent booking loads.",
        "Built a high-performance mobile application using Flutter and Dart, featuring real-time seat availability and instant status indicators.",
      ],
      github: "https://github.com/mohammeddev-lab/stadium-booking",
      docs: "https://mohammedfares.dev/docs/stadium-booking",
      diagram: (
        <div className="w-full h-full min-h-[200px] flex items-center justify-center bg-zinc-950/40 rounded-xl border border-border/80 p-6 relative overflow-hidden group">
          {/* Traffic flow SVG */}
          <svg className="w-full h-full max-w-[280px]" viewBox="0 0 100 80" fill="none">
            {/* Connection Lines */}
            <motion.path d="M10 40h20" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
            <motion.path d="M50 40h15" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
            <motion.path d="M50 40l15-20" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
            <motion.path d="M50 40l15 20" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
            
            {/* Animated traffic dots */}
            <motion.circle r="1.5" fill="#a5b4fc"
              animate={{ cx: [10, 30], cy: [40, 40] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
            <motion.circle r="1.5" fill="#34d399"
              animate={{ cx: [50, 65], cy: [40, 20] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
            <motion.circle r="1.5" fill="#fb923c"
              animate={{ cx: [50, 65], cy: [40, 60] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
            />

            {/* Nodes */}
            <rect x="5" y="30" width="10" height="20" rx="3" fill="#18181b" stroke="rgba(255,255,255,0.1)" />
            <text x="10" y="42" fill="#a1a1aa" fontSize="4" textAnchor="middle">Client</text>

            <rect x="30" y="25" width="20" height="30" rx="4" fill="#2d0b0b" stroke="#f43f5e" strokeWidth="1" />
            <text x="40" y="37" fill="#ffe4e6" fontSize="4" fontWeight="bold" textAnchor="middle">Laravel</text>
            <text x="40" y="45" fill="#fda4af" fontSize="3" textAnchor="middle">API Node</text>

            {/* DB Lock node */}
            <rect x="65" y="10" width="20" height="20" rx="4" fill="#1c1917" stroke="#ea580c" strokeWidth="1" />
            <text x="75" y="20" fill="#ffedd5" fontSize="4" fontWeight="bold" textAnchor="middle">DB Lock</text>
            <text x="75" y="26" fill="#fdba74" fontSize="3" textAnchor="middle">Queues</text>

            {/* DB Node */}
            <rect x="65" y="50" width="20" height="20" rx="4" fill="#062f4f" stroke="#0ea5e9" strokeWidth="1" />
            <text x="75" y="60" fill="#e0f2fe" fontSize="4" fontWeight="bold" textAnchor="middle">Postgres</text>
            <text x="75" y="66" fill="#38bdf8" fontSize="3" textAnchor="middle">DB Tx</text>
          </svg>
          <div className="absolute top-3 right-3 text-[10px] font-mono text-muted-foreground flex items-center gap-1.5 bg-card/60 px-2 py-1 rounded border border-border">
            <Lock className="w-3 h-3 text-red-400" /> Locking Active
          </div>
        </div>
      ),
    },
    {
      title: "Sports Management SaaS",
      desc: "A modular multi-tenant application that coordinates leagues, schedules matches, and isolates tenant resources safely. Built as a full-stack system with a clean frontend dashboard for managing tenants, leagues, and match schedules.",
      tags: ["Laravel", "PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Docker", "Nginx"],
      features: [
        "Database multi-tenancy model using single database with dynamic tenant scoped middleware.",
        "Match scheduling calculation engine using custom graph traversal pathing algorithms.",
        "Role-Based Access Control (RBAC) supporting complex manager, coach, and athlete scopes.",
        "Responsive frontend dashboard for league management, match scheduling, and tenant administration.",
      ],
      github: "https://github.com/mohammeddev-lab/sports-management-saas",
      diagram: (
        <div className="w-full h-full min-h-[200px] flex items-center justify-center bg-zinc-950/40 rounded-xl border border-border/80 p-6 relative overflow-hidden group">
          {/* Tenant Isolation Diagram */}
          <svg className="w-full h-full max-w-[280px]" viewBox="0 0 100 80" fill="none">
            {/* Paths */}
            <motion.path d="M10 25h20" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <motion.path d="M10 55h20" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <motion.path d="M50 40h15" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            
            {/* Animated flows */}
            <motion.circle r="1" fill="#38bdf8"
              animate={{ cx: [10, 30], cy: [25, 25] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
            />
            <motion.circle r="1" fill="#34d399"
              animate={{ cx: [10, 30], cy: [55, 55] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
            />

            {/* Tenant A & B nodes */}
            <rect x="5" y="15" width="12" height="15" rx="3" fill="#18181b" stroke="#38bdf8" />
            <text x="11" y="24" fill="#38bdf8" fontSize="3" textAnchor="middle">Tenant 1</text>

            <rect x="5" y="45" width="12" height="15" rx="3" fill="#18181b" stroke="#34d399" />
            <text x="11" y="54" fill="#34d399" fontSize="3" textAnchor="middle">Tenant 2</text>

            {/* Laravel Scoping API node */}
            <rect x="30" y="20" width="20" height="40" rx="4" fill="#2d0b0b" stroke="#ea580c" />
            <text x="40" y="36" fill="#ffedd5" fontSize="4" fontWeight="bold" textAnchor="middle">Laravel</text>
            <text x="40" y="44" fill="#fdba74" fontSize="3" textAnchor="middle">Scope Middleware</text>

            {/* Shared isolated DB */}
            <rect x="65" y="25" width="25" height="30" rx="4" fill="#064e3b" stroke="#10b981" />
            <text x="77.5" y="38" fill="#ecfdf5" fontSize="4" fontWeight="bold" textAnchor="middle">MySQL</text>
            <text x="77.5" y="46" fill="#a7f3d0" fontSize="3" textAnchor="middle">Isolated Scopes</text>
          </svg>
          <div className="absolute top-3 right-3 text-[10px] font-mono text-muted-foreground flex items-center gap-1.5 bg-card/60 px-2 py-1 rounded border border-border">
            <GitBranch className="w-3 h-3 text-sky-400" /> Scoped Schema
          </div>
        </div>
      ),
    },

    {
      title: "Stress Detection Backend API",
      desc: "A full-stack real-time analytics system that consumes biometric telemetry data and evaluates physiological stress states, with a Flutter-based mobile interface for monitoring live data streams.",
      tags: ["Flutter", "Dart", "Laravel", "PHP", "MySQL", "Linux", "Swagger"],
      features: [
        "WebSocket server gateway managing persistent connections and real-time telemetry streaming.",
        "Integrated pipeline and worker queue that pipes telemetry data to background ML analysis scripts.",
        "Developed a cross-platform mobile monitoring dashboard using Flutter and Dart to display live telemetry status and stress state indicators.",
        "Comprehensive Swagger/OpenAPI documentation for all API endpoints.",
      ],
      github: "https://github.com/mohammeddev-lab/stress-detection-api",
      diagram: (
        <div className="w-full h-full min-h-[200px] flex items-center justify-center bg-zinc-950/40 rounded-xl border border-border/80 p-6 relative overflow-hidden group">
          {/* WebSocket telemetry flow */}
          <svg className="w-full h-full max-w-[280px]" viewBox="0 0 100 80" fill="none">
            {/* Paths */}
            <motion.path d="M10 40h20" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <motion.path d="M50 40h15" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <motion.path d="M80 40l-15 0" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

            {/* Streaming packet dot */}
            <motion.circle r="1" fill="#f43f5e"
              animate={{ cx: [10, 30], cy: [40, 40] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            />
            <motion.circle r="1" fill="#fbbf24"
              animate={{ cx: [50, 65], cy: [40, 40] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />

            <rect x="5" y="30" width="12" height="20" rx="3" fill="#18181b" stroke="#e11d48" />
            <text x="11" y="41" fill="#fecdd3" fontSize="3" textAnchor="middle">WS Client</text>

            <rect x="30" y="25" width="20" height="30" rx="4" fill="#2d0b0b" stroke="#ea580c" />
            <text x="40" y="38" fill="#ffedd5" fontSize="3.5" fontWeight="bold" textAnchor="middle">Laravel</text>
            <text x="40" y="44" fill="#fdba74" fontSize="2.5" textAnchor="middle">WS Gateway</text>

            {/* Queue */}
            <rect x="65" y="25" width="15" height="30" rx="4" fill="#1c1917" stroke="#a1a1aa" />
            <text x="72.5" y="38" fill="#fee2e2" fontSize="3.5" fontWeight="bold" textAnchor="middle">Queue</text>
            <text x="72.5" y="44" fill="#a1a1aa" fontSize="2.5" textAnchor="middle">Workers</text>

            {/* ML Consumer */}
            <circle cx="88" cy="40" r="5" fill="#064e3b" stroke="#10b981" />
            <text x="88" y="41" fill="#a7f3d0" fontSize="3" fontWeight="bold" textAnchor="middle">ML</text>
          </svg>
          <div className="absolute top-3 right-3 text-[10px] font-mono text-muted-foreground flex items-center gap-1.5 bg-card/60 px-2 py-1 rounded border border-border">
            <Cpu className="w-3 h-3 text-rose-400" /> Real-time Pipelines
          </div>
        </div>
      ),
    },
    {
      title: "Academy (أكاديمتي)",
      desc: "A complete management interface for a Continuing Education Center, built with HTML, CSS, and JavaScript. Handles trainee enrollment, trainer management, course scheduling, registrations, payments, certificates, and reporting — all through a responsive frontend interface.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      features: [
        "Built a responsive multi-page interface for managing trainees, trainers, courses, and enrollment workflows.",
        "Designed data-driven views for payments, certificates, and administrative reporting dashboards.",
        "Implemented interactive forms and dynamic content updates using vanilla JavaScript.",
        "Ensured cross-device compatibility with mobile-first responsive CSS layouts.",
      ],
      github: "https://github.com/mohammeddev-lab/accademy",
      diagram: (
        <div className="w-full h-full min-h-[200px] flex items-center justify-center bg-zinc-950/40 rounded-xl border border-border/80 p-6 relative overflow-hidden group">
          <svg className="w-full h-full max-w-[280px]" viewBox="0 0 100 80" fill="none">
            <motion.path d="M10 40h20" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <motion.path d="M50 40h20" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

            <motion.circle r="1.2" fill="#f59e0b"
              animate={{ cx: [10, 30], cy: [40, 40] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />

            <rect x="5" y="30" width="10" height="20" rx="3" fill="#18181b" stroke="rgba(255,255,255,0.1)" />
            <text x="10" y="42" fill="#a1a1aa" fontSize="3" textAnchor="middle">User</text>

            <rect x="30" y="22" width="20" height="36" rx="4" fill="#0f172a" stroke="#f59e0b" />
            <text x="40" y="34" fill="#fef3c7" fontSize="3.5" fontWeight="bold" textAnchor="middle">HTML5</text>
            <text x="40" y="41" fill="#fbbf24" fontSize="3" textAnchor="middle">CSS3</text>
            <text x="40" y="48" fill="#f59e0b" fontSize="3" textAnchor="middle">JS</text>

            <rect x="65" y="30" width="22" height="20" rx="4" fill="#1c1917" stroke="#a1a1aa" />
            <text x="76" y="39" fill="#f5f5f7" fontSize="3" fontWeight="bold" textAnchor="middle">Academy</text>
            <text x="76" y="45" fill="#a1a1aa" fontSize="2.5" textAnchor="middle">Management</text>
          </svg>
          <div className="absolute top-3 right-3 text-[9px] font-mono text-muted-foreground flex items-center gap-1 bg-card/60 px-2 py-1 rounded border border-border">
            <Layout className="w-3 h-3 text-amber-400" /> Responsive UI
          </div>
        </div>
      ),
    },
    {
      title: "SmartShuttleUoM — Real-Time Shuttle Tracking",
      desc: "A real-time shuttle bus management platform for the University of Mosul, built with React, TypeScript, and Tailwind CSS. Features a live map interface, operations dashboard, and ETA forecasting — all with full RTL Arabic support.",
      tags: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Recharts", "Leaflet", "SSE"],
      features: [
        "Built a real-time interactive map using Leaflet.js with OpenStreetMap tiles for live bus position tracking.",
        "Designed a responsive operations dashboard with Recharts data visualizations for dispatch optimization.",
        "Consumed Server-Sent Events (SSE) endpoints for live data streaming with a polling fallback strategy.",
        "Implemented a fully RTL Arabic interface with Cairo as the default font, ensuring proper layout for Arabic-speaking users.",
      ],
      github: "https://github.com/mohammeddev-lab/SmartShuttleUoM",
      diagram: (
        <div className="w-full h-full min-h-[200px] flex items-center justify-center bg-zinc-950/40 rounded-xl border border-border/80 p-6 relative overflow-hidden group">
          <svg className="w-full h-full max-w-[280px]" viewBox="0 0 100 80" fill="none">
            <motion.path d="M10 40h20" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <motion.path d="M50 30h20" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <motion.path d="M50 50h20" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

            <motion.circle r="1.2" fill="#38bdf8"
              animate={{ cx: [10, 30], cy: [40, 40] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
            <motion.circle r="1.2" fill="#10b981"
              animate={{ cx: [50, 70], cy: [30, 30] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
            />
            <motion.circle r="1.2" fill="#f59e0b"
              animate={{ cx: [50, 70], cy: [50, 50] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
            />

            <rect x="5" y="30" width="10" height="20" rx="3" fill="#18181b" stroke="rgba(255,255,255,0.1)" />
            <text x="10" y="42" fill="#a1a1aa" fontSize="3" textAnchor="middle">Client</text>

            <rect x="30" y="20" width="20" height="40" rx="4" fill="#0f172a" stroke="#38bdf8" />
            <text x="40" y="36" fill="#e0f2fe" fontSize="4" fontWeight="bold" textAnchor="middle">React</text>
            <text x="40" y="44" fill="#7dd3fc" fontSize="2.5" textAnchor="middle">TypeScript</text>
            <text x="40" y="50" fill="#38bdf8" fontSize="2.5" textAnchor="middle">Tailwind</text>

            <rect x="65" y="10" width="22" height="18" rx="4" fill="#064e3b" stroke="#10b981" />
            <text x="76" y="19" fill="#ecfdf5" fontSize="3" fontWeight="bold" textAnchor="middle">Leaflet</text>
            <text x="76" y="25" fill="#a7f3d0" fontSize="2.5" textAnchor="middle">Live Map</text>

            <rect x="65" y="38" width="22" height="18" rx="4" fill="#1c1917" stroke="#f59e0b" />
            <text x="76" y="47" fill="#fef3c7" fontSize="3" fontWeight="bold" textAnchor="middle">Recharts</text>
            <text x="76" y="53" fill="#fbbf24" fontSize="2.5" textAnchor="middle">Dashboard</text>
          </svg>
          <div className="absolute top-3 right-3 text-[9px] font-mono text-muted-foreground flex items-center gap-1 bg-card/60 px-2 py-1 rounded border border-border">
            <Layout className="w-3 h-3 text-sky-400" /> Full RTL Support
          </div>
        </div>
      ),
    },
    {
      title: "Investor Notebook v2 — Investment Organizer",
      desc: "A cross-platform mobile application built with Flutter and Dart for organizing investments, tracking notes, and managing investment records — featuring a custom notebook-inspired UI design system with full RTL Arabic support.",
      tags: ["Flutter", "Dart", "SQLite", "REST API"],
      features: [
        "Designed a custom notebook-inspired UI with a cohesive cream/brown color system for a distinctive visual identity.",
        "Built a complete REST API integration layer with full CRUD operations for investment types and records.",
        "Implemented advanced filtering and full-text search across all records by type, status, and keyword.",
        "Delivered a fully responsive cross-platform layout with proper RTL support across mobile and tablet devices.",
      ],
      github: "https://github.com/mohammeddev-lab/investor-notebookv2",
      diagram: (
        <div className="w-full h-full min-h-[200px] flex items-center justify-center bg-zinc-950/40 rounded-xl border border-border/80 p-6 relative overflow-hidden group">
          <svg className="w-full h-full max-w-[280px]" viewBox="0 0 100 80" fill="none">
            <motion.path d="M10 40h20" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <motion.path d="M50 35h20" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <motion.path d="M50 50h20" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

            <motion.circle r="1.2" fill="#f59e0b"
              animate={{ cx: [10, 30], cy: [40, 40] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />

            <rect x="5" y="30" width="10" height="20" rx="3" fill="#18181b" stroke="rgba(255,255,255,0.1)" />
            <text x="10" y="42" fill="#a1a1aa" fontSize="3" textAnchor="middle">User</text>

            <rect x="30" y="20" width="20" height="40" rx="4" fill="#0f172a" stroke="#38bdf8" />
            <text x="40" y="34" fill="#e0f2fe" fontSize="4" fontWeight="bold" textAnchor="middle">Flutter</text>
            <text x="40" y="42" fill="#7dd3fc" fontSize="2.5" textAnchor="middle">Dart</text>
            <text x="40" y="48" fill="#38bdf8" fontSize="2.5" textAnchor="middle">Mobile</text>

            <rect x="65" y="15" width="22" height="18" rx="4" fill="#1c1917" stroke="#f59e0b" />
            <text x="76" y="24" fill="#fef3c7" fontSize="3" fontWeight="bold" textAnchor="middle">RTL UI</text>
            <text x="76" y="30" fill="#fbbf24" fontSize="2.5" textAnchor="middle">Notebook</text>

            <rect x="65" y="45" width="22" height="16" rx="4" fill="#064e3b" stroke="#10b981" />
            <text x="76" y="53" fill="#ecfdf5" fontSize="3" fontWeight="bold" textAnchor="middle">SQLite</text>
            <text x="76" y="58" fill="#a7f3d0" fontSize="2.5" textAnchor="middle">Local DB</text>
          </svg>
          <div className="absolute top-3 right-3 text-[9px] font-mono text-muted-foreground flex items-center gap-1 bg-card/60 px-2 py-1 rounded border border-border">
            <Layout className="w-3 h-3 text-amber-400" /> Cross-Platform
          </div>
        </div>
      ),
    },
    {
      title: "Portfolio Website — Developer Showcase",
      desc: "A personal portfolio website built with React, TypeScript, and Tailwind CSS — the very site you're viewing. Features animated backgrounds, smooth scroll navigation, and a cinematic hero section.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: [
        "Built with React and TypeScript for type-safe, performant page rendering.",
        "Designed a cinematic hero section with animated word rotation and concentric orbit background.",
        "Implemented smooth scroll navigation between sections with a floating bubble menu.",
        "Configured with ESLint, TypeScript, and Tailwind CSS for maintainable, production-ready code.",
      ],
      github: "https://github.com/mohammeddev-lab/portfolio-website",
      diagram: (
        <div className="w-full h-full min-h-[200px] flex items-center justify-center bg-zinc-950/40 rounded-xl border border-border/80 p-6 relative overflow-hidden group">
          <svg className="w-full h-full max-w-[280px]" viewBox="0 0 100 80" fill="none">
            <motion.path d="M10 40h20" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <motion.path d="M50 40h20" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

            <motion.circle r="1.2" fill="#a855f7"
              animate={{ cx: [10, 30], cy: [40, 40] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
            />
            <motion.circle r="1.2" fill="#38bdf8"
              animate={{ cx: [50, 70], cy: [40, 40] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />

            <rect x="5" y="30" width="10" height="20" rx="3" fill="#18181b" stroke="rgba(255,255,255,0.1)" />
            <text x="10" y="42" fill="#a1a1aa" fontSize="3" textAnchor="middle">User</text>

            <rect x="30" y="22" width="20" height="36" rx="4" fill="#0f172a" stroke="#38bdf8" />
            <text x="40" y="36" fill="#e0f2fe" fontSize="4" fontWeight="bold" textAnchor="middle">React</text>
            <text x="40" y="44" fill="#7dd3fc" fontSize="2.5" textAnchor="middle">TypeScript</text>
            <text x="40" y="50" fill="#38bdf8" fontSize="2.5" textAnchor="middle">Tailwind CSS</text>

            <rect x="65" y="30" width="22" height="20" rx="4" fill="#1c1917" stroke="#a855f7" />
            <text x="76" y="39" fill="#f3e8ff" fontSize="3" fontWeight="bold" textAnchor="middle">Vercel</text>
            <text x="76" y="45" fill="#d8b4fe" fontSize="2.5" textAnchor="middle">Deploy</text>
          </svg>
          <div className="absolute top-3 right-3 text-[9px] font-mono text-muted-foreground flex items-center gap-1 bg-card/60 px-2 py-1 rounded border border-border">
            <Layout className="w-3 h-3 text-purple-400" /> Live Portfolio
          </div>
        </div>
      ),
    },
  ];

  const [alertOpen, setAlertOpen] = useState(false);
  const [selectedProj, setSelectedProj] = useState<string | null>(null);

  const handlePrivateClick = (e: React.MouseEvent, title: string) => {
    e.preventDefault();
    setSelectedProj(title);
    setAlertOpen(true);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 20 },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 w-full px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-16"
    >
      {/* Section Header */}
      <div className="w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-[2px] bg-foreground"></span>
          <span className="text-xs font-bold tracking-widest text-foreground uppercase cursor-target">
            My Portfolio
          </span>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-foreground cursor-target">
            Featured <br /> Projects
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl text-justify cursor-target">
            A curated selection of full-stack projects demonstrating end-to-end software engineering — from requirements gathering and database architecture to backend logic and polished frontend interfaces.
          </p>
        </div>
      </div>

      {/* Projects List */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-12 w-full"
      >
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            variants={projectVariants}
            className="glass-card rounded-2xl p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center cursor-target hover:border-foreground/30 relative overflow-hidden group"
          >
            {/* Subtle glow background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/2 rounded-full blur-[120px] pointer-events-none group-hover:bg-primary/5 transition-colors duration-500" />
            
            {/* Left Column: Project Description */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-foreground">
                  {proj.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify">
                  {proj.desc}
                </p>
              </div>

              {/* Technical Features Checklist */}
              <ul className="flex flex-col gap-2.5">
                {proj.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-muted-foreground/90 leading-snug">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/50 shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {proj.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 text-xs font-semibold rounded-md border border-border bg-card text-muted-foreground/90 font-mono uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex gap-4 items-center pt-2">
                <button
                  onClick={(e) => handlePrivateClick(e, proj.title)}
                  className="cursor-target inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-wider text-foreground hover:text-muted-foreground transition-colors bg-transparent border-none p-0"
                >
                  <GithubIcon className="w-4 h-4" />
                  View Code
                </button>
                
                {proj.docs && (
                  <button
                    onClick={(e) => handlePrivateClick(e, proj.title)}
                    className="cursor-target inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-wider text-foreground hover:text-muted-foreground transition-colors bg-transparent border-none p-0"
                  >
                    <FileText className="w-4 h-4" />
                    API Documentation
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: Interactive Diagram */}
            <div className="lg:col-span-5 w-full h-full min-h-[220px]">
              {proj.diagram}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Private Repository Alert Modal */}
      <AnimatePresence>
        {alertOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-[1002] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="glass-card rounded-2xl p-8 max-w-md w-full flex flex-col gap-6 relative"
            >
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <div className="p-2.5 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500">
                  <Lock className="w-6 h-6" />
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="text-lg font-bold uppercase tracking-tight text-foreground">
                    Private Project
                  </h3>
                  <span className="text-xs text-muted-foreground font-mono">Restricted Access</span>
                </div>
              </div>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-left">
                The source code and documentation for <strong className="text-foreground">{selectedProj}</strong> are hosted in a private repository for security and IP protection.
                <br /><br />
                Access is restricted but can be granted upon request for evaluation. Please contact Mohammed Fares using the form below.
              </p>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => {
                    setAlertOpen(false);
                    const contact = document.getElementById("contact");
                    if (contact) contact.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="cursor-target flex-1 bg-foreground text-background font-bold uppercase tracking-wider rounded-xl py-3.5 text-xs text-center hover:scale-[1.02] active:scale-[0.98] transition-transform"
                >
                  Request Access
                </button>
                <button
                  onClick={() => setAlertOpen(false)}
                  className="cursor-target flex-1 bg-card hover:bg-accent border border-border text-foreground font-bold uppercase tracking-wider rounded-xl py-3.5 text-xs hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
