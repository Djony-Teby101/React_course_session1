import React, { useEffect, useState } from 'react'

function UserEffectModel1() {
    const [width, setWidth]=useState(window.innerWidth)
    const[height, setHeight]=useState(window.innerHeight)

    useEffect(()=>{
        window.addEventListener("resize", HandleResize)
        console.log("Event work");

        return()=>{
            window.removeEventListener("resize", HandleResize);
            console.log("event listener Removed")
        }
    })
    useEffect(()=>{
        document.title=`Size: ${width}x${height}`
    },[width, height])

    const HandleResize=()=>{
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)

    }

  return (
    <>
    <p>Window Width:{width}</p>
    <p>window Height:{height}</p>
    </>
  )
}

export default UserEffectModel1