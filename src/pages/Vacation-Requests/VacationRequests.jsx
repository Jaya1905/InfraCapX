import {
    CheckCircle2,
    CheckSquare2,
    Circle,
    Ellipsis,
    FileTextIcon,
    LucideCircleQuestionMark,
    LucideSettings2,
    MenuIcon,
    Plus,
    Search,
    TableConfigIcon,
    UserPlus,
    X,
} from "lucide-react";
import { useState } from "react";

const VacationRequests = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [showRightPanel, setShowRightPanel] = useState(false);

    const viewsData = [
        {
            name: "Create Vacation Request",
            rows: 0,
            columns: 5,
            lastEdited: "Jan 28, 2025 11:17 AM",
        },
        {
            name: "Open Request",
            rows: 1,
            columns: 9,
            lastEdited: "Jan 28, 2025 11:17 AM",
        },
        {
            name: "Request Status",
            rows: 0,
            columns: 9,
            lastEdited: "Jan 28, 2025 11:17 AM",
        },
        {
            name: "Closed requests",
            rows: 3,
            columns: 9,
            lastEdited: "Jan 28, 2025 11:17 AM",
        },
    ];

    const tableData = [
        {
            id: 1,
            comments: "Bob will help for this time",
            approvedBy: "The Boss",
            approveDate: "Feb 2, 2023",
            approved: true,
            requestDate: "Jan 8, 2023",
        },
        {
            id: 2,
            comments: "",
            approvedBy: "The Boss",
            approveDate: "Feb 2, 2023",
            approved: true,
            requestDate: "Jan 18, 2023",
        },
        {
            id: 3,
            comments: "We have to talk about that",
            approvedBy: "",
            approveDate: "",
            approved: false,
            requestDate: "Jan 30, 2023",
        },
        {
            id: 4,
            comments: "",
            approvedBy: "",
            approveDate: "",
            approved: null,
            requestDate: "Jan 30, 2023",
        },
    ];

    const handleRowSelect = (id) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
            setShowRightPanel(false);
        } else {
            setSelectedRows([id]);
            setShowRightPanel(true);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row h-screen bg-gray-50">
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden min-w-0">
                {/* Page Header */}
                <div className="bg-white border-b border-gray-200 px-3 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-center gap-2">
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
                        <button className="bg-gray-200 text-black font-bold px-2 py-1 rounded-md">
                            <MenuIcon size={16} className="sm:w-5 sm:h-5" />
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
                        <div className="min-w-full">
                            <div className="grid grid-cols-6 gap-4 text-sm font-medium text-gray-500 border-b border-gray-200 pb-2 mb-2">
                                <span>View</span>
                                <span>Rows</span>
                                <span>Columns</span>
                                <span>Last edited</span>
                                <span>Shares</span>
                                <span>Actions</span>
                            </div>

                            {viewsData.map((view, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-6 gap-4 py-2 px-2 rounded hover:bg-gray-50"
                                >
                                    <div className="flex items-center gap-2 min-w-0">
                                        {view.name === "Create Vacation Request" && (
                                            <Plus color="purple" size={20} />
                                        )}
                                        {view.name === "Open Request" && <FileTextIcon size={20} />}
                                        {view.name === "Request Status" && (
                                            <LucideCircleQuestionMark size={20} />
                                        )}
                                        {view.name === "Closed requests" && (
                                            <CheckSquare2 fill="green" color="white" size={20} />
                                        )}
                                        <span className="text-sm text-gray-900 truncate">
                                            {view.name}
                                        </span>
                                    </div>
                                    <span className="text-sm text-gray-600">{view.rows}</span>
                                    <span className="text-sm text-gray-600">{view.columns}</span>
                                    <span className="text-sm text-gray-600 truncate">
                                        {view.lastEdited}
                                    </span>
                                    <span></span>
                                    <button className="text-gray-500 cursor-pointer hover:text-gray-600 justify-self-start">
                                        <Ellipsis />
                                    </button>
                                </div>
                            ))}
                            <div className="grid grid-cols-6 px-2 mt-4">
                                <span className="text-black font-bold text-lg">Total</span>
                                <span className="text-lg text-black font-bold">4</span>
                                <span className="text-lg text-black font-bold">9</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Data Section */}
                <div className="flex-1 bg-white px-3 sm:px-6 py-3 sm:py-4 overflow-auto min-h-0">
                    <div className="flex items-center gap-2 mb-4">
                        <h3 className="text-base sm:text-lg font-medium text-gray-900">
                            Data
                        </h3>
                        <button className="bg-gray-200 px-2 py-1 rounded-lg">
                            <TableConfigIcon size={16} className="sm:w-5 sm:h-5" />
                        </button>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4">
                        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 font-bold cursor-pointer w-full sm:w-auto justify-center sm:justify-start">
                            <Plus size={16} /> Create row
                        </button>
                        <div className="relative flex items-center w-full sm:w-auto">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full sm:w-64 pl-8 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                                    <CheckCircle2 size={20} className="text-green-600" />
                                                )}
                                                {row.approved === false && (
                                                    <Circle size={20} className="text-gray-400" />
                                                )}
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
                        <div className="min-w-full">
                            <div className="grid grid-cols-7 gap-4 text-sm font-medium text-gray-500 border-b border-gray-200 pb-2 mb-2">
                                <input type="checkbox" className="justify-self-start" />
                                <span>Comments</span>
                                <span>Approved by</span>
                                <span>Approve date</span>
                                <span>Approved</span>
                                <span>Request date</span>
                                <button className="text-gray-400 justify-self-start">
                                    <Ellipsis />
                                </button>
                            </div>

                            {tableData.map((row) => (
                                <div
                                    key={row.id}
                                    className="grid grid-cols-7 gap-4 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                                    onClick={() => handleRowSelect(row.id)}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedRows.includes(row.id)}
                                        onChange={() => handleRowSelect(row.id)}
                                        onClick={(e) => e.stopPropagation()}
                                        className="justify-self-start"
                                    />
                                    <span className="text-sm text-gray-900 truncate">
                                        {row.comments}
                                    </span>
                                    <span className="text-sm text-gray-600">
                                        {row.approvedBy}
                                    </span>
                                    <span className="text-sm text-gray-600">
                                        {row.approveDate}
                                    </span>
                                    <span className="flex items-center">
                                        {row.approved === true && (
                                            <CheckCircle2 size={20} className="text-green-600" />
                                        )}
                                        {row.approved === false && (
                                            <Circle size={20} className="text-gray-400" />
                                        )}
                                    </span>
                                    <span className="text-sm text-gray-600">
                                        {row.requestDate}
                                    </span>
                                    <button
                                        className="text-gray-400 hover:text-gray-600 justify-self-start cursor-pointer"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Ellipsis />
                                    </button>
                                </div>
                            ))}
                        </div>
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
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFuLZe9UHs6cC_sIBZ8HIqkTg4ADomTdWBcQ&s"
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

                        <div className="flex border-b border-gray-200 mb-4">
                            <button className="px-4 py-2 text-lg border-b-4 font-bold border-blue-800 flex flex-col justify-center items-center gap-2">
                                <UserPlus fill="black" size={20} />
                                Sharing
                            </button>
                            <button className="px-4 py-2 text-lg font-medium flex flex-col justify-center items-center gap-2">
                                <LucideSettings2 size={20} fill="black" />
                                Integration
                            </button>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-medium text-gray-900">
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
