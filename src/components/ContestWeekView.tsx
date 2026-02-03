// @ts-expect-error: Unused variable
import React from "react";
import { Link } from "@tanstack/react-router";
import { useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { getWeekById, withBase } from "../data/weeks";
import { GalleryGrid } from "./GalleryGrid";

type Props = {
  weekId: string;
};

const COPY = {
  weekNotFound: "Week not found",
  backToArchive: "Back to archive",
  winnerPrefix: "Winner:",
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

      {week.winner ? (
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
            {COPY.winnerPrefix}{" "}
            <span
              className="font-semibold"
              style={{ color: theme.palette.text.primary }}
            >
              {week.winner.author}
            </span>
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
        <GalleryGrid photos={week.photos} winnerSrc={week.winner?.src} />
      </div>
    </div>
  );
}
