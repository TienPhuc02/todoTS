import Todolist from "./components/Todolist";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>Todo List TypeScript</h1>
        <Todolist />
      </div>
    </div>
  );
};

export default App;
