// @ts-expect-error: Unused variable
import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ContestWeekView } from "../components/ContestWeekView";

export const Route = createFileRoute("/contest/$weekId")({
  component: ContestWeekRoute,
});

function ContestWeekRoute() {
  const { weekId } = Route.useParams();
  return <ContestWeekView weekId={weekId} />;
}
