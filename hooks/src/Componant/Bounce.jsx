import React, { useState } from "react";
import { useDebounce } from "use-debounce";

function Bounce() {
  const [text, setText] = useState("😊");
  const [value] = useDebounce(text,500);
  return (
    <div>
      <h1>Debounce Hook Example</h1>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <p>Actual value: {text}</p>
      <p>Debounce value: {value}</p>
    </div>
  );
}

export default Bounce;
