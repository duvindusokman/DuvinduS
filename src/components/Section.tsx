import type { ReactNode } from "react";
import Reveal from "./Reveal";

/** Shared wrapper: anchor id + eyebrow label + heading. */
export default function Section({
  id,
  n,
  eyebrow,
  title,
  center = false,
  children,
}: {
  id: string;
  n?: string;
  eyebrow: string;
  title: string;
  center?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal className={center ? "text-center" : ""}>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-soft">{n ? `${n} — ` : ""}{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
      </Reveal>
      <div className="mt-12 md:mt-16">{children}</div>
    </section>
  );
}
