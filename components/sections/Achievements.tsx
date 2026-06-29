"use client";

import SectionTitle from "@/components/SectionTitle";
import { portfolio } from "@/data/portfolio";
import { Trophy } from "lucide-react";
import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionTitle eyebrow="Achievements" title="Signals Of Momentum" />
        <div className="grid gap-4">
          {portfolio.achievements.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-120px" }}
              transition={{ duration: 0.62, delay: index * 0.06, ease: "easeOut" }}
              className="glass-panel flex gap-4 p-5"
            >
              <Trophy className="mt-1 shrink-0 text-cyanline" size={21} />
              <p className="font-semibold leading-7 text-white/76">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
