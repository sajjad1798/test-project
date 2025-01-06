import { Route, Routes } from "react-router-dom";
import { List } from "./List";
import { Details } from "./details";

export const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/projects" element={<List />} />
      <Route path="/projects/edit/:id" element={<Details />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
};
