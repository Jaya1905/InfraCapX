import React from "react";
import "./header.css";
import { FaFolder, FaHeart, FaImage, FaRegCalendar, FaUserAlt, FaUserFriends } from "react-icons/fa";
import { MdOutlineContacts } from "react-icons/md";
import { IoIosNotifications, IoMdMail } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { WiStars } from "react-icons/wi";
import { BiSolidZap } from "react-icons/bi";
import { RiSearchLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="header">
      {/* Left - Logo */}
      <div className="header-left flex justify-between items-center gap-10">
        <span className="logo-text">Logo</span>

        <div className="header-right">
          <button className="icon-btn"><img src="./kanbase.png" height={20} width={20} /></button>
          <button className="icon-btn"><RiSearchLine size={20} /></button>
          <button className="icon-btn"><FaFolder size={20} /></button>
          <button className="icon-btn"><FaImage size={20} /></button>
          <button className="icon-btn"><BiSolidZap size={20} /></button>
          <button className="icon-btn"><IoMdMail size={20} /></button>
          <button className="icon-btn"><FaHeart size={20} /></button>
          <button className="icon-btn"><FaUserFriends size={20} /></button>
          <button className="icon-btn"><FaRegCalendar size={20} /></button>

        </div>
      </div>

      {/* Right - Icons */}
      <div className="header-right">
        <button className="icon-btn"><WiStars size={100} /></button>
        <button className="icon-btn"><IoSearchSharp size={20} /></button>
        <button className="icon-btn"><IoIosNotifications size={20} /></button>
        <button className="icon-btn"><MdOutlineContacts size={20} /></button>
        <button className="icon-btn user-avatar"><FaUserAlt /></button>
      </div>
    </header>
  );
};

export default Header;
