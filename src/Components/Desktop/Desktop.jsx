import { useState, useRef } from "react";
import Window from "../Window/Window";
import Folder from "../Folder/Folder";
import Icon from "./Icon";
import document from "../../Images/window/document.png";
import folder from "../../Images/Desktop/folder.png";
import computer from "../../Images/Desktop/computer.png";
import aTel from "../../Images/folder/a-tel.png";
import commerceLogo from "../../Images/folder/commerce.png";
import serviceLogo from "../../Images/folder/sinski.png";
import twitterLogo from "../../Images/folder/twitter.png";
import dashboardLogo from "../../Images/folder/dashboard.png";
import spotifyLogo from "../../Images/folder/spotify.png";

const Desktop = () => {
  //About states
  const [about, setAbout] = useState(true);
  const [aboutFocus, setAboutFocus] = useState(false);
  const handleAbout = () => setAbout(!about);

  //Projects states
  const [projects, setProjects] = useState(false);
  const [projectFocus, setProjectFocus] = useState(false);
  const handleProjects = () => setProjects(!projects);

  //Resume states
  const [resume, setResume] = useState(false);
  const [resumeFocus, setResumeFocus] = useState(false);
  const handleResume = () => setResume(!resume);

  //Atel states
  const [atel, setAtel] = useState(false);
  const [atelFocus, setAtelFocus] = useState(false);
  const handleAtel = () => setAtel(!atel);

  //e-commerce states
  const [commerce, setCommerce] = useState(false);
  const [commerceFocus, setCommerceFocus] = useState(false);
  const handleCommerce = () => setCommerce(!commerce);

  //service states
  const [service, setService] = useState(false);
  const [serviceFocus, setServiceFocus] = useState(false);
  const handleService = () => setService(!service);

  //twitter-github states
  const [twitter, setTwitter] = useState(false);
  const [twitterFocus, setTwitterFocus] = useState(false);
  const handleTwitter = () => setTwitter(!twitter);

  //dashboard states
  const [dashboard, setDashboard] = useState(false);
  const [dashboardFocus, setDashboardFocus] = useState(false);
  const handleDashboard = () => setDashboard(!dashboard);

  //spotify-node-api states
  const [spotify, setSpotify] = useState(false);
  const [spotifyFocus, setSpotifyFocus] = useState(false);
  const handleSpotify = () => setSpotify(!spotify);

  return (
    <div className="desktop-container">
      <div className="wallpaper">
        <h1>Robert Siński</h1>
      </div>
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
        <Folder
          icon={folder}
          title={"My Projects"}
          handleFolder={handleProjects}
          folder={projects}
          content={
            <div className="project-container">
              <div className="desktop-icons">
                <Icon
                  window={atel}
                  doublehandler={handleAtel}
                  image={aTel}
                  title={"A-tel Borzek"}
                />
                <Icon
                  window={commerce}
                  doublehandler={handleCommerce}
                  image={commerceLogo}
                  title={"E-commerce MERN"}
                />
                <Icon
                  window={service}
                  doublehandler={handleService}
                  image={serviceLogo}
                  title={"Kamil Siński - Computer Service"}
                />
                <Icon
                  window={twitter}
                  doublehandler={handleTwitter}
                  image={twitterLogo}
                  title={"Twitter-Github-bot"}
                />
                <Icon
                  window={dashboard}
                  doublehandler={handleDashboard}
                  image={dashboardLogo}
                  title={"Dashboard"}
                />
                <Icon
                  window={spotify}
                  doublehandler={handleSpotify}
                  image={spotifyLogo}
                  title={"Spotify-node-api"}
                />
              </div>
            </div>
          }
        />
      </div>
      <div
        className={atelFocus ? "atel-window focus" : "atel-window no-focus"}
        tabIndex={0}
        onFocus={() => setAtelFocus(!atelFocus)}
        onBlur={() => setAtelFocus(!atelFocus)}
      >
        <Window
          icon={computer}
          title={"Atel"}
          handleWindow={handleAtel}
          window={atel}
          content={<div className="atel-window">atel</div>}
        />
      </div>
      <div
        className={
          commerceFocus ? "commerce-window focus" : "commerce-window no-focus"
        }
        tabIndex={0}
        onFocus={() => setCommerceFocus(!commerceFocus)}
        onBlur={() => setCommerceFocus(!commerceFocus)}
      >
        <Window
          icon={commerceLogo}
          title={"e-commerce MERN"}
          handleWindow={handleCommerce}
          window={commerce}
          content={<div className="commerce-window">e-commerce</div>}
        />
      </div>
      <div
        className={
          serviceFocus ? "service-window focus" : "service-window no-focus"
        }
        tabIndex={0}
        onFocus={() => setServiceFocus(!serviceFocus)}
        onBlur={() => setServiceFocus(!serviceFocus)}
      >
        <Window
          icon={serviceLogo}
          title={"Kamil Siński - Computer Service"}
          handleWindow={handleService}
          window={service}
          content={
            <div className="service-window">
              Kamil Siński - Computer Service
            </div>
          }
        />
      </div>
      <div
        className={
          twitterFocus ? "twitter-window focus" : "twitter-window no-focus"
        }
        tabIndex={0}
        onFocus={() => setTwitterFocus(!twitterFocus)}
        onBlur={() => setTwitterFocus(!twitterFocus)}
      >
        <Window
          icon={twitterLogo}
          title={"Twitter-Github-bot"}
          handleWindow={handleTwitter}
          window={twitter}
          content={<div className="twitter-window">Twitter-Github-bot </div>}
        />
      </div>
      <div
        className={
          dashboardFocus
            ? "dashboard-window focus"
            : "dashboard-window no-focus"
        }
        tabIndex={0}
        onFocus={() => setDashboardFocus(!dashboardFocus)}
        onBlur={() => setDashboardFocus(!dashboardFocus)}
      >
        <Window
          icon={dashboardLogo}
          title={"Dashboard"}
          handleWindow={handleDashboard}
          window={dashboard}
          content={<div className="dashboard-window">Dashboard</div>}
        />
      </div>
      <div
        className={
          spotifyFocus ? "spotify-window focus" : "spotify-window no-focus"
        }
        tabIndex={0}
        onFocus={() => setSpotifyFocus(!spotifyFocus)}
        onBlur={() => setSpotifyFocus(!spotifyFocus)}
      >
        <Window
          icon={spotifyLogo}
          title={"Spotify-node-api"}
          handleWindow={handleSpotify}
          window={spotify}
          content={<div className="spotify-window">Spotify-node-api</div>}
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
        <Icon
          window={about}
          doublehandler={handleAbout}
          image={computer}
          title={"About me"}
        />
        <Icon
          window={projects}
          doublehandler={handleProjects}
          image={folder}
          title={"My Projects"}
        />

        <Icon
          window={resume}
          doublehandler={handleResume}
          image={document}
          title={"Resume"}
        />
      </div>
    </div>
  );
};

export default Desktop;
