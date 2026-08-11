import { Reveal } from "./reveal";
import { Section } from "./section";

const ROLES = [
  {
    role: "Java Full Stack Developer",
    company: "Tech company",
    period: "2025 — Present",
    detail:
      "Building Spring Boot microservices and React interfaces, with AI-assisted tooling woven into the delivery workflow.",
  },
  {
    role: "Software Engineer Intern",
    company: "Product startup",
    period: "2024 — 2025",
    detail:
      "Shipped REST APIs, JWT-based auth flows, and internal dashboards used by the operations team.",
  },
  {
    role: "B.Tech, Computer Science",
    company: "University",
    period: "2020 — 2024",
    detail: "Focused on distributed systems, databases, and applied software engineering.",
  },
];

export function Experience() {
  return (
    <Section id="experience" label="Experience" title="A short timeline.">
      <ol className="relative border-l border-border pl-8">
        {ROLES.map((r, i) => (
          <Reveal as="li" key={r.role} delay={i * 90} className="relative pb-12 last:pb-0">
            <span
              aria-hidden
              className="absolute top-2 -left-[2.1rem] h-2 w-2 rounded-full bg-primary ring-4 ring-background"
            />
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              {r.period}
            </p>
            <h3 className="mt-2 text-lg font-medium tracking-tight">{r.role}</h3>
            <p className="text-sm text-primary">{r.company}</p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {r.detail}
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
