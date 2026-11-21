import { certifications, education } from "@/data/portfolio";
import { ArrowUpRight, Award, Cap } from "./Icons";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Education({ n }: { n?: string }) {
  return (
    <Section id="education" n={n} eyebrow="Education" title="Education & certifications">
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="space-y-5">
          {education.map((e) => (
            <Reveal key={e.degree}>
              <article className="card card-hover p-7">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-accent/15 text-accent-soft">
                    <Cap className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-accent-soft">{e.period}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold">{e.degree}</h3>
                <p className="mt-1 text-muted">{e.school}</p>
                <p className="mt-4 leading-relaxed text-fg/75">{e.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="space-y-5">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 80}>
              <article className="card card-hover flex items-start gap-4 p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent-soft">
                  <Award className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <h3 className="font-semibold">{c.name}</h3>
                    <span className="font-mono text-xs text-accent-soft">{c.issued}</span>
                  </div>
                  <p className="text-sm text-muted">{c.issuer}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    {c.skills.map((s) => (
                      <span key={s} className="rounded-md bg-accent/10 px-2 py-0.5 font-mono text-[11px] text-accent-soft">
                        {s}
                      </span>
                    ))}
                    {c.url && (
                      <a href={c.url} target="_blank" rel="noreferrer" className="ml-auto inline-flex items-center gap-1 text-xs text-muted hover:text-fg">
                        Show credential <ArrowUpRight className="size-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
