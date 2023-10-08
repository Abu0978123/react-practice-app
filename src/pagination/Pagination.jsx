import React, { useState } from 'react'
import dataJson from './data.json'

export const Pagination = () => {
    const [data, setData] = useState(dataJson.slice(0, 20));
  return (
    <div>
        {
           data.map((items, i)=>{
            return (
                <div style={{display: "flex", justifyContent: "center"}}>
                <div key={i} style={{background: "wheat",width: "400px", padding: "10px", borderRadius: "5px",marginBottom: '60px'}}>
                  <h1>{items.title}</h1>
                </div>
                </div>
            )
           })
        }
    </div>
  )
}
