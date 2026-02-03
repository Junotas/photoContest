// @ts-expect-error: Unused variable
import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ContestArchive } from "../components/ContestArchive";

export const Route = createFileRoute("/contest/")({
  component: ContestIndexRoute,
});

function ContestIndexRoute() {
  return <ContestArchive />;
}
