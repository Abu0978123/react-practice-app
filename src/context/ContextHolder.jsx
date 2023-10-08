import React, { useState } from 'react'
import { createContext } from 'react'
const CounterContext = createContext();
export default function ContextHolder(props) {
    const [count, setCount] = useState(9);
    const HandleChange = newchange =>{
        setCount(newchange)
    }
  return (
    <CounterContext.Provider value = {{count, HandleChange}}>
        {props.children}
    </CounterContext.Provider>
  )
}
export {CounterContext}