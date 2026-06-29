"use client";

import { portfolio } from "@/data/portfolio";
import { ArrowDown, Cpu, Download, Github, Linkedin, Mail, ShieldCheck, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [hasPortrait, setHasPortrait] = useState(Boolean(portfolio.portrait.src));

  return (
    <section id="home" className="noise-overlay relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:pb-10">
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

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] xl:grid-cols-[minmax(0,1fr)_430px]">
        <div className="min-w-0">
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.55, ease: "easeOut" }}
            className="max-w-4xl font-display text-[clamp(3.2rem,7.4vw,7.4rem)] font-black uppercase leading-[0.86] tracking-normal text-white"
          >
            {portfolio.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.75, ease: "easeOut" }}
            className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-cyanline sm:text-2xl"
          >
            {portfolio.role}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.9, ease: "easeOut" }}
            className="mt-5 max-w-2xl text-base leading-8 text-white/68 sm:text-lg"
          >
            {portfolio.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 2.05, ease: "easeOut" }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#projects" className="inline-flex items-center gap-3 bg-cyanline px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-void transition hover:bg-white">
              View Projects <ArrowDown size={18} />
            </a>
            <a href={portfolio.resume} download className="inline-flex items-center gap-3 border border-white/15 px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:border-cyanline hover:text-cyanline">
              Resume <Download size={18} />
            </a>
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-[26rem] lg:mx-0 lg:justify-self-end">
          <motion.div
            initial={{ opacity: 0, y: 34, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 2.0, ease: "easeOut" }}
            className="glass-panel relative overflow-hidden p-3 shadow-glow sm:p-4"
          >
            <div className="command-card-grid absolute inset-0 opacity-25" />
            <div className="absolute inset-x-10 top-8 h-px bg-gradient-to-r from-transparent via-cyanline to-transparent" />
            <div className="relative aspect-[4/5] min-h-[24rem] overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_50%_12%,rgba(32,231,255,0.26),transparent_19rem),linear-gradient(160deg,rgba(255,255,255,0.08),rgba(5,7,15,0.9))] sm:min-h-[27rem]">
              <motion.div
                animate={{ y: [0, -18, 0], opacity: [0.35, 0.6, 0.35] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 top-8 h-72 w-72 -translate-x-1/2 rounded-full border border-cyanline/20"
              />
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-16 h-56 w-56 -translate-x-1/2 rounded-full border border-dashed border-violetline/25"
              />
              {hasPortrait && portfolio.portrait.src ? (
                <Image
                  src={portfolio.portrait.src}
                  alt={portfolio.portrait.alt}
                  onError={() => setHasPortrait(false)}
                  fill
                  priority
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="z-10 object-cover object-center"
                />
              ) : (
                <div className="absolute inset-x-8 bottom-0 z-10 flex h-[88%] items-end justify-center">
                  <div className="relative h-full w-full max-w-sm">
                    <div className="absolute left-1/2 top-14 h-40 w-40 -translate-x-1/2 rounded-full border border-cyanline/40 bg-cyanline/10 shadow-glow" />
                    <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-t-[10rem] border border-violetline/35 bg-gradient-to-b from-violetline/15 to-black/55" />
                    <UserRound className="absolute left-1/2 top-24 -translate-x-1/2 text-cyanline/70" size={96} strokeWidth={1.2} />
                  </div>
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-void via-void/70 to-transparent" />
              <div className="absolute left-5 top-5 z-20 flex items-center gap-3 border border-white/10 bg-black/35 px-3 py-2 backdrop-blur-md">
                <Cpu size={16} className="text-cyanline" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">Profile Core</span>
              </div>
              <div className="absolute bottom-6 left-5 right-5 z-30">
                <p className="font-display text-3xl font-black uppercase leading-none text-white sm:text-4xl">
                  Developer Profile
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-cyanline">
                  Full Stack | AI | Cybersecurity
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 2.15, ease: "easeOut" }}
            className="glass-panel relative mt-4 p-4 sm:p-5"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/50">Systems Profile</p>
              <ShieldCheck className="text-cyanline" size={20} />
            </div>
            <div className="mt-5 grid gap-3">
              {["Full-stack builds", "AI research", "Cybersecurity mindset", "Distributed systems"].map((item) => (
                <div key={item} className="flex items-center justify-between gap-4 border border-white/10 bg-white/[0.035] p-3">
                  <span className="text-xs font-semibold text-white/80">{item}</span>
                  <span className="h-2 w-10 bg-gradient-to-r from-cyanline to-violetline" />
                </div>
              ))}
            </div>
            <div className="mt-5 flex gap-3">
              <a href={portfolio.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-12 w-12 place-items-center border border-white/10 text-white/70 transition hover:border-cyanline hover:text-cyanline">
                <Github size={19} />
              </a>
              <a href={portfolio.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-12 w-12 place-items-center border border-white/10 text-white/70 transition hover:border-cyanline hover:text-cyanline">
                <Linkedin size={19} />
              </a>
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolio.email}`} target="_blank" rel="noreferrer" aria-label="Email" className="grid h-12 w-12 place-items-center border border-white/10 text-white/70 transition hover:border-cyanline hover:text-cyanline">
                <Mail size={19} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
