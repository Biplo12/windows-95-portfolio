import { useState } from "react";
import Window from "../Window/Window";
import Icon from "../Icon/Icon";
import document from "../../Images/window/document.png";

const Resume = () => {
  //Resume states
  const [resume, setResume] = useState(false);
  const handleResume = () => setResume(!resume);
  const [resumeFocus, setResumeFocus] = useState(false);
  return (
    <>
      <div
        className={
          resumeFocus ? "resume-window focus" : "resume-window no-focus"
        }
        tabIndex={0}
        onFocus={() => setResumeFocus(!resumeFocus)}
        onBlur={() => setResumeFocus(!resumeFocus)}
      >
        <Window
          icon={document}
          title={"Resume"}
          handleWindow={handleResume}
          window={resume}
          content={<div className="resume-window"></div>}
        />
      </div>
      <div className="desktop-icon">
        <Icon
          window={resume}
          doublehandler={handleResume}
          image={document}
          title={"Resume"}
        />
      </div>
    </>
  );
};

export default Resume;
