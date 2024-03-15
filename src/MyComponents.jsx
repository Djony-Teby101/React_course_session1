import React, { useState } from 'react'

function MyComponents() {
    const [name, setName]=useState("Guest")
    const [age, setAge]=useState(0)
    const [isEmployed, setIsEmployed]= useState(false);

    const updateName=()=>{
        setName("Lorince")
    }

    const incrementAge=()=>{
        setAge(age+1)
    }

    const toggleEmployedStatus=()=>{
        setIsEmployed(!isEmployed)
    }
  return (
    
    <div>
        <p>name:{name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>age:{age}</p>
        <button onClick={incrementAge}>Age</button>

        <p>Is employed: {isEmployed ? "Yes": "No"}</p>
        <button onClick={toggleEmployedStatus}>toggle status</button>
    </div>
  )
}

export default MyComponents