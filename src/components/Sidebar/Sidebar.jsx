import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="menu-list">
        <NavLink to="/files" className="menu-item">
          <span className="menu-icon">📂</span>
          <span className="menu-text">All files</span>
        </NavLink>

        <NavLink to="/recent" className="menu-item">
          <span className="menu-icon">🕒</span>
          <span className="menu-text">Recent</span>
        </NavLink>

        <NavLink to="/vacation-requests" className="menu-item">
          <span className="menu-icon">🌴</span>
          <span className="menu-text">Vacation Requests</span>
        </NavLink>

        <NavLink to="/teams" className="menu-item">
          <span className="menu-icon">🧑‍🧒‍🧒</span>
          <span className="menu-text">Teams</span>
        </NavLink>

        <NavLink to="/taskforce" className="menu-item">
          <span className="menu-icon">🗂️</span>
          <span className="menu-text">Task Force</span>
        </NavLink>

        <NavLink to="/favorites" className="menu-item">
          <span className="menu-icon">⭐</span>
          <span className="menu-text">Favorites</span>
        </NavLink>

        <NavLink to="/shares" className="menu-item">
          <span className="menu-icon">👥</span>
          <span className="menu-text">Shares</span>
        </NavLink>

        <NavLink to="/tags" className="menu-item">
          <span className="menu-icon">🏷️</span>
          <span className="menu-text">Tags</span>
        </NavLink>
      </ul>
    </aside>
  );
};

export default Sidebar;
