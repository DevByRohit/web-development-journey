import { useState } from "react";
import styles from "./FoodItems.module.css";
import Item from "./Item";

const FoodItems = (props) => {
  let [activeItems, setActiveItems] = useState([]);

  let handleBuyButton = (item, event) => {
    let newItem = [...activeItems, item];
    setActiveItems(newItem);
  };

  return (
    <ul className={`${styles.ulStyle} list-group`}>
      {props.foodArr.map((item) => {
        return (
          <Item
            key={item}
            foodName={item}
            bought={activeItems.includes(item)}
            onBuyButton={(event) => handleBuyButton(item, event)}
          ></Item>
        );
      })}
    </ul>
  );
};

export default FoodItems;
