import React, { useEffect, useState } from 'react'

function Timer() {
    const [running,setRunning]=useState(false);
    const [count,setCount]=useState(0);
    const [forward,setForward]=useState(true);

    useEffect(()=>{
    if(!running)return;

    const interval=setInterval(()=>{
        setCount((prev)=>(forward?prev+1:prev-1));
    },1000);

    return ()=>clearInterval(interval);

},[forward,running]);

 const handleForward=()=>{
    setForward(true);
    setRunning(true);
 }
 
  const handleStop=()=>{    
    setRunning(false)
  }

    const handleBack=()=>{
        setForward(false)
        setRunning(true)
    }
  return (
    <div>

        <h1>Timer</h1>
        <div>{count}</div>

        <button onClick={handleForward}>Forward</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleBack}>Backward</button>
      
    </div>
  )
}

export default Timer
