// @ts-expect-error: Unused variable
import React from "react";
import { weeks, getFirstPlaceEntries } from "../data/weeks";
import { GalleryGrid } from "./GalleryGrid";
import { useTheme } from "@mui/material";

const COPY = {
  title: "Weekly Winners",
  winnerTitle: "winner",
  jointWinnerTitle: "joint winner",
} as const;

export function WinnersGallery() {
  const theme = useTheme();

  const winners = weeks.flatMap((w) => {
    const firstPlaceEntries = getFirstPlaceEntries(w);
    const isJointWinner = firstPlaceEntries.length > 1;

    return firstPlaceEntries.map((entry) => ({
      src: entry.src,
      author: entry.author,
      alt: `Winner of ${w.label} by ${entry.author}`,
      title: `${w.label} ${isJointWinner ? COPY.jointWinnerTitle : COPY.winnerTitle}`,
    }));
  });

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1
        className="mb-6 text-2xl font-semibold"
        style={{ color: theme.palette.text.primary }}
      >
        {COPY.title}
      </h1>

      <GalleryGrid photos={winners} />
    </div>
  );
}