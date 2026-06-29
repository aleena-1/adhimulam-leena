"use client";

import SectionTitle from "@/components/SectionTitle";
import { portfolio } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <SectionTitle eyebrow="About" title="Engineer In Formation" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glass-panel p-6 sm:p-8"
        >
          <p className="text-lg leading-9 text-white/72">{portfolio.about}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["CGPA 9.48/10", "MERN + AI", "Research Contributor"].map((stat) => (
              <div key={stat} className="border border-white/10 bg-black/25 p-4">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyanline">{stat}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
