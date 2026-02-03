// @ts-expect-error: Unused variable
import React from "react";
import { Link } from "@tanstack/react-router";
import { weeks, withBase } from "../data/weeks";
import { useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";

const COPY = {
  title: "Weekly Photo Contest",
  description: "Photos are uploaded and voted on Discord.",
  winnerPrefix: "Winner:",
  tbdWinner: "TBD",
  winnerNotDecidedAlt: "Winner not decided yet",
  photosSuffix: "photos",
  defaultWinnerSrc: "Galactic_Hub_Calypso_Emblem.png",
} as const;

export function ContestArchive() {
  const theme = useTheme();

  const surface = theme.palette.background.third;
  const border = alpha(theme.palette.text.primary, 0.12);
  const hover = alpha(theme.palette.text.primary, 0.06);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1
        className="text-2xl font-semibold"
        style={{ color: theme.palette.text.primary }}
      >
        {COPY.title}
      </h1>

      <p
        className="mt-2 text-sm"
        style={{ color: theme.palette.text.secondary }}
      >
        {COPY.description}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {weeks.map((w) => {
          const winnerName = w.winner?.author ?? COPY.tbdWinner;
          const winnerSrc = w.winner?.src ?? COPY.defaultWinnerSrc;
          const isDefaultWinner = !w.winner;

          return (
            <Link
              key={w.id}
              to="/contest/$weekId"
              params={{ weekId: w.id }}
              className="rounded-2xl p-5 shadow-sm backdrop-blur transition"
              style={{
                backgroundColor: surface,
                border: `1px solid ${border}`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  hover;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  surface;
              }}
            >
              <div
                className="text-base font-semibold"
                style={{ color: theme.palette.text.primary }}
              >
                {w.label}
              </div>

              <div
                className="mt-1 text-sm"
                style={{ color: theme.palette.text.secondary }}
              >
                {w.dateRange}
                {w.theme ? ` · Theme: ${w.theme}` : ""}
              </div>

              <div
                className="mt-2 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  backgroundColor: alpha(theme.palette.secondary.main, 0.12),
                  border: `1px solid ${alpha(theme.palette.secondary.main, 0.35)}`,
                  color: theme.palette.text.primary,
                }}
              >
                {COPY.winnerPrefix} {winnerName}
              </div>

              <div
                className="mt-4 overflow-hidden rounded-xl"
                style={{
                  backgroundColor: surface,
                  border: `1px solid ${border}`,
                }}
              >
                <img
                  src={withBase(winnerSrc)}
                  alt={
                    w.winner
                      ? `Winner photo by ${winnerName}`
                      : COPY.winnerNotDecidedAlt
                  }
                  loading="lazy"
                  className={[
                    "aspect-[4/3] w-full",
                    isDefaultWinner ? "object-contain p-6" : "object-cover",
                  ].join(" ")}
                />

                <div
                  className="px-4 py-3 text-sm"
                  style={{ color: theme.palette.text.secondary }}
                >
                  {COPY.winnerPrefix}{" "}
                  <span
                    className="font-semibold"
                    style={{ color: theme.palette.text.primary }}
                  >
                    {winnerName}
                  </span>
                </div>
              </div>

              <div
                className="mt-4 text-sm"
                style={{ color: theme.palette.text.secondary }}
              >
                {w.photos.length} {COPY.photosSuffix}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
