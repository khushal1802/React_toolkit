import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { BASE_URL, POST_API_DATA, UPDATE_API_DATA } from "../Context/constant";
import { apiContext } from "../Context/Datacontext";

function Pose() {
    const {editMode, setEditMode,selectedUser, setSelectedUser} = useContext(apiContext)
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = () => {
    const userData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
    };
    axios
      .post(BASE_URL + POST_API_DATA, userData)
      .then(() => {
        nameRef.current.value = "";
        emailRef.current.value = "";
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };
  const handleUpdate = () => {
    const updatedUserData = {
      id: selectedUser.id,
      name: nameRef.current.value,
      email: emailRef.current.value,
    };
    console.log(updatedUserData);
    axios
      .put(BASE_URL + UPDATE_API_DATA + selectedUser.id, updatedUserData)
      .then(() => {
        setSelectedUser(null);
        setEditMode(false);
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  const handleReset = () => {
    setSelectedUser(null);
    setEditMode(false);
  };

  return (
    <div className="container">
      <div className="field mt-5">
        Name: &nbsp;
        <input
          className="mb-5 me-2"
          type="text"
          ref={nameRef}
          placeholder="Enter your name"
          defaultValue={selectedUser ? selectedUser.name : ""}
        />
        <br />
        Email: &nbsp;
        <input
          className="mb-5 me-2"
          type="email"
          ref={emailRef}
          placeholder="Enter valid email address"
          defaultValue={selectedUser ? selectedUser.email : ""}
        />
        <br />
        {!editMode ? (
          <button className="mb-5 btn btn-outline-info" onClick={handleSubmit}>
            Submit
          </button>
        ) : (
          <>
            <button
              className="mb-5 ms-2 btn btn-outline-success"
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
              className="mb-5 ms-2 btn btn-outline-info"
              onClick={handleReset}
            >
              Reset
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Pose;
