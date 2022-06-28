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

  const [focus, setFocus] = useState(1);

  const handleResume = () => setResume(!resume);
  const handleAbout = () => setAbout(!about);
  const handleProjects = () => setProjects(!projects);

  const handleFocus = () => setFocus(focus + 1);
  console.log(focus);
  return (
    <div className="desktop-container">
      <div className="wallpaper">
        <h1>Robert Siński</h1>
      </div>
      <Window
        icon={computer}
        title={"About me"}
        handleWindow={handleAbout}
        window={about}
        content={
          <div
            className="about-container"
            onClick={handleFocus}
            style={{ zIndex: focus }}
          >
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
      <Window
        icon={document}
        title={"My Projects"}
        handleWindow={handleResume}
        window={resume}
        content={
          <div className="project-container">
            <h1>Resume</h1>
          </div>
        }
      />
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
