//fixes the error: "React is defined but never used" by importing React
// @ts-expect-error: Unused variable
import React from "react";
import { createFileRoute } from "@tanstack/react-router";


const WelcomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
       
      </div>
    </div>
  );
};


export const Route = createFileRoute("/")({
  component: WelcomePage,
});

export default WelcomePage;
