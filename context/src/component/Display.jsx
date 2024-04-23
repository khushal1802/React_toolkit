import React, { useContext, useEffect } from "react";
import axios from "axios";
import {
  BASE_URL,
  DELETE_API_DATA,
  GET_API_DATA,
} from "../Context/constant";
import { apiContext } from "../Context/Datacontext";

function Display() {
  const { data, setData,setEditMode,setSelectedUser } = useContext(apiContext);

  useEffect(() => {
    axios
      .get(BASE_URL + GET_API_DATA)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [data]);

  const handleDelete = (id) => {
    axios
      .delete(BASE_URL + DELETE_API_DATA + id)
      .then(() => {
        setData(data.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setEditMode(true);
  };


  return (
    <div className="container">
      <div className="row">
        {data.map((user) => (
          <div className="col-4 mb-3" key={user.id}>
            <div className="card" style={{ width: "20rem" }}>
              <div className="card-body">
                <h5 className="card-title">Id - {user.id}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Name - {user.name}
                </h6>
                <p className="card-text">Email - {user.email}</p>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
                <button
                  className="ms-2 btn btn-outline-success"
                  onClick={() => handleEdit(user)}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
  );
}

export default Display;
