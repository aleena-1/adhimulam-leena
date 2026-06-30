"use client";

import SectionTitle from "@/components/SectionTitle";
import { portfolio } from "@/data/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  Brain,
  Check,
  Cloud,
  Code2,
  Download,
  Rocket,
  Search,
  Shield,
  Target,
  Trophy,
  UsersRound,
} from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

const aiAnswers = {
  Projects:
    "Leena has built MERN stack projects including a personal blog website and PredictMaint, focusing on authentication, CRUD, APIs, responsive UI, and deployment.",
  Skills:
    "Leena works with Java, Python, JavaScript, React, Node.js, Express, MongoDB, Tailwind CSS, Git, GitHub, Postman, DBMS, OOP, and DSA.",
  Internship:
    "Leena worked as a Software Developer Intern at Mitt Arv, contributing to full-stack development using React, Node.js, Express, MongoDB, Tailwind CSS, REST APIs, Git, and Agile practices.",
  Research:
    "Leena has co-authored an IEEE conference research paper on Collaborative Edge Intelligence, currently under review.",
  Resume: "Download Leena's resume to see her education, projects, certifications, achievements, and technical experience in one place.",
  Contact: "Reach Leena through email, LinkedIn, or GitHub for internships, collaborations, and project discussions.",
};

const traits = [
  { label: "Problem Solver", icon: Brain },
  { label: "Full Stack", icon: Code2 },
  { label: "AI Enthusiast", icon: Bot },
  { label: "Cybersecurity", icon: Shield },
  { label: "Cloud Curious", icon: Cloud },
  { label: "Leadership", icon: UsersRound },
  { label: "Hackathons", icon: Trophy },
  { label: "Research", icon: Search },
];

const fallbackAnswer = "I can help with Leena's projects, skills, internship, research, resume, or contact details.";

type QuestKey = "ai" | "builder" | "projects" | "skills" | "experience" | "contact";

const questTasks: Array<{ key: QuestKey; label: string; target?: string }> = [
  { key: "ai", label: "Meet Leena AI" },
  { key: "builder", label: "Build Your Developer" },
  { key: "projects", label: "Explore Projects", target: "projects" },
  { key: "skills", label: "Discover Skills", target: "skills" },
  { key: "experience", label: "View Experience", target: "experience" },
  { key: "contact", label: "Contact Leena", target: "contact" },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

type InteractiveCardProps = {
  children: React.ReactNode;
  className?: string;
};

function InteractiveCard({ children, className = "" }: InteractiveCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-120px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={`glass-panel group relative overflow-hidden p-5 transition hover:-translate-y-1 hover:border-cyanline/50 hover:shadow-glow sm:p-6 ${className}`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyanline to-transparent opacity-60" />
      <div className="command-card-grid pointer-events-none absolute inset-0 opacity-15" />
      <div className="relative z-10">{children}</div>
    </motion.article>
  );
}

type InteractiveProps = {
  markQuest?: (key: QuestKey) => void;
};

function LeenaAI({ markQuest }: InteractiveProps) {
  const [active, setActive] = useState<keyof typeof aiAnswers>("Projects");
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState(aiAnswers.Projects);

  const chooseAnswer = (key: keyof typeof aiAnswers) => {
    setActive(key);
    setAnswer(aiAnswers[key]);
    markQuest?.("ai");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalized = input.toLowerCase();
    const match = Object.keys(aiAnswers).find((key) => normalized.includes(key.toLowerCase())) as keyof typeof aiAnswers | undefined;
    if (match) {
      chooseAnswer(match);
      return;
    }
    setActive("Projects");
    setAnswer(fallbackAnswer);
    markQuest?.("ai");
  };

  return (
    <InteractiveCard className="lg:col-span-2">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyanline">Leena AI</p>
          <h3 className="mt-3 font-display text-3xl font-black uppercase leading-none text-white">Portfolio Assistant</h3>
          <p className="mt-4 text-sm leading-7 text-white/60">Ask quick questions about Leena.</p>
        </div>
        <span className="grid h-14 w-14 shrink-0 place-items-center border border-cyanline/30 bg-cyanline/10 text-cyanline shadow-glow">
          <Bot />
        </span>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {Object.keys(aiAnswers).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => chooseAnswer(key as keyof typeof aiAnswers)}
            className={`border px-3 py-2 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyanline focus-visible:ring-offset-2 focus-visible:ring-offset-void ${
              active === key ? "border-cyanline bg-cyanline text-void" : "border-white/10 bg-white/[0.04] text-white/68 hover:border-cyanline hover:text-cyanline"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-3">
        <div className="max-w-[85%] border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-white/68">
          What would you like to know?
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={answer}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="ml-auto max-w-[92%] border border-cyanline/25 bg-cyanline/10 p-4 text-sm leading-7 text-white"
          >
            {answer}
            {active === "Resume" ? (
              <a href={portfolio.resume} download className="mt-4 inline-flex items-center gap-2 border border-cyanline/40 px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-cyanline transition hover:bg-cyanline hover:text-void">
                Download Resume <Download size={16} />
              </a>
            ) : null}
            {active === "Contact" ? (
              <div className="mt-4 flex flex-wrap gap-2">
                <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolio.email}`} target="_blank" rel="noreferrer" className="border border-cyanline/40 px-3 py-2 text-xs font-bold text-cyanline">
                  Email
                </a>
                <a href={portfolio.links.linkedin} target="_blank" rel="noreferrer" className="border border-cyanline/40 px-3 py-2 text-xs font-bold text-cyanline">
                  LinkedIn
                </a>
                <a href={portfolio.links.github} target="_blank" rel="noreferrer" className="border border-cyanline/40 px-3 py-2 text-xs font-bold text-cyanline">
                  GitHub
                </a>
              </div>
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 flex gap-2">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask about Leena..."
          className="min-w-0 flex-1 border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-cyanline"
        />
        <button type="submit" className="border border-cyanline/40 px-4 py-3 text-sm font-black uppercase tracking-[0.16em] text-cyanline transition hover:bg-cyanline hover:text-void focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyanline">
          Ask
        </button>
      </form>
    </InteractiveCard>
  );
}

function BuildDeveloper({ markQuest }: InteractiveProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleTrait = (label: string) => {
    setSelected((current) => {
      const next = current.includes(label) ? current.filter((item) => item !== label) : [...current, label];
      if (next.length >= 5) markQuest?.("builder");
      return next;
    });
  };

  const specialAbility = useMemo(() => {
    if (selected.includes("AI Enthusiast") && selected.includes("Cybersecurity")) return "Builds secure AI applications.";
    if (selected.includes("Full Stack") && selected.includes("Cloud Curious")) return "Ships scalable web applications.";
    if (selected.includes("Leadership") && selected.includes("Hackathons")) return "Turns ideas into winning prototypes.";
    if (selected.includes("Research")) return "Connects engineering with research impact.";
    return "Builds clean, useful, user-focused software.";
  }, [selected]);

  return (
    <InteractiveCard>
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-violetline">Build Your Developer</p>
          <h3 className="mt-3 font-display text-3xl font-black uppercase leading-none text-white">Choose Traits</h3>
          <p className="mt-4 text-sm leading-7 text-white/60">Choose the traits you value in a developer.</p>
        </div>
        <span className="grid h-14 w-14 shrink-0 place-items-center border border-violetline/30 bg-violetline/10 text-violetline shadow-violet">
          <Rocket />
        </span>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-sm font-bold text-white/70">Selected {selected.length} / {traits.length} traits</p>
        {selected.length >= 5 ? <p className="text-sm font-black uppercase tracking-[0.16em] text-cyanline">Perfect Match Found</p> : null}
      </div>
      <div className="mt-3 h-2 overflow-hidden bg-white/10">
        <motion.div animate={{ width: `${(selected.length / traits.length) * 100}%` }} className="h-full bg-gradient-to-r from-cyanline to-violetline" />
      </div>

      <div className="mt-6 grid gap-2 sm:grid-cols-2">
        {traits.map((trait) => {
          const Icon = trait.icon;
          const active = selected.includes(trait.label);
          return (
            <button
              key={trait.label}
              type="button"
              onClick={() => toggleTrait(trait.label)}
              className={`flex items-center gap-3 border p-3 text-left text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyanline focus-visible:ring-offset-2 focus-visible:ring-offset-void ${
                active ? "border-cyanline bg-cyanline/15 text-white shadow-glow" : "border-white/10 bg-white/[0.035] text-white/64 hover:border-cyanline hover:text-cyanline"
              }`}
            >
              <Icon size={18} className={active ? "text-cyanline" : "text-white/45"} />
              {trait.label}
            </button>
          );
        })}
      </div>

      <div className="mt-6 border border-white/10 bg-black/25 p-5">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/45">Profile Preview</p>
        <h4 className="mt-3 font-display text-2xl font-black uppercase text-white">Adhimulam Leena</h4>
        <p className="mt-1 text-sm font-bold text-cyanline">Level 24 Developer</p>
        <p className="mt-4 text-sm leading-7 text-white/66">{specialAbility}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <button type="button" onClick={() => scrollToSection("projects")} className="border border-cyanline/35 px-3 py-2 text-xs font-black uppercase tracking-[0.15em] text-cyanline transition hover:bg-cyanline hover:text-void">
          View Projects
        </button>
        <a href={portfolio.resume} download className="border border-white/15 px-3 py-2 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:border-cyanline hover:text-cyanline">
          Download Resume
        </a>
        <button type="button" onClick={() => scrollToSection("contact")} className="border border-white/15 px-3 py-2 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:border-cyanline hover:text-cyanline">
          Contact Me
        </button>
      </div>
    </InteractiveCard>
  );
}

function PortfolioQuest({ completed, markQuest }: { completed: Set<QuestKey>; markQuest: (key: QuestKey) => void }) {
  const percentage = Math.round((completed.size / questTasks.length) * 100);

  const handleTask = (task: (typeof questTasks)[number]) => {
    markQuest(task.key);
    if (task.target) scrollToSection(task.target);
  };

  return (
    <InteractiveCard>
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyanline">Portfolio Quest</p>
          <h3 className="mt-3 font-display text-3xl font-black uppercase leading-none text-white">Mission Tracker</h3>
          <p className="mt-4 text-sm leading-7 text-white/60">Complete the mission by exploring Leena&apos;s portfolio.</p>
        </div>
        <span className="grid h-14 w-14 shrink-0 place-items-center border border-cyanline/30 bg-cyanline/10 text-cyanline shadow-glow">
          <Target />
        </span>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm font-bold text-white/70">Progress</p>
        <p className="font-display text-3xl font-black text-white">{percentage}%</p>
      </div>
      <div className="mt-3 h-3 overflow-hidden bg-white/10">
        <motion.div animate={{ width: `${percentage}%` }} transition={{ duration: 0.5 }} className="h-full bg-gradient-to-r from-cyanline via-electric to-violetline" />
      </div>

      <div className="mt-6 grid gap-3">
        {questTasks.map((task) => {
          const done = completed.has(task.key);
          return (
            <button
              key={task.key}
              type="button"
              onClick={() => handleTask(task)}
              className={`flex items-center justify-between border p-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyanline ${
                done ? "border-cyanline/45 bg-cyanline/10 text-white" : "border-white/10 bg-white/[0.035] text-white/62 hover:border-cyanline hover:text-cyanline"
              }`}
            >
              <span className="text-sm font-bold">{task.label}</span>
              <span className={`grid h-6 w-6 place-items-center border ${done ? "border-cyanline bg-cyanline text-void" : "border-white/15"}`}>
                {done ? <Check size={14} /> : null}
              </span>
            </button>
          );
        })}
      </div>

      {percentage === 100 ? (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-6 border border-cyanline/35 bg-cyanline/10 p-4">
          <p className="font-display text-2xl font-black uppercase text-white">Mission Complete</p>
          <p className="mt-2 text-sm text-white/66">You now know Leena better.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a href={portfolio.resume} download className="border border-cyanline/40 px-3 py-2 text-xs font-black uppercase tracking-[0.15em] text-cyanline">
              Download Resume
            </a>
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolio.email}`} target="_blank" rel="noreferrer" className="border border-cyanline/40 px-3 py-2 text-xs font-black uppercase tracking-[0.15em] text-cyanline">
              Email Leena
            </a>
          </div>
        </motion.div>
      ) : null}
    </InteractiveCard>
  );
}

export default function Interactive() {
  const [completed, setCompleted] = useState<Set<QuestKey>>(new Set());

  const markQuest = (key: QuestKey) => {
    setCompleted((current) => {
      const next = new Set(current);
      next.add(key);
      return next;
    });
  };

  return (
    <section id="interactive" className="section-shell">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionTitle eyebrow="Interactive" title="Interactive Portfolio" />
        <p className="max-w-md text-sm leading-7 text-white/58">
          Explore my skills, projects, and journey through playful experiences.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <LeenaAI markQuest={markQuest} />
        <BuildDeveloper markQuest={markQuest} />
        <PortfolioQuest completed={completed} markQuest={markQuest} />
      </div>
    </section>
  );
}
