import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Left - Logo */}
      <div className="header-left">
        <span className="logo-text">Logo</span>
      </div>

      {/* Right - Icons */}
      <div className="header-right">
        <button className="icon-btn">🔍</button>
        <button className="icon-btn">📁</button>
        <button className="icon-btn">⚡</button>
        <button className="icon-btn">📧</button>
        <button className="icon-btn user-avatar">👤</button>
      </div>
    </header>
  );
};

export default Header;
