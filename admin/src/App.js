import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashbord from "./Components/Dashbord";
import User from "./Components/User";
import Account from "./Components/Account";
import Sidebar from "./Components/Sidebar";
import { adminNav } from "./Header";

function App() {
  return (
    <div className="App">
      <div className="content">
      <Sidebar data={adminNav} />
        <div className="main"> 
      <Routes>
          <Route path="/dashbord" element={<Dashbord />} exact></Route>
          <Route path="/user" element={<User />} exact></Route>
          <Route path="/account" element={<Account />} exact></Route>
          <Route path="/" element={<Dashbord />} exact></Route>
      </Routes>
          </div>
      </div>
    </div>
  );
}

export default App;
