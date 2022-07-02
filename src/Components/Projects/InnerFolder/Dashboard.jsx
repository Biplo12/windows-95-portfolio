import { useState } from "react";
import Window from "../../Window/Window";
import dashboardLogo from "../../../Images/folder/dashboard.png";
const Dashboard = ({ handleWindow, window }) => {
  const [dashboardFocus, setDashboardFocus] = useState(false);
  return (
    <>
      <div
        className={
          dashboardFocus
            ? "dashboard-window focus"
            : "dashboard-window no-focus"
        }
        tabIndex={0}
        onFocus={() => setDashboardFocus(!dashboardFocus)}
        onBlur={() => setDashboardFocus(!dashboardFocus)}
      >
        <Window
          icon={dashboardLogo}
          title={"Dashboard"}
          handleWindow={handleWindow}
          window={window}
          content={<div className="dashboard-window">Dashboard</div>}
        />
      </div>
    </>
  );
};

export default Dashboard;
