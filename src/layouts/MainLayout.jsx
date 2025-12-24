import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import RightPanel from "../components/RightPanel/RightPanel";
import "./mainlayout.css";

const MainLayout = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  return (
    <div className="app-container">
      <Header />

      <div className="main-body">
        <Sidebar />

        <div className="content-area">
          <Outlet context={{ selectedFiles, setSelectedFiles }} />
        </div>

        <RightPanel selectedFiles={selectedFiles} />
      </div>
    </div>
  );
};

export default MainLayout;
