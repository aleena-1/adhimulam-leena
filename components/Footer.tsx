import { portfolio } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
        <p className="font-semibold uppercase tracking-[0.2em] text-white">{portfolio.name}</p>
        <p>Designed as a futuristic engineer portfolio. Built with Next.js, Tailwind CSS, and Framer Motion.</p>
      </div>
    </footer>
  );
}
