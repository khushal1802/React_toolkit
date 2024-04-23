import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Box from "./Box";
import Graphs from "./Graphs";
import Barc from "./Barc";
import Recent from "./Recent";
import Newuser from "./Newuser";


function Dashbord() {
  const options = {
    weekday: "long",
    month: "long",
    day: "2-digit",
    year: "numeric",
  };
  const date = new Date().toLocaleDateString("en-US", options);
  return (
    <div>
      <div className="heading mb-3">
        <div className="heading-labal">
          <div className="page-name">
            <h1>Dashboard</h1>
            <span>{date}</span>
          </div>
          <div className="username d-flex">
            <NotificationsIcon />
            <p className="ms-2">Username</p>
          </div>
        </div>
      </div>
      <div className="dashboard-page mt-3">
        <div className="left-side">
          <div className="box-section d-flex">
            <Box boxNo="first" />
            <Box boxNo="second" />
            <Box boxNo="third" />
            <Box boxNo="fourth" />
          </div>
          <div className="graphs">
            <div className="main-graphs">
              <Graphs />
              <Barc />
            </div>
          </div>
        </div>
        <div className="right-side">
         <Recent />
         <Newuser />
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
