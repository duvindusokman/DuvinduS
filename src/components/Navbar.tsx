"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/data/portfolio";
import { Close, Download, Menu } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-line/80 bg-ink/75 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Back to top">
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-deep font-mono text-sm font-bold text-white shadow-[0_0_24px_-4px] shadow-accent/60">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-medium text-fg/90 sm:block">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-white/5 hover:text-fg"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.cvUrl}
            download
            className="hidden items-center gap-2 rounded-xl border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent-soft transition hover:bg-accent/20 sm:flex"
          >
            <Download className="size-4" /> CV
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid size-10 place-items-center rounded-xl text-fg hover:bg-white/5 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <Close className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-line/80 px-6 pb-6 pt-2 lg:hidden">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-3 text-base text-muted hover:text-fg"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.cvUrl}
              download
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-medium text-white"
            >
              <Download className="size-4" /> Download CV
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
