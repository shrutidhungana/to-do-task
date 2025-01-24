import { useState } from "react";
import useToDo from "../../context/useToDo";
import { FaEdit, FaTrash, FaGripVertical } from "react-icons/fa";
import { useDrag, useDrop } from "react-dnd";
import "./styles.css";
import PropTypes from "prop-types";
import ConfirmationModal from "../ConfirmationModal";

// Define drag item type
const ITEM_TYPE = "TODO_ITEM";

const TodoList = ({ handleEdit }) => {
  const [{ todos, filter }, { deleteTodo, toggleTodo, reorderTodos }] =
    useToDo();
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

  const handleDragEnd = (draggedIndex, droppedIndex) => {
    if (draggedIndex !== droppedIndex) {
      const updatedTodos = [...todos];
      const [draggedItem] = updatedTodos.splice(draggedIndex, 1);
      updatedTodos.splice(droppedIndex, 0, draggedItem);
      reorderTodos(updatedTodos); // Update the todos order
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "COMPLETED") return todo.isComplete;
    if (filter === "INCOMPLETE") return !todo.isComplete;
    return true; // "ALL"
  });

  return (
    <div className="todo-list">
      {filteredTodos.length === 0 ? (
        <p className="no-todos-message">No tasks yet. Add some!</p>
      ) : (
        filteredTodos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            index={index}
            todo={todo}
            handleEdit={handleEdit}
            handleDeleteClick={handleDeleteClick}
            handleToggleComplete={handleToggleComplete}
            handleDragEnd={handleDragEnd}
          />
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

const TodoItem = ({
  index,
  todo,
  handleEdit,
  handleDeleteClick,
  handleToggleComplete,
  handleDragEnd,
}) => {
  const [{ isDragging }, drag] = useDrag({
    type: ITEM_TYPE,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover: (item) => {
      if (item.index !== index) {
        handleDragEnd(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`todo-item ${isDragging ? "dragging" : ""}`}
    >
      <div className="drag-handle">
        <FaGripVertical />
      </div>
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
  );
};

TodoList.propTypes = {
  handleEdit: PropTypes.func,
};

TodoItem.propTypes = {
  index: PropTypes.number.isRequired,
  todo: PropTypes.object.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  handleToggleComplete: PropTypes.func.isRequired,
  handleDragEnd: PropTypes.func.isRequired,
};

export default TodoList;
