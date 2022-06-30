import React from "react";
import { useState, useEffect, useRef } from "react";
import startButtonLogo from "../../Images/taskbar/start-button-logo.png";
import pdf from "./robert-sinski-cv.pdf";

const Taskbar = () => {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  const ref = useRef(null);
  const closeOpenMenus = (e) => {
    if (ref.current && setStart && !ref.current.contains(e.target)) {
      setStart(false);
    }
  };
  document.addEventListener("mousedown", closeOpenMenus);

  const clock = time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <>
      <div className={start ? "menu opened" : "menu closed"}>
        <div className="menu-left">
          <p>
            Windows <span>95</span>
          </p>
        </div>
        <div className="menu-right">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/robert-si%C5%84ski-037398227/"
                target={"_blank"}
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/Biplo12" target={"_blank"}>
                Github
              </a>
            </li>
            <li>
              <a href={pdf} target={"_blank"}>
                Resume
              </a>
            </li>
            <li>
              <a>Shutdown</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="taskbar-container">
        <div className="start-button">
          <button
            onClick={() => setStart(!start)}
            onTouchEnd={() => setStart(!start)}
            className={start ? "buttonOn" : "buttonOff"}
            ref={ref}
          >
            <img src={startButtonLogo} alt="start button logo" height="16px" />
            Start
          </button>
        </div>
        <div className="taskbar-clock">{clock}</div>
      </div>
    </>
  );
};

export default Taskbar;
