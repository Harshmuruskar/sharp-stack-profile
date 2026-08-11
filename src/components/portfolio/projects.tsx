import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import { Section } from "./section";

const PROJECTS = [
  {
    name: "VetLedger",
    year: "2025",
    description:
      "Practice management for veterinary clinics: owner and pet registration, vaccination tracking, and a self-service portal.",
    stack: ["Spring Boot", "React", "PostgreSQL"],
    href: "#",
  },
  {
    name: "ProctorLayer",
    year: "2025",
    description:
      "Secure online exam platform with AI-based monitoring signals and an architecture built for concurrent test sessions.",
    stack: ["Spring AI", "Microservices", "Redis"],
    href: "#",
  },
  {
    name: "Maison Noir",
    year: "2024",
    description:
      "Luxury e-commerce brand concept with a custom admin dashboard for catalog, inventory, and order operations.",
    stack: ["React", "Spring Boot", "Docker"],
    href: "#",
  },
];

export function Projects() {
  return (
    <Section id="projects" label="Projects" title="Selected work.">
      <div className="grid gap-4 md:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name} delay={i * 90}>
            <article className="card-soft group flex h-full flex-col rounded-xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-medium tracking-tight">{p.name}</h3>
                <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={p.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
              >
                Case study
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
