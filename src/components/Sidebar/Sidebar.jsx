import { GoFileDirectoryFill } from "react-icons/go";
import { FaFile, FaUsers } from "react-icons/fa";
import { SidebarItem } from "./SidebarItem";

const Sidebar = ({ collapsed, toggleSidebar }) => {
  return (
    <aside
      className={`
        bg-[#d2e2ef]
        border-r border-gray-200
        pt-3
        rounded-l-[15px]
        transition-all duration-300
        fixed lg:relative
        top-14 lg:top-0
        left-0
        h-[calc(100vh-3.5rem)] lg:h-auto
        z-50
        shadow-lg lg:shadow-none
        w-67.5
        ${collapsed ? "-translate-x-full lg:translate-x-0 lg:w-20" : "translate-x-0"}
      `}
    >
      <ul className="list-none p-0 m-0">
        <SidebarItem
          to="/"
          icon={<GoFileDirectoryFill />}
          text="All files"
          collapsed={collapsed}
          toggleSidebar={toggleSidebar}
        />

        <SidebarItem
          to="/vacation-requests"
          icon="🏝️"
          text="Vacation Requests"
          collapsed={collapsed}
          toggleSidebar={toggleSidebar}
        />

        <SidebarItem
          to="/teams"
          icon={<FaUsers />}
          text="Teams"
          collapsed={collapsed}
          toggleSidebar={toggleSidebar}
        />

        <SidebarItem
          to="/taskforce"
          icon={<FaFile />}
          text="Task Force"
          collapsed={collapsed}
          toggleSidebar={toggleSidebar}
        />
      </ul>
    </aside>
  );
};

export default Sidebar;
