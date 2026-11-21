import { cacheLife } from "next/cache";
import { profile } from "@/data/portfolio";

// Next.js 16 (Cache Components) won't prerender `new Date()` directly,
// so the year is computed inside a cached function, refreshed daily.
async function currentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await currentYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted sm:flex-row">
        <p>© {year} {profile.name}</p>
        <p className="font-mono text-xs">Built with Next.js · Tailwind CSS · Vercel</p>
      </div>
    </footer>
  );
}
