import { Reveal } from "./reveal";
import { Section } from "./section";

const FACTS = [
  { k: "Role", v: "Java Full Stack & AI Developer" },
  { k: "Company", v: "Koderz Technology" },
  { k: "Education", v: "B.Tech, G.H. Raisoni CoE" },
  { k: "Based in", v: "Nagpur, Maharashtra, India" },
];

export function About() {
  return (
    <Section
      id="about"
      label="About"
      title="Engineering software with clarity, speed, and precision."
    >
      <div className="grid gap-6 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <div className="bento-card flex h-full flex-col justify-between p-8">
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p className="text-foreground font-semibold">
                I&apos;m a B.Tech graduate from G.H. Raisoni College of Engineering, working today
                as a Java Full Stack Developer at Koderz Technology, where I ship full-stack
                features on two-week Agile cycles.
              </p>
              <p>
                My core expertise spans backend architecture — Spring Boot, Spring Data JPA, REST APIs, and
                secure authentication using Spring Security, JWT, and OAuth 2.0 — coupled with modern frontend layers built in React and Tailwind CSS.
              </p>
              <p>
                I actively integrate AI into production systems via Spring AI and Google&apos;s Gemini API, leveraging AI-native tooling to move fast without compromising code quality.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="md:col-span-5" delay={120}>
          <div className="bento-card flex h-full flex-col justify-between p-6">
            <h3 className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
              Developer Specifications
            </h3>
            <dl className="mt-6 divide-y divide-border">
              {FACTS.map((f) => (
                <div key={f.k} className="flex items-center justify-between gap-4 py-3.5">
                  <dt className="font-mono text-xs text-muted-foreground">
                    {f.k}
                  </dt>
                  <dd className="text-right text-sm font-semibold text-foreground">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}



