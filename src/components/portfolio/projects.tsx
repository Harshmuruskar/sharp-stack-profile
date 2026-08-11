import { ArrowUpRight } from "lucide-react";
import { BrandIcon } from "./brand-icon";
import { Reveal } from "./reveal";
import { Section } from "./section";

const PROJECTS = [
  {
    name: "Job Portal Application",
    year: "2025",
    description:
      "Full-stack job application management system with admin and applicant portals, role-based access, and Elasticsearch-backed search under 500ms across 1,000+ listings.",
    stack: ["React", "Spring Boot", "PostgreSQL", "Elasticsearch", "JWT", "Flyway"],
    href: "https://github.com/Harshmuruskar",
    linkLabel: "View on GitHub",
  },
  {
    name: "AI-Powered Smart Email Generator",
    year: "2025",
    description:
      "Reads email content and generates replies in three tone styles using Google's Gemini API, with async WebClient calls returning in under 3 seconds.",
    stack: ["Java", "Spring Boot", "Gemini API", "React.js", "Material UI", "Axios"],
    href: "https://github.com/Harshmuruskar/AI-Powered-Smart-Email-Generator",
    linkLabel: "View on GitHub",
  },
  {
    name: "Secure REST API Suite",
    year: "2024",
    description:
      "Containerized Spring Boot services with Spring Security, JWT auth and JPA data layers, documented end to end with Swagger for fast client integration.",
    stack: ["Spring Security", "Spring Data JPA", "MySQL", "Docker", "Swagger"],
    href: "https://github.com/Harshmuruskar",
    linkLabel: "View on GitHub",
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
                <h3 className="text-lg leading-snug font-medium tracking-tight">{p.name}</h3>
                <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    <BrandIcon name={t} size={12} className="shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
              >
                {p.linkLabel}
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
