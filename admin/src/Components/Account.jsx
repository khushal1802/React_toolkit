import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Account() {
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
            <h1>Account</h1>
            <span>{date}</span>
          </div>
          <div className="username d-flex">
            <NotificationsIcon />
            <p className="ms-2">Username</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
