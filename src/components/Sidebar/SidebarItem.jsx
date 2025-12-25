import { NavLink, useLocation } from "react-router-dom";

export const SidebarItem = ({ to, icon, text, collapsed, toggleSidebar }) => {
  const location = useLocation();

  const handleClick = () => {
    if (window.innerWidth < 1024 && !collapsed) {
      toggleSidebar();
    }
  };

  const isActive = (path) => {
    if (
      to === "/" &&
      (location.pathname === "/" || location.pathname === "/files")
    ) {
      return true;
    }
    return location.pathname === to;
  };

  return (
    <NavLink
      to={to}
      onClick={handleClick}
      className={() =>
        `
        flex items-center
        py-2.5 mx-2 my-0.5
        text-sm font-medium
        rounded-md
        cursor-pointer
        transition-all duration-300
        ${collapsed ? "justify-center px-2 lg:justify-center lg:px-2" : "gap-3 px-4"}
        ${
          isActive(to)
            ? "bg-[#00669f] text-white"
            : "text-gray-700 hover:bg-gray-200"
        }
      `
      }
    >
      <span className="text-base shrink-0">{icon}</span>

      {!collapsed && <span className="whitespace-nowrap">{text}</span>}

      {collapsed && <span className="whitespace-nowrap lg:hidden">{text}</span>}
    </NavLink>
  );
};
