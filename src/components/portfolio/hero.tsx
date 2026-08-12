import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-32"
    >
      {/* Adaptive gradient overlay for readability */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-gradient-to-b from-background/30 via-transparent to-background/50"
      />

      {/* Background treatments */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-10">
        {/* Deep radial glows */}
        <div className="absolute -top-[10%] -left-[10%] h-[60%] w-[60%] rounded-full bg-primary/3 blur-[120px]" />
        <div className="absolute -right-[10%] -bottom-[10%] h-[50%] w-[50%] rounded-full bg-primary/2 blur-[120px]" />

        {/* Noise texture */}
        <div className="noise-overlay absolute inset-0" />

        {/* Technical dot grid */}
        <div className="dot-grid absolute inset-0" />
      </div>

      {/* Large watermark text */}
      <div className="hero-watermark">Developer</div>

      {/* Decorative side borders */}
      <div aria-hidden className="hero-side-border left-8 hidden xl:block" />
      <div aria-hidden className="hero-side-border right-8 hidden xl:block" />

      {/* Content */}
      <div className="relative z-30 mx-auto max-w-5xl px-6 lg:px-8">
        {/* Glassmorphic content container */}
        <div className="rounded-[2rem] border border-border/20 bg-card/25 p-8 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.3)] backdrop-blur-2xl light:bg-white/35 light:shadow-[0_8px_32px_-12px_rgba(0,0,0,0.1)] sm:p-10 md:p-14">
          <div className="text-center">
            {/* Availability badge */}
            <div
              className="reveal mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm"
              data-visible="true"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
                Available for work
              </span>
            </div>

            {/* Name & title */}
            <h1
              className="reveal text-5xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-7xl md:text-8xl"
              data-visible="true"
            >
              Harsh{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
                Muruskar
              </span>
            </h1>

            <p
              className="reveal mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
              data-visible="true"
            >
              Java Full Stack Developer
            </p>

            <p
              className="reveal mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground/80 md:text-lg"
              data-visible="true"
            >
              I build AI-integrated full-stack systems — Spring Boot services, secure REST APIs and
              React interfaces — from database schema to responsive UI, with clean,
              production-ready code.
            </p>

            <p
              className="reveal mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground"
              data-visible="true"
            >
              <MapPin size={15} className="text-primary" aria-hidden />
              Nagpur, Maharashtra, India
            </p>

            {/* CTAs */}
            <div
              className="reveal mt-10 flex flex-wrap items-center justify-center gap-3"
              data-visible="true"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_0_20px_color-mix(in_oklab,var(--primary)_30%,transparent)] transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_30px_color-mix(in_oklab,var(--primary)_45%,transparent)]"
              >
                <span className="relative z-10">View Projects</span>
                <ArrowUpRight
                  size={16}
                  className="relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
                <span className="absolute inset-0 -translate-x-full bg-primary-foreground/10 transition-transform duration-500 group-hover:translate-x-0" />
              </a>
              <a
                href={resumeAsset.url}
                download="Harsh_Muruskar_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur-md transition-all duration-300 hover:bg-accent"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground/60">
        <ArrowDown size={14} className="animate-bounce" />
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
      </div>
    </section>
  );
}
