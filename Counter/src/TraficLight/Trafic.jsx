import React, { useEffect, useState } from 'react'

function Trafic() {
     const lights=[{color:"red",duration:3000},
            {color:"yellow",duration:1000},
            {color:"green",duration:2000}                 

     ]

     const [index,setIndex]=useState(0)

     useEffect(()=>{
        const intervel=setInterval(()=>{
            setIndex(prev=>(prev+1)%lights.length)
        },lights[index].duration)
        return ()=>clearInterval(intervel)
     },[index])

  return (
    <div style={{display:"flex",flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh',width:'100%',gap:'8px'}}>
      
      <div style={{backgroundColor:'black',height:'200px',width:'150px',borderRadius:'15px'}} >
        
        {
            Array.from({length:3}).map((_,i)=>{
                return <div style={{backgroundColor:i==index?lights[i].color:'gray',height:'50px',width:'50px',borderRadius:'50px',marginLeft:'50px',marginTop:'10px'}}>
           </div>
            })
        }

      </div>
      <div style={{backgroundColor:'black',height:'500px',width:"20px",position:'absolute',top:'450px'}}></div>
    </div>
  )
}

export default Trafic
