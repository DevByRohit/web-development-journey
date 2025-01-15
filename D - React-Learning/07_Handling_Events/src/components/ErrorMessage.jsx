const ErrorMessage = ({ foodItems }) => {
  return foodItems.length === 0 && <h2>No food items found.</h2>;
};

export default ErrorMessage;
