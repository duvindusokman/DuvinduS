import { education } from "@/data/portfolio";
import LogoBadge from "./LogoBadge";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Education({ n }: { n?: string }) {
  return (
    <Section id="education" n={n} eyebrow="Education" title="Education" center>
      <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 80}>
            <article className="card card-hover flex h-full items-start gap-4 p-6">
              <LogoBadge logo={e.logo} monogram={e.monogram} />
              <div className="min-w-0">
                <h3 className="font-semibold leading-snug">{e.school}</h3>
                <p className="mt-1 text-sm text-accent-soft">{e.qualification}</p>
                <p className="mt-2 font-mono text-xs text-muted">{e.period}</p>
                {e.detail && <p className="mt-2 text-sm text-fg/70">{e.detail}</p>}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
