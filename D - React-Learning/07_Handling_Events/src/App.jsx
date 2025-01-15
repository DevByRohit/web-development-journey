import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import ErrorMessage from "./components/ErrorMessage";

// 1. React events use camelCase, eg., onClick.
// 2. Uses synthetic events, not direct browser events.
// 3. Event handlers can be functions or arrow functions.
// 4. Use onChange to for controlled from inputs.
// 5. Avoid inline arrow function in JSX for performance.
function App() {
  let [foodItems, setFoodItems] = useState([]);
  // let [toShow, setToShow] = useState("Food Item Entered by user");
  // let useStateArr = useState("Food Item Entered by user: ");
  // let currentState = useStateArr[0];
  // let useStateMethod = useStateArr[1];

  // const handleOnChange = (event) => {
  //   console.log(event.target.value);
  //   setToShow(event.target.value);
  // };

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      setFoodItems([...foodItems, newFoodItem]);
    }
  };

  return (
    <>
      <Container>
        <h1 className="foodHeading">Healthy Foods</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage foodItems={foodItems}></ErrorMessage>
        <FoodItems foodArr={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
