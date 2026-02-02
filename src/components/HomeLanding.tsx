// @ts-expect-error: Unused variable
import React from "react";
import { Link } from "@tanstack/react-router";
import { strings } from "../data/strings";
import { useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";

export function HomeLanding() {
  const theme = useTheme();

  const steps = strings.home.steps ?? [];
  const checklist = strings.home.checklist ?? [];
  const submitCard = strings.home.submitCard;

  const surface = theme.palette.background.third;
  const border = alpha(theme.palette.text.primary, 0.12);
  const softGlow = alpha(theme.palette.primary.light, 0.25);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div
        className="relative overflow-hidden rounded-2xl p-6 shadow-sm backdrop-blur"
        style={{ backgroundColor: surface, border: `1px solid ${border}` }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
          <div
            className="absolute -right-28 -top-28 h-96 w-96 rounded-full blur-3xl"
            style={{ backgroundColor: softGlow }}
          />
          <div
            className="absolute -left-28 bottom-[-7rem] h-96 w-96 rounded-full blur-3xl"
            style={{ backgroundColor: softGlow }}
          />
        </div>

        <div className="relative">
          <h1
            className="text-3xl font-semibold"
            style={{ color: theme.palette.text.primary }}
          >
            {strings.home.title}
          </h1>

          <p className="mt-2" style={{ color: theme.palette.text.secondary }}>
            {strings.home.tagline}
          </p>

          <p
            className="mt-3 max-w-2xl text-sm"
            style={{ color: theme.palette.text.secondary }}
          >
            {strings.home.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              to="/contest"
              className="rounded-xl px-4 py-2 text-sm font-semibold transition hover:opacity-90"
              style={{
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.secondary.contrastText,
              }}
            >
              {strings.home.primaryCta}
            </Link>

            <a
              href={strings.home.links.wiki.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl px-4 py-2 text-sm font-semibold transition hover:opacity-90"
              style={{
                backgroundColor: surface,
                border: `1px solid ${border}`,
                color: theme.palette.text.primary,
              }}
            >
              {strings.home.links.wiki.label}
            </a>

            <a
              href={strings.home.links.discord.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl px-4 py-2 text-sm font-semibold transition hover:opacity-90"
              style={{
                backgroundColor: surface,
                border: `1px solid ${border}`,
                color: theme.palette.text.primary,
              }}
            >
              {strings.home.links.discord.label}
            </a>
          </div>

          {steps.length > 0 ? (
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {steps.map((s) => (
                <div
                  key={`${s.kicker}-${s.title}`}
                  className="rounded-2xl p-4"
                  style={{
                    backgroundColor: surface,
                    border: `1px solid ${border}`,
                  }}
                >
                  <div
                    className="text-xs font-semibold uppercase tracking-wide"
                    style={{ color: alpha(theme.palette.text.primary, 0.6) }}
                  >
                    {s.kicker}
                  </div>
                  <div
                    className="mt-1 text-sm font-semibold"
                    style={{ color: theme.palette.text.primary }}
                  >
                    {s.title}
                  </div>
                  <div
                    className="mt-2 text-sm"
                    style={{ color: theme.palette.text.secondary }}
                  >
                    {s.description}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <div
            className="rounded-2xl p-5"
            style={{
              backgroundColor: alpha(theme.palette.secondary.main, 0.12),
              border: `1px solid ${alpha(theme.palette.secondary.main, 0.35)}`,
            }}
          >
            <div
              className="text-xs font-semibold uppercase tracking-wide"
              style={{ color: theme.palette.text.primary }}
            >
              {strings.home.checklistTitle}
            </div>

            {checklist.length > 0 ? (
              <ul
                className="mt-3 space-y-2 text-sm"
                style={{ color: theme.palette.text.secondary }}
              >
                {checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}

            {submitCard ? (
              <div
                className="mt-4 rounded-xl p-4"
                style={{
                  backgroundColor: surface,
                  border: `1px solid ${border}`,
                }}
              >
                <div
                  className="text-xs font-semibold uppercase tracking-wide"
                  style={{ color: alpha(theme.palette.text.primary, 0.6) }}
                >
                  {submitCard.kicker}
                </div>
                <div
                  className="mt-2 text-sm font-semibold"
                  style={{ color: theme.palette.text.primary }}
                >
                  {submitCard.channelLabel}
                </div>
                <div
                  className="mt-2 text-sm"
                  style={{ color: theme.palette.text.secondary }}
                >
                  {submitCard.description}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="flex h-full min-h-[360px] items-center justify-center">
            <img
              src={`${import.meta.env.BASE_URL}Galactic_Hub_Calypso_Emblem.png`}
              alt="Galactic Hub Calypso emblem"
              className="h-72 w-72 object-contain opacity-90 sm:h-80 sm:w-80 md:h-96 md:w-96"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
