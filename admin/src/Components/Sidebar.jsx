import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar({ data }) {
  return (
    <>
      <div className="admin">
        <div className="sidebar">
          <h1 className="mb-5">Dashbord</h1>
          <div className="menus">
            {data?.map((val, ind) => {
              return (
                <NavLink to={val.path} data-link-alt={val.name} key={ind}>
                  <div>
                    {val.icon && <span className="icon">{val.icon}</span>}
                    <span>{val.name}</span>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
