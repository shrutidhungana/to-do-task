import PropTypes from "prop-types";
import TodoContext from "./context";
import useStatesAndActions from "./useStatesAndActions";

const TodoProvider = ({ children }) => {
  const value = useStatesAndActions();
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TodoProvider;
