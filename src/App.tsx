import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Spin } from "antd";

import { AppRoutes } from "@/routes";

const App: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Spin />
        </div>
      }
    >
      <Router>
        <AppRoutes />
      </Router>
    </Suspense>
  );
};

export default App;
