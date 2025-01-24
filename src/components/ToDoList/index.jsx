
import useToDo from "../../context/useToDo";
import './styles.css'
import { FaEdit } from "react-icons/fa"; 
import PropTypes from "prop-types";

const TodoList = ({handleEdit}) => {
  const [{ todos }] = useToDo();

  return (
    <div className="todo-list">
      {todos?.length === 0 ? (
        <p className="no-todos-message">No tasks yet. Add some!</p>
      ) : (
        todos?.map((todo) => (
          <div key={todo.id} className="todo-item">
            <p className="todo-text">{todo.text}</p>
            <FaEdit
              className="todo-edit-icon"
              title="Edit Task"
              onClick={() => handleEdit(todo)} // Trigger handleEdit when clicked
            />
          </div>
        ))
      )}
    </div>
  );
};

TodoList.propTypes = {
  handleEdit: PropTypes.func
}
 


export default TodoList;
