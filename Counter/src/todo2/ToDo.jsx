import React, { useState } from "react";

function ToDo() {
  const [text, setText] = useState("");
  const [edit, setEdit] = useState(null);
  const [newText, setNewText] = useState("");
  const [list, setList] = useState([]);
  const [deleteList, setDeleteList] = useState([]);
  const [search,setSearch]=useState("")

  const handleAdd = () => {
    if (text.trim() === "") return;
    setList((prev) => [...prev, { id: Date.now(), text: text }]);
    setText("");
  };

  const handleEdit = (id) => {
    if (newText.trim() === "") return;
    const updatedList = list.map((lis) =>
      lis.id === id ? { ...lis, text: newText } : lis
    );
    setList(updatedList);
    setEdit(null);
    setNewText("");
  };

  const handleDelete = (id) => {
    const deletedItem = list.find((item) => item.id === id);
    if (deletedItem) {
      setDeleteList((prev) => [...prev, deletedItem]);
    }
    const filtered = list.filter((lis) => lis.id !== id);
    setList(filtered);
  };

  const handleUndo=(id)=>{
    const undos=deleteList.find((del)=>del.id===id)
    if(undos){
        setList((prev)=>[...prev,undos])
    }
    const undoed=deleteList.filter((des)=>des.id !==id)
     setDeleteList(undoed)
  }

  const filteredList=list.filter((item)=>item.text.toLowerCase().includes(search.toLowerCase()));
  return (
    <div>
      <h2>TODO LISTS</h2>



      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <input type="text" 
      value={search}
      placeholder="search todo"
      onChange={(e)=>setSearch(e.target.value)}
      />

      <ul>
        {filteredList.map((lis) => (
          <li key={lis.id}>
            {edit === lis.id ? (
              <>
                <input
                  type="text"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                />

                <button onClick={() => handleEdit(lis.id)}>Update</button>
                <button onClick={() => setEdit(null)}>cancel</button>
              </>
            ) : (
              <>
                <span>{lis.text}</span>
                <button
                  onClick={() => {
                    setEdit(lis.id);
                    setNewText(lis.text);
                  }}
                >
                  Edit
                </button>

                <button onClick={() => handleDelete(lis.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>

      <h2>Deleted item</h2>
      <ul>{deleteList.map(del=>(
        <li key={del.id}>{del.text}
        
        <button onClick={()=>handleUndo(del.id)}>undo</button></li>

        
      ))}
      
      </ul>
     
    </div>
  );
}

export default ToDo;
