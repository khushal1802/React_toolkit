import React, { useReducer } from "react";

const initialstate = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 };
      case "decrease":
      return { count: state.count - 1 };
    default:
     return {...state}
  }
};

function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialstate);

  const increase =()=>{
    dispatch({type : 'increase'})
  }

  const decrease =()=>{
    dispatch({type : 'decrease'})
  }
  return <div>
    <hr/>
    <h1>useReducer Hook Example</h1>
    <h2>Count : {state.count}</h2>
    <button className="btn btn-outline-warning me-2" onClick={increase}>increase</button>
    <button className="btn btn-outline-danger" onClick={decrease}>decrease</button>

  </div>;
}

export default Reducer;
