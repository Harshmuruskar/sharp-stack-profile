import { Briefcase, GraduationCap } from "lucide-react";
import { Reveal } from "./reveal";
import { Section } from "./section";

const ROLES = [
  {
    role: "Java Full Stack Developer",
    company: "Koderz Technology",
    period: "Mar 2026 — Present",
    icon: Briefcase,
    points: [
      "Delivered 10+ full-stack features with React and Spring Boot (Java 21) on two-week Agile sprints.",
      "Designed 15+ REST endpoints with consistent conventions, cutting integration time by ~30%.",
      "Secured user-facing API endpoints with Spring Security, JWT, and OAuth 2.0.",
      "Optimized Spring Data JPA + MySQL access layers, improving response times by up to 40%.",
      "Containerized microservices with Docker, reducing developer setup time to under 15 minutes.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Greateway Solution Pvt. Ltd.",
    period: "Feb 2024 — Aug 2024",
    icon: Briefcase,
    points: [
      "Contributed to 5+ web application modules across a six-month intensive software internship.",
      "Developed Java backend services, resolving 20+ bug tickets alongside UI feature updates.",
      "Participated in active code reviews and daily stand-ups on a two-week Agile cadence.",
    ],
  },
  {
    role: "B.Tech, Mechanical Engineering",
    company: "G.H. Raisoni College of Engineering",
    period: "Graduated 2023",
    icon: GraduationCap,
    points: ["Completed B.Tech in Mechanical Engineering in Nagpur, Maharashtra, India."],
  },
];

export function Experience() {
  return (
    <Section id="experience" label="Experience" title="Professional journey & milestones.">
      <div className="relative border-l border-border pl-5 sm:pl-10 ml-2 sm:ml-4 space-y-6 sm:space-y-8">
        {ROLES.map((r, i) => {
          const Icon = r.icon;
          return (
            <Reveal key={r.role} delay={i * 90} className="relative">
              {/* Glowing Node Marker */}
              <span className="absolute -left-[calc(1.25rem+13px)] sm:-left-[calc(2.5rem+13px)] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-card border border-primary text-primary shadow-sm">
                <Icon size={12} />
              </span>

              <div className="bento-card p-5 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-[11px] sm:text-xs font-semibold text-primary uppercase tracking-wider">
                    {r.period}
                  </span>
                  <span className="rounded-full bg-foreground/5 px-2.5 sm:px-3 py-1 font-mono text-[11px] sm:text-xs font-semibold text-muted-foreground">
                    {r.company}
                  </span>
                </div>

                <h3 className="mt-2.5 sm:mt-3 text-lg sm:text-xl font-bold tracking-tight text-foreground">{r.role}</h3>

                <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-2.5">
                  {r.points.map((p) => (
                    <li
                      key={p}
                      className="relative pl-4 sm:pl-5 text-xs sm:text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/70"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}



