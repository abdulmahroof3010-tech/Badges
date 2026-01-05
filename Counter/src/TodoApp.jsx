import React, { useReducer, useState } from 'react'


const initialState={
    todos:[]
};

function todoReducer(state,action){

     switch(action.type){
        case "Add_Todo":
            return{
                ...state,
                todos:[
                    ...state.todos,
                    {id:Date.now(),text:action.payload}
                ]
            };

        case "Edit_Todo":
            return{
                ...state,
                todos:state.todos.map(todo=>todo.id===action.payload.id
                    ?{...todo,text:action.payload.text} :todo
                )
            };

        case "Delete_Todo":
            return{
                ...state,
                todos:state.todos.filter(todo=>todo.id!==action.payload)
            };
        default:
            return state; 

     }
}

function TodoApp() {
    const [state,dispatch]=useReducer(todoReducer,initialState)
    const [text,setText]=useState("")
    const [edit,setEdit]=useState(null);
    const [newText,setNewText]=useState("")
    const todos=state.todos

    const handleAdd=()=>{
        if(text.trim()==="") return;

        dispatch({
            type:"Add_Todo",
            payload:text
        })
        setText("");
    }

    const handleEdit=(id)=>{
        if(newText.trim()==="") return;
        dispatch({
            type:"Edit_Todo",
            payload:{id,text:newText}
        })
         setEdit(null)
         setNewText("")
    }

    const handleDelete=(id)=>{
        dispatch({
            type:"Delete_Todo",
            payload:id
        })
    }

  return (
    <div>

        <input type="text"
        value={text}
        onChange={(e)=>setText(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
        

        <div>
        <ul>{todos.map((todo)=>(
            <li key={todo.id}>
                {edit ===todo.id?(
                <>
                <input type="text"
                value={newText}
                onChange={(e)=>setNewText(e.target.value)}/>

                <button
                onClick={()=>handleEdit(todo.id)}>Update</button>
                <button onClick={()=>setEdit(null)}>cancel</button>
                
                </>
                ):(
                    <>
                    <span>{todo.text}</span>
                    <button onClick={()=>{setEdit(todo.id);
                        setNewText(todo.text);
                     } }>Edit</button>
                    </>
                )}
                

                <button onClick={()=>handleDelete(todo.id)}>Delete</button>

            </li>
        ))}</ul>
        </div>

       
      
    </div>
  )
}

export default TodoApp
