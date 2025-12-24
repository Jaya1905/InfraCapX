import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { FILES_DATA } from "../../utils/constants";
import RightPanel from "../../components/RightPanel/RightPanel";
import "./files.css";
import { GoFileDirectoryFill } from "react-icons/go";
import { MdOutlineInsertLink } from "react-icons/md";
import { FaAngleRight, FaFile, FaRegCalendarAlt } from "react-icons/fa";
import { HiUserAdd, HiUsers } from "react-icons/hi";
import { RiFolderZipFill } from "react-icons/ri";
import { FaEllipsis } from "react-icons/fa6";
import { BiPlus } from "react-icons/bi";

const Files = () => {
  const { selectedFiles, setSelectedFiles } = useOutletContext();

  useEffect(() => {
    if (FILES_DATA.length > 0 && selectedFiles.length === 0) {
      setSelectedFiles([FILES_DATA[0]]);
    }
  }, [setSelectedFiles, selectedFiles.length]);

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
    <div className="flex h-full">
      {/* Files Content */}
      <div className="flex-1 files-page">
        {/* 🔹 Breadcrumb + New */}
        <div className="breadcrumb-row">
          <div className="breadcrumb">
            <span className="crumb folder">
              <GoFileDirectoryFill />
            </span>
            <span className="crumb">All files</span>
            <span className="separator">
              <FaAngleRight />
            </span>
            <span className="crumb active">Virtual Annual Conference</span>
            <span className="link-icon">
              <MdOutlineInsertLink size={20} />
            </span>
          </div>

          <button className="new-btn flex items-center gap-1">
            <BiPlus /> New
          </button>
        </div>

        {/* 🔹 Info */}
        <div className="folder-info">
          <p className="managed-by">
            Virtual Annual Conference managed by
            <span className="user user1"> Christine Schott</span> and
            <span className="user user2"> Ros Christy</span>
          </p>

          <p className="description">
            The premier gathering for tech enthusiasts, professionals, and
            innovators! In its annual edition, this virtual conference brings
            together thought leaders, industry experts, and enthusiasts from
            around the globe to explore the latest trends, innovations, and
            breakthroughs in the world of technology.
          </p>
        </div>

        {/* 🔹 Useful links */}
        <div className="useful-links">
          <div className="links-title">Useful links:</div>
          <ul>
            <li>
              Event details:
              <a href="#"> https://tech-preview.nextcloud.com/f/535015</a>
            </li>
            <li>
              Keynote speakers:
              <a href="#"> https://tech-preview.nextcloud.com/f/534273</a>
            </li>
            <li>
              Presentation:
              <a href="#"> https://tech-preview.nextcloud.com/f/536083</a>
            </li>
          </ul>
        </div>

        {/* 🔹 Meta header */}
        <div className="files-meta">
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

        {/* 🔹 Table header */}
        <div className="files-table-header">
          <span>
            <input type="checkbox" className="nc-checkbox" />
          </span>
          <span></span>
          <span>Name</span>
          <span></span>
          <span></span>
          <span>Size</span>
          <span>Modified</span>
        </div>

        {/* 🔹 Rows */}
        {FILES_DATA.map((file) => (
          <div
            key={file.id}
            className={`files-row ${isSelected(file.id) ? "selected" : ""}`}
            onClick={(e) => handleSelect(file, e)}
          >
            {/* Checkbox */}
            <span>
              <input
                type="checkbox"
                className="nc-checkbox"
                checked={isSelected(file.id)}
                readOnly
              />
            </span>

            {/* Icon column */}
            <span className="file-icon">
              {file.type === "Folder" ? <RiFolderZipFill /> : <FaFile />}
            </span>

            {/* Name */}
            <span className="file-name">{file.name}</span>

            {/* Tags */}
            <span className="tags">
              {file.tags?.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </span>

            {/* Actions */}
            <span className="actions">
              {file.shared && <span className="action blue">Shared</span>}
              <span className="action blue">
                <MdOutlineInsertLink size={20} />
              </span>
              <span className="action black">
                <FaEllipsis size={20} />
              </span>
              <span className="action blue">
                <HiUserAdd size={20} />
              </span>
            </span>

            {/* Size */}
            <span>{file.size}</span>

            {/* Modified */}
            <span>{file.modified}</span>
          </div>
        ))}
      </div>

      {/* Right Panel */}
      <RightPanel selectedFiles={selectedFiles} />
    </div>
  );
};

export default Files;
