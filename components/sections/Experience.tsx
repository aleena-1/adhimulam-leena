"use client";

import SectionTitle from "@/components/SectionTitle";
import { portfolio } from "@/data/portfolio";
import { BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionTitle eyebrow="Experience" title="Applied Build Work" />
        <div className="grid gap-5">
          {portfolio.experience.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
              className="glass-panel p-6 sm:p-8"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="grid h-14 w-14 shrink-0 place-items-center border border-violetline/40 bg-violetline/10 text-violetline">
                  <BriefcaseBusiness />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyanline">{item.period}</p>
                  <h3 className="mt-3 font-display text-3xl font-black uppercase leading-none text-white">
                    {item.role} - {item.company}
                  </h3>
                  <p className="mt-5 leading-8 text-white/68">{item.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
