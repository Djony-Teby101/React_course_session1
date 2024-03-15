import React, { useState } from 'react'

function Button() {
    const [count, setcount] = useState(0)
    const increment = () => {
        setcount(count + 1)
    }
    const decrement=()=>{
        setcount(count - 1)
    }


    return (
        <>
            <button className='Button' onClick={decrement}>
               decrementer
            </button>
            <p className='compteur-text'>compteur:{count}</p>
            <button className='Button' onClick={increment}>
               incrementer
            </button>
        </>
    )
}

export default Button