import React , {useState, useEffect}from 'react'

function UseEffectModel() {
    const [count, setCount]=useState(0)
    const [color, setColor]=useState("green")


    useEffect(()=>{
        document.title=`Count: ${count} ${color}`
    }, [count, color])

    const addCount=()=>{
        setCount(count=>count+1)
    }

    const SubtractCount=()=>{
        setCount(count=>count - 1)
    }

    const changeColor=()=>{
        setColor(color => color==="green"?"red":"green");
    }
  return (
    <>
    <p style={{color:color}}>Count:{count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={SubtractCount}>Substract</button>
    <button onClick={changeColor}>Substract</button>
    </>
   
  )
}

export default UseEffectModel