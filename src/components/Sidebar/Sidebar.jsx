import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { GoFileDirectoryFill } from "react-icons/go";
import { FaFile, FaUsers, FaCog } from "react-icons/fa";

const Sidebar = ({ collapsed }) => {
  return (
    <aside
      className={`sidebar ${collapsed ? "collapsed" : ""} relative transition-all duration-300`}
    >
      <ul className="menu-list">
        <NavLink to="/files" className="menu-item">
          <span className="menu-icon">
            <GoFileDirectoryFill />
          </span>
          {!collapsed && <span className="menu-text">All files</span>}
        </NavLink>

        <NavLink to="/vacation-requests" className="menu-item">
          <span className="menu-icon">🏝️</span>
          {!collapsed && <span className="menu-text">Vacation Requests</span>}
        </NavLink>

        <NavLink to="/teams" className="menu-item">
          <span className="menu-icon">
            <FaUsers />
          </span>
          {!collapsed && <span className="menu-text">Teams</span>}
        </NavLink>

        <NavLink to="/taskforce" className="menu-item">
          <span className="menu-icon">
            <FaFile />
          </span>
          {!collapsed && <span className="menu-text">Task Force</span>}
        </NavLink>
      </ul>
    </aside>
  );
};

export default Sidebar;
