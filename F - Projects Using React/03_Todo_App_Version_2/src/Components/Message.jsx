import styles from "./Message.module.css";
const Message = ({ todoItems }) => {
  return todoItems.length === 0 ? (
    <h1 className={styles.msg}>There is nothing else to do anymore.</h1>
  ) : null;
};

export default Message;
