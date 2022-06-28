import React from "react";

const icon = ({ window, handler, image, title }) => {
  return (
    <div className="desktop-icon" onDoubleClick={window ? undefined : handler}>
      <img src={image} alt={`${image} icon`} />
      <p>{title}</p>
    </div>
  );
};

export default icon;
