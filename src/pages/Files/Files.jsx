import React from "react";
import { useOutletContext } from "react-router-dom";
import { FILES_DATA } from "../../utils/constants";
import "./files.css";

const Files = () => {
  const { selectedFiles, setSelectedFiles } = useOutletContext();

  const handleSelect = (file, event) => {
    const isCtrlPressed = event.ctrlKey || event.metaKey;

    if (isCtrlPressed) {
      setSelectedFiles((prev) =>
        prev.some((f) => f.id === file.id)
          ? prev.filter((f) => f.id !== file.id)
          : [...prev, file]
      );
    } else {
      setSelectedFiles([file]);
    }
  };

  const isSelected = (id) =>
    selectedFiles.some((file) => file.id === id);

  return (
    <div className="files-page">

      {/* 🔹 Breadcrumb + New */}
      <div className="breadcrumb-row">
        <div className="breadcrumb">
          <span className="crumb folder">📁</span>
          <span className="crumb">All files</span>
          <span className="separator">›</span>
          <span className="crumb active">
            Virtual Annual Conference
          </span>
          <span className="link-icon">🔗</span>
        </div>

        <button className="new-btn">+ New</button>
      </div>

      {/* 🔹 Info */}
      <div className="folder-info">
        <p className="managed-by">
          Virtual Annual Conference managed by
          <span className="user user1"> Christine Schott</span> and
          <span className="user user2"> Ros Christy</span>
        </p>

        <p className="description">
          The premier gathering for tech enthusiasts, professionals, and innovators!
          In its annual edition, this virtual conference brings together thought leaders,
          industry experts, and enthusiasts from around the globe to explore the latest
          trends, innovations, and breakthroughs in the world of technology.
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
        <span>📄 Type</span>
        <span>🕒 Modified</span>
        <span>👤 People</span>
      </div>

      {/* 🔹 Table header */}
      <div className="files-table-header">
        <span><input type="checkbox" className="nc-checkbox" /></span>
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
            {file.type === "Folder" ? "📁" : "📄"}
          </span>

          {/* Name */}
          <span className="file-name">{file.name}</span>

          {/* Tags */}
          <span className="tags">
            {file.tags?.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </span>

          {/* Actions */}
          <span className="actions">
            {file.shared && <span className="action blue">Shared</span>}
            <span className="action blue">🔗</span>
            <span className="action black">⋯</span>
            <span className="action blue">👤</span>
          </span>

          {/* Size */}
          <span>{file.size}</span>

          {/* Modified */}
          <span>{file.modified}</span>
        </div>
      ))}

    </div>
  );
};

export default Files;
