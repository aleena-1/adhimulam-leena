"use client";

import SectionTitle from "@/components/SectionTitle";
import { portfolio } from "@/data/portfolio";
import { BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <SectionTitle eyebrow="Certifications" title="Verified Learning" />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {portfolio.certifications.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-120px" }}
            transition={{ duration: 0.65, delay: index * 0.07, ease: "easeOut" }}
            className="glass-panel p-6"
          >
            <BadgeCheck className="text-cyanline" />
            <h3 className="mt-8 font-display text-2xl font-black uppercase text-white">{item}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
