import React, { useMemo } from "react";
import { useState } from "react";

export default function Memo() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(0);

  const MemoMulti = useMemo(
    function multi() {
      console.log("memo testing");
      return add * 5;
    },
    [add]
  );
  return (
    <div>
      <h1>Addition: {add}</h1>
      <h1>Minus: {minus}</h1>
      <h1>Multi: {MemoMulti}</h1>
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <button onClick={() => setMinus(minus - 1)}>Minus</button>
    </div>
  );
}
