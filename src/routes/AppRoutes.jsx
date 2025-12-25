import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Files from "../pages/Files/Files";
import VacationRequests from "../pages/Vacation-Requests/VacationRequests";
import Teams from "../pages/Teams/Teams";
import TaskForce from "../pages/Task-Force/TaskForce";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ResetPassword from "../pages/Auth/ResetPassword";
import ChangePassword from "../pages/Auth/ChangePassword";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Files />} />
        <Route path="files" element={<Files />} />
        <Route path="recent" element={<Files />} />
        <Route path="favorites" element={<Files />} />
        <Route path="shares" element={<Files />} />
        <Route path="tags" element={<Files />} />
        <Route path="vacation-requests" element={<VacationRequests />} />
        <Route path="teams" element={<Teams />} />
        <Route path="taskforce" element={<TaskForce />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
