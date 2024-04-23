import React, {useLayoutEffect, useRef, useState } from "react";

function Inputs() {
  const [Name, setName] = useState();
  const fname = useRef();
  const lname = useRef();
  
  const handaleSubmit = () => {
    const data = {
      fname: fname.current.value,
      lname : lname.current.value
    }
    setName(data);
    // console.log(data,"useRef..............");

    fname.current.value = ''
    lname.current.value = ''
  };

  useLayoutEffect(()=>{
   setTimeout(() => {
    console.log("Hello");
   }, 1000);
  })
  
  const handleNameChange = (e) => {
    setName({ ...Name, [e.target.name]: e.target.value });
  };
  // console.log(Name, "useState..............");

  return (
    <div>
    <hr/>
      <h1>Inputs using  useRef and useState</h1>
      <input
      className="mb-2"
        type="text"
        name="fname"
        placeholder="First Name"
        ref={fname}
        onChange={handleNameChange}
      />
      <br />
      <input
      className="mb-2"
        type="text"
        name="lname"
        placeholder="last Name"
        ref={lname}
        onChange={handleNameChange}
      />
      <br />
      <button className="btn btn-outline-info" onClick={handaleSubmit}>Submit</button>
    </div>
  );
}

export default Inputs;
