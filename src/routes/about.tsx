// @ts-expect-error: Unused variable
import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AboutPromo } from "../components/AboutPromo";

export const Route = createFileRoute("/about")({
  component: AboutRoute,
});

function AboutRoute() {
  return <AboutPromo />;
}
