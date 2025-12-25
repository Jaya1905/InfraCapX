import { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { Ellipsis, EllipsisIcon, X } from "lucide-react";
import { BiSolidZap } from "react-icons/bi";
import { IoIosInformationCircle, IoMdShare } from "react-icons/io";
import { RiShareBoxFill, RiShareBoxLine } from "react-icons/ri";
import { MdOutlineContentCopy, MdOutlineInsertLink } from "react-icons/md";
import { FaAngleDown, FaAngleUp, FaUserFriends, FaUsers } from "react-icons/fa";

const RELATED_RESOURCES = {
  name: "Virtual Annual Conference",
  deck: "World Press Freedom Day",
  talks: ["event coordination"],
};

const EXTERNAL_SHARES = [
  { id: 1, label: "Share link (1)", permission: "View only" },
  { id: 2, label: "joeuser@domain.tld", permission: "Can edit" },
];

const PERMISSIONS = ["Read", "Write", "Create", "Delete", "Share"];

const RightPanel = ({ selectedFiles, setSelectedFiles }) => {
  const [activeTab, setActiveTab] = useState("Sharing");
  const [openResources, setOpenResources] = useState(true);
  const [showMobilePanel, setShowMobilePanel] = useState(true);

  const handleClose = () => {
    setSelectedFiles([]);
    setShowMobilePanel(false);
  };

  const file = selectedFiles[0];

  return (
    <>
      {/* Desktop Panel */}
      <aside className="hidden lg:flex w-87.5 xl:w-112.5 bg-white border-l border-gray-200 flex-col rounded-r-2xl">
        {/* HEADER */}
        <div className="p-4 flex justify-between items-start">
          <div className="min-w-0 flex-1">
            <h3 className="text-lg xl:text-xl font-bold m-0 truncate">{file.name}</h3>
            <p className="text-sm text-gray-500 mt-1 flex items-center gap-1 flex-wrap">
              <BsStarFill /> {file.size} · {file.modified} · Owner{" "}
              <strong className="bg-gray-200 text-gray-500 font-semibold ml-1 px-2.5 py-0.5 rounded-full flex gap-1 items-center">
                <img
                  src="https://mockmind-api.uifaces.co/content/human/80.jpg"
                  className="h-5 w-5 rounded-full"
                  alt="avatar"
                />
                Christine...
              </strong>
            </p>
          </div>
          <div className="flex items-center gap-2 text-lg cursor-pointer shrink-0">
            <Ellipsis />
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <X />
            </button>
          </div>
        </div>

        {/* TABS */}
        <div className="flex border-b border-gray-200">
          <span
            className={`flex-1 flex flex-col items-center justify-center gap-1.5 py-2.5 text-sm cursor-pointer ${activeTab === "Activity"
              ? "border-b-[6px] border-[#00679f] font-extrabold text-gray-900"
              : "text-gray-700"
              }`}
            onClick={() => setActiveTab("Activity")}
          >
            <span className="text-sm">
              <BiSolidZap size={20} />
            </span>
            Activity
          </span>

          <span
            className={`flex-1 flex flex-col items-center justify-center gap-1.5 py-2.5 text-sm cursor-pointer ${activeTab === "Sharing"
              ? "border-b-[6px] border-[#00679f] font-extrabold text-gray-900"
              : "text-gray-700"
              }`}
            onClick={() => setActiveTab("Sharing")}
          >
            <span className="text-sm">
              <IoMdShare size={20} />
            </span>
            Sharing
          </span>
        </div>

        {/* SCROLLABLE BODY */}
        <div className="p-3 overflow-y-auto flex-1">
          {/* INTERNAL LINK */}
          <div className="mb-4 border-b border-gray-300 pb-4">
            <div className="flex items-center gap-2 text-sm">
              <span className="rounded-full w-10 h-10 bg-gray-500 flex justify-center items-center text-white shrink-0">
                <RiShareBoxFill size={20} />
              </span>
              <div className="min-w-0 flex-1">
                <strong className="text-[15px] text-black">Internal link</strong>
                <p className="text-sm text-gray-500 mt-0">
                  Only works for people with access to this folder
                </p>
              </div>
              <span className="ml-auto cursor-pointer shrink-0">
                <MdOutlineContentCopy size={20} />
              </span>
            </div>
          </div>

          {/* EXTERNAL SHARES */}
          <div className="mb-4 border-b border-gray-300 pb-4">
            <div className="text-[17px] font-semibold mb-4 flex items-center gap-1">
              <span>External shares</span>
              <span>
                <IoIosInformationCircle className="text-[#065e9a]" size={20} />
              </span>
            </div>

            <select className="w-full p-1.5 mb-2 border border-gray-400 rounded-md text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Email, federated cloud id</option>
            </select>

            {EXTERNAL_SHARES.map((share) => (
              <div
                key={share.id}
                className="flex justify-between items-center mt-2.5"
              >
                <div className="flex items-center gap-2 text-sm">
                  <span className="rounded-full w-10 h-10 bg-[#065e9a] flex justify-center items-center text-white shrink-0">
                    <MdOutlineInsertLink size={20} />
                  </span>
                  <div>
                    <strong className="text-[15px] font-medium">{share.label}</strong>
                    <div className="flex items-center gap-1">
                      <p className="text-xs font-medium text-[#065e9a] m-0">{share.permission}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-2 w-2"
                        viewBox="0 0 10 6"
                        fill="#065e9a"
                      >
                        <polygon points="0,0 10,0 5,6" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="cursor-pointer">
                    <MdOutlineContentCopy size={20} />
                  </span>
                  <span className="cursor-pointer">
                    <EllipsisIcon size={20} />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ADDITIONAL SHARES */}
          <div className="mb-4 border-b border-gray-300 pb-4">
            <div className="text-[17px] font-semibold mb-4 flex items-center gap-1">
              <span>Additional shares</span>
              <span className="text-[#065e9a]">
                <IoIosInformationCircle size={20} />
              </span>
            </div>
          </div>

          {/* RELATED TEAM RESOURCES */}
          <div>
            <h2 className="mb-2.5 text-[17px] font-semibold">Related team resources</h2>
            <div className="border border-gray-200 rounded-md p-2.5 mb-4">
              <div
                className="flex justify-between items-center gap-4 cursor-pointer text-[17px] font-semibold mb-4"
                onClick={() => setOpenResources(!openResources)}
              >
                <span className="flex items-center gap-2">
                  <FaUsers size={20} /> {RELATED_RESOURCES.name}
                </span>
                <div className="flex justify-center items-center gap-3">
                  <RiShareBoxLine size={20} />
                  <span>
                    {openResources ? (
                      <FaAngleUp size={20} />
                    ) : (
                      <FaAngleDown size={20} />
                    )}
                  </span>
                </div>
              </div>
              {openResources && (
                <>
                  <div className="text-base text-black mt-2.5 font-bold">Deck</div>
                  <div className="flex items-center gap-2 text-[15px] my-1.5 mb-5">
                    <span className="w-2.5 h-2.5 rounded-full bg-violet-600" />
                    <span>{RELATED_RESOURCES.deck}</span>
                  </div>

                  <div className="text-base text-black mt-2.5 font-bold">Talk conversations</div>

                  {RELATED_RESOURCES.talks.map((talk, i) => (
                    <div key={i} className="flex items-center gap-2 text-[15px] my-1.5 mb-5">
                      <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                      <span>{talk}</span>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>

          {/* PERMISSIONS */}
          <div className="flex justify-between items-center border-t border-gray-200 pt-3 text-xs">
            <span className="font-semibold flex items-center gap-2">
              <span className="bg-[#065e9a] p-2 rounded-full flex justify-center items-center">
                <FaUserFriends color="white" size={20} />
              </span>
              Team folder
            </span>
            <div className="flex gap-2.5 mt-1.5 text-gray-700">
              {PERMISSIONS.map((p) => (
                <span key={p}>{p}</span>
              ))}
            </div>
          </div>
        </div>
      </aside>
      {/* Mobile Panel - Modal */}
      {showMobilePanel && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={handleClose}
        >
          <div
            className="absolute right-0 top-0 h-full w-full xs:w-[85%] max-w-md bg-white shadow-xl flex flex-col animate-slide-in-right"
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div className="p-3 xs:p-4 flex justify-between items-start border-b border-gray-200 shrink-0">
              <div className="min-w-0 flex-1">
                <h3 className="text-base xs:text-lg font-bold m-0 truncate">{file.name}</h3>
                <p className="text-xs xs:text-sm text-gray-500 mt-1 flex items-center gap-1 flex-wrap">
                  <BsStarFill size={12} /> {file.size} · {file.modified}
                </p>
                <p className="text-xs xs:text-sm text-gray-500 mt-1 flex items-center gap-1">
                  Owner{" "}
                  <strong className="bg-gray-200 text-gray-500 font-semibold ml-1 px-2 py-0.5 rounded-full flex gap-1 items-center text-xs">
                    <img
                      src="https://mockmind-api.uifaces.co/content/human/80.jpg"
                      className="h-4 w-4 rounded-full"
                      alt="avatar"
                    />
                    Christine...
                  </strong>
                </p>
              </div>
              <div className="flex items-center gap-2 cursor-pointer shrink-0">
                <Ellipsis size={18} />
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer p-1 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* TABS */}
            <div className="flex border-b border-gray-200 shrink-0">
              <span
                className={`flex-1 flex flex-col items-center justify-center gap-1 py-2 text-xs xs:text-sm cursor-pointer ${activeTab === "Activity"
                  ? "border-b-4 border-[#00679f] font-bold text-gray-900"
                  : "text-gray-700"
                  }`}
                onClick={() => setActiveTab("Activity")}
              >
                <BiSolidZap size={16} />
                Activity
              </span>

              <span
                className={`flex-1 flex flex-col items-center justify-center gap-1 py-2 text-xs xs:text-sm cursor-pointer ${activeTab === "Sharing"
                  ? "border-b-4 border-[#00679f] font-bold text-gray-900"
                  : "text-gray-700"
                  }`}
                onClick={() => setActiveTab("Sharing")}
              >
                <IoMdShare size={16} />
                Sharing
              </span>
            </div>

            {/* SCROLLABLE BODY */}
            <div className="p-3 xs:p-4 overflow-y-auto flex-1">
              {/* INTERNAL LINK */}
              <div className="mb-4 border-b border-gray-300 pb-4">
                <div className="flex items-center gap-2 text-xs xs:text-sm">
                  <span className="rounded-full w-8 h-8 xs:w-10 xs:h-10 bg-gray-500 flex justify-center items-center text-white shrink-0">
                    <RiShareBoxFill size={16} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <strong className="text-sm xs:text-[15px] text-black">Internal link</strong>
                    <p className="text-xs xs:text-sm text-gray-500 mt-0">
                      Only works for people with access
                    </p>
                  </div>
                  <span className="ml-auto cursor-pointer shrink-0">
                    <MdOutlineContentCopy size={18} />
                  </span>
                </div>
              </div>

              {/* EXTERNAL SHARES */}
              <div className="mb-4 border-b border-gray-300 pb-4">
                <div className="text-sm xs:text-base font-semibold mb-3 flex items-center gap-1">
                  <span>External shares</span>
                  <IoIosInformationCircle className="text-[#065e9a]" size={18} />
                </div>

                <div className="relative">
                  <select className="w-full appearance-none bg-white p-1.5 mb-2 border border-gray-400 rounded-md text-gray-500 text-xs xs:text-sm focus:outline-none">
                    <option>Email, federated cloud id</option>
                  </select>

                  <svg
                    className="absolute right-3 top-[40%] -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none z-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {EXTERNAL_SHARES.map((share) => (
                  <div
                    key={share.id}
                    className="flex justify-between items-center mt-2"
                  >
                    <div className="flex items-center gap-2 text-xs xs:text-sm">
                      <span className="rounded-full w-8 h-8 xs:w-10 xs:h-10 bg-[#065e9a] flex justify-center items-center text-white shrink-0">
                        <MdOutlineInsertLink size={16} />
                      </span>
                      <div>
                        <strong className="text-sm xs:text-[15px] font-medium">{share.label}</strong>
                        <div className="flex items-center gap-1">
                          <p className="text-[10px] xs:text-xs font-medium text-[#065e9a] m-0">{share.permission}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MdOutlineContentCopy size={16} />
                      <EllipsisIcon size={16} />
                    </div>
                  </div>
                ))}
              </div>

              {/* ADDITIONAL SHARES */}
              <div className="mb-4 border-b border-gray-300 pb-4">
                <div className="text-sm xs:text-base font-semibold flex items-center gap-1">
                  <span>Additional shares</span>
                  <IoIosInformationCircle className="text-[#065e9a]" size={18} />
                </div>
              </div>

              {/* RELATED TEAM RESOURCES */}
              <div>
                <h2 className="mb-2 text-sm xs:text-base font-semibold">Related team resources</h2>
                <div className="border border-gray-200 rounded-md p-2 xs:p-2.5 mb-4">
                  <div
                    className="flex justify-between items-center gap-2 cursor-pointer text-sm xs:text-base font-semibold mb-3"
                    onClick={() => setOpenResources(!openResources)}
                  >
                    <span className="flex items-center gap-2 min-w-0">
                      <FaUsers size={16} />
                      <span className="truncate">{RELATED_RESOURCES.name}</span>
                    </span>
                    <div className="flex items-center gap-2 shrink-0">
                      <RiShareBoxLine size={16} />
                      {openResources ? <FaAngleUp size={16} /> : <FaAngleDown size={16} />}
                    </div>
                  </div>
                  {openResources && (
                    <>
                      <div className="text-sm xs:text-base text-black mt-2 font-bold">Deck</div>
                      <div className="flex items-center gap-2 text-xs xs:text-sm my-1 mb-4">
                        <span className="w-2 h-2 rounded-full bg-violet-600 shrink-0" />
                        <span>{RELATED_RESOURCES.deck}</span>
                      </div>

                      <div className="text-sm xs:text-base text-black mt-2 font-bold">Talk conversations</div>
                      {RELATED_RESOURCES.talks.map((talk, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs xs:text-sm my-1 mb-4">
                          <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                          <span>{talk}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>

              {/* PERMISSIONS */}
              <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center border-t border-gray-200 pt-3 text-xs gap-2">
                <span className="font-semibold flex items-center gap-2">
                  <span className="bg-[#065e9a] p-1.5 rounded-full flex justify-center items-center">
                    <FaUserFriends color="white" size={16} />
                  </span>
                  Team folder
                </span>
                <div className="flex flex-wrap gap-2 text-gray-700">
                  {PERMISSIONS.map((p) => (
                    <span key={p}>{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RightPanel;
