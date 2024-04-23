import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


function Newuser() {
  return (
    <div className="user">
    <h3>New User</h3>
    <div className="user-activitys ">
      <div className="activity-view">
        <div className="inner-content">
          <FiberManualRecordIcon style={{fontSize : "13px", marginTop: "5px"}}/>
          <p className="mb-0">admin.pp@yomail.com</p>
        </div>
       <p className="user-date">4/3/2024, 10:07:54 AM</p>
      </div>
      <div className="activity-view">
        <div className="inner-content">
          <FiberManualRecordIcon style={{fontSize : "13px", marginTop: "5px"}}/>
          <p className="mb-0">admin.pp@yomail.com</p>
        </div>
       <p className="user-date">4/3/2024, 10:07:54 AM</p>
      </div>      
    </div>
  </div>
  )
}

export default Newuser