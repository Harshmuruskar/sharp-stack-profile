import { Boxes, Cpu, Database, Layout, Wrench } from "lucide-react";
import { BrandIcon } from "./brand-icon";
import { Reveal } from "./reveal";
import { Section } from "./section";

const GROUPS = [
  {
    icon: Boxes,
    title: "Backend Architecture",
    items: [
      "Java 21",
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
    title: "Frontend Engineering",
    items: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    icon: Database,
    title: "Databases & Search",
    items: ["MySQL", "PostgreSQL", "MongoDB", "NeonDB", "Elasticsearch"],
  },
  {
    icon: Wrench,
    title: "Tools & DevOps",
    items: ["Docker", "Git", "GitHub", "Maven", "Postman", "IntelliJ"],
  },
  {
    icon: Cpu,
    title: "AI Ecosystem",
    items: ["Claude Code", "Google AI Studio", "Google Antigravity", "Lovable", "Bolt", "Google Stitch"],
  },
];

export function Skills() {
  return (
    <Section id="skills" label="Skills" title="Full-stack technology matrix.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GROUPS.map((g, i) => (
          <Reveal
            key={g.title}
            delay={i * 70}
            className={i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
          >
            <article className="bento-card group flex h-full flex-col justify-between p-5 sm:p-6">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-border transition-transform group-hover:scale-110">
                    <g.icon size={18} aria-hidden />
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-foreground tracking-tight">{g.title}</h3>
                </div>

                <ul className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="apple-glass-interactive flex items-center gap-1.5 sm:gap-2 rounded-xl px-2.5 py-1 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-foreground"
                    >
                      <BrandIcon name={item} size={13} className="shrink-0 opacity-90" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}



