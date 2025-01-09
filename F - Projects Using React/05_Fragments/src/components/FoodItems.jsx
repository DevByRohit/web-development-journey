import Item from "./Item";

const FoodItems = ({ itemsArray }) => {
  // let { itemsArray } = props; // Object Destructuring
  // let foodItems = ["Dal", "Rice", "Milk", "Eggs", "Ghee", "Vegetables"];
  return (
    <center>
      <ul>
        {itemsArray.map((items) => (
          <Item key={items} foodItem={items}></Item>
        ))}
      </ul>
    </center>
  );
};

export default FoodItems;
