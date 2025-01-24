import { useReducer, useEffect } from "react";
import { toDoReducers, initialState } from "./reducers/toDoReducers";

const useStatesAndActions = () => {
  const [state, dispatch] = useReducer(
    toDoReducers,
    initialState,
    (initial) => {
      // Load from localStorage if available
      const persistedTodos = localStorage.getItem("todos");
      return persistedTodos
        ? { ...initial, todos: JSON.parse(persistedTodos) }
        : initial;
    }
  );

  // Persist todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  const stateData = {
    todos: state.todos,
    filter: state.filter,
  };

  const actions = {
    addTodo: (text) => dispatch({ type: "ADD_TODO", payload: { text } }),
    editTodo: (id, text) =>
      dispatch({ type: "EDIT_TODO", payload: { id, text } }),
    deleteTodo: (id) => dispatch({ type: "DELETE_TODO", payload: { id } }),
    toggleTodo: (id) => dispatch({ type: "TOGGLE_TODO", payload: { id } }),
    setFilter: (filter) =>
      dispatch({ type: "FILTER_TODOS", payload: { filter } }),
    reorderTodos: (reorderedTodos) =>
      dispatch({ type: "REORDER_TODOS", payload: { reorderedTodos } }),
  };

  return [stateData, actions];
};

export default useStatesAndActions;
