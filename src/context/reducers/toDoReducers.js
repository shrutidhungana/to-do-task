import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  FILTER_TODOS,
  SET_TODOS,
  REORDER_TODOS,
} from "./actionTypes";

export const initialState = {
  todos: [], 
  filter: "ALL", // Current filter: ALL, COMPLETED, or INCOMPLETE
};

export const toDoReducers = (state, action) => {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload, // Set initial TODOs (from localStorage or API)
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload.text,
            isComplete: false,
          },
        ],
      };

    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, isComplete: !todo.isComplete }
            : todo
        ),
      };
    
    

    case FILTER_TODOS:
      return {
        ...state,
        filter: action.payload.filter,
      };

    case REORDER_TODOS:
      return {
        ...state,
        todos: action.payload.reorderedTodos, 
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
