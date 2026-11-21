/** Square logo tile: shows an image if given, otherwise a maroon monogram. */
export default function LogoBadge({
  logo,
  monogram,
  size = "size-12",
}: {
  logo?: string;
  monogram: string;
  size?: string;
}) {
  if (logo) {
    return (
      <span className={`${size} grid shrink-0 place-items-center overflow-hidden rounded-xl border border-line bg-white p-1.5`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt="" className="size-full object-contain" />
      </span>
    );
  }
  return (
    <span
      aria-hidden
      className={`${size} grid shrink-0 place-items-center rounded-xl border border-accent/40 bg-gradient-to-br from-accent-deep to-ink font-mono font-bold tracking-tight text-accent-soft ${
        monogram.length > 3 ? "text-[10px]" : "text-xs"
      }`}
    >
      {monogram}
    </span>
  );
}
