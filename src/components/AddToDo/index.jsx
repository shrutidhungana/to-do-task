import  { useState } from "react";
import useToDo from "../../context/useToDo"; // Custom hook to access context
import './styles.css'

const AddTodo = () => {
  const [, { addTodo }] = useToDo();
  const [task, setTask] = useState(""); 

  const handleAdd = () => {
    if (task.trim()) {
      addTodo(task); 
      setTask(""); 
    }
  };
    

  return (
    <div className="add-todo">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="add-todo-input"
      />
      <button onClick={handleAdd} className="add-todo-btn">
        Add
      </button>
    </div>
  );
};

export default AddTodo;
