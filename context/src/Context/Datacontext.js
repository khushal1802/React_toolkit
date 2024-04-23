import { createContext, useState } from "react";
import Display from "../component/Display";
import Pose from "../component/Pose";

export const apiContext = createContext();

export const ApiProvider = () => {
  const [data, setData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <apiContext.Provider value={{ data, setData,editMode, setEditMode, selectedUser, setSelectedUser}}>
      <Pose/>
      <Display />
    </apiContext.Provider>
  );
};
