import React from 'react'
import { useState } from 'react';

const Counter = () => {
  let [count, setCount] = useState(0);
  console.log("rerendering is working.... ");
  
  return (
    <div>
      <h1>Count is - {count}</h1>
      <button onClick={()=>{setCount((prev)=>{return prev+1});
       setCount((prev)=> {return prev+1})
       setCount((prev)=>{return prev+1})
      }}>Increment</button>
    </div>
  )
}

export default Counter
