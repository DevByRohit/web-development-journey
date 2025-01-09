import styles from "./Item.module.css";

let Item = (props) => {
  let { foodItem } = props; // Object Destructuring
  return (
    <>
      {/* <li className="list-group-item">{props.foodItem}</li> */}
      <li className={`${styles["kg-items"]}`}>
        <span className={styles["kg-span"]}>{foodItem}</span>
      </li>
      {/* both syntax are write */}
    </>
  );
};

export default Item;
