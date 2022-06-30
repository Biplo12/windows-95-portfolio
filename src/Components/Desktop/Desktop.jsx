import Window from "../Window/Window";
import Icon from "./Icon";
import document from "../../Images/window/document.png";
import folder from "../../Images/Desktop/folder.png";
import computer from "../../Images/Desktop/computer.png";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

const Desktop = () => {
  const [about, setAbout] = useState(true);
  const [projects, setProjects] = useState(false);
  const [resume, setResume] = useState(false);
  const [aboutFocus, setAboutFocus] = useState(false);
  const [projectFocus, setProjectFocus] = useState(false);
  const [resumeFocus, setResumeFocus] = useState(false);

  const handleAbout = () => setAbout(!about);
  const handleProjects = () => setProjects(!projects);
  const handleResume = () => setResume(!resume);

  //icons focus

  const [aboutIconFocus, setAboutIconFocus] = useState(false);
  const handleAboutIconFocus = () => setAboutIconFocus(!aboutIconFocus);

  const [projectIconFocus, setProjectIconFocus] = useState(false);
  const handleProjectIconFocus = () => setProjectIconFocus(!projectIconFocus);

  const [resumeIconFocus, setResumeIconFocus] = useState(false);
  const handleResumeIconFocus = () => setResumeIconFocus(!resumeIconFocus);

  return (
    <div className="desktop-container">
      <div className="wallpaper">
        <h1>Robert Siński</h1>
      </div>
      <div
        className={aboutFocus ? "about-window focus" : "about-window no-focus"}
        tabIndex={1}
        onFocus={() => setAboutFocus(!aboutFocus)}
        onBlur={() => setAboutFocus(!aboutFocus)}
      >
        <Window
          icon={computer}
          title={"About me"}
          handleWindow={handleAbout}
          window={about}
          content={
            <div className="about-window">
              <h1>Hi there, I'm Robert - aka Biplo12</h1>
              <h2>I'm a junior web developer!</h2>
              <ol>
                <li>I'm currently learning MERN stack!</li>
                <li>2022 Goals: contribute more!</li>
                <li>I'm currently looking for job!</li>
                <li>
                  How to reach me:{" "}
                  <a href="mailto:robertbiplosek@gmail.com">
                    robertbiplosek@gmail.com
                  </a>
                </li>
              </ol>
            </div>
          }
        />
      </div>

      <div
        className={
          projectFocus ? "project-window focus" : "project-window no-focus"
        }
        tabIndex={0}
        onFocus={() => setProjectFocus(!projectFocus)}
        onBlur={() => setProjectFocus(!projectFocus)}
      >
        <Window
          icon={folder}
          title={"My Projects"}
          handleWindow={handleProjects}
          window={projects}
          content={
            <div className="project-container">
              <h1>Hi there, I'm Robert - aka Biplo12</h1>
            </div>
          }
        />
      </div>
      <div
        className={resumeFocus ? "about-window focus" : "about-window no-focus"}
        tabIndex={0}
        onFocus={() => setResumeFocus(!resumeFocus)}
        onBlur={() => setResumeFocus(!resumeFocus)}
      >
        <Window
          icon={document}
          title={"Resume"}
          handleWindow={handleResume}
          window={resume}
          tabIndex={0}
          content={
            <div className="project-container">
              <h1>Resume</h1>
            </div>
          }
        />
      </div>
      <div className="desktop-icons">
        <OutsideClickHandler onOutsideClick={() => [setAboutIconFocus(false)]}>
          <Icon
            window={about}
            singlehandler={handleAboutIconFocus}
            doublehandler={handleAbout}
            icon={aboutIconFocus}
            image={computer}
            title={"About me"}
          />
        </OutsideClickHandler>
        <OutsideClickHandler
          onOutsideClick={() => [setProjectIconFocus(false)]}
        >
          <Icon
            window={projects}
            singlehandler={handleProjectIconFocus}
            icon={projectIconFocus}
            doublehandler={handleProjects}
            image={folder}
            title={"My Projects"}
          />
        </OutsideClickHandler>

        <OutsideClickHandler onOutsideClick={() => [setResumeIconFocus(false)]}>
          <Icon
            window={resume}
            singlehandler={handleResumeIconFocus}
            icon={resumeIconFocus}
            doublehandler={handleResume}
            image={document}
            title={"Resume"}
          />
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default Desktop;
