import React, { useEffect, useState } from "react";

function PrintTable({ table, Number }) {
  const [Rows, setRows] = useState([]);

  useEffect(() => {
    console.log("Print table runs! ");
    setRows(table(0));
  }, [table]);


  return (
    <div>
      {Rows.map((val, ind) => {
       return <h1 key={ind}>{Number} *{ind+1} = {val}</h1>;
      })}
    </div>
  );
}

export default PrintTable;
