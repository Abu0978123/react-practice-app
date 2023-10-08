import React, { useReducer } from 'react';
import {reducer} from '../../hooks/reducer'
export default function Reducer() {
    const initalValue = 0;
    const [count, dispatch] = useReducer(reducer, initalValue)
  return (
    <div>
        <div>
      <button
        onClick={() => {
          dispatch({type: "INC"});
        }}
      >
        add
      </button>
      <h1>{count}</h1>
      <button
        onClick={() => {
            dispatch({type: "DEC"});
        }}
      >
        sub
      </button>
    </div>
    </div>
  )
}
