import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 md:pt-52 md:pb-40">
      <div aria-hidden className="grid-backdrop pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="glow-orb pointer-events-none absolute -top-24 left-1/2 h-72 w-[46rem] -translate-x-1/2"
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <p className="reveal font-mono text-xs tracking-[0.2em] text-primary uppercase" data-visible="true">
          Available for work
        </p>
        <h1 className="mt-6 max-w-4xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl md:text-7xl">
          Arjun Mehta
          <span className="block text-muted-foreground">Java Full Stack Developer</span>
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          I build scalable full-stack systems — Spring Boot services and React interfaces —
          shipped faster with modern AI-assisted engineering workflows.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
          >
            View Projects
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>

        <div className="mt-20 flex items-center gap-3 text-xs text-muted-foreground">
          <ArrowDown size={14} />
          <span className="font-mono tracking-widest uppercase">Scroll</span>
          <span className="h-px flex-1 bg-border" />
        </div>
      </div>
    </section>
  );
}
