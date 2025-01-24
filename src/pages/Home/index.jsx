import { useState } from "react";
import AddEditTodo from "../../components/AddEditToDo";
import TodoList from "../../components/ToDoList";
import useToDo from "../../context/useToDo";
import FilterDropdown from "../../components/FilterToDo";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./styles.css";

const Home = () => {
  const [{ filter }, { setFilter }] = useToDo();
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleEdit = (todo) => {
    setSelectedTodo(todo);
  };

  const resetSelectedTodo = () => {
    setSelectedTodo(null);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="home-container">
        <h1>My To-Do List</h1>
        <FilterDropdown currentFilter={filter} setFilter={setFilter} />
        <AddEditTodo
          selectedTodo={selectedTodo}
          resetSelectedTodo={resetSelectedTodo}
        />
        <TodoList handleEdit={handleEdit} />
      </div>
    </DndProvider>
  );
};

export default Home;
