"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

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

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormState({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/mohammed-fares-1180a5351?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: <LinkedinIcon className="w-5 h-5" /> },
    { name: "GitHub", href: "https://github.com/mohammeddev-lab", icon: <GithubIcon className="w-5 h-5" /> },
    { name: "Instagram", href: "https://www.instagram.com/ydy_132?igsh=anlhemFxNXZncXd3", icon: <InstagramIcon className="w-5 h-5" /> },
  ];

  return (
    <section
      id="contact"
      className="py-24 w-full px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-16"
    >
      {/* Section Header */}
      <div className="w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-[2px] bg-foreground"></span>
          <span className="text-xs font-bold tracking-widest text-foreground uppercase cursor-target">
            Get In Touch
          </span>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-foreground cursor-target">
            Let&apos;s Work <br /> Together
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl text-justify cursor-target">
            I am available for Software Engineer roles, full-stack projects, and collaborative engineering opportunities. Reach out if you want to build something meaningful together.
          </p>
        </div>
      </div>

      {/* Grid Layout: Info & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Side: Info & Socials */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-12">
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground cursor-target">
              Contact Details
            </h3>

            <div className="flex flex-col gap-6">
              {/* Email */}
              <div className="flex items-center gap-4 cursor-target group">
                <div className="p-3.5 bg-card border border-border rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Email Address</span>
                  <a
                    href="mailto:mohammedfares200312@gmail.com"
                    className="text-base font-semibold text-foreground hover:text-muted-foreground transition-colors"
                  >
                    mohammedfares200312@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 cursor-target">
                <div className="p-3.5 bg-card border border-border rounded-xl">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Base Location</span>
                  <span className="text-base font-semibold text-foreground">
                    Mosul, Iraq
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80 font-mono">
              Find Me On
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-border bg-card flex items-center justify-center cursor-target hover:scale-110 hover:border-foreground/30 hover:bg-accent transition-all duration-300 shadow-sm"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-7 glass-card rounded-2xl p-8 md:p-10 cursor-target relative overflow-hidden"
        >
          {/* Subtle glow background */}
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 font-mono">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formState.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-card/40 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-foreground/30 focus:ring-1 focus:ring-foreground/20 transition-all font-sans"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 font-mono">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formState.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-card/40 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-foreground/30 focus:ring-1 focus:ring-foreground/20 transition-all font-sans"
              />
            </div>

            {/* Message Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 font-mono">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formState.message}
                onChange={handleChange}
                placeholder="Let's build something great..."
                className="w-full bg-card/40 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-foreground/30 focus:ring-1 focus:ring-foreground/20 transition-all font-sans resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold uppercase tracking-wider rounded-xl py-4 text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? (
                "Encrypting Connection..."
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Success Alert */}
            {success && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-semibold text-center text-emerald-400 font-mono"
              >
                Secure packet sent successfully! I will ping you back soon.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>

      {/* Footer copyright */}
      <div className="w-full border-t border-border/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-foreground">
        <span>© {new Date().getFullYear()} Mohammed Fares. All rights reserved.</span>
        <span>Uptime guaranteed at 99.99%</span>
      </div>
    </section>
  );
}
