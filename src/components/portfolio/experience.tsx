import { Reveal } from "./reveal";
import { Section } from "./section";

const ROLES = [
  {
    role: "Java Full Stack Developer",
    company: "Koderz Technology",
    period: "Mar 2026 — Present",
    points: [
      "Delivered 10+ full-stack features with React and Spring Boot (Java 21) on two-week Agile sprints.",
      "Designed 15+ REST endpoints with consistent conventions, cutting integration time by ~30%.",
      "Secured all user-facing endpoints with Spring Security and JWT.",
      "Optimized Spring Data JPA + MySQL access layers, improving key response times by up to 40%.",
      "Containerized services with Docker, reducing new-developer setup to under 15 minutes.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Greateway Solution Pvt. Ltd.",
    period: "Feb 2024 — Aug 2024",
    points: [
      "Contributed to 5+ web application modules across a six-month internship.",
      "Wrote and debugged Java backend logic, resolving 20+ bug tickets alongside UI updates.",
      "Took part in code reviews and daily stand-ups on a two-week Agile cadence.",
    ],
  },
  {
    role: "B.Tech, Computer Science",
    company: "G.H. Raisoni College of Engineering",
    period: "Graduated 2023",
    points: ["Nagpur, Maharashtra, India."],
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
              className="absolute top-2 -left-[2.1rem] h-2 w-2 rounded-full bg-primary ring-4 ring-primary/15"
            />
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              {r.period}
            </p>
            <h3 className="mt-2 text-lg font-medium tracking-tight">{r.role}</h3>
            <p className="text-sm text-primary">{r.company}</p>
            <ul className="mt-4 max-w-2xl space-y-2">
              {r.points.map((p) => (
                <li
                  key={p}
                  className="relative pl-5 text-sm leading-relaxed text-muted-foreground before:absolute before:top-[0.7em] before:left-0 before:h-px before:w-2.5 before:bg-border"
                >
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
