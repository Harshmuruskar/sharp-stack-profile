import { Github, Linkedin, Mail } from "lucide-react";

const SOCIALS = [
  { icon: Github, label: "GitHub", href: "https://github.com/Harshmuruskar" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/harshmuruskar" },
  { icon: Mail, label: "Email", href: "mailto:harshmuruskar786@gmail.com" },
];

export function Footer() {
  return (
    <footer className="py-12">
      <div className="glass-panel mx-auto flex max-w-6xl flex-col gap-6 rounded-[2rem] px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Harsh Muruskar
          </p>
          <p className="mt-1 font-mono text-xs text-muted-foreground/70">
            built with a React &amp; Spring Boot mindset — stateless, typed, and tested
          </p>
        </div>
        <ul className="flex items-center gap-2">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                aria-label={s.label}
                className="glass-subtle inline-flex rounded-md p-2 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
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
