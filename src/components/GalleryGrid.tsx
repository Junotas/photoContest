import { useEffect, useMemo, useState } from "react";
import { useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { withBase } from "../data/weeks";
import type { PhotoEntry } from "../data/weeks";

type Props = {
  photos: PhotoEntry[];
  winnerSrc?: string;
};

export function GalleryGrid({ photos, winnerSrc }: Props) {
  const theme = useTheme();

  const surface = theme.palette.background.third;
  const border = alpha(theme.palette.text.primary, 0.12);
  const hover = alpha(theme.palette.text.primary, 0.06);

  const winnerRing = alpha(theme.palette.secondary.main, 0.65);
  const winnerChipBg = alpha(theme.palette.secondary.main, 0.18);
  const winnerChipBorder = alpha(theme.palette.secondary.main, 0.35);

  const overlayBg = alpha("#000", 0.82);
  const panelBg = alpha(theme.palette.background.default, 0.35);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = useMemo(
    () =>
      photos.map((p) => ({
        ...p,
        fullSrc: withBase(p.src),
        isWinner: winnerSrc === p.src,
      })),
    [photos, winnerSrc]
  );

  const isOpen = openIndex !== null;
  const current = openIndex !== null ? items[openIndex] : null;

  const close = () => setOpenIndex(null);

  const prev = () => {
    if (openIndex === null) return;
    setOpenIndex((openIndex + items.length - 1) % items.length);
  };

  const next = () => {
    if (openIndex === null) return;
    setOpenIndex((openIndex + 1) % items.length);
  };

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, openIndex, items.length]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((p, idx) => {
          return (
            <button
              key={p.src}
              type="button"
              onClick={() => setOpenIndex(idx)}
              className="group relative overflow-hidden rounded-2xl text-left shadow-sm backdrop-blur transition"
              style={{
                backgroundColor: surface,
                border: `1px solid ${border}`,
                boxShadow: p.isWinner ? `0 0 0 2px ${winnerRing}` : undefined,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  hover;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  surface;
              }}
              title={p.title ?? p.author}
            >
              {p.isWinner ? (
                <div
                  className="absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor: winnerChipBg,
                    border: `1px solid ${winnerChipBorder}`,
                    color: theme.palette.text.primary,
                  }}
                >
                  Winner
                </div>
              ) : null}

              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={p.fullSrc}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="px-4 py-3">
                <div
                  className="text-sm font-semibold"
                  style={{ color: theme.palette.text.primary }}
                >
                  {p.author}
                </div>
                {p.title ? (
                  <div
                    className="text-sm"
                    style={{ color: theme.palette.text.secondary }}
                  >
                    {p.title}
                  </div>
                ) : null}
              </div>
            </button>
          );
        })}
      </div>

      {isOpen && current ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: overlayBg }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-2xl backdrop-blur"
            style={{
              backgroundColor: panelBg,
              border: `1px solid ${alpha(theme.palette.text.primary, 0.14)}`,
            }}
          >
            <div className="relative">
              <img
                src={current.fullSrc}
                alt={current.alt}
                className="max-h-[78vh] w-full object-contain"
                draggable={false}
              />

              <button
                type="button"
                onClick={close}
                className="absolute right-3 top-3 rounded-xl px-3 py-2 text-sm font-semibold"
                style={{
                  backgroundColor: alpha(
                    theme.palette.background.default,
                    0.55
                  ),
                  border: `1px solid ${alpha(theme.palette.text.primary, 0.18)}`,
                  color: theme.palette.text.primary,
                }}
                aria-label="Close"
              >
                Close
              </button>

              <button
                type="button"
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-xl px-3 py-2 text-sm font-semibold"
                style={{
                  backgroundColor: alpha(
                    theme.palette.background.default,
                    0.55
                  ),
                  border: `1px solid ${alpha(theme.palette.text.primary, 0.18)}`,
                  color: theme.palette.text.primary,
                }}
                aria-label="Previous"
              >
                ←
              </button>

              <button
                type="button"
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl px-3 py-2 text-sm font-semibold"
                style={{
                  backgroundColor: alpha(
                    theme.palette.background.default,
                    0.55
                  ),
                  border: `1px solid ${alpha(theme.palette.text.primary, 0.18)}`,
                  color: theme.palette.text.primary,
                }}
                aria-label="Next"
              >
                →
              </button>

              {current.isWinner ? (
                <div
                  className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor: winnerChipBg,
                    border: `1px solid ${winnerChipBorder}`,
                    color: theme.palette.text.primary,
                  }}
                >
                  Winner
                </div>
              ) : null}
            </div>

            <div className="flex items-center justify-between gap-3 px-4 py-3">
              <div>
                <div
                  className="text-sm font-semibold"
                  style={{ color: theme.palette.text.primary }}
                >
                  {current.author}
                  {current.title ? ` · ${current.title}` : ""}
                </div>
                <div
                  className="text-xs"
                  style={{ color: theme.palette.text.secondary }}
                >
                  {openIndex! + 1} / {items.length}
                </div>
              </div>

              <a
                href={current.fullSrc}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl px-3 py-2 text-sm font-semibold transition hover:opacity-90"
                style={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                }}
              >
                Open image
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
