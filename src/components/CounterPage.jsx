import React, { useContext } from "react";
import { CounterContext } from "../context/ContextHolder";

export default function CounterPage() {
  const { count, HandleChange } = useContext(CounterContext);
  return (
    <div>
      <button
        onClick={() => {
          HandleChange(count + 1);
        }}
      >
        add
      </button>
      <h1>{count}</h1>
      <button
        onClick={() => {
          HandleChange(count > 0 ? count - 1 : 0 );
        }}
      >
        sub
      </button>
    </div>
  );
}
