"use client";

import MagneticButton from "@/components/MagneticButton";
import HeroTechScene from "@/components/three/HeroTechScene";
import { portfolio } from "@/data/portfolio";
import { ArrowDown, Download, Github, Linkedin, Mail, ShieldCheck, UserRound } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { MouseEvent, useMemo, useState } from "react";

const contactCards = [
  {
    label: "GitHub",
    action: "View Projects",
    href: portfolio.links.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    action: "Connect",
    href: portfolio.links.linkedin,
    icon: Linkedin,
  },
  {
    label: "Email",
    action: "Let's Talk",
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${portfolio.email}`,
    icon: Mail,
  },
];

export default function Hero() {
  const [hasPortrait, setHasPortrait] = useState(Boolean(portfolio.portrait.src));
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 22, mass: 0.4 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 22, mass: 0.4 });
  const contentX = useTransform(smoothX, [-1, 1], [-18, 18]);
  const contentY = useTransform(smoothY, [-1, 1], [-10, 10]);
  const bgX = useTransform(smoothX, [-1, 1], [30, -30]);
  const bgY = useTransform(smoothY, [-1, 1], [18, -18]);
  const cardRotateX = useTransform(smoothY, [-1, 1], [4, -4]);
  const cardRotateY = useTransform(smoothX, [-1, 1], [-5, 5]);

  const pointer = useMemo(() => ({ x: 0, y: 0 }), []);

  const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const nextX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const nextY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    pointer.x = nextX;
    pointer.y = nextY;
    pointerX.set(nextX);
    pointerY.set(nextY);
  };

  const resetPointer = () => {
    pointer.x = 0;
    pointer.y = 0;
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      id="home"
      onMouseMove={handlePointerMove}
      onMouseLeave={resetPointer}
      className="noise-overlay relative flex min-h-screen items-center overflow-hidden px-5 pb-24 pt-28 sm:px-8 lg:pb-14"
    >
      <motion.div style={{ x: bgX, y: bgY }} className="cyber-hero-grid absolute inset-0 opacity-80" />
      <motion.div style={{ x: bgX, y: bgY }} className="particle-field absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_25%,rgba(32,231,255,0.2),transparent_28rem),radial-gradient(circle_at_35%_68%,rgba(155,92,255,0.18),transparent_26rem),linear-gradient(to_bottom,rgba(5,7,15,0.1),#05070f_95%)]" />
      <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyanline/10 blur-[110px]" />
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
      <div className="pointer-events-none absolute inset-x-0 top-16 h-60 bg-[linear-gradient(to_bottom,rgba(32,231,255,0.12),transparent)] blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] xl:grid-cols-[minmax(0,1fr)_430px]">
        <motion.div style={{ x: contentX, y: contentY }} className="min-w-0">
          <div className="relative h-64 w-full overflow-hidden border border-cyanline/10 bg-black/10 sm:h-72 lg:h-80">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(32,231,255,0.13),transparent_22rem)]" />
            <HeroTechScene pointer={pointer} />
          </div>
          <div className="relative -mt-20">
            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="max-w-4xl font-display text-[clamp(3.2rem,7.4vw,7.4rem)] font-black uppercase leading-[0.86] tracking-normal text-white"
            >
              {portfolio.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.35, ease: "easeOut" }}
              className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-cyanline sm:text-2xl"
            >
              {portfolio.role}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.5, ease: "easeOut" }}
              className="mt-5 max-w-2xl text-base leading-8 text-white/68 sm:text-lg"
            >
              {portfolio.description}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.65, ease: "easeOut" }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <MagneticButton href="#projects" icon={ArrowDown} variant="primary">
              View Projects
            </MagneticButton>
            <MagneticButton href={portfolio.resume} icon={Download} download>
              Resume
            </MagneticButton>
          </motion.div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-[26rem] lg:mx-0 lg:justify-self-end">
          <motion.div
            initial={{ opacity: 0, y: 34, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ y: -8, scale: 1.015 }}
            style={{ rotateX: cardRotateX, rotateY: cardRotateY, transformPerspective: 1100 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="glass-panel profile-tilt-card relative overflow-hidden p-3 shadow-glow sm:p-4"
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
                  className="z-10 object-cover object-[center_28%]"
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
            transition={{ duration: 0.75, delay: 0.45, ease: "easeOut" }}
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
            <div className="mt-5 hidden gap-3 lg:grid">
              {contactCards.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 border border-white/10 bg-white/[0.04] p-4 outline-none transition hover:-translate-y-1 hover:border-cyanline/60 hover:bg-cyanline/10 focus-visible:ring-2 focus-visible:ring-cyanline focus-visible:ring-offset-2 focus-visible:ring-offset-void"
                  >
                    <span className="grid h-12 w-12 place-items-center border border-cyanline/25 bg-cyanline/10 text-cyanline transition group-hover:shadow-glow">
                      <Icon size={21} />
                    </span>
                    <span>
                      <span className="block text-sm font-black uppercase tracking-[0.18em] text-white">{item.label}</span>
                      <span className="mt-1 block text-xs font-semibold text-white/50">{item.action}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="fixed bottom-5 left-1/2 z-40 flex -translate-x-1/2 gap-2 rounded-full border border-white/10 bg-black/45 p-2 shadow-glow backdrop-blur-xl lg:hidden">
        {contactCards.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${item.label}: ${item.action}`}
              className="group relative grid h-14 w-14 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white/75 outline-none transition hover:-translate-y-2 hover:border-cyanline hover:text-cyanline focus-visible:ring-2 focus-visible:ring-cyanline"
            >
              <Icon size={21} />
              <span className="pointer-events-none absolute -top-9 scale-90 whitespace-nowrap border border-white/10 bg-black/80 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.16em] opacity-0 transition group-hover:scale-100 group-hover:opacity-100">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
