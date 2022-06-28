import Window from "../Window/Window";
import Icon from "./Icon";
import document from "../../Images/window/document.png";
import folder from "../../Images/Desktop/folder.png";
import computer from "../../Images/Desktop/computer.png";
import { useState } from "react";

const Desktop = () => {
  const [about, setAbout] = useState(true);
  const [projects, setProjects] = useState(false);
  const [resume, setResume] = useState(false);

  const [aboutFocus, setAboutFocus] = useState(false);
  const handleAboutFocus = () => setAboutFocus(!aboutFocus);

  const [projectFocus, setProjectFocus] = useState(false);
  const handleProjectFocus = () => setProjectFocus(!projectFocus);

  // if(projectFocus === false && aboutFocus === true){
  //   projectFocus === true;
  //   aboutFocus === false;
  // }

  const handleResume = () => setResume(!resume);
  const handleAbout = () => setAbout(!about);
  const handleProjects = () => setProjects(!projects);

  const index = 1;

  return (
    <div className="desktop-container">
      <div className="wallpaper">
        <h1>Robert Siński</h1>
      </div>
      <div
        className={
          !aboutFocus && projectFocus
            ? "about-window window-focus"
            : "about-window window-no-focus"
        }
        onClick={handleAboutFocus}
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
          !projectFocus && aboutFocus
            ? "project-window window-focus"
            : "project-window window-no-focus"
        }
        onClick={handleProjectFocus}
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
      <div className="resume-window " style={{ zIndex: "1" }}>
        <Window
          icon={document}
          title={"Resume"}
          handleWindow={handleResume}
          window={resume}
          content={
            <div className="project-container">
              <h1>Resume</h1>
            </div>
          }
        />
      </div>
      <div className="desktop-icons">
        <Icon
          window={about}
          handler={handleAbout}
          image={computer}
          title={"About me"}
        />
        <Icon
          window={projects}
          handler={handleProjects}
          image={folder}
          title={"My Projects"}
        />
        <Icon
          window={resume}
          handler={handleResume}
          image={document}
          title={"Resume"}
        />
      </div>
    </div>
  );
};

export default Desktop;
