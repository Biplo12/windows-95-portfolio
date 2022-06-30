import Draggable from "react-draggable";
import React from "react";

const Window = ({ icon, title, content, handleWindow, window }) => {
  return (
    <Draggable handle=".topbar">
      <div className={window ? "window opened" : "window closed "}>
        <div className="topbar">
          <div className="topbar-title">
            <img src={icon} alt={`${title} icon`} />
            <p>{title}</p>
          </div>
          <button onClick={handleWindow} onTouchEnd={handleWindow}>
            X
          </button>
        </div>
        <div className="window-content">{content}</div>
      </div>
    </Draggable>
  );
};

export default Window;
