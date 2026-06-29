"use client";

import SectionTitle from "@/components/SectionTitle";
import { portfolio } from "@/data/portfolio";
import { UsersRound } from "lucide-react";
import { motion } from "framer-motion";

export default function Leadership() {
  return (
    <section id="leadership" className="section-shell">
      <SectionTitle eyebrow="Leadership" title="Community Systems" align="center" />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {portfolio.leadership.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-120px" }}
            transition={{ duration: 0.65, delay: index * 0.07, ease: "easeOut" }}
            className="glass-panel p-6 text-center"
          >
            <div className="mx-auto grid h-14 w-14 place-items-center border border-violetline/40 bg-violetline/10 text-violetline">
              <UsersRound />
            </div>
            <h3 className="mt-7 font-display text-2xl font-black uppercase text-white">{item}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
