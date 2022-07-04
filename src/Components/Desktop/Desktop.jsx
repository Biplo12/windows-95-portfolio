import About from "../About/About";
import document from "../../Images/window/document.png";
import Icon from "../Icon/Icon";
import pdf from "../Taskbar/robert-sinski-cv.pdf";

import Projects from "../Projects/Projects";

const Desktop = () => {
  return (
    <div className="desktop-container">
      <div className="wallpaper">
        <h1>Robert Siński</h1>
      </div>
      <About />
      <div className="resume">
        <Icon
          doublehandler={(e) => {
            e.preventDefault();
            window.open(pdf, "_blank");
          }}
          image={document}
          title={"Resume"}
        />
      </div>
      <Projects />
    </div>
  );
};

export default Desktop;
