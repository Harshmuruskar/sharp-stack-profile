import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Reveal } from "./reveal";
import { Section } from "./section";

const LINKS = [
  { icon: Mail, label: "arjun@example.com", href: "mailto:arjun@example.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Section id="contact" label="Contact" title="Let's build something solid.">
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="text-base leading-relaxed text-muted-foreground">
            Open to full-stack roles, backend-heavy contract work, and interesting problems that
            need a careful architect.
          </p>
          <ul className="mt-8 space-y-3">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="group inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="rounded-md border border-border p-2 text-primary transition-colors group-hover:border-primary/40">
                    <l.icon size={15} aria-hidden />
                  </span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="md:col-span-7" delay={120}>
          <form
            onSubmit={onSubmit}
            className="card-soft space-y-5 rounded-xl border border-border p-6 md:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Name" type="text" placeholder="Your name" />
              <Field id="email" label="Email" type="email" placeholder="you@company.com" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-medium tracking-wide text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="What are you building?"
                className="w-full resize-none rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
            >
              {sent ? "Message sent" : "Send message"}
              <Send size={15} />
            </button>
            <p aria-live="polite" className="text-xs text-muted-foreground">
              {sent ? "Thanks — I'll get back to you shortly." : "\u00a0"}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  id,
  label,
  type,
  placeholder,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-xs font-medium tracking-wide text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
