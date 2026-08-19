import { Github, Linkedin, Mail } from "lucide-react";

const SOCIALS = [
  { icon: Github, label: "GitHub", href: "https://github.com/Harshmuruskar" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/harshmuruskar" },
  { icon: Mail, label: "Email", href: "mailto:harshmuruskar786@gmail.com" },
];

export function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-12">
      <div className="bento-card mx-auto flex max-w-[1400px] flex-col gap-6 px-8 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">
            © {new Date().getFullYear()} Harsh Muruskar. Designed with Apple Aesthetic Clarity.
          </p>
          <p className="mt-1 font-mono text-xs font-medium text-muted-foreground">
            Java Full Stack Developer • Spring Boot &amp; React Architect
          </p>
        </div>
        <ul className="flex items-center gap-2">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                aria-label={s.label}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                className="apple-glass-interactive flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:text-foreground"
              >
                <s.icon size={16} aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}



