import React,{useState} from 'react'

function CheckBox() {
    const list=[{id:1,value:"DSA"},
        {id:2,value:"JAVA"},
        {id:3,value:"REACT"},
        {id:4,value:"C++"},
        {id:5,value:"GATE"}
    ]
    const [selected,setSelected]=useState(false);
    const [selectedItems,setSelectedItems]=useState([])


    const handleSelect=()=>{
        setSelected(prev=>!prev)
    }

    const handleSelectedItem=(id,checked)=>{
        setSelectedItems(prev=>{
            if(checked){
                    // if(prev.some(item=>item.id===id)) return prev
                    const toSelect=list.find(item=>item.id===id)
                    return toSelect?[...prev,toSelect]:prev
            }else{
                return prev.filter(item=>item.id !==id)
            }
        }
        )
    }

  return (  
    <div>
        <button onClick={handleSelect}>Select Options</button>
        {selected &&
        list.map((item)=>(
            <li key={item.id}>{
                <input type="checkbox" 
                checked={selectedItems.some((lis)=>lis.id===item.id)}
                onChange={(e)=>handleSelectedItem(item.id,e.target.checked)}
                />
             } {item.value}</li>
        ))
        }
       

       <div >
        <h3>Selected Items:</h3>
        <ul>{selectedItems.map((item)=>(
            <li key={item.id}>{item.value}</li>
        ))}</ul>
       </div>
      
    </div>
  )
}

export default CheckBox
