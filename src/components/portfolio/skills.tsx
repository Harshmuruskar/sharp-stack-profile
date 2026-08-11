import { Boxes, Cpu, Database, Layout } from "lucide-react";
import { Reveal } from "./reveal";
import { Section } from "./section";

const GROUPS = [
  {
    icon: Boxes,
    title: "Backend",
    items: ["Java", "Spring Boot", "Spring AI", "Microservices", "JWT", "REST APIs"],
  },
  { icon: Layout, title: "Frontend", items: ["React.js", "TypeScript", "Tailwind CSS"] },
  { icon: Database, title: "Database & Infra", items: ["PostgreSQL", "Docker", "Redis"] },
  {
    icon: Cpu,
    title: "AI / Dev Tooling",
    items: ["Claude Code", "Lovable", "Bolt", "Google AI Studio"],
  },
];

export function Skills() {
  return (
    <Section id="skills" label="Skills" title="The stack I reach for.">
      <div className="grid gap-4 sm:grid-cols-2">
        {GROUPS.map((g, i) => (
          <Reveal key={g.title} delay={i * 80}>
            <article className="card-soft group h-full rounded-xl border border-border p-6 transition-colors duration-300 hover:border-primary/40">
              <div className="flex items-center gap-3">
                <span className="rounded-md border border-border p-2 text-primary transition-colors group-hover:border-primary/40">
                  <g.icon size={16} aria-hidden />
                </span>
                <h3 className="text-sm font-medium tracking-tight">{g.title}</h3>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-secondary px-3 py-1.5 text-xs text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
