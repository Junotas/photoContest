import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/contest")({
  component: ContestLayout,
});

function ContestLayout() {
  return <Outlet />;
}
