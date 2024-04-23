import React, { useContext, useEffect, useRef, useState } from 'react'
import { NameContext } from '../App';

function State() {
 const name = useContext(NameContext)
    const [Name, setName] = useState('😊');
    const count =useRef(0)

    useEffect (() => {
    count.current = count.current +1 
    },)    
    return (
      <div>

        <h1><b><u><i>{name}</i></u></b> using useContext</h1>
    <hr/>

        <h1>useState & useRef Hook Example</h1>
        <input  type="text" onChange={(e)=> setName(e.target.value)} />
        <p>input value : {Name}</p>
        <p>character count : {count.current}</p>
       
      </div>
    );
}

export default State