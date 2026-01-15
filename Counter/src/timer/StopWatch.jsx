import React, { useEffect, useRef, useState } from 'react'

function StopWatch() {
    const [time,setTime]=useState(0);
    const [running,setRunning] =useState(false);
    const intervalRef=useRef(null);

    useEffect(()=>{
        if(running){
            intervalRef.current=setInterval(()=>{
                setTime(prev=>prev+1);
                
            },1000);
        }
        return ()=>clearInterval(intervalRef.current);
    },[running]);

    const handleStart=()=>{
       if(!running) setRunning(true);
    }


    const handleStop=()=>{
        setRunning(false);
    }

     const handleReset=()=>{
        setRunning(false);
        setTime(0)
     };

     const hours=String(Math.floor(time/3600)).padStart(2,"0")
     const minutes=String(Math.floor((time %3600)/60)).padStart(2,"0")
     const seconds=String(Math.floor(time%60)).padStart(2,"0")


  return (
    <div>

        <h2>Stop Clock </h2>
        
        <div>{hours}:{minutes}:{seconds}</div>

        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>


      
    </div>
  )
}

export default StopWatch
