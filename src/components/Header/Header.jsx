import { useEffect, useRef } from "react";
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

const Header = ({ toggleSidebar, dropdownOpen, toggleDropdown }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (dropdownOpen) {
          toggleDropdown();
        }
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen, toggleDropdown]);
  return (
    <header className="relative h-14 bg-[#00679f] flex items-center justify-between px-4">
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

      <div className="flex items-center gap-3 relative" ref={dropdownRef}>
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
          <Icon>
            <MdOutlineContacts size={20} />
          </Icon>
        </div>

        <button className="w-8.5 h-8.5 rounded-full flex items-center justify-center text-white bg-white/25 hover:bg-white/35">
          <FaUserAlt />
        </button>

        <button
          onClick={toggleDropdown}
          className="sm:hidden w-8.5 h-8.5 rounded-full flex items-center justify-center text-white hover:bg-white/15"
        >
          ⋮
        </button>

        {dropdownOpen && (
          <div className="sm:hidden absolute right-0 top-14 bg-white rounded-lg shadow-lg w-56 py-2 z-50">
            <DropdownItem icon={<RiSearchLine />} text="Search" />
            <DropdownItem icon={<FaFolder />} text="Files" />
            <DropdownItem icon={<FaImage />} text="Images" />
            <DropdownItem icon={<BiSolidZap />} text="Zap" />
            <DropdownItem icon={<IoMdMail />} text="Mail" />
            <DropdownItem icon={<FaHeart />} text="Favorites" />
            <DropdownItem icon={<FaUserFriends />} text="Friends" />
            <DropdownItem icon={<FaRegCalendar />} text="Calendar" />
            <DropdownItem icon={<WiStars />} text="Stars" />
            <DropdownItem icon={<IoIosNotifications />} text="Notifications" />
            <DropdownItem icon={<MdOutlineContacts />} text="Contacts" />
          </div>
        )}
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

const DropdownItem = ({ icon, text }) => (
  <div className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
    <span className="text-base">{icon}</span>
    <span>{text}</span>
  </div>
);

export default Header;
