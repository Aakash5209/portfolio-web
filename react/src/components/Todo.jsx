import { useState } from "react";
export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex ,setEditIndex] = useState(null)

  const handleAdd = () => {
    if (isEdit) {
        const updateTodo = [...todos]
        updateTodo[editIndex] = newTodo
        setTodos(updateTodo)
        setIsEdit(false)
        setEditIndex(null)



    } else {
      setTodos([...todos, newTodo]);
      
    }
    setNewTodo("");
  };
  // console.log(todos)

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i != index));
  };

  const handleUpdate = (index) => {
    setNewTodo(todos[index]);
    setIsEdit(true);
    setEditIndex(index)
  };

  return (
    <>
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Enter the Task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />

      <button onClick={handleAdd}>{isEdit?"Update":'Add'}</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span>{todo}</span>
            <button onClick={() => handleUpdate(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
