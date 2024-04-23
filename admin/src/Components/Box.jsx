import React from "react";
import PersonIcon from '@mui/icons-material/Person';

function Box(props) {

  return (
    <div className="boxs">
      <div className="row">
        <div className="col-3">
          <div className={`box ${props.boxNo}`}>
            <div className="box-content">
              <p>Active</p>
              <h3>20</h3>
            </div>
            <div className="icon">
              <PersonIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
