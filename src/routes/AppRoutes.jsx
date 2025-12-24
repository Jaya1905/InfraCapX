import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Files from "../pages/Files/Files";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Files />} />
        <Route path="files" element={<Files />} />
        <Route path="recent" element={<Files />} />
        <Route path="favorites" element={<Files />} />
        <Route path="shares" element={<Files />} />
        <Route path="tags" element={<Files />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
