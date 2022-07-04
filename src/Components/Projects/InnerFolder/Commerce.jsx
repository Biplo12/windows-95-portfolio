import { useState } from "react";
import Window from "../../Window/Window";
import commerceLogo from "../../../Images/folder/commerce.png";
const Commerce = ({ handleWindow, window }) => {
  const [commerceFocus, setCommerceFocus] = useState(false);
  return (
    <>
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
          title={"E-commerce MERN"}
          handleWindow={handleWindow}
          window={window}
          content={
            <div className="commerce-window">
              <h1>e-commerce</h1>
              <h2>Description</h2>
              <p>
                This is a sample application that demonstrates an E-commerce
                website using the MERN stack. The application loads products
                from a MongoDB database and displays them.
              </p>
              <h2>Users can:</h2>
              <ul>
                <li>Select to display products in a single category.</li>
                <li>Click on any product to get more information.</li>
                <li>Select items and add them to their shopping cart.</li>
              </ul>
              <h2>Built with:</h2>
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
                <li>
                  <a href="https://stripe.com/en-pl">Stripe.js</a>
                </li>
              </ul>
              <h2>Design inspired by:</h2>
              <ul>
                <li>
                  <a href="https://www.etq-amsterdam.com/">ETQ Amsterdam</a>
                </li>
                <li>
                  <a href="https://www.vashi.com/">Vanshi</a>
                </li>
                <li>
                  <a href="https://dribbble.com/shots/2798067/attachments/2798067-Shopping-Cart?mode=media">
                    Michael Ashurst
                  </a>
                </li>
                <li>
                  <a href="https://www.soniarykiel.com/eu/en/accessories/?va=1">
                    Soniary
                  </a>
                </li>
              </ul>
            </div>
          }
        />
      </div>
    </>
  );
};

export default Commerce;
