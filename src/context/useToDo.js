import { useContext } from "react";
import TodoContext from "./context";

const useToDo = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useToDo must be used within a TodoProvider");
  }

  return context;
};

export default useToDo;
