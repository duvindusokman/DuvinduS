import { profile } from "@/data/portfolio";
import { ArrowUpRight, Download, FileText } from "./Icons";
import Reveal from "./Reveal";

/** Prominent CV call-to-action band. */
export default function CVDownload() {
  return (
    <section id="cv" className="mx-auto max-w-6xl px-6 py-12">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-accent-deep/40 via-surface to-surface p-8 md:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-accent/30 blur-[100px]" />
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-5">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-accent/20 text-accent-soft ring-1 ring-accent/40">
                <FileText className="size-7" />
              </span>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Want the full picture?</h2>
                <p className="mt-2 max-w-md text-muted">
                  Download my CV for a complete overview of my experience, education and achievements.
                </p>
                <p className="mt-3 font-mono text-xs text-accent-soft">PDF · Updated {profile.cvUpdated}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={profile.cvUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-medium text-white shadow-[0_10px_40px_-10px] shadow-accent transition hover:bg-accent-deep"
              >
                <Download className="size-5" /> Download CV
              </a>
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-ink/60 px-6 py-3.5 font-medium text-fg transition hover:border-accent/60"
              >
                View online <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
