// @ts-expect-error: Unused variable
import React from "react";
import { strings } from "../data/strings";
import { useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";

export function AboutPromo() {
  const theme = useTheme();

  const surface = theme.palette.background.third;
  const border = alpha(theme.palette.text.primary, 0.12);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div
        className="rounded-2xl p-6 shadow-sm backdrop-blur"
        style={{ backgroundColor: surface, border: `1px solid ${border}` }}
      >
        <h1
          className="text-3xl font-semibold"
          style={{ color: theme.palette.text.primary }}
        >
          {strings.about.title}
        </h1>

        <p
          className="mt-3 max-w-2xl text-sm"
          style={{ color: theme.palette.text.secondary }}
        >
          {strings.about.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {strings.about.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl px-4 py-2 text-sm font-semibold transition hover:opacity-90"
              style={{
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.secondary.contrastText,
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
