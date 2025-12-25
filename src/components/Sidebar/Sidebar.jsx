import { NavLink } from "react-router-dom";
import { GoFileDirectoryFill } from "react-icons/go";
import { FaFile, FaUsers } from "react-icons/fa";

const Sidebar = ({ collapsed }) => {
  return (
    <aside
      className={`
        ${collapsed ? "w-20" : "w-67.5"}
        bg-[#d2e2ef]
        border-r border-gray-200
        pt-3
        rounded-l-[15px]
        transition-all duration-300
      `}
    >
      <ul className="list-none p-0 m-0">
        <SidebarItem
          to="/files"
          icon={<GoFileDirectoryFill />}
          text="All files"
          collapsed={collapsed}
        />

        <SidebarItem
          to="/vacation-requests"
          icon="🏝️"
          text="Vacation Requests"
          collapsed={collapsed}
        />

        <SidebarItem
          to="/teams"
          icon={<FaUsers />}
          text="Teams"
          collapsed={collapsed}
        />

        <SidebarItem
          to="/taskforce"
          icon={<FaFile />}
          text="Task Force"
          collapsed={collapsed}
        />
      </ul>
    </aside>
  );
};

const SidebarItem = ({ to, icon, text, collapsed }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        flex items-center
        ${collapsed ? "justify-center px-2" : "gap-3 px-4"}
        py-2.5
        mx-2 my-0.5
        text-sm font-medium
        rounded-md
        cursor-pointer
        transition-all duration-300
        ${
          isActive
            ? "bg-[#00669f] text-white"
            : "text-gray-700 hover:bg-gray-200"
        }
      `
      }
    >
      <span className="text-base shrink-0">{icon}</span>

      <span
        className={`
          whitespace-nowrap
          transition-opacity duration-300
          ${collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"}
        `}
      >
        {text}
      </span>
    </NavLink>
  );
};

export default Sidebar;
