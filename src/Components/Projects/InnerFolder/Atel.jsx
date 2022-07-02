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
          content={<div className="atel-window">atel</div>}
        />
      </div>
    </>
  );
};

export default Atel;
