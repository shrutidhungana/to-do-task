import { useState } from "react";
import useToDo from "../../context/useToDo";
import './styles.css'
import { FaEdit, FaTrash } from "react-icons/fa"; 
import PropTypes from "prop-types";
import ConfirmationModal from "../ConfirmationModal";

const TodoList = ({handleEdit}) => {
  const [{ todos, filter }, { deleteTodo, toggleTodo }] = useToDo();

  const [isModalOpen, setISModalOpen] = useState(false); 
  const [todoToDelete, setTodoToDelete] = useState(null); 

  const handleDeleteClick = (todo) => {
    setTodoToDelete(todo);
    setISModalOpen(true); 
  };

  const handleConfirmDelete = () => {
    if (todoToDelete) {
      deleteTodo(todoToDelete.id); 
      setISModalOpen(false); 
    }
  };

  const handleCancelDelete = () => {
    setISModalOpen(false); 
  };

  const handleToggleComplete = (todo) => {
     toggleTodo(todo?.id);
   };

   const filteredTodos = todos.filter((todo) => {
     if (filter === "COMPLETED") return todo.isComplete;
     if (filter === "INCOMPLETE") return !todo.isComplete;
     return true; // "ALL"
   });
  
  return (
    <div className="todo-list">
      {filteredTodos?.length === 0 ? (
        <p className="no-todos-message">No tasks yet. Add some!</p>
      ) : (
        filteredTodos?.map((todo) => (
          <div key={todo.id} className="todo-item">
            <input
              type="checkbox"
              checked={todo.isComplete}
              onChange={() => handleToggleComplete(todo)}
              className="todo-checkbox"
            />
            <p className={`todo-text ${todo.isComplete ? "completed" : ""}`}>
              {todo.text}
            </p>
            <FaEdit
              className="todo-edit-icon"
              title="Edit Task"
              onClick={() => handleEdit(todo)}
            />
            <FaTrash
              className="todo-edit-icon"
              title="Delete Task"
              onClick={() => handleDeleteClick(todo)}
            />
          </div>
        ))
      )}
      {isModalOpen && (
        <ConfirmationModal
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
};

TodoList.propTypes = {
  handleEdit: PropTypes.func
}
 


export default TodoList;
