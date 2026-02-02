import { withBase } from "../data/weeks";
import type { PhotoEntry } from "../data/weeks";

type Props = {
  photos: PhotoEntry[];
  winnerSrc?: string;
};

export function GalleryGrid({ photos, winnerSrc }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {photos.map((p) => {
        const imgSrc = withBase(p.src);
        const isWinner = winnerSrc === p.src;

        return (
          <a
            key={p.src}
            href={imgSrc}
            target="_blank"
            rel="noreferrer"
            className={[
              "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm backdrop-blur transition hover:bg-white/10",
              isWinner ? "ring-2 ring-amber-300/80" : "",
            ].join(" ")}
            title={p.title ?? p.author}
          >
            {isWinner ? (
              <div className="absolute left-3 top-3 z-10 rounded-full border border-amber-300/40 bg-amber-300/15 px-3 py-1 text-xs font-semibold text-amber-200">
                Winner
              </div>
            ) : null}

            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src={imgSrc}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              />
            </div>

            <div className="px-4 py-3">
              <div className="text-sm font-semibold text-white/90">
                {p.author}
              </div>
              {p.title ? (
                <div className="text-sm text-white/70">{p.title}</div>
              ) : null}
            </div>
          </a>
        );
      })}
    </div>
  );
}
