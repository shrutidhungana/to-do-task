
import AddTodo from "../../components/AddToDo";
import TodoList from "../../components/ToDoList";
import './styles.css'

const Home = () => {
  return (
    <div className="home-container">
      <h1>My To-Do List</h1>
          <AddTodo />
          <TodoList />
    </div>
  );
};

export default Home;
