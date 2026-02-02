// @ts-expect-error: Unused variable
import React from "react";
import { strings } from "../data/strings";

export function AboutPromo() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
        <h1 className="text-3xl font-semibold text-white/90">
          {strings.about.title}
        </h1>

        <p className="mt-3 max-w-2xl text-sm text-white/70">
          {strings.about.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {strings.about.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
