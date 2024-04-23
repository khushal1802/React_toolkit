import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect, useState } from "react";
import {
  deleteData,
  getData,
  postData,
  updateData,
} from "./redux-toolkit/Api/api";

function App() {
  const [userData, setUserData] = useState({ name: "", email: "" });
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userSlice.users);

  useEffect(() => {
    dispatch(getData());
  }, [data]);

  const handleSubmit = () => {
    if (userData.name && userData.email) {
      dispatch(postData(userData));
      setUserData({ name: "", email: "" });
    }
  };

  const handleDelete = (val) => {
    dispatch(deleteData(val));
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleView = (val) => {
    setUserData(val);
    setEditMode(true);
  };

  const handleUpdate = () => {
    dispatch(updateData(userData));
    setUserData({ name: "", email: "" });
    setEditMode(false); 
  };

  const handleReset = ()=>{
    setUserData({name:"",email:""});
  }
  return (
    <div className="container">
      <div className="fild mt-5">
        Name: &nbsp;
        <input
          className="mb-5 me-2"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={userData.name}
          onChange={handleChange}
        />
        <br />
        Email: &nbsp;
        <input
          className="mb-5 me-2"
          type="email"
          name="email"
          placeholder="Enter valid email address"
          value={userData.email}
          onChange={handleChange}
        />
        <br />
        {!editMode && (
          <button className="mb-5 btn btn-outline-info" onClick={handleSubmit}>
            Submit
          </button>
        )}
        {editMode && (
          <>
            <button
              className=" mb-5 ms-2 btn btn-outline-success"
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
              className=" mb-5 ms-2 btn btn-outline-info"
              onClick={handleReset}
            >
              Reset
            </button>
          </>
        )}
      </div>
      <div className="row">
        {data?.map((val, ind) => (
          <div className="col-4 mb-3" key={ind}>
            <div className="card" style={{ width: "20rem" }}>
              <div className="card-body">
                <h5 className="card-title">Id - {val.id}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Name - {val.name}
                </h6>
                <p className="card-text">Email - {val.email}</p>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(val)}
                >
                  Delete
                </button>
                <button
                  className="ms-2 btn btn-outline-success"
                  onClick={() => handleView(val)}
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

//install server : npm i json-server
// server on command : npx json-server db.json --port 3001

export default App;
