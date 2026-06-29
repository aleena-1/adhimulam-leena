"use client";

import SectionTitle from "@/components/SectionTitle";
import { portfolio } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionTitle eyebrow="Education" title="Academic Trajectory" />
      <div className="mt-12 grid gap-5">
        {portfolio.education.map((item, index) => (
          <motion.div
            key={item.institution}
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-120px" }}
            transition={{ duration: 0.65, delay: index * 0.08, ease: "easeOut" }}
            className="glass-panel grid gap-5 p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center"
          >
            <div className="grid h-14 w-14 place-items-center border border-cyanline/40 bg-cyanline/10 text-cyanline">
              <GraduationCap />
            </div>
            <div>
              <h3 className="font-display text-2xl font-black uppercase text-white">{item.institution}</h3>
              <p className="mt-2 text-white/65">{item.program}</p>
            </div>
            <div className="text-left sm:text-right">
              {item.period ? <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyanline">{item.period}</p> : null}
              <p className="mt-2 text-white/75">{item.score}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
