import {
  CheckSquare2,
  Circle,
  Ellipsis,
  FileTextIcon,
  LucideCircleQuestionMark,
  LucideSettings2,
  Plus,
  Search,
  UserPlus,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import { MdMenuOpen } from "react-icons/md";
import { PiPlugsConnectedFill } from "react-icons/pi";
import { RiMenuAddFill } from "react-icons/ri";
import { TbTableOptions } from "react-icons/tb";
import { tableData, viewsData } from "../../utils/constants";

import { useOutletContext } from "react-router-dom";

const VacationRequests = () => {
  const { sidebarCollapsed, toggleSidebar } = useOutletContext();
  const [selectedRows, setSelectedRows] = useState([]);
  const [showRightPanel, setShowRightPanel] = useState(false);
  const [activeTab, setActiveTab] = useState("Sharing");
  const [mobileActiveTab, setMobileActiveTab] = useState("Sharing");

  const handleRowSelect = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
      setShowRightPanel(false);
    } else {
      setSelectedRows([id]);
      setShowRightPanel(true);
    }
  };

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;
    if (tableData.length > 0 && selectedRows.length === 0 && isDesktop) {
      setSelectedRows([tableData[0].id]);
      setShowRightPanel(true);
    }
  }, [tableData]);

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 1024;
      if (!isDesktop && showRightPanel) {
        setSelectedRows([]);
        setShowRightPanel(false);
      } else if (
        isDesktop &&
        selectedRows.length === 0 &&
        tableData.length > 0
      ) {
        setSelectedRows([tableData[0].id]);
        setShowRightPanel(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showRightPanel, selectedRows.length, tableData]);

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-50 overflow-hidden">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        {/* Page Header */}
        <div className="bg-white border-b border-gray-200 px-2 xs:px-3 sm:px-6 py-2 xs:py-3 sm:py-4">
          <div className="flex items-center gap-1 xs:gap-2">
            <button
              onClick={toggleSidebar}
              className="hidden lg:flex p-1 hover:bg-gray-100 rounded-md transition-colors cursor-pointer shrink-0"
            >
              {!sidebarCollapsed ? (
                <MdMenuOpen size={30} />
              ) : (
                <img src="./open.png" width={25} height={25} alt="menu" />
              )}
            </button>
            <span className="text-xl xs:text-2xl sm:text-4xl shrink-0">🏝️</span>
            <h1 className="text-base xs:text-lg sm:text-2xl lg:text-3xl text-gray-900 truncate font-medium">
              Vacation requests
            </h1>
          </div>
        </div>

        {/* Views Section */}
        <div className="bg-white border-b border-gray-200 px-2 xs:px-3 sm:px-6 py-2 xs:py-3 sm:py-4">
          <div className="flex items-center gap-2 xs:gap-3 mb-3 xs:mb-4">
            <h3 className="text-sm xs:text-base sm:text-lg font-medium text-gray-900">
              Views
            </h3>
            <button className="bg-blue-200/40 text-black font-bold px-1.5 xs:px-2 py-1 rounded-md">
              <RiMenuAddFill
                size={14}
                className="xs:w-4 xs:h-4 sm:w-5 sm:h-5"
              />
            </button>
          </div>

          {/* Mobile Views - Card Layout */}
          <div className="block lg:hidden space-y-2">
            {viewsData.map((view, index) => (
              <div
                key={index}
                className="p-2 xs:p-3 rounded-lg border border-gray-200 hover:bg-gray-50 active:bg-gray-100 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 xs:gap-2 min-w-0 flex-1">
                    <span className="shrink-0">
                      {view.name === "Create Vacation Request" && (
                        <Plus
                          color="purple"
                          size={14}
                          className="xs:w-4 xs:h-4"
                        />
                      )}
                      {view.name === "Open Request" && (
                        <FileTextIcon size={14} className="xs:w-4 xs:h-4" />
                      )}
                      {view.name === "Request Status" && (
                        <LucideCircleQuestionMark
                          size={14}
                          className="xs:w-4 xs:h-4"
                        />
                      )}
                      {view.name === "Closed requests" && (
                        <CheckSquare2
                          fill="green"
                          color="white"
                          size={14}
                          className="xs:w-4 xs:h-4"
                        />
                      )}
                    </span>
                    <span className="text-xs xs:text-sm font-medium text-gray-900 truncate">
                      {view.name}
                    </span>
                  </div>
                  <button className="text-gray-500 cursor-pointer hover:text-gray-600 p-1 shrink-0">
                    <Ellipsis size={14} className="xs:w-4 xs:h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-1 xs:gap-2 text-[10px] xs:text-xs text-gray-500">
                  <span>Rows: {view.rows}</span>
                  <span>Cols: {view.columns}</span>
                  <span className="truncate text-right">{view.lastEdited}</span>
                </div>
              </div>
            ))}
            <div className="p-2 xs:p-3 bg-gray-100 rounded-lg">
              <div className="flex items-center gap-2 xs:gap-4 flex-wrap">
                <span className="text-black font-bold text-sm xs:text-base">
                  Total
                </span>
                <span className="text-sm xs:text-base text-black font-bold">
                  4 rows
                </span>
                <span className="text-sm xs:text-base text-black font-bold">
                  9 cols
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Views - Table Layout */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="min-w-full text-sm">
              {/* Header */}
              <thead className="border-b border-gray-200 text-gray-500 font-medium">
                <tr>
                  <th className="px-2 py-2 text-left">View</th>
                  <th className="px-2 py-2 text-left">Rows</th>
                  <th className="px-2 py-2 text-left">Columns</th>
                  <th className="px-2 py-2 text-left">Last edited</th>
                  <th className="px-2 py-2 text-left">Shares</th>
                  <th className="px-2 py-2 text-left">Actions</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {viewsData.map((view, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-2 py-2">
                      <div className="flex items-center gap-2 min-w-0">
                        {view.name === "Create Vacation Request" && "➕"}
                        {view.name === "Open Request" && "📝"}
                        {view.name === "Request Status" && "❓"}
                        {view.name === "Closed requests" && "✅"}
                        <span className="text-gray-900 truncate">
                          {view.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-2 py-2 text-gray-600">{view.rows}</td>
                    <td className="px-2 py-2 text-gray-600">{view.columns}</td>
                    <td className="px-2 py-2 text-gray-600 truncate">
                      {view.lastEdited}
                    </td>
                    <td className="px-2 py-2"></td>
                    <td className="px-2 py-2">
                      <button className="text-gray-500 hover:text-gray-600">
                        <Ellipsis />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

              {/* Footer */}
              <tfoot>
                <tr className="border-t border-gray-200">
                  <td className="px-2 py-3 font-bold text-lg text-black">
                    Total
                  </td>
                  <td className="px-2 py-3 font-bold text-lg text-black">4</td>
                  <td className="px-2 py-3 font-bold text-lg text-black">9</td>
                  <td colSpan={3}></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Data Section */}
        <div className="flex-1 bg-white px-2 xs:px-3 sm:px-6 py-2 xs:py-3 sm:py-4 overflow-auto min-h-0">
          <div className="flex items-center gap-2 mb-3 xs:mb-4">
            <h3 className="text-sm xs:text-base sm:text-lg font-medium text-gray-900">
              Data
            </h3>
            <button className="bg-blue-200/40 px-1.5 xs:px-2 py-1 rounded-lg">
              <TbTableOptions
                size={14}
                className="xs:w-4 xs:h-4 sm:w-5 sm:h-5"
              />
            </button>
          </div>

          <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2 xs:gap-3 sm:gap-4 mb-3 xs:mb-4">
            <button className="flex items-center gap-1.5 xs:gap-2 py-2 px-3 rounded-lg hover:bg-gray-100 active:bg-gray-200 font-bold cursor-pointer justify-center xs:justify-start text-sm xs:text-base transition-colors">
              <Plus size={16} className="xs:w-5 xs:h-5" /> Create row
            </button>
            <div className="relative flex items-center w-full xs:w-auto">
              <input
                type="text"
                placeholder="Search"
                className="w-full xs:w-48 sm:w-64 pl-7 xs:pl-8 pr-3 py-2 font-bold rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200"
              />
              <span className="absolute left-2 text-gray-400 flex justify-center items-center">
                <Search size={14} className="xs:w-3.75 xs:h-3.75" />
              </span>
            </div>
          </div>

          {/* Mobile Data - Card Layout */}
          <div className="block lg:hidden space-y-2 xs:space-y-3">
            {tableData.map((row) => (
              <div
                key={row.id}
                className={`border rounded-lg p-3 xs:p-4 cursor-pointer transition-colors ${
                  selectedRows.includes(row.id)
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:bg-gray-50 active:bg-gray-100"
                }`}
                onClick={() => handleRowSelect(row.id)}
              >
                <div className="flex items-start justify-between mb-2 xs:mb-3">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleRowSelect(row.id)}
                    onClick={(e) => e.stopPropagation()}
                    className="mt-0.5 w-4 h-4"
                  />
                  <button
                    className="text-gray-400 hover:text-gray-600 cursor-pointer p-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Ellipsis size={14} className="xs:w-4 xs:h-4" />
                  </button>
                </div>

                <div className="space-y-2 xs:space-y-3">
                  {row.comments && (
                    <div>
                      <span className="text-[10px] xs:text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Comments
                      </span>
                      <p className="text-xs xs:text-sm text-gray-900 mt-0.5 xs:mt-1 line-clamp-2">
                        {row.comments}
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-2 xs:gap-3 text-xs xs:text-sm">
                    <div>
                      <span className="text-[10px] xs:text-xs font-medium text-gray-500 uppercase tracking-wide block">
                        Approved by
                      </span>
                      <p className="text-gray-900 mt-0.5 xs:mt-1 truncate">
                        {row.approvedBy || "-"}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] xs:text-xs font-medium text-gray-500 uppercase tracking-wide block">
                        Approve date
                      </span>
                      <p className="text-gray-900 mt-0.5 xs:mt-1">
                        {row.approveDate || "-"}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] xs:text-xs font-medium text-gray-500 uppercase tracking-wide block">
                        Status
                      </span>
                      <div className="flex items-center mt-0.5 xs:mt-1">
                        {row.approved === true && (
                          <FaRegCheckCircle
                            size={16}
                            className="xs:w-5 xs:h-5 text-green-600"
                          />
                        )}
                        {row.approved === false && (
                          <Circle
                            size={16}
                            className="xs:w-5 xs:h-5 text-gray-400"
                          />
                        )}
                        {row.approved === null && (
                          <span className="text-gray-400">-</span>
                        )}
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] xs:text-xs font-medium text-gray-500 uppercase tracking-wide block">
                        Request date
                      </span>
                      <p className="text-gray-900 mt-0.5 xs:mt-1">
                        {row.requestDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Data - Table Layout */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="min-w-full text-sm  border-gray-200 border-collapse">
              {/* Header */}
              <thead className="text-gray-500 font-medium">
                <tr>
                  <th className="px-2 py-2 text-left">
                    <input type="checkbox" />
                  </th>
                  <th className="px-2 py-2 text-left">Comments</th>
                  <th className="px-2 py-2 text-left">Approved by</th>
                  <th className="px-2 py-2 text-left">Approve date</th>
                  <th className="px-2 py-2 text-left">Approved</th>
                  <th className="px-2 py-2 text-left">Request date</th>
                  <th className="px-2 py-2 text-left">
                    <Ellipsis className="text-gray-400" />
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {tableData.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleRowSelect(row.id)}
                  >
                    <td className="border border-gray-200 px-2 py-3">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(row.id)}
                        onChange={() => handleRowSelect(row.id)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </td>

                    <td className="border border-gray-200 px-2 py-3 text-gray-900 truncate max-w-xs">
                      {row.comments}
                    </td>

                    <td className="border border-gray-200 px-2 py-3 text-gray-600">
                      {row.approvedBy}
                    </td>

                    <td className="border border-gray-200 px-2 py-3 text-gray-600">
                      {row.approveDate}
                    </td>

                    <td className="border border-gray-200 px-2 py-3">
                      {row.approved ? (
                        <FaRegCheckCircle size={20} />
                      ) : (
                        <Circle size={20} />
                      )}
                    </td>

                    <td className="border border-gray-200 px-2 py-3 text-gray-600">
                      {row.requestDate}
                    </td>

                    <td className="border border-gray-200 px-2 py-3">
                      <button
                        className="text-gray-400 hover:text-gray-600"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Ellipsis />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Desktop Right Panel */}
      {showRightPanel && (
        <div className="hidden lg:flex w-80 xl:w-96 bg-white border-l border-gray-200 flex-col">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 className="text-xl font-medium text-gray-900">
              🏝️ Vacation requests
            </h3>
            <button
              onClick={() => {
                setSelectedRows([]);
                setShowRightPanel(false);
              }}
              className="text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <X />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-auto">
            <div className="space-y-3 mb-6 text-gray-500">
              <p className="flex gap-5">
                <span className="font-medium">Created at:</span>
                {selectedRows.length > 0
                  ? tableData.find((row) => row.id === selectedRows[0])
                      ?.requestDate || "Jan 28, 2025 11:17 AM"
                  : "Jan 28, 2025 11:17 AM"}
              </p>
              <p className="flex gap-5">
                <span className="font-medium">Ownership:</span>
                <span className="flex items-center gap-2 bg-gray-200 py-1 px-2 rounded-full">
                  <img
                    src="https://mockmind-api.uifaces.co/content/human/80.jpg"
                    className="h-5 w-5 rounded-full"
                    alt="avatar"
                  />
                  <p>Joe</p>
                </span>
              </p>
              <p className="flex gap-5">
                <span className="font-medium">Table ID:</span> 96
              </p>
            </div>

            <div className="tabs">
              <span
                className={`tab ${activeTab === "Activity" ? "active" : ""} flex flex-col`}
                onClick={() => setActiveTab("Activity")}
              >
                <span className="tab-icon">
                  <HiUserAdd size={20} />
                </span>
                Sharing
              </span>

              <span
                className={`tab ${activeTab === "Sharing" ? "active" : ""} flex flex-col`}
                onClick={() => setActiveTab("Sharing")}
              >
                <span className="tab-icon">
                  <PiPlugsConnectedFill size={20} />
                </span>
                Integration
              </span>
            </div>

            <div className="space-y-4 mt-5">
              <h4 className="font-medium text-gray-900 text-[17px]">
                Share with accounts, groups or teams
              </h4>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="mana"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <p className="text-sm text-gray-500">No shares</p>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Right Panel - Modal */}
      {showRightPanel && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => {
            setSelectedRows([]);
            setShowRightPanel(false);
          }}
        >
          <div
            className="absolute right-0 top-0 h-full w-full xs:w-[85%] max-w-sm bg-white shadow-xl flex flex-col animate-slide-in-right"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3 xs:p-4 border-b border-gray-200 shrink-0">
              <h3 className="text-base xs:text-lg font-medium text-gray-900 flex items-center gap-2">
                <span>🏝️</span>
                <span className="truncate">Vacation requests</span>
              </h3>
              <button
                onClick={() => {
                  setSelectedRows([]);
                  setShowRightPanel(false);
                }}
                className="text-gray-400 hover:text-gray-600 cursor-pointer p-1 hover:bg-gray-100 rounded-md transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 p-3 xs:p-4 overflow-auto">
              <div className="space-y-2 xs:space-y-3 mb-4 xs:mb-6 text-gray-500">
                <div className="flex flex-col gap-0.5 xs:gap-1">
                  <span className="font-medium text-black text-xs xs:text-sm">
                    Created at
                  </span>
                  <span className="text-xs xs:text-sm">
                    {selectedRows.length > 0
                      ? tableData.find((row) => row.id === selectedRows[0])
                          ?.requestDate || "Jan 28, 2025 11:17 AM"
                      : "Jan 28, 2025 11:17 AM"}
                  </span>
                </div>
                <div className="flex flex-col gap-1 xs:gap-2">
                  <span className="font-medium text-black text-xs xs:text-sm">
                    Ownership
                  </span>
                  <span className="flex items-center gap-2 bg-gray-200 py-1 px-2 rounded-full w-fit text-xs xs:text-sm">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFuLZe9UHs6cC_sIBZ8HIqkTg4ADomTdWBcQ&s"
                      className="h-4 w-4 xs:h-5 xs:w-5 rounded-full"
                      alt="avatar"
                    />
                    <p>Joe</p>
                  </span>
                </div>
                <div className="flex flex-col gap-0.5 xs:gap-1">
                  <span className="font-medium text-black text-xs xs:text-sm">
                    Table ID
                  </span>
                  <span className="text-xs xs:text-sm">96</span>
                </div>
              </div>

              <div className="flex border-b border-gray-200 mb-3 xs:mb-4">
                <button
                  className={`px-2 xs:px-3 py-2 text-xs xs:text-sm font-medium flex flex-col justify-center items-center gap-0.5 xs:gap-1 flex-1 transition-colors ${
                    mobileActiveTab === "Sharing"
                      ? "border-b-2 border-blue-800 text-blue-800"
                      : "text-gray-500"
                  }`}
                  onClick={() => setMobileActiveTab("Sharing")}
                >
                  <UserPlus
                    fill={
                      mobileActiveTab === "Sharing" ? "currentColor" : "black"
                    }
                    size={14}
                    className="xs:w-4 xs:h-4"
                  />
                  Sharing
                </button>
                <button
                  className={`px-2 xs:px-3 py-2 text-xs xs:text-sm font-medium flex flex-col justify-center items-center gap-0.5 xs:gap-1 flex-1 transition-colors ${
                    mobileActiveTab === "Integration"
                      ? "border-b-2 border-blue-800 text-blue-800"
                      : "text-gray-500"
                  }`}
                  onClick={() => setMobileActiveTab("Integration")}
                >
                  <LucideSettings2
                    size={14}
                    className="xs:w-4 xs:h-4"
                    fill={
                      mobileActiveTab === "Integration"
                        ? "currentColor"
                        : "black"
                    }
                  />
                  Integration
                </button>
              </div>

              <div className="space-y-3 xs:space-y-4">
                <h4 className="font-medium text-gray-900 text-sm xs:text-base">
                  Share with accounts, groups or teams
                </h4>
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder="mana"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <p className="text-xs xs:text-sm text-gray-500">No shares</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VacationRequests;
