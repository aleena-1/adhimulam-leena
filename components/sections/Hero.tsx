"use client";

import { portfolio } from "@/data/portfolio";
import { ArrowDown, Github, Linkedin, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="noise-overlay relative flex min-h-screen items-center overflow-hidden px-5 pt-28 sm:px-8">
      <motion.div
        animate={{ y: [0, -22, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-7rem] top-32 h-72 w-72 border border-cyanline/30 bg-cyanline/10 blur-sm sm:right-10"
      />
      <motion.div
        animate={{ y: [0, 28, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[-9rem] h-80 w-80 rounded-full border border-violetline/30 bg-violetline/10 blur-sm sm:left-8"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,7,15,0.12),#05070f_92%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.55, ease: "easeOut" }}
            className="mb-8 inline-flex items-center gap-3 border border-cyanline/30 bg-cyanline/10 px-4 py-3 text-xs font-bold uppercase tracking-[0.24em] text-cyanline"
          >
            <Sparkles size={16} />
            AI Command Center Online
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.7, ease: "easeOut" }}
            className="font-display text-[clamp(4rem,14vw,12rem)] font-black uppercase leading-[0.78] tracking-normal text-white"
          >
            {portfolio.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.9, ease: "easeOut" }}
            className="mt-8 max-w-3xl text-lg font-semibold leading-8 text-cyanline sm:text-2xl"
          >
            {portfolio.role}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 2.05, ease: "easeOut" }}
            className="mt-5 max-w-2xl text-base leading-8 text-white/68 sm:text-lg"
          >
            {portfolio.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 2.2, ease: "easeOut" }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a href="#projects" className="inline-flex items-center gap-3 bg-cyanline px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-void transition hover:bg-white">
              View Projects <ArrowDown size={18} />
            </a>
            <a href={`mailto:${portfolio.email}`} className="inline-flex items-center gap-3 border border-white/15 px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:border-cyanline hover:text-cyanline">
              Contact Me <Mail size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.0, ease: "easeOut" }}
          className="glass-panel relative mb-12 p-5 shadow-glow lg:mb-20"
        >
          <div className="command-card-grid absolute inset-0 opacity-25" />
          <div className="relative border border-white/10 bg-black/30 p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/50">Systems Profile</p>
              <ShieldCheck className="text-cyanline" size={20} />
            </div>
            <div className="mt-6 grid gap-4">
              {["Full-stack builds", "AI research", "Cybersecurity mindset", "Distributed systems"].map((item) => (
                <div key={item} className="flex items-center justify-between border border-white/10 bg-white/[0.035] p-4">
                  <span className="text-sm font-semibold text-white/80">{item}</span>
                  <span className="h-2 w-12 bg-gradient-to-r from-cyanline to-violetline" />
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <a href={portfolio.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-12 w-12 place-items-center border border-white/10 text-white/70 transition hover:border-cyanline hover:text-cyanline">
                <Github size={19} />
              </a>
              <a href={portfolio.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-12 w-12 place-items-center border border-white/10 text-white/70 transition hover:border-cyanline hover:text-cyanline">
                <Linkedin size={19} />
              </a>
              <a href={`mailto:${portfolio.email}`} aria-label="Email" className="grid h-12 w-12 place-items-center border border-white/10 text-white/70 transition hover:border-cyanline hover:text-cyanline">
                <Mail size={19} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
