import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import resumeAsset from "@/assets/resume.pdf.asset.json";

const STATS = [
  { value: "2+", label: "Years building" },
  { value: "10+", label: "Projects shipped" },
  { value: "AI", label: "Integrated systems" },
];

const STACK = ["Java", "Spring Boot", "React", "PostgreSQL", "Docker", "AWS"];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-32"
    >
      {/* Background treatments */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute -top-[10%] -left-[10%] h-[60%] w-[60%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -right-[10%] -bottom-[10%] h-[50%] w-[50%] rounded-full bg-primary/4 blur-[120px]" />
        <div className="noise-overlay absolute inset-0" />
        <div className="dot-grid absolute inset-0" />
      </div>

      <div className="hero-watermark">Developer</div>

      <div aria-hidden className="hero-side-border left-8 hidden xl:block" />
      <div aria-hidden className="hero-side-border right-8 hidden xl:block" />

      {/* Content */}
      <div className="relative z-30 mx-auto w-full max-w-5xl px-6 lg:px-8">
        {/* Gradient ring wrapper */}
        <div className="rounded-[2.25rem] bg-gradient-to-br from-primary/40 via-border to-primary/10 p-px shadow-[0_30px_80px_-40px_color-mix(in_oklab,var(--primary)_45%,transparent)]">
          <div className="glass-panel rounded-[2.2rem] p-8 sm:p-10 md:p-14">
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

              <h1
                className="reveal text-5xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-7xl md:text-8xl"
                data-visible="true"
              >
                Harsh{" "}
                <span className="bg-gradient-to-r from-primary via-primary to-primary/50 bg-clip-text text-transparent">
                  Muruskar
                </span>
              </h1>

              <p
                className="reveal mx-auto mt-6 font-mono text-sm tracking-[0.28em] text-primary uppercase md:text-base"
                data-visible="true"
              >
                Java Full Stack Developer
              </p>

              <p
                className="reveal mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
                data-visible="true"
              >
                I build AI-integrated full-stack systems — Spring Boot services, secure REST APIs
                and React interfaces — from database schema to responsive UI, with clean,
                production-ready code.
              </p>

              {/* Stack chips */}
              <ul
                className="reveal mt-8 flex flex-wrap items-center justify-center gap-2"
                data-visible="true"
              >
                {STACK.map((s) => (
                  <li
                    key={s}
                    className="glass-subtle rounded-full px-3.5 py-1.5 font-mono text-xs text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <p
                className="reveal mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground"
                data-visible="true"
              >
                <MapPin size={15} className="text-primary" aria-hidden />
                Nagpur, Maharashtra, India
              </p>

              {/* CTAs */}
              <div
                className="reveal mt-9 flex flex-wrap items-center justify-center gap-3"
                data-visible="true"
              >
                <a
                  href="#projects"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_0_24px_color-mix(in_oklab,var(--primary)_35%,transparent)] transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_34px_color-mix(in_oklab,var(--primary)_50%,transparent)]"
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
                  className="glass-subtle inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-accent"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </div>

              {/* Socials */}
              <div
                className="reveal mt-7 flex items-center justify-center gap-2"
                data-visible="true"
              >
                {[
                  { href: "https://github.com/harshmuruskar", label: "GitHub", Icon: Github },
                  {
                    href: "https://www.linkedin.com/in/harsh-muruskar",
                    label: "LinkedIn",
                    Icon: Linkedin,
                  },
                  { href: "#contact", label: "Email", Icon: Mail },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="glass-subtle rounded-lg p-2.5 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>

              {/* Stats */}
              <dl
                className="reveal mx-auto mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-border/60 pt-8"
                data-visible="true"
              >
                {STATS.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                      {s.value}
                    </dd>
                    <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </dl>
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
