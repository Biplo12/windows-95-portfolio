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
          content={
            <div className="twitter-window">
              <h1>Twitter-Github-bot</h1>
              <h2>Description:</h2>
              <p>
                Twitter bot publishing a post every day at 12 o'clock with the
                number of commits that I distributed yesterday. I used the
                twitter API and Github for this. Bot is deployed on Heroku. For
                now heroku app is not configured to start schedule every day at
                12 o'clock.
              </p>
              <h2>Built with:</h2>
              <ul>
                <li>
                  <a href="https://nodejs.org/en/">Node.js</a>
                </li>
                <li>
                  <a href="https://developer.twitter.com/en/docs/twitter-api">
                    Twitter API
                  </a>
                </li>
                <li>
                  <a href="https://docs.github.com/en/rest">Github API</a>
                </li>
              </ul>
            </div>
          }
        />
      </div>
    </>
  );
};

export default Twitter;
