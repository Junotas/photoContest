import { createFileRoute, Link } from "@tanstack/react-router";
import { weeks, withBase } from "../data/weeks";

export const Route = createFileRoute("/contest/")({
  component: ContestPage,
});

function ContestPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold text-white/90">
        Weekly Photo Contest
      </h1>
      <p className="mt-2 text-sm text-white/70">
        Photos are uploaded via Git. Voting happens on Discord.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {weeks.map((w) => {
          const winnerName = w.winner?.author ?? "TBD";
          const winnerSrc = w.winner?.src ?? "Galactic_Hub_Calypso_Emblem.png";
          const isDefaultWinner = !w.winner;

          return (
            <Link
              key={w.id}
              to="/contest/$weekId"
              params={{ weekId: w.id }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur hover:bg-white/10"
            >
              <div className="text-base font-semibold text-white/90">
                {w.label}
              </div>

              <div className="mt-1 text-sm text-white/70">
                {w.dateRange}
                {w.theme ? ` · Theme: ${w.theme}` : ""}
              </div>

              <div className="mt-2 inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-200">
                Winner: {winnerName}
              </div>

              <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <img
                  src={withBase(winnerSrc)}
                  alt={
                    w.winner
                      ? `Winner photo by ${winnerName}`
                      : "Winner not decided yet"
                  }
                  loading="lazy"
                  className={[
                    "aspect-[4/3] w-full",
                    isDefaultWinner ? "object-contain p-6" : "object-cover",
                  ].join(" ")}
                />
                <div className="px-4 py-3 text-sm text-white/80">
                  Winner: <span className="font-semibold">{winnerName}</span>
                </div>
              </div>

              <div className="mt-4 text-sm text-white/60">
                {w.photos.length} photos
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
