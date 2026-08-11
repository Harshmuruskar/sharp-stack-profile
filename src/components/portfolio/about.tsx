import { Reveal } from "./reveal";
import { Section } from "./section";

const FACTS = [
  { k: "Focus", v: "Backend architecture" },
  { k: "Education", v: "B.Tech graduate" },
  { k: "Now", v: "Full Stack Developer" },
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
              I&apos;m a B.Tech graduate working today as a Java Full Stack Developer at a
              product-focused tech company, where I design and ship services that carry real
              traffic.
            </p>
            <p>
              My work spans backend architecture — Spring Boot, microservices, secure APIs — and
              the frontend layer that sits on top of it in React and TypeScript. Alongside that,
              I lean heavily on AI-assisted development tooling to move from idea to reviewed,
              production-ready code without cutting corners on quality.
            </p>
          </div>
        </Reveal>

        <Reveal className="md:col-span-5" delay={120}>
          <dl className="divide-y divide-border rounded-lg border border-border">
            {FACTS.map((f) => (
              <div key={f.k} className="flex items-baseline justify-between gap-6 px-5 py-4">
                <dt className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  {f.k}
                </dt>
                <dd className="text-sm font-medium text-foreground">{f.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
