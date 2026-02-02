// @ts-expect-error: Unused variable
import React from "react";
import { Link } from "@tanstack/react-router";
import { strings } from "../data/strings";
import { RulesAccordion } from "./RulesAccordion";

export function HomeLanding() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
        <h1 className="text-3xl font-semibold text-white/90">
          {strings.home.title}
        </h1>
        <p className="mt-2 text-white/70">{strings.home.tagline}</p>
        <p className="mt-3 max-w-2xl text-sm text-white/70">
          {strings.home.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <Link
            to="/contest"
            className="rounded-xl bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white"
          >
            {strings.home.primaryCta}
          </Link>

          <Link
            to="/about"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
          >
            {strings.nav.about}
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-white/90">
          {strings.home.rulesTitle}
        </h2>
        <p className="mt-2 text-sm text-white/70">{strings.home.rulesIntro}</p>

        <div className="mt-4">
          <RulesAccordion sections={strings.home.rules} />
        </div>
      </div>
    </div>
  );
}
