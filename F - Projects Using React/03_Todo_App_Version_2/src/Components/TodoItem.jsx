import styles from "./TodoItem.module.css";

function TodoItem({ todoName, todoDate, onDeleteButton }) {
  return (
    <div className={styles["container"]}>
      <div className={styles["row"]}>
        <div className="col-4 text-left" id={styles["todo-name"]}>
          {todoName}
        </div>
        <div className="col-4" id={styles["todo-date"]}>
          {todoDate}
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-outline-danger"
            id={styles["dlt-btn"]}
            onClick={() => onDeleteButton(todoName)}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
