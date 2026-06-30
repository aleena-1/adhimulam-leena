"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { MouseEvent, ReactNode } from "react";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  icon: LucideIcon;
  download?: boolean;
  variant?: "primary" | "secondary";
};

export default function MagneticButton({ href, children, icon: Icon, download, variant = "secondary" }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 16, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 180, damping: 16, mass: 0.3 });

  const handleMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.24);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.24);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      download={download}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.98 }}
      className={`group relative inline-flex min-h-14 overflow-hidden border px-6 py-4 text-sm font-black uppercase tracking-[0.2em] outline-none transition focus-visible:ring-2 focus-visible:ring-cyanline focus-visible:ring-offset-2 focus-visible:ring-offset-void ${
        variant === "primary"
          ? "border-cyanline bg-cyanline text-void shadow-glow hover:bg-white"
          : "border-white/15 bg-white/[0.035] text-white hover:border-cyanline hover:text-cyanline"
      }`}
    >
      <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition duration-700 group-hover:translate-x-[120%]" />
      <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 transition-all duration-500 group-hover:h-32 group-hover:w-32" />
      <span className="relative z-10 flex items-center gap-3">
        {children}
        <Icon size={18} className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
      </span>
    </motion.a>
  );
}
