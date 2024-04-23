import React from "react";
import { Link, Outlet} from "react-router-dom";

function Foor() {
  return (
    <div className="container mt-5">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem ullam cupiditate consequuntur quibusdam iste fuga? Enim, recusandae. Dicta fuga maxime sit dolores. Dolores, harum veritatis. Illum aut velit provident temporibus.</p>
      <li class="nav-item">
        <Link to={"foor-one"} class="nav-link" href="#">
          foo-one
        </Link>
      </li>
      <li class="nav-item">
        <Link to={"foor-two"} class="nav-link" href="#">
          foo-two
        </Link>
      </li>
      <Outlet />
    </div>
  );
}

export default Foor;
