import React, { useEffect, useState } from 'react'

function TraficLight() {
    const lights=[{color:"red",duration:3000},
        {color:"yellow",duration:1000},
        {color:"green",duration:2000}
    ]

    const [index,setIndex]=useState(0)

    useEffect(()=>{
        const timer=setTimeout(()=>{
            setIndex((prev)=>(prev+1)%lights.length)
        },lights[index].duration)

         return ()=>clearTimeout(timer)
    },[index])
  return (
    <>
    <div style={{backgroundColor:"black",width:"55px",padding:"5px",marginLeft:700}}>  
        {lights.map((light,i)=>(
        <div key={light.color}
        style={{backgroundColor:i===index?light.color:"white",
            width:"50px",
            height:"50px",
            borderRadius:"50%",
            marginTop:"10px",
        }}/>
   ) )} 
    </div>
    </>
  )
}

export default TraficLight
