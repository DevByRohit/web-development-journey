import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
function App() {
  return (
    <center class="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems></TodoItems>
      <TodoItems></TodoItems>
    </center>
  );
}

export default App;
