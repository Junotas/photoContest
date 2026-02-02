//fixes the error: "React is defined but never used" by importing React
// @ts-expect-error: Unused variable
import React, { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { createFileRoute } from "@tanstack/react-router";
import { Button, Typography, useTheme, Box } from "@mui/material";

export const Route = createFileRoute("/about")({
  component: () => {
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
        className="flex flex-col justify-center items-center min-h-screen"
        sx={{ backgroundColor: theme.palette.background.default }}
      >
      </Box>
    );
  },
});
