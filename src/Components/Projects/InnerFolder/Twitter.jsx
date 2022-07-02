import { useState } from "react";
import Window from "../../Window/Window";
import twitterLogo from "../../../Images/folder/twitter.png";
const Twitter = ({ handleWindow, window }) => {
  const [twitterFocus, setTwitterFocus] = useState(false);
  return (
    <>
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
          title={"Twitter-github-bot"}
          handleWindow={handleWindow}
          window={window}
          content={<div className="twitter-window">Twitter</div>}
        />
      </div>
    </>
  );
};

export default Twitter;
