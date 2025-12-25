import { X, Users } from "lucide-react";
import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";

const TaskForce = () => {
    const { toggleSidebar, sidebarCollapsed } = useOutletContext();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        type: "Users and groups",
        users: true,
        groups: true,
        teams: true,
        defaultValue: "Internal Project Team",
        mandatory: false,
        selectMultipleItems: false,
        showUserStatus: false,
        addColumnToOtherViews: "Column",
        addMore: false,
    });

    const toggle = (key) => setFormData((p) => ({ ...p, [key]: !p[key] }));

    const handleClose = () => {
        navigate(-1);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Page Header */}
                <div className="border-gray-200 px-3 sm:px-6 py-4">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleSidebar}
                            className="hidden lg:flex p-1 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
                        >
                            {!sidebarCollapsed ? (
                                <MdMenuOpen size={30} />
                            ) : (
                                <img src="./open.png" width={25} height={25} />
                            )}
                        </button>
                        <span className="text-xl sm:text-2xl">📋</span>
                        <h1 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-900">
                            Task force
                        </h1>
                    </div>
                </div>

                {/* Modal Overlay */}
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
                    {/* Modal */}
                    <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-lg shadow-xl overflow-hidden flex flex-col">
                        {/* Header */}
                        <div className="relative flex items-center px-4 sm:px-6 py-4 border-b">
                            {/* Center title */}
                            <h2 className="absolute left-1/2 -translate-x-1/2 text-lg sm:text-xl font-semibold text-black">
                                Create column
                            </h2>

                            {/* Right close button */}
                            <button
                                onClick={handleClose}
                                className="ml-auto text-black hover:text-gray-600 transition-colors cursor-pointer"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="px-4 sm:px-6 py-5 flex-1 overflow-y-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* LEFT COLUMN */}
                                <div className="space-y-5">
                                    {/* Title */}
                                    <div>
                                        <label className="block text-sm sm:text-base font-semibold mb-2">
                                            Title
                                        </label>
                                        <input
                                            placeholder="Enter a column title"
                                            className="w-full border rounded-md px-3 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                    </div>

                                    {/* Type - Mobile first */}
                                    <div className="lg:hidden">
                                        <label className="block text-sm sm:text-base font-semibold mb-2">
                                            Type
                                        </label>
                                        <div className="relative">
                                            <div className="relative">
                                                <select className="w-full border rounded-md px-3 py-2 pl-9 text-sm sm:text-base appearance-none bg-white">
                                                    <option>Users and groups</option>
                                                </select>
                                                <svg
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none z-10"
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
                                            <Users
                                                size={16}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none z-10"
                                            />
                                        </div>
                                    </div>

                                    {/* Users Groups Teams - Mobile */}
                                    <div className="lg:hidden">
                                        <div className="flex flex-wrap gap-4 sm:gap-6">
                                            <Check label="Users" />
                                            <Check label="Groups" />
                                            <Check label="Teams" />
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <label className="block text-sm sm:text-base font-semibold mb-2">
                                            Description
                                        </label>
                                        <textarea
                                            rows={4}
                                            className="w-full border rounded-md px-3 py-2 text-sm sm:text-base resize-none focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                    </div>

                                    {/* Default - Mobile */}
                                    <div className="lg:hidden">
                                        <label className="block text-sm sm:text-base font-semibold mb-2">
                                            Default
                                        </label>
                                        <div className="flex items-center gap-2 border rounded-md px-3 py-2 bg-gray-50">
                                            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#f2f2f2] text-purple-600 text-xs font-semibold flex items-center justify-center">
                                                IT
                                            </span>
                                            <span className="text-xs sm:text-sm flex-1">
                                                Internal Project Team
                                            </span>
                                            <X size={16} className="text-black cursor-pointer" />
                                        </div>
                                    </div>

                                    {/* Toggles */}
                                    <div className="space-y-4">
                                        <Toggle
                                            label="Mandatory"
                                            value={formData.mandatory}
                                            onClick={() => toggle("mandatory")}
                                        />

                                        <Toggle
                                            label="Select multiple items"
                                            value={formData.selectMultipleItems}
                                            onClick={() => toggle("selectMultipleItems")}
                                        />

                                        <Toggle
                                            label="Show user status"
                                            value={formData.showUserStatus}
                                            onClick={() => toggle("showUserStatus")}
                                        />
                                    </div>

                                    {/* Add column */}
                                    <div>
                                        <label className="block text-sm sm:text-base font-semibold mb-2">
                                            Add column to other views
                                        </label>
                                        <div className="relative">
                                            <select className="w-full border rounded-md px-3 py-2 text-sm sm:text-base appearance-none bg-white">
                                                <option>Column</option>
                                                <option>All views</option>
                                                <option>Selected views</option>
                                            </select>
                                            <svg
                                                className="absolute right-3 top-[50%] -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none z-10"
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

                                    </div>
                                </div>

                                {/* RIGHT COLUMN - Desktop only */}
                                <div className="hidden lg:block space-y-5">
                                    {/* Type */}
                                    <div>
                                        <label className="block text-base font-semibold mb-2">
                                            Type
                                        </label>
                                        <div className="relative">
                                            <select className="w-full border rounded-md px-3 py-2 pl-9">
                                                <option>Users and groups</option>
                                            </select>
                                            <Users
                                                size={16}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Users Groups Teams */}
                                    <div className="flex gap-6">
                                        <Check label="Users" />
                                        <Check label="Groups" />
                                        <Check label="Teams" />
                                    </div>

                                    {/* Default */}
                                    <div>
                                        <label className="block text-base font-semibold mb-2">
                                            Default
                                        </label>
                                        <div className="flex items-center gap-2 border rounded-md px-3 py-2 bg-gray-50">
                                            <span className="w-7 h-7 rounded-full bg-[#f2f2f2] text-purple-600 text-xs font-semibold flex items-center justify-center">
                                                IT
                                            </span>
                                            <span className="text-sm flex-1">
                                                Internal Project Team
                                            </span>
                                            <X size={20} className="text-black cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="flex flex-col sm:flex-row items-center px-4 sm:px-6 py-4 pb-8 sm:pb-4 border-t gap-4 sm:gap-6 sm:justify-end shrink-0">
                            <ToggleInline
                                label="Add more"
                                value={formData.addMore}
                                onClick={() => toggle("addMore")}
                            />

                            <button className="w-full sm:w-auto bg-[#00669f] text-white px-4 sm:px-6 py-2 rounded-md font-medium hover:bg-[#005a8c] transition-colors">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* ---------- SMALL COMPONENTS ---------- */

const Toggle = ({ label, value, onClick }) => (
    <div className="flex items-center justify-between">
        <span className="text-sm sm:text-base font-semibold">{label}</span>
        <button
            onClick={onClick}
            className={`w-10 h-5 sm:w-11 sm:h-6 rounded-full relative transition ${value ? "bg-[#00669f]" : "bg-gray-500"
                }`}
        >
            <span
                className={`absolute top-0.5 left-0.5 w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full transition ${value ? "translate-x-4 sm:translate-x-5" : ""
                    }`}
            />
        </button>
    </div>
);

const Check = ({ label }) => (
    <label className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base font-medium cursor-pointer">
        <input
            type="checkbox"
            defaultChecked
            className="w-4 h-4 sm:w-5 sm:h-5 rounded border-2 border-[#00669f] accent-[#00669f]"
        />
        {label}
    </label>
);

const ToggleInline = ({ label, value, onClick }) => (
    <div className="flex items-center gap-2 sm:gap-3 cursor-pointer">
        <button
            onClick={onClick}
            className={`w-10 h-5 sm:w-11 sm:h-6 rounded-full relative transition ${value ? "bg-[#00669f]" : "bg-gray-400"
                }`}
        >
            <span
                className={`absolute top-0.5 left-0.5 w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full transition ${value ? "translate-x-4 sm:translate-x-5" : ""
                    }`}
            />
        </button>

        <span className="text-sm sm:text-base font-semibold text-black">
            {label}
        </span>
    </div>
);

export default TaskForce;
