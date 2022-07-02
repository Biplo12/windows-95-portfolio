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
          content={<div className="commerce-window">Commerce</div>}
        />
      </div>
    </>
  );
};

export default Commerce;
