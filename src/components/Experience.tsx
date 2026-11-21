import { experience } from "@/data/portfolio";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Experience({ n }: { n?: string }) {
  return (
    <Section id="experience" n={n} eyebrow="Experience" title="Where I've worked">
      <ol className="relative space-y-6 border-l border-line pl-6 md:pl-10">
        {experience.map((job, i) => (
          <li key={job.role + job.company} className="relative">
            {/* timeline dot */}
            <span className="absolute -left-[31px] top-7 size-3 rounded-full border-2 border-accent bg-ink shadow-[0_0_14px] shadow-accent md:-left-[47px]" />
            <Reveal delay={i * 80}>
              <article className="card card-hover p-6 md:p-8">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <span className="font-mono text-xs text-accent-soft">{job.period}</span>
                </div>
                <p className="mt-1 text-muted">
                  {job.company} <span className="text-line">•</span> {job.location}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-[15px] leading-relaxed text-fg/80">
                      <span className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                      {pt}
                    </li>
                  ))}
                </ul>
                {job.tags && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span key={t} className="rounded-md bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent-soft">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
