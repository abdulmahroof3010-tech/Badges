import React, { useState } from 'react'

function TodoCon() {
    const [text,setText]=useState("");
    const [list,setList]= useState([]);
    const [edit,setEdit]=useState(null);
    const [newText,setNewText]= useState("");
    const [deletedItems,setDeletedItems]=useState([])
    const [searchItem,setSearchItem]=useState("")

    const handleAdd=()=>{
        if(text.trim()==="")return
        setList((prev)=>[...prev,{id:Date.now(),text:text}])
        setText("")
    }

    const handleEdit=(id)=>{
        if(newText.trim()==="") return
        const updated=list.map((item)=>item.id ===id ?
      {...item,text:newText} :item
    );
    setList(updated);
    setEdit(null);
    setNewText("");


    }

    const handleDelete=(id)=>{
        const deletedItem=list.find(item=>item.id===id)
        if(deletedItem){
            setDeletedItems(prev=>[...prev,deletedItem])
        }
        const filtered=list.filter((item)=>item.id !== id)
        setList(filtered)
    }

    const handleUndo=(id)=>{
        const undoList=deletedItems.find((und)=>und.id===id)
        if(undoList){
            setList((prev)=>[...prev,undoList])
        }
        const undoEmpty=deletedItems.filter((und)=>und.id !== id)
        setDeletedItems(undoEmpty)
    }

    const filteredList=list.filter( (item)=>item.text.toLowerCase().includes(searchItem.toLowerCase()));

  return (
    <div>
    <h2>Todo App</h2>

    <input type="text"
    value={text}
    onChange={(e)=>setText(e.target.value)}
    />
    <button onClick={handleAdd}>Add</button>


    <ol>
        <input type='text'
        value={searchItem}
        placeholder='search todo'
        onChange={(e)=>setSearchItem(e.target.value)} />

        {filteredList.map((item)=>(
        <li key={item.id}>
            {edit === item.id ?(
                <>
                <input type="text"
                value={newText}
                onChange={(e)=>setNewText(e.target.value)} />

                <button onClick={()=>handleEdit(item.id)}>Save</button>
                <button onClick={()=>setEdit(null)}>Cancel</button>
                </>
            ):(
            
          <>
            
            <span>{item.text}</span>
            <button onClick={()=>{
                setEdit(item.id);
                setNewText(item.text)
            }}>Edit</button>
        
        <button onClick={()=>handleDelete(item.id)}>Delete</button>
            </>  
       
             )}
              </li>

        
    ))}</ol>
     <h3>Deleted items</h3>
    <ol>{deletedItems.map((ite)=>(
        <li key={ite.id}>{ite.text}
        <button onClick={()=>handleUndo(ite.id)}>undo</button>
        </li>
    ))}</ol>

    </div>
  )
}

export default TodoCon
