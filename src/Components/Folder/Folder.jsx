import React from "react";
import Draggable from "react-draggable";

const Folder = ({ folder, icon, title, handleFolder, content }) => {
  return (
    <Draggable handle=".topbar">
      <div className={folder ? "folder opened" : "folder closed"}>
        <div className="topbar">
          <div className="topbar-title">
            <img src={icon} alt={`${title} icon`} />
            <p>{title}</p>
          </div>
          <button onClick={handleFolder} onTouchEnd={handleFolder}>
            X
          </button>
        </div>
        <div className="folder-options">
          <ul>
            <li>File</li>
            <li>Edit</li>
            <li>View</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="folder-content">{content}</div>
      </div>
    </Draggable>
  );
};

export default Folder;
