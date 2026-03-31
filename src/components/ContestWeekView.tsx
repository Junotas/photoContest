// @ts-expect-error: Unused variable
import React from "react";
import { Link } from "@tanstack/react-router";
import { useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { getWeekById, getFirstPlaceEntries, withBase } from "../data/weeks";
import { GalleryGrid } from "./GalleryGrid";

type Props = {
  weekId: string;
};

const COPY = {
  weekNotFound: "Week not found",
  backToArchive: "Back to archive",
  winnerPrefix: "Winner:",
  jointWinnersPrefix: "Joint winners:",
} as const;

export function ContestWeekView({ weekId }: Props) {
  const theme = useTheme();
  const week = getWeekById(weekId);

  if (!week) {
    return (
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <h1
          className="text-2xl font-semibold"
          style={{ color: theme.palette.text.primary }}
        >
          {COPY.weekNotFound}
        </h1>

        <Link
          to="/contest"
          className="mt-4 inline-block text-sm underline"
          style={{ color: theme.palette.text.secondary }}
        >
          {COPY.backToArchive}
        </Link>
      </div>
    );
  }

  const firstPlaceEntries = getFirstPlaceEntries(week);
  const hasWinners = firstPlaceEntries.length > 0;
  const isJointWinner = firstPlaceEntries.length > 1;
  const winnerPrefix = isJointWinner
    ? COPY.jointWinnersPrefix
    : COPY.winnerPrefix;
  const winnerLabel = firstPlaceEntries.map((entry) => entry.author).join(", ");

  const jointWinnersGridClass =
    firstPlaceEntries.length === 2
      ? "grid gap-4 p-4 sm:grid-cols-2"
      : firstPlaceEntries.length === 3
        ? "grid gap-4 p-4 md:grid-cols-3"
        : firstPlaceEntries.length >= 4
          ? "grid gap-4 p-4 sm:grid-cols-2 xl:grid-cols-3"
          : "grid gap-4 p-4";

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1
            className="text-2xl font-semibold"
            style={{ color: theme.palette.text.primary }}
          >
            {week.label}
          </h1>
          <div
            className="mt-1 text-sm"
            style={{ color: theme.palette.text.secondary }}
          >
            {week.dateRange}
            {week.theme ? ` · Theme: ${week.theme}` : ""}
          </div>
        </div>

        <Link
          to="/contest"
          className="text-sm underline"
          style={{ color: theme.palette.text.secondary }}
        >
          {COPY.backToArchive}
        </Link>
      </div>

      {hasWinners ? (
        <div
          className="mt-6 overflow-hidden rounded-2xl shadow-sm backdrop-blur"
          style={{
            backgroundColor: alpha(theme.palette.secondary.main, 0.12),
            border: `1px solid ${alpha(theme.palette.secondary.main, 0.35)}`,
          }}
        >
          <div
            className="px-6 py-4 text-sm"
            style={{ color: theme.palette.text.secondary }}
          >
            {winnerPrefix}{" "}
            <span
              className="font-semibold"
              style={{ color: theme.palette.text.primary }}
            >
              {winnerLabel}
            </span>
          </div>

          {firstPlaceEntries.length === 1 ? (
            <img
              src={withBase(firstPlaceEntries[0].src)}
              alt={`${winnerPrefix} ${winnerLabel}`}
              className="aspect-[16/9] w-full object-cover"
            />
          ) : (
            <div className={jointWinnersGridClass}>
              {firstPlaceEntries.map((entry) => (
                <div
                  key={`${week.id}-${entry.author}-${entry.src}`}
                  className="overflow-hidden rounded-xl"
                  style={{
                    backgroundColor: theme.palette.background.third,
                    border: `1px solid ${alpha(theme.palette.text.primary, 0.12)}`,
                  }}
                >
                  <img
                    src={withBase(entry.src)}
                    alt={`${winnerPrefix} ${entry.author}`}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div
                    className="px-4 py-3 text-sm font-semibold"
                    style={{ color: theme.palette.text.primary }}
                  >
                    {entry.author}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : null}

      <div className="mt-8">
        <GalleryGrid
          photos={week.photos}
          winnerSrcs={firstPlaceEntries.map((entry) => entry.src)}
        />
      </div>
    </div>
  );
}
