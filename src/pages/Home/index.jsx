
import AddTodo from "../../components/AddToDo";
import './styles.css'

const Home = () => {
  return (
    <div className="home-container">
      <h1>My To-Do List</h1>
      <AddTodo />
    </div>
  );
};

export default Home;
