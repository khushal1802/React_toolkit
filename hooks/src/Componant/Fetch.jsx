import React from "react";
import useUrl from "./useUrl ";

function Fetch() {
  const data = useUrl("http://localhost:3001/posts");

  return (
    <>
    <hr />
    <h1>
        Custom Hook Example 
    </h1>
    <div className="row">
      {data?.map((val, ind) => {
        return (
          <div className="col-4 mb-3" key={ind}>
            <div className="card" style={{ width: "20rem" }}>
              <div className="card-body">
                <h5 className="card-title">Id - {val.id}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Name - {val.name}
                </h6>
                <p className="card-text">Email - {val.email}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
}

export default Fetch;
