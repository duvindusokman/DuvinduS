import { pillars, process, skills } from "@/data/portfolio";
import { Analysis, Kanban } from "./Icons";
import Reveal from "./Reveal";
import Section from "./Section";

const icons = { analysis: Analysis, project: Kanban };

export default function Expertise({ n }: { n?: string }) {
  return (
    <Section id="expertise" n={n} eyebrow="Expertise" title="Analysis that leads to delivery">
      {/* Two pillars: BA + PM */}
      <div className="grid gap-5 lg:grid-cols-2">
        {pillars.map((p, i) => {
          const Icon = icons[p.icon];
          return (
            <Reveal key={p.title} delay={i * 100}>
              <article className="card card-hover group relative h-full overflow-hidden p-7 md:p-8">
                <div className="pointer-events-none absolute -right-16 -top-16 size-52 rounded-full bg-accent/10 blur-3xl transition-colors duration-500 group-hover:bg-accent/20" />
                <div className="relative flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-2xl bg-accent/15 text-accent-soft ring-1 ring-accent/30">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight">{p.title}</h3>
                </div>
                <p className="relative mt-5 leading-relaxed text-muted">{p.summary}</p>
                <ul className="relative mt-6 grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-[15px] text-fg/85">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px] shadow-accent" />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* How I work */}
      <Reveal className="mt-16">
        <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-muted">How I work</h3>
      </Reveal>
      <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {process.map((s, i) => (
          <Reveal key={s.step} delay={i * 70}>
            <li className="card relative h-full p-5">
              <div className="flex items-center gap-3">
                <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-deep font-mono text-xs font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-semibold">{s.step}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.text}</p>
              {i < process.length - 1 && (
                <span aria-hidden className="absolute -right-2.5 top-1/2 hidden h-px w-2 bg-accent/60 lg:block" />
              )}
            </li>
          </Reveal>
        ))}
      </ol>

      {/* Supporting skills */}
      <Reveal className="mt-16">
        <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-muted">Supporting skills</h3>
      </Reveal>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 80}>
            <div className="card card-hover h-full p-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-soft">{g.group}</h4>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="rounded-lg border border-line bg-ink/60 px-3 py-1.5 text-sm text-fg/85">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
