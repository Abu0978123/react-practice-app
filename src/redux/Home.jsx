import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  // const value = 20;\
  const { c } = useSelector((state) => state.custom);

  const Add = () => {
    dispatch({
      type: "increment",
    });
  };
  const Sub = () => {
    dispatch({
      type: "decrement",
    });
  };
  const AddByValue = () => {
    dispatch({
      type: "incrementByValue",
      payload: 20,
    });
  };

  return (
    <div>
      <h1>{c}</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        <button
          onClick={Add}
          style={{
            padding: "15px",
            background: "blue",
            color: "white",
            borderRadius: "5px",
          }}
        >
          add
        </button>
        <button
          onClick={Sub}
          style={{
            padding: "15px",
            background: "red",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Sub
        </button>
        <button
          onClick={AddByValue}
          style={{
            padding: "15px",
            background: "green",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Add with 20
        </button>
      </div>
    </div>
  );
}
