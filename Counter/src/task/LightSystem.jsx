import React ,{useState} from 'react'

function LightSystem() {
   const [active,setActive]=useState([]);

   const handleClick=(i)=>{
    const updated=[...active,i]
    setActive(updated)

    if(updated.length===8){
        let stack=[...updated]

        const interval=setInterval(()=>{
            stack.pop()
            setActive([...stack])

                if(stack.length===0){
                    clearInterval(interval)

                }
    },[1000])
        
    }
   }

   const color=["green","green","green","green","green","green","green","green","white"];

  return (
    <div
    style={{display:'grid',gridTemplateColumns:"repeat(3,80px)",gap:"10px"}}
    >
      {Array.from({length:9}).map((_,index)=>{
        if(index===4){
            return <div key={index} style={{width:"83.84px " ,height:"83.84px"}} />
        }
        return(
            <div  key={index}
            onClick={()=>handleClick(index)}  
            style={{
                width:"80px",
                height:"80px",
                border:"2px solid black",
                backgroundColor:active.includes(index)?color[index]:"white"
            }}
            />

        )
      })}
      
    </div>
  )
}

export default LightSystem
