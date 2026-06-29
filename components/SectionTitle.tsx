"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
};

export default function SectionTitle({ eyebrow, title, align = "left" }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyanline">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-black uppercase leading-[0.9] text-white sm:text-5xl lg:text-7xl">
        {title}
      </h2>
    </motion.div>
  );
}
