import About from "../About/About";
import Resume from "../Resume/Resume";
import Projects from "../Projects/Projects";

const Desktop = () => {
  return (
    <div className="desktop-container">
      <div className="wallpaper">
        <h1>Robert Siński</h1>
      </div>
      <About />
      <Resume />
      <Projects />
    </div>
  );
};

export default Desktop;
