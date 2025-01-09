import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
// import "./App.css";
function App() {
  const todoItems = [
    { name: "Buy Milk", dueDate: "08/01/2025" },
    { name: "Build Project", dueDate: "08/01/2025" },
    { name: "Prepare Breakfast", dueDate: "08/01/2025" },
    
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
