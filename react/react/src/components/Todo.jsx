import React, { useState, useEffect } from 'react';
import axios from 'axios';
const API='http://localhost:5000';
const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editing,setEditing]=useState(null)
  const fetchTodo = async () => {
    
      const response = await axios.get(`${API}/todo/`);
      console.log(response.data);
      setTodos(response.data.data);
    
  }

  useEffect(() => {
    fetchTodo()
  }, []);
const handleAddorEdit=async(e)=>{
    e.preventDefault();
    if(editing){
        await axios.put(`${API}/todo/edit/${editing._id}`,{task})
        fetchTodo()
    }
    else{
        await axios.post(`${API}/todo/create/`,{task})
        fetchTodo()
    }
    setEditing(null)
    setTask('')
    fetchTodo()
}

const handleDelete=async (id)=>{
    await axios.delete(`${API}/todo/delete/${id}`)
    fetchTodo()
}
const handleToggleStatus=async(todo)=>{
    await axios.put(`${API}/todo/edit/${todo._id}`,{
        status:!todo.status
    })
    fetchTodo()
}
  return (
    <div>
      <h2>Todo Page</h2>
      <input
        type="text"
        value={task}
        placeholder="Enter the task" 
        onChange={(e)=>setTask(e.target.value)}
      />
      <button onClick={handleAddorEdit}>{editing?"Update":"Add"}</button>
      

      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <span onClick={()=>{handleToggleStatus(todo)}} style={{ cursor: "pointer", textDecoration: todo.status ? "line-through" : "none" }}
>
                <p>{todo.task}</p></span>
            <button onClick={()=>{setEditing(todo) 
            setTask(todo.task)}}>Edit</button>
      <button onClick={()=>handleDelete(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo
