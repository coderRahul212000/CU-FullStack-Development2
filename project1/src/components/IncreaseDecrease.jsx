import React from 'react'
import { useState } from 'react';

export const IncreaseDecrease = () => {
    
    const [count, setCount] = useState(1);
   
  return (
  
    <div>
        <h1>{count}</h1>
        <button onMouseEnter={() => setCount(count+1)}>
            +
        </button>
        <button onClick={() => setCount(count-1)}>
            -
        </button>
    </div>
  )
}


