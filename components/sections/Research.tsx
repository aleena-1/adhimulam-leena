"use client";

import SectionTitle from "@/components/SectionTitle";
import { portfolio } from "@/data/portfolio";
import { BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

export default function Research() {
  return (
    <section id="research" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionTitle eyebrow="Research" title="Edge Intelligence" />
        <div className="grid gap-5">
          {portfolio.research.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-120px" }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
              className="glass-panel p-6 sm:p-8"
            >
              <div className="grid h-14 w-14 place-items-center border border-cyanline/40 bg-cyanline/10 text-cyanline">
                <BrainCircuit />
              </div>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.22em] text-violetline">{item.status}</p>
              <h3 className="mt-3 font-display text-3xl font-black uppercase leading-none text-white">{item.title}</h3>
              <p className="mt-5 leading-8 text-white/68">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
