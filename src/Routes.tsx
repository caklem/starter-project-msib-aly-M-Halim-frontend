import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import DesktopOne from "pages/DesktopOne";
import DesktopTwo from "pages/DesktopTwo";
import DesktopThree from "pages/DesktopThree";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "desktopone",
      element: <DesktopOne />,
    },
    {
      path: "desktoptwo",
      element: <DesktopTwo />,
    },
    {
      path: "desktopthree",
      element: <DesktopThree />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
