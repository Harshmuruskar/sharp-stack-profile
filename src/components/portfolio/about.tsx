import { Reveal } from "./reveal";
import { Section } from "./section";

const FACTS = [
  { k: "Role", v: "Java Full Stack Developer (AI)" },
  { k: "Company", v: "Koderz Technology" },
  { k: "Education", v: "B.Tech, G.H. Raisoni CoE" },
  { k: "Based in", v: "Nagpur, India" },
];

export function About() {
  return (
    <Section
      id="about"
      label="About"
      title="Engineering systems that stay simple as they scale."
    >
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              I&apos;m a B.Tech graduate from G.H. Raisoni College of Engineering, working today
              as a Java Full Stack Developer at Koderz Technology, where I ship full-stack
              features on two-week Agile cycles.
            </p>
            <p>
              My work spans backend architecture — Spring Boot, Spring Data JPA, REST APIs and
              secure auth with Spring Security, JWT and OAuth 2 — and the frontend layer on top
              of it in React and Tailwind CSS. I also integrate AI directly into production
              workflows with Spring AI and the Gemini API, and lean on modern AI-assisted tooling
              to move quickly without cutting corners on quality.
            </p>
          </div>
        </Reveal>

        <Reveal className="md:col-span-5" delay={120}>
          <dl className="glass-subtle divide-y divide-border rounded-xl">
            {FACTS.map((f) => (
              <div key={f.k} className="flex items-baseline justify-between gap-6 px-5 py-4">
                <dt className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  {f.k}
                </dt>
                <dd className="text-right text-sm font-medium text-foreground">{f.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
