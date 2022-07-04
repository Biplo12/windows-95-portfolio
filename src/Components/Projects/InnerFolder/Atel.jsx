import { useState } from "react";
import Window from "../../Window/Window";
import atelLogo from "../../../Images/folder/a-tel.png";
const Atel = ({ handleWindow, window }) => {
  const [atelFocus, setAtelFocus] = useState(false);
  return (
    <>
      <div
        className={atelFocus ? "atel-window focus" : "atel-window no-focus"}
        tabIndex={0}
        onFocus={() => setAtelFocus(!atelFocus)}
        onBlur={() => setAtelFocus(!atelFocus)}
      >
        <Window
          icon={atelLogo}
          title={"Atel"}
          handleWindow={handleWindow}
          window={window}
          content={
            <div className="atel-window">
              <h1>A-TEL Andrzej Borzek</h1>
              <h2>Description</h2>
              <p>
                Website developed for a fiber optic telecommunications company.
                We worked in a team of two to create responsive design and
                implement it in React and PHP. Website:{" "}
                <a href="http://www.a-tel.com.pl/">http://www.a-tel.com.pl/</a>
              </p>
              <h2>Features</h2>
              <ul>
                <li>
                  <b>Main page</b> - interactive network effect achieved using
                  tsparticles
                </li>
                <li>
                  <b>Contact</b> form - user is able to send email to company
                  biuro via PHP script
                </li>
                <li>
                  <b>Map</b> - we used react-leaflet to integrate map and set
                  company location on it
                </li>
                <li>
                  <b>Captcha</b> - to prevent bot spam on our contact form we
                  added google captcha
                </li>
              </ul>
            </div>
          }
        />
      </div>
    </>
  );
};

export default Atel;
