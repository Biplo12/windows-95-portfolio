import React from "react";
import "./Components/Styles/__globalStyles.scss";

// import Taskbar from "./Components/Taskbar/Taskbar";
import Desktop from "./Components/Desktop/Desktop";
const App = () => {
  return (
    <>
      <Desktop />
      <Taskbar />
    </>
  );
};

export default App;
