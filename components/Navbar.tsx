"use client";

import { navItems, portfolio } from "@/data/portfolio";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-void/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center border border-cyanline/60 bg-cyanline/10 font-display text-lg font-black text-white shadow-glow">
            AL
          </span>
          <span className="hidden text-sm font-bold uppercase tracking-[0.22em] text-white sm:block">
            {portfolio.name}
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 transition hover:text-cyanline"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center border border-white/15 text-white transition hover:border-cyanline hover:text-cyanline lg:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-void/95 lg:hidden"
          >
            <div className="grid gap-1 px-5 py-5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="border border-white/10 px-4 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white/75"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
