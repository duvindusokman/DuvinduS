"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { toolCategories, tools, type ToolCategoryId } from "@/data/portfolio";
import { Shuffle } from "./Icons";
import Reveal from "./Reveal";

type Mode = "scatter" | "all" | ToolCategoryId;

const catById = Object.fromEntries(toolCategories.map((c) => [c.id, c])) as Record<
  ToolCategoryId,
  (typeof toolCategories)[number]
>;
const catOrder = toolCategories.map((c) => c.id) as ToolCategoryId[];

/** Deterministic shuffle so server and client render the same first frame. */
function seededShuffle<T>(arr: T[], seed: number) {
  const a = [...arr];
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const names = tools.map((t) => t.name);
const initialOrder = seededShuffle(names, 7);

function grouped(first?: ToolCategoryId) {
  const order = first ? [first, ...catOrder.filter((c) => c !== first)] : catOrder;
  return order.flatMap((c) => tools.filter((t) => t.category === c).map((t) => t.name));
}

export default function Tools({ n }: { n?: string }) {
  const [mode, setMode] = useState<Mode>("scatter");
  const [order, setOrder] = useState<string[]>(initialOrder);
  const tiles = useRef(new Map<string, HTMLLIElement>());
  const prevRects = useRef<Map<string, DOMRect> | null>(null);

  const snapshot = () => {
    const m = new Map<string, DOMRect>();
    tiles.current.forEach((el, k) => m.set(k, el.getBoundingClientRect()));
    prevRects.current = m;
  };

  // FLIP: animate each tile from its old position to its new one.
  useLayoutEffect(() => {
    const prev = prevRects.current;
    if (!prev) return;
    prevRects.current = null;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    tiles.current.forEach((el, k) => {
      const a = prev.get(k);
      if (!a) return;
      const b = el.getBoundingClientRect();
      const dx = a.left - b.left;
      const dy = a.top - b.top;
      if (!dx && !dy) return;
      el.animate(
        [{ transform: `translate(${dx}px, ${dy}px)` }, { transform: "translate(0, 0)" }],
        { duration: 650, easing: "cubic-bezier(.2,.8,.2,1)", delay: Math.random() * 90 }
      );
    });
  }, [order]);

  const choose = (m: Mode) => {
    snapshot();
    if (m === "scatter") {
      setMode("scatter");
      setOrder((o) => seededShuffle(o, Math.floor(Math.random() * 100000) + 1));
      return;
    }
    const next = m === mode ? "all" : m;
    setMode(next);
    setOrder(grouped(next === "all" ? undefined : next));
  };

  const active = mode !== "scatter" && mode !== "all" ? catById[mode] : null;
  const total = tools.length;

  return (
    <section id="tools" className="relative mx-auto max-w-6xl overflow-hidden px-6 py-24 md:py-32">
      {/* giant watermark */}
      <p
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-8 select-none text-center text-[22vw] font-bold leading-none tracking-tight text-white/[0.025] md:text-[220px]"
      >
        TOOLS
      </p>

      <Reveal className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-soft">
          {n ? `${n} — ` : ""}Toolkit
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Tools I work with</h2>
        <p className="mt-4 text-sm text-muted">Click a category to group · ↻ to scatter</p>
      </Reveal>

      {/* Category chips */}
      <Reveal delay={80}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2" role="toolbar" aria-label="Group tools">
          <button
            onClick={() => choose("all")}
            aria-pressed={mode === "all"}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              mode === "all" ? "border-fg/40 bg-white/10 text-fg" : "border-line bg-surface/70 text-muted hover:text-fg"
            }`}
          >
            All <span className="ml-1 font-mono text-xs opacity-60">{total}</span>
          </button>
          {toolCategories.map((c) => {
            const on = mode === c.id;
            const count = tools.filter((t) => t.category === c.id).length;
            return (
              <button
                key={c.id}
                onClick={() => choose(c.id)}
                aria-pressed={on}
                className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition"
                style={{
                  borderColor: on ? c.color : "var(--color-line)",
                  background: on ? `${c.color}22` : "color-mix(in oklab, var(--color-surface) 70%, transparent)",
                  color: on ? "var(--color-fg)" : "var(--color-muted)",
                }}
              >
                <span className="size-2 rounded-full" style={{ background: c.color, boxShadow: `0 0 10px ${c.color}` }} />
                {c.label}
                <span className="font-mono text-xs opacity-60">{count}</span>
              </button>
            );
          })}
          <button
            onClick={() => choose("scatter")}
            aria-label="Scatter tools"
            title="Scatter"
            className="grid size-10 place-items-center rounded-full border border-line bg-surface/70 text-muted transition hover:rotate-180 hover:text-fg"
            style={{ transitionDuration: "500ms" }}
          >
            <Shuffle className="size-4" />
          </button>
        </div>
      </Reveal>

      {/* Tile grid */}
      <ul className="relative mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3 sm:gap-4">
        {order.map((name) => {
          const t = tools.find((x) => x.name === name)!;
          const c = catById[t.category];
          const dim = active && t.category !== active.id;
          return (
            <li
              key={name}
              ref={(el) => {
                if (el) tiles.current.set(name, el);
                else tiles.current.delete(name);
              }}
              className="group relative aspect-square w-[calc((100%-2.25rem)/4)] sm:w-[calc((100%-5rem)/6)]"
            >
              <div
                tabIndex={0}
                aria-label={`${t.name} — ${c.label}`}
                className="grid size-full place-items-center rounded-2xl border bg-surface/90 outline-none transition duration-300 hover:-translate-y-1 focus-visible:-translate-y-1"
                style={{
                  borderColor: `${c.color}${dim ? "33" : "99"}`,
                  boxShadow: dim ? "none" : `0 0 18px -6px ${c.color}, inset 0 0 12px -8px ${c.color}`,
                  opacity: dim ? 0.28 : 1,
                  filter: dim ? "grayscale(0.8)" : "none",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.icon} alt="" className="size-[46%] object-contain" draggable={false} />
              </div>
              <span className="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md border border-line bg-ink px-2 py-1 text-xs text-fg opacity-0 transition group-focus-within:opacity-100 group-hover:opacity-100">
                {t.name}
              </span>
            </li>
          );
        })}
      </ul>

      {/* Dashboard readout */}
      <Reveal delay={120}>
        <div className="card relative mx-auto mt-12 max-w-3xl p-5 md:p-6">
          <div className="flex items-center justify-between gap-4 text-xs text-muted">
            <span className="font-mono uppercase tracking-[0.2em]">Stack breakdown</span>
            <span className="font-mono">{total} tools</span>
          </div>
          <div className="mt-3 flex h-2.5 overflow-hidden rounded-full bg-ink">
            {toolCategories.map((c) => {
              const count = tools.filter((t) => t.category === c.id).length;
              return (
                <button
                  key={c.id}
                  onClick={() => choose(c.id)}
                  aria-label={`Group ${c.label}`}
                  className="h-full transition-opacity"
                  style={{
                    width: `${(count / total) * 100}%`,
                    background: c.color,
                    opacity: active && active.id !== c.id ? 0.25 : 1,
                  }}
                />
              );
            })}
          </div>
          <p className="mt-4 min-h-12 text-sm leading-relaxed text-fg/80" aria-live="polite">
            {active ? (
              <>
                <span className="font-semibold" style={{ color: active.color }}>
                  {active.label}.
                </span>{" "}
                {active.blurb}
              </>
            ) : (
              "From requirements documents and process models to SQL, dashboards and design — pick a category to see how I use each part of my toolkit."
            )}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
