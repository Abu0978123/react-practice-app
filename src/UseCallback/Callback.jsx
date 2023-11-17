import React, { useMemo } from "react";
import { useState } from "react";
import Child from "./Child";
import { useCallback } from "react";

export default function Callback() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(0);
  const [count, setCount] = useState(0);

//   const MemoMulti = useMemo(
//     function multi() {
//       console.log("memo testing");
//       return add * 5;
//     },
//     [add]
//   );

const fun = useCallback (() => {
    // operation
    // console.log('function testing')
}, [count])
  return (
    <div>
        <Child fun={fun} count = {count} setCount = {setCount}/>
      <h1>Addition: {add}</h1>
      <h1>Minus: {minus}</h1>
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <button onClick={() => setMinus(minus - 1)}>Minus</button>
    </div>
  );
}
