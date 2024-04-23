import "./App.css";
import { useEffect, useState } from "react";
const { io } = require("socket.io-client");
// const socket = io("http://localhost:3001");
const socket = io.connect("http://localhost:3001");

function App() {
  const [Message, setMessage] = useState("");
  const [Receive, setReceive] = useState("");
  const [room, setroom] = useState("");

  const sendMessage = () => {
    socket.emit("send_message", { Message,room });
    // socket.emit()
  };

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };
  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
      setReceive(data.Message);
      console.log(data.message);
    });
  }, [socket]);

  return (
    <div className="container">
      <div className="mb-3 mt-5">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Enter Room Number
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter Room Number"
          onChange={(e) => {
            setroom(e.target.value);
          }}
        />
      </div>
      <button
          type="button"
          className="btn btn-outline-success mt-2"
          onClick={joinRoom}
        >
          Join Room
        </button>
      <div className="mb-3 mt-5">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Message Area
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Type your message here..."
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>

        <button
          type="button"
          className="btn btn-outline-success mt-5"
          onClick={sendMessage}
        >
          Send
        </button>

        <h1>Message : {Receive}</h1>
      </div>
    </div>
  );
}

export default App;
