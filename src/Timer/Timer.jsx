import React from "react";
import { useState } from "react";

export default function Timer() {
  let time = new Date().toLocaleTimeString();
  const [timer, setTimer] = useState(time);

  const updated = () => {
    time = new Date().toLocaleTimeString();
    setTimer(time);
  };
  setInterval(updated, 1000);
  return (
    <div>
      <h1>{timer}</h1>
    </div>
  );
}
