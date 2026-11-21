"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/portfolio";
import { Check, Copy, GitHub, LinkedIn, Mail, MapPin, Phone } from "./Icons";
import Reveal from "./Reveal";

// Optional: create a free form at https://formspree.io and put its ID in
// .env.local / Vercel env vars as NEXT_PUBLIC_FORMSPREE_ID.
// Without it, the form falls back to opening the visitor's email app.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact({ n }: { n?: string }) {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked — ignore */
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${data.get("name")}`);
      const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const input =
    "w-full rounded-xl border border-line bg-ink/70 px-4 py-3 text-fg placeholder:text-muted/60 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25";

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-80 max-w-3xl rounded-full bg-accent/15 blur-[120px]" />

      <div className="relative grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-soft">{n ? `${n} — ` : ""}Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Let&apos;s solve the <span className="text-gradient">right problem together.</span>
          </h2>
          <p className="mt-5 max-w-md text-lg text-muted">
            Hiring for a Business Analyst or project role, or have a project that needs structure? My inbox is always open.
          </p>

          <ul className="mt-10 space-y-3">
            <li className="card flex items-center justify-between gap-3 p-4">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-white">
                <Mail className="size-5 text-accent-soft" /> {profile.email}
              </a>
              <button
                onClick={copyEmail}
                className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs text-muted hover:bg-white/5 hover:text-fg"
                aria-label="Copy email address"
              >
                {copied ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </li>
            {profile.phone && (
              <li className="card flex items-center gap-3 p-4">
                <Phone className="size-5 text-accent-soft" />
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-white">{profile.phone}</a>
              </li>
            )}
            <li className="card flex items-center gap-3 p-4">
              <MapPin className="size-5 text-accent-soft" /> {profile.location}
            </li>
          </ul>

          <div className="mt-6 flex gap-3">
            {profile.socials.linkedin && (
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer"
                 className="card card-hover flex items-center gap-2 px-4 py-3 text-sm">
                <LinkedIn className="size-4 text-accent-soft" /> LinkedIn
              </a>
            )}
            {profile.socials.github && (
              <a href={profile.socials.github} target="_blank" rel="noreferrer"
                 className="card card-hover flex items-center gap-2 px-4 py-3 text-sm">
                <GitHub className="size-4 text-accent-soft" /> GitHub
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} className="card space-y-4 p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm text-muted">Name</span>
                <input name="name" required className={input} placeholder="Jane Doe" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm text-muted">Email</span>
                <input name="email" type="email" required className={input} placeholder="jane@company.com" />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-sm text-muted">Message</span>
              <textarea name="message" required rows={6} className={`${input} resize-none`} placeholder="Tell me about the opportunity…" />
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-xl bg-accent px-5 py-3.5 font-medium text-white shadow-[0_10px_40px_-10px] shadow-accent transition hover:bg-accent-deep disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            {status === "sent" && <p className="text-center text-sm text-emerald-400">Thanks — I&apos;ll get back to you soon.</p>}
            {status === "error" && <p className="text-center text-sm text-rose-400">Something went wrong. Please email me directly.</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
