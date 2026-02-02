// @ts-expect-error: Unused variable
import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { HomeLanding } from "../components/HomeLanding";

export const Route = createFileRoute("/")({
  component: IndexRoute,
});

function IndexRoute() {
  return <HomeLanding />;
}

export default IndexRoute;
