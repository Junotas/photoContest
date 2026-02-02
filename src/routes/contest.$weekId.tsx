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
          Archive
        </Link>
      </div>

      {week.winner ? (
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm backdrop-blur">
          <div className="px-6 py-4 text-sm text-white/80">
            Winner: <span className="font-semibold">{week.winner.author}</span>
          </div>
          <a href={withBase(week.winner.src)} target="_blank" rel="noreferrer">
            <img
              src={withBase(week.winner.src)}
              alt={`Winner photo by ${week.winner.author}`}
              className="aspect-[16/9] w-full object-cover"
            />
          </a>
        </div>
      ) : null}

      <div className="mt-8">
        <GalleryGrid photos={week.photos} />
      </div>
    </div>
  );
}
