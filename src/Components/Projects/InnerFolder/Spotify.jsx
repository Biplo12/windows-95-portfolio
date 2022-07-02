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
          content={<div className="spotify-window">Spotify</div>}
        />
      </div>
    </>
  );
};

export default Spotify;
