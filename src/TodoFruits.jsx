import React, { useState } from 'react'

function TodoFruits() {
    const [foods, setFoods]=useState(["Apple","Orange","Banana"])
    
    const handleAddFood=()=>{
        const newFood=document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";
        setFoods(f=>[...f, newFood]);
        
    }

    const handleRemoveFood=(index)=>{
        setFoods(foods.filter((_, i) => i !==index));
    }
  return (
    <div>
        <h2>Liste of Food</h2>
        <ul>
            {foods.map((food, index)=>
            <li key={index} onClick={()=>handleRemoveFood(index)}>
                {food}
            </li>)}
        </ul>
        <input type="text" id="foodInput"placeholder='enter food name' />
        <button onClick={handleAddFood}>Add Food</button>
    </div>
  )
}

export default TodoFruits