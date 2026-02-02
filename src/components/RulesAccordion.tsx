// @ts-expect-error: Unused variable
import React from "react";

type Section = {
  title: string;
  items: string[];
};

export function RulesAccordion({ sections }: { sections: Section[] }) {
  return (
    <div className="space-y-3">
      {sections.map((s) => (
        <details
          key={s.title}
          className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur"
        >
          <summary className="cursor-pointer select-none text-sm font-semibold text-white/90">
            {s.title}
          </summary>

          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
            {s.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}
