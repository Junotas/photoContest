//fixes the error: "React is defined but never used" by importing React
// @ts-expect-error: Unused variable
import React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { Home as HomeIcon } from "@mui/icons-material";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useTheme } from "@mui/material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const baseLinkStyles = "flex items-center space-x-2 hover:transition font-bold";

export const Route = createRootRoute({
  component: () => {
    const theme = useTheme(); // Access the theme

    return (
      <>
        <nav
          className="flex space-x-6 p-4 shadow-md"
          style={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          }}
        >
          <Link
            to="/"
            activeProps={{}}
            className={baseLinkStyles}
            style={{
              color: theme.palette.primary.contrastText,
              transition: "color 0.3s",
            }}
          >
            <HomeIcon fontSize="small" />
            <span>Home</span>
          </Link>
          <Link
            to="/contest"
            activeProps={{}}
            className={baseLinkStyles}
            style={{
              color: theme.palette.primary.contrastText,
              transition: "color 0.3s",
            }}
          >
            <PhotoCameraIcon fontSize="small" />
            <span>Archive</span>
          </Link>
          <Link
            to="/winners"
            activeProps={{}}
            className={baseLinkStyles}
            style={{
              color: theme.palette.primary.contrastText,
              transition: "color 0.3s",
            }}
          >
            <EmojiEventsIcon fontSize="small" />
            <span>Winners</span>
          </Link>
        </nav>
        <Outlet />
      </>
    );
  },
});
