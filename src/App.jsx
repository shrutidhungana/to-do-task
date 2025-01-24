
import './App.css'
import TodoProvider from "./context/provider";
import Home from "./pages/Home";

function App() {
 

  return (
    <TodoProvider>
      <div>
        <Home />
      </div>
    </TodoProvider>
  );
}

export default App
