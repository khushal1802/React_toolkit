import State from "./Componant/State";
import "./App.css";
import Inputs from "./Componant/Inputs";
import { createContext,} from "react";
import Reducer from "./Componant/Reducer";
import Memo from "./Componant/Memo";
import Bounce from "./Componant/Bounce";
import Fetch from "./Componant/Fetch";


export const NameContext = createContext();

function App() {
 
  return (
    <div className="container">
      <NameContext.Provider value={"Hello Wold"}>
        <hr />
        <State />
        <Inputs />
        <Reducer />
        <Memo/>
        <Bounce />
        <Fetch />
      </NameContext.Provider>
    </div>
  );
}

//install server : npm i json-server
// server on command : npx json-server db.json --port 3001

export default App;
