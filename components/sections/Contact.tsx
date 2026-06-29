"use client";

import SectionTitle from "@/components/SectionTitle";
import { portfolio } from "@/data/portfolio";
import { Check, Copy, Download, Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  {
    label: "Email",
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${portfolio.email}`,
    value: portfolio.email,
    icon: Mail,
  },
  {
    label: "Phone",
    href: `tel:${portfolio.phone.replace(/\s/g, "")}`,
    value: portfolio.phone,
    icon: Phone,
  },
  {
    label: "GitHub",
    href: portfolio.links.github,
    value: "github.com/aleena-1",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: portfolio.links.linkedin,
    value: "leena-adhimulam",
    icon: Linkedin,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${portfolio.email}`;

  const copyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(portfolio.email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = portfolio.email;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
    } catch {
      window.prompt("Copy email address", portfolio.email);
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="section-shell pb-24">
      <div className="glass-panel relative overflow-hidden p-6 sm:p-10 lg:p-14">
        <div className="command-card-grid absolute inset-0 opacity-20" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <SectionTitle eyebrow="Contact" title="Open For Internships & Collaborations" />
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
              Reach out for full-stack roles, AI projects, cybersecurity learning opportunities, research collaborations, and student leadership initiatives.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-cyanline px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-void transition hover:bg-white"
              >
                Send Email <Send size={18} />
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-3 border border-white/15 px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:border-cyanline hover:text-cyanline"
              >
                {copied ? "Copied" : "Copy Email"} {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
              <a
                href={portfolio.resume}
                download
                className="inline-flex items-center gap-3 border border-violetline/35 px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:border-violetline hover:text-violetline"
              >
                Resume <Download size={18} />
              </a>
            </div>
          </div>
          <div className="grid gap-4">
            {links.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-120px" }}
                  transition={{ duration: 0.6, delay: index * 0.07, ease: "easeOut" }}
                  className="flex items-center gap-4 border border-white/10 bg-black/30 p-4 transition hover:border-cyanline hover:bg-cyanline/10"
                >
                  <span className="grid h-12 w-12 place-items-center border border-cyanline/30 text-cyanline">
                    <Icon size={19} />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.22em] text-white/45">{item.label}</span>
                    <span className="mt-1 block break-all font-semibold text-white">{item.value}</span>
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
