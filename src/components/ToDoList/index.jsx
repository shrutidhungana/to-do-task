
import useToDo from "../../context/useToDo";
import './styles.css'

const TodoList = () => {
  const [{ todos }] = useToDo();

  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="no-todos-message">No tasks yet. Add some!</p>
      ) : (
        todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <p className="todo-text">{todo.text}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;
