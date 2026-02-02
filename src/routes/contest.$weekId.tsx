import { createFileRoute, Link } from "@tanstack/react-router";
import { getWeekById, withBase } from "../data/weeks";
import { GalleryGrid } from "../components/GalleryGrid";

export const Route = createFileRoute("/contest/$weekId")({
  component: ContestWeekPage,
});

function ContestWeekPage() {
  const { weekId } = Route.useParams();
  const week = getWeekById(weekId);

  if (!week) {
    return (
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <h1 className="text-2xl font-semibold text-white/90">Week not found</h1>
        <Link
          to="/contest"
          className="mt-4 inline-block text-sm text-white/70 underline"
        >
          Back to archive
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white/90">{week.label}</h1>
          <div className="mt-1 text-sm text-white/70">
            {week.dateRange}
            {week.theme ? ` · Theme: ${week.theme}` : ""}
          </div>
        </div>

        <Link to="/contest" className="text-sm text-white/70 underline">
          Back to Archive
        </Link>
      </div>

      {week.winner ? (
        <div className="mt-6 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-amber-200">
                Winner
              </div>
              <div className="text-lg font-semibold text-white/90">
                {week.winner.author}
              </div>
            </div>

            <a
              href={withBase(week.winner.src)}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white"
            >
              Open winning photo
            </a>
          </div>

          <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <img
              src={withBase(week.winner.src)}
              alt={`Winner photo by ${week.winner.author}`}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </div>
      ) : null}

      <div className="mt-8">
        <GalleryGrid photos={week.photos} winnerSrc={week.winner?.src} />
      </div>
    </div>
  );
}
