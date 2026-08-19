import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Phone, Send, Check, MessageCircle } from "lucide-react";
import { Reveal } from "./reveal";
import { Section } from "./section";

const LINKS = [
  {
    icon: Mail,
    label: "harshmuruskar786@gmail.com",
    href: "mailto:harshmuruskar786@gmail.com",
  },
  { icon: Phone, label: "+91 93252 60228", href: "tel:+919325260228" },
  {
    icon: MessageCircle,
    label: "WhatsApp: +91 93252 60228",
    href: "https://wa.me/919325260228?text=Hi%20Harsh,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect!",
  },
  { icon: Github, label: "github.com/Harshmuruskar", href: "https://github.com/Harshmuruskar" },
  { icon: Linkedin, label: "linkedin.com/in/harshmuruskar", href: "https://www.linkedin.com/in/harshmuruskar" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Section id="contact" label="Contact" title="Let's connect and build something solid.">
      <div className="grid gap-6 sm:gap-8 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <div className="bento-card flex h-full flex-col justify-between p-5 sm:p-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">Get in touch</h3>
              <p className="mt-2.5 sm:mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Open to full-stack engineering roles, backend architecture consulting, and AI-integrated project collaborations.
              </p>

              <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                {LINKS.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                      className="group flex items-center gap-3 rounded-2xl bg-foreground/4 p-2.5 sm:p-3 border border-border transition-all hover:bg-foreground/8 hover:border-primary/30"
                    >
                      <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-105 shrink-0">
                        <l.icon size={15} aria-hidden />
                      </span>
                      <span className="text-[11px] sm:text-xs font-semibold text-foreground truncate">
                        {l.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal className="md:col-span-7" delay={120}>
          <form
            onSubmit={onSubmit}
            className="bento-card space-y-4 sm:space-y-5 p-5 sm:p-8"
          >
            <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
              <Field id="name" label="Name" type="text" placeholder="Your name" />
              <Field id="email" label="Email" type="email" placeholder="you@company.com" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="font-mono text-xs font-semibold text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="What project or role are you looking to discuss?"
                className="w-full resize-none rounded-2xl bg-foreground/4 border border-border px-4 py-3 text-xs sm:text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <button
              type="submit"
              className="apple-button-primary inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide"
            >
              {sent ? (
                <>
                  <Check size={16} className="text-white" />
                  <span>Message Received!</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={15} />
                </>
              )}
            </button>
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
      <label htmlFor={id} className="font-mono text-xs font-semibold text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-2xl bg-foreground/4 border border-border px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}



