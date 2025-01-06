import { Route, Routes } from "react-router-dom";
import { List } from "./List";
import { Details } from "./details";
import { NotFound } from "@/features/not-found";

export const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/projects" element={<List />} />
      <Route path="/projects/edit/:id" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
