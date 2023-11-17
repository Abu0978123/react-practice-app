import React from "react";
import { useState } from "react";

export default function ControlComp() {
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor] = useState("red");
  return (
    <div>
      <h1>Car Brand : {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </div>
  );
}
