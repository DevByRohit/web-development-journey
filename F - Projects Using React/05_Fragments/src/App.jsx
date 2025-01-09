import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // Fragments: Allow grouping of multiple elements without extra (DOM) Document Objects Model nodes.
  // We have two sysntax to add fragments 1. React.Fragment we need to import React from "react" and 2. <> </> don't import React from "react

  let foodItems = ["Dal", "Rice", "Milk", "Eggs", "Ghee", "Vegetables"];

  // let foodItems = [];

  // if (foodItems.length === 0) {
  //   return <h2>No food items found</h2>;
  // } this is a first example of conditional rendering by using (if else)statements

  // let item = foodItems.length === 0 ? <h2>No food items found</h2> : null; this is a second example of conditional rendering by using ternary operator

  // let items = foodItems.length === 0 && <h2>No food items found</h2>;
  // this is a third example of conditional rendering by using logical operators

  return (
    <React.Fragment>
      <h2 className="food-heading">Food Items By Map Methods</h2>
      {/* {items} */}

      <ErrorMessage itemsArray={foodItems}></ErrorMessage>
      <FoodItems itemsArray={foodItems}></FoodItems>

      {/* <ul>
          {foodItems.map((items) => (
            <li key={items} className="list-group-item">
              {items}
            </li>
          ))}
        </ul> */}
    </React.Fragment>
  );
}

export default App;
