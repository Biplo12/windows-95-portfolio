import Draggable from "react-draggable";

const WelcomePage = ({ icon, title, content, handleWindow, window }) => {
  return (
    <Draggable handle=".topbar">
      <div className={window ? "window opened" : "window closed "}>
        <div className="topbar">
          <div className="topbar-title">
            <img src={icon} alt={`${title} icon`} />
            <p>{title}</p>
          </div>
          <button onClick={handleWindow}>X</button>
        </div>
        <div className="window-content">{content}</div>
      </div>
    </Draggable>
  );
};

export default Window;
