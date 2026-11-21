import { certifications } from "@/data/portfolio";
import { ArrowUpRight } from "./Icons";
import LogoBadge from "./LogoBadge";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Certifications({ n }: { n?: string }) {
  return (
    <Section id="certifications" n={n} eyebrow="Credentials" title="Certifications" center>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => {
          const body = (
            <article className="card card-hover flex h-full items-start gap-4 p-6">
              <LogoBadge logo={c.logo} monogram={c.issuer.slice(0, 2).toUpperCase()} />
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold leading-snug">{c.name}</h3>
                <p className="mt-1 text-sm text-accent-soft">{c.issuer}</p>
                <p className="mt-2 font-mono text-xs text-muted">{c.issued}</p>
              </div>
              {c.url ? (
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-[11px] text-accent-soft">
                  Verified <ArrowUpRight className="size-3" />
                </span>
              ) : (
                <span className="shrink-0 rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted">
                  Completed
                </span>
              )}
            </article>
          );
          return (
            <Reveal key={c.name} delay={(i % 3) * 80}>
              {c.url ? (
                <a href={c.url} target="_blank" rel="noreferrer" className="block h-full" aria-label={`${c.name} credential`}>
                  {body}
                </a>
              ) : (
                body
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
