import React, { useState } from 'react'
import { useTodo } from './TodoProvider'
import { Link } from 'react-router-dom'

function TodoPage() {
    const [text,setText]=useState("")
    const [edit,setEdit]=useState(null)
    const [editText,setEditText]=useState("")

    const{list,handleEdit,handleAdd,handleDelete,highlight} =useTodo()




  return (
    <div>
        <h2>Todo List </h2>

        <input type="text"
        value={text}
        onChange={(e)=>setText(e.target.value)}
        />
        <button onClick={()=>{handleAdd(text);
            setText("")
        }}>Add</button>

        <ol>{list.map(item=>(
            <li key={item.id} ref={(el)=>{highlight.current[item.id]=el}}>
               {edit === item.id?(
                <>
                <input type='text'
                value={editText}
                onChange={(e)=>setEditText(e.target.value)} />

                <button onClick={()=>{
                    handleEdit(item.id,editText)
                    setEdit(null)
                }}>Save</button>
                <button onClick={()=>setEdit(null)}>Cancel</button>

                </>
               ):(
                <>
                <span>{item.text}</span>
                <button onClick={()=>{
                    setEdit(item.id);
                    setEditText(item.text);
                }}>Edit</button>

                <button onClick={()=>handleDelete(item.id)}>Delete</button>
                
                </>
               )
            }

            </li>
        ))}</ol>
  

          <Link to="/delete">Go To Delete Items</Link>

    </div>
  )
}

export default TodoPage
