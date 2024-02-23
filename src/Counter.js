import React, { useState } from 'react'

const Counter=() => {
    const [counter,setCount]=useState(0);

    const increment=() => {
        setCount(counter+1);
    }
    const decrement=() => {
        setCount(counter-1);
    }
  return (
    <div>
        <h1> Counter: {counter} </h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        
    </div>
  )
}

export default Counter