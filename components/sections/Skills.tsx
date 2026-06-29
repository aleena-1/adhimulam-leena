"use client";

import SectionTitle from "@/components/SectionTitle";
import { portfolio } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionTitle eyebrow="Skills" title="Technical Arsenal" align="center" />
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {Object.entries(portfolio.skills).map(([group, items], index) => (
          <motion.div
            key={group}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65, delay: index * 0.06, ease: "easeOut" }}
            className="glass-panel p-6"
          >
            <h3 className="font-display text-2xl font-black uppercase text-white">{group}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className="border border-cyanline/20 bg-cyanline/5 px-3 py-2 text-sm font-semibold text-white/72">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
