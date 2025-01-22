import { useState } from "react";
import styles from "./AddTodo.module.css";

function AddTodo({ onAddTodo }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const onTodoName = (event) => {
    const todoName = event.target.value;
    setTodoName(todoName);
  };
  const onDueDate = (event) => {
    const dueDate = event.target.value;
    setDueDate(dueDate);
  };

  const handleAddButtonClicked = () => {
    onAddTodo(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };
  return (
    <div className={styles["container"]}>
      <div className={styles["row"]}>
        <div className="col-4 text-left">
          <input
            type="text"
            placeholder="Enter Todo Here"
            id={styles["task-area"]}
            value={todoName}
            onChange={onTodoName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            id={styles["date-picker"]}
            value={dueDate}
            onChange={onDueDate}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-outline-success"
            id={styles["add-btn"]}
            onClick={handleAddButtonClicked}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
