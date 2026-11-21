import { extracurriculars } from "@/data/portfolio";
import { Sparkle } from "./Icons";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Extracurriculars({ n }: { n?: string }) {
  return (
    <Section id="activities" n={n} eyebrow="Extracurriculars" title="Leadership & activities">
      <div className="grid gap-5 sm:grid-cols-2">
        {extracurriculars.map((a, i) => (
          <Reveal key={a.title + a.org} delay={(i % 2) * 100}>
            <article className="card card-hover group relative h-full overflow-hidden p-7">
              <div className="pointer-events-none absolute -left-16 -bottom-16 size-48 rounded-full bg-accent/0 blur-3xl transition-colors duration-500 group-hover:bg-accent/15" />
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-soft">
                  <Sparkle className="size-3.5" /> {a.category}
                </span>
                <span className="font-mono text-xs text-muted">{a.period}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{a.title}</h3>
              <p className="mt-1 text-sm text-accent-soft/90">{a.org}</p>
              <p className="mt-4 leading-relaxed text-muted">{a.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
