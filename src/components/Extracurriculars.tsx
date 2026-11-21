import { extracurriculars } from "@/data/portfolio";
import LogoBadge from "./LogoBadge";
import Reveal from "./Reveal";
import Section from "./Section";

// Rotating pill colours for the roles inside each card.
const pill = [
  "border-accent/50 bg-accent/15 text-accent-soft",
  "border-amber-500/40 bg-amber-500/10 text-amber-300",
  "border-rose-300/30 bg-rose-300/10 text-rose-200",
];

export default function Extracurriculars({ n }: { n?: string }) {
  return (
    <Section id="activities" n={n} eyebrow="Leadership" title="Extracurricular Activities" center>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {extracurriculars.map((a, i) => (
          <Reveal key={a.org} delay={(i % 3) * 80}>
            <article className="card card-hover flex h-full flex-col p-6">
              <div className="flex items-start gap-3.5">
                <LogoBadge logo={a.logo} monogram={a.monogram} size="size-11" />
                <div className="min-w-0">
                  <h3 className="font-semibold leading-snug">{a.org}</h3>
                  <p className="mt-1 font-mono text-xs text-muted">{a.period}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-4">
                {a.roles.map((r, j) => (
                  <li key={r.title + (r.period ?? "")}>
                    <span
                      className={`inline-block rounded-full border px-3 py-1 font-mono text-[11px] font-semibold ${pill[j % pill.length]}`}
                    >
                      {r.title}
                      {r.period && <span className="font-normal opacity-80"> · {r.period}</span>}
                    </span>
                    {r.description && <p className="mt-2 text-sm leading-relaxed text-muted">{r.description}</p>}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
