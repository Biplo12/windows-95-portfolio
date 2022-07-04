import { useState } from "react";
import Window from "../../Window/Window";
import spotifyLogo from "../../../Images/folder/spotify.png";
const Spotify = ({ handleWindow, window }) => {
  const [spotifyFocus, setSpotifyFocus] = useState(false);
  return (
    <>
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
          handleWindow={handleWindow}
          window={window}
          content={
            <div className="spotify-window">
              <h1>spotify-web-api-node</h1>
              <h2>Description:</h2>
              <p>
                Api based on spotify web api node repo. Includes working access
                token and refresh token. Can be used to split with UI design.
              </p>
              <h2>Build with:</h2>
              <ul>
                <li>
                  <a href="https://reactjs.org/">React.js</a>
                </li>
                <li>
                  <a href="https://nodejs.org/en/">Node.js</a>
                </li>
                <li>
                  <a href="https://expressjs.com/">Express.js</a>
                </li>
              </ul>
              <h2>Usage:</h2>
              <p>
                API can be used in project which assumes a summary of the web
                application connected to the spotify api. For more examples,
                please refer to the{" "}
                <a href="https://github.com/thelinmichael/spotify-web-api-node">
                  Documentation
                </a>
              </p>
            </div>
          }
        />
      </div>
    </>
  );
};

export default Spotify;
