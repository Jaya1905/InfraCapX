import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const MainLayout = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
    if (sidebarCollapsed) {
      setDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    if (!dropdownOpen && window.innerWidth < 1024) {
      setSidebarCollapsed(true);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#00679f]">
      <Header
        toggleSidebar={toggleSidebar}
        dropdownOpen={dropdownOpen}
        toggleDropdown={toggleDropdown}
      />

      <div className="flex-1 flex overflow-hidden px-3.75 pb-3.75">
        <Sidebar collapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />

        <div
          className={`
            flex-1
            bg-white
            border-x border-gray-200
            overflow-y-auto
            transition-all duration-300
          `}
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
