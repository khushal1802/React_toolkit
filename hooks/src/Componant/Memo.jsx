import React, { useCallback, useMemo, useState } from "react";
import PrintTable from "./PrintTable";

function Memo() {
  const [Number, setNumber] = useState(0);
  const [Dark, setDark] = useState(false);

  const memo = useMemo(() => {
    return expensive(Number);
  }, [Number]);

  const mode = {
    backgroundColor: Dark ? "black" : "white",
    color: Dark ? "white" : "black",
  };

  const table = useCallback((value) =>{
    console.log(value);
    return [Number * 1,Number * 2,Number * 3,Number * 4,Number * 5, Number * 6,Number * 7,Number * 8,Number * 9,Number * 10,]
  },[Number])

  return (
    <div style={mode}>
      <hr />
      <h1>useMemo & useCallback Hook Example</h1>
      <h1>{memo}</h1>
      <input
        type="number"
        onChange={(e) => setNumber(e.target.value)}
        value={Number}
      />
      <br />
      <button
        className="btn btn-outline-success mt-2"
        onClick={() => {
          setDark(!Dark);
        }}
      >
        dark
      </button><br/>
      <PrintTable table={table}  Number={ Number} />
      <hr/>
    </div>
  );
}

function expensive(num) {
  for (let i = 0; i < 10000000000; i++) {
    return num;
  }
}
export default Memo;
