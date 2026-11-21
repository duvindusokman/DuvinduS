import { profile } from "@/data/portfolio";
import Reveal from "./Reveal";
import Section from "./Section";

export default function About({ n }: { n?: string }) {
  return (
    <Section id="about" n={n} eyebrow="About" title="Where business meets technology">
      <div className="grid gap-10 md:grid-cols-5">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted md:col-span-3">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="pt-4">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-fg/60">Areas of interest</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {profile.interests.map((it) => (
                <li key={it} className="rounded-full border border-line bg-surface px-3 py-1 text-sm text-fg/80">{it}</li>
              ))}
            </ul>
            <p className="mt-5 text-sm">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-fg/60">Languages</span>
              <span className="ml-3 text-fg/80">{profile.languages.join(" · ")}</span>
            </p>
          </div>
        </Reveal>
        <Reveal delay={120} className="grid grid-cols-3 content-start gap-3 md:col-span-2 md:grid-cols-1">
          {profile.stats.map((s) => (
            <div key={s.label} className="card p-5">
              <p className="text-gradient text-xl font-semibold md:text-2xl">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
