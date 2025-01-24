import  { useState } from "react";
import AddEditTodo from "../../components/AddEditToDo";
import TodoList from "../../components/ToDoList";
import "./styles.css";

const Home = () => {
  const [selectedTodo, setSelectedTodo] = useState(null); 
  
  const handleEdit = (todo) => {
    
     setSelectedTodo(todo); 
   };
  
  const resetSelectedTodo = () => {
    setSelectedTodo(null); 
  };
  
  return (
    <div className="home-container">
      <h1>My To-Do List</h1>
      <AddEditTodo
        selectedTodo={selectedTodo}
        resetSelectedTodo={resetSelectedTodo}
      />
      <TodoList handleEdit={handleEdit} />
    </div>
  );
};

export default Home;
