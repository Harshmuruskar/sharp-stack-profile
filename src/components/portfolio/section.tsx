import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <div className="mb-10 text-left">
            <span className="font-mono text-xs font-semibold tracking-widest text-primary uppercase">
              {label}
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {title}
            </h2>
          </div>
        </Reveal>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}


