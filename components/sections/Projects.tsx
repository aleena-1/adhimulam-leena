"use client";

import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { portfolio } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionTitle eyebrow="Featured Projects" title="Mission-Critical Builds" />
        <p className="max-w-md text-sm leading-7 text-white/58">
          Selected work across AI systems, full-stack products, deployment, realtime interfaces, and research-backed engineering.
        </p>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {portfolio.projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
