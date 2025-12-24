import React, { useState } from "react";
import "./rightpanel.css";
import { BsStarFill } from "react-icons/bs";
import { Ellipsis, EllipsisIcon, X } from "lucide-react";
import { BiSolidZap } from "react-icons/bi";
import { IoIosInformationCircle, IoMdShare } from "react-icons/io";
import { RiShareBoxFill, RiShareBoxLine } from "react-icons/ri";
import { MdOutlineContentCopy, MdOutlineInsertLink } from "react-icons/md";
import { FaAngleDown, FaAngleUp, FaUserFriends, FaUsers } from "react-icons/fa";

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
      <div className="panel-header flex items-start">
        <div>
          <h3>{file.name}</h3>
          <p className="meta flex items-center gap-1">
            <BsStarFill /> {file.size} · {file.modified} · Owner <strong className="name_bg flex gap-1 items-center"><img src="https://mockmind-api.uifaces.co/content/human/80.jpg" className="h-5 w-5 rounded-full" alt="avatar" />Christine...</strong>
          </p>
        </div>
        <div className="header-actions flex items-center gap-2"><Ellipsis /> <X /></div>
      </div>

      {/* ===== TABS ===== */}
      <div className="tabs">
        <span
          className={`tab ${activeTab === "Activity" ? "active" : ""} flex flex-col`}
          onClick={() => setActiveTab("Activity")}
        >
          <span className="tab-icon"><BiSolidZap size={20} /></span>
          Activity
        </span>

        <span
          className={`tab ${activeTab === "Sharing" ? "active" : ""} flex flex-col`}
          onClick={() => setActiveTab("Sharing")}
        >
          <span className="tab-icon"><IoMdShare size={20} /></span>
          Sharing
        </span>
      </div>


      {/* ===== SCROLLABLE BODY ===== */}
      <div className="panel-body">
        {/* INTERNAL LINK */}
        <div className="section">
          <div className="row">
            <span className="icon circle circle-grey flex justify-center items-center text-white"><RiShareBoxFill size={20} /></span>
            <div>
              <strong className="muted-head">Internal link</strong>
              <p className="muted">
                Only works for people with access to this folder
              </p>
            </div>
            <span className="copy"><MdOutlineContentCopy size={20} /></span>
          </div>
        </div>

        {/* EXTERNAL SHARES */}
        <div className="section">
          <div className="section-header flex items-center gap-1">
            <span>External shares</span>
            <span className="info"><IoIosInformationCircle size={20} /></span>
          </div>

          <select className="share-input">
            <option>Email, federated cloud id</option>
          </select>

          {EXTERNAL_SHARES.map((share) => (
            <div key={share.id} className="share-row flex justify-between items-center">
              <div className="share-row">
                <span className="icon circle circle-blue flex justify-center items-center text-white"><MdOutlineInsertLink size={20} /></span>
                <div className="share-info">
                  <strong>{share.label}</strong>
                  <p className="permission">{share.permission}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="copy"><MdOutlineContentCopy size={20} /></span>
                <span className="more"><EllipsisIcon size={20} /></span>
              </div>
            </div>
          ))}
        </div>

        {/* ADDITIONAL SHARES */}
        <div className="section">
          <div className="section-header flex items-center gap-1">
            <span>Additional shares</span>
            <span className="info"><IoIosInformationCircle size={20} /></span>
          </div>
        </div>

        {/* RELATED TEAM RESOURCES */}
        <div className="realted_team">
          <h2 >Related team resources</h2>
          <div className="section boxed">
            <div
              className="section-header clickable flex justify-between items-center gap-4"
              onClick={() => setOpenResources(!openResources)}
            >
              <span className="flex items-center gap-2"><FaUsers size={20} /> {RELATED_RESOURCES.name}</span>
              <div className="flex justify-center items-center gap-3">
                <RiShareBoxLine size={20} />
                <span>{openResources ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}</span>
              </div>
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
          <span className="team flex items-center gap-1"><span className="bg-[#065e9a] p-2 rounded-full flex justify-center items-center">
            <FaUserFriends color="white" size={20} /> 
            </span>Team folder</span>
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
