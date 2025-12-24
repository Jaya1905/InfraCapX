import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { GoFileDirectoryFill } from "react-icons/go";
import { FaFile, FaHistory, FaTags, FaUsers } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import { HiUserAdd } from "react-icons/hi";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="menu-list">
        <NavLink to="/files" className="menu-item">
          <span className="menu-icon"><GoFileDirectoryFill /></span>
          <span className="menu-text">All files</span>
        </NavLink>

        <NavLink to="/vacation-requests" className="menu-item">
          <span className="menu-icon">🏝️</span>
          <span className="menu-text">Vacation Requests</span>
        </NavLink>

        <NavLink to="/teams" className="menu-item">
          <span className="menu-icon"><FaUsers /></span>
          <span className="menu-text">Teams</span>
        </NavLink>

        <NavLink to="/taskforce" className="menu-item">
          <span className="menu-icon"><FaFile /></span>
          <span className="menu-text">Task Force</span>
        </NavLink>

      </ul>
    </aside>
  );
};

export default Sidebar;
