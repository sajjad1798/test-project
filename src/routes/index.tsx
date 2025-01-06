import { useLocation, useNavigate, useRoutes } from "react-router-dom";

import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";
import { useEffect } from "react";
import { NotFound } from "@/features/not-found";

const isLoggedIn = true;

export const AppRoutes = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const element = useRoutes([
    ...(isLoggedIn ? protectedRoutes : publicRoutes),
    { path: "*", element: <NotFound /> },
  ]);

  useEffect(() => {
    if (isLoggedIn && (location.pathname === "/" || location.pathname === "")) {
      navigate("/projects");
    }
  }, [isLoggedIn, location.pathname, navigate]);

  return <>{element}</>;
};
