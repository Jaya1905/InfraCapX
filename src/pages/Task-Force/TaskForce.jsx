import { X, Users } from "lucide-react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";

const TaskForce = () => {
    const { toggleSidebar, sidebarCollapsed } = useOutletContext();
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

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Page Header */}
                <div className="border-gray-200 px-6 py-4">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleSidebar}
                            className="p-1 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
                        >
                            {!sidebarCollapsed ? <MdMenuOpen size={30} /> : <img src="./open.png" width={25} height={25} />}
                        </button>
                        <span className="text-2xl">📋</span>
                        <h1 className="text-2xl font-bold text-gray-900">Task force</h1>
                    </div>
                </div>
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    {/* Modal */}
                    <div className="bg-white w-250 rounded-lg shadow-xl overflow-hidden">
                        {/* Header */}
                        <div className="relative flex items-center px-6 py-4">
                            {/* Center title */}
                            <h2 className="absolute left-1/2 -translate-x-1/2 text-xl font-semibold text-black">
                                Create column
                            </h2>

                            {/* Right close button */}
                            <button className="ml-auto text-black hover:text-black">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="px-6 py-5 grid grid-cols-2 gap-6 max-h-[70vh] overflow-y-auto">
                            {/* LEFT COLUMN */}
                            <div className="space-y-5">
                                {/* Title */}
                                <div>
                                    <label className="block text-base font-semibold mb-1">
                                        Title
                                    </label>
                                    <input
                                        placeholder="Enter a column title"
                                        className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                </div>

                                {/* Description */}
                                <div>
                                    <label className="block text-base font-semibold mb-1">
                                        Description
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full border rounded-md px-3 py-2 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                </div>

                                {/* Mandatory */}
                                <Toggle
                                    label="Mandatory"
                                    value={formData.mandatory}
                                    onClick={() => toggle("mandatory")}
                                />

                                {/* Add column */}
                                <div>
                                    <label className="block text-base font-semibold mb-1">
                                        Add column to other views
                                    </label>
                                    <select className="w-full border rounded-md px-3 py-2">
                                        <option>Column</option>
                                        <option>All views</option>
                                        <option>Selected views</option>
                                    </select>
                                </div>
                            </div>

                            {/* RIGHT COLUMN */}
                            <div className="space-y-5">
                                {/* Type */}
                                <div>
                                    <label className="block text-base font-semibold mb-1">
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
                                    <label className="block text-base font-semibold mb-1">
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
                        </div>

                        {/* Footer */}
                        <div className="flex items-center px-6 py-4 justify-end gap-6">
                            <ToggleInline
                                label="Add more"
                                value={formData.addMore}
                                onClick={() => toggle("addMore")}
                            />

                            <button className="bg-[#00669f] text-white px-4 py-2 rounded-md font-medium hover:bg-[#005a8c]">
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
        <span className="text-base font-semibold">{label}</span>
        <button
            onClick={onClick}
            className={`w-11 h-6 rounded-full relative transition ${value ? "bg-[#00669f]" : "bg-gray-500"
                }`}
        >
            <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition ${value ? "translate-x-5" : ""
                    }`}
            />
        </button>
    </div>
);

const Check = ({ label }) => (
    <label className="flex items-center gap-3 text-base font-medium cursor-pointer">
        <input
            type="checkbox"
            defaultChecked
            className="w-5 h-5 rounded border-2 border-[#00669f] accent-[#00669f]"
        />
        {label}
    </label>
);

const ToggleInline = ({ label, value, onClick }) => (
    <div className="flex items-center gap-3 cursor-pointer">
        <button
            onClick={onClick}
            className={`w-11 h-6 rounded-full relative transition ${value ? "bg-[#00669f]" : "bg-gray-400"
                }`}
        >
            <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition ${value ? "translate-x-5" : ""
                    }`}
            />
        </button>

        <span className="text-base font-semibold text-black">{label}</span>
    </div>
);

export default TaskForce;
