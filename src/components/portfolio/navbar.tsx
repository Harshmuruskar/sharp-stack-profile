import { useEffect, useState } from "react";
import { Menu, X, Command, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("top");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0, 0.2, 0.6] }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 sm:px-6 pt-3 sm:pt-4 transition-all duration-300">
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex h-12 w-full max-w-[1400px] items-center justify-between rounded-full px-4 sm:px-6 transition-all duration-300 apple-glass"
        )}
      >
        <a
          href="#top"
          className="group flex items-center gap-2 px-1 text-xs font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-105">
            <Command size={13} />
          </span>
          <span className="font-mono text-xs font-medium tracking-wide">
            harsh<span className="text-primary">.dev</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {SECTIONS.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200",
                    isActive
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                  )}
                >
                  {s.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Action Buttons & Theme Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Apple Light/Dark Mode Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground/5 text-foreground transition-all hover:bg-foreground/10 hover:scale-105"
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun size={15} className="text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
            ) : (
              <Moon size={15} className="text-indigo-600 transition-transform duration-300 rotate-0 hover:-rotate-12" />
            )}
          </button>

          <a
            href="#contact"
            className="hidden rounded-full bg-foreground px-3.5 py-1.5 text-xs font-semibold text-background transition-all hover:opacity-90 hover:scale-105 md:inline-flex"
          >
            Connect
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground/5 text-foreground transition-colors hover:bg-foreground/10 md:hidden"
          >
            {open ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-xs md:hidden"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-16 inset-x-4 z-50 mx-auto max-w-sm rounded-3xl apple-glass p-4 border border-border shadow-soft md:hidden">
            <ul className="flex flex-col space-y-1">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    <span>{s.label}</span>
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-border">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center rounded-2xl apple-button-primary px-4 py-2.5 text-sm font-semibold text-white"
                >
                  Connect With Me
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
}



