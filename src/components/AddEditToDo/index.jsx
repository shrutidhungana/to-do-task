import  { useState, useEffect } from "react";
import useToDo from "../../context/useToDo"; // Custom hook to access context
import './styles.css'
import PropTypes from "prop-types";

const AddEditTodo = ({ selectedTodo , resetSelectedTodo }) => {
  const [, { addTodo, editTodo }] = useToDo();
  const [task, setTask] = useState("");

  useEffect(() => {
    if (selectedTodo) {
      setTask(selectedTodo.text);
    } else {
      setTask("");
    }
  }, [selectedTodo]);

  const handleAddOrEdit = () => {
    if (task.trim()) {
      if (selectedTodo) {
        editTodo(selectedTodo.id, task); 
        resetSelectedTodo(); 
      } else {
        addTodo(task); 
      }
      setTask(""); 
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add or Edit a task"
        className="add-todo-input"
      />
      <button onClick={handleAddOrEdit} className="add-todo-btn">
        {selectedTodo ? "Edit" : "Add"}
      </button>
    </div>
  );
};

AddEditTodo.propTypes = {
  selectedTodo: PropTypes.null,
   resetSelectedTodo: PropTypes.null,
}

export default AddEditTodo;
