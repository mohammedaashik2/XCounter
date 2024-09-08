import React, { useState } from 'react'

function Count() {
    const [count,setCount] = useState(0);
    
    const increment = ()=>{
        setCount(count=>count+1);
    }

    const decrement = ()=>{
        setCount(count=>count-1);
    }

  return (
    <div style={{
        padding:"20px"
    }}>
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Count