import React from "react";
import "./rightpanel.css";

const RightPanel = ({ selectedFiles }) => {
  if (selectedFiles.length === 0) {
    return (
      <aside className="right-panel">
        <p className="empty-state">Select files to see details</p>
      </aside>
    );
  }

  // MULTI SELECT
  if (selectedFiles.length > 1) {
    return (
      <aside className="right-panel">
        <h4>Multiple items selected</h4>

        <div className="right-section">
          <p className="section-title">Summary</p>

          <div className="info-row">
            <span className="label">Items</span>
            <span className="value">{selectedFiles.length}</span>
          </div>
        </div>
      </aside>
    );
  }

  // SINGLE SELECT
  const file = selectedFiles[0];

  return (
    <aside className="right-panel">
      <h4>Details</h4>

      <div className="right-section">
        <div className="info-row">
          <span className="label">Name</span>
          <span className="value">{file.name}</span>
        </div>

        <div className="info-row">
          <span className="label">Type</span>
          <span className="value">{file.type}</span>
        </div>

        <div className="info-row">
          <span className="label">Size</span>
          <span className="value">{file.size}</span>
        </div>

        <div className="info-row">
          <span className="label">Modified</span>
          <span className="value">{file.modified}</span>
        </div>
      </div>
    </aside>
  );
};

export default RightPanel;
