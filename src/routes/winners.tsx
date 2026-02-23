import { createFileRoute } from "@tanstack/react-router";
import { WinnersGallery } from "../components/WinnersGallery";

export const Route = createFileRoute("/winners")({
  component: WinnersGallery,
});