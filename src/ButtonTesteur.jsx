import React from 'react'

function ButtonTesteur() {

    const handleClick=(e)=>e.target.textContent="Connected"
  return (
    <button onClick={(e)=>handleClick(e)}>Login</button>
  )
}

export default ButtonTesteur