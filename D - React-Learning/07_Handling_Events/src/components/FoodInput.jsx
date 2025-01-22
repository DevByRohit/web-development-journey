import styles from "./FoodInput.module.css";
const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      className={styles.inputArea}
      placeholder="Enter food items here"
      // onChange={(event) => {
      //   return console.log(event.target.value);
      // }}

      // onChange={handleOnChange} // Using arrow function for better readability and efficiency

      onKeyDown={(event) => handleKeyDown(event)} // Using a named function for better readability and efficiency
    />
  );
};

export default FoodInput;
