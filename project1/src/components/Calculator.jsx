import React from 'react'
import { useState } from 'react'

export const Calculator = () => {
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [result, setResult] = useState("")

    const add = ()=>{
        setResult(Number(num1) + Number(num2));
    }

     const subtract = ()=>{
        setResult(Number(num1) - Number(num2));
    }

     const multiply = ()=>{
        setResult(Number(num1) * Number(num2));
    }

     const clear = ()=>{
        setNum1("")
        setNum2("")
        setResult("");
    }
   


  return (
    <div>
        <h1>Simple Calculator</h1>
        <input
           type="Number"
           placeholder="Enter First Number"
           value={num1}
           onChange={(e) => setNum1(e.target.value)}
        />

        <br />
        
          <input
           type="Number"
           placeholder="Enter Second Number"
           value={num2}
           onChange={(e) => setNum2(e.target.value)}
        />
         <br />

        <button onClick={add}>Add</button>
         <br />
        <button onClick={subtract}>Subtraction</button>
         <br />
        <button onClick={multiply}>Multiplication</button>
         <br />
        <button onClick={clear}>Clear </button>

        <h2>Result: {result}</h2>

    </div>
  )
}
