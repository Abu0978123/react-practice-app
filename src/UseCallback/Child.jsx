import React from "react";
import { memo } from "react";
import { useMemo } from "react";

function Child({fun, count, setCount}) {
  console.log("UseCallback testing");
  return <div>
    <h1>Child</h1>
    <h2>count : {count}</h2>
  <button onClick={() => setCount(count + 1)}>Count</button>
  </div>;

};

export default memo(Child)
