import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import Message from "./Components/Message";
import { useState } from "react";
// import "./App.css";
function App() {
  // const todoItems = [
  //   { name: "Buy Milk", dueDate: "08/01/2025" },
  //   { name: "Build Project", dueDate: "08/01/2025" },
  //   { name: "Prepare Breakfast", dueDate: "08/01/2025" },
  // ];

  // state to hold the todo items, initially empty array
  const [todoItems, setTodoItems] = useState([]);

  // this function handles adding new todo items to the list
  const handleTodoItems = (todoName, dueDate) => {
    const newTodo = { name: todoName, dueDate: dueDate };
    setTodoItems([...todoItems, newTodo]);
  };

  // this function handle how to delete items
  const handleDeleteTodoItems = (DeleteTodoName) => {
    setTodoItems(todoItems.filter((todo) => todo.name !== DeleteTodoName));
  };
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onAddTodo={handleTodoItems}></AddTodo>
      <Message todoItems={todoItems}></Message>
      <TodoItems
        todoItems={todoItems}
        onDeleteButton={handleDeleteTodoItems}
      ></TodoItems>
    </center>
  );
}

export default App;
