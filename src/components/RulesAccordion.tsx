// @ts-expect-error: Unused variable
import React from "react";
import { useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";

type Section = {
  title: string;
  items: string[];
};

export function RulesAccordion({ sections }: { sections: Section[] }) {
  const theme = useTheme();

  const surface = theme.palette.background.third;
  const border = alpha(theme.palette.text.primary, 0.12);
  const summaryColor = theme.palette.text.primary;
  const bodyColor = theme.palette.text.secondary;

  return (
    <div className="space-y-3">
      {sections.map((s) => (
        <details
          key={s.title}
          className="rounded-2xl p-4 shadow-sm backdrop-blur"
          style={{ backgroundColor: surface, border: `1px solid ${border}` }}
        >
          <summary
            className="cursor-pointer select-none text-sm font-semibold"
            style={{ color: summaryColor }}
          >
            {s.title}
          </summary>

          <ul
            className="mt-3 list-disc space-y-2 pl-5 text-sm"
            style={{ color: bodyColor }}
          >
            {s.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}
