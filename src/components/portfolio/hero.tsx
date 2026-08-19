import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

const STATS = [
  { value: "1+ Years", label: "Software Engineering" },
  { value: "10+ Systems", label: "Full-Stack Apps Deployed" },
  { value: "3+ AI", label: "Automated Projects " },
];

export function Hero() {

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-16 sm:pb-20"
    >
      {/* Content Container */}
      <div className="relative z-20 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center text-center">
          {/* Apple Pill Availability Badge */}
          <div
            className="reveal mb-5 sm:mb-6 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 rounded-full apple-pill px-3.5 sm:px-4 py-1.5 backdrop-blur-2xl shadow-sm border-border text-center"
            data-visible="true"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-foreground">Available for Full Stack & AI Roles</span>
            <span className="hidden xs:inline opacity-30">•</span>
            <span className="flex items-center gap-1 text-[11px] sm:text-xs text-muted-foreground">
              <MapPin size={11} className="text-primary" />
              Nagpur, India
            </span>
          </div>

          {/* Apple Typography */}
          <h1
            className="reveal text-4xl xs:text-5xl leading-[1.05] font-bold tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-9xl"
            data-visible="true"
          >
            Harsh{" "}
            <span className="apple-blue-gradient font-bold">
              Muruskar
            </span>
          </h1>

          <p
            className="reveal mt-3 sm:mt-4 font-sans text-base xs:text-lg font-semibold tracking-tight text-foreground/90 sm:text-2xl md:text-3xl"
            data-visible="true"
          >
            Java Full Stack Developer & AI Integration Specialist
          </p>

          <p
            className="reveal mx-auto mt-3 sm:mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-xl"
            data-visible="true"
          >
            Engineering robust Spring Boot microservices, high-performance REST APIs, and responsive React interfaces with seamless AI intelligence built-in.
          </p>

          {/* Action CTAs & Socials */}
          <div
            className="reveal mt-6 sm:mt-8 flex flex-col xs:flex-row flex-wrap items-center justify-center gap-3 w-full sm:w-auto"
            data-visible="true"
          >
            <a
              href="#projects"
              className="apple-button-primary inline-flex w-full xs:w-auto justify-center items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold tracking-wide"
            >
              <span>View Projects</span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href="/Harsh_Muruskar_Resume.pdf"
              download="Harsh_Muruskar_Resume.pdf"
              className="apple-glass-interactive inline-flex w-full xs:w-auto justify-center items-center gap-2 rounded-full px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-foreground border-border"
            >
              <Download size={15} />
              <span>Download Resume</span>
            </a>

            <div className="flex items-center justify-center gap-1.5 pt-2 xs:pt-0 xs:pl-2">
              {[
                { href: "https://github.com/harshmuruskar", label: "GitHub", Icon: Github },
                {
                  href: "https://www.linkedin.com/in/harshmuruskar",
                  label: "LinkedIn",
                  Icon: Linkedin,
                },
                {
                  href: "https://wa.me/919325260228?text=Hi%20Harsh,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect!",
                  label: "WhatsApp",
                  Icon: MessageCircle,
                },
                { href: "#contact", label: "Email", Icon: Mail },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded-full apple-glass-interactive text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Apple Specs Bar Stats */}
          <div
            className="reveal mt-10 sm:mt-12 grid w-full max-w-5xl grid-cols-1 gap-5 sm:gap-6 border-t border-border pt-6 sm:pt-8 sm:grid-cols-3"
            data-visible="true"
          >
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


