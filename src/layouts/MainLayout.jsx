import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import "./mainlayout.css";

const MainLayout = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="app-container">
      <Header />

      <div className="main-body">
        <Sidebar collapsed={sidebarCollapsed} />

        <div
          className={`content-area ${sidebarCollapsed ? "sidebar-collapsed" : ""}`}
        >
          <Outlet
            context={{
              selectedFiles,
              setSelectedFiles,
              sidebarCollapsed,
              toggleSidebar,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
