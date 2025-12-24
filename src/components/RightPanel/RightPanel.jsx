import React, { useState } from "react";
import "./rightpanel.css";

const RELATED_RESOURCES = {
  name: "Virtual Annual Conference",
  deck: "World Press Freedom Day",
  talks: ["event coordination"],
};

const EXTERNAL_SHARES = [
  { id: 1, label: "Share link (1)", permission: "View only" },
  { id: 2, label: "joeuser@domain.tld", permission: "Can edit" },
];

const PERMISSIONS = [
  "Read",
  "Write",
  "Create",
  "Delete",
  "Share",
];

const RightPanel = ({ selectedFiles }) => {
  const [activeTab, setActiveTab] = useState("Sharing");
  const [openResources, setOpenResources] = useState(true);

  if (selectedFiles.length !== 1) {
    return (
      <aside className="right-panel">
        <p className="empty-state">Select a single item to see details</p>
      </aside>
    );
  }

  const file = selectedFiles[0];

  return (
    <aside className="right-panel">
      {/* ===== HEADER ===== */}
      <div className="panel-header">
        <div>
          <h3>{file.name}</h3>
          <p className="meta">
            ⭐ {file.size} · {file.modified} · Owner <strong className="name_bg">Christine...</strong>
          </p>
        </div>
        <div className="header-actions">⋯ ✕</div>
      </div>

      {/* ===== TABS ===== */}
      <div className="tabs">
        <span
          className={`tab ${activeTab === "Activity" ? "active" : ""}`}
          onClick={() => setActiveTab("Activity")}
        >
          <span className="tab-icon">⚡</span>
          Activity
        </span>

        <span
          className={`tab ${activeTab === "Sharing" ? "active" : ""}`}
          onClick={() => setActiveTab("Sharing")}
        >
          <span className="tab-icon">🔗</span>
          Sharing
        </span>
      </div>


      {/* ===== SCROLLABLE BODY ===== */}
      <div className="panel-body">
        {/* INTERNAL LINK */}
        <div className="section">
          <div className="row">
            <span className="icon circle circle-grey">🔗</span>
            <div>
              <strong className="muted-head">Internal link</strong>
              <p className="muted">
                Only works for people with access to this folder
              </p>
            </div>
            <span className="copy">📋</span>
          </div>
        </div>

        {/* EXTERNAL SHARES */}
        <div className="section">
          <div className="section-header">
            <span>External shares</span>
            <span className="info">ℹ️</span>
          </div>

          <select className="share-input">
            <option>Email, federated cloud id</option>
          </select>

          {EXTERNAL_SHARES.map((share) => (
            <div key={share.id} className="share-row">
              <span className="icon circle circle-blue">🔗</span>
              <div className="share-info">
                <strong>{share.label}</strong>
                <p className="permission">{share.permission}</p>
              </div>
              <div>
                <span className="copy">📋</span>
                <span className="more">⋯</span>
              </div>              
            </div>
          ))}
        </div>

        {/* ADDITIONAL SHARES */}
        <div className="section">
          <div className="section-header">
            <span>Additional shares</span>
            <span className="info">ℹ️</span>
          </div>
        </div>

        {/* RELATED TEAM RESOURCES */}
        <div className="realted_team">
          <h2 >Related team resources</h2>
          <div className="section boxed">          
            <div
              className="section-header clickable"
              onClick={() => setOpenResources(!openResources)}
            >
              <span>👥 {RELATED_RESOURCES.name}</span>
              <span>{openResources ? "▴" : "▾"}</span>
            </div>
            {openResources && (
              <>
                <div className="sub-title">Deck</div>
                <div className="resource">
                  <span className="dot purple" />
                  <span>{RELATED_RESOURCES.deck}</span>
                </div>

                <div className="sub-title">Talk conversations</div>

                {RELATED_RESOURCES.talks.map((talk, i) => (
                  <div key={i} className="resource">
                    <span className="dot orange" />
                    <span>{talk}</span>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        

        {/* PERMISSIONS */}
        <div className="permissions">
          <span className="team">👥 Team folder</span>
          <div className="perm-list">
            {PERMISSIONS.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightPanel;
