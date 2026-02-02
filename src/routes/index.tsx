//fixes the error: "React is defined but never used" by importing React
// @ts-expect-error: Unused variable
import React from "react";
import { createFileRoute } from "@tanstack/react-router";

function WelcomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow px-4 py-10">
        <h1 className="text-3xl font-semibold">Welcome</h1>
        <p className="mt-2 text-white/70">
          This is the start page. More content will be added here.
        </p>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: WelcomePage,
});

export default WelcomePage;
