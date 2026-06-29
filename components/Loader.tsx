"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 1500);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, pointerEvents: "none" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="fixed inset-0 z-[100] grid place-items-center bg-void"
        >
          <div className="relative flex flex-col items-center gap-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.35, repeat: Infinity, ease: "linear" }}
              className="h-24 w-24 rounded-full border border-cyanline/20 border-t-cyanline shadow-glow"
            />
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-cyanline">Initializing Command Center</p>
              <p className="mt-3 font-display text-3xl font-black uppercase text-white">Adhimulam Leena</p>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
