import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteButton }) => {
  return (
    <div className={styles["item-container"]}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteButton={onDeleteButton}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
