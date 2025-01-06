import { useLocation, useRoutes } from "react-router-dom";

import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";

const isLoggedIn = true;

export const AppRoutes = () => {
  const element = useRoutes([
    ...(isLoggedIn ? protectedRoutes : publicRoutes),
    { path: "*", element: <h1>Not found</h1> },
  ]);

  return <>{element}</>;
};
