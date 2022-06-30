import React from "react";

const Icon = ({ window, singlehandler, doublehandler, image, title, icon }) => {
  return (
    <div
      className={icon ? "desktop-icon marked" : "desktop-icon"}
      onClick={singlehandler}
      onDoubleClick={window ? undefined : doublehandler}
    >
      <img src={image} alt={`${image} icon`} />
      <p>{title}</p>
    </div>
  );
};

export default Icon;
