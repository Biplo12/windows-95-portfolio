import { useState } from "react";
import Folder from "../Folder/Folder";
import Icon from "../Icon/Icon";
import Atel from "./InnerFolder/Atel";
import Commerce from "./InnerFolder/Commerce";
import Service from "./InnerFolder/Service";
import Twitter from "./InnerFolder/Twitter";
import Dashboard from "./InnerFolder/Dashboard";
import Spotify from "./InnerFolder/Spotify";
//images
import folder from "../../Images/Desktop/folder.png";
import atelLogo from "../../Images/folder/a-tel.png";
import commerceLogo from "../../Images/folder/commerce.png";
import serviceLogo from "../../Images/folder/sinski.png";
import twitterLogo from "../../Images/folder/twitter.png";
import dashboardLogo from "../../Images/folder/dashboard.png";
import spotifyLogo from "../../Images/folder/spotify.png";

const Projects = () => {
  //Projects states
  const [projects, setProjects] = useState(false);
  const handleProjects = () => setProjects(!projects);
  const [projectFocus, setProjectFocus] = useState(false);
  //Atel states
  const [atel, setAtel] = useState(false);
  const handleAtel = () => setAtel(!atel);
  //e-commerce states
  const [commerce, setCommerce] = useState(false);
  const handleCommerce = () => setCommerce(!commerce);
  //service states
  const [service, setService] = useState(false);
  const handleService = () => setService(!service);

  //twitter-github states
  const [twitter, setTwitter] = useState(false);
  const handleTwitter = () => setTwitter(!twitter);

  //dashboard states
  const [dashboard, setDashboard] = useState(false);
  const handleDashboard = () => setDashboard(!dashboard);

  //spotify-node-api states
  const [spotify, setSpotify] = useState(false);
  const handleSpotify = () => setSpotify(!spotify);

  return (
    <>
      <Icon
        window={projects}
        doublehandler={handleProjects}
        image={folder}
        title={"My Projects"}
      />
      <div
        className={
          projectFocus ? "projects-folder focus" : "projects-folder no-focus"
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
              <div className="folder-icons">
                <div className="desktop-icon">
                  <Icon
                    window={atel}
                    doublehandler={handleAtel}
                    image={atelLogo}
                    title={"A-tel Borzek"}
                  />
                </div>
                <div className="desktop-icon">
                  <Icon
                    window={commerce}
                    doublehandler={handleCommerce}
                    image={commerceLogo}
                    title={"E-commerce MERN"}
                  />
                </div>
                <div className="desktop-icon">
                  <Icon
                    window={service}
                    doublehandler={handleService}
                    image={serviceLogo}
                    title={"Kamil Siński - Computer Service"}
                  />
                </div>
                <div className="desktop-icon">
                  <Icon
                    window={twitter}
                    doublehandler={handleTwitter}
                    image={twitterLogo}
                    title={"Twitter-github-bot"}
                  />
                </div>
                <div className="desktop-icon">
                  <Icon
                    window={dashboard}
                    doublehandler={handleDashboard}
                    image={dashboardLogo}
                    title={"Dashboard"}
                  />
                </div>
                <div className="desktop-icon">
                  <Icon
                    window={spotify}
                    doublehandler={handleSpotify}
                    image={spotifyLogo}
                    title={"Spotify-node-api"}
                  />
                </div>
              </div>
            </div>
          }
        />
      </div>
      <Atel handleWindow={handleAtel} window={atel} />
      <Commerce handleWindow={handleCommerce} window={commerce} />
      <Service handleWindow={handleService} window={service} />
      <Twitter handleWindow={handleTwitter} window={twitter} />
      <Dashboard handleWindow={handleDashboard} window={dashboard} />
      <Spotify handleWindow={handleSpotify} window={spotify} />
    </>
  );
};

export default Projects;
