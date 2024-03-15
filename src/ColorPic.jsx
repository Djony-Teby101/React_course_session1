import React, {useState} from 'react'

function ColorPic() {
    const [color, setColor]= useState("#FFFFFF")
    const handleColorChange=(e)=>{
        setColor(e.target.value)
    }
  return (
    <>
    <div className="colorPicker-container">
        <h1>Color picker</h1>
        <div className="color-display" style={{background: color}}>
            <p>Selected Color: {color}</p>
        </div>
        <label htmlFor="">Select Color:</label>
        <input type="color" value={color} onChange={handleColorChange} />
    </div>
    </>
  )
}

export default ColorPic