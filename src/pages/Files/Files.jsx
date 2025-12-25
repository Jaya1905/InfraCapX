import { useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import { FILES_DATA } from "../../utils/constants";
import RightPanel from "../../components/RightPanel/RightPanel";
import { GoFileDirectoryFill } from "react-icons/go";
import { MdMenuOpen, MdOutlineInsertLink } from "react-icons/md";
import { FaAngleRight, FaFile, FaRegCalendarAlt } from "react-icons/fa";
import { HiUserAdd, HiUsers } from "react-icons/hi";
import { FaEllipsis } from "react-icons/fa6";
import { BiPlus } from "react-icons/bi";

const Files = () => {
  const { selectedFiles, setSelectedFiles, toggleSidebar, sidebarCollapsed } =
    useOutletContext();
  const initialSelectionMade = useRef(false);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;
    if (
      FILES_DATA.length > 0 &&
      selectedFiles.length === 0 &&
      isDesktop &&
      !initialSelectionMade.current
    ) {
      setSelectedFiles([FILES_DATA[0]]);
      initialSelectionMade.current = true;
    }
  }, [setSelectedFiles, selectedFiles.length]);

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 1024;
      if (!isDesktop && selectedFiles.length > 0) {
        setSelectedFiles([]);
      } else if (isDesktop && selectedFiles.length === 0 && FILES_DATA.length > 0) {
        setSelectedFiles([FILES_DATA[0]]);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [selectedFiles.length, setSelectedFiles]);

  const handleSelect = (file, event) => {
    const isCtrlPressed = event.ctrlKey || event.metaKey;

    if (isCtrlPressed) {
      setSelectedFiles((prev) =>
        prev.some((f) => f.id === file.id)
          ? prev.filter((f) => f.id !== file.id)
          : [...prev, file],
      );
    } else {
      setSelectedFiles([file]);
    }
  };

  const isSelected = (id) => selectedFiles.some((file) => file.id === id);

  return (
    <div className="flex flex-col lg:flex-row h-full">
      {/* Files Content */}
      <div className="flex-1 p-3 xs:p-4 sm:p-5 bg-white overflow-auto">
        {/* Breadcrumb + New */}
        <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-5 mb-3">
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

          <div className="flex flex-wrap items-center gap-1.5 text-xs xs:text-sm text-gray-700">
            <span className="cursor-pointer text-sm xs:text-[15px] text-gray-500">
              <GoFileDirectoryFill />
            </span>
            <span className="cursor-pointer text-sm xs:text-[15px] text-gray-500">All files</span>
            <span className="text-gray-400">
              <FaAngleRight />
            </span>
            <span className="font-bold text-gray-900 text-sm xs:text-base">Virtual Annual Conference</span>
            <span className="text-xs text-gray-500">
              <MdOutlineInsertLink size={16} className="xs:w-5 xs:h-5" />
            </span>
            <button className="flex items-center gap-1 bg-[#e6f0f4] px-3 xs:px-4 py-1.5 xs:py-2 text-xs xs:text-sm rounded-md cursor-pointer font-semibold text-gray-900 ml-2 xs:ml-4 hover:bg-gray-100 transition-colors">
              <BiPlus /> New
            </button>
          </div>
        </div>

        <div className="ml-0 xs:ml-4 sm:ml-10">
          {/* Info */}
          <div className="mb-3 mt-6 xs:mt-10 sm:mt-14">
            <p className="text-xs xs:text-sm text-black leading-5 xs:leading-6 flex flex-wrap items-center gap-1">
              Virtual Annual Conference managed by
              <span className="font-semibold ml-1 px-2 xs:px-2.5 py-0.5 rounded-full bg-[#065e9a] text-white flex items-center gap-1 w-fit text-xs xs:text-sm">
                <img
                  src="https://mockmind-api.uifaces.co/content/human/80.jpg"
                  className="h-4 w-4 xs:h-5 xs:w-5 rounded-full"
                  alt="avatar"
                />
                Christine Schott
              </span>
              and
              <span className="font-semibold ml-1 px-2 xs:px-2.5 py-0.5 rounded-full bg-gray-200 text-black flex items-center gap-1 w-fit text-xs xs:text-sm">
                <img
                  src="https://mockmind-api.uifaces.co/content/human/125.jpg"
                  className="h-4 w-4 xs:h-5 xs:w-5 rounded-full"
                  alt="avatar"
                />
                Ros Christy
              </span>
            </p>

            <p className="mt-1.5 text-xs xs:text-sm text-gray-600 max-w-225 leading-5 xs:leading-6">
              The premier gathering for tech enthusiasts, professionals, and
              innovators! In its annual edition, this virtual conference brings
              together thought leaders, industry experts, and enthusiasts from
              around the globe to explore the latest trends, innovations, and
              breakthroughs in the world of technology.
            </p>
          </div>

          {/* Useful links */}
          <div className="text-xs xs:text-sm mb-5 xs:mb-6">
            <div className="font-semibold mb-1">Useful links:</div>
            <ul className="pl-4 space-y-2 xs:space-y-3">
              <li className="list-disc">
                Event details:
                <a href="#" className="text-[#065e9a] ml-1 break-all"> https://tech-preview.nextcloud.com/f/535015</a>
              </li>
              <li className="list-disc">
                Keynote speakers:
                <a href="#" className="text-[#065e9a] ml-1 break-all"> https://tech-preview.nextcloud.com/f/534273</a>
              </li>
              <li className="list-disc">
                Presentation:
                <a href="#" className="text-[#065e9a] ml-1 break-all"> https://tech-preview.nextcloud.com/f/536083</a>
              </li>
            </ul>
          </div>

          {/* Meta header */}
          <div className="flex flex-wrap gap-3 xs:gap-4 sm:gap-6 text-xs xs:text-sm sm:text-[15px] text-gray-900 my-3 font-semibold">
            <span className="flex items-center gap-1">
              <FaFile /> Type
            </span>
            <span className="flex items-center gap-1">
              <FaRegCalendarAlt /> Modified
            </span>
            <span className="flex items-center gap-1">
              <HiUsers /> People
            </span>
          </div>
        </div>

        {/* Mobile: Card Layout */}
        <div className="block lg:hidden space-y-2 xs:space-y-3">
          {FILES_DATA.map((file) => (
            <div
              key={file.id}
              className={`border rounded-lg p-3 xs:p-4 cursor-pointer transition-colors ${
                isSelected(file.id)
                  ? "bg-sky-100 border-l-[3px] border-l-sky-600 border-sky-300"
                  : "border-gray-200 hover:bg-gray-50 active:bg-gray-100"
              }`}
              onClick={(e) => handleSelect(file, e)}
            >
              <div className="flex items-start gap-2 xs:gap-3">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-blue-500 cursor-pointer mt-1"
                  checked={isSelected(file.id)}
                  readOnly
                />
                <div className="text-lg shrink-0">
                  {file.type === "Folder" ? (
                    <img src="./folder.png" alt="folder" className="w-5 h-5 xs:w-6 xs:h-6" />
                  ) : (
                    <img src="./file.png" alt="file" className="w-5 h-5 xs:w-6 xs:h-6" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm xs:text-base text-gray-900 truncate">{file.name}</div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {file.tags?.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-700 text-[10px] xs:text-xs px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 xs:gap-4 mt-2 text-[10px] xs:text-xs text-gray-500 whitespace-nowrap">
                    <span>{file.size}</span>
                    <span>{file.modified}</span>
                    {file.shared && <span className="text-[#065e9a] font-medium">Shared</span>}
                  </div>
                </div>
                <div className="flex items-center gap-1 xs:gap-2 shrink-0">
                  <span className="text-[#065e9a]"><MdOutlineInsertLink size={16} /></span>
                  <span className="text-gray-900"><FaEllipsis size={14} /></span>
                  <span className="text-[#065e9a]"><HiUserAdd size={16} /></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Table Layout */}
        <div className="hidden lg:block">
          {/* Table header */}
          <div className="grid grid-cols-[36px_40px_1fr_200px_180px_100px_140px] gap-4 items-center px-3 py-2 text-xs text-gray-500 border-b border-gray-200">
            <span>
              <input type="checkbox" className="w-4 h-4 accent-blue-500 cursor-pointer" />
            </span>
            <span></span>
            <span>Name</span>
            <span></span>
            <span></span>
            <span>Size</span>
            <span>Modified</span>
          </div>

          {/* Rows */}
          {FILES_DATA.map((file, index) => (
            <div
              key={file.id}
              className={`grid grid-cols-[36px_40px_1fr_200px_180px_100px_140px] gap-4 items-center px-3 py-2 text-sm border-b cursor-pointer transition-colors ${
                isSelected(file.id)
                  ? "bg-sky-100 border-l-[3px] border-l-sky-600 hover:bg-sky-200"
                  : "border-gray-100 hover:bg-gray-50"
              }`}
              onClick={(e) => handleSelect(file, e)}
            >
              {/* Checkbox */}
              <span>
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-blue-500 cursor-pointer"
                  checked={isSelected(file.id)}
                  readOnly
                />
              </span>

              {/* Icon column */}
              <span className="text-lg px-1">
                {file.type === "Folder" ? (
                  <img src="./folder.png" alt="folder" />
                ) : (
                  <img src="./file.png" alt="file" />
                )}
              </span>

              {/* Name */}
              <span className="flex items-center gap-2">{file.name}</span>

              {/* Tags */}
              <span className="flex gap-1.5">
                {file.tags?.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </span>

              {/* Actions */}
              <span className="flex items-center gap-4">
                {file.shared && (
                  <span className="text-[#065e9a] text-sm cursor-pointer">Shared</span>
                )}
                <span className="text-[#065e9a] cursor-pointer">
                  <MdOutlineInsertLink size={20} />
                </span>
                <span className="text-gray-900 cursor-pointer">
                  <FaEllipsis size={20} />
                </span>
                {index >= 2 && (
                  <span className="text-[#065e9a] cursor-pointer">
                    <HiUserAdd size={20} />
                  </span>
                )}
              </span>

              {/* Size */}
              <span>{file.size}</span>

              {/* Modified */}
              <span>{file.modified}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      {selectedFiles.length > 0 && (
        <RightPanel
          selectedFiles={selectedFiles}
          setSelectedFiles={setSelectedFiles}
        />
      )}
    </div>
  );
};

export default Files;
