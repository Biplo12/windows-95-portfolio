import { useState } from "react";
import Window from "../../Window/Window";
import serviceLogo from "../../../Images/folder/sinski.png";
const Service = ({ handleWindow, window }) => {
  const [serviceFocus, setServiceFocus] = useState(false);
  return (
    <>
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
          handleWindow={handleWindow}
          window={window}
          content={<div className="service-window">Service</div>}
        />
      </div>
    </>
  );
};

export default Service;
