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
        if (tableData.length > 0 && selectedRows.length === 0) {
            setSelectedRows([tableData[0].id]);
            setShowRightPanel(true);
        }
    }, [tableData]);

    return (
        <div className="flex flex-col lg:flex-row h-screen bg-gray-50">
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden min-w-0">
                {/* Page Header */}
                <div className="bg-white border-b border-gray-200 px-3 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleSidebar}
                            className="p-1 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
                        >
                            {!sidebarCollapsed ? <MdMenuOpen size={30} /> : <img src="./open.png" width={25} height={25} />}
                        </button>
                        <span className="text-2xl sm:text-4xl">🏝️</span>
                        <h1 className="text-xl sm:text-2xl lg:text-3xl text-gray-900 truncate">
                            Vacation requests
                        </h1>
                    </div>
                </div>

                {/* Views Section */}
                <div className="bg-white border-b border-gray-200 px-3 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-base sm:text-lg font-medium text-gray-900">
                            Views
                        </h3>
                        <button className="bg-blue-200/40 text-black font-bold px-2 py-1 rounded-md">
                            <RiMenuAddFill size={16} className="sm:w-5 sm:h-5" />
                        </button>
                    </div>

                    {/* Mobile Views - Card Layout */}
                    <div className="block lg:hidden space-y-2">
                        {viewsData.map((view, index) => (
                            <div
                                key={index}
                                className="p-3 rounded-lg border border-gray-200 hover:bg-gray-50"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        {view.name === "Create Vacation Request" && (
                                            <Plus color="purple" size={16} />
                                        )}
                                        {view.name === "Open Request" && <FileTextIcon size={16} />}
                                        {view.name === "Request Status" && (
                                            <LucideCircleQuestionMark size={16} />
                                        )}
                                        {view.name === "Closed requests" && (
                                            <CheckSquare2 fill="green" color="white" size={16} />
                                        )}
                                        <span className="text-sm font-medium text-gray-900 truncate">
                                            {view.name}
                                        </span>
                                    </div>
                                    <button className="text-gray-500 cursor-pointer hover:text-gray-600">
                                        <Ellipsis size={16} />
                                    </button>
                                </div>
                                <div className="grid grid-cols-3 gap-2 text-xs text-gray-500">
                                    <span>Rows: {view.rows}</span>
                                    <span>Cols: {view.columns}</span>
                                    <span className="truncate">{view.lastEdited}</span>
                                </div>
                            </div>
                        ))}
                        <div className="p-3 bg-gray-100 rounded-lg">
                            <div className="flex items-center gap-4">
                                <span className="text-black font-bold text-base">Total</span>
                                <span className="text-base text-black font-bold">4 rows</span>
                                <span className="text-base text-black font-bold">9 cols</span>
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
                <div className="flex-1 bg-white px-3 sm:px-6 py-3 sm:py-4 overflow-auto min-h-0">
                    <div className="flex items-center gap-2 mb-4">
                        <h3 className="text-base sm:text-lg font-medium text-gray-900">
                            Data
                        </h3>
                        <button className="bg-blue-200/40 px-2 py-1 rounded-lg">
                            <TbTableOptions size={16} className="sm:w-5 sm:h-5" />
                        </button>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4">
                        <button className="flex items-center gap-2 py-2 rounded-lg hover:bg-gray-100 font-bold cursor-pointer w-full sm:w-auto justify-center sm:justify-start">
                            <Plus size={20} /> Create row
                        </button>
                        <div className="relative flex items-center w-full sm:w-auto">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full sm:w-64 pl-8 pr-3 py-2 font-bold rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <span className="absolute left-2 text-gray-400 flex justify-center items-center">
                                <Search size={15} />
                            </span>
                        </div>
                    </div>

                    {/* Mobile Data - Card Layout */}
                    <div className="block lg:hidden space-y-3">
                        {tableData.map((row) => (
                            <div
                                key={row.id}
                                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                                onClick={() => handleRowSelect(row.id)}
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <input
                                        type="checkbox"
                                        checked={selectedRows.includes(row.id)}
                                        onChange={() => handleRowSelect(row.id)}
                                        onClick={(e) => e.stopPropagation()}
                                        className="mt-1"
                                    />
                                    <button
                                        className="text-gray-400 hover:text-gray-600 cursor-pointer"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Ellipsis size={16} />
                                    </button>
                                </div>

                                <div className="space-y-3">
                                    {row.comments && (
                                        <div>
                                            <span className="text-xs font-medium text-gray-500">
                                                Comments:
                                            </span>
                                            <p className="text-sm text-gray-900 mt-1">
                                                {row.comments}
                                            </p>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                        <div>
                                            <span className="text-xs font-medium text-gray-500">
                                                Approved by:
                                            </span>
                                            <p className="text-gray-900 mt-1">
                                                {row.approvedBy || "-"}
                                            </p>
                                        </div>
                                        <div>
                                            <span className="text-xs font-medium text-gray-500">
                                                Approve date:
                                            </span>
                                            <p className="text-gray-900 mt-1">
                                                {row.approveDate || "-"}
                                            </p>
                                        </div>
                                        <div>
                                            <span className="text-xs font-medium text-gray-500">
                                                Status:
                                            </span>
                                            <div className="flex items-center mt-1">
                                                {row.approved === true && (
                                                    <FaRegCheckCircle size={20} />
                                                )}
                                                {row.approved === false && <Circle size={20} />}
                                                {row.approved === null && (
                                                    <span className="text-gray-400">-</span>
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-xs font-medium text-gray-500">
                                                Request date:
                                            </span>
                                            <p className="text-gray-900 mt-1">{row.requestDate}</p>
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
                    className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50"
                    onClick={() => {
                        setSelectedRows([]);
                        setShowRightPanel(false);
                    }}
                >
                    <div
                        className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between p-4 border-b border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900">
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

                        <div className="flex-1 p-4 overflow-auto h-full">
                            <div className="space-y-3 mb-6 text-gray-500">
                                <p className="flex flex-col gap-1">
                                    <span className="font-medium text-black">Created at:</span>
                                    <span>
                                        {selectedRows.length > 0
                                            ? tableData.find((row) => row.id === selectedRows[0])
                                                ?.requestDate || "Jan 28, 2025 11:17 AM"
                                            : "Jan 28, 2025 11:17 AM"}
                                    </span>
                                </p>
                                <p className="flex flex-col gap-2">
                                    <span className="font-medium text-black">Ownership:</span>
                                    <span className="flex items-center gap-2 bg-gray-200 py-1 px-2 rounded-full w-fit">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFuLZe9UHs6cC_sIBZ8HIqkTg4ADomTdWBcQ&s"
                                            className="h-5 w-5 rounded-full"
                                            alt="avatar"
                                        />
                                        <p>Joe</p>
                                    </span>
                                </p>
                                <p className="flex flex-col gap-1">
                                    <span className="font-medium text-black">Table ID:</span>
                                    <span>96</span>
                                </p>
                            </div>

                            <div className="flex border-b border-gray-200 mb-4">
                                <button className="px-3 py-2 text-sm border-b-4 font-bold border-blue-800 flex flex-col justify-center items-center gap-1">
                                    <UserPlus fill="black" size={16} />
                                    Sharing
                                </button>
                                <button className="px-3 py-2 text-sm font-medium flex flex-col justify-center items-center gap-1">
                                    <LucideSettings2 size={16} fill="black" />
                                    Integration
                                </button>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-medium text-gray-900">
                                    Share with accounts, groups or teams
                                </h4>
                                <div className="flex flex-col gap-2">
                                    <input
                                        type="text"
                                        placeholder="mana"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <p className="text-sm text-gray-500">No shares</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VacationRequests;
