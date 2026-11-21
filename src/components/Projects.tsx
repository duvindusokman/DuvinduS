import { projects } from "@/data/portfolio";
import { ArrowUpRight, GitHub } from "./Icons";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Projects({ n }: { n?: string }) {
  return (
    <Section id="projects" n={n} eyebrow="Projects" title="Things I've built">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 100}>
            <article className="card card-hover group relative flex h-full flex-col overflow-hidden p-7">
              {/* hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-accent/0 blur-3xl transition-colors duration-500 group-hover:bg-accent/20" />

              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-xs text-muted">
                  {String(i + 1).padStart(2, "0")} <span className="text-line">/</span>{" "}
                  <span className="text-accent-soft">{p.type}</span>
                </span>
                {p.featured && (
                  <span className="rounded-full border border-accent/40 px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-accent-soft">
                    Featured
                  </span>
                )}
              </div>

              <h3 className="mt-6 text-2xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{p.description}</p>
              {p.highlights && (
                <ul className="mt-5 flex-1 space-y-1.5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-sm text-fg/80">
                      <span className="h-px w-3 bg-accent" /> {h}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-fg/70">
                    {t}
                  </span>
                ))}
              </div>

              {(p.link || p.repo) && (
                <div className="mt-6 flex gap-4 border-t border-line pt-5 text-sm">
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-accent-soft hover:text-white">
                      {p.link.replace(/^https?:\/\//, "")} <ArrowUpRight className="size-4" />
                    </a>
                  )}
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-muted hover:text-white">
                      <GitHub className="size-4" /> Code
                    </a>
                  )}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
