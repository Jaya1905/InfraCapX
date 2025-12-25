import React from "react";
import {
  FaFolder,
  FaHeart,
  FaImage,
  FaRegCalendar,
  FaUserAlt,
  FaUserFriends,
} from "react-icons/fa";
import { MdOutlineContacts } from "react-icons/md";
import { IoIosNotifications, IoMdMail } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { WiStars } from "react-icons/wi";
import { BiSolidZap } from "react-icons/bi";
import { RiSearchLine } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="h-14 bg-[#00679f] flex items-center justify-between px-4">
      <div className="flex items-center gap-4 sm:gap-10">
        <button
          onClick={toggleSidebar}
          className="p-1 hover:bg-white/15 rounded-md transition-colors lg:hidden cursor-pointer"
        >
          <HiMenu color="white" size={20} />
        </button>
        <span className="text-white text-lg font-semibold cursor-pointer">
          Logo
        </span>

        <div className="hidden sm:flex items-center gap-3">
          <Icon>
            <img src="./kanbase.png" alt="logo" className="w-5 h-5" />
          </Icon>

          <Icon>
            <RiSearchLine size={20} />
          </Icon>
          <Icon>
            <FaFolder size={20} />
          </Icon>
          <Icon>
            <FaImage size={20} />
          </Icon>
          <Icon>
            <BiSolidZap size={20} />
          </Icon>
          <Icon>
            <IoMdMail size={20} />
          </Icon>
          <Icon>
            <FaHeart size={20} />
          </Icon>
          <Icon>
            <FaUserFriends size={20} />
          </Icon>
          <Icon>
            <FaRegCalendar size={20} />
          </Icon>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Icon className="sm:hidden">
          <IoSearchSharp size={20} />
        </Icon>

        <div className="hidden sm:flex items-center gap-3">
          <Icon>
            <WiStars size={28} />
          </Icon>
          <Icon>
            <IoSearchSharp size={20} />
          </Icon>
          <Icon>
            <IoIosNotifications size={20} />
          </Icon>
        </div>

        <Icon>
          <MdOutlineContacts size={20} />
        </Icon>

        <button className="w-8.5 h-8.5 rounded-full flex items-center justify-center text-white bg-white/25 hover:bg-white/35">
          <FaUserAlt />
        </button>
      </div>
    </header>
  );
};

const Icon = ({ children, className = "" }) => (
  <button
    className={`w-8.5 h-8.5 rounded-full flex items-center justify-center text-white hover:bg-white/15 ${className}`}
  >
    {children}
  </button>
);

export default Header;
