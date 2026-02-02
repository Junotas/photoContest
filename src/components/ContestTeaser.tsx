import { Link } from "@tanstack/react-router";
import { weeks, withBase } from "../data/weeks";

export function ContestTeaser() {
  const latest = weeks[0];
  if (!latest) return null;

  return (
    <section className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white/90">
            Weekly Photo Contest
          </h2>
          <div className="mt-1 text-sm text-white/70">
            {latest.label} · {latest.dateRange}
            {latest.theme ? ` · Theme: ${latest.theme}` : ""}
          </div>
        </div>

        <div className="flex gap-2">
          <Link
            to="/contest"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
          >
            Archive
          </Link>

          <Link
            to="/contest/$weekId"
            params={{ weekId: latest.id }}
            className="rounded-xl bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white"
          >
            View week
          </Link>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-6">
        {latest.photos.slice(0, 6).map((p) => (
          <div
            key={p.src}
            className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
          >
            <img
              src={withBase(p.src)}
              alt={p.alt}
              loading="lazy"
              className="aspect-square h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
