"use client";

import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

type ProjectCardProps = {
  project: {
    title: string;
    description: string;
    github: string;
    demo?: string;
    stack: string[];
  };
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: "easeOut" }}
      className="group relative overflow-hidden border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyanline/60 hover:shadow-glow"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyanline to-transparent opacity-50" />
      <div className="mb-10 h-36 overflow-hidden border border-white/10 bg-black/30">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 command-card-grid opacity-70" />
          <div className="absolute left-8 top-8 h-16 w-16 border border-cyanline/40 bg-cyanline/10 shadow-glow" />
          <div className="absolute bottom-8 right-8 h-20 w-32 border border-violetline/40 bg-violetline/10 shadow-violet" />
          <div className="absolute inset-x-6 bottom-5 h-px bg-gradient-to-r from-cyanline via-violetline to-transparent" />
        </div>
      </div>
      <h3 className="font-display text-2xl font-black uppercase leading-none text-white">{project.title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/68">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-white/70">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 border border-white/15 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:border-cyanline hover:text-cyanline"
        >
          <Github size={16} />
          GitHub
        </a>
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-cyanline px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-void transition hover:bg-white"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}
