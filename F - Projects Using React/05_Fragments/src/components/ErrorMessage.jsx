import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ itemsArray }) => {
  //   let foodItems = ["Dal", "Rice", "Milk", "Eggs", "Ghee", "Vegetables"];
  return (
    itemsArray.length === 0 && (
      <h2 className={styles["error-heading"]}>No food items found</h2>
    )
  );
};

export default ErrorMessage;
