import React from 'react'
import { useTodo } from './TodoProvider'
import { Link } from 'react-router-dom'

function DeletePage() {
    const {deletedItems,handleUndo}=useTodo()
  return (
    <div>
        <h2>Deleted items</h2>

        <ol>{deletedItems.map(item=>(
             <li key={item.id}>
                {item.text}
                <button onClick={()=>handleUndo(item.id)}>Undo</button>
             </li>
        ))}</ol>
      
      <Link to="/" >Back to Todo</Link>
    </div>

  )
}

export default DeletePage
