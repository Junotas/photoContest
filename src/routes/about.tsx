//fixes the error: "React is defined but never used" by importing React
// @ts-expect-error: Unused variable
import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useTheme, Box } from "@mui/material";

function AboutPage() {
  const [message, setMessage] = useState("We're just getting started!");
  const theme = useTheme();

  const toggleMessage = () => {
    setMessage((prevMessage) =>
      prevMessage === "We're just getting started!"
        ? "Stay tuned for more cool stuff!"
        : "We're just getting started!"
    );
  };

  return (
    <Box
      className="flex flex-col justify-center items-center min-h-screen gap-4 px-4"
      sx={{ backgroundColor: theme.palette.background.default }}
    >
      <h1 className="text-3xl font-semibold">About</h1>

      <p className="text-white/80 text-center max-w-xl">{message}</p>

      <button
        type="button"
        onClick={toggleMessage}
        className="rounded-xl bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white"
      >
        Toggle message
      </button>
    </Box>
  );
}

export const Route = createFileRoute("/about")({
  component: AboutPage,
});
