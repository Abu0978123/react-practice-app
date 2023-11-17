import React, { useRef } from "react";

export default function Comp() {
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const update = (e) => {
    e.preventDefault();
    input1.current.focus();
    console.log("first Input : ", input1.current.value);
    console.log("second Input : ", input2.current.value);
    console.log("third Input : ", input3.current.value);
  };


  return (
    <div>
      <input type="text" ref={input1} />
      <input type="text" ref={input2} />
      <input type="text" ref={input3} />
      <button  onClick={update}>click me</button>
      <br />
      {/* <h1>Input 1: {input1.current.value}</h1>
        <h1>Input 2: {input2.current.value}</h1>
        <h1>Input 3: {input3.current.value}</h1> */}
      {/* <div>
        <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus Input</button>
      </div> */}
    </div>
  );
}
