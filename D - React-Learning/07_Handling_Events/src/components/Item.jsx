import styles from "./Item.module.css";

const Item = (props) => {
  return (
    <>
      <li
        className={`${styles.listStyle} list-group-item ${
          props.bought && "active"
        }`}
      >
        {props.foodName}
        <button
          className={`${styles.button} btn btn-info`}
          onClick={props.onBuyButton}
        >
          {"Buy"}
        </button>
      </li>
    </>
  );
};

export default Item;
