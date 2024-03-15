import React, { useState } from 'react'

function Counter() {
    const [count, setCounter]=useState(0)
    const increment=()=>{
        setCounter(count +1)
    }

    const decrement=()=>{
        setCounter(count -1)
    }
    const reset=()=>{
        setCounter(0)
    }
  return (
    <div className='counter-container'>
        
        <p className='counter-display'>{count}</p>
        <button onClick={decrement} className='counter-button'>decrement</button>
        <button onClick={increment}className='counter-button'>increment</button>
        <button onClick={reset} className='counter-button'>reset</button>

    </div>
  )
}

export default Counter