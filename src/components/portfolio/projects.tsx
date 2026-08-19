import { ArrowUpRight, Github } from "lucide-react";
import { BrandIcon } from "./brand-icon";
import { Reveal } from "./reveal";
import { Section } from "./section";

const PROJECTS = [
  {
    name: "AI-Powered Smart Email Generator",
    year: "2025",
    description:
      "Reads incoming email text and generates contextual AI replies in 3 distinct tones using Google's Gemini API and async Spring WebClient calls.",
    stack: ["Java", "Spring Boot", "Gemini API", "React.js", "Material UI", "Axios"],
    href: "https://github.com/Harshmuruskar/AI-Powered-Smart-Email-Generator",
    linkLabel: "View Repository",
  },
  {
    name: "Linklytics — URL Analytics Platform",
    year: "2026",
    description:
      "Scalable URL shortening & real-time link analytics platform featuring custom slug generation, JWT security, and detailed click metric dashboards.",
    stack: ["React.js", "Spring Boot", "MySQL", "JWT", "REST API"],
    href: "https://github.com/Harshmuruskar/Linklytics",
    linkLabel: "View Repository",
  },
  {
    name: "Fitness Monolith Engine",
    year: "2026",
    description:
      "Full-stack Java & Spring Boot fitness tracking application that logs workouts, tracks calorie metrics, and computes personalized training recommendations.",
    stack: ["Java 21", "Spring Boot", "Spring Data JPA", "MySQL", "REST API"],
    href: "https://github.com/Harshmuruskar/Fitness_monolith",
    linkLabel: "View Repository",
  },
  {
    name: "Job Portal Application",
    year: "2025",
    description:
      "Full-stack job management system featuring admin & applicant portals, role-based JWT/OAuth 2 security, and sub-500ms Elasticsearch queries.",
    stack: ["React", "Spring Boot", "PostgreSQL", "Elasticsearch", "JWT", "Flyway"],
    href: "https://github.com/Harshmuruskar",
    linkLabel: "View Repository",
  },
  {
    name: "Amazon E-Commerce Clone",
    year: "2024",
    description:
      "Responsive e-commerce web application replicating Amazon's storefront UI, featuring interactive product catalog cards, navigation, and shopping cart layouts.",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
    href: "https://github.com/Harshmuruskar/Amazon-Clone",
    linkLabel: "View Repository",
  },
  {
    name: "Real-Time Weather Forecast App",
    year: "2025",
    description:
      "Interactive weather dashboard built with React.js that fetches live meteorological data from external APIs to display temperature, humidity, and wind speed.",
    stack: ["React.js", "JavaScript", "OpenWeather API", "Tailwind CSS"],
    href: "https://github.com/Harshmuruskar/Weather-APP-Using-React",
    linkLabel: "View Repository",
  },
];

export function Projects() {
  return (
    <Section id="projects" label="Projects" title="Selected engineering work.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name} delay={i * 70}>
            <article className="bento-card group flex h-full flex-col justify-between p-6 transition-all duration-300">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold tracking-tight text-foreground leading-snug">
                    {p.name}
                  </h3>
                  <span className="rounded-full bg-foreground/5 px-2.5 py-1 font-mono text-[11px] font-semibold text-muted-foreground shrink-0">
                    {p.year}
                  </span>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <ul className="flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <li
                      key={t}
                      className="apple-glass-subtle flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[11px] font-semibold text-foreground"
                    >
                      <BrandIcon name={t} size={12} className="shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-foreground transition-colors"
                >
                  <Github size={14} />
                  <span>{p.linkLabel}</span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}



