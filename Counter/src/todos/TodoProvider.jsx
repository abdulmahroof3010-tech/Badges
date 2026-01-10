import { createContext, useContext, useRef, useState } from "react";

const TodoContext=createContext()

export function TodoProvider({children}){
     const [list,setList]=useState([])
     const [deletedItems,setDeletedItems]=useState([])
     const highlight=useRef({})

     const handleAdd=(text)=>{
        if(text.trim()==="") return
        setList((prev)=>[...prev,{id:Date.now(),text:text}])
      
     }

     const handleDelete=(id)=>{
        const deletedItem=list.find((itm)=>itm.id===id)
        if(deletedItem){
            setDeletedItems((prev)=>[...prev,deletedItem])

        }

        setList(list.filter((item)=>item.id !== id))

     }

     const handleEdit=(id,newText)=>{
        if(newText.trim()==="") return
        const saved=list.map((item)=>item.id===id ?
     {...item,text:newText}:item)
     setList(saved)
     
     }

     const handleUndo=(id)=>{
        const undos=deletedItems.find((item)=>item.id===id)
        if(undos){
            setList((prev)=>[...prev,undos ])
             }
             setDeletedItems(prev=>prev.filter((item)=>item.id !==id))

             const ChangeColor=highlight.current[id]
             if(ChangeColor){
                ChangeColor.style.background="#bbf7d0"
             }


     }

     return (
        <TodoContext.Provider value={{list,deletedItems,handleAdd,handleDelete,handleEdit,handleUndo,highlight}}>
            {children }
        </TodoContext.Provider>

     )



}

export const useTodo=()=>useContext(TodoContext)