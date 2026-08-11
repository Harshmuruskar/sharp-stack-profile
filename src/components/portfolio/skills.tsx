import { Boxes, Cpu, Database, Layout, Wrench } from "lucide-react";
import { BrandIcon } from "./brand-icon";
import { Reveal } from "./reveal";
import { Section } from "./section";

const GROUPS = [
  {
    icon: Boxes,
    title: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "Spring AI",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "Microservices",
      "JWT",
      "Swagger",
    ],
  },
  {
    icon: Layout,
    title: "Frontend",
    items: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "NeonDB", "Elasticsearch"],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    items: ["Docker", "Git", "GitHub", "Maven", "Postman", "IntelliJ"],
  },
  {
    icon: Cpu,
    title: "AI / Dev Tooling",
    items: ["Claude Code", "Google AI Studio", "Google Antigravity", "Lovable", "Bolt", "Google Stitch"],
  },
];

export function Skills() {
  return (
    <Section id="skills" label="Skills" title="The stack I reach for.">
      <div className="grid gap-4 sm:grid-cols-2">
        {GROUPS.map((g, i) => (
          <Reveal key={g.title} delay={i * 70} className={i === 0 ? "sm:col-span-2" : ""}>
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
                    className="flex items-center gap-2 rounded-md border border-border bg-secondary px-3 py-1.5 text-xs text-secondary-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    <BrandIcon name={item} size={14} className="shrink-0 opacity-90" />
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
