import Image from "next/image";
import { profile } from "@/data/portfolio";
import { ArrowUpRight, Download, GitHub, LinkedIn } from "./Icons";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* Background: grid + purple glow orbs */}
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/25 blur-[140px]" />
      <div className="pointer-events-none absolute right-[-10%] top-1/3 h-72 w-72 rounded-full bg-glow/15 blur-[120px]" />

      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1fr_auto] lg:gap-16">
        {/* ── Photo (top on mobile, right on desktop) ── */}
        <Reveal className="order-first lg:order-last">
          <div className="relative mx-auto w-fit">
            {/* glow behind photo */}
            <div className="absolute -inset-6 rounded-full bg-accent/30 blur-3xl lg:rounded-[3rem]" />
            {/* gradient frame */}
            <div className="relative rounded-full bg-gradient-to-br from-accent-soft via-accent to-accent-deep p-[3px] shadow-[0_30px_80px_-20px] shadow-accent/60 lg:rounded-[2.25rem]">
              <div className="relative size-32 overflow-hidden rounded-full bg-surface sm:size-40 lg:h-[440px] lg:w-[360px] lg:rounded-[2.1rem]">
                <Image
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 360px, 160px"
                  className="object-cover object-top"
                />
                {/* subtle bottom fade into the frame */}
                <div className="absolute inset-x-0 bottom-0 hidden h-1/3 bg-gradient-to-t from-ink/70 to-transparent lg:block" />
              </div>
            </div>
            {/* floating name tag (desktop) */}
            <div className="absolute -bottom-5 -left-8 hidden items-center gap-3 rounded-2xl border border-line bg-surface/90 px-4 py-3 backdrop-blur-xl lg:flex">
              <span className="grid size-9 place-items-center rounded-xl bg-accent/20 font-mono text-xs font-bold text-accent-soft">
                {profile.initials}
              </span>
              <div className="leading-tight">
                <p className="text-sm font-medium">{profile.name}</p>
                <p className="text-xs text-muted">{profile.location}</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Text ── */}
        <div className="text-center lg:text-left">
          <Reveal>
            {profile.available && (
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5 text-xs text-muted backdrop-blur">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/70" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                </span>
                Open to opportunities
              </span>
            )}
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl xl:text-7xl">
              <span className="block text-fg">Hi, I&apos;m</span>
              <span className="text-gradient block">{profile.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 font-mono text-sm text-accent-soft md:text-base">{profile.role}</p>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted md:text-xl lg:mx-0">{profile.tagline}</p>
            <ul className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start" aria-label="Focus areas">
              {profile.focus.map((f) => (
                <li key={f} className="rounded-full border border-line bg-surface/60 px-3 py-1 text-xs text-fg/75 backdrop-blur">
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href="#experience"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-medium text-white shadow-[0_10px_40px_-10px] shadow-accent transition hover:bg-accent-deep"
              >
                See my experience
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={profile.cvUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-5 py-3 text-sm font-medium text-fg transition hover:border-accent/60"
              >
                <Download className="size-4" /> Download CV
              </a>
              <div className="ml-1 flex items-center gap-1">
                {profile.socials.linkedin && (
                  <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
                     className="grid size-11 place-items-center rounded-xl text-muted transition hover:bg-white/5 hover:text-fg">
                    <LinkedIn className="size-5" />
                  </a>
                )}
                {profile.socials.github && (
                  <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"
                     className="grid size-11 place-items-center rounded-xl text-muted transition hover:bg-white/5 hover:text-fg">
                    <GitHub className="size-5" />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
