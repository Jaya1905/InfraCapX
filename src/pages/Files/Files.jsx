import React from "react";
import { useOutletContext } from "react-router-dom";
import { FILES_DATA } from "../../utils/constants";
import "./files.css";

const Files = () => {
  const { selectedFiles, setSelectedFiles } = useOutletContext();

  const handleSelect = (file, event) => {
    const isCtrlPressed = event.ctrlKey || event.metaKey;

    if (isCtrlPressed) {
      // Toggle selection
      setSelectedFiles((prev) =>
        prev.some((f) => f.id === file.id)
          ? prev.filter((f) => f.id !== file.id)
          : [...prev, file]
      );
    } else {
      // Normal click → single select
      setSelectedFiles([file]);
    }
  };

  const isSelected = (id) =>
    selectedFiles.some((file) => file.id === id);

  return (
    <div className="files-page">
      <div className="files-header">
        <h2>Virtual Annual Conference</h2>
        <button className="new-btn">+ New</button>
      </div>

      <div className="files-table-header">
        <span>Name</span>
        <span>Size</span>
        <span>Modified</span>
      </div>

      {FILES_DATA.map((file) => (
        <div
          key={file.id}
          className={`files-row ${isSelected(file.id) ? "selected" : ""}`}
          onClick={(e) => handleSelect(file, e)}
        >
          <span className="file-name">
            {file.type === "Folder" ? "📁" : "📄"} {file.name}
          </span>
          <span>{file.size}</span>
          <span>{file.modified}</span>
        </div>
      ))}
    </div>
  );
};

export default Files;
