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
    <section id={id} className="scroll-mt-24 border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">{label}</p>
          <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-balance md:text-4xl">
            {title}
          </h2>
        </Reveal>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
