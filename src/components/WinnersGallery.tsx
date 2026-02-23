// @ts-expect-error: Unused variable
import React from "react";
import { weeks } from "../data/weeks";
import { GalleryGrid } from "./GalleryGrid";

export function WinnersGallery() {
  const winners = weeks
    .filter((w) => w.winner)
    .map((w) => ({
      src: w.winner!.src,
      author: w.winner!.author,
      alt: `Winner of ${w.label} by ${w.winner!.author}`,
      title: `${w.label} winner`,
    }));

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="mb-6 text-2xl font-semibold text-white/90">
        Weekly Winners
      </h1>

      <GalleryGrid photos={winners} />
    </div>
  );
}