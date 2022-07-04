import { useState } from "react";
import Window from "../Window/Window";
import Icon from "../Icon/Icon";
import computer from "../../Images/Desktop/computer.png";

const About = () => {
  //About states
  const [about, setAbout] = useState(true);
  const handleAbout = () => setAbout(!about);

  const [aboutFocus, setAboutFocus] = useState(false);
  return (
    <>
      <div
        className={aboutFocus ? "about-window focus" : "about-window no-focus"}
        tabIndex={0}
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
              <ul>
                <li>I'm currently learning MERN stack!</li>
                <li>2022 Goals: contribute more!</li>
                <li>I'm currently looking for job!</li>
                <li>
                  How to reach me:{" "}
                  <a href="mailto:robertbiplosek@gmail.com">
                    robertbiplosek@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          }
        />
      </div>
      <div className="desktop-icon">
        <Icon
          window={about}
          doublehandler={handleAbout}
          image={computer}
          title={"About me"}
        />
      </div>
    </>
  );
};

export default About;
