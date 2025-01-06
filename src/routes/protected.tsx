import { Suspense } from "react";
import { MainLayout } from "../layout";
import { Outlet } from "react-router-dom";
import { Spin } from "antd";
import { lazyImport } from "@/utils/lazyImport";

const { ProjectRoutes } = lazyImport(
  () => import("@/features/project"),
  "ProjectRoutes"
);

const App = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="min-h-[calc(100vh-84px)] w-full flex items-center justify-center">
            <Spin />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: "/",
    element: <App />,
    children: [{ path: "/*", element: <ProjectRoutes /> }],
  },
];
