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
    <section id={id} className="scroll-mt-24 py-14 md:py-20">
      <div className="glass-panel mx-auto max-w-6xl rounded-[2rem] px-6 py-14 md:px-12 md:py-20 lg:px-14">
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
