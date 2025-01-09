import styles from "./AddTodo.module.css";

function AddTodo() {
  return (
    <div className={styles["container"]}>
      <div className={styles["row"]}>
        <div className="col-4 text-left">
          <input
            type="text"
            placeholder="Enter Todo Here"
            id={styles["task-area"]}
          />
        </div>
        <div className="col-4">
          <input type="date" id={styles["date-picker"]} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-outline-success"
            id={styles["add-btn"]}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
